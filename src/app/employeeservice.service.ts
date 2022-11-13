import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  employee1 : string[] = ["Sankar","121068","DTCC"]
  employee2 : string[] = ["Chandra","120057","DTCC"]
  employee3 : string[] = ["Anto","9023","BNYM"]
  employee4 : string[] = ["Vijay","10513","FSS"]

  constructor() { }
}
