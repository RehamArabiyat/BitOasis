import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
  HttpHandler,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";

import { retry, catchError } from "rxjs/operators";


@Injectable({
  providedIn: "root",
})
export class JwtInterceptorService implements HttpInterceptor {
  constructor(

  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      request.url.includes("/token") ||
      request.url.includes("/api/Account/Register") ||
      request.url.includes("NIC") ||
      request.url.includes("Lookups") ||
      request.url.includes("/i18n") ||
      request.url.includes("UploadFile/") ||
      request.url.includes("SendOTPSMS/") ||
      request.url.includes("VerifyOTP/") ||
      request.url.includes("VerifyOTPLogin") ||
      request.url.includes("/api/Account/ForgotPassword") ||
      request.url.includes("/api/Account/ChangeForgotPassword") ||
      request.url.includes("/v1/IC/Motors/GetNumberOfPoliciesById") ||
      request.url.includes("v2/NCD/GetNCDBySequenceNumberAsync") ||
      request.url.includes("v2/NCD/GetNCDByCustomCardAsync") ||
      request.url.includes(
        "v1/Dashboards/Customers/GetActivePoliciesByUserIdAndPHId"
      ) ||
      request.url.includes("https://gonsureksa.freshdesk.com/api/v2/tickets") ||
      request.url.includes(
        "https://gonsureksa.freshdesk.com/api/v2/contacts"
      ) ||
      request.url.includes("https://gonsureksa.freshdesk.com/api/v2/agents")

      //GetActivePoliciesByUserIdAndPHId
    ) {
      // console.log(request);
      return next.handle(request);
    }
    // if (this.gonsureWSS.getLocalStorageItem("session")) {
    // var token = this.gonsureWSS.getLocalStorageItem("session").access_token;

    // request = request.clone({
    //   setHeaders: { Authorization: "Bearer " + token },
    // });
    // } else {
    //   this.authService.loginWithoutToken().subscribe(
    //     (res: any) => {
    //       var token = res.access_token;
    //       request = request.clone({
    //         setHeaders: { Authorization: "Bearer " + token },
    //       });
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    // }

    const that = this;
    console.log(request);

    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        if (error.status == 401) {
          // 401 handled in auth.interceptor
       //   that.authService.logout();
        }
        return throwError(error);
      })
    );
  }
}
