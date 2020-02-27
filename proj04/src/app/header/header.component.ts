import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  webTitle:String;
  welcomeImage:string;
  welcomeText:String;

  constructor() { 
    this.webTitle="Angular SPA DEMO";
    this.welcomeText="Welcome all";
    this.welcomeImage="assets/images/namastey.png";
  }


}
