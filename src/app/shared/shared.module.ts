import { NgModule } from "@angular/core";
import { IonicModule } from "ionic-angular";
import { IonicStorageModule } from "@ionic/storage";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule, Http } from "@angular/http";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { SocialSharing } from "@ionic-native/social-sharing";
import { Facebook } from "@ionic-native/facebook";
//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//import { EmailComposer } from '@ionic-native/email-composer';
import {
  TranslateModule,
  TranslateLoader,
  TranslateStaticLoader
} from "ng2-translate";
import { TruncatePipe } from "./pipes/truncate.pipe";
import { TrimHtmlPipe } from "./pipes/trim-html.pipe";
import { Config } from "../app.config";
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, "./assets/translations", ".json");
}
@NgModule({
  declarations: [TruncatePipe, TrimHtmlPipe],
  imports: [
    IonicModule,
    IonicStorageModule.forRoot(),
    CommonModule,
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [Http]
    })
  ],
  exports: [
    IonicModule,
    BrowserModule,
    HttpModule,
    TranslateModule,
    TruncatePipe,
    TrimHtmlPipe
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    SocialSharing,
    Facebook,
    // BarcodeScanner,
    // EmailComposer,
    Config
  ]
})
export class SharedModule {}
