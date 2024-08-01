import SingleAlbumCSS from "./SingleAlbum.module.css";

export default function SingleAlbum({ album }) {
  return (
    <>
      <p className={SingleAlbumCSS.text}>User Id: {album.userId}</p>
      <p className={SingleAlbumCSS.text}>Title: {album.title}</p>
    </>
  );
}
