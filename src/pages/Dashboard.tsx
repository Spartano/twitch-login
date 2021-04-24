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
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonRow>
        <IonButton>Hello</IonButton>
      </IonRow>
    </IonPage>
  );
};

export default Dashboard;
