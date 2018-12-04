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
  yesLabel : boolean = false;
  noLabel : boolean = false;
  selectionMade : boolean = true;
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

  LabeledYes(){
    this.yesLabel = true;
    this.selectionMade = false;
    this.noLabel = false;
  }

  LabeledNo(){
    this.noLabel = true;
    this.selectionMade = false;
    this.yesLabel = false;
  }

/*Method where on the click of the submit button check to see if the user
 *selected and no, yes or don't know. Based on the image count it updates the
 *array of image labels with a 0,1,or 2 respectively.
 */
  NextImage(){
    if(this.yesLabel)
    {
      this.yesLabel = false;
      this.selectionMade = true;
      this.imageLabels[this.imageCount] = 1;
      this.imageCount++;
    }
    else if(this.noLabel)
    {
      this.noLabel = false;
      this.selectionMade = true;
      this.imageLabels[this.imageCount] = 0;
      this.imageCount++;
    }
    if(this.imageURLs[this.imageCount] == null)
    {
      this.imageCount = 0;
    }
    this.imageURL = this.imageURLs[this.imageCount];
  }

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
