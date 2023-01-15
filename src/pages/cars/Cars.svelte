<script>
    import axios from "axios";

    let cars = [];

    function getCars() {
        axios.get("http://localhost:3001/api/cars").then((response) => {
            cars = response.data;
        });
    }
    getCars();
</script>

<div class="mb-5">
    <h1 class="mt-3">List of all Cars</h1>
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Common Name</th>
                <th>Scientific Name</th>
            </tr>
        </thead>
        <tbody>
            {#each cars as car}
                <tr>
                    <td>
                        <a href={"#/cars/" + car._id}>
                            {car._id}
                        </a>
                    </td>
                    <td>
                        {car.common_name}
                    </td>
                    <td>
                        {car.scientific_name}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
