import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import {AppService} from './app.service';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: [
      'app.component.css'
    ],
    providers:[AppService]
})
export class AppComponent implements OnInit {
    public myForm: FormGroup; // our form model
    public askQuestions:boolean = false;
    public askOptions:boolean = false;
    public submitOption:boolean = false;
    public userIndex:number = 0;
    public getTemplateView:boolean = false;
    

    // we will use form builder to simplify our syntax
    constructor(private _fb: FormBuilder,private cdRef: ChangeDetectorRef,private appService:AppService) { }

    ngOnInit() {
    // we will initialize our form here
        this.myForm = this._fb.group({
          formName:['',[Validators.required, Validators.minLength(5)]],
          region: ['', [Validators.required, Validators.minLength(5)]],
          indexArea:['',[Validators.required]],
          questions: this._fb.array([
              this.getQuestions()
            ])
        });

        let intialValue = this.myForm.get('questions') as FormArray; 
        this.userIndex = intialValue.length;
    }

    //which view needs to be shown
    templateView(){
      this.getTemplateView = true;
    }

    designerView(){
     this.getTemplateView = false; 
    }



    //check whether it is textbox or other inputs 
    validateQue(myForm,i){
      if(myForm.value.questions[i].type == "textbox"){
        this.save(myForm);
        this.submitOption = true;
      }
      else{
        console.log(myForm);
        //const control = <FormArray>this.myForm.controls['questions'].options;
        const control = this.myForm.get(`questions.${i}.options`) as FormArray;
        //console.log(control);
        control.push(this.initOptions());
        console.log(this.myForm);
        this.askOptions = true;  
      }
    }

    //Intialize the questions array 
    getQuestions(){
        return this._fb.group({
          name:['',Validators.required],
          type:['',Validators.required],
          options:this._fb.array([])
        })
      }

    //Intialize the options array
    initOptions() {
      // initialize our address
          return this._fb.group({
              label: ['', Validators.required],
              typeName:['',Validators.required],
              typeValue: ['']
          });
       }


        next(){
          this.askQuestions=true;
          //this.myForm.controls.region.disabled = true;
        }


        addOption(i){
          this.submitOption = true;
          const control = this.myForm.get(`questions.${i}.options`) as FormArray;
          control.push(this.initOptions());
        }

        addQuestion(){
          const control = this.myForm.get('questions') as FormArray;
          control.push(this.getQuestions());
          this.userIndex = control.length;
          //this.cdRef.detectChanges();
        }
       save(model:any) {
              // call API to save customer
              console.log(model);
          }

    
      //pagination logic
      previousPage(index:any){
        if(index>0){
          this.userIndex = index-1;  
        }
      }

      nextPage(index:any){
          let currentLength = this.myForm.get('questions') as FormArray;
          if(currentLength.length!=index){
            this.userIndex = index + 1;          
          }
      }



      //submitting the final template
      submitTemplate(filledOutForm:any){
        console.log(filledOutForm);
        this.appService.postTemplate(filledOutForm).subscribe(response=>console.log(response));
      }
}