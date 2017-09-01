import {Component} from "@angular/core";
import {Student} from "../student";
import {ActivatedRoute, ParamMap, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';


import { OnInit } from '@angular/core';
import {StudentsDataDBService} from "../../service/students-data-db-service";

@Component({

  selector: "students-view",
  templateUrl: "app/students/view/students.view.component.html",
  styleUrls: ["app/students/view/students.view.component.css"],

})
export class StudentsViewComponent implements OnInit{

  constructor(private  route: ActivatedRoute,private studentDataService:StudentsDataDBService) {
  }
  student: Student;

  ngOnInit(): void  {
     this.route.params.switchMap((params:Params)=>this.studentDataService.getStudent(+params['id'])).subscribe((student=>this.student=student));

  }
}
