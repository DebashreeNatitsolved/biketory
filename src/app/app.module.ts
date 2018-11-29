import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { UserProvider } from '../providers/user/user';
import { IonicStorageModule } from '@ionic/storage';
import { BikeProvider } from '../providers/bike/bike';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';

 import { Camera, CameraOptions } from '@ionic-native/camera';
 import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
 import { FilePath } from '@ionic-native/file-path';
 import { File } from '@ionic-native/file';
import {MessageFormPage} from '../pages/message-form/message-form';
import {ReviewPage} from '../pages/review/review';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Ionic2RatingModule } from 'ionic2-rating';


@NgModule({
  declarations: [
    MyApp,
    MessageFormPage,
    ReviewPage,
    //HomePage
  ],
  imports: [
    BrowserModule,HttpModule,HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    Ionic2RatingModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MessageFormPage,
    ReviewPage,
    //HomePage
  ],
  providers: [
    StatusBar,
    AuthServiceProvider,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    BikeProvider,
    Camera,
    FileTransfer,
    FilePath,
    SocialSharing,
    File
  ]
})
export class AppModule {} 
