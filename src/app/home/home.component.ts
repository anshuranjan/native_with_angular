import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cn-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'design-system';

  constructor() { }

  ngOnInit() {
  }

   public showAlert(){
    console.log('anshu ranjan Here');
  }

}
