import React from 'react';
import { IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';
import './ContactContainer.css';



const ContactContainer: React.FC = () => {
  return (
    <IonContent>
 
    <IonGrid>
        <IonRow>
            <div>
                 {/* class:contact-label */}
                REQUEST LINE:
            </div>

                  <a href="tel:+1-785-864-4747" target="_blank" rel="noopener noreferrer">
                <div>
                    {/* class: request-line-link */}
                    <div>785-864-4747</div>
                    {/* class="request-line-text" */}
                </div>
            </a>
        </IonRow>

        <IonRow>
            <IonCol>
                <div>
                          {/* class:contact-label */}
                    CONNECT WITH US:
                </div>

                <div>
                          {/* class:socal-media-table */}
                          <a href="https://www.facebook.com/KJHK907/" target="_blank" rel="noopener noreferrer">
                         <img src="../assets/img/Facebook_DS.svg" alt="../assets/icon.png" />
                     </a>

                          <a href=" https://twitter.com/kjhk" target="_blank" rel="noopener noreferrer">
                              <img src="../assets/img/Twitter_DS.svg" alt="../assets/icon.png" />
                     </a>

                          <a href=" https://www.instagram.com/kjhk90_7" target="_blank" rel="noopener noreferrer">
                              <img src="../assets/img/Instagram_DS2.svg" alt="../assets/icon.png" />
                     </a>
                </div>

            </IonCol>
        </IonRow>

        <IonRow>
            <IonCol>
            
            <a href="http://kjhk.org/web/" target="_blank" rel="noopener noreferrer"> 
                          <img src="../assets/img/kjhk-webs_DS.svg" alt="../assets/icon.png"/>
            </a>

                      <a href="https://www.youtube.com/channel/UCqwb8_dzDRSE5RyrgP0q-tA" target="_blank" rel="noopener noreferrer"> 
                          <img src="../assets/img/Youtube_DS.svg" alt="../assets/icon.png"/>
            </a>

            </IonCol>
        </IonRow>
    </IonGrid>


  </IonContent>

  );
};
export default ContactContainer;

