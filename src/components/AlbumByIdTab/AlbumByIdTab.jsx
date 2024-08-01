import { useState } from "react";
import { fetchAlbumById } from "../../api";
import SingleAlbum from "../SingleAlbum/SingleAlbum";
import { Button } from "react-bootstrap";
import AlbumByIdTabCSS from "./AlbumByIdTab.module.css";

export default function AlbumByIdTab() {
  const [album, setAlbum] = useState();
  const [id, setId] = useState();
  const [isVisible, setIsVisible] = useState();

  async function getAlbumById() {
    setAlbum(await fetchAlbumById(id));
    setIsVisible(true);
  }

  return (
    <div className="album_by_id_tab">
      <div className="d-flex justify-content-between">
        <h1>Get Album By Id</h1>
        <div className={`${AlbumByIdTabCSS.input}`}>
          <span className="input-group-text">Id</span>
          <input
            type="number"
            className="form-control"
            onChange={(event) => {
              setId(event.target.value);
            }}
          />
        </div>
        <Button onClick={getAlbumById} className="w-25">
          Get Album By Id
        </Button>
      </div>
      {album && <SingleAlbum album={album} />}
      {!album && isVisible && <h2>Not Found!</h2>}
    </div>
  );
}
