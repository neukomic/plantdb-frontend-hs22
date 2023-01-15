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
        axios.get("http://localhost:3001/api/users/" + id)
            .then((response) => {
                user = response.data;
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">User (ID: {id})</h1>
    <p>Name: {user.user_name}</p>
</div>
