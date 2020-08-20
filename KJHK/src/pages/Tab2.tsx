import { IonContent, IonItem, IonLabel, IonList, IonListHeader, IonToolbar, IonHeader, IonPage, IonTitle, IonRefresher, IonRefresherContent } from '@ionic/react';
import { RefresherEventDetail } from '@ionic/core';
import { chevronDownCircleOutline } from 'ionicons/icons';
import './Tab2.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logs from '../components/Logs'

export interface Log {
  Artist: string;
  Album: string;
  Song: string;
  Entry_Date: string;
}

const Tab2: React.FC = () => {
  const [logs, setLogs] = useState < Log[] > ([]);
  const [currentMonth, setCurrentMonth] = useState < String > ();
  const [currentDay, setCurrentDay] = useState < String > ();
  const fetchData = async () => {
    const result = await axios(
      'http://kjhk.org/web/app_resources/appMusicLogs.php?day=0',
    );
    setLogs(result.data.logs);
    let myDate = new Date(result.data.date.replace(/-/g, "/"));
    setCurrentMonth((myDate.getMonth() + 1).toString());
    setCurrentDay(myDate.getDate().toString());
  };
  useEffect(() => {
    fetchData();
  }, []);


  function doRefresh(event: CustomEvent < RefresherEventDetail > ) {
    console.log('Begin async operation');
    //fetchData();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.detail.complete();
    }, 2000);
  }

  function getTimeAMPM(mydate: string) {
    const date = new Date(mydate.replace(/-/g, "/"));

    return date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    })
  }

  return (
    <IonPage>
      <IonContent>
      <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">KJHK LOGS </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent pullingIcon={chevronDownCircleOutline} pullingText="Pull to refresh"
            refreshingSpinner="circles" refreshingText="Refreshing...">
          </IonRefresherContent>
        </IonRefresher>

        <IonList>
          <IonListHeader lines="inset">
            <IonLabel>Logs for {currentMonth}/{currentDay}</IonLabel>
          </IonListHeader>
          {logs.map((log, idx) => (
          <IonItem key={idx}>
            {getTimeAMPM(log.Entry_Date)}
            <IonLabel>
              <h2>{log.Song}</h2>
              <span> By {log.Artist} From {log.Album} </span>
            </IonLabel>
          </IonItem>
          ))}
        </IonList>


      </IonContent>
    </IonPage>
  );
};

export default Tab2;
