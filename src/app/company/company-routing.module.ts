import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpComponent } from './emp/emp.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  {path:"emp",component:EmpComponent},
  {path:"staff",component:StaffComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
