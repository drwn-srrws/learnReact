// const searchArtists = async (e) => {
//   e.preventDefault();
//   const { data } = await axios.get("https://api.spotify.com/v1/search", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     params: {
//       q: searchKey,
//       type: "artist",
//       limit: 2,
//     },
//   });

//   setArtists(data.artists.items);
// };

// const renderArtists = () => {
//   return artists.map((artist) => (
//     <div key={artist.id}>
//       {artist.images.length ? (
//         <img width={"100%"} src={artist.images[0].url} alt="" />
//       ) : (
//         <div>No Image</div>
//       )}
//       {artist.name}
//     </div>
//   ));
// };

// {
//   token ? (
//     <form onSubmit={searchArtists}>
//       <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
//       <button type={"submit"}>Search</button>
//     </form>
//   ) : (
//     <h2>Please login</h2>
//   );
// }

// {
//   renderArtists();
// }
