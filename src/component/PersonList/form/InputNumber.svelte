<script>
    export let id
    export let type = "text"
    export let value

    export let classes = ""

    export let placeholder

    export let draft = null

    export let max
    export let min
</script>

{#if draft === null || draft === true}
    <input class={classes} min={min} max={max} type="number" {placeholder} {id} bind:value={ value }>
    {:else }
    { value }
{/if}
