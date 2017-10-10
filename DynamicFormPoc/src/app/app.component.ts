import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
// import { Customer } from './customer.interface';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
    public myForm: FormGroup; // our form model

    // we will use form builder to simplify our syntax
    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
    // we will initialize our form here
        this.myForm = this._fb.group({
          name: ['', [Validators.required, Validators.minLength(5)]],
          type:['',[Validators.required]],
          addresses: this._fb.array([
              
          ])
      });
    }


    initAddress() {
      // initialize our address
      return this._fb.group({
          street: ['', Validators.required],
          postcode: ['']
      });
    }

    nextStep(myForm){
      console.log(myForm.value);
      if(myForm.value.type=="textbox"){

        this.save(myForm);
      }
      else{
        this.addAddress();
      }
    }

    removeAddress(i: number) {
      // remove address from the list
      const control = <FormArray>this.myForm.controls['addresses'];
      control.removeAt(i);
    }
  

  addAddress() {
    // add address to the list
    const control = <FormArray>this.myForm.controls['addresses'];
    control.push(this.initAddress());
}



    save(model:any) {
        // call API to save customer
        console.log(model);
    }
}