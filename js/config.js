var klaroConfig = {
    acceptAll: true,
    translations: {

    },
    services: [
        {
            name: 'matomo',
            default: true,
            title: 'Matomo',
            purposes: ['analytics'],
            cookies: [
                [/^_pk_.*$/, '/', 'localhost'],
                [/^_mtm_.*$/, '/', 'localhost'],
                [/^MATOMO.*$/, '/', 'localhost']
            ],
            callback: function(consent, service) {
                if (typeof _paq !== 'undefined') {  
                    if (consent === true) {
                        _paq.push(['rememberCookieConsentGiven']);
                        _paq.push(['setConsentGiven']);
                    } else {
                        _paq.push(['forgetCookieConsentGiven']);
                        _paq.push(['deleteCookies']); 
                    }
                }  
            },
            required: false,
            optOut: false,
            onlyOnce: true
        }  
    ]
};
