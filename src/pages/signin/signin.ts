import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Services } from '../../providers/services';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  user:any={
    phone:'',
    pin:''
  }
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public services: Services
    ) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }
  forgotpasswordpg(){

  }
  register(){

  }
  login(){
    //Applying Validations
    if (this.user.phone == '') {
      console.log("phone not found");
    }
    else if (this.user.pin == '') {
      console.log("pin not found");
    }
    //Requesting API 
    else {
      let body = new FormData();
      body.append('mem_phone', this.user.phone);
      body.append('mem_pin', this.user.pin);
      this.services.login(body).subscribe(
        success => {
          console.log(success);
        },
        error => {
          console.log('error bhai', error);
        }
      )
    }
  }
}
