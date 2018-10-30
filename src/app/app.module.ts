import { PrecosPage } from './../pages/precos/precos';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { BulaPage } from './../pages/bula/bula';
import { PedidosPage } from './../pages/pedidos/pedidos';
import { FarmaciasPage } from './../pages/farmacias/farmacias';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { DetalhePage } from './../pages/detalhe/detalhe';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { Keyboard } from '@ionic-native/keyboard';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ExpandableHeader } from '../components/expandable-header/expandable-header';


@NgModule({
  declarations: [
    MyApp,
    ExpandableHeader,
    BulaPage,
    DetalhePage,
    FarmaciasPage,
    HomePage,
    ListPage,
    PedidosPage,
    PrecosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BulaPage,
    DetalhePage,
    FarmaciasPage,
    HomePage,
    ListPage,
    PedidosPage,
    PrecosPage
  ],
  providers: [
    InAppBrowser,
    StatusBar,
    SplashScreen,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
