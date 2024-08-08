import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AlbumTab from "../AlbumTab/AlbumTab";
import AlbumByIdTab from "../AlbumByIdTab/AlbumByIdTab";
import CreateAlbumTab from "../CreateAlbumTab/CreateAlbumTab";

export default function Menu() {
  return (
    <Tabs
      defaultActiveKey="get-all-albums"
      id="justify-tab-example"
      className="mb-3 mt-3"
      justify
    >
      <Tab eventKey="get-all-albums" title="Get All Albums">
        <AlbumTab />
      </Tab>
      <Tab eventKey="get-album-by-id" title="Get Album By Id">        
        <AlbumByIdTab />        
      </Tab>
      <Tab eventKey="create-album" title="Create Album">        
        <CreateAlbumTab />
      </Tab>
    </Tabs>
  );
}
