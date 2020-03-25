<template>
	<v-app id="tube">
        <v-navigation-drawer
        v-model="drawer"
        app
        bottom
        v-if="user"
        dark
        color='primary'
        right
        >
            <v-list
            nav
            two-line
            rounded
            >
                <v-list-item>
                    <v-list-item-avatar class="mr-3">
                        <img v-bind:src="gravatar">
                    </v-list-item-avatar>
                    <v-list-item-content v-if="this.user">
                        <v-list-item-title>{{this.user.displayName}}</v-list-item-title>
                        <v-list-item-subtitle>{{this.user.email}}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list dense nav>
                <v-list-item
                    v-for="item in items1"
                    :key="item.title"
                    :to = "item.link"
                    nuxt
                    active-class="primary lighten-5 primary--text text--darken-1"
                >
                    <v-list-item-action>
                    <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

        <template v-slot:append>
            <div class="pa-2">
                <v-btn block depressed light color="white" @click="dialog = true">Log out</v-btn>
            </div>
        </template>


        </v-navigation-drawer>
		<v-app-bar color="white" light fixed app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer" v-if="user"></v-toolbar-side-icon> -->

            <v-toolbar-title style="display:flex; justify-content:center; width: 100%" class="ma-0">
                <nuxt-link :to="{ name: 'dashboard' }" id="wordmark-link">
                    <img src="/img/beta-wordmark-brian.svg" id="logo" alt="Sourcery Logo">
                </nuxt-link>
            </v-toolbar-title>

            <!-- Stupid Hack to center align the wordmark -->
            <!-- <v-toolbar-side-icon style="visibility: hidden" v-if="user"></v-toolbar-side-icon> -->


		</v-app-bar>
		<v-content pa-0>
			<v-container fill-height>
				<v-layout
						justify-center fill-height
				>

					<nuxt/>
				</v-layout>
			</v-container>
		</v-content>
        <v-bottom-navigation
            :value="true"
            app
            fixed
            grow
            
            v-if="user && onboardingComplete"
            color='primary'
        >
            <v-btn
                flat
                value="dashboard"
                :to="{ name: 'dashboard' }"

            >
                <span>Dashboard</span>
                <v-icon>mdi-view-dashboard</v-icon>
            </v-btn>

            <v-btn
                flat
                value="add"
                to="/request/create"
            >
                <span>New Request</span>
                <v-icon>mdi-playlist-edit</v-icon>
            </v-btn>

            <v-btn
                flat
                value="search"
                to="/jobs"

            >
                <span>Find Jobs</span>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <!-- <v-btn
                flat
                value="settings"
                active-class=""
                :class="drawer ? 'v-btn--active' :''"
                @click.stop="drawer = !drawer"
            >
                <span>Settings</span>
                <v-icon>mdi-cogs</v-icon>
            </v-btn> -->

        </v-bottom-navigation>

        <v-dialog
            v-model="dialog"
            max-width="290"
            >
            <v-card>

                <v-card-title class="headline">
                Are you sure you want to log out?
                </v-card-title>

                <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                    color="primary"
                    @click="logout()" nuxt active-class
                >
                    Log Out
                </v-btn>

                <v-btn
                    @click="dialog = false"
                >
                    Cancel
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>


    </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import md5 from 'md5'

    export default {
		computed: {
            gravatar() {
                return `https://www.gravatar.com/avatar/${md5(this.user.email || '')}?d=mp`;
            },
            ...mapGetters({
                user: 'auth/activeUser',
                isResearcher: 'meta/isResearcher',
                isSourcerer: 'meta/isSourcerer',
                balance: 'meta/balance',
                canMakePayments: 'meta/canMakePayments',
                onboardingComplete: 'meta/onboardingComplete'
            })
		},
		methods: {
            async logout() {
                await this.$store.dispatch('auth/signOut');
                this.dialog=false;
                this.$router.replace('/login')
            }
		},
        data: () => ({
            drawer: null,
            dialog: false,
            items1: [
                { title: 'Edit Profile', icon: 'mdi-account-edit', link: '/account/profile'},
                { title: 'Payouts', icon: 'mdi-piggy-bank', link: '/account/payouts'},
                { title: 'Payments', icon: 'mdi-credit-card-outline', link: '/account/credit-cards'},
                { title: 'Notifications', icon: 'mdi-bell', link: '/settings/notifications'},
                { title: 'History', icon: 'mdi-history', link: '/request/history'},
                { title: 'Privacy Policy', icon: 'mdi-lock-plus', link: '/privacy'},
                { title: 'Terms of Use', icon: 'mdi-text-subject', link: '/terms'},
                { title: 'Help', icon: 'mdi-help-circle', link: '/account/help'},
                { title: 'Feedback', icon: 'mdi-message-alert', link: '/settings/feedback'},
            ],
        }),

        props: {
            source: String
        },
        mounted() {
            // console.log('Firebase: ', firebase);
            // console.log(this.$store);
            // console.log('Meta', this.$store.state.meta)
        }
	}
</script>

<style>
    #wordmark-link {
        display: inline-block
    }
	#wordmark {
        display:block;
		width: 200px;
        max-width: 100%;
		height: auto;
	}
</style>
