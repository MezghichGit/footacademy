import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {

    /// attribut de l'équipe

  public iden: number;
  public name: string ;
  public country: string;

  constructor() { }

  ngOnInit(): void {

    
  }

  createEquipe(data)
  {
    alert(data.value.iden + " " + data.value.name + " " + data.value.country);
    //console.log(this.iden + " " + this.name + " " + this.country);
  }
}
