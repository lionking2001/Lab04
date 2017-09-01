import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
// import {Student} from "../students/student";
import "rxjs/add/operator/map";

import {Student} from "../students/student";

@Injectable()
export class StudentsDataService {
  constructor(private http: Http) {
  }

  getStudentsData() {
    let studentArray: Student[];
    return this.http.get("app/data/people.json")
      .map(res => res.json().students);


  }


  getStudent(id: number) {
    return ;

  }
}
