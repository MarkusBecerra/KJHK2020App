import React, { useState, useEffect, useContext } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { Howl, Howler } from 'howler';
import ReactHowler from 'react-howler';
import ReactAudioPlayer from 'react-audio-player';
import './Tab1.css';
import NowPlayingContext from './NowPlayingContext';

declare const window: any;



declare global {
  interface Window { MyNamespace: any; }
}

window.MyNamespace = window.MyNamespace || {};
const Tab1: React.FC = () => {
  const context = useContext(NowPlayingContext);
  const [play, setPlay] = useState<boolean>(false);
  const [currentSong, setCurrentSong] = useState<String>();
  const [currentArtist, setCurrentArtist] = useState<String>();
  const fetchData = async () => {
    const result = await fetch(
      'https://kjhk.org/web/app_resources/nowPlaying.php',
    ).then(response => response.json());
    setCurrentSong(result.song.toString());
    setCurrentArtist(result.artist.toString());
  };
  useEffect(() => {
    let FB = window.FB;
    fetchData();
  }, []);

  setInterval(function () {
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
          <button className = "playButton" onClick={() => setPlay(!play) }>
            {play ? <img className = "playButtonImg" src= "../assets/02_Now_Playing/SVG/pauseButton.svg"></img> : <img className = "playButtonImg" src= "../assets/02_Now_Playing/SVG/Play_Button.svg"></img>}
          </button>
        </div>

        {/* <ReactAudioPlayer
          src="https://streamingv2.shoutcast.com/kjhk_128.mp3"
          controls
        /> */}
        {/* 
             <div className="App">
        <button onClick={soundPlay}>play</button>
          <audio src="https://streamingv2.shoutcast.com/kjhk_128.mp3" controls></audio>
      </div> */}
        <div>
          <div className = "currentSong">
            {currentSong}
          </div>
          <div className = "currentArtist">
            {currentArtist}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;