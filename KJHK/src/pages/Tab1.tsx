import React, { useState, useEffect, useContext } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {Howl, Howler} from 'howler';
import ReactHowler from 'react-howler';
import ReactAudioPlayer from 'react-audio-player';
import './Tab1.css';
import NowPlayingContext from './NowPlayingContext';


const Tab1: React.FC = () => {
  const context = useContext(NowPlayingContext)
  const [play, setPlay] = useState<boolean>(false);
  const [currentSong, setCurrentSong] = useState<String>();
  const [currentArtist, setCurrentArtist] = useState<String>();
  const fetchData = async () => {
    const result = await fetch(
      'https://kjhk.org/web/app_resources/nowPlaying.php',
    ).then(response=> response.json());
    setCurrentSong(result.song.toString());
    setCurrentArtist(result.artist.toString());
  };
  useEffect(() => {
    fetchData();
  }, []);

  setInterval(function(){
    fetchData()
  }, 30000)

  function soundPlay() {
   var player = new Howl({
     src: 'https://streamingv2.shoutcast.com/kjhk_128.mp3',
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
          <ReactHowler src='https://streamingv2.shoutcast.com/kjhk_128.mp3' html5={true} playing={play} />
      <button onClick={() => setPlay(!play)}>
        { play ? 'Pause' : 'Play' }
      </button>
    </div>


        {/* <ReactAudioPlayer
          src="http://kjhkstream.org:8000/stream_low"
          controls
        /> */}

             <div className="App">
        <button onClick={soundPlay}>play</button>
          <audio src="https://streamingv2.shoutcast.com/kjhk_128.mp3" controls></audio>
      </div>
      </IonContent>
      <div>
        {currentSong}
        {currentArtist}
      </div>
    </IonPage>
  );
};

export default Tab1;
