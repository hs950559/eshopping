import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AppUser } from '../shared/models/user';
import { switchMap } from 'rxjs/operators/switchMap';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(private userService: UserService, public afAuth: AngularFireAuth, private route: ActivatedRoute, private router: Router) {
    this.user$ = afAuth.authState;
  }

  loginWithGoogle() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.returnUrl = returnUrl;

    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((res) => {
      if (res) {
        this.userService.saveUser(res.user);
      }
      this.router.navigateByUrl(returnUrl);
    });
  }

  get appUser$(): Observable<AppUser> {
    return this.user$
      .switchMap(user => {
        if (user) { return this.userService.get(user.uid); }
        return Observable.of(null);
      });
  }

  logout() {
    return this.afAuth.auth.signOut();
  }
}
