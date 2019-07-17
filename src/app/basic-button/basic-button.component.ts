import { Component, OnInit,  Input  } from '@angular/core';
import {MatButtonModule, MatIconModule} from '@angular/material';
@Component({
  selector: 'cn-basic-button',
  templateUrl: './basic-button.component.html',
  styleUrls: ['./basic-button.component.scss']
})
export class BasicButtonComponent implements OnInit {
  public type = 'mat-raised-button';
  @Input() public btColor ?: string;
  @Input() public btText ?: string;
  @Input() public isDisabled ?: boolean = false;
  @Input() public btnType ?: string;
  constructor() { }

  ngOnInit() {
  }

}
