import React, { useEffect, useState } from "react";
import "./DescriptionBox.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DescriptionBox = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="description-box">
      <div className="description-box-navigator">
        {isLoading ? (
          <>
            <Skeleton width={120} height={20} />
            <Skeleton width={80} height={20} />
          </>
        ) : (
          <>
            <p>Description</p>
            <p className="review">Reviews (122)</p>
          </>
        )}
      </div>

      <div className="description-box-description">
        {isLoading ? (
          <>
            <Skeleton count={4} width="100%" height={15} />
            <Skeleton width="90%" height={15} />
            <Skeleton width="80%" height={15} />
          </>
        ) : (
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas omnis
            pariatur voluptatem voluptatibus fuga libero accusantium, aliquam
            aperiam magni quae unde possimus, tempora consequuntur sed,
            repudiandae dolorem obcaecati at earum! Dolore odio, ducimus at nemo
            reiciendis quasi quidem fugit architecto suscipit tempore ipsum
            culpa et sint temporibus officia, nihil aspernatur eos vero! Commodi
            quos, porro facilis inventore voluptates maxime reiciendis?
          </p>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
