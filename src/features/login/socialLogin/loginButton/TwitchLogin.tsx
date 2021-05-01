import { IonButton, IonIcon } from "@ionic/react";
import { logoTwitch } from "ionicons/icons";
import React from "react";
import getTwitchUrl from "util/getTwitchUrl";

const TwitchLogin: React.FC = () => {
  const url = getTwitchUrl();

  return (
    <IonButton href={url} shape="round" size="default">
      {" "}
      <IonIcon icon={logoTwitch} />
      Login with Twitch.tv
    </IonButton>
  );
};

export default TwitchLogin;
