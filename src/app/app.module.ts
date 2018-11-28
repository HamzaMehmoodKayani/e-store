import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Services } from '../providers/services';
import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { ForgotpswdPage } from '../pages/forgotpswd/forgotpswd';
import { CategoryPage } from '../pages/category/category';
import { ProductPage } from '../pages/product/product';
import { CartPage } from '../pages/cart/cart';
import { CheckoutPage } from '../pages/checkout/checkout';
// import { MyStorage } from '../app/localstorage';
import { MyTools } from '../providers/tools';

@NgModule({
  declarations: [
    MyApp,
    // HomePage,
    SigninPage,
    SignupPage,
    ForgotpswdPage,
    CategoryPage,
    CartPage,
    CheckoutPage,
    ProductPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // HomePage,
    SigninPage,
    SignupPage,
    ForgotpswdPage,
    CategoryPage,
    CartPage,
    CheckoutPage,
    ProductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Services,
    // MyStorage,
    MyTools,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
