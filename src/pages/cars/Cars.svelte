<script>
    import axios from "axios";

    let cars = [];

    function getCars() {
        axios.get("http://localhost:3001/api/cars").then((response) => {
            cars = response.data;
            sortByMake();
        });
    }

    getCars();

    function sortByMake() {
        cars.sort((a, b) => {
            if (a.make < b.make) {
                return -1;
            }
            if (a.make > b.make) {
                return 1;
            }
            if (a.model < b.model) {
                return -1;
            }
            if (a.model > b.model) {
                return 1;
            }
            if (a.year < b.year) {
                return -1;
            }
            if (a.year > b.year) {
                return 1;
            }
            return 0;
        });
        setCars([...cars]);
    }

    function sortByYear() {
        cars.sort((a, b) => {
            if (a.year < b.year) {
                return -1;
            }
            if (a.year > b.year) {
                return 1;
            }
            if (a.make < b.make) {
                return -1;
            }
            if (a.make > b.make) {
                return 1;
            }
            if (a.model < b.model) {
                return -1;
            }
            if (a.model > b.model) {
                return 1;
            }
            return 0;
        });
        setCars([...cars]);
    }
    function setCars(newCars) {
        cars = newCars;
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">List of all Cars</h1>
    <a href="#/create-car" class="btn btn-primary">+ Add Car</a>
    <button class="btn btn-primary" on:click={sortByMake}>Sort by make</button>
    <button class="btn btn-primary" on:click={sortByYear}>Sort by year</button>
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Make</th>
                <th>Model</th>
                <th>Year</th>
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
                        {car.make}
                    </td>
                    <td>
                        {car.model}
                    </td>
                    <td>
                        {car.year}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
