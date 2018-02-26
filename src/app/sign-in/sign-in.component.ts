import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user: Observable<firebase.User>;

  name: string;
  email: string;
  password: string;
  imageURL: string;
  emailSignFormHide = true;
  emailRegisterFormHide = true;
  returnMsg: string;

  @Output() userSignedEvent = new EventEmitter<string>();

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = this.afAuth.authState;
  }

  ngOnInit() {
  }

  facebookSignIn() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  // facebookSignIn() {
  //   this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
  //     .then((res: any) => {
  //       firebase.auth().currentUser.linkWithCredential(res.credential)
  //         .then((user) => {
  //           console.log('OK');
  //         }, (err) => {
  //           console.log('ERRO');
  //         });
  //     }).catch((err: any) => {
  //       firebase.auth().currentUser.linkWithCredential(err.credential)
  //         .then((user) => {
  //           console.log('OK');
  //         }, (erro) => {
  //           console.log('ERRO');
  //         });
  //     });
  // }

  facebookSignOut() {
    this.afAuth.auth.signOut();
  }

  // Email
  showEmailSignForm() {
    this.emailSignFormHide = !this.emailSignFormHide;
  }

  emailSignIn() {
    const credential = firebase.auth.EmailAuthProvider.credential(this.email, this.password);
    firebase.auth().currentUser.linkWithCredential(credential)
      .then((user) => {
        console.log('OK');
      }, (err) => {
        console.log('ERRO');
      });
  }

  showEmailRegisterForm() {
    this.emailRegisterFormHide = !this.emailRegisterFormHide;
  }

  emailRegister() {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((res: any) => {
      console.log(res);
      const user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: this.name,
        photoURL: this.imageURL
      });
      this.showReturnMsg('Account created successfully!');
      this.userSigned();
    }).catch((err: any) => {
      this.showReturnMsg(err.message);
    });
  }

  userSigned() {
    this.userSignedEvent.emit(this.name);
    this.router.navigateByUrl('my-account');
  }

  showReturnMsg(msg) {
    this.returnMsg = msg;
  }

  formClean() {
    this.name = '';
    this.email = '';
    this.password = '';
    this.imageURL = '';
  }
}

