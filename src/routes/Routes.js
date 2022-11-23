import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../pages/category/Category";

import Home from "../pages/home/Home";
import News from "../pages/news/News";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'news',
                element: <News></News>
            },
            {
                path: 'category/:id',
                element: <Category></Category>
            }
        ]

    },


])