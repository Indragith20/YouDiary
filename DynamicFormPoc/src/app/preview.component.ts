import {Component,Input} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
	selector:'form-preview',
	templateUrl:'preview-component.html'
})

export class PreviewComponent{
	@Input() formPre:FormGroup;
}