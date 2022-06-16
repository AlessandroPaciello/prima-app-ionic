/* eslint-disable max-len */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/service/user/User.moduel';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  registationForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit() {
    this.registationForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      name:  ['', [Validators.required]],
      lastName:  ['', [Validators.required]],
      age:  ['', [Validators.required]],
      country:  ['', [Validators.required]]
    });
  }

  onRegistation() {
    const user = new User(this.registationForm.value.email, this.registationForm.value.name, this.registationForm.value.lastName, this.registationForm.value.age, this.registationForm.value.country);
    this.httpClient.post('https://ionic-app-35f54-default-rtdb.europe-west1.firebasedatabase.app/users.json', {...user, id: null})
      .pipe(tap( res => console.log(res))).subscribe();
  }

}
