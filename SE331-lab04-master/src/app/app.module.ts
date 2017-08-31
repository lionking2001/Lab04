import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {StudentsComponent} from './students/list/students.component';
import {StudentsAddComponent} from './students/add/students.add.component';
import {StudentsViewComponent} from './students/view/students.view.component';
import {FormsModule} from '@angular/forms';
import {StudentsDataService} from './service/students-data.service';
import {HttpModule} from '@angular/http';
import {MenuComponent} from "./menu/menu.component";
import {RouterModule, Routes} from "@angular/router";
import {FileNotFoundComponent} from "./filenotfound/file-not-found-component";

const appRoutes: Routes = [
  {path: 'view', component: StudentsViewComponent,
    data:{
  student:{
    "id":2,
    "studentId":"SE-001",
    "name": "Prayuth",
    "surname": "The Minister",
    "gpa": 3.59,
    "image": "images/tu.jpg",
    "featured": false,
    "penAmount":15,
    "description": "The great man ever!!!!!!!!!!!!!!"
  }}
  },
  {path: 'add', component: StudentsAddComponent},
  {path: 'list', component: StudentsComponent},
  {path: '', redirectTo: '/list',pathMatch: 'full'},
  {path: '**', component: FileNotFoundComponent}
];

@NgModule({
  declarations: [AppComponent,
    StudentsComponent,
    StudentsAddComponent,
    StudentsViewComponent,
    MenuComponent,
    FileNotFoundComponent],

  imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
  bootstrap: [AppComponent],
  providers: [StudentsDataService],

})
export class AppModule {

}
