import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const CheckComplete = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const result = searchParams.get("result");
  const isSuccess = result === "success";

  useEffect(() => {
    setTimeout(() => {
      navigate("/diary");
    }, 3000);
  }, []);

  return (
    <div>
      <h1 className="text-2xl text-green">
        {isSuccess && (
          <>
            도장을 받았어요
            <br />
          </>
        )}
        편안한 하루 되세요
      </h1>
      <div className="flex items-center justify-center h-96">
        <img
          src={"/stamp.png"}
          className="w-1/2 transition ease-in-out animate-bounce"
        />
      </div>
    </div>
  );
};

export default CheckComplete;
