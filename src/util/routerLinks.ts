const pathnames: Object  = {
    "Portfolio": '/portfolio',
    "My CV": '/my-cv',
    "Auth": '/auth',
    "Admin": '/admin'
}

const routerLinks = (path: string): string => {
    return pathnames[path as keyof Object] || '/'
}

export default routerLinks

