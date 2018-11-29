import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListedBikesPage } from './listed-bikes';

@NgModule({
  declarations: [
    ListedBikesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListedBikesPage),
  ],
})
export class ListedBikesPageModule {}
