import { createBrowserRouter } from "react-router-dom";
import MySliderComp from "../components/MySliderComp";
import MyImagesComp from '../components/MyImageComp';
import ParentComp from "../components/ParentComp";
import PageNotFound from "../components/PageNotFound";
import ReactHookComp from '../Hooks/ReactHooksComp';
import UseteStateHookComp from '../Hooks/UseStateHookComp';
import UseEffectHooksComp from "../Hooks/UseEffectHooksComp";
import MainDashboardComp from '../layout/MainDashboardComp';

const router = createBrowserRouter([

     {path:"maindashboard",element:<MainDashboardComp />,children:[
          // default routing 
    {path:"",element:<MySliderComp/>},
    // naming routing 
    {path:"myslider",element:<MySliderComp/>},
    {path:"myimages",element:<MyImagesComp />},
    // parameterize routing 
    {path:"parent/:id",element:<ParentComp />},
    {path:"parent",element:<ParentComp />},

    // child routing 
    {path:"reacthook",element:<ReactHookComp />,children:[
        {path:"usestate",element:<UseteStateHookComp />},
        {path:"useeffect",element:<UseEffectHooksComp />},
    ]},
    ]},
    
    //  wild card routing 
    {path:"*",element:<PageNotFound />}
])

export default router;


