import { Post } from "../../components";
import style from "./../../App.module.css";
import { NavLink } from "react-router-dom";

export function Homepage() {
  return (
    <>
      <div className={style.container}>
        <NavLink to='/posts/new'>
          <button className={style.addPost}>Создать пост</button>
        </NavLink>
      </div>
      <Post />
    </>
  );
}
