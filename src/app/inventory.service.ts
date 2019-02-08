// Källa: https://angular.io/tutorial/toh-pt4 || Workshop canvas
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// "Typescript makro" = Gör saker bakom kulisserna, denna deklarerar att klassen ska "injectas"
@Injectable({
  providedIn: 'root'
})

export class InventoryService {

  // Detta skapar en privat variable som heter http baserat på modulen vi importerar ovan.
  constructor(private http: HttpClient) { }

  public getInventory() {
    return this.http.get('https://rickandmortyapi.com/api/episode/');
  }

}

// För att lösa problemet med flera pages i svaret från API behöver jag arbeta med "Javascript recursions" och "promises"
// Källa: https://itnext.io/how-to-get-resources-from-paginated-rest-api-d7c20fe2bb0b