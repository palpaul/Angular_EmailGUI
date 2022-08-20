import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private snack: MatSnackBar) {}

  ngOnInit(): void {}
  //create a new funcation btnCLck
  btnClick() {
    console.log('btn clicked');
    this.snack.open('COmpose Email', 'cancel');
  }
  btnClick1() {
    console.log('btn clicked');
    this.snack.open('Hey I warned you', 'cancel');
  }
}
