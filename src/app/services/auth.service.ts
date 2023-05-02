import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class AuthService {
    isAuth = false;

    login() {
        this.isAuth = true;
        console.log('Authorized', this.isAuth);
    }

    logout() {
        this.isAuth = false;
        console.log('Authorized', this.isAuth);
    }

    isLogin() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.isAuth)
            }, 3000);
        })
    }
}
