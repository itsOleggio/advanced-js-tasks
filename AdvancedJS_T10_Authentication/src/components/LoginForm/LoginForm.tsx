import { useEffect, useState } from 'react';
import {auth, checkAuth} from '../../service/auth'

import style from "./LoginForm.module.css";

export function LoginForm() {

  const [auth, setAuth] = useState<boolean>(false)

  if(localStorage.get('sessionStorage') === '') setAuth(false)

  useEffect(() => {
    async function check() {
      const status = await checkAuth('');
      if(status !== "Unauthorized"){
        setAuth(true);
      }
    }
    check()
  }, [])

  return (
    <form className={style.loginForm}>
      <div className={style.logoArea}>
        <span>Oleggio Social</span>
      </div>
      <div className={style.inputArea}>
        <input placeholder="Username" />
        <input placeholder="Password" />
        <button>Login</button>
      </div>
    </form>
  );
}
