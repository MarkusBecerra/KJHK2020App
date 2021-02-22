import React, { createContext, useState, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
// import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import NowPlayingContext from './pages/NowPlayingContext'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';



const App: React.FC = () => {

  const [song, setSong] = useState<string>("null");
  const [artist, setArtist] = useState<string>("null");
  const fetchData = async () => {
    const result = await fetch(
      'https://kjhk.org/web/app_resources/nowPlaying.php',
    ).then(response => response.json());
    if(result){
      setSong(result.song.toString());
      setArtist(result.artist.toString());
    }
    else{
      setSong("NO WAY");
      setArtist("NO WAY");
    }

  };
  useEffect(() => {
    fetchData();
  }, []);



return (
  <IonApp>
    <IonReactRouter>
      <NowPlayingContext.Provider value={{song, artist}}>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tab1" component={Tab1} exact={true} />
          <Route path="/tab2" component={Tab2} exact={true} />
          <Route path="/tab3" component={Tab3} />
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon='../assets/img/kjhk-listen-outline.svg' />
            <IonLabel>Listen</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon='../assets/img/kjhk-playlists-outline.svg' />
            <IonLabel>Logs</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon='../assets/img/kjhk-contact-outline.svg' />
            <IonLabel>Contact</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      </NowPlayingContext.Provider>
    </IonReactRouter>
  </IonApp>
);

};


export default App;
