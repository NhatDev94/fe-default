import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import { lazy, ReactNode, Suspense } from 'react'

const Home = lazy(() => import('./Home'))
const Auth = lazy(() => import('./Auth'))

const pages = [
    {
        path: '/auth',
        element: <Auth />
    },
    {
        path: '/',
        element: <Home />
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