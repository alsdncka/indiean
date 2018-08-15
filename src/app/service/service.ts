import {Injectable, NgZone} from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
 
import { User } from '../model/user';
import { Observable, observable} from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Injectable()
export class UserService{
    private baseUrl ='http://localhost:8080/getUsers';
    private userList:User[] =new Array();
    private userListSearch:User[]=new Array();

    constructor(private http:HttpClient,private zone:NgZone){

    }

    getUserList():Observable<any>{
        


        return new Observable<any>(obs=>{
            const eventSource = new EventSource(this.baseUrl);

            eventSource.onmessage=event=>{
           
                
                        
                let json=JSON.parse(event.data);
                this.userList.push(new User(json['uid'],json['id'],json['password'],json['name'],json['type'],json['sign_date'],json['last_date'],json['flagYn']));

                this.zone.run(()=>obs.next(this.userList));
              
                 eventSource.onerror=(error) =>{
                this.userList=new Array();
                 }
     
            }
        
            return ()=>eventSource.close();
        });


   
       
    }



}