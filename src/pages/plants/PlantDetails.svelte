<script>
    import axios from "axios";

    export let params = {};
    let plant_id;
    let family_id;

    $: {
        plant_id = params.id;
        getPlant();
        getFamilies();
    }

    let plant = {
        _id: "",
        title: "",
        released: "",
        label: "",
        genres: [],
        families: [],
    };

    let families = [];

    function getPlant() {
        axios.get("http://localhost:3001/api/plants/" + plant_id)
            .then((response) => {
                plant = response.data;
            });
    }

    function getFamilies() {
        axios.get("http://localhost:3001/api/families")
            .then((response) => {
                families = response.data;
            });
    }

    function addFamilyToPlant() {
        plant.families.push(family_id);
        axios.put("http://localhost:3001/api/plants/" + plant_id, plant)
            .then((response) => {
                getPlant();
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">Plant (ID: {plant_id})</h1>
    <p>Common Name: {plant.common_name}</p>
    <p>Scientific Name: {plant.scientific_name}</p>
    <p>Families:</p>
    <ul>
        {#each plant.families as family}
            <li>
                <a href={"#/families/" + family}>{family}</a>
            </li>
        {/each}
    </ul>

    <h2>Update Families</h2>
    <label for="family">Add Family to plant</label>
    <select class="form-select" bind:value={family_id} id="family">
        {#each families as family}
            <option value={family._id}>{family.family_name}</option>
        {/each}
    </select>
    <button class="btn btn-primary mt-2" on:click={addFamilyToPlant}>Update</button>
</div>
