import { ManagerUserService } from './services/managerUser/manager-user.service';
import { BaseDeDatos } from 'src/app/interfaceServicios/baseDeDatos';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Geolocation } from '@ionic-native/geolocation/ngx';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import {
  FirestoreSettingsToken,
  AngularFirestore
} from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    AngularFireAuthModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    AngularFirestore,
    AngularFireAuthModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: BaseDeDatos, useClass: ManagerUserService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
