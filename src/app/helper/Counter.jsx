'use client'

import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";

const Counter = ({ target = 0, duration = 1000, format }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (!inView || hasAnimated) return;

    const numericTarget = typeof target === "number" ? target : parseInt(target, 10);
    if (isNaN(numericTarget)) return;

    const increment = Math.ceil(numericTarget / (duration / 30));
    const interval = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= numericTarget) {
          clearInterval(interval);
          setHasAnimated(true);
          return numericTarget;
        }
        return next;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [inView, hasAnimated, target, duration]);

  return (
    <Typography
      ref={ref}  // <- important!
      variant="h6"
      sx={{
        fontSize: { xs: "12px", sm: "18px", md: "20px", lg: "22px" },
      }}
    >
      {format ? format(count) : count}
    </Typography>
  );
};

export default Counter;
