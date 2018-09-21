import { Component, OnInit } from '@angular/core';
import { EmpHttpService } from './emp-http.service';
import { Emp } from './emp.model';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  employees: any = [
    { id: 1, firstName: 'AA', lastName: 'aa' },
    { id: 2, firstName: 'BB', lastName: 'bb' },
    { id: 3, firstName: 'CC', lastName: 'cc' },
    { id: 4, firstName: 'DD', lastName: 'dd' },
  ];
  errorMessage: string;

  constructor(private empHttpService: EmpHttpService) { }

  ngOnInit() {
    this.getEmps();
  }

  getEmps() {
    this.empHttpService.getEmps()
        .subscribe(
          emps => this.employees = emps,
          error => this.errorMessage = <any>error);
  }

  addEmp(firstName: string, lastName: string) {
    alert('addEmp() # ' + firstName + ' ' + lastName);
  }

  removeEmp(person: any) {
    alert(JSON.stringify(person));

    let id = person.id;
    let targetIndex = this.employees.findIndex(emp => emp.id === id);
    this.employees.splice(targetIndex, 1);

    return false;
    // preventDefault
    // stopPropagation
  }

  onSubmit(f) {
    if (f.valid) {
      var emp = f.value;
      console.log(emp);

      alert('onSubmit() # ' + emp.firstName + ' ' + emp.lastName);

      let maxId = Math.max(...this.employees.map(emp => emp.id));

      this.employees.push({
        id: maxId + 1,
        firstName: emp.firstName,
        lastName: emp.lastName
      });
    }
  }

}
