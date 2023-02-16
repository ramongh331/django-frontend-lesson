import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import { IndexLoader, ShowLoader } from "./Loaders"
import { CreateAction, DeleteAction, UpdateAction } from "./Actions"

const Router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={IndexLoader}/>
            <Route path="post/:id" element={<Show/>} loader={ShowLoader}/>
            {/* Create, Update, Delete */}
            <Route path="create" action={CreateAction}/>
            <Route path="update/:id" action={UpdateAction}/>
            <Route path="delete/:id" action={DeleteAction}/>
        </Route>
    </>
))

export default Router