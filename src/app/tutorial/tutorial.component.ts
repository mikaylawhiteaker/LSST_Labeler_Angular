
import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  username: string;
  password: string;
}

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})

export class TutorialComponent {
  animal: string;
  name: string;


  constructor(public dialog: MatDialog) {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogTutorial, {
      width: '300px',
      data: {name: this.name, animal: this.animal}
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogTutorial, {
      width: '300px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog-tutorial',
  templateUrl: 'dialog-overview-example-dialog-tutorial.html',
  styleUrls: ['./tutorial.component.css']
})
export class DialogOverviewExampleDialogTutorial {
  titles : string[] = [
    "Welcome to the LSST Data Labeler",
    "What you are seeing",
    "Is it comet?",
    "Has a tail",
    "Looks like the stars"
  ];
  contents : string[] = [
    "This short tutorial will show you how to identify comets in LSST images.",
    "You will see a large image of an asteroid on the left (purple crosshairs) and two smaller images of reference stars on the right (green crosshairs).",
    "We find new comets by comparing the size and shape of the asteroid to the reference stars. If the asteroid has a tail then it is a comet.",
    "In this case, the asteroid (left - purple crosshairs) has a tail (marked by the arrow) compared to the reference stars (right - green crosshairs). The size and shape of the tail can vary.",
    "In the case above, the asteroid (left - purple crosshairs) looks like the reference stars (right - green crosshairs) and is not active",
  ];
  page : number = 0;
  buttonText : string;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogTutorial>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.buttonText = "Next";
    }

  nextPage(): void {
    this.page++;
    if(this.page = 4) {
      this.buttonText = "Close";
    }
    if(this.page > 4) {
      this.dialogRef.close();
    }

  }


}
