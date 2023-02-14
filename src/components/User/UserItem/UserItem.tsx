import React, { FC } from "react";
import { IUser } from "../../../models/IUser";
import { Link } from "react-router-dom";
import style from "./userItem.module.scss";
import useModal from "../../../hooks/modal";
import Modal from "../../ui/Modal/Modal";
import { userAPI } from "../../../services/UserService";
import AlbumList from "../../Album/AlbumList";

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  const { isOpen, toggle } = useModal();
  const { id, name, email } = user;

  const [fetchAlbums, {isLoading, isError, data: albums}] = userAPI.useLazyFetchUserAlbumsQuery()

  const onAlbumHandler = (id: number) => {
    fetchAlbums(id)
    toggle()
    console.log(id);


  };

  return (
    <>
      <div className={style.container}>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <div className={style.buttonsContainer}>
          <button>
            <Link to={`/posts/${id}`} className={style.link}>
              Posts
            </Link>
          </button>
          <button onClick={() => onAlbumHandler(id)}>Albums</button>
        </div>
        <Modal isOpen={isOpen} toggle={toggle}>
          <h3>{name} albums:</h3>
          {isLoading && <h3>Loading...</h3>}
          {isError && <h3>Omg something went wrong...</h3>}
          {albums && <AlbumList albums={albums}/>}
        </Modal>
      </div>
    </>
  );
};

export default UserItem;
