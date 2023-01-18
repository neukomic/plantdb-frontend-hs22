// Pages
import Home from "./pages/Home.svelte";
import AboutUs from "./pages/AboutUs.svelte";

import Cars from "./pages/cars/Cars.svelte"
import CarDetails from "./pages/cars/CarDetails.svelte"
import CreateCar from "./pages/cars/CreateCar.svelte"

import Users from "./pages/users/Users.svelte"
import UserDetails from "./pages/users/UserDetails.svelte"
import CreateUser from "./pages/users/CreateUser.svelte"

export default {
    // Home
    '/': Home,
    '/home': Home,
    '/about-us': AboutUs,

    // Cars
    '/cars': Cars,
    '/cars/:id': CarDetails,
    '/create-car': CreateCar,
    
    // Users
    '/users': Users,
    '/users/:id': UserDetails,
    '/create-user': CreateUser,
}