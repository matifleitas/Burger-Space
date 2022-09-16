import { Component, OnInit } from '@angular/core';
import { Burger } from './burger';

@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.scss']
})
export class BurgerListComponent implements OnInit {

  burgers: Burger[] = 
[ 
  {
    name: "Marcian",
    ingredients: "Simple con pan de papa, huevo, jamon y queso cheddar de un excelente sabor.",
    sauce: "Tártara",
    price: 750,
    image: "assets/images/marcian.jpg",
    clearance: false
  },
  {
    name: "Apolo-11",
    ingredients: "doble medallon de carne, panceta, pepino y cebolla caramelizada.",
    sauce: "BBQ",
    price: 900,
    image: "assets/images/apolo-11.jpg",
    clearance: false
  },
  {
    name: "Andrómeda",
    ingredients: "triple medallón de carne, doble cheddar, huevo y manteca secreta.",
    sauce: "Mostaza americana",
    price: 1050,
    image: "assets/images/andromeda.jpg",
    clearance: true
  },
  {
    name: "Jupiter Veggie",
    ingredients: "Simple de soja, aceite vegetal, cebolla, lechuga y tomate",
    sauce: "Guacamole",
    price: 850,
    image: "assets/images/jupiter.jpg",
    clearance: true
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
