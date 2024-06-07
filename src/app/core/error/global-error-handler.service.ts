import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: Error): void {
    const message = error.message ? error.message : error.toString();
    this.postCustomData(error, message);
    if (environment.production) {
      window.location.href = '/error';
    } else {
      console.log('ERROR ->', error);
    }
  }

  postCustomData(error: Error, message: string) {
    const req = new XMLHttpRequest();
    req.open('POST', `${environment.serviceUrl}/api/report-error/client-fatal`);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(
      `{ "client-message" : ${JSON.stringify(
        message || ''
      )}, "client-error": ${JSON.stringify(error.stack || '')}}`
    );
  }
}
