import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { EmpComponent } from './emp/emp.component';
import { StaffComponent } from './staff/staff.component';


@NgModule({
  declarations: [
    EmpComponent,
    StaffComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ],
  
})
export class CompanyModule { }
