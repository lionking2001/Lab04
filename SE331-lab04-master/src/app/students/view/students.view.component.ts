import {Component} from '@angular/core';
import {Student} from '../student';
@Component({
 selector: 'students-view',
 templateUrl: 'app/students/view/students.view.component.html',
 styleUrls:['app/students/view/students.view.component.css']
})
export class StudentsViewComponent {
	students: Student[];
}
