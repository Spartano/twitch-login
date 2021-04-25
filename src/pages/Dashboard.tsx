import {
  IonAvatar,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonLoading,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Auth } from "api";
import { useToken } from "hooks/useToken";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { User } from "types";

const Dashboard: React.FC = () => {
  const { hash } = useLocation();

  const { token } = useToken(hash);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      //make api request to get user using token
      (async () => {
        try {
          //inside async functions each setState causes a rerender
          setLoading(true);
          const { data } = await Auth.getUser(token);
          const [user] = data;
          setUser(user);
          setLoading(false);
        } catch (error) {
          //use error to inform user
          setLoading(false);
        }
      })();
    }
  }, [token]);

  if (!token)
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Not Authenticated</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonPage>
    );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dasboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonLoading
          cssClass="my-custom-class"
          isOpen={loading}
          message={"Please wait..."}
          duration={1000}
        />
        {user && (
          <IonGrid>
            <IonRow>
              <IonCol>
                <h4>Welcome: {token} </h4>
                <IonItemDivider></IonItemDivider>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonAvatar>
                    <img src={user?.profile_image_url} alt="profilePic" />
                  </IonAvatar>
                  <IonLabel>
                    <h2 style={{ paddingLeft: "10px" }}>{user?.display_name} </h2>
                    <p style={{ paddingLeft: "10px" }}>{user?.email}</p>
                  </IonLabel>
                </IonItem>
              </IonCol>
            </IonRow>
          </IonGrid>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
