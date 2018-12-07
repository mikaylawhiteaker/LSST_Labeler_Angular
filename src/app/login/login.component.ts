// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
//
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent{
//   usernames : string[] = ["David", "Mikayla", "Brandon", "Maggie"];
//   password : string[] = ["Large", "Synoptic", "Survey", "Telescope"];
//   currentuser : string;
//   currentpass : string;
//   robot : string;
//   usernameC : number = 0;
//   invalidlogin : string = "Invalid Login!";
//   invalidloginb : boolean = false;
//   foundUser : boolean = false;
//   registerb : boolean = false;
//   registered : boolean = false;
//   welcome : string;
//   welcomeNew: string;
//
//
//   loginForm = new FormGroup({
//     username: new FormControl(''),
//     password: new FormControl(''),
//     notarobot: new FormControl('')
//   });
//
//   onLogin()
//   {
//     this.currentuser = this.loginForm.get('username').value;
//     this.currentpass = this.loginForm.get('password').value;
//     for(let user of this.usernames)
//     {
//       if(user.localeCompare(this.currentuser) == 0)
//       {
//         if(this.currentpass.localeCompare(this.password[this.usernameC])==0)
//         {
//           this.foundUser = true;
//         }
//         break;
//       }
//       this.usernameC++;
//     }
//     if(this.foundUser)
//     {
//       this.welcome = "Welcome back " + this.currentuser;
//       this.invalidloginb = false;
//     }
//     else
//     {
//       this.invalidloginb = true;
//     }
//   }
//
//   register(){
//     this.registerb = true;
//   }
//
//   onRegister(){
//       this.currentuser = this.loginForm.get('username').value;
//       this.currentpass = this.loginForm.get('password').value;
//       this.robot = this.loginForm.get('robot').value;
//       if(this.robot.localeCompare("no") == 0)
//       {
//         this.usernames.push(this.currentuser);
//         this.password.push(this.currentpass);
//         this.registered = true;
//         this.welcomeNew = "Welcome to LSST Labeler " + this.currentuser;
//       }
//   }
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
import {Component, Inject} from '@angular/core';
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
