import React from 'react';
import { IonContent, IonItem, IonLabel, IonList, IonListHeader, IonToolbar, IonHeader, IonPage, IonTitle } from '@ionic/react';
import './Tab2.css';
import Logs from '../components/Logs';

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
        <Logs />

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
