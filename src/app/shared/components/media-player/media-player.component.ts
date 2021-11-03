import { Component, OnInit } from '@angular/core';
import { TracksModule } from '../../../modules/tracks/tracks.module';
import { TrackModel } from '../../../core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
mockCover: TrackModel ={
  cover: 'https://www.buenamusica.com/media/fotos/cantantes/biografia/twenty-one-pilots.jpg',
  album: 'Ride',
  name: 'Twenty One Pilots',
  url: 'http://localhost/tracks.mp3',
  _id: 1
}
  constructor() { }

  ngOnInit(): void {
  }

}
