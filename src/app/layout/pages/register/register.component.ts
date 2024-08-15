import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-regester',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegesterComponent {
  registerForm:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{8,}$/)]),
    repassword:new FormControl(null,[Validators.required]),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  },this.checkRepasswordMatch)
  checkRepasswordMatch(g:AbstractControl)
  {
    if(g.get('password')?.value === g.get('repassword')?.value){
      return null;
    }
    else{
      g.get('repassword')?.setErrors({mismatch:true});
      return {mismatch:true};
    }
  }
  submitRegister()
  {
    console.log(this.registerForm);
  }
}
