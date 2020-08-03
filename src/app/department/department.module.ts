import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [DepartmentComponent],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
  ]
})
export class DepartmentModule { }
