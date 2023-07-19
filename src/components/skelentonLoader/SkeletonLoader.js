import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Skeleton count={1} className="w-full h-full" />
    </SkeletonTheme>
  );
};

export default SkeletonLoader;
