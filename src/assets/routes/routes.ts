export const routes = {
    main: '/',
    authAdmin: '/authadmin',
    infographics: '/infographics',
    services: '/services',
    specialists: '/specialists',
    banners: '/banners',
    goToAppointment: (category: string| undefined, service:string): string => `/appointment/${category}/${service}`,
    appointment: '/appointment/:category/:service',
    privacyPolicy: '/privacypolicy',
    docs: '/docs',
    adminDocs: '/admin-docs',
}