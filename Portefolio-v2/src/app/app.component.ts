import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portefolio-v2';
  path:string = "home";

  vigation(about:HTMLElement){
    about.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  onViewPort(){
    this.path="Home";
    console.log(this.path);
  }
}
