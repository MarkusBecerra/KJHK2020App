import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {Howl, Howler} from 'howler';
import ReactHowler from 'react-howler';
import axios from 'axios';
import ReactAudioPlayer from 'react-audio-player';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [play, setPlay] = useState<boolean>(false);
  const [currentSong, setCurrentSong] = useState<String>();
  const [currentArtist, setCurrentArtist] = useState<String>();
  const fetchData = async () => {
    const result = await axios(
      'http://kjhk.org/web/app_resources/nowPlaying.php',
    );
    setCurrentSong(result.data.song.toString());
    setCurrentArtist(result.data.artist.toString());
  };
  useEffect(() => {
    fetchData();
  }, []);

  function soundPlay() {
   var player = new Howl({
      src: 'http://kjhkstream.org:8000/stream_low',
      html5: true,
      preload: 'metadata',
      });
    player.play();
    console.log("sound")
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonTitle size="large">Listen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Listen</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>
      <ReactHowler src='http://kjhkstream.org:8000/stream_low' html5={true} playing={play} />
      <button onClick={() => setPlay(!play)}>
        { play ? 'Pause' : 'Play' }
      </button>
    </div>


        {/* <ReactAudioPlayer
          src="http://kjhkstream.org:8000/stream_low"
          autoPlay
          controls
        /> */}

             {/* <div className="App">
        <button onClick={soundPlay}>play</button>
      </div> */}
      </IonContent>
      <div>
        {currentSong}
        {currentArtist}
      </div>
    </IonPage>
  );
};

export default Tab1;
