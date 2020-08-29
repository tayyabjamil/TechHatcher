import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() type = 'home'

  constructor(private router: Router) { }

  ngOnInit() {
  }

  routeto(page){
    this.router.navigate([page]);
    window.scrollTo(0, 0);

  }
}
