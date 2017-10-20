import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import {PreviewComponent} from './PreviewComponent/preview.component';
import {ViewTemplateComponent} from './ViewTemplateComponent/viewtemplate.component';
import {DynamicFormQuestionComponent} from './DynamicFormComponent/dynamic-form-question.component'

@NgModule({
  declarations: [
    AppComponent,PreviewComponent,ViewTemplateComponent,DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,NgxPaginationModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
