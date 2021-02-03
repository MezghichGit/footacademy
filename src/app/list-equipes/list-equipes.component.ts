import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-equipes',
  templateUrl: './list-equipes.component.html',
  styleUrls: ['./list-equipes.component.css']
})
export class ListEquipesComponent implements OnInit {

  titre: string = "Global Knowledge";  // attribut

  public nbr: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment() { 
   this.nbr = this.nbr + 1;
  }
}
