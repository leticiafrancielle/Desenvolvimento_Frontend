import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-listagem-animais',
  templateUrl: './listagem-animais.component.html',
  styleUrls: ['./listagem-animais.component.css']
})
export class ListagemAnimaisComponent implements OnInit{
  
  constructor(private animalService: AnimalService) {}

  public animais!: Animal[]

    ngOnInit(): void {
      this.animalService.getAnimais().subscribe((response: Animal[]) => {
        this.animais = response
      })
    }
}
