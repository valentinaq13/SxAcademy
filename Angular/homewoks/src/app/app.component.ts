import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'homewoks';
  list = true;
  productosDelSuper = [
    { nombre: "Queso", precio: 10},
    { nombre: "Gaseosa", precio: 5},
    { nombre: "Cerveza", precio: 20},
    { nombre: "Arroz", precio: 7},
    { nombre: "Fideos", precio: 5},
    { nombre: "Lavandina", precio: 9},
    { nombre: "Shampoo", precio: 3},
    { nombre: "Jabon", precio: 4},
  ];

  hideList() {
    this.list = false;
  };
  showList(){
    this.list = true
  }
}

