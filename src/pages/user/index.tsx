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
  const [message, setMessage] = useState<string>("");
  // FUNCTIONS ----------------------
  useEffect(() => {
    if (user === null) {
      console.log("Non loggato");
      setLogged(false);
    } else {
      console.log("User loggato : ", user);
      setUid(auth.currentUser?.uid);
      setLogged(true);
      const fetchData = async () => {
        const response = await fetch('http://localhost:3000/api/helloUser')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const result = await response.json();

        console.log(result)
        setMessage(result.message)
      }

      fetchData().catch((e) => {
        // handle the error as needed
        console.error('An error occurred while fetching the data: ', e)
      })
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
          <br /><br />
          <hr />
          {message ? message : ""}
        </div>
      }
    </div>
  );
}

export default UserprofileRoute;