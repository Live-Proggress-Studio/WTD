import { FC } from "react";
import { RotatingLines } from "react-loader-spinner";
import "./loading.scss";

const Loading: FC = () => {
  return (
    <div className="container loading">
      <div className="full-center">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="3"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    </div>
  );
};

export default Loading;
