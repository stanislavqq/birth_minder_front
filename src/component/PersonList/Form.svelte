<script>
    export let person = {}
</script>

<input class="" type="text" placeholder=""
       id="test-1" bind:value={ person.firstname }>
<input class="" type="text" placeholder=""
       id="test-2" bind:value={ person.lastname }>

<select class="" id="test-3" bind:value={person.day}>
    <option value="1" selected>1</option>
    <option value="2">2</option>
    <option value="3">3</option>
</select>

<select class="" id="test-4" bind:value={person.month}>
    <option value="1" selected>Январь</option>
    <option value="2">Февраль</option>
    <option value="3">Март</option>
</select>

<input class="" type="number" placeholder=""
       id="test-5" value={ person.year }>
<textarea class="" placeholder="Comment" bind:value={person.comment}
          id="exampleMessage"></textarea>