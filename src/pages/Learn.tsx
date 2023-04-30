import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../firebase";

interface LearnProps {
  username: string;
  level: number;
}


function LessonCard(props: any) {
  return (
    <div className="min-w-[16rem] h-72 bg-neutral-100 rounded-lg shadow-md p-2 m-2">
      <Link to={props.to}>{props.lesson}</Link>
    </div>
  )
}

const Learn: React.FC<LearnProps> = ({ username, level }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (!user) {
    return (
        <div>
        <div className="mt-24 flex flex-col justify-center items-center text-4xl">
            <div>Hello, Username</div>
            <div>You have # XP</div>
            <div className="flex m-32  w-[80vw] overflow-scroll">
                <LessonCard to={'/Lesson1'} lesson={"Lesson 1 Bubble Sort"}></LessonCard>
                <LessonCard to={'/Lesson2'} lesson={"Lesson 2 Selection Sort"}></LessonCard>
                <LessonCard to={'/Lesson3'} lesson={"Lesson 3 Insertion Sort"}></LessonCard>
                <LessonCard to={'/Lesson1'} lesson={"Lesson 1"}></LessonCard>
            </div>
        </div>
      <div className="mt-24 flex flex-col justify-center items-center text-4xl">
        <div>Please sign in to access the Learn tab</div>
      </div>
      </div>
    )
  }

  return (
    <div className="mt-24 flex flex-col justify-center items-center text-4xl">
      <div>Hello, {username}</div>
      <div>You have {level} XP</div>
      <div className="flex m-32  w-[80vw] overflow-scroll">
        <LessonCard to={'/Lesson1'} lesson={"Lesson 1 Bubble Sort"}></LessonCard>
        <LessonCard to={'/Lesson2'} lesson={"Lesson 2 Selection Sort"}></LessonCard>
        <LessonCard to={'/Lesson3'} lesson={"Lesson 3 Insertion Sort"}></LessonCard>
        <LessonCard to={'/Lesson1'} lesson={"Lesson 1"}></LessonCard>
      </div>
    </div>
  )
}

export default Learn;
