import { Component, OnInit } from '@angular/core';
import { BookinformationService } from '../bookinformation.service';

@Component({
  selector: 'app-subcomponent1',
  templateUrl: './subcomponent1.component.html',
  styleUrls: ['./subcomponent1.component.css']
})
export class Subcomponent1Component implements OnInit {

  public bookinfo = [];
  constructor(private _bookinformation:BookinformationService) { }

  ngOnInit() {
    this.bookinfo = this._bookinformation.GetBookInformation();
  }

}
