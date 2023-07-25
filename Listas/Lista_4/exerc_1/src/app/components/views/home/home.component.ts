import { Component } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animais.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public animais!: Animal[]; 

    constructor(private animalService: AnimalService) { }
  
    ngOnInit(): void {
      this.animalService.buscarAnimais().subscribe((response) => {
        this.animais = response
        console.log(response)
      })
    }
}
