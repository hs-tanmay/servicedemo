import { Component, OnInit } from '@angular/core';
import { BookinformationService } from '../bookinformation.service';

@Component({
  selector: 'app-subcomponent3',
  templateUrl: './subcomponent3.component.html',
  styleUrls: ['./subcomponent3.component.css']
})
export class Subcomponent3Component implements OnInit {

  public bookinfo = [];
  constructor(private _bookinformation:BookinformationService) { }

  ngOnInit() {
    this.bookinfo = this._bookinformation.GetBookInformation();
  }

}
