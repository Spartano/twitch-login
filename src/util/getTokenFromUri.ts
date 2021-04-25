export default function getTokenFromUri(hash: string) {
  const [, partial] = hash.split("#access_token=");
  const [token] = partial.split("&");
  return token;
}
