import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-proposals',
  templateUrl: './manage-proposals.component.html',
  styleUrls: ['./manage-proposals.component.sass']
})
export class ManageProposalsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateUrlPropsal(){
    this.router.navigateByUrl("propsalRequest");
  }
}
