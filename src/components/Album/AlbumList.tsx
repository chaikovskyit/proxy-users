import React, { FC } from "react";
import { IAlbum } from "../../models/IAlbum";
import style from "./albumList.module.scss";

interface AlbumProps {
  albums: IAlbum[];
}

const AlbumList: FC<AlbumProps> = ({ albums }) => {
  return (
    <div className={style.container}>
      {albums &&
        albums.map((album) => (
          <div key={album.id} className={style.album}>
            <p>{album.title}</p>
          </div>
        ))}
    </div>
  );
};

export default AlbumList;
