import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Peaches", 10),
    new Ingredient("Melons", 3),
    new Ingredient("Bananas", 1),
    new Ingredient("Walnuts", 2),
    new Ingredient("Milk", 3),

  ];

  constructor() { }

  ngOnInit() {
  }

}
