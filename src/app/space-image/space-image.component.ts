import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var JS9: any;

@Component({
  selector: 'app-space-image',
  templateUrl: './space-image.component.html',
  styleUrls: ['./space-image.component.css']
})
export class SpaceImageComponent implements OnInit {

  label: string;
  x: number;
  y: number;

  constructor(private http: HttpClient) {
    this.getSpaceImage()
      .subscribe( (data: SpaceImage)  => {
        this.label = JSON.parse(data.body)['label'];
        this.x = JSON.parse(data.body)['coords'][0];
        this.y = JSON.parse(data.body)['coords'][1];
        console.log(this.label);
        console.log(this.x);
        console.log(this.y);
        var image_url = "https://s3-us-west-2.amazonaws.com/lsst-actual/843df07d-4760-46d3-9ef4-433df6a11fd7.fits"
        var opts = {scale: "asinh"}
        JS9.Preload("../assets/img/patch_1_1.fits", opts);
        console.log(JS9);
        // JS9.SetScale("asinh", -1, 30);
        // JS9.SetZoom("in");
        // console.log(JS9.GetZoom())
        // JS9.PixToWCS();
        // JS9.SetPan(this.x, this.y);
        // JS9.AddRegions("circle", {x: this.x, y:this.y, radius: 15, color: "green"});
      });
  }

  ngOnInit() { }

  getSpaceImage() {
    this.http.options("https://bypff11t87.execute-api.us-west-2.amazonaws.com/default/random_src");
    return this.http.get("https://bypff11t87.execute-api.us-west-2.amazonaws.com/default/random_src ");
  }

  LabeledYes(){
    console.log("you labeled yes");
  }

  LabeledNo(){
      console.log("you labeled no");
  }

  // NextImage(){
  //   console.log("you went to next image");
  //     this.getSpaceImage()
  //       .subscribe( (data: SpaceImage)  => this.link = JSON.parse(data.body)['url']);
  // }
}

class SpaceImage {
  body;
  headers;
  statusCode;
}
