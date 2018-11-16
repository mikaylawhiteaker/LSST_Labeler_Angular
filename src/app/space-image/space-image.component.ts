import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-space-image',
  templateUrl: './space-image.component.html',
  styleUrls: ['./space-image.component.css']
})
export class SpaceImageComponent implements OnInit {

  link: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.post('https://atjbvyzow2.execute-api.eu-west-1.amazonaws.com/Beta/Images', null).subscribe(data => {
      console.log(data);
    });

    this.link = "https://s3-us-west-2.amazonaws.com/lsst-images/006c9e16-8a04-4511-8a8b-e2ece558ba0b.jpg";
  }

}
