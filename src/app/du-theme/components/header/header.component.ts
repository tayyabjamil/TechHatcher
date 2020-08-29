import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

@Input() type = 'home'
@Input() text = ''
draweropen = false;
  constructor(private router: Router) { }

  ngOnInit() {
   
  }
  routeto(page){
    this.router.navigate([page]);
    window.scrollTo(0, 0);

  }
}
