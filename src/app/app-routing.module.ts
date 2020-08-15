import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  {
    path: 'department',
    loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule),
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'employee', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
