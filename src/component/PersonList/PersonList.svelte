<script>
    import Person from "./Person.svelte";

    export let persons = []
    console.log(2, persons)

</script>

<button>Create</button>
<ul>
    {#each persons as person, key}
        <li id={"list-item-" + key}>
            <Person {person} bind:draft={person.draft} on:remove={() => console.log("Remove!")}></Person>
        </li>
    {/each}
</ul>