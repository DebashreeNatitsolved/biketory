import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellerOrderListPage } from './seller-order-list';

@NgModule({
  declarations: [
    SellerOrderListPage,
  ],
  imports: [
    IonicPageModule.forChild(SellerOrderListPage),
  ],
})
export class SellerOrderListPageModule {}
