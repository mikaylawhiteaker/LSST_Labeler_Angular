
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
  page: number = 0;
  show1: boolean = false;
  show2: boolean = false;
  show3: boolean = false;
  show4: boolean = false;
  show: boolean = false;
  showintro: boolean = true;


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
    this.show1 = true;
    this.show = true;
    this.showintro = false;
  }

  openDialog1(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogTutorial1, {
      width: '300px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
    this.show2 = true;
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogTutorial2, {
      width: '300px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
    this.show3 = true;
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogTutorial3, {
      width: '300px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
    this.show4 = true;
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogTutorial4, {
      width: '300px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
    this.show4 = true;
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
  isClose : boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogTutorial>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.buttonText = "Next";
    }

  nextPage(): void {
    this.page++;
    if(this.isClose) {
      this.dialogRef.close();
    }
    if(this.page == 4) {
      this.buttonText = "Close";
      this.isClose = true;
    }
    if(this.page > 4) {
      this.dialogRef.close();
    }
  }
}

@Component({
  selector: 'dialog-overview-example-dialog-tutorial-1',
  templateUrl: 'dialog-overview-example-dialog-tutorial-1.html',
  styleUrls: ['./tutorial.component.css']
})
export class DialogOverviewExampleDialogTutorial1 {
  titles : string[] = [
    "Welcome to the LSST Data Labeler tutorial part 2",
    "insert part 2 page 2 data here",
    "insert part 2 page 3 data here",
    "insert part 2 page 4 data here",
    "insert part 2 page 5 data here",
  ];
  contents : string[] = [
    "insert part 2 page 1 data here",
    "insert part 2 page 2 data here",
    "insert part 2 page 3 data here",
    "insert part 2 page 4 data here",
    "insert part 2 page 5 data here",
  ];
  page : number = 0;
  buttonText : string;
  isClose : boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogTutorial>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.buttonText = "Next";
    }

  nextPage(): void {
    this.page++;
    if(this.isClose) {
      this.dialogRef.close();
    }
    if(this.page == 4) {
      this.buttonText = "Close";
      this.isClose = true;
    }
    if(this.page > 4) {
      this.dialogRef.close();
    }
  }
}

@Component({
  selector: 'dialog-overview-example-dialog-tutorial-2',
  templateUrl: 'dialog-overview-example-dialog-tutorial-2.html',
  styleUrls: ['./tutorial.component.css']
})
export class DialogOverviewExampleDialogTutorial2 {
  titles : string[] = [
    "Welcome to the LSST Data Labeler tutorial part 3",
    "insert part 3 page 2 data here",
    "insert part 3 page 3 data here",
    "insert part 3 page 4 data here",
    "insert part 3 page 5 data here",
  ];
  contents : string[] = [
    "insert part 3 page 1 data here",
    "insert part 3 page 2 data here",
    "insert part 3 page 3 data here",
    "insert part 3 page 4 data here",
    "insert part 3 page 5 data here",
  ];
  page : number = 0;
  buttonText : string;
  isClose : boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogTutorial>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.buttonText = "Next";
    }

  nextPage(): void {
    this.page++;
    if(this.isClose) {
      this.dialogRef.close();
    }
    if(this.page == 4) {
      this.buttonText = "Close";
      this.isClose = true;
    }
    if(this.page > 4) {
      this.dialogRef.close();
    }
  }
}

@Component({
  selector: 'dialog-overview-example-dialog-tutorial-3',
  templateUrl: 'dialog-overview-example-dialog-tutorial-3.html',
  styleUrls: ['./tutorial.component.css']
})
export class DialogOverviewExampleDialogTutorial3 {
  titles : string[] = [
    "Welcome to the LSST Data Labeler tutorial part 4",
    "insert part 4 page 2 data here",
    "insert part 4 page 3 data here",
    "insert part 4 page 4 data here",
    "insert part 4 page 5 data here",
  ];
  contents : string[] = [
    "insert part 4 page 1 data here",
    "insert part 4 page 2 data here",
    "insert part 4 page 3 data here",
    "insert part 4 page 4 data here",
    "insert part 4 page 5 data here",
  ];
  page : number = 0;
  buttonText : string;
  isClose : boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogTutorial>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.buttonText = "Next";
    }

  nextPage(): void {
    this.page++;
    if(this.isClose) {
      this.dialogRef.close();
    }
    if(this.page == 4) {
      this.buttonText = "Close";
      this.isClose = true;
    }
    if(this.page > 4) {
      this.dialogRef.close();
    }
  }
}

@Component({
  selector: 'dialog-overview-example-dialog-tutorial-4',
  templateUrl: 'dialog-overview-example-dialog-tutorial-4.html',
  styleUrls: ['./tutorial.component.css']
})
export class DialogOverviewExampleDialogTutorial4 {
  titles : string[] = [
    "Welcome to the LSST Data Labeler tutorial part 5",
    "insert part 5 page 2 data here",
    "insert part 5 page 3 data here",
    "insert part 5 page 4 data here",
    "insert part 5 page 5 data here",
  ];
  contents : string[] = [
    "insert part 5 page 1 data here",
    "insert part 5 page 2 data here",
    "insert part 5 page 3 data here",
    "insert part 5 page 4 data here",
    "insert part 5 page 5 data here",
  ];
  page : number = 0;
  buttonText : string;
  isClose : boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogTutorial>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.buttonText = "Next";
    }

  nextPage(): void {
    this.page++;
    if(this.isClose) {
      this.dialogRef.close();
    }
    if(this.page == 4) {
      this.buttonText = "Close";
      this.isClose = true;
    }
    if(this.page > 4) {
      this.dialogRef.close();
    }
  }
}
