import {Component} from "@angular/core";
import {Student} from "../student";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: "students-view",
  templateUrl: "app/students/view/students.view.component.html",
  styleUrls: ["app/students/view/students.view.component.css"],
})
export class StudentsViewComponent {
  constructor(private  route: ActivatedRoute) {
  }

  student: Student;

  ngOnInit() {
    this.route
      .data
      .subscribe(inputData => {
        this.student = (inputData as any).student;
      })
  }
}
