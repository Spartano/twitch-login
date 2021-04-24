import {
  IonButton,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { camera, personCircle } from "ionicons/icons";
import React from "react";
import getTwitchUrl from "util/getTwitchUrl";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const Tab1: React.FC = () => {
  const url = getTwitchUrl();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonRow>
        <IonButton href={url}>Anchor</IonButton>
        <IonCol>
          <IonIcon style={{ fontSize: "70px", color: "#0040ff" }} icon={personCircle} />
        </IonCol>
        <IonCol>
          <IonFab horizontal="center">
            <IonFabButton onClick={() => {}}>
              <IonIcon icon={camera}>ss</IonIcon>
            </IonFabButton>
          </IonFab>
        </IonCol>
      </IonRow>
    </IonPage>
  );
};

export default Tab1;
