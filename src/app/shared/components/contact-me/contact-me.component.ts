import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { EmailService } from '../../../core/services/email.service';

@Component({
  selector: 'happi-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  public form: FormGroup;
  constructor(private _fb: FormBuilder, private _emailService: EmailService) {
    this.form = this._fb.group({
      emailFrom: new FormControl(null, [Validators.email, Validators.required]),
      message: new FormControl(null, [Validators.required])
    });
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this._emailService.sendEmail(this.form.value).subscribe();
    }
  }
}
