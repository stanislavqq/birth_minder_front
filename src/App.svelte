<script>
    import {persons} from "./store";
    import PersonList from "./component/PersonList/PersonList.svelte";
    console.log(1, $persons)
</script>

<main>
    <div class="container">
        <div class="app">
            <!-- columns should be the immediate child of a .row -->
            <div class="row">
                <div class="twelve columns">
                    <PersonList persons={$persons}></PersonList>
                </div>
            </div>
        </div>
    </div>
</main>

<style lang="scss">

  main {
    background: #333;
    display: flex;
    min-height: 100vh;
  }

  .app {
    background: white;
    padding: 15px;
    border-radius: 5px;
  }
</style>