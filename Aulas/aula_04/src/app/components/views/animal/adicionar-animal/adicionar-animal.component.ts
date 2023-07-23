import { Component } from '@angular/core';
import { Animal } from 'src/app/model/animal';

@Component({
  selector: 'app-adicionar-animal',
  templateUrl: './adicionar-animal.component.html',
  styleUrls: ['./adicionar-animal.component.css']
})
export class AdicionarAnimalComponent {
  public nomeDoAnimal!: string;
  public raca!: string;
  public peso!: number;

  public adicionarAnimal(){
    let animal = new Animal(this.nomeDoAnimal, this.raca, this.peso);
    console.log(animal);
  }
}
