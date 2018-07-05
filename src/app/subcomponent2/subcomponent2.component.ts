import { Component, OnInit } from '@angular/core';
import { BookinformationService } from '../bookinformation.service';
@Component({
  selector: 'app-subcomponent2',
  templateUrl: './subcomponent2.component.html',
  styleUrls: ['./subcomponent2.component.css']
})
export class Subcomponent2Component implements OnInit {

  public bookinfo = [];
  constructor(private _bookinformation:BookinformationService) { }

  ngOnInit() {
    this.bookinfo = this._bookinformation.GetBookInformation();
  }


}
