import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})

export class IonicAuthService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }  


  //Creation d'un nouveau utilisateur
  createUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.angularFireAuth.createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }


  // Log in
  signinUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.angularFireAuth.signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }


  //Log out
  signoutUser() {
    return new Promise<void>((resolve, reject) => {
      if (this.angularFireAuth.currentUser) {
        this.angularFireAuth.signOut()
          .then(() => {
            resolve();
          }).catch(() => {
            reject();
          });
      }
    })
  }


  //Les details d'un utilisateur
  userDetails() {
    return this.angularFireAuth.user
  }


  //Forgot Password
  resetPassword(email:string )  { 
    return this.angularFireAuth.sendPasswordResetEmail(email) 
      .then( res  => { 
        console.log ('was mailed'); 
      }).catch (error => { 
        console.log(error); 
      }); 
 }

}