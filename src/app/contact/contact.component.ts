import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback } from '../shared/feedback';
import { FirebaseService } from '../services/firebase.service';
import { Router, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { visibility, flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    visibility(),
    expand()
  ],
})
export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback;


  @ViewChild('fform') feedbackFormDirective;

  formErrors = {
    'name': '',
    'email': '',
    'subject': '',
    'message': ''
  };

  validationMessages = {
    'name': {
      'required': 'Name is required',
    },
    'email': {
      'required': 'Email is required',
      'email': 'Email not in valid format.'
    },
    'subject': {
      'required': 'Subject is required',
    },
    'message': {
      'required': 'Message is required',
    }
  };


  constructor(
    private fb: FormBuilder,
    private firebaseService: FirebaseService,
    private router: Router,
    private title: Title,
    public snackBar: MatSnackBar) {
    this.title.setTitle("Akkad Watches | Contact");
  }


  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    this.createForm();
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      name: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(2000)]]
    });

    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); //(re)set form validation messages 
  }

  onValueChanged(data?: any) {
    if (!this.feedbackForm) {
      return;
    }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous erroe message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    this.firebaseService.add_document('feedback', this.feedback)
      .then(
        res => {
          this.openSnackBar("شكراً على رسالتكم، سنقوم بالرد بأقرب وقت ممكن", '')
          setTimeout(() => { this.router.navigate(['/home']); }, 2000);
        }
      )
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      message: ''
    });
    this.feedbackFormDirective.resetForm();
  }

  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'right',
      direction: 'rtl',
    });
  }
}
