<script>
    import { createEventDispatcher } from 'svelte';
    import Form from "./Form.svelte";

    export let person = {}
    export let draft = false

    const dispatch = createEventDispatcher();
    const remove = () => dispatch('remove');

    function edit() {
        draft = true
    }

    function save() {
        draft = false
        console.log("Saved!", person);
    }
</script>


<div class="row">
    <div class="eight columns person-info" class:person-draft={!draft}>
        {#if draft}
            <Form {person}></Form>
        {:else}
            { person.firstname }
            { person.lastname }
            { person.day }
            { person.month }
            { person.year }
            { person.comment }
        {/if}
    </div>
    <div class="four columns actions">
        {#if draft}
            <button on:click={save}>Save</button>
        {:else}
            <button on:click={edit}>Edit</button>
        {/if}

        <button on:click={remove(person)}>Delete</button>
    </div>
</div>