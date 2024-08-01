import { useEffect, useState } from "react";
import { createAlbum } from "../../api";
import CreateAlbumForm from "../CreateAlbumForm/CreateAlbumForm";
import CreatedAlbumDisplay from "../CreatedAlbumDisplay/CreatedAlbumDisplay";
import { fetchAllUserId } from "../../api";

export default function CreateAlbumTab() {
  const [isError, setIsError] = useState(false);
  const [createdAlbum, setCreatedAlbum] = useState();
  const [title, setTitle] = useState();
  const [userId, setUserId] = useState();
  const [userIds, setUserIds] = useState([]);

  async function getAllUserIds() {
    setUserIds(await fetchAllUserId());
  }

  async function addAlbum() {
    if (title && userId && userIds.includes(Number(userId))) {
      setCreatedAlbum(await createAlbum({ title, userId }));
      setIsError(false);
    } else {
      setIsError(true);
      setCreatedAlbum(null);
    }
  }

  useEffect(() => {
    getAllUserIds();
  }, []);

  return (
    <>
      <div className="create_album_tab">
        <div className="d-flex flex-column">
          <h1>Create Album</h1>
          <CreateAlbumForm
            setTitle={setTitle}
            setUserId={setUserId}
            addAlbum={addAlbum}
          />
        </div>
        <CreatedAlbumDisplay createdAlbum={createdAlbum} isError={isError} />
      </div>
    </>
  );
}
