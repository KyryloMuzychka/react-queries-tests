import "./AlbumList.module.css"

export default function AlbumList({ albums }) {
  return (
    <>
      <h1>Albums</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <p>User Id: {album.userId}</p>
            <p>Title: {album.title}</p>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
}
