import {Injectable} from 'angular2/core';
import {Device} from 'ionic-native';
import * as R from 'ramda';

@Injectable()
export class Globals {
  private isDevice: Boolean;
  private isTablet: Boolean;
  private isSmartPhone: Boolean;
  private isAndroid: Boolean;
  private isIos: Boolean;
  private device: any;
  private deviceType: String;
  private isBrowser: Boolean;
  
  
  constructor() {
    let documentBody: any = document.body;
    this.device = Device.device;
    this.isDevice = navigator.userAgent.match(/iphone|ipod|ipad|android/i) !== null;
    this.deviceType = this.device.model;
    this.isBrowser = Boolean(this.deviceType); //will always be false when on browser
    this.isTablet = documentBody.scrollWidth >= 768;
    this.isDevice = documentBody.scrollWidth < 768;
    
  }

 
}

