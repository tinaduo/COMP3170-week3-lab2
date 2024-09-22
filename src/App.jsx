import React from 'react';
import { artists } from './best-selling-music-artists';
import ArtistDetails from '/components/ArtistDetails';

function App() {
  return (
    <div className="app">
      <h1>best selling music artists</h1>
      <div className="artist-list">
        {artists.map((artist, index) => (
          <ArtistDetails key={index} artist={artist} />
        ))}
      </div>
    </div>
  );
}

export default App;
