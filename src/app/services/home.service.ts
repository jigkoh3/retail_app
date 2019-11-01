import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(public http: HttpClient) { }

  getHomeData(): Promise<any> {
    //return this.http.get(this.API_URL + '/api/customer/home/' + location.coords.latitude + '/ ' + location.coords.longitude)
    return this.http.get("../../assets/json/home.json")
      .toPromise()
      .then(response => response as any)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    // this.log.errorService('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
