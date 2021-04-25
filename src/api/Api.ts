export enum HttpType {
  POST,
  GET,
  DELETE,
  PATCH,
  PUT,
}
const baseUrl = "https://api.twitch.tv/helix";
export const call = async <T>(
  url: string,
  token: string,
  type: HttpType,
  params?: any,
  signal?: AbortSignal
) => {
  try {
    let response = await fetch(baseUrl + url, {
      method: HttpType[type],
      body: params ? JSON.stringify(params) : null,
      headers: {
        Authorization: `Bearer ${token}`,
        "Client-Id": process.env.REACT_APP_CLIENT_ID!,
      },
      signal,
    });

    if (!response.ok || response.status === 202) throw response;
    let result: T = await response.json();

    return result;
  } catch (error) {
    if (error.name !== "AbortError") {
      //save error to external api
    }

    throw error;
  }
};
