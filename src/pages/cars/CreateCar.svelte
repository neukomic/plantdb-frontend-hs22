<script>
    import axios from "axios";

    let car = {
        make: "",
        model: "",
        year: null,
        automatic: false,
        users: [],
    };

    function addCar() {
        if (!car.make || !car.model || !car.year) {
            alert("Please fill in all the fields");
            return;
        }

        if (document.getElementById("inlineRadio1").checked) {
            car.automatic = false;
        } else if (document.getElementById("inlineRadio2").checked) {
            car.automatic = true;
        }

        axios
            .post("http://localhost:3001/api/cars", car)
            .then((response) => {
                car = {};
                document.getElementById("inlineRadio1").checked = true;
                alert("Car added successfully");
            })
            .catch((error) => {
                console.log(error);
                alert("An Error Occured while adding the car");
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">Add a car</h1>

    <form>
        <div class="mb-3">
            <label for="" class="form-label">Make</label>
            <input class="form-control" type="text" bind:value={car.make} />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Model</label>
            <input class="form-control" type="text" bind:value={car.model} />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Year</label>
            <input class="form-control" type="number" bind:value={car.year} />
        </div>

        <div class="form-check form-check-inline">
            <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="false"
                checked="checked"
            />
            <label class="form-check-label" for="inlineRadio1">manual</label>
        </div>
        <div class="form-check form-check-inline">
            <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="true"
            />
            <label class="form-check-label" for="inlineRadio2">automatic</label>
        </div>
        <div>
            <button on:click={addCar} type="button" class="btn btn-primary">
                Add Car
            </button>
        </div>
    </form>
</div>
