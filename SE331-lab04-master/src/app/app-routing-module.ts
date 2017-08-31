import {RouterModule, Routes} from "@angular/router";
import {StudentsViewComponent} from "./students/view/students.view.component";
import {StudentsAddComponent} from "./students/add/students.add.component";
import {StudentsComponent} from "./students/list/students.component";
import {FileNotFoundComponent} from "./filenotfound/file-not-found-component";
import {NgModule} from "@angular/core";

const appRoutes: Routes=[
  {
    path: 'view', component: StudentsViewComponent,
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
      }
    }
  },
  {path: 'add',component: StudentsAddComponent},
  {path: 'list',component: StudentsComponent},
  {path: '',  redirectTo: '/list',pathMatch: 'full'},
  {path: '**', component: FileNotFoundComponent}

];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}



