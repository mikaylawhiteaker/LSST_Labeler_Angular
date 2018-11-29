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
      .subscribe( data  => this.link = data['url']);
  }

  ngOnInit() { }

  getSpaceImage() {
    this.http.options("https://c4gyp3nm40.execute-api.eu-west-1.amazonaws.com/default/get_random_image_data").subscribe(data => console.log(data));
    return this.http.get("https://c4gyp3nm40.execute-api.eu-west-1.amazonaws.com/default/get_random_image_data");
  }

}
