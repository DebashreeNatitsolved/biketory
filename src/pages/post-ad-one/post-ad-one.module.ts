import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostAdOnePage } from './post-ad-one';

@NgModule({
  declarations: [
    PostAdOnePage,
  ],
  imports: [
    IonicPageModule.forChild(PostAdOnePage),
  ],
})
export class PostAdOnePageModule {}
