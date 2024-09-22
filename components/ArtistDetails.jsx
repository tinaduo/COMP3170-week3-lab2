import React from 'react';

function ArtistDetails({ artist }) {
    return (
        <div className="artist-details">
            <img src={artist.photo_url} alt={artist.name} className="artist-photo" />
            <div className="artist-info">
            <h2 className="artist-name">{artist.name}</h2>
            <p className="artist-country">Country: {artist.country}</p>
            <p className="artist-active">Years Active: {artist.years_active}</p>
            </div>
        </div>
    );
}

export default ArtistDetails;
