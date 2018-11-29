import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeardetailsPage } from './geardetails';

@NgModule({
  declarations: [
    GeardetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(GeardetailsPage),
  ],
})
export class GeardetailsPageModule {}
