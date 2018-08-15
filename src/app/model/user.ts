export class User{
    uid:string;
    id:string;
    password:string;
    name:string;
    type:string;
    signup_date:string;
    last_date:string;
    flagYn:string;

    constructor(uid?:string, id?:string,password?:string,name?:string,type?:string,signup_date?:string,last_date?:string,flagYn?:string){
        this.uid=uid;
        this.id=id;
        this.password=password;
        this.name=name;
        this.type=type;
        this.signup_date=signup_date;
        this.last_date=last_date;
        this.flagYn=flagYn;
    }

}