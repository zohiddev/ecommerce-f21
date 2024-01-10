import { Home, Categories, ProductPage, CartPage, NotFoundPage,DetailPage } from "../pages"

export const routes = [
    {
        id: 1,
        path: '/',
        component: <Home/>
    },
    {
        id: 2,
        path: '/categories',
        component: <Categories/>
    },
    {
        id: 3,
        path: '/cart',
        component: <CartPage/>
    },
    {
        id: 4,
        path: '/product',
        component: <ProductPage/>
    },
    {
        id: 5,
        path: '/detail',
        component: <DetailPage/>
    },
    {
        id: 6,
        path: '*',
        component: <NotFoundPage/>
    },
]