<template>
  <div class="data">

    <v-data-table :items="db"></v-data-table>
      <template slot="item" slot-scope="props">
        
      </template>
  </div>
</template>

<script>
import Nikki from '../assets/MiracleNikkiJp_items.json'
export default {
  name: 'data',
  data: function () {
    return {
      db: Nikki
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
