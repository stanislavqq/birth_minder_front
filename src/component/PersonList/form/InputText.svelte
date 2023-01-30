<script>
    export let id
    export let type = "text"
    export let value

    export let classes = ""

    export let placeholder

    export let draft = null
</script>

{#if draft === null || draft === true}
    <input class={classes} type="text" {placeholder} {id} bind:value={ value }>
    {:else }
    { value }
{/if}