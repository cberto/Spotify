import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
mockCover: any ={
  cover: 'https://www.buenamusica.com/media/fotos/cantantes/biografia/twenty-one-pilots.jpg',
  album: 'Ride',
  name: 'Twenty One Pilots'
}
  constructor() { }

  ngOnInit(): void {
  }

}
