import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.sass']
})
export class MessageComponent implements OnInit {
  title:string;
  post:string;
  className:string;
  colors:Array<string>;

  constructor() { 
  }

  changeColor(event){
    if (event.altKey === false) {return}
    let index = this.colors.indexOf(this.className)+1;
    index = (index === this.colors.length)? 0 : index;
    this.className = this.colors[index];
    console.log(event);
  }

  ngOnInit() {
    this.colors = ['red', 'green', 'blue'];
    this.className = this.colors[0];
    this.title = 'Статья';
    this.post = `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Explicabo error, debitis ex reiciendis aliquid facilis 
      dolorem quas iure itaque cupiditate animi quae eligendi, 
      odit obcaecati porro beatae nobis incidunt ipsa.
    `;
  }
}
