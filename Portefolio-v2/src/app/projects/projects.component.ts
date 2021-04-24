import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {

  @ViewChild('myIdentifier')
  myIdentifier:ElementRef;
  width:number;
  projects = [{
    title:'Portefolio_v1',
    image:'../../assets/por.png',
    git:'https://github.com/MarcoMachado-WebDev/Portefolio',
    site:'https://portefoliomarcomachado.web.app/#Home'
  },{
    title:'Recipe Book',
    image:'../../assets/RecipeBook.png',
    git:'https://github.com/MarcoMachado-WebDev/AngularProject',
    site:'https://courseprojectangular.web.app/recipes/0'
  },{
    title:'Post Messages',
    image:'../../assets/mess2.jpg',
    git:'https://github.com/MarcoMachado-WebDev/MeanProject',
    site:'http://myangularmeancourse.s3-website.us-east-2.amazonaws.com/'
  },];

  ngAfterViewInit() {

    this.width = this.myIdentifier.nativeElement.offsetWidth;

    if(this.width<800){
      this.projects = [{
        title:'Portefolio_v1',
        image:'../../assets/porMob.png',
        git:'https://github.com/MarcoMachado-WebDev/Portefolio',
        site:'https://portefoliomarcomachado.web.app/#Home'
      },{
        title:'Recipe Book',
        image:'../../assets/RecipeBookMob.png',
        git:'https://github.com/MarcoMachado-WebDev/AngularProject',
        site:'https://courseprojectangular.web.app/recipes/0'
      },{
        title:'Post Messages',
        image:'../../assets/messMob 1.svg',
        git:'https://github.com/MarcoMachado-WebDev/MeanProject',
        site:'http://myangularmeancourse.s3-website.us-east-2.amazonaws.com/'
      }]
    }
  }

  atual = 0;

  onNext(){
    if(this.atual +1 == this.projects.length){
      this.atual = 0;
    }else{
      this.atual ++;
    }
  }

  onPrev(){
    if(this.atual == 0){
      this.atual = this.projects.length -1 ;
    }else{
      this.atual --;
    }
  }
}
