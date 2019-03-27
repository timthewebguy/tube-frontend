export default function ({ store, redirect, route, error }) {
    if (!store.getters.activeUser && (route.path !== '/login') && (route.path !== '/register') && (route.path !== '/password') && (route.path !== '/resetpassword')) {
        console.log("User not logged in");
        return redirect('/login')
    }
}