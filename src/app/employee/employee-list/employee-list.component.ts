import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  empList: Employee[] = [];

  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {

  }

  getEmployee() {
    this.empList = this.empService.getEmployeeList();
  }

  // trackByName(i: number, emp: Employee) {
  //   return emp.firstName;
  // }

}
