import { createBrowserRouter } from "react-router-dom";
import Init from "../pages/diary/ui/Init";
import Check from "../pages/diary/ui/Check";
import Diary from "../pages/diary/ui/Diary";
import CheckComplete from "../pages/diary/ui/CheckComplete";

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
    path: "/diary/check/complete",
    element: <CheckComplete />,
  },
]);

export default router;
