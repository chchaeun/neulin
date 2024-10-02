import { createBrowserRouter } from "react-router-dom";
import Init from "../pages/diary/Init";
import Check from "../pages/diary/Check";
import Diary from "../pages/diary/Diary";
import Success from "../pages/diary/Success";
import Fail from "../pages/diary/Fail";

const router = createBrowserRouter([
  {
    path: "/diary",
    element: <Diary />,
  },

  {
    path: "/diary/init",
    element: <Init />,
  },

  {
    path: "/diary/check",
    element: <Check />,
  },
  {
    path: "/diary/success",
    element: <Success />,
  },
  {
    path: "/diary/fail",
    element: <Fail />,
  },
]);

export default router;
