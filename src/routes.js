// Pages
import Home from "./pages/Home.svelte";

import Plants from "./pages/plants/Plants.svelte"
import PlantDetails from "./pages/plants/PlantDetails.svelte"

import Families from "./pages/families/Families.svelte"
import FamilyDetails from "./pages/families/FamilyDetails.svelte"
import CreateFamily from "./pages/families/CreateFamily.svelte"

export default {
    // Home
    '/': Home,
    '/home': Home,

    // Plants
    '/plants': Plants,
    '/plants/:id': PlantDetails,
    
    // Families
    '/families': Families,
    '/families/:id': FamilyDetails,
    '/create-family': CreateFamily,
}