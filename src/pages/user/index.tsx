import { useEffect, useState } from 'react';

import styles from './UserprofileRoute.module.scss';
import { IoLogInOutline, IoLogIn } from "react-icons/io5";

import { getAuth } from 'firebase/auth';
import SignIn from '@/components/SignIn/SignIn';
import SignUp from '@/components/SignUp/SignUp';
import { useAuthContext } from '@/context/AuthContext';

const UserprofileRoute = () => {
  // VARIABLES ----------------------
  const auth = getAuth();
  const { user } = useAuthContext()
  // CONDITIONS ---------------------
  const [content, setContent] = useState<"login" | "signin">("login");
  const [logged, setLogged] = useState<boolean>(false);
  const [uid, setUid] = useState<string | undefined>("");
  // FUNCTIONS ----------------------
  useEffect(() => {
    if (user === null) {
      console.log("Non loggato");
      setLogged(false);
    } else {
      console.log("User loggato : ", user);
      setUid(auth.currentUser?.uid);
      setLogged(true);
    }
  }, [user])
  // RETURN -------------------------
  return (
    <div className={`${styles.UserprofileRoute}`}>
      {!logged ?
        <>
          <div className={`${styles.UserprofileRoute__notLogged}`}>
            <div onClick={() => setContent("login")} className={`${styles.button}`}>
              Log in
              <IoLogInOutline size={24} />
            </div>
            <div onClick={() => setContent("signin")} className={`${styles.button}`}>
              Sign in
              <IoLogIn size={24} />
            </div>
          </div>
          {content === "login" ?
            <div>
              <SignIn />
            </div>
            :
            <div>
              <SignUp />
            </div>
          }
        </>

        :
        <div>
          Benvenuto!
          <br /><br />
          Questo è il tuo UID sul db : {uid ? uid : null}
          <br /><br />
          Qui ci saranno le tue informazioni personali come :
          storico visite, location salvate e le tue informazioni personali.
        </div>
      }
    </div>
  );
}

export default UserprofileRoute;