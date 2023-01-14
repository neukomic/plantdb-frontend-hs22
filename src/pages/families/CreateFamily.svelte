<script>
    import axios from "axios";

    let family = {
        name: "",
        origin: "",
    };

    function addFamily() {
        axios.post("http://localhost:3001/api/families", family)
            .then((response) => {
                alert("Family added");
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">Add an family</h1>

    <form>
        <div class="mb-3">
            <label for="" class="form-label">Name</label>
            <input class="form-control" type="text" bind:value={family.name} />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Origin</label>
            <input class="form-control" type="text" bind:value={family.origin} />
        </div>
        <button on:click={addFamily} type="button" class="btn btn-primary">
            Add Family
        </button>
    </form>
</div>
