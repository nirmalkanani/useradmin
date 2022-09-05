import React from "react";
const Home = React.lazy(() => import('../UserView/Home/Home'))
const Category = React.lazy(() => import('../UserView/Category/Category'))
const Shopping = React.lazy(() => import('../UserView/Shoping/Shopping'))

export const Nav_Route = [
    {
        name:"Home",
        url:"/user/home",
    },
    {
        name:"Category",
        url:"/user/category",
    },
    {
        name:"Shopping",
        url:"/user/shopping",
    },
    
]