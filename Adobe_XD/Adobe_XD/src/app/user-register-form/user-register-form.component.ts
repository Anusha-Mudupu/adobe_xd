import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-user-register-form',
  templateUrl: './user-register-form.component.html',
  styleUrls: ['./user-register-form.component.css']
})
export class UserRegisterFormComponent {
  registerForm: FormGroup
  submitted = false

  passwordPtn = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'
  constructor(private formBuilder: FormBuilder, private userLogin: UserLoginService, private router: Router, private http: HttpClient) {

    this.registerForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      cpassword: ['', Validators.required],
    },
      {
        validators: this.mustMatch('password', 'cpassword')
      })
  }
  ngOnInit() {

  }
  mustMatch(password: any, cpassword: any) {
    return (formGroup: FormGroup) => {
      const passwordcontrol = formGroup.controls[password];
      const cpasswordcontrol = formGroup.controls[cpassword];
      if (passwordcontrol.value !== cpasswordcontrol.value) {
        cpasswordcontrol.setErrors({ mustMatch: true })
      } else {
        cpasswordcontrol.setErrors(null);
      }
    }
  }
  onSubmit() {
    this.submitted = true
    if (this.registerForm.valid) {
      this.http.post('  http://localhost:3000/userRegister', this.registerForm.value).subscribe((_data) => {
        alert(" sccessfully registered")
        this.router.navigate(['loginpage'])
      })
    }
  else {
          alert("something went wrong")
        }
       

  // if(this.registerForm.invalid){
  //   return
  // }
  // alert("Success")
  // console.log(this.registerForm)
}
    // Space(event:any){
    // console.log(event)
    // console.log(event.target.selectionStart)
    // if(event.target.selectionStart ===0 && event.code === 'Space'){
    // event.preventDefault()
    // }
    // }
  }


