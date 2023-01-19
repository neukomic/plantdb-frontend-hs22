<script>
    import axios from "axios";
    import { empty } from "svelte/internal";

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

    function editUser() {
        if (confirm("Are you sure you want to edit this user?")) {
            axios
                .put("http://localhost:3001/api/users/" + id, user)
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
    <p />
    <p>Phone: {user.phone}</p>
    <p>Email: {user.email}</p>
    <p>Zip: {user.postalZip}</p>
    <p>Region: {user.region}</p>
    <p>Country: {user.country}</p>
    <button class="btn btn-danger" on:click={deleteUser}>Delete User</button>
</div>

<!-- Accordion example from https://getbootstrap.com/docs/5.0/components/accordion/ -->
<div class="accordion" id="accordionExample">
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
            >
                Change address of user
            </button>
        </h2>
        <div
            id="collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
        >
            <div class="accordion-body">
                <div class="mb-5">
                    <form>
                        <div class="form-group mb-3">
                            <label for="first">Zip:</label>
                            <input
                                id="first"
                                class="form-control"
                                type="text"
                                bind:value={user.postalZip}
                            />
                        </div>
                        <div class="form-group mb-3">
                            <label for="last">Region:</label>
                            <input
                                id="last"
                                class="form-control"
                                type="text"
                                bind:value={user.region}
                            />
                        </div>
                        <div class="form-group mb-3">
                            <label for="last">Country:</label>
                            <input
                                id="last"
                                class="form-control"
                                type="text"
                                bind:value={user.country}
                            />
                        </div>
                        <p />
                        <button
                            on:click={editUser}
                            type="submit"
                            class="btn btn-primary">Change address</button
                        >
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
