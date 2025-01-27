import React from "react";
import ContentLoader from "react-content-loader";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h3 className=" font-semibold text-gray-700 mb-4 xs:text-sm sm:text-xl">
        Finding the perfect plans just for you
        <span className="loading-dots">.</span>
      </h3>
      <div className="flex flex-col items-center justify-center w-full space-y-2">
        {" "}
        {/* Use space-y-0 to eliminate the gap */}
        <ContentLoader
          speed={2}
          width="95%" // Ensures the loader width is 95% of its parent
          height={70} // Doubled height
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="12px" ry="12px" width="100%" height="70" />
        </ContentLoader>
        <ContentLoader
          speed={2}
          width="95%" // Ensures the loader width is 95% of its parent
          height={100} // Doubled height
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="12px" ry="12px" width="100%" height="100" />
        </ContentLoader>
        <ContentLoader
          speed={2}
          width="95%" // Ensures the loader width is 95% of its parent
          height={70} // Doubled height
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="12px" ry="12px" width="100%" height="70" />
        </ContentLoader>
      </div>
    </div>
  );
};

export default Loading;
