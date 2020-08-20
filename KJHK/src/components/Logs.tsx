import React from 'react';
import './Logs.css';
import {useLogsRetriever} from '../hooks/useLogsRetriever';
import { IonContent, IonItem, IonLabel, IonList, IonListHeader, IonToolbar, IonHeader, IonPage, IonTitle, IonRefresher, IonRefresherContent } from '@ionic/react';

const Logs: React.FC = () => {
    const { logs, currentDate } = useLogsRetriever();

    function getTimeAMPM(mydate: string) {
    const date = new Date(mydate.replace(/-/g, "/"));

    return date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    })
  }
    return (
        <IonContent>
        <IonList>
          <IonListHeader lines="inset">
              {currentDate}
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

        
    );
};

export default Logs;
