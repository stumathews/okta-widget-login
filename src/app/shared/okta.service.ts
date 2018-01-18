import { Injectable } from '@angular/core';
import * as OktaSignIn from '@okta/okta-signin-widget';

@Injectable()
export class Okta {
  widget;

  constructor() {
    this.widget = new OktaSignIn({
      baseUrl: 'https://lusid.okta.com',

      clientId: '0oa5ao43cLgHp80RG2p6',
      redirectUri: 'http://localhost.finboure.com:4200',
      authParams: {
        issuer: 'default'
      }
    });
  }

  getWidget() {
    return this.widget;
  }
}