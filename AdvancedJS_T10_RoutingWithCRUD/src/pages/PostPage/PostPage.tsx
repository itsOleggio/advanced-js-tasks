import { useNavigate, useParams } from "react-router-dom";
import type { IPost } from "../../model/post";
import { convertTime } from "../../utils/convertTime";
import { useEffect, useState } from "react";
import {
  getPostById,
  deletePostById,
  editPostById,
} from "../../service/postAPI";

import style from "./Post.module.css";

interface IPostAPI {
  post: IPost;
}

export function PostPage() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<IPostAPI>();
  const [modalEdit, setModelEdit] = useState<boolean>(false);
  const [newPostData, setNewPostData] = useState<string>();

  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    async function load() {
      const data = await getPostById(Number(id));
      setPost(data);
    }

    load();
  }, [id]);

const handleDelete = async () => {
  if (!id) return;
  await deletePostById(Number(id));
  navigate(-1);
};

  const handleSaveEdits = async () => {
    if (!id || !newPostData) return;
    await editPostById(Number(id), newPostData);
    navigate(-1);
  };

  if (!post) return <p>Post error...</p>;

  return (
    <div className={style.wrapper}>
      <div className={style.card}>
        {modalEdit ? (
          <textarea
            className={style.textarea}
            value={newPostData}
            onChange={(e) => setNewPostData(e.target.value)}
            required
          />
        ) : (
          <span className={style.text}>{post.post.content}</span>
        )}

        <p className={style.date}>
          {post.post.content && post.post.created
            ? convertTime(post.post.created)
            : ""}
        </p>

        <div className={style.actions}>
          <button
            className={`${style.btn} ${style.edit}`}
            onClick={() => {
              setNewPostData(post.post.content);
              setModelEdit((prev) => !prev);
            }}
          >
            Изменить
          </button>

          <button
            className={`${style.btn} ${style.delete}`}
            onClick={handleDelete}
            disabled={modalEdit}
          >
            Удалить
          </button>

          <button
            className={`${style.btn} ${style.save}`}
            disabled={!modalEdit}
            onClick={handleSaveEdits}
          >
            Сохранить
          </button>
        </div>
      </div>

      <button className={style.back} onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
  );
}
