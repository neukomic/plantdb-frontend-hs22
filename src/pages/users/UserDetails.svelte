<script>
    import axios from "axios";

    export let params = {};

    let id;

    $: {
        // "Reactive Statement":
        // This block of is executed whenever the value of a variable in it changes.
        // See https://svelte.dev/tutorial/reactive-statements
        id = params.id;
        getUser();
    }

    let user = {};

    function getUser() {
        axios.get("http://localhost:3001/api/users/" + id).then((response) => {
            user = response.data;
        });
    }

    function deleteUser() {
        if (confirm("Are you sure you want to delete this user?")) {
            axios
                .delete("http://localhost:3001/api/users/" + id)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
</script>

<div class="mb-5">
        <h1 class="mt-3">{user.first_name} {user.last_name}</h1>
        <p>Phone: {user.phone}</p>
        <p>Email: {user.email}</p>
        <p>Zip: {user.postalZip}</p>
        <p>Region: {user.region}</p>
        <p>Country: {user.country}</p>
        <button class="btn btn-danger" on:click={deleteUser}>Delete User</button>
</div>