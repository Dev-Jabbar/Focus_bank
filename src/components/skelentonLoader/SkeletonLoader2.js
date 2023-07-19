import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader2 = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Skeleton
        count={1}
        style={{ borderRadius: "50%" }}
        className="rounded-full w-full h-full"
      />
    </SkeletonTheme>
  );
};

export default SkeletonLoader2;
