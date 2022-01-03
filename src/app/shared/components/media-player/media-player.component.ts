import { Component, OnDestroy, OnInit } from '@angular/core';
import { TracksModule } from '../../../modules/tracks/tracks.module';
import { TrackModel } from '../../../core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
mockCover: TrackModel ={
  cover: 'https://www.buenamusica.com/media/fotos/cantantes/biografia/twenty-one-pilots.jpg',
  album: 'Ride',
  name: 'Twenty One Pilots',
  url: 'http://localhost/tracks.mp3',
  _id: 1
}
  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {

    const observer1$: Subscription = this.multimediaService.callback.subscribe(
   (response: TrackModel) =>{
      console.log('Recibe :D',response);
    }
    )

  }
  ngOnDestroy():void{
    console.log('BOOOM!');
  }

}
