import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

interface LearnProps {
  username: string;
  level: number;
}


function LessonCard(props: any) {
  return (
    <Link to={props.to} className="hover:bg-udblue transition-all duration-300 flex flex-col items-center justify-center w-72 h-72 bg-neutral-100 rounded-lg shadow-lg p-6 m-4">
      <div className=" text-lg font-bold">
        {props.lesson}
      </div>
    </Link>
  );
}


const Learn: React.FC<LearnProps> = ({ username }) => {
  const [experience, setExperience] = useState<number>(0);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        fetchUserData(user.uid);
      }
    });
  
    return () => {
      unsubscribe();
    };
  }, []);  

  const fetchUserData = async (userId: string) => {
    const userDocRef = doc(getFirestore(), "users", userId);
    const userDocSnap = await getDoc(userDocRef);
  
    if (userDocSnap.exists()) {
      setExperience(userDocSnap.data().experience);
    } else {
      console.log("No such document!");
    }
  };
  

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-3xl">
        <div>Please sign in to access the Learn tab</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-3xl">
      <div className="text-4xl font-bold mb-6">Hello, {username}</div>
      <div className="text-2xl mb-6">You have {experience} XP</div>
      <div className="flex flex-wrap justify-center sm:grid-cols-2 md:grid-cols-3 gap-8">
        <LessonCard to={"/Lesson1"} lesson={"Lesson 1: Bubble Sort"} />
        <LessonCard to={"/Lesson2"} lesson={"Lesson 2: Selection Sort"} />
        <LessonCard to={"/Lesson3"} lesson={"Lesson 3: Insertion Sort"} />
        <LessonCard to={"/Lesson4"} lesson={"Lesson 4: Merge Sort"} />
        <LessonCard to={"/Lesson5"} lesson={"Lesson 5: Quick Sort"} />
      </div>
    </div>
  );
};

export default Learn;
