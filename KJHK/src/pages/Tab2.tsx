import React from 'react';
import { IonButton, IonContent, IonItem, IonLabel, IonList, IonListHeader, IonToolbar, IonHeader, IonPage, IonTitle    } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import LogsContainer from '../components/LogsContainer';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Logs</IonTitle>
          </IonToolbar>
        </IonHeader>
 
        <IonList>
          <IonListHeader lines="inset">
            <IonLabel>Trending</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonLabel color="primary">
              <h1>harry styles</h1>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel color="primary">
              <h1>christmas</h1>
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonLabel color="primary">
              <h1>falling</h1>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
