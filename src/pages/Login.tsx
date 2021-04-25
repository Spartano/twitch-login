import React, { useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  useIonRouter,
  IonIcon,
} from "@ionic/react";
import { IonItem, IonLabel, IonInput, IonAlert, IonGrid, IonRow, IonCol } from "@ionic/react";

import getTwitchUrl from "util/getTwitchUrl";
import { logoTwitch, personCircle } from "ionicons/icons";
import styles from "./Login.module.css";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const url = getTwitchUrl();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonIcon style={{ fontSize: "70px", color: "#0040ff" }} icon={personCircle} />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating"> Email</IonLabel>
                <IonInput type="email"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating"> Password</IonLabel>
                <IonInput type="password"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <p style={{ fontSize: "small" }}>
                By clicking LOGIN you agree to our <a href="#">Policy</a>
              </p>
              <IonButton shape="round" expand="block">
                Login
              </IonButton>
              <p style={{ fontSize: "medium" }}>
                Don't have an account? <a href="#">Sign up!</a>
              </p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <p style={{ fontSize: "small" }}>or</p>
              <IonButton href={url} shape="round" size="default" className={styles.twitchIcon}>
                {" "}
                <IonIcon icon={logoTwitch} />
                Login with Twitch.tv
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
