import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListedGearsPage } from './listed-gears';

@NgModule({
  declarations: [
    ListedGearsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListedGearsPage),
  ],
})
export class ListedGearsPageModule {}
