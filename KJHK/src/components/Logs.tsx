import React from 'react';
import './Logs.css';
import {useLogsRetriever} from '../hooks/useLogsRetriever';
import { IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';

const Logs: React.FC = () => {
    const { logs, currentDate } = useLogsRetriever();
    return (
        <IonContent>
            <IonGrid>
                {console.log(currentDate)}
                <IonRow>
                    {console.log(logs)}
                    {/* {logs.map((log, index) => (
                        <IonCol size="6" key={index}>
                            {console.log(log.Artist)}
                        </IonCol>
                    ))} */}
                </IonRow>
            </IonGrid>
        </IonContent>

        
    );
};

export default Logs;
