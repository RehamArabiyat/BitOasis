import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { ManageProposalsComponent } from './manage-proposals/manage-proposals.component';
import { RouterModule, Routes } from '@angular/router';
//import { ManagePoliciesComponent } from '../header/manage-policies/manage-policies.component';

const routes: Routes = [
//   {
//     path: "",
//     component: ManageProposalsComponent,
//   }
// ,
// {
//   path: "managePolicies",
//   component: ManagePoliciesComponent,
// }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,   RouterModule.forChild(routes),
  ]
})
export class MenuaModule { }
