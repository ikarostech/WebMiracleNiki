<template>
  <div class="data">

    <v-data-table :headers="headers" :items="db">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.Number }}</td>
        <td>{{ props.item.Name }}</td>
        <td>{{ props.item.Type }}</td>
        <td>{{ props.item.Hearts }}</td>
        <td>{{ props.item.Splendor }}</td>
        <td>{{ props.item.Simple }}</td>
        <td>{{ props.item.Elegant }}</td>
        <td>{{ props.item.Active }}</td>
        <td>{{ props.item.Adult }}</td>
        <td>{{ props.item.Cute }}</td>
        <td>{{ props.item.Pure }}</td>
        <td>{{ props.item.Cool }}</td>
        <td>{{ props.item.Warm }}</td>
        <td>{{ props.item.Color }}</td>
        <td>{{ props.item.Tag }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import Nikki from '../assets/MiracleNikkiJp_items.json'
export default {
  name: 'data',
  data: function () {
    return {
      db: Nikki,
      headers: [
        { text: '番号', align: 'center', value: 'Number' },
        { text: '名前', align: 'center', value: 'Name' },
        { text: 'タイプ', align: 'center', value: 'Type' },
        { text: 'レア度', align: 'center', value: 'Hearts' },
        { text: '華麗', align: 'center', value: 'Splendor' },
        { text: 'シンプル', align: 'center', value: 'Simple' },
        { text: 'エレガント', align: 'center', value: 'Elegant' },
        { text: 'アクティブ', align: 'center', value: 'Active' },
        { text: '大人', align: 'center', value: 'Adult' },
        { text: 'キュート', align: 'center', value: 'Cute' },
        { text: 'ピュア', align: 'center', value: 'Pure' },
        { text: 'クール', align: 'center', value: 'Cool' },
        { text: 'ウォーム', align: 'center', value: 'Warm' },
      ]
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
