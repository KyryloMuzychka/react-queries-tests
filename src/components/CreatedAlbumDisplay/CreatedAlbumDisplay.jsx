import React from "react";
import SingleAlbum from "../SingleAlbum/SingleAlbum";

export default function CreatedAlbumDisplay({ createdAlbum, isError }) {
  return (
    <>
      {createdAlbum && (
        <>
          <h3>Created Element</h3>
          <SingleAlbum album={createdAlbum} />          
        </>
      )}
      {isError && <h2 className="text-danger">Enter correct data!</h2>}      
    </>
  );
}
