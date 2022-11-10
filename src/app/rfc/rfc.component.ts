import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-rfc',
  templateUrl: './rfc.component.html',
  styleUrls: ['./rfc.component.css']
})
export class RfcComponent{

  employee = new FormControl('Test');

  employeeForm = new FormGroup({
    employeeName : new FormControl(''),
    designation : new FormControl(''),
    address: new FormGroup({
      city : new FormControl(''),
      country : new FormControl('')
    })
  });


  onSubmit(){
    alert(this.employeeForm.get('employeeName')?.value);
  }

}
