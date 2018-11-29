import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellerOrderDetailsPage } from './seller-order-details';

@NgModule({
  declarations: [
    SellerOrderDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SellerOrderDetailsPage),
  ],
})
export class SellerOrderDetailsPageModule {}
