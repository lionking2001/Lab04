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
  {path: 'view', component: StudentsViewComponent},
  {path: 'add', component: StudentsAddComponent},
  {path: 'list', component: StudentsComponent},
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
