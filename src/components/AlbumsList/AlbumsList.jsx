import React from "react";
import SingleAlbum from "../SingleAlbum/SingleAlbum";
import AlbumListCSS from "./AlbumList.module.css";

export default function AlbumList({ albums }) {
  if (albums.length === 0) return <p>No albums available.</p>;

  return (
    <>
      <h1>Albums</h1>
      <ul className={AlbumListCSS.list}>
        {albums.map((album) => (
          <li key={album.id}>
            <SingleAlbum album={album}/>            
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
}
