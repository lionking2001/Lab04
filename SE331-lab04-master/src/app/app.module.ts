import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {StudentsComponent} from './students/list/students.component';
import {StudentsAddComponent} from './students/add/students.add.component';
import {StudentsViewComponent} from './students/view/students.view.component';
import {FormsModule} from '@angular/forms';
import {StudentsDataService} from './service/students-data.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [AppComponent,
    StudentsComponent,
    StudentsAddComponent,
    StudentsViewComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  bootstrap: [AppComponent],
  providers: [StudentsDataService],
})
export class AppModule {
}
