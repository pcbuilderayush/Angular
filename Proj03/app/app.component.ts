import { Component } from '@angular/core';
import { asLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj03';
  private message: string=null;
  private version: number=null;
  private topics: string[]=null;
  private ind:number=null;

  public constructor(){
    this.message= "Welcome to the Course";
    this.version=8;
    this.topics=['Data Binding','Forms','Http','Routing'];
  }
  public addTopic(curTopic:string): void{
    this.topics.push(curTopic);
  
  }
  public searchTopic(curTopic:string): void {
    let temp=0;
    this.topics.forEach(element => {
      if(curTopic==element){
      alert("Topic is Found");}}
    );
    }
    public delete(curTopic:string):void{
      if(curTopic=="")
      alert("no topics to delete");
      for(var topic of this.topics)
      if(curTopic==topic){
  
      
      this.ind=this.topics.indexOf(curTopic);
      this.topics.splice(this.ind,1);
      }
    
    } 


  public deleteTopic(idx : number): void{ 
      const index = this.topics.indexOf('idx');
      this.topics.splice(index, 1);
  }
  
}
