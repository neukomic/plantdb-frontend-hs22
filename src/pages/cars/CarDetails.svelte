<script>
    import axios from "axios";

    export let params = {};
    let car_id;
    let user_id;

    $: {
        car_id = params.id;
        getCar();
        getUsers();
    }

    let car = {
        _id: "",
        common_name: "",
        scientific_name: "",
        users: []
    };

    let users = [];

    function getCar() {
        axios.get("http://localhost:3001/api/cars/" + car_id)
            .then((response) => {
                car = response.data;
            });
    }

    function getUsers() {
        axios.get("http://localhost:3001/api/users")
            .then((response) => {
                users = response.data;
            });
    }

    function addUserToCar() {
        car.users.push(user_id);
        axios.put("http://localhost:3001/api/cars/" + car_id, car)
            .then((response) => {
                getCar();
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">Car (ID: {car_id})</h1>
    <p>Common Name: {car.common_name}</p>
    <p>Scientific Name: {car.scientific_name}</p>
    <p>Users:</p>
    <ul>
        {#each car.users as user}
            <li>
                <a href={"#/users/" + user}>{user}</a>
            </li>
        {/each}
    </ul>

    <h2>Update Users</h2>
    <label for="user">Add User to car</label>
    <select class="form-select" bind:value={user_id} id="user">
        {#each users as user}
            <option value={user._id}>{user.user_name}</option>
        {/each}
    </select>
    <button class="btn btn-primary mt-2" on:click={addUserToCar}>Update</button>
</div>
