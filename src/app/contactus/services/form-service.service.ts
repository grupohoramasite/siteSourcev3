import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from 'angular-notifier';

import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient, private notifier: NotifierService, private i18n: TranslateService) { }

  submitForm(formValue): Observable<object> {
    return this.http.post(environment.contactForm.actionUrl, formValue).pipe(
      take(1),
      tap((response: { message: string; success: boolean })  => {
        if (response.success) {
          this.notifier.notify('success', this.i18n.instant('contactus.notifications.successMessage'));
        } else {
          this.notifier.notify('error', this.i18n.instant('contactus.notifications.errorMessage'));
        }
      })
    );
  }
}
