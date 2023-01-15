<script>
    import axios from "axios";

    let user = {
        user_name: ""
    };

    function addUser() {
        axios.post("http://localhost:3001/api/users", user)
            .then((response) => {
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

    <form>
        <div class="mb-3">
            <label for="" class="form-label">User Name</label>
            <input class="form-control" type="text" bind:value={user.user_name} />
        </div>
        <button on:click={addUser} type="button" class="btn btn-primary">
            Add User
        </button>
    </form>
</div>
