import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model"
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Test Recipe", "This is simply a test description", 'https://cdn.pixabay.com/photo/2017/05/09/21/49/gecko-2299365__480.jpg'),
    new Recipe("Test Recipe", "This is simply a test description", 'https://cdn.pixabay.com/photo/2017/05/09/21/49/gecko-2299365__480.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
