import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  public display: boolean;

  constructor() {
    this.display = false;
  }

  ngOnInit() {
  }

  public loadMoreInformation() {
    this.display = true;
    $('button').slideToggle('slow');
  }

  public closeMoreInformation(): void {
    this.display = false;
    $('button').slideToggle('slow');
  }
}
