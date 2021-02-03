import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {


  private equipesFull: any = [
    {
      id: 1,
      nom: 'PSG',
      pays: 'France'
    },
    {
      id: 2,
      nom: 'Barcelon',
      pays: 'Espagne'
    },
    {
      id: 3,
      nom: 'Milan',
      pays: 'Italie'
    }
  ];

  private joueurs: any = [
    {
      id: 1,
      nom: "Ronaldo",
      numero: 9,
      poste: "attaquant"
    },
    {
      id: 2,
      nom: "Messi",
      numero: 10,
      poste: "attaquant"
    },
    {
      id: 3,
      nom: "Xavi",
      numero: 7,
      poste: "milieu"
    },
    {
      id: 4,
      nom: "Toto",
      numero: 10,
      poste: "attaquant"
    }
  ]



  constructor() { }

  getEquipes() { return this.equipesFull; }
  getJoueurs() { return this.joueurs; }
}
