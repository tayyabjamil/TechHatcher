import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-upperFooter',
  templateUrl: './upperFooter.component.html',
  styleUrls: ['./upperFooter.component.scss']
})
export class UpperFooterComponent implements OnInit {

  @Input () bgprime = false;

  constructor() { }

  ngOnInit() {
  }

}
