
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
    //const dialogRef = this.dialog.open(DialogOverviewExampleDialogTutorial, {
  //    width: '300px',
  //    data: {name: this.name, animal: this.animal}
//    });
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
    "What is your task",
    "What are you looking at",
    "What do you do",
    "Lets get started"
  ];
  contents : string[] = [
    "This short tutorial will show you how to identify comets in LSST images.",
    "You will see an image in the veiwer and will be asked a yes or no question. ",
    "These images will have certian characteristics that you will be asked to identify that will help you correctly label images.",
    "When looking at an image you will either click yes or no. Once you have applied a label you must click submit to move on.",
    "As you move along the next tutorial section will unlock. Continue through until you have completed all sections. At any time if you want you can click on a section you have already completed for a review.",
  ];
  page : number = 0;
  buttonText : string;
  isClose : boolean = false;
  isFirst : boolean = true;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogTutorial>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.buttonText = "Next";
    }

  nextPage(): void {
    this.page++;
    this.isFirst = false;
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
  prevPage(): void {
    if(!this.isFirst) {
      this.page--;
      if(this.page == 0)
      {
        this.isFirst = true;
      }
      if(this.isClose)
      {
        this.isClose = false;
        this.buttonText = "Next";
      }
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
    "Characteristics of a Star",
    "Symmetry",
    "Symmetry",
    "Try it!",
  ];
  contents : string[] = [
    "To start we are going to learn some of the defining characteristics of stars",
    "When seen in an image a star will appear completely symmetric like a ball",
    "Unlike galaxies, nebula, or clusters single stars will look like perfect circles",
    "Now you will see a series of images that will show various objects. Identify them with a yes or no on whether or not they appear to look like a star.",
  ];
  page : number = 0;
  buttonText : string;
  isClose : boolean = false;
  isFirst : boolean = true;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogTutorial>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.buttonText = "Next";
    }

  nextPage(): void {
    this.page++;
    this.isFirst = false;
    if(this.isClose) {
      this.dialogRef.close();
    }
    if(this.page == 3) {
      this.buttonText = "Close";
      this.isClose = true;
    }
    if(this.page > 3) {
      this.dialogRef.close();
    }
  }
  prevPage(): void {
    if(!this.isFirst) {
      this.page--;
      if(this.page == 0)
      {
        this.isFirst = true;
      }
      if(this.isClose)
      {
        this.isClose = false;
        this.buttonText = "Next";
      }
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
    "Characteristics of a non-star",
    "Elliptical shape",
    "Characteristic of a Galaxy",
    "Try it",
  ];
  contents : string[] = [
    "Another common characteristic that can help identify stars is to be able to quickly rule a star out as a possible object.",
    "This type of shape will not be symmetrical. In fact it will appear more like an oval.",
    "This elliptical characteristic is commonly seen in galaxies. Especially distant galaxies, they can be mistaken for single stars.",
    "Go through the following images and try to recognize the elliptical shape vs a symmetrical star.",
  ];
  page : number = 0;
  buttonText : string;
  isClose : boolean = false;
  isFirst : boolean = true;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogTutorial>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.buttonText = "Next";
    }

  nextPage(): void {
    this.page++;
    this.isFirst = false;
    if(this.isClose) {
      this.dialogRef.close();
    }
    if(this.page == 3) {
      this.buttonText = "Close";
      this.isClose = true;
    }
    if(this.page > 3) {
      this.dialogRef.close();
    }
  }
  prevPage(): void {
    if(!this.isFirst) {
      this.page--;
      if(this.page == 0)
      {
        this.isFirst = true;
      }
      if(this.isClose)
      {
        this.isClose = false;
        this.buttonText = "Next";
      }
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
    "Comets vs Stars",
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
