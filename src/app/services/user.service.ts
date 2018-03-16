import { Injectable } from '@angular/core';
import { AngularFireDatabase,  AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { AppUser } from '../shared/models/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  saveUser(user: firebase.User) {
    this.db.object('/users/' + user.uid)
    .update({
      name: user.displayName,
      email: user.email
    });
  }

  get(uid: string): Observable<any> {
    return this.db.object('/users/' + uid).valueChanges();
  }
}
