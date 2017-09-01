
import {RouterModule, Routes} from "@angular/router";
import {StudentsViewComponent} from "./view/students.view.component";
import {StudentsAddComponent} from "./add/students.add.component";
import {StudentsComponent} from "./list/students.component";
import {FileNotFoundComponent} from "../filenotfound/file-not-found-component";
import {NgModule} from "@angular/core";

const studentRoutes: Routes=[
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
  {path: '**', component: FileNotFoundComponent},
  {path: 'detail/id',component: StudentsViewComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(studentRoutes,{useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class StudentRoutingModule{
}



