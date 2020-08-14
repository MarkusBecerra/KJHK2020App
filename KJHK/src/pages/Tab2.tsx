import { IonContent, IonItem, IonLabel, IonList, IonListHeader, IonToolbar, IonHeader, IonPage, IonTitle } from '@ionic/react';
import './Tab2.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export interface MusicLogs {
  date: Date;
  logs: Log[];
}

export interface CurrentDate{
  date: Date;
}

export interface Log {
  Artist: string;
  Album: string;
  Song: string;
  Entry_Date: string;
}
const Tab2: React.FC = (props) => {
  const [logs, setLogs ] = useState<Log[]>([]);
  const [currentDate, setCurrentDate ] = useState<CurrentDate>();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://kjhk.org/web/app_resources/appMusicLogs.php?day=0',
      );
      setLogs(result.data.logs);
      setCurrentDate(result.data.date);
    };
  
    fetchData();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">KJHK LOGS {currentDate}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {currentDate}
        <IonList>
        {logs.map((log, idx) => (
          <IonItem key={idx}>
            <IonLabel>
              <h2>{log.Song}</h2>
            <span> {log.Artist} {log.Album} {log.Entry_Date} </span>
            </IonLabel>
          </IonItem>
        ))}
      </IonList>


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
