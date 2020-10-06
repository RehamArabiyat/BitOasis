
export default class Constants {


  public rootUrl = "https://prodservices.gonsure.com/";


  public lookupsIp = this.rootUrl + "v1/Lookups/";
    //lookups
    maritalStatus: string = this.lookupsIp + "MaritalStatus";
    educationLevels: string = this.lookupsIp + "Educations"; //----Async
    regions: string = this.lookupsIp + "Regions"; //----Async
    citiesByRegionId: string = this.lookupsIp + "GetCitiesByRegionId/";
    veicheNightParkings: string = this.lookupsIp + "VehicleNightParkings"; //---Async
    getveicheUsage: string = this.lookupsIp + "VehiclePurposes";
    getDriverRelations: string = this.lookupsIp + "DriverRelations";
    getColors: string = this.lookupsIp + "VehicleColors";
    getVehicleMakerMaster: string = this.lookupsIp + "VehicleMakeMastersAsync";
    //Lookups/GetAllLookups
    getAllLookups: string = this.lookupsIp + "GetAllLookups";
    getVehicleBodyTypesAsync: string = this.lookupsIp + "VehicleBodyTypesAsync";
    getPlateTypesAsync: string = this.lookupsIp + "PlateTypesAsync";
    getVehicleModelMastersByMakeId: string =
      this.lookupsIp + "GetVehicleModelMastersByMakeId";
    getPlateTypes: string = this.lookupsIp + "PlateTypes";
    getLicenceTypes: string = this.lookupsIp + "LicenseTypes";
    getTrasmissionTypes: string = this.lookupsIp + "TrasmissionTypes";
    getMedicalConditions: string = this.lookupsIp + "MedicalConditions";
    getViolationTypes: string = this.lookupsIp + "TrafficViolations";
    getCountries: string = this.lookupsIp + "Nationalities";
    getOccupations: string = this.lookupsIp + "Occupations";
    getBanks: string = this.lookupsIp + "Banks";
}
