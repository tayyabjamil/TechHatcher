import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() height = '32px';
  @Input() width = '100%';
  @Input() text = '';
  @Input() type = '';
  @Input() isAnimation = 'true';
  @Input() class = '';
  @Input() backgroundColor = '';
  @Output() click = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {

  }
  
  clickEvent(event){
    this.click.emit(event);
  }

}
