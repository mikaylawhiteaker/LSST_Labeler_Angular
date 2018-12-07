import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-space-image',
  templateUrl: './space-image.component.html',
  styleUrls: ['./space-image.component.css']
})
export class SpaceImageComponent implements OnInit {

  link: string;

  constructor(private http: HttpClient) {
    this.getSpaceImage()
      .subscribe( (data: SpaceImage)  => this.link = JSON.parse(data.body)['url']);
  }

  ngOnInit() { }

  getSpaceImage() {
    this.http.options("https://bypff11t87.execute-api.us-west-2.amazonaws.com/default/random_image");
    return this.http.get("https://bypff11t87.execute-api.us-west-2.amazonaws.com/default/random_image");
  }

  LabeledYes(){
    console.log("you labeled yes");
  }

  LabeledNo(){
      console.log("you labeled no");
  }

  NextImage(){
    console.log("you went to next image");
      this.getSpaceImage()
        .subscribe( (data: SpaceImage)  => this.link = JSON.parse(data.body)['url']);
  }
}

class SpaceImage {
  body;
  headers;
  statusCode;
}
