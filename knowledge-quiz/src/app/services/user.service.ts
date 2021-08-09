import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class UserService {

    apiURL = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(this.apiURL + `/users`);
    }

    getById(id: number) {
        return this.http.get(this.apiURL + `/users` + id);
    }

    register(user: User) {
        return this.http.post(this.apiURL + `/users`, user);
    }

    update(user: User) {
        return this.http.put(this.apiURL + `/users` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(this.apiURL + `/users` + id);
    }
}