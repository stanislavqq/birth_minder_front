<script>
    import Person from "./Person.svelte";

    export let persons = []
    console.log(2, persons)

</script>

<button>Create</button>

<div>
{#each persons as person, key}
    <div class="row person-item" id={"list-item-" + (key + 1)}>
        <Person {person} bind:draft={person.draft} on:remove={() => console.log("Remove!")}></Person>
    </div>
{/each}
</div>

<style lang="scss">
    .person-item {
      position: relative;
      border-bottom: 1px solid #e9e9e9;
      padding-top: 15px;
      &:hover {
        .actions {
          visibility: visible;
        }
      }
    }

    :global(.app input) {
      width: auto;
      display: block;
      max-width: 100%;
    }
</style>