import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailapiService } from '../services/emailapi.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
})
export class EmailComponent implements OnInit {
  data = {
    to: '',
    subject: '',
    message: '',
  };
  flag = false;
  constructor(private email: EmailapiService, private snack: MatSnackBar) {}

  ngOnInit(): void {}

  doSubmitForm() {
    console.log('try to submit form');
    console.log('DATA ', this.data);
    if (
      this.data.to == '' ||
      this.data.subject == '' ||
      this.data.message == ''
    ) {
      this.snack.open('fields cant be empty...!!!', 'OK');
      return;
    }
    this.flag = true;
    let a = this.data;
    console.log(a);
    this.email.sendData(this.data).subscribe(
      (Response) => {
        console.log(Response);
        this.flag = false;
        this.snack.open('Email sent', 'Ok');
      },
      (error) => {
        console.log(error);
        this.flag = false;
        this.snack.open('Email not sent', 'Ok');
      }
    );
  }
}
