import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '@environments/environment';
import { FormService } from '../../services/form-service.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent implements OnInit {
  form: FormGroup;
  actionUrl: string;
  accessKey: string;

  constructor(private fb: FormBuilder, private formService: FormService) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      mail: ['', [Validators.email, Validators.required]],
      phone: [''],
      message: ['', [Validators.required, Validators.minLength(25)]],
      accessKey: [environment.contactForm.accessKey],
      replyTo: ['@'],
    });
  }

  ngOnInit(): void {}

  submitMessage(): void {
    this.formService.submitForm(this.form.value).subscribe();
  }

  public get formStatus(): string {
    return this.form.status;
  }

  public get shouldBeDisabled(): boolean {
    return !this.form.valid;
  }

  public get messageLength(): number {
    return (this.form.get('message').value as string).length;
  }
}
