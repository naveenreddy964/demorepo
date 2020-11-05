export class ClassDemo
{

//properties, methods, constuctor
username: string;
password: string;
hno:number;
constructor(hno:number){
    this.hno=hno;
}
    


getUsername()
{
return this.username;
}
setUsername(username:string){
    this.username=username;
}
getHno(){
    return this.hno;
}
}
