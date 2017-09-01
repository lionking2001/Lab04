import {Component, OnInit} from "@angular/core";
import {Student} from '../student';

import {Router} from "@angular/router";
import {StudentsDataDBService} from "../../service/students-data-db-service";

@Component({
 selector: 'students',
 templateUrl: 'app/students/list/students.component.html',
 styleUrls:['app/students/list/students.component.css']
})
export class StudentsComponent implements OnInit{
	students: Student[];

  constructor (private studentDataDbService:StudentsDataDBService,private router:Router){}
  ngOnInit(){
    this.studentDataDbService.getStudentsData()
      .subscribe(students => this.students= students);
  }
	averageGpa(){
		let sum = 0;
		if (Array.isArray(this.students)){
			for(let student of this.students){
				sum += student.gpa;
			}
			return sum/this.students.length;
		}else{
			return null;
		}

	}

	upQuantity(student:Student){
		student.penAmount++;
	}

	downQuantity(student:Student){
		if (student.penAmount >0)
			student.penAmount--;
	}
showDetail(student: Student){
	  // this.router.navigate(['/detail',student.id]);
	  let link=['/detail',student.id];
	  this.router.navigate(link);

}
}
