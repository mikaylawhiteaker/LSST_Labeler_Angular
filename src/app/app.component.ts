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
  imageLabels : number[] = [];
  imageCount : number = 0;
  imageURLs : string[] = ["http://en.es-static.us/upl/2011/07/regulus_leo_i_dwarf_Russell_Croman_600.jpg",
                          "http://www.meteoweb.eu/wp-content/uploads/2012/01/Regolo-Leone.jpg",
                        "https://images.pexels.com/photos/29435/landscape-sky-night-stars-29435.jpg",
                        "https://s3-us-west-2.amazonaws.com/lsst-images/abddfad7-4d90-468e-8fab-bbe1f703973c.jpg",
                      "https://media.stsci.edu/uploads/image/display_image/2898/low_full_jpg.jpg",
                    "https://s3-us-west-2.amazonaws.com/lsst-images/c5080b17-d532-4cc1-ab1a-8245fd3d490b.jpg"];
  imageURL: string = "http://en.es-static.us/upl/2011/07/regulus_leo_i_dwarf_Russell_Croman_600.jpg";

  showTutorial:boolean;

  constructor() {
    this.showTutorial = true;
  }

  onLoginChange(trained: boolean) {
    this.showTutorial = !trained;
    console.log("got login change")
  }


}
