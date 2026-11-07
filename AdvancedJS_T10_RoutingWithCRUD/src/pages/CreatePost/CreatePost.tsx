import { NavLink, useNavigate } from "react-router-dom"
import style from "./CreatePost.module.css"
import { createPost } from "../../service/postAPI"
import { useState } from "react"
import type { IPost } from "../../model/post"
// import { v4 as uuidv4 } from 'uuid';

export function CreatePost(){

    const [data, setData] = useState<IPost>({content: ""})
    const navigate = useNavigate()

    const handleSend = (e: React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault()
      // setData({...data, id: uuidv4()})
      createPost(data);
      navigate('/')
    }

    return(
      <>
      <form onSubmit={(e) => handleSend(e)} className={style.createPost}>
        <label htmlFor="createPost">Создать пост</label>
        <textarea
          name="createPost"
          value={data.content}
          onChange={(e) => setData({...data, content: e.target.value})}
          required
        />
        <button type="submit">Опубликовать</button>
      </form>
      <NavLink to="/">
        <button className={style.btnBack}>Вернутся назад</button>
      </NavLink>
      </>
    )
}