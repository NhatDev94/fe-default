import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import { lazy, ReactNode, Suspense } from 'react'

const Home = lazy(() => import('./Home'))
const Friend = lazy(() => import('./Friend'))
const Group = lazy(() => import(('./Group')))
const MarketPlace = lazy(() => import(('./MarketPlace')))

const pages = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/friends',
        element: <Friend />
    },
    {
        path: '/groups',
        element: <Group />
    },
    {
        path: '/marketplace',
        element: <MarketPlace />
    }
]

const renderLoading = (element: ReactNode) => {
    return <Suspense fallback={<div>...</div>}>{element}</Suspense>
}

const routes = () => {
    return (
        <Layout>
            <Routes>
                {
                    pages?.map((page) => (
                        < Route
                            key={page?.path}
                            path={page?.path}
                            element={renderLoading(page?.element)}
                        />
                    ))
                }
            </Routes>
        </Layout>
    )
}

export default routes