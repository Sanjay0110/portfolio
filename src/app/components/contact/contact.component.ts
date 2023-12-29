import { Component,OnInit,OnDestroy } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  contactForm!: FormGroup;

  emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ["",[Validators.required, Validators.minLength(5)]],
      email: ["",[Validators.required]],
      subject:[""],
      moreDetails: [""],
    },{ validators: this.customValidation })
  }

  customValidation(control:FormControl){
    if(control){
      if(control.get('email')?.value && this.emailRegex.test(control.get('email')?.value)){
        control.get('email')?.setErrors({'email':true})
      }
    }
  }

  onSubmit(){
    if(this.contactForm.valid){
      console.log('form submitted')
    }
  }

  ngOnDestroy(): void {
    
  }
}
