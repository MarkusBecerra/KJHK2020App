import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media/ngx';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private streamingMedia: StreamingMedia) { }

  startAudio() {
    let options: StreamingAudioOptions = {
      successCallback: () => { console.log() },
      errorCallback: () => { console.log() },
      initFullscreen: false,
    }

    this.streamingMedia.playAudio('http://kjhkstream.org/stream_low', options);
  }

  stopAudio() {
    this.streamingMedia.stopAudio();
  }

}
