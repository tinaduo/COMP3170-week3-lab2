import React from 'react';
import { artists } from './best-selling-music-artists';
import ArtistDetails from '/components/ArtistDetails';
import Heading from '../components/Heading';

function App() {
  return (
    <div className="app">
      <Heading/>
      <div className="artist-list">
        {artists.map((artist, index) => (
          <ArtistDetails key={index} artist={artist} />
        ))}
      </div>
    </div>
  );
}

export default App;
