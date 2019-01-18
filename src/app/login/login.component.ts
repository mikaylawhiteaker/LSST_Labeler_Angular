import {Component, Inject, EventEmitter, Input, Output} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface DialogData {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userID: string;
  loggedIn: boolean;
  @Output() trained = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog) {
    this.loggedIn = false;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '300px',
      data: {user: this.userID, loggedIn:this.loggedIn}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.trained.emit(false);
      this.userID = result;
    });
  }

  signout(): void {
    console.log("Signout: "+this.userID)
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['./login.component.css']
})
export class DialogOverviewExampleDialog {
  loginForm: FormGroup;
  submitted = false;
  register = false;
  login = true;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

    }

  get f() { return this.loginForm.controls; }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
      console.log(this.f.username.value)
  }

  switchMode() {
    this.register = !this.register;
    this.login = !this.login;
  }

}
