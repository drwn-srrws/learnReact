export default class SpotifyService {
  static getSpotifyAuthorizeURL() {
    const arrayScope = [
      "user-modify-playback-state",
      "user-library-read",
      "user-read-private",
    ];
    const scope = `&scope=${arrayScope.join("%20")}`;
    const CLIENT_ID = "40a24e1f1d1c4b09888ce7dbc37f16e6";
    const REDIRECT_URI = "http://localhost:3000";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    const link = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}${scope}`;
    return link;
  }
  static getSpotifyToken() {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("spotifyToken");
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("spotifyToken", token);
    }
    return token;
  }
}
