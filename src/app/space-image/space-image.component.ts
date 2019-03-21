import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var JS9: any;
declare var X: any;
declare var Y: any;

@Component({
  selector: 'app-space-image',
  templateUrl: './space-image.component.html',
  styleUrls: ['./space-image.component.css']
})
export class SpaceImageComponent implements OnInit {

  label: string;
  x_coord: number;
  y_coord: number;
  url: string;
  info: string;

  constructor(private http: HttpClient) {
    this.info = "Is the source in the green circle a star?"
    this.url = "../assets/img/patch_1_1.fits";
    this.getSpaceImage()
      .subscribe( (data: SpaceImage)  => {
        this.label = JSON.parse(data.body)['label'];
        this.x_coord = JSON.parse(data.body)['coords'][0];
        this.y_coord = JSON.parse(data.body)['coords'][1];
        X = this.x_coord;
        Y = this.y_coord;
        console.log(this.label);
        console.log(this.x_coord);
        console.log(this.y_coord);

        let imageSetUp = function(x, y) {
          console.log(JS9.GetLoadStatus(this.url));
          // JS9.SetZoom("toFit");
          JS9.SetWCS('A');
          JS9.SetWCSUnits("pixels");
          JS9.SetScale("asinh", -1, 30);
          console.log(X);
          console.log(Y);
          // console.log(JS9.GetWCSSys());
          // var pixobj = JS9.WCSToPix(X, Y);
          // console.log(pixobj);
          JS9.SetPan({px:(X-1), py:(Y-1)});
          JS9.AddRegions("circle", {px:(X-1), py:(Y-1)});
        };

        let displayFull = function() {
          var opts = {xdim:4200, ydim:4200, ondisplaysection: imageSetUp}
          JS9.DisplaySection(opts);
        }

        var opts = {onload: displayFull}

        JS9.Load(this.url, opts);
        console.log(JS9);

      });
  }

  ngOnInit() { }

  getSpaceImage() {
    this.http.options("https://bypff11t87.execute-api.us-west-2.amazonaws.com/default/random_src");
    return this.http.get("https://bypff11t87.execute-api.us-west-2.amazonaws.com/default/random_src ");
  }

  LabeledYes(){
    console.log("you labeled yes");
    if(this.label == "STAR") {
      this.info = "Correct! The source is a star.";
    } else {
      this.info = "Not Correct. The source is not a star.";
    }
  }

  LabeledNo(){
      console.log("you labeled no");
      if(this.label != "STAR") {
        this.info = "Correct! The source is not a star.";
      } else {
        this.info = "Not Correct. The source is a star.";
      }
  }

  NextImage(){
    console.log("you went to next image");
      this.getSpaceImage()
        .subscribe( (data: SpaceImage)  => {
            this.label = JSON.parse(data.body)['label'];
            this.x_coord = JSON.parse(data.body)['coords'][0];
            this.y_coord = JSON.parse(data.body)['coords'][1];
            X = this.x_coord;
            Y = this.y_coord;
            console.log(this.label);
            console.log(this.x_coord);
            console.log(this.y_coord);

            JS9.RemoveRegions("all");
            JS9.SetPan({px:(X-1), py:(Y-1)});
            JS9.AddRegions("circle", {px:(X-1), py:(Y-1)});

        });
  }
}

class SpaceImage {
  body;
  headers;
  statusCode;
}
