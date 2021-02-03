import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-equipes',
  templateUrl: './list-equipes.component.html',
  styleUrls: ['./list-equipes.component.css']
})
export class ListEquipesComponent implements OnInit {

  titre: string = "Global Knowledge";  // attribut

  equipes: string[] = ["PSG", "Barcelone", "OM", "Milan"];
  equipesFull: any = [];
  joueurs: any = [];
  public nbr: number = 0;
  public res: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  increment() { 
   this.nbr = this.nbr + 1;
  }

  display() { 
    this.res = !this.res;
  }
}
