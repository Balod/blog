import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";

export const AuthGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean  => {

    const authServise = inject(AuthService);
    const router = inject(Router);

    return authServise.isLogin().then(
        isAuth => {
            if(isAuth) {
                return true;
            } else {
                router.navigate(['/'], {queryParams: {auth: false}});
                return false
            }
        }
    )
}

export const AuthGuardChild: CanActivateChildFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    return inject(AuthGuard)
}
