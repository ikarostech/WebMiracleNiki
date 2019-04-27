<template>
  <div class="data">

    <ul>
      <li  v-for="item in Nikki" v-bind:key="item.Name">{{ item.Name }}</li>
    </ul>

  </div>
</template>

<script>
import Nikki from '../assets/MiracleNikkiJp_items.json'
export default {
  name: 'data',
  data: function () {
    return {
      Nikki: Nikki
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
