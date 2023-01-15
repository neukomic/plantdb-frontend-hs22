<script>
    import axios from "axios";

    let users = [];

    function getUsers() {
        axios.get("http://localhost:3001/api/users").then((response) => {
            users = response.data;
        });
    }
    getUsers();
</script>

<div class="mb-5">
    <h1 class="mt-3">List of all Users</h1>
    <a href="#/create-user">+ Add User</a>
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>User Name</th>
            </tr>
        </thead>
        <tbody>
            {#each users as user}
                <tr>
                    <td>
                        <a href={"#/users/" + user._id}>
                            {user._id}
                        </a>
                    </td>
                    <td>
                        {user.user_name}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
