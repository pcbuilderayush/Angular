import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
templateUrl:'./app.component.html',
styleUrls:['./app.component.css']
})
export class AppComponent {
  private jobTitle: String=null;
  private salary: number=null;
  private annualSalary: number=null;
  private logo:string=null;
  private username:string =null;

  constructor(){
    this.jobTitle="trainer";
    this.logo="./assets/Angular_full_color_logo.svg.png"
    this.salary=50000;

  }
public getAnnualSalary():number{
  this.annualSalary=this.salary*12;
  return this.annualSalary;
}
public greetUser():void{
  this.username=" Mr "+this.username;
  alert(' Welcome '+this.username);
}
}
