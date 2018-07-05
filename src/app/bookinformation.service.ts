import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookinformationService {

  constructor() { }

GetBookInformation()
{
  return [
    {"Name":"Pro Angular", "Price":1000, "Author":"Adam Freeman","Pages":600},
    {"Name":"ng-book", "Price":2000, "Author":"Ari Lerner","Pages":1200},
    {"Name":"Angular cookbook", "Price":1500, "Author":"Matt Frisbie","Pages":400},
    {"Name":"Boostrap 4", "Price":3000, "Author":"Benjamin Jakobus","Pages":1000},
        ];
}
}
