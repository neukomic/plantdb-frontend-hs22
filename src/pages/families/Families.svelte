<script>
    import axios from "axios";

    let families = [];

    function getFamilies() {
        axios.get("http://localhost:3001/api/families").then((response) => {
            families = response.data;
        });
    }
    getFamilies();
</script>

<div class="mb-5">
    <h1 class="mt-3">List of all Families</h1>
    <a href="#/create-family">+ Add Family</a>
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Family Name</th>
            </tr>
        </thead>
        <tbody>
            {#each families as family}
                <tr>
                    <td>
                        <a href={"#/families/" + family._id}>
                            {family._id}
                        </a>
                    </td>
                    <td>
                        {family.family_name}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
