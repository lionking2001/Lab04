import {Component} from '@angular/core';
import {Student} from '../student';

@Component({
 selector: 'students-add',
 templateUrl: 'app/students/add/students.add.component.html',
 styleUrls:['app/students/add/students.add.component.css']
})
export class StudentsAddComponent {
	students: Student[];

	upQuantity(student:Student){
		student.penAmount++;
	}

	downQuantity(student:Student){
		if (student.penAmount >0)
			student.penAmount--;
	}

}
