import { createBrowserRouter } from "react-router-dom";
import MySliderComp from "../components/MySliderComp";
import MyImagesComp from "../components/MyImageComp";
import ParentComp from "../components/ParentComp";
import PageNotFound from "../components/PageNotFound";
import ReactHookComp from "../Hooks/ReactHooksComp";
import UseteStateHookComp from "../Hooks/UseStateHookComp";
import UseEffectHooksComp from "../Hooks/UseEffectHooksComp";
import MainDashboardComp from "../layout/MainDashboardComp";
import VirtualDomComp from "../components/VirtualDomComp";
import FormValComp from "../components/FormValComp";
import ProductDashboardComp from "../CRUD/ProductDashboardComp";
import ProductAddComp from "../CRUD/ProductAddComp";
import ProductUpdateComp from "../CRUD/ProductUpdateComp";
import LoginComp from "../layout/LoginComp";
import ProtectedRouting from "./ProtectedRouting";

const router = createBrowserRouter([
  { path: "", element: <LoginComp /> },
  { path: "login", element: <LoginComp /> },
  
  {
    path: "maindashboard",
    // element: <MainDashboardComp />,
    element:<ProtectedRouting Component={MainDashboardComp} />,
    children: [
      // default routing
      { path: "", element: <MySliderComp /> },
      // naming routing
      { path: "myslider", element: <MySliderComp /> },
      { path: "myimages", element: <MyImagesComp /> },
      { path: "productdash", element: <ProductDashboardComp /> },
      { path: "productadd", element: <ProductAddComp /> },
      { path: "productedit/:id", element: <ProductUpdateComp /> },
      // parameterize routing
      { path: "parent/:id", element: <ParentComp /> },
      { path: "parent", element: <ParentComp /> },
      { path: "virtualdom", element: <VirtualDomComp /> },
      { path: "formval", element: <FormValComp /> },
      // child routing
      {
        path: "reacthook",
        element: <ReactHookComp />,
        children: [
          { path: "usestate", element: <UseteStateHookComp /> },
          { path: "useeffect", element: <UseEffectHooksComp /> },
        ],
      },
    ],
  },

  //  wild card routing
  { path: "*", element: <PageNotFound /> },
]);

export default router;
