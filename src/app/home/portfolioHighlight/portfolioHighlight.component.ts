import { Component, OnInit, Input } from '@angular/core';
// import { DataService } from '../Data Services/data.service';
import { Router } from '@angular/router';
import { DataService } from '../../Data Services/data.service';

@Component({
  selector: 'app-portfolio-highlight',
  templateUrl: './portfolioHighlight.html',
  styleUrls: ['./portfolioHighlight.scss']
})
export class PortfolioHightlightComponent implements OnInit {
  @Input() animationClass: string = "tu-color-animation";

  data;
  workings;
  heading;
  description;

  constructor(private dataService: DataService, private router: Router ) { }

  ngOnInit() {
    this.animationClass = 'tu-color-animation'
    this.data = this.dataService.home;
    this.workings = this.dataService.workPage;
    this.heading = this.data.headerSection.tittle;
    this.description = this.data.headerSection.description;

    document.addEventListener('aos:in:portfolio0', ({ detail }: any) => {
      console.log('animated in', detail);
      this.animationClass = 'tu-color-animation'
    });
    document.addEventListener('aos:in:portfolio1', ({ detail }: any) => {
      console.log('animated in', detail);
      this.animationClass = 'fh-color-animation'
    });
    document.addEventListener('aos:in:portfolio2', ({ detail }: any) => {
      console.log('animated in', detail);
      this.animationClass = 'mf-color-animation'
    });
    document.addEventListener('aos:in:portfolio3', ({ detail }: any) => {
      console.log('animated in', detail);
      this.animationClass = 'mf-color-animation'
    });
    document.addEventListener('aos:in:portfolio4', ({ detail }: any) => {
      console.log('animated in', detail);
      this.animationClass = 'mf-color-animation'
    });
  }
  routetoDetail(item) {
    this.router.navigate(['work'] , { queryParams: { item } });
    window.scrollTo(0, 0);

  }
  routetopage(page){
    this.router.navigate([page]);
    window.scrollTo(0, 0);
  }

}
