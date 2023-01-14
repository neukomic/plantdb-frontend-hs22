<script>
    import axios from "axios";

    export let params = {};

    let id;

    $: {
        // "Reactive Statement":
        // This block of is executed whenever the value of a variable in it changes.
        // See https://svelte.dev/tutorial/reactive-statements
        id = params.id;
        getFamily();
    }

    let family = {};

    function getFamily() {
        axios.get("http://localhost:3001/api/families/" + id)
            .then((response) => {
                family = response.data;
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">Family (ID: {id})</h1>
    <p>Name: {family.family_name}</p>
</div>
