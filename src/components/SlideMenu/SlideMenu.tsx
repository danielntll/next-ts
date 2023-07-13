import styles from './SlideMenu.module.scss';
import { useEffect, useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { getAuth, signOut } from 'firebase/auth';
import { Routes } from '@/pages/routes';
import { tRoute } from '@/types/tRoutes';
import { useRouter } from 'next/router';
import { useAuthContext } from '@/context/AuthContext';


interface ContainerProps {
  isMenuOpen: boolean,
  setMenuOpen: (val: boolean) => void;
}

const SlideMenu: React.FC<ContainerProps> = ({ isMenuOpen, setMenuOpen }) => {
  // VARIABLES ----------------------
  const auth = getAuth();
  const router = useRouter();
  const { user } = useAuthContext();
  // CONDITIONS ---------------------
  const [classMenu, setClassMenu] = useState<"isOpen" | "isClosed">("isClosed");
  const [currentLocation, setCurrentLocation] = useState<string>("");
  const [logged, setLogged] = useState<boolean>(false);
  // FUNCTIONS ----------------------
  useEffect(() => {
    if (isMenuOpen) {
      setClassMenu("isOpen");
      document.body.style.overflow = "hidden";
    } else {
      setClassMenu("isClosed");
      document.body.style.overflow = "scroll";
    }
    setCurrentLocation(router.asPath)
  }, [isMenuOpen]);

  useEffect(() => {
    if (user === null) {
      console.log("Non loggato");
      setLogged(false);
    } else {
      console.log("User loggato : ", user);
      setLogged(true);
    }
  }, [user])

  const handleNavigate = (path: string) => {
    setMenuOpen(false);
    router.push(path);
  }
  // RETURN -------------------------
  return (
    <div className={`
      ${styles.SlideMenu}
      ${styles[classMenu]}
      `}>

      <div className={`${styles.header}`}>
        <div onClick={() => setMenuOpen(false)} className={`${styles.closeBtn}`}>
          <IoCloseOutline size={24} />
        </div>
      </div>

      <div className={`${styles.content}`}>
        {Routes.map((route: tRoute, index: number) => {
          if (!route.hideSideMenu) return (
            <div
              onClick={() => handleNavigate(route.path)}
              key={index + "sideMenuRoutes"}
              className={`${styles.contentBtn}`}
            >
              {route.icons ?

                currentLocation !== route.path ? route.icons[0] : route.icons[1]

                : null}
              <p className={`${styles.contentBtn__text}`}>
                {route.name}
              </p>
            </div>
          )
        })}

        {logged ?

          <div
            onClick={() => { signOut(auth).then(() => setMenuOpen(false)) }}
            className={`${styles.contentBtn}`}
          >
            <p className={`${styles.contentBtn__text}`}>
              Log out

            </p>
          </div>
          :
          <div

            className={`${styles.contentBtn}`}
          >
            <p className={`${styles.contentBtn__text}`}>
              Utente non loggato

            </p>
          </div>
        }

      </div>

    </div>);
}

export default SlideMenu;