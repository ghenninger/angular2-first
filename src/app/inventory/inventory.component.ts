// Forts. från inventory.service-fil
import { Component, OnInit } from '@angular/core';
// Importerar modulen som jag lade til i "app.module.ts" för att kunna göra http-anrop.
import { InventoryService } from '../inventory.service';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  public inventory; 

  constructor(private _inventoryService: InventoryService) { }

  ngOnInit() {
    this._inventoryService.getInventory().subscribe((data) => {
      this.inventory = data;
    });
  }

}