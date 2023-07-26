import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import { lazy, ReactNode, Suspense } from 'react'

const Auth = lazy(() => import(('./Auth')))
const Spending = lazy(() => import('./Spending'))
const Statistical = lazy(() => import('./Statistical'))

const pages = [
    {
        path: '/account',
        element: <Auth />
    },
    {
        path: '/',
        element: <Spending />
    },
    {
        path: 'statistical',
        element: <Statistical />
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