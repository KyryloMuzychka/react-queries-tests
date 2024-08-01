import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Button } from "react-bootstrap";
import { createAlbum } from "../../api";
import AlbumTab from "../AlbumTab/AlbumTab";
import AlbumByIdTab from "../AlbumByIdTab/AlbumByIdTab";

export default function Menu() {
  async function addOne() {
    const data = await createAlbum({ userId: 1, title: "qwerty" });
    console.log(data);
  }

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
        <h1>Create Album</h1>
        <Button onClick={addOne}>Create</Button>
      </Tab>
    </Tabs>
  );
}
