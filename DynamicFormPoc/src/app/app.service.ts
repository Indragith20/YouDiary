import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Validators, FormGroup, FormArray, FormBuilder,FormControl } from '@angular/forms';

@Injectable()

export class AppService{
	
	constructor(private http:Http){}

	postTemplate(form:any){
		var headers = new Headers();
        headers.append('Content-type','application/json');
        console.log(form.value);
		return this.http.post('http://localhost:4000/api/postTemplate',form.value,{headers:headers})
                .map(response => response.json());
	}


	getFormTemplate(formName:any){
		var headers = new Headers();
        headers.append('Content-type','application/json');
        return this.http.get('http://localhost:4000/api/getTemplate?formName='+formName,{headers:headers})
        		.map(response=>response.json());
	}

	toFormGroup(questions: any ) {
	    let group: any = {};

	    questions.forEach(question => {
	      group[question.name] = question.required ? new FormControl(question.value || '', Validators.required)
	                                              : new FormControl(question.value || '');
	    });
	    return new FormGroup(group);
  	}
}