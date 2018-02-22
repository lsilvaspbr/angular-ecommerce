import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-profile-informations',
  templateUrl: './profile-informations.component.html',
  styleUrls: ['./profile-informations.component.css'],
  providers: [ AngularFireDatabase ]
})
export class ProfileInformationsComponent implements OnInit {

  profile: Observable<any[]>;
  profileRef: AngularFireList<any>;

  constructor(db: AngularFireDatabase) {
    this.profile = db.list('profiles').valueChanges();
    this.profileRef = db.list('profiles');
  }

  ngOnInit() {
    console.log(this.profile);
  }

  profileAdd(form: NgForm) {
    // console.log(form.value);
    this.profileRef.push({
                            name: form.value.name,
                            email: form.value.email,
                            phone: form.value.phone
                        });
    // this.clearForm();
  }

}
