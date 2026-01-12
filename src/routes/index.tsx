import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "pages/common/NotFound"
import PrivateRoute from 'routes/PrivateRoute'
import LoginForm from 'pages/login/LoginForm'
import Trains from 'pages/train/Trains'


export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route element={<PrivateRoute authentication={false}/>}>
                        <Route path="/login" element={ <LoginForm /> } />
                    </Route> */}

                    <Route element={<PrivateRoute authentication={false}/>}>
                        <Route index element={ <Navigate to="/trains" replace /> }/>
                        <Route path="/trains" element={<Trains />} />
                        <Route path="/*" element={<NotFound />} />
                        {/* graph node detail view Sample */}
                    </Route>


                </Routes>
            </BrowserRouter>
        </>
    )
}