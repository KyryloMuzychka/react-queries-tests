import { useState } from "react";
import { Button } from "react-bootstrap";
import { fetchAllAlbums } from "../../api";
import PaginatedItems from "../PaginatedItems/PaginatedItems";
// import { PaginatedItems } from "../PaginatedItems/PaginatedItems"

export default function AlbumTab() {
  const [albums, setAlbums] = useState();

  async function getAlbums() {
    setAlbums(await fetchAllAlbums());
  }

  return (
    <>
      <div className="all_albums_tab">
        <div className="d-flex justify-content-between">
          <h1>Get All Albums</h1>
          <Button onClick={getAlbums} className="w-25">
            Get All
          </Button>
        </div>        
        {albums && <PaginatedItems items={albums} itemsPerPage={5} />}        
      </div>
    </>
  );
}
