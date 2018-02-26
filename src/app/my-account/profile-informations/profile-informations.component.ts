import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmailAuthProvider } from '@firebase/auth-types';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-profile-informations',
  templateUrl: './profile-informations.component.html',
  styleUrls: ['./profile-informations.component.css'],
  providers: [AngularFireDatabase]
})
export class ProfileInformationsComponent implements OnInit {

  profile: Observable<any[]>;
  profileRef: AngularFireList<any>;

  name: string;
  email: string;
  password: string;

  btnInitialState = true;
  editFieldsReadonly = true;
  btnSaveHidden = true;

  constructor(db: AngularFireDatabase) {
    this.profile = db.list('profiles').valueChanges();
    this.profileRef = db.list('profiles');
    this.getProfile();
  }

  ngOnInit() {
  }

  getProfile() {
    this.profile.forEach(element => {
      this.name = element[0].name;
      this.email = element[0].email;
      this.password = element[0].password;
    });
  }

  editProfile(form: NgForm) {
    this.editFieldsReadonly = !this.editFieldsReadonly;
    this.btnSaveHidden = !this.btnSaveHidden;
    this.btnInitialState = !this.btnInitialState;
    this.getProfile();
    form.control.markAsPristine();
    form.control.markAsUntouched();
  }

  updateProfile(form: NgForm) {
    this.profileRef.update('-L6CNr-tUJiid3zDe_bK',
      {
        name: form.value.name,
        email: form.value.email,
        password: form.value.password
      });
      this.editProfile(form);
  }
}
