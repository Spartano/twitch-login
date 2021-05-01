import React from "react";
import { Social } from "../SocialLogin";
import DiscordLogin from "./loginButton/DiscordLogin";
import TwitchLogin from "./loginButton/TwitchLogin";

interface Props {
  social: Social;
}

export default function LoginButton({ social }: Props) {
  switch (social) {
    case Social.discord:
      return <DiscordLogin />;
    case Social.twitch:
      return <TwitchLogin />;

    default:
      return null;
  }
}
