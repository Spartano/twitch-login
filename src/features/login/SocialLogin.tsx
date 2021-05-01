import React from "react";
import LoginButton from "./socialLogin/LoginButton";

export enum Social {
  "twitch",
  "discord",
}

interface Props {
  socials: Social[];
}

export default function SocialLogin({ socials }: Props) {
  return (
    <>
      {socials.map((social) => (
        <LoginButton social={social} key={social} />
      ))}
    </>
  );
}
