import { IonButton, IonIcon } from "@ionic/react";
import { logoTwitch } from "ionicons/icons";
import React from "react";
import getTwitchUrl from "util/getTwitchUrl";
import styles from "./TwitchLoginButton.module.css";

interface Props {}

const TwitchLoginButton: React.FC<Props> = () => {
  const url = getTwitchUrl();

  return (
    <IonButton href={url} shape="round" size="default" className={styles.twitchIcon}>
      {" "}
      <IonIcon icon={logoTwitch} />
      Login with Discord
    </IonButton>
  );
};

export default TwitchLoginButton;
