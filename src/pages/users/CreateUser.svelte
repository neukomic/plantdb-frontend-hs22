<script>
    import axios from "axios";

    let user = {
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        postalZip: "",
        region: "",
        country: "",
    };

    function addUser() {
        if (
            !user.first_name ||
            !user.last_name ||
            !user.phone ||
            !user.email ||
            !user.postalZip ||
            !user.region ||
            !user.country
        ) {
            alert("Please fill in all the fields");
            return;
        }

        axios
            .post("http://localhost:3001/api/users", user)
            .then((response) => {
                user = {};
                alert("User added");
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">Add a user</h1>

    <a class="btn btn-primary" href="#/users">Back</a>
    <form>
        <div class="mb-3">
            <label for="" class="form-label">First Name</label>
            <input
                class="form-control"
                type="text"
                bind:value={user.first_name}
            />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Last Name</label>
            <input
                class="form-control"
                type="text"
                bind:value={user.last_name}
            />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Phone</label>
            <input class="form-control" type="text" bind:value={user.phone} />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Email</label>
            <input class="form-control" type="email" bind:value={user.email} />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Zip</label>
            <input
                class="form-control"
                type="text"
                bind:value={user.postalZip}
            />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Region</label>
            <input class="form-control" type="text" bind:value={user.region} />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Country</label>
            <input class="form-control" type="text" bind:value={user.country} />
        </div>
        <button on:click={addUser} type="button" class="btn btn-primary">
            Add User
        </button>
        <button type="reset" value="Reset" class="btn btn-danger">
            Reset
        </button>
    </form>
</div>
