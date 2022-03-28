import React, { useContext, useRef } from "react";
import { gsap } from "gsap";
import { TransitionContext } from "context/TransitionContext";
import useIsomorphicLayoutEffect from "context/useIsomorphicLayoutEffect";
import Box from "./Box";
const FadeInOut = ({ children }) => {
  //@ts-ignore
  const { timeline } = useContext(TransitionContext);
  const el = useRef(null);
  // useIsomorphicLayoutEffect to avoid console warnings
  useIsomorphicLayoutEffect(() => {
    // intro animation will play immediately
    gsap.to(el?.current, {
      opacity: 1,
      duration: 1,
    });

    // add outro animation to top-level outro animation timeline
    timeline.add(
      gsap.to(el.current, {
        opacity: 0,
        duration: 0.6,
      }),
      0
    );
  }, [el]);
  return (
    <div className="box" ref={el} style={{ opacity: 0 }}>
      {children}
    </div>
  );
};

export default FadeInOut;
