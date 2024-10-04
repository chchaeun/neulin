import { createBrowserRouter } from "react-router-dom";
import Init from "../pages/diary/ui/Init";
import Check from "../pages/diary/ui/Check";
import Diary from "../pages/diary/ui/Diary";
import Success from "../pages/diary/ui/Success";
import Fail from "../pages/diary/ui/Fail";

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
