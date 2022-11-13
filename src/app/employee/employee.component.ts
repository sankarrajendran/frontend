import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeserviceService]
})
export class EmployeeComponent implements OnInit {


  constructor(private employeeser : EmployeeserviceService) { }

  ngOnInit(): void {
  }

  getEmp1() : string[]{
    return this.employeeser.employee1;
  }
  getEmp2() : string[]{
    return this.employeeser.employee2;
  } 
  getEmp3() : string[]{
    return this.employeeser.employee3;
  }
  getEmp4() : string[]{
    return this.employeeser.employee4;
  }
}
