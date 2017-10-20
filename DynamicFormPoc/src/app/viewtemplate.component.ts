import {Component} from '@angular/core';
import {AppService} from '../app.service';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
	selector:'template-view',
	templateUrl: 'viewtemplate-component.html',
	providers:[AppService]
})

export class ViewTemplateComponent{
	public formFieldName:any;
	public customizedForm:FormGroup;
	public finalForm:FormGroup;
	public formready:boolean = false;

	constructor(private appService:AppService) {
	  
	}

	getTemplate(){
		this.appService.getFormTemplate(this.formFieldName)
						.subscribe(res=>{
							
							this.customizedForm =	res[0].formDetails[0];
							console.log(this.customizedForm);
							this.prepareForm(this.customizedForm);
						});
	}

	prepareForm(preform:any){
		console.log(preform.questions);
		this.finalForm = this.appService.toFormGroup(preform.questions);
		console.log(this.finalForm);
		this.formready = true;
	}

	onSubmit(){
		console.log("Idho Vandhuvittadhu");
		console.log(JSON.stringify(this.finalForm.value));
	}
}
