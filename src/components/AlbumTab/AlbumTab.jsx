import { useState } from "react";
import { fetchAllAlbums } from "../../api";
import AlbumList from "../AlbumsList/AlbumsList";
import { Button } from "react-bootstrap";

export default function AlbumTab() {
  const [albums, setAlbums] = useState();

  async function getAlbums() {
    setAlbums(await fetchAllAlbums());
  }

  return (
    <div className="all_albums_tab">
      <div className="d-flex justify-content-between">
        <h1>Get All Albums</h1>
        <Button onClick={getAlbums} className="w-25">
          Get All
        </Button>
      </div>
      {albums && <AlbumList albums={albums} />}
    </div>
  );
}
