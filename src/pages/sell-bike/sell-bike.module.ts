import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellBikePage } from './sell-bike';

@NgModule({
  declarations: [
    SellBikePage,
  ],
  imports: [
    IonicPageModule.forChild(SellBikePage),
  ],
})
export class SellBikePageModule {}
