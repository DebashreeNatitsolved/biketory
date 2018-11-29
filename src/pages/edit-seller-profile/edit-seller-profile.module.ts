import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditSellerProfilePage } from './edit-seller-profile';

@NgModule({
  declarations: [
    EditSellerProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(EditSellerProfilePage),
  ],
})
export class EditSellerProfilePageModule {}
