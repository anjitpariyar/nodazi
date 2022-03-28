import { gsap } from "gsap";
import { TransitionContext } from "./TransitionContext";
import { useState, useContext, useRef } from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

export default function TransitionLayout({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  //@ts-ignore
  const { timeline } = useContext(TransitionContext);
  const el = useRef();

  useIsomorphicLayoutEffect(() => {
    if (children !== displayChildren) {
      if (timeline.duration() === 0) {
        // there are no outro animations, so immediately transition
        setDisplayChildren(children);
      } else {
        timeline.play().then(() => {
          // outro complete so reset to an empty paused timeline
          timeline.seek(0).pause().clear();
          setDisplayChildren(children);
        });
      }
    }
  }, [children]);

  return <div ref={el}>{displayChildren}</div>;
}
