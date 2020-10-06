import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LocalLookups } from '../core/config/local-lookups';
import { PropsalService } from '../services/http-services/propsal.service';
var localLookups = new LocalLookups();
declare var $: any;
@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.sass']
})
export class ProposalComponent implements OnInit ,AfterViewInit  {
  vehicleModelMaster: any;
  vehicleMakerMaster: any;
  myForm: any;
  repairOptions;
  selected ;
  vehicleYears =[];
  deductibleValue =[1000,2000,3000,4000,5000];
  hijrimonths;
  dateType ="H";
  years ;
  veichelUsageOptions;
  vehicleBodyCodeList;

  constructor(   private router: Router ,
    private PropsalService : PropsalService ) { }

  ngOnInit(): void {
    this.lookups();
  }
  navigateUrl(){

    this.router.navigateByUrl("propsalRequest");
  }
ngOnChanges(): void {
  $('#kt_select2_1').on('change', (event) => {
    this.onChange(event.target.value);
      //you can use the selected value
  });

}

createForm() {
  this.myForm = new FormGroup({
    vehicleMaker: new FormControl("", [Validators.required])
  });
}

  onChange(makeId) {
    this.PropsalService.getVehicleModelMaster(makeId).subscribe(
      (res) => {
        this.vehicleModelMaster = res;
      },
      (error) => {
        console.log(error);
      }
      );

      $('#kt_select2_1').select2("destroy");
      $('.select2').select2({
        placeholder: 'Select a state'
    });
// possible loop

  }

  ngAfterViewInit(){
    $('#kt_select2_1').on('change', (event) => {
      this.onChange(event.target.value);
        //you can use the selected value
    });
  }
  lookups(){
    this.repairOptions = localLookups.repairOptions;
    this.hijrimonths = localLookups.hegeriMonths;
    this.getYears();
    for(let i = 2020 ;i>= 1940 ;i--){
     this.vehicleYears.push(i);
    }
    this.PropsalService.getVehicleMakerMaster().subscribe(
      (res) => {
        this.vehicleMakerMaster = res;
        this.onChange(res[0].Id)
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );

    this.PropsalService.getveicheUsage().subscribe(
      (res) => {

        this.veichelUsageOptions = res;
      },
      (error) => {
        console.log(error);
      }

    );

    this.PropsalService.getVehicleBodyTypesAsync().subscribe(
      (res) => {
        this.vehicleBodyCodeList = res;
      },
      (error) => {
        console.log(error);
      }
    );


  }


  getYears(){
    if (this.dateType === "H") {
      // convert meladi years to hijri
      this.years = [];

      var hijriStartDAte = Math.round((1931 - 622) * (33 / 32));
      var dateNowMinus15 = new Date().getFullYear() - 15;
      var hijriEndtDate = Math.round((dateNowMinus15 - 622) * (33 / 32));

      for (var i = hijriStartDAte; i < hijriEndtDate; i++) {
        var hijriYear = i.toString();
        this.years.unshift(hijriYear);
      }
    }
    if (this.dateType === "G") {
      this.years = [];

      for (var i = 1931; i < new Date().getFullYear() - 15; i++) {
        this.years.unshift(i);
      }
    }
  }

}
