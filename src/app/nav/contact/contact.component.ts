import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { posinteger } from 'src/app/customvalidators/posinteger';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  reservationForm: FormGroup = this.formbuilder.group({ 
    email: ['', [Validators.required, Validators.email]],
    name:  ['', [Validators.required, Validators.maxLength(40)]],
  });
  isSubmitted : boolean = false;


  constructor(private formbuilder : FormBuilder) { }

  ngOnInit(): void {
    this.reservationForm = this.formbuilder.group({
      firstName : ['',[Validators.minLength(2),Validators.required]],
      lastName : ["",[Validators.minLength(2),Validators.required]],
      email : ["",[Validators.email,Validators.required]],
      noOfPeople : [1,Validators.required],
      child : [0,Validators.required],
      acceptTandC : [false,Validators.requiredTrue],
      date : ["",Validators.required],
      time : ["",Validators.required],
    },{
      Validators: posinteger("noOfPeople"),
    }
    );
    

  }
print(){
  console.log(this.reservationForm.controls.noOfPeople.errors);
  
}
  get prefix() {
    return this.reservationForm.controls;
  }
  
  onSubmit(){
    console.log("on submitted called" + this.reservationForm);
    
    this.isSubmitted = true;
    if(this.reservationForm.invalid){
      return ;
    }
    console.table(this.reservationForm.value);
    console.table(this.reservationForm);
    alert("Reservation Sucessfull\n"  + JSON.stringify(this.reservationForm.value));
  }

  onReset() {
    this.isSubmitted = false;
    this.reservationForm.reset;
  }

}
