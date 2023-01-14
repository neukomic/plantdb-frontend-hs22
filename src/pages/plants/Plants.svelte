<script>
    import axios from "axios";

    let plants = [];

    function getPlants() {
        axios.get("http://localhost:3001/api/plants").then((response) => {
            plants = response.data;
        });
    }
    getPlants();
</script>

<div class="mb-5">
    <h1 class="mt-3">List of all Plants</h1>
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Common Name</th>
                <th>Scientific Name</th>
            </tr>
        </thead>
        <tbody>
            {#each plants as plant}
                <tr>
                    <td>
                        <a href={"#/plants/" + plant._id}>
                            {plant._id}
                        </a>
                    </td>
                    <td>
                        {plant.common_name}
                    </td>
                    <td>
                        {plant.scientific_name}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
