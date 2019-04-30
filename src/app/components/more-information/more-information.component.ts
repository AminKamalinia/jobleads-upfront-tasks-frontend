import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-more-information',
  templateUrl: './more-information.component.html',
  styleUrls: ['./more-information.component.scss']
})
export class MoreInformationComponent implements OnInit {

  constructor() { }

  @Input()
  public display: boolean;

  @Output()
  public onClouseClicked = new EventEmitter<void>();

  ngOnInit() {
  }

  public close(): void {
    this.onClouseClicked.emit();
  }
}
