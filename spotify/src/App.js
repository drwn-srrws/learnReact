import { useState, useEffect } from "react";
import "./Style.css/App.css";
import like from "./img/like.png";
import WelcomePlaylist from "./components/UI/WelcomePlaylist/WelcomePlaylist";
import axios from "axios";
import SpotifyService from "./API/SpotifyService";
function App() {
  const [welcomePlaylists, setWelcomePlaylists] = useState([
    { link: like, name: "123" },
  ]);
  const [spotifyToken, setSpotifyToken] = useState("");
  const spotifyAuthorizeURL = SpotifyService.getSpotifyAuthorizeURL();
  var SpotifyWebApi = require("spotify-web-api-node");
  var spotifyApi = new SpotifyWebApi({
    clientId: "40a24e1f1d1c4b09888ce7dbc37f16e6",
    clientSecret: "c1aa5b4009c049cb8461d6bbafd16ff3",
    redirectUri: "http://localhost:3000",
  });

  useEffect(() => {
    console.log("123");
    const spotifyToken = SpotifyService.getSpotifyToken();
    setSpotifyToken(spotifyToken);
    console.log("123");
    spotifyApi
      .getMySavedAlbums({
        limit: 5,
      })
      .then(
        function (data) {
          console.log(data);
          data.body.items.map((item) =>
            setWelcomePlaylists((prev) => [
              ...prev,
              {
                name: item.album.name,
                link: item.album.images[0],
              },
            ])
          );
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      );
  }, []);

  const logout = () => {
    setSpotifyToken("");
    window.localStorage.removeItem("spotifyToken");
  };

  spotifyApi.setAccessToken(localStorage.getItem("spotifyToken"));
  const getMeAlbums4 = () => {
    console.log(welcomePlaylists);
  };

  return (
    <div className="App">
      <div className="Wrapper">
        <div className="MainMenu">
          <div onClick={getMeAlbums4} className="Logo">
            CLICK ON ME
          </div>
          <div className="MainPage">2</div>
          <div className="SearchPage">3</div>
          <div className="MediaLibrary">4</div>
          <div className="CreatePlaylist">5</div>
          <div className="Likes">
            {!spotifyToken ? (
              <a href={spotifyAuthorizeURL}>Login to Spotify</a>
            ) : (
              <button onClick={logout}>Logout</button>
            )}
          </div>
        </div>
        <div className="MainPage">
          <div className="container">
            <section className="WelcomePlaylists">
              <div>123</div>
              <div>
                <div>
                  <div>123</div>
                  <div>123</div>
                  <div>123</div>
                </div>
                <div>
                  <div>123</div>
                  <div>123</div>
                  <div>123</div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
