import { IonButton, IonIcon } from "@ionic/react";
import { logoDiscord } from "ionicons/icons";
import React from "react";
import getTwitchUrl from "util/getTwitchUrl";

const DiscordLogin: React.FC = () => {
  const url = getTwitchUrl();

  return (
    <IonButton href={url} shape="round" size="default">
      {" "}
      <IonIcon icon={logoDiscord} />
      Login with Discord
    </IonButton>
  );
};

export default DiscordLogin;
