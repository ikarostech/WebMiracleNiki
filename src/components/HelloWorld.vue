<template>
  <div class="data">
    <v-text-field v-model="search" append-icon="search" label="Search" single-line
    hide-details></v-text-field>
    <v-data-table :headers="headers" :items="db" :search="search" :custom-sort="customSort">
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
        <td><th v-for="i in props.item.Color" v-bind:key="i">{{ i }}</th></td>
        <td><th v-for="i in props.item.Tag" v-bind:key="i">{{ i }}</th></td>

      </template>
    </v-data-table>
  </div>
</template>

<script>
import Nikki from '../assets/MiracleNikkiJp_items.json'

function Compare (item, index) {
  let ItemData = Reflect.get(item, index)
  switch (ItemData) {
    case 'SS':
      return 0
    case 'S':
      return 1
    case 'A':
      return 2
    case 'B':
      return 3
    case 'C':
      return 4
  }
  return 5
}
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
        { text: '色', align: 'center', value: 'Color' },
        { text: 'タグ', align: 'center', value: 'Tag' }
      ],
      search: ''
    }
  },
  methods: {
    customSort (items, index, isDescending) {
      items.sort((a, b) => {
        if (index !== 'Number' && index !== 'Hearts' && index !== 'Color' && index !== 'Tag') {
          return Compare(a, index) - Compare(b, index)
        } else {
          return Reflect.get(a, index) - Reflect.get(b, index)
        }
      })
      if (isDescending) {
        items = items.slice().reverse()
      }
      return items
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
th {
  font-weight: normal;
}
</style>
