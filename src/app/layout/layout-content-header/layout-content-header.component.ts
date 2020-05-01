import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-layout-content-header',
  templateUrl: './layout-content-header.component.html',
  styleUrls: ['./layout-content-header.component.scss']
})
export class LayoutContentHeaderComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
