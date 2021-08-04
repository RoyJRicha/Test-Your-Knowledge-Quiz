export class User {
    id: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;
    constructor(obj: User){
        this.id = obj.id;
        this.userName = obj.userName;
        this.password = obj.password;
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
        this.token = obj.token;
    }
}