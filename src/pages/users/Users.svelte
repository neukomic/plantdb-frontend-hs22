<script>
    import axios from "axios";

    let users = [];

    function getUsers() {
        axios.get("http://localhost:3001/api/users").then((response) => {
            users = response.data;
            sortByName();
        });
    }
    getUsers();

    function sortByName() {
        users.sort((a, b) => {
            if (a.last_name < b.last_name) {
                return -1;
            }
            if (a.last_name > b.last_name) {
                return 1;
            }
            if (a.first_name < b.first_name) {
                return -1;
            }
            if (a.first_name > b.first_name) {
                return 1;
            }
            return 0;
        });
        setUsers([...users]);
    }

    function sortByCountry() {
        users.sort((a, b) => {
            if (a.country < b.country) {
                return -1;
            }
            if (a.country > b.country) {
                return 1;
            }
            return 0;
        });
        setUsers([...users]);
    }
    function setUsers(newUsers) {
        users = newUsers;
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">List of all Users</h1>
    <a href="#/create-user" class="btn btn-primary">+ Add User</a>
    <button class="btn btn-primary" on:click={sortByName}>Sort by name</button>
    <button class="btn btn-primary" on:click={sortByCountry}
        >Sort by country</button
    >
    <table class="table">
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Country</th>
            </tr>
        </thead>
        <tbody>
            {#each users as user}
                <tr>
                    <td>
                        <a href={"#/users/" + user._id}>{user.first_name}</a>
                    </td>
                    <td>
                        <a href={"#/users/" + user._id}>{user.last_name}</a>
                    </td>
                    <td>
                        <a href={"#/users/" + user._id}>{user.country}</a>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    tr:hover {
        opacity: 0.5;
    }
    td a {
        display: block;
        text-decoration: none;
    }
</style>
