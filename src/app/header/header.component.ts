import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(eventLabel: string) {
    this.featureSelected.emit(eventLabel);
  }

  constructor() { }

  ngOnInit() {
  }

}
