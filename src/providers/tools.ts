import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular/index';
import { AlertController } from 'ionic-angular';

@Injectable()
export class MyTools {
    constructor(
        private lodingctrl: LoadingController,
        private alertCtrl: AlertController,
    ) {

    }

    // getLoader() {
    //     console.log('showing loader now');
    //     let loader = this.lodingctrl.create({
    //         spinner: 'hide',
    //         showBackdrop: false,
    //         content: `
    //   <div class="custom-spinner-container" style="width:70px">
    //     <img src = "../../assets/imgs/loader2.gif">
    //   </div>`
    //     });

    //     return loader;
    // }

    
}