import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
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

  prepareRoute(outlet: RouterOutlet) {
    console.log(outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation);
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
