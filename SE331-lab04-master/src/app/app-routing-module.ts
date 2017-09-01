import {RouterModule, Routes} from "@angular/router";
import {StudentsViewComponent} from "./students/view/students.view.component";
import {StudentsAddComponent} from "./students/add/students.add.component";
import {StudentsComponent} from "./students/list/students.component";
import {FileNotFoundComponent} from "./filenotfound/file-not-found-component";
import {NgModule} from "@angular/core";

const appRoutes: Routes=[

  {path: '**', component: FileNotFoundComponent},
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



