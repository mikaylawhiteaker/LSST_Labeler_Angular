import { Component } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

export type EditorType = 'login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LSST-Labeler';
  loggedIn : boolean = false;
  login : boolean = true;

  Login(user: any)
  {
    this.login = false;
    this.loggedIn = true;
  }

  newUser()
  {
    this.login = false;
    this.loggedIn = true;
  }
}
