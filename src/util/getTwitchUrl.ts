export default function getTwitchUrl() {
  const client_id = `client_id=${process.env.REACT_APP_CLIENT_ID}&`;
  const redirect_uri = `redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&`;
  const response_type = "response_type=token&";
  const force_verify = "force_verify=false&";
  const scope = "scope=viewing_activity_read";
  const baseUrl = "https://id.twitch.tv/oauth2/authorize?";
  return baseUrl + client_id + force_verify + redirect_uri + response_type + scope;
}
