
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
  show0: boolean = true;
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
    this.show0 = false;
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
    this.show1 = false;
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
    this.show2 = false;
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
    this.show3 = false;
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
    this.show4 = false;
    this.show0 = true;
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
    "The tail of a comet",
    "The tail of a comet",
    "Try it",
  ];
  contents : string[] = [
    "Comets are small icy round objects that will be more easily seen when they approach the sun.",
    "When a commet gets close to the sun it heats up and starts to release gases. This will appear in the form of a tail.",
    "A tail may not be near as bright as the actual object but the light reflecting from it will cause the object to not appear symmetrical",
    "Look at the following images and try to recognize whether or not the object has a tail or not.",
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
  selector: 'dialog-overview-example-dialog-tutorial-4',
  templateUrl: 'dialog-overview-example-dialog-tutorial-4.html',
  styleUrls: ['./tutorial.component.css']
})
export class DialogOverviewExampleDialogTutorial4 {
  titles : string[] = [
    "Review",
    "Recognize Characteristics",
    "Put it all together",
    "Make a determination",
    "Try it",
  ];
  contents : string[] = [
    "Now that we have gone over some easy to identfy characteristics of space objects we can now put them all together.",
    "When labeling images look for these defining characteristics and remember which ones identify an object as a star and which ones do not.",
    "After you examine the image and recognize characteristics, determine which ones are most prominent and whether the image is either most likely a star or not.",
    "Once you have decided make a determination and submit it.",
    "Before you start labeling actual images try to label these next few images to truely get the hang of it.",
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
