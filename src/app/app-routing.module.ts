import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagePoliciesComponent } from './header/manage-policies/manage-policies.component';
import { ManageProposalsComponent } from './header/manage-proposals/manage-proposals.component';
import { PolicyDetailsComponent } from './header/policy-details/policy-details.component';
import { ProposalRequestComponent } from './proposal-request/proposal-request.component';
import { ProposalComponent } from './proposal/proposal.component';


const routes: Routes = [  { path: "", component: ProposalComponent },
{path:"propsalRequest", component: ProposalRequestComponent},
{
  path: "ManageProposals",
  component: ManageProposalsComponent,
}
,
{
path: "managePolicies",
component: ManagePoliciesComponent,
},
{
  path: "policyDetails",
  component: PolicyDetailsComponent,
  }
// {
//   path: "ManageProposals",
//   loadChildren: () =>
//     import("src/app/menua/menua.module").then(
//       (m) => m.MenuaModule
//     ),
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
