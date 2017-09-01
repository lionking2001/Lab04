import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {StudentsComponent} from './students/list/students.component';
import {StudentsAddComponent} from './students/add/students.add.component';
import {StudentsViewComponent} from './students/view/students.view.component';
import {FormsModule} from '@angular/forms';

import {HttpModule} from '@angular/http';
import {MenuComponent} from "./menu/menu.component";
import {RouterModule, Routes} from "@angular/router";
import {FileNotFoundComponent} from "./filenotfound/file-not-found-component";
// import {AppRoutingModule} from "./app-routing-module";
import {StudentRoutingModule} from "./students/student-routing.module";
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from "@angular/common";

import {ROUTER_PROVIDERS} from "@angular/router/src/router_module";
import {StudentsDataDBService} from "./service/students-data-db-service";


const appRoutes: Routes = [



  {path: 'add',component: StudentsAddComponent},
  {path: 'list',component: StudentsComponent},
  {path: '**', component: FileNotFoundComponent},
  {path: 'detail/:id',component: StudentsViewComponent}
];


@NgModule({
  declarations: [AppComponent,
    StudentsComponent,
    StudentsAddComponent,
    StudentsViewComponent,
    MenuComponent,
    FileNotFoundComponent],

  imports: [BrowserModule, FormsModule, HttpModule,StudentRoutingModule],
  bootstrap: [AppComponent],
  providers: [StudentsDataDBService],


})
export class AppModule {

}
