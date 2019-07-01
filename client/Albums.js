import React from 'react';

export default function Albums(props) {
  return (
    <div className="container">
      <div id="albums" className="row wrap">
        {props.albums.map(album => {
          return (
            <div
              key={album.name}
              className="album"
              onClick={() => {
                props.clickAlbum(album.id);
              }}
            >
              <a>
                <img src={album.artworkUrl} />
                <p>{album.name}</p>
                <small>{album.artist.name}</small>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
