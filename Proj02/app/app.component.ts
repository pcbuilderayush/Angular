import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private Number1: number=null;
  private Number2: number=null;
  private result:number=null;
  public sum() :void {
    this.result= this.Number1+this.Number2;
  }
  public diff(): void{
    this.result= this.Number1-this.Number2;
  }  
  public mul(): void{
    this.result= this.Number1*this.Number2;
  }  
  public div(): void{
    this.result= this.Number1/this.Number2;
  }

  title = 'proj02';
}
