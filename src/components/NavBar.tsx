import { useEffect, useState } from "react";

export default function NavBar({ children }: any) {

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
      <div className="p-5 font-bold">{children}</div>
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
