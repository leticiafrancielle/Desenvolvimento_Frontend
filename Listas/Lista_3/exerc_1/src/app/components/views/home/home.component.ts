import { Component } from '@angular/core';
import Album from 'src/app/models/album';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public mesage: string = "MUSIC"

  public albuns: Album[] = new Array<Album>();

  constructor() {
    this.albuns.push(new Album("SOS", "R&B", "SZA", "https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1" ))
    this.albuns.push(new Album("SOS", "R&B", "SZA", "https://musicainstantanea.com.br/wp-content/uploads/2022/12/SZA-SOS-700x700.jpg" ))
    this.albuns.push(new Album("SOS", "R&B", "SZA", "https://musicainstantanea.com.br/wp-content/uploads/2022/12/SZA-SOS-700x700.jpg" ))
    this.albuns.push(new Album("SOS", "R&B", "SZA", "https://musicainstantanea.com.br/wp-content/uploads/2022/12/SZA-SOS-700x700.jpg" ))
    this.albuns.push(new Album("SOS", "R&B", "SZA", "https://musicainstantanea.com.br/wp-content/uploads/2022/12/SZA-SOS-700x700.jpg" ))
    this.albuns.push(new Album("SOS", "R&B", "SZA", "https://musicainstantanea.com.br/wp-content/uploads/2022/12/SZA-SOS-700x700.jpg" ))



  }

}
