import { IonButton, IonIcon } from "@ionic/react";
import { logoTwitch } from "ionicons/icons";
import React from "react";
import getTwitchUrl from "util/getTwitchUrl";
import styles from "./DiscordLoginButton.module.css";

interface Props {}

const DiscordLoginButton: React.FC<Props> = () => {
  const url = getTwitchUrl();

  return (
    <IonButton href={url} shape="round" size="default" className={styles.discordIcon}>
      {" "}
      <IonIcon icon={logoTwitch} />
      Login with Twitch.tv
    </IonButton>
  );
};

export default DiscordLoginButton;
