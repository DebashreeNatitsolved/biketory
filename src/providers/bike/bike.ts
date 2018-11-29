import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response, RequestOptions, RequestMethod, Request } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from 'ionic-angular';
import { Config } from './../../config';
@Injectable()
export class BikeProvider {
  apiUrl = Config.baseUrl;
  postcodeUrl=Config.postcodeUrl;

  constructor(public http: HttpClient , public loadingCtrl: LoadingController) {
    //console.log('Hello UserProvider Provider');
    //console.log(Config.baseUrl)
      }

  categories() {
    
    return this.http.get(this.apiUrl +'products/categories.json').map((res: Response) => {
      return res.json();
    });
    
  }

 
  
  addbike(data:object):Observable<any>{
   // console.log(data);
    return this.http.post(this.apiUrl +'products/addbike.json',data).map((res:Response)=>{
      //console.log(res)
      return res;
    });
  }

  
  addgear(data:object):Observable<any>{
    // console.log(data);
     return this.http.post(this.apiUrl +'products/addgear.json',data).map((res:Response)=>{
       //console.log(res)
       return res;
     });
   }

  sendmessage(data:object):Observable<any>{
    // console.log(data);
     return this.http.post(this.apiUrl +'products/sendmessage.json',data).map((res:Response)=>{
       //console.log(res)
       return res;
     });
   }

   sendrequest(data:object):Observable<any>{
    // console.log(data);
     return this.http.post(this.apiUrl +'products/sendrequest.json',data).map((res:Response)=>{
       //console.log(res)
       return res;
     });
   }

   addwish(data:object):Observable<any>{
    // console.log(data);
     return this.http.post(this.apiUrl +'products/addwish.json',data).map((res:Response)=>{
       //console.log(res)
       return res;
     });
   }
   
   
  
  removeimage(data:object):Observable<any>{
    // console.log(data);
     return this.http.post(this.apiUrl +'products/removeimage.json',data).map((res:Response)=>{
       //console.log(res)
       return res;
     });
   }
  
   
   removegearimage(data:object):Observable<any>{
    // console.log(data);
     return this.http.post(this.apiUrl +'products/removegearimage.json',data).map((res:Response)=>{
       //console.log(res)
       return res;
     });
   }


   mylistedbikes(data:object):Observable<any>
   {
    return this.http.post(this.apiUrl +'products/mybikelisting.json',data).map((res:Response)=>{
      console.log(res)
      return res;
    });
   }

   mylistedgears(data:object):Observable<any>
   {
    return this.http.post(this.apiUrl +'products/mygearlisting.json',data).map((res:Response)=>{
      console.log(res)
      return res;
    });
   }

   disablelist(data:object):Observable<any>
   {
    return this.http.post(this.apiUrl +'products/bikeenable.json',data).map((res:Response)=>{
      console.log(res)
      return res;
    });

   }

   deletelist(data:object):Observable<any>
   {
    return this.http.post(this.apiUrl +'products/productdelete.json',data).map((res:Response)=>{
      console.log(res)
      return res;
    });

   }

   bikelist(data:object):Observable<any>{
    // console.log(data);
     return this.http.post(this.apiUrl +'products/listproduct.json',data).map((res:Response)=>{
       console.log(res)
       return res;
     });
   }
   
   gearlist(data:object):Observable<any>{
    // console.log(data);
     return this.http.post(this.apiUrl +'products/listgear.json',data).map((res:Response)=>{
       console.log(res)
       return res;
     });
   }


   deletebike(data:object):Observable<any>{
     console.log(data);
     return this.http.post(this.apiUrl +'products/productdelete.json',data).map((res:Response)=>{
       console.log(res)
       return res;
     });
   }

   deletegear(data:object):Observable<any>{
    console.log(data);
    return this.http.post(this.apiUrl +'products/geardelete.json',data).map((res:Response)=>{
      console.log(res)
      return res;
    });
  }
   
   
   getbikedetails(data:object):Observable<any>{
    console.log(data);
    return this.http.post(this.apiUrl +'products/bikedetails.json',data).map((res:Response)=>{
      console.log(res)
      return res;
    });
  }
  
  
  getgeardetails(data:object):Observable<any>{
    console.log(data);
    return this.http.post(this.apiUrl +'products/geardetails.json',data).map((res:Response)=>{
      console.log(res)
      return res;
    });
  }

  gearfields(data:object):Observable<any>{
    console.log(data);
    return this.http.post(this.apiUrl +'products/gearfields.json',data).map((res:Response)=>{
      console.log(res)
      return res;
    });
  }

  
  addcart(data:object):Observable<any>{
    console.log(data);
    return this.http.post(this.apiUrl +'products/addcart.json',data).map((res:Response)=>{
      console.log(res)
      return res;
    });
  }

  
  getcarts(data:object):Observable<any>{
    console.log(data);
    return this.http.post(this.apiUrl +'products/cart.json',data).map((res:Response)=>{
      console.log(res)
      return res;
    });
  }


 
  



  updatecarts(data:object):Observable<any>{
    console.log(data);
    return this.http.post(this.apiUrl +'products/updatecart.json',data).map((res:Response)=>{
      console.log(res)
      return res;
    });
  }

  
  
  removecarts(data:object):Observable<any>{
    console.log(data);
    return this.http.post(this.apiUrl +'products/removefromcart.json',data).map((res:Response)=>{
      console.log(res)
      return res;
    });
  }

  
  addreview(data:object):Observable<any>{
    console.log(data);
    return this.http.post(this.apiUrl +'products/addratingreview.json',data).map((res:Response)=>{
      console.log(res)
      return res;
    });
  }

  getbikeshowdetails(data:object):Observable<any>{
    console.log(data);
    return this.http.post(this.apiUrl +'products/bikeShowdetails.json',data).map((res:Response)=>{
      console.log(res)
      return res;
    });
  }
  getgearshowdetails(data:object):Observable<any>{
    console.log(data);
    return this.http.post(this.apiUrl +'products/gearShowdetails.json',data).map((res:Response)=>{
      console.log(res)
      return res;
    });
  }
  

  searchbikelist(data:object):Observable<any>{
    console.log(data);
    return this.http.post(this.apiUrl +'products/searchbike.json',data).map((res:Response)=>{
      console.log(res)
      return res;
    });
  }

  searchgearlist(data:object):Observable<any>{
    console.log(data);
    return this.http.post(this.apiUrl +'products/searchgear.json',data).map((res:Response)=>{
      console.log(res)
      return res;
    });
  }

  

 // searchbikelist(data:object):Observable<any>{
  //  console.log(data)
 // }
  
  getbikeimagedetails(data:object):Observable<any>{
    console.log(data);
    return this.http.post(this.apiUrl +'products/bikeimagedetails.json',data).map((res:Response)=>{
      console.log(res)
      return res;
    });
  }

  orderList(data:object):Observable<any>{
    console.log(data);
    return this.http.post(this.apiUrl +'products/orderlist.json',data).map((res:Response)=>{
      console.log(res)
      return res;
    });
  }
 
  orderDetails(data:object):Observable<any>{
    console.log(data);
    return this.http.post(this.apiUrl +'products/orderdetails.json',data).map((res:Response)=>{
      console.log(res)
      return res;
    });
  }

  orderListSeller(data:object):Observable<any>{
    console.log(data);
    return this.http.post(this.apiUrl +'products/orderlistseller.json',data).map((res:Response)=>{
      console.log(res)
      return res;
    });
  }

  orderDetailsSeller (data:object):Observable<any>{
    console.log(data);
    return this.http.post(this.apiUrl +'products/orderdetailsseller.json ',data).map((res:Response)=>{
      console.log(res)
      return res;
    });
  }
  editprofile (data:object):Observable<any> {
    console.log(data);
    console.log(this.apiUrl);
    return this.http.post(this.apiUrl+'users/edituserprofile.json ',data).map((res:Response)=>{
      console.log(res)
      return res;
    });
  }


  changePassword (data:object): Observable<any> {
    console.log(data);
    
    return this.http.post(this.apiUrl+'users/changepassword.json', data).map((res:Response)=>{
      console.log(res)
      return res;
    });
  }

userDetails (data:object):Observable<any>
{
  console.log (data);
return this.http.post (this.apiUrl+'users/userdetails.json', data). map ((res:Response)=>{
  console.log(res)
  return res;
});
 
}


wishlist (data:object):Observable<any>
{
  console.log (data);
return this.http.post (this.apiUrl+'users/wishlisting.json', data). map ((res:Response)=>{
  console.log(res)
  return res;
});
 
}

bikeResult (data:object):Observable<any>
{
  console.log(data);
  return this.http.post (this.apiUrl+'products/bikeresult.json',data).map ((res:Response)=>{
  return res;
});
}

gearResult (data:object):Observable<any>
{
  console.log(data);
  return this.http.post (this.apiUrl+'products/listgear.json',data).map ((res:Response)=>{
  return res;
});
}

addbikefinal(data:object):Observable<any>
{
  console.log(data);
  return this.http.post (this.apiUrl+'products/addbikefinal.json',data).map ((res:Response)=>{
  return res;
});
}


sellGear () {
    
  return this.http.get(this.apiUrl +'products/categorylisting.json').map((res: Response) => {
    return res;
  });

}

sellBike () {
    
  return this.http.get(this.apiUrl +'products/bikelisting.json').map((res: Response) => {
    return res;
  });

}
recentlyViewed ()
{
  return this.http.get(this.apiUrl +'users/recentview.json').map((res: Response) => {
    return res;
  });
}

sellercheck (data:object):Observable<any>
{
  console.log(data);
  return this.http.post (this.apiUrl+'products/sellercheck.json',data).map ((res:Response)=>{
  return res;
});
}

subCategory (data:object):Observable<any>
{
  console.log (data)
  return this.http.post(this.apiUrl+'products/subcategories.json',data).map ((res:Response)=>
  {
    return res;
  });
}

postcode (data:object):Observable<any>
{
  console.log ('gfg',data)
  return this.http.post(this.postcodeUrl+'postcodes',data).map ((res:Response)=>
  {
    return res;
  });
}

}