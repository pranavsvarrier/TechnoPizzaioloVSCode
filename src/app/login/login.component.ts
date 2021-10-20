import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  submit:boolean=false; 
    //Create FormGroup
    requiredForm!: FormGroup;
    constructor(private fb: FormBuilder) {
       this.myForm();
    }
 
    //Create required field validator for name
    myForm() {
       this.requiredForm = this.fb.group({
       number: ['', [Validators.required, Validators.pattern("[0-9 ]{10}")] ]
       });
    }

    onSubmit(){
      this.submit = true;
      if(this.requiredForm?.invalid){
        return;
      }
      alert("Success");
    }
  
  

  ngOnInit(): void {
   

  }

  

}
