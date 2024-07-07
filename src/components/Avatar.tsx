import React from "react";
import { type } from "os";

type Props = {
  img: string;
  alt?: string;
};

const Avatar: React.FC<Props> = ({ img, alt }) => {
  return (
    <div className="rounded-full overflow-hidden w-full p-[100%] relative">
      <div className="absolute inset-0">
        <img src={img} alt={alt || img} />
      </div>
    </div>
  );
};

export default Avatar;
