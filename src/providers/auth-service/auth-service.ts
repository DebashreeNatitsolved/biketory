import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Headers, Http, Response, RequestOptions, RequestMethod, Request } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from 'ionic-angular';
import { Config } from './../../config';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  apiUrl = Config.baseUrl;
  constructor(
    public http: Http,
    public loadingCtrl: LoadingController
  ) {
   // console.log('Hello AuthServiceProvider Provider');
  }
  public details ;
  postData(credentials, type) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    //console.log(credentials);
    //console.log(type);
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(this.apiUrl + type, JSON.stringify(credentials))
        .subscribe(res => {
          console.log(res);
          resolve(res.json());
          loading.dismiss();
        }, (err) => {
          console.log(err);
          reject(err);
          loading.dismiss();
        });
    });

  }

  signup(data:object):Observable<any>{
    console.log(data);
    return this.http.post(this.apiUrl +'users/register.json',data).map((res:Response)=>{
      return res.json();
    });
  }

  login(data: object): Observable<any> {
    console.log(data);
    return this.http.post(this.apiUrl +'users/token.json', data).map((res: Response) => {
      return res.json();
    });
  }

  

  userCheckEmail(data: object): Observable<any> {
    console.log(data);
    return this.http.post(this.apiUrl +'users/emailcheck.json', data).map((res: Response) => {
      return res.json();
    });
  }

  

  getdetails(data: object): Observable<any> {
    let requestoptions = new RequestOptions({
      method: RequestMethod.Post,
      url: this.apiUrl + 'users/getprofiledetails_api',
      body: JSON.stringify(data)
    });
    return this.http.request(new Request(requestoptions))
      .map((res: Response) => {
        if (res) {
          return res.json();
        }
      });
    // return this.http.post(this.apiUrl + 'users/getprofiledetails_api', data).map((res: Response) => {
    //   return res.json();
    // });
  }

  


  // changepass(data: object): Observable<any> {
    
  //   let requestchangeoptions = new RequestOptions({
  //     method: RequestMethod.Post,
  //     url: this.apiUrl + 'users/change_password_api',
  //     body: JSON.stringify(data)
  //   });
  //   return this.http.request(new Request(requestchangeoptions))
  //     .map((res: Response) => {
  //       if (res) {
  //         return res.json();
  //       }
  //     });
  // }

   forgetpass(data: object): Observable < any > {
     console.log(data);
     let requestforgetoptions = new RequestOptions({
       method: RequestMethod.Post,
       url: this.apiUrl + 'users/apiforgot_password',
       body: JSON.stringify(data)
     });
    // console.log(requestfuserCheckEmailorgetoptions);
     return this.http.request(new Request(requestforgetoptions))
       .map((res: Response) => {
         if (res) {
           return res.json();
         }
       });
    }


  getData(type) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    console.log(type);
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.get(this.apiUrl + type)
        .subscribe((res :any) => {
        // let dt = res;
        // console.log(dt)
         //console.log(dt.category)
          resolve (res.json());
          //loading.dismiss();
        }, (err) => {
          console.log(err);
          reject(err);
         // loading.dismiss(); 
        });
    });

  }

 
 

  
}
