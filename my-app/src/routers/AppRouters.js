import React from "react";
import{BrowserRouter,Route,Routes} from "react-router-dom";
import Landing from "../components/LandingComponents/Landing"

export default function AppRouter(){
    return <BrowserRouter>
    <Routes>
        <Route path="/" element={<Landing/>}/>
        {/* <Route path="post" element={<PostView/>}>
            <Route path="new" element={}/>
            <Route path="all" element={}/>
        </Route> */}
    </Routes>
    </BrowserRouter>

}