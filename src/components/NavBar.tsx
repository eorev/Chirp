import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { firestore, getFirestore } from "../firebase";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";

export interface NavBarProps {
  children?: React.ReactNode;
  user: any;
  username: string;
}

export default function NavBar({ children, user, username }: NavBarProps) {

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  

  const scrollDirection = useScrollDirection();
  return (
    <div
      className={`bg-transparent max-w-full overflow-visible sticky z-40 -my-8 ${
        scrollDirection === "down"
          ? "lg:-top-24"
          : scrollDirection === "up"
          ? "top-0 dark:bg-neutral-900 bg-white"
          : "bg-transparent top-0"
      } h-24 transition-all duration-300`}
    >
      <div className="p-5 font-bold">
        <ul className="flex flex-1 justify-between">
          <Link to="/" className="flex text-6xl p-1 justify-center border-solid border-b-2 border-white hover:border-udblue hover:border-b-2 transition-all duration-300 ">
            Chirp
          </Link>
          <div className="flex space-x-2">
            <Link
              to="/learn"
              className="flex place-items-center p-2 border-solid border-b-2 border-white hover:border-udblue hover:border-b-2 transition-all duration-300"
            >
              <FaGraduationCap size={30} />
              Learn
            </Link>
            {user ? (
              <button
                onClick={handleSignOut}
                className="flex place-items-center p-2 border-solid border-b-2 border-white hover:border-udblue hover:border-b-2 transition-all duration-300"
              >
                Sign Out
              </button>
            ) : (
              <Link
                to="/SignIn"
                className="flex place-items-center p-2 border-solid border-b-2 border-white hover:border-udblue hover:border-b-2 transition-all duration-300"
              >
                <BiUserCircle size={30} />
                Login
              </Link>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
}

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("neutral");

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : scrollY === lastScrollY ? "neutral" : "up";
      if (direction !== scrollDirection && scrollY !== 0) {
        setScrollDirection(direction);
      }
      if (scrollY <= 100) {
        setScrollDirection("neutral")
      }

      lastScrollY = scrollY;
    };

    const throttledUpdateScrollDirection = throttle(updateScrollDirection, 25); // Adjust the throttle duration as needed

    window.addEventListener("scroll", throttledUpdateScrollDirection);
    return () => {
      window.removeEventListener("scroll", throttledUpdateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
}

function throttle(func: { (): void; apply?: any; }, wait: number) {
  let context, args, prevArgs: IArguments, argsChanged, result: any;
  let previous = 0;
  return function (e: any) {
    let now = 0
    let remaining = 0;
    if (wait) {
      now = Date.now();
      remaining = wait - (now - previous);
    }
    context = e;
    args = arguments;
    argsChanged = JSON.stringify(args) !== JSON.stringify(prevArgs);
    prevArgs = Object.assign({}, args);

    if (argsChanged || (wait && remaining <= 0)) {
      if (wait) {
        previous = now;
      }
      result = func.apply(context, args);
      context = args = null;
    }
    return result;
  };
}
