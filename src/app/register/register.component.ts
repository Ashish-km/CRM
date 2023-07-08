  import { Component } from '@angular/core';
  import { FormBuilder, Validators } from '@angular/forms';
  import { ToastrService } from 'ngx-toastr';
  import { AuthService } from '../service/auth.service';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
      
  })  
  export class RegisterComponent {
  constructor(private builder:FormBuilder,private toastr:ToastrService ,private service:AuthService ,private router:Router){

  }
    registerForm=this.builder.group ({
      id:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
      name:this.builder.control('',Validators.required),

      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')]],
    
      email:this.builder.control('',Validators.compose([ Validators.required,Validators.email])),
      gender:this.builder.control('male'),
      role:this.builder.control(''),
      isActive:this.builder.control(false)
    })
  reegistration() {
  console.log('this.registerForm.valid', this.registerForm.valid);
  if (this.registerForm.valid) {
    this.service.registerData(this.registerForm.value).subscribe(res => {
      this.toastr.success('Registration successful. Please contact admin to enable user access.');
      this.router.navigate(['login']);
    });
  } else {
    this.toastr.warning('Please enter valid data');
    }
  }
  }









  