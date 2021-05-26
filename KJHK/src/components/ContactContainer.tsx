import React from 'react';
import { IonGrid, IonRow, IonCol, IonContent, IonButton, IonButtons, IonImg } from '@ionic/react';
import './ContactContainer.css';



const ContactContainer: React.FC = () => {
  return (
    <IonContent>
 
    <IonGrid>
        <IonRow>
            <IonCol>
                      <div className="contact-label">
                          {/* class:contact-label */}
                REQUEST LINE:
            </div>

                      <a className="requestline-link" href="tel:+1-785-864-4747" target="_blank" rel="noopener noreferrer">
                          <img className = "requestline" src="../assets/04_RequestLine/SVG/RequestLineBubble.svg" alt="../assets/icon.png" />
                      </a>
            </IonCol>

        </IonRow>

        <IonRow>
            <IonCol>
                <div className="contact-label">
                          {/* class:contact-label */}
                    CONNECT WITH US:
                </div>

                <div className="social-media-table">
                          {/* class:socal-media-table */}
                          <IonButtons slot="end">
                              <IonButton style={{
                                  color: "white",
                                  borderRadius: "100%",
                                  width: 150,
                                  height: 150
                              }} href="https://www.facebook.com/KJHK907/" target="_blank" rel="noopener noreferrer" shape="round">
                                  <IonImg style={{
                                      width: 5000,
                                      height: 500
                                  }} src="../assets/04_RequestLine/SVG/Facebook.svg"/>
                              </IonButton>

                              <IonButton style={{
                                  color: "white",
                                  borderRadius: "100%",
                                  width: 150,
                                  height: 150
                              }} href="https://twitter.com/kjhk" target="_blank" rel="noopener noreferrer" shape="round">
                                  <IonImg style={{
                                      width: 5000,
                                      height: 500
                                  }} src="../assets/04_RequestLine/SVG/Twitter.svg" />
                              </IonButton>

                              <IonButton style={{
                                  color: "white",
                                  borderRadius: "100%",
                                  width: 150,
                                  height: 150
                              }} href="https://www.instagram.com/kjhk90_7" target="_blank" rel="noopener noreferrer" shape="round">
                                  <IonImg style={{
                                      width: 5000,
                                      height: 500
                                  }} src="../assets/04_RequestLine/SVG/Instagram.svg" />
                              </IonButton>
                          </IonButtons>
                                           <IonButtons slot="end">
                          <IonButton style={{
                              color: "white",
                              borderRadius: "100%",
                              width: 150,
                              height: 150
                          }} href="http://kjhk.org/web/" target="_blank" rel="noopener noreferrer" shape="round">
                              <IonImg style={{
                                  width: 5000,
                                  height: 500
                              }} src="../assets/04_RequestLine/SVG/Website.svg" />
                          </IonButton>

                          <IonButton style={{
                              color: "white",
                              borderRadius: "100%",
                              width: 150,
                              height: 150
                          }} href="https://www.youtube.com/channel/UCqwb8_dzDRSE5RyrgP0q-tA" target="_blank" rel="noopener noreferrer" shape="round">
                              <IonImg style={{
                                  width: 5000,
                                  height: 500
                              }} src="../assets/04_RequestLine/SVG/Youtube.svg" />
                          </IonButton>
                      </IonButtons>
                </div>

            </IonCol>
        </IonRow>

        <IonRow>
            <IonCol>



            </IonCol>
        </IonRow>
    </IonGrid>


  </IonContent>

  );
};
export default ContactContainer;

