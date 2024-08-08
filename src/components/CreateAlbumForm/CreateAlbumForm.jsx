import React from "react";
import CreateAlbumFormCSS from "./CreateAlbumForm.module.css";
import PersonIcon from "@mui/icons-material/Person";
import TitleIcon from "@mui/icons-material/Title";
import { Button } from "react-bootstrap";

export default function CreateAlbumForm({ setUserId, setTitle, addAlbum }) {
  return (
    <form className={CreateAlbumFormCSS.container_fluid}>
      <div className="input-group">
        <span className="input-group-text">
          <PersonIcon />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="User Id"
          aria-label="user-id"
          onChange={(event) => {
            setUserId(event.target.value);
          }}
          required
        />
      </div>
      <div className="input-group">
        <span className="input-group-text">
          <TitleIcon />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          aria-label="title"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          required
        />
      </div>
      <Button onClick={addAlbum} className="w-55">
        Create
      </Button>
    </form>
  );
}
