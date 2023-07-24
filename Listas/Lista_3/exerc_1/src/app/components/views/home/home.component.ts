import { Component } from '@angular/core';
import Album from 'src/app/models/album';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public mesage: string = "MUSIC"

  public albuns: Album[];

  constructor() {
    this.albuns = [];
    this.albuns.push(new Album(1, "SOS", "SZA", "https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1", "🌊" ))
    this.albuns.push(new Album(2, "ASTROWORLD", "Travis Scott", "https://zint.online/wp-content/uploads/2018/08/ASTROWORLD_002.jpg", "🌵" ))
    this.albuns.push(new Album(3, "OVER IT", "Summer Walker", "https://m.media-amazon.com/images/I/516HCDFE6UL._SY1000_.jpg", "💗" ))
    this.albuns.push(new Album(5, "DAMN", "Kendrick Lamar", "https://images.squarespace-cdn.com/content/v1/5f6df5bcd8a0286b9df5948b/1617725070171-KJK0EZAYTGWF7K47ZSLU/175-Kendrick-Lamar-Damn.jpeg", "📍" ))
    this.albuns.push(new Album(6, "SPIDER-VERSE", "Metro Boonim", "https://cdns-images.dzcdn.net/images/cover/bec6e38cb8986f3e5b3b7bd70e154d4f/500x500.jpg", "🕸️" ))

  }

}
