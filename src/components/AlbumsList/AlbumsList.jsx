import SingleAlbum from "../SingleAlbum/SingleAlbum";
import AlbumListCSS from "./AlbumList.module.css";

export default function AlbumList({ albums }) {
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
