// This module is shared between NodeJS and babelled ES5
const isClient = Boolean(process.env.NODE_ENV);

module.exports = {
    '/': {
        SyncComponent: isClient && require('theme-patternfly-org/defaults/pages/index').default
    },
    '/404': {
        SyncComponent: isClient && require('theme-patternfly-org/pages/404').default,
        title: '404 Error'
    }
};
