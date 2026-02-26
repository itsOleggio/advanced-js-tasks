import { useState, useEffect } from "react";
import type { IPost } from "../../model/post";
import { getPost } from "../../service/postAPI";

import style from "./Post.module.css";

import noPhoto from "../../assets/pics/no-photo.jpg";
import crown from "../../assets/icons/crown.png";
import comment from "../../assets/icons/chat.png";
import like from "../../assets/icons/like.png";

import { convertTime } from "../../utils/convertTime";

import { useNavigate } from "react-router-dom";

export function Post() {
  const [data, setData] = useState<IPost[]>([]);
  const navigate = useNavigate()

  useEffect(() => {
    async function load() {
      const posts = await getPost();
      setData(posts);
    }
    load();
  }, []);
  return (
    <div className={style.container}>
      {data.map((item: IPost) => (
        <div 
          key={item.id} 
          className={style.post} 
          onClick={() => navigate(`/posts/${item.id}`)}
        >
          <div className={style.personalArea}>
            <img
              src={noPhoto}
              alt="Img is not available"
              className={style.UserPhoto}
            ></img>
            <div className={style.infoBlock}>
              <div className={style.userName}>Admin</div>
              <div className={style.underBlock}>
                <img
                  src={crown}
                  alt="crown-ing"
                  className={style.AdminPhoto}
                ></img>
                <div className={style.userStatus}>Admin</div>
                <div className={style.postTime}>
                  {item.created ? convertTime(item.created) : ''}
                </div>
              </div>
            </div>
          </div>
          <span className={style.postText}>{item.content}</span>
          <div className={style.postLine}></div>
          <div className={style.btnGroup}>
            <button>
              <img src={like} alt="like"></img>
              <span>Нравится</span>
            </button>
            <button>
              <img src={comment} alt="comment"></img>
              <span>Комментировать</span>
            </button>
          </div>
          <div className={style.postLine2}></div>
          <div className={style.commentsGroup}>
            <img
              src={noPhoto}
              alt="Img is not available"
              className={style.UserPhoto2}
            ></img>
            <input
              className={style.customInput}
              placeholder="Напишите комментарий..."
            />
          </div>
        </div>
      ))}
    </div>
  );
}
