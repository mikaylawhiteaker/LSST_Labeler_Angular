import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
// import {MdCardModule} from '@angular/material';
// import {MdButtonModule} from '@angular/material';
// import {MdDialogModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { AppComponent } from './app.component';
import { LoginComponent, DialogOverviewExampleDialog } from './login/login.component';
import { LabelComponent } from './label/label.component';
import { TutorialComponent, DialogOverviewExampleDialogTutorial,
DialogOverviewExampleDialogTutorial1, DialogOverviewExampleDialogTutorial2,
DialogOverviewExampleDialogTutorial3, DialogOverviewExampleDialogTutorial4}
from './tutorial/tutorial.component';
import { HttpClientModule } from '@angular/common/http';
import { SpaceImageComponent } from './space-image/space-image.component';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TutorialComponent,
    DialogOverviewExampleDialog,
    DialogOverviewExampleDialogTutorial,
    DialogOverviewExampleDialogTutorial1,
    DialogOverviewExampleDialogTutorial2,
    DialogOverviewExampleDialogTutorial3,
    DialogOverviewExampleDialogTutorial4,
    LabelComponent,
    SpaceImageComponent,
    DialogDemoComponent,
    MyDialogComponent
  ],
  entryComponents: [
    DialogOverviewExampleDialog,
    DialogOverviewExampleDialogTutorial,
    DialogOverviewExampleDialogTutorial1,
    DialogOverviewExampleDialogTutorial2,
    DialogOverviewExampleDialogTutorial3,
    DialogOverviewExampleDialogTutorial4,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
