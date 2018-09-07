const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

let env = require('./config/development.js')

if (process.env.NODE_ENV === 'production') {
	env = require('./config/production.js')
}


module.exports = {
	/*
	** Headers of the page
	*/
	head: {
		title: 'Tube Research',
		meta: [
            {"http-equiv": "x-ua-compatible", content: "ie=edge" },
		],
		link: [
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
        ]
	},

	/*
	** CSS File
	*/
	css: [
	    '~/assets/styles/app.styl'
    ],


	/*
	** Env File
	*/
	env: env,


    /**
	 * PWA Icons
	 * @url https://pwa.nuxtjs.org/modules/icon.html
     */
	icon: {
		iconSrc: 'assets/images/app-icon.png'
	},


    /**
	 * Meta
	 * @todo Add proper meta for FB and Twitter
	 * @url https://pwa.nuxtjs.org/modules/meta.html
     */
    meta: {
        name: 'Tube Research',
		short_name: 'Tube',
        description: 'Tube is a way for scholars around the world to assist each other in the acquisition of non-digitized documents.',
        mobileAppIOS: true
    },


    /**
	 * Workbox
	 * @url https://pwa.nuxtjs.org/modules/workbox.html
     */
    workbox: {

    },

    /**
	 * PWA Manifest
	 * @url
     */
    manifest: {
    	name: 'Tube Research',
        lang: 'en-US',
		orientation: 'portrait'
    },


	/*
	** Plugins
	*/
	plugins: [
		'~/plugins/vuetify.js'
	],


    /**
	 * Customize the loading bar
	 * @url https://nuxtjs.org/api/configuration-loading/
     */
	loading: {
		color: '#3B8070',
		height: '5px'
	},


	/*
	** Router
	*/
	router: {
		middleware: ['auth'],
		mode: 'history'
	},


    modules: [
        '@nuxtjs/pwa',
        '@nuxtjs/axios',
        '@nuxtjs/auth'
    ],

    /**
	 * Axios
	 * @url https://axios.nuxtjs.org/options.html
     */
    axios: {
    	baseURL: env.API_URL
	},

    /**
	 * Options for @nuxtjs/auth
	 * @url https://auth.nuxtjs.org/options.html
     */
	auth: {
		strategies: {
			local: {
                endpoints: {
                    login: {
                        url: '/auth/login',
                        method: 'post',
                        propertyName: 'data.token'
                    },
                    user: {
                    	url: '/auth/user',
						method: 'get',
						propertyName: 'data'
                    },
					logout: {
                    	url: '/auth/invalidate',
						method: 'delete'
					}
                }
			}
		},
		redirect: {
			login: '/login',
			logout: '/login',
			user: '/',
			home: '/home'
		},
        rewriteRedirects: true
	},


	/*
	** Build configuration
	*/

	build: {

		/*
		** Run ESLint on save
		*/
		extend(config, {isDev, isClient}) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		},

        /**
		 * @link https://vue-loader.vuejs.org/migrating.html#a-plugin-is-now-required
         */
		plugins: [
            new VueLoaderPlugin()
		],

		vendor: [
			'axios',
            '~/plugins/vuetify.js'
		],
        postcss: {
            plugins: {
                'autoprefixer': {},
            }
        },
        extractCSS: true,
		cssSourceMap: true,
		mode: 'spa'
	}
}
