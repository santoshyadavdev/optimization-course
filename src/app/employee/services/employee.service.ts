import { Injectable } from '@angular/core';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployeeList(): Employee[] {
    return [
      {
        firstName: 'Employee1', lastName: 'test', address2: '', address: 'Mumbai',
        city: 'Pune',
        company: 'test1',
        postalCode: '40080',
        shipping: 'Test',
        state: 'Test'
      },
      {
        firstName: 'Employee2', lastName: 'test', address2: '', address: 'Mumbai',
        city: 'Pune',
        company: 'test1',
        postalCode: '40080',
        shipping: 'Test',
        state: 'Test'
      },
      {
        firstName: 'Employee3', lastName: 'test', address2: '', address: 'Mumbai',
        city: 'Pune',
        company: 'test1',
        postalCode: '40080',
        shipping: 'Test',
        state: 'Test'
      }
    ]
  }
}
