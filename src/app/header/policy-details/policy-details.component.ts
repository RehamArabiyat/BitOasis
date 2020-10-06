import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.sass']
})
export class PolicyDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateUrl(url){
    this.router.navigateByUrl(url);
   }
}
