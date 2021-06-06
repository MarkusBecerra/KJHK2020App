import { IonContent, IonItem, IonLabel, IonList, IonListHeader, IonToolbar, IonHeader, IonPage, IonTitle, IonRefresher, IonRefresherContent, IonButton, IonIcon } from '@ionic/react';
import { RefresherEventDetail } from '@ionic/core';
import { chevronDownCircleOutline,arrowForwardCircle, arrowBackCircle } from 'ionicons/icons';
import './Tab2.css';
import React, { useState, useEffect } from 'react';

export interface Log {
  Artist: string;
  Album: string;
  Song: string;
  Entry_Date: string;
}

const Tab2: React.FC = () => {
  const [logs, setLogs] = useState < Log[] > ([]);
  const [currentMonth, setCurrentMonth] = useState < string > ();
  const [currentDay, setCurrentDay] = useState < string > ();

  const[logDay,setLogDay] = useState< string >(`0`); //this variable is the "day" used in the fetchData function

  const [forwardDisable, setForwardDisable] = useState<boolean>(true);
  const [backDisable, setBackDisable] = useState<boolean>(false);


  const fetchData = async () => {
    const result = await fetch(
      `http://kjhk.org/web/app_resources/appMusicLogs.php?day=${logDay}`,
    ).then(response => response.json());
     const filteredLogs = result.logs.filter(function(entry: Log){
      return(entry.Song !== "")
    });
    setLogs(filteredLogs);
    let myDate = new Date(result.date.replace(/-/g, "/"));
    setCurrentMonth((myDate.getMonth() + 1).toString());
    setCurrentDay(myDate.getDate().toString());
  };




  useEffect(() => {
    fetchData();
    if(logDay === `0`){
      setForwardDisable(true);
    }
    else{
      setForwardDisable(false);
    }

    if(logDay === `20`){
      setBackDisable(true);
    }
    else{
      setBackDisable(false);
    }
  }, [logDay]);



  function doRefresh(event: CustomEvent < RefresherEventDetail > ) {
    console.log('Begin async operation');
    fetchData();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.detail.complete();
    }, 2000);
  }


  function backOneDay(){
        let tempString = parseInt(logDay);
        let finalVal = tempString + 1;
        setLogDay(finalVal.toString());
  }

  function forwardOneDay(){
      let tempString = parseInt(logDay);
      let finalVal = tempString - 1;
      setLogDay(finalVal.toString());
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
        
        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent pullingIcon={chevronDownCircleOutline} pullingText="Pull to refresh"
            refreshingSpinner="circles" refreshingText="Refreshing...">
          </IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">KJHK LOGS</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          <IonListHeader lines="inset">

            <IonButton disabled = {backDisable} onClick={ () => { backOneDay() }} >
              <IonIcon icon={ arrowBackCircle } />
              </IonButton>

            <IonLabel>Logs for {currentMonth}/{currentDay}</IonLabel>

            <IonButton disabled = {forwardDisable} onClick={() => { forwardOneDay() }}>
              <IonIcon icon={arrowForwardCircle} />
            </IonButton>
          </IonListHeader>
          {/* {logs.filter(isEmptySong)} */}
          {logs.map((log, idx) => (
          <IonItem key={idx}>
            {getTimeAMPM(log.Entry_Date)}
            <IonLabel>
              <h2>{log.Song}</h2>
              <h2> By {log.Artist} </h2> 
              <h2> From {log.Album} </h2>
            </IonLabel>
          </IonItem>
          ))}
        </IonList>


      </IonContent>
    </IonPage>
  );


};

export default Tab2;
