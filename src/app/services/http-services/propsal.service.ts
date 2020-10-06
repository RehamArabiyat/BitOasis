import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Constants from "../../core/config/constants";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PropsalService {
  constants = new Constants();
  constructor( private http: HttpClient,) { }

  getVehicleMakerMaster() {
    return this.http.get(this.constants.getVehicleMakerMaster);
  }


  getVehicleModelMaster(makeId) {
    return this.http.get(
      this.constants.getVehicleModelMastersByMakeId + "/" + makeId
    );
  }


  getlicenseTypes() {
    return this.http.get(this.constants.getLicenceTypes);
  }

  getVehicleBodyTypesAsync() {
    return this.http.get(this.constants.getVehicleBodyTypesAsync);
  }



  getveicheUsage(): Observable<any> {
    return this.http.get(this.constants.getveicheUsage);
  }


}
