import React from 'react';
import { IonButton, IonIcon, IonGrid, IonRow, IonCol, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg } from '@ionic/react';
import './ContactContainer.css';
import { star } from 'ionicons/icons';


const ContactContainer: React.FC = () => {
  return (
    <IonContent>
 
    <IonGrid>
        <IonRow>
            <IonCol>

                <a href="https://www.facebook.com/KJHK907/" target="_blank"> 
                    <img src="../assets/img/Facebook_DS.svg"/>
                </a>

                <a href=" https://twitter.com/kjhk" target="_blank"> 
                    <img src="../assets/img/Twitter_DS.svg"/>
                </a>
                
                <a href=" https://www.instagram.com/kjhk90_7" target="_blank">  
                    <img src="../assets/img/Instagram_DS2.svg"/>
                </a>

            </IonCol>
        </IonRow>
        
        <IonRow>
            <IonCol>
            
            <a href="http://kjhk.org/web/" target="_blank"> 
                <img src="../assets/img/kjhk-webs_DS.svg"/>
            </a>

            <a href="https://www.youtube.com/channel/UCqwb8_dzDRSE5RyrgP0q-tA" target="_blank"> 
                <img src="../assets/img/Youtube_DS.svg"/>
            </a>

            </IonCol>
        </IonRow>
    </IonGrid>


  </IonContent>

  );
};
export default ContactContainer;

