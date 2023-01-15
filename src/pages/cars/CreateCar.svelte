<script>
    import axios from "axios";

    let car = {
        make: "",
        model: "",
        year: "",
        automatic: false,
    };

    function addCar() {
        if (!car.make || !car.model || !car.year) {
            alert("Please fill in all the fields");

            return;
        }

        axios
            .post("http://localhost:3001/api/cars", car)
            .then((response) => {
                car = {
                    make: "",
                    model: "",
                    year: "",
                    automatic: "",
                };
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
            <input class="form-control" type="text" bind:value={car.year} />
        </div>
        <div class="form-check form-check-inline">
            <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
            />
            <label class="form-check-label" for="inlineRadio1">manual</label>
        </div>
        <div class="form-check form-check-inline">
            <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
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
