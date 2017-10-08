import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
  
})
export class LoginComponent implements OnInit {
  colorTheme = 'theme-default';
  bsConfig: Partial<BsDatepickerConfig>;
  registerPageActive:boolean = true;
  loginPageActive:boolean=false;

  constructor() { 
    this.bsConfig = Object.assign({}, {containerClass: this.colorTheme});
  }

  ngOnInit() {
  }

  public setRegister(){
    this.registerPageActive=true;
    this.loginPageActive=false;
}
public setLogin(){
    this.registerPageActive=false;
    this.loginPageActive=true;
}

}
