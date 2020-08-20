import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {Howl, Howler} from 'howler';
import './Tab1.css';

const Tab1: React.FC = () => {
  function soundPlay() {
    const Sounds = new Howl({
      src: ["http://kjhkstream.org:8000/stream_low"]
    })
    Sounds.play()
    console.log("sound")
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Listen</IonTitle>
          </IonToolbar>
        </IonHeader>
      <audio controls>
	      <source src="http://kjhkstream.org:8000/stream_high" />
      </audio>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
