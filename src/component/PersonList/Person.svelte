<script>
    import {createEventDispatcher} from 'svelte';
    import Form from "./Form.svelte";
    import InputText from "./form/InputText.svelte";
    import InputNumber from "./form/InputNumber.svelte";

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

<div class="two columns person-col">
    <InputText classes="person-form-field" id="person-firstname" bind:value={person.firstname} draft={draft} />
</div>
<div class="two columns person-col">
    <InputText classes="person-form-field" id="person-lastname" bind:value={person.lastname} draft={draft} />
</div>
<div class="two columns person-col">
    <InputNumber classes="person-form-field" id="person-day" bind:value={person.day} draft={draft} />
</div>
<div class="two columns person-col">
    <InputNumber classes="person-form-field" id="person-month" bind:value={person.month} draft={draft} />
</div>
<div class="two columns person-col">
    <InputNumber classes="person-form-field" id="person-year" bind:value={person.year} draft={draft} />
</div>
<div class="two columns person-col">
    <InputText classes="person-form-field" id="person-comment" bind:value={person.comment} draft={draft} />
</div>

<!--{/if}-->

<div class="two columns actions">
{#if draft}
    <button class="button-primary" on:click={save}>S</button>
{:else}
    <button class="button-primary" on:click={edit}>E</button>
{/if}

<button class="button-red" on:click={remove(person)}>X</button>
</div>



<style lang="scss">
  .button-red {
    color: #fff;
    background-color: darkred;

    &:hover {
      background-color: #5a0000;
    }
  }

  :global(.person-form-field) {
    width: 14%;
  }
  .person-col {
    min-height: 62px;
  }
  .actions {
    position: absolute;
    top: 0;
    right: -270px;
    padding: 15px;
    width: 270px;
    border-radius: 0 10px 10px 0;
    background-color: #fff;
  }
</style>
