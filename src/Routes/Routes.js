import React from 'react'
const de = React.lazy(() => import('../demo/index'))
const id = React.lazy(() => import('../demo/id'))
const demo = React.lazy(() => import('../demo/demo'))

export const Nav = [
    {
        path:"/admin/id",
        name:"id",
        element:id
    },
    {
        path:"/admin/de",
        name:"de",
        element:de
    },
    {
        path:"/admin/demo",
        name:"demo",
        element:demo
    }
]