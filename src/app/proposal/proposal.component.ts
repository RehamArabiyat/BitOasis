import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.sass']
})
export class ProposalComponent implements OnInit {

  constructor(   private router: Router) { }

  ngOnInit(): void {
  }
  navigateUrl(){

    this.router.navigateByUrl("propsalRequest");
  }
}
