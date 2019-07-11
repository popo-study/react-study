<template>
  <div>
      <ul>
          <li 
          v-for="(menu, index) in menuList" 
          :key="menu.no" 
          @click="move(menu)"
          >
              {{index}} - {{menu.title}}
          </li>
      </ul>
      <ul>
          <li 
          v-for="(test, index) in testList" 
          :key="test.seq" 
          >
              {{index}} - {{test.id}} - {{test.name}}
          </li>
      </ul>
      <v-search
      :component-data="componentData"
      >
      </v-search>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';

export default {
  name: "main_page",
  data() {
    return {
        menuList: [
          { no: 1, title: "Component Test", link: 'component_test'}, 
          { no: 2, title: "Vuex Test", link: 'store_test' }
        ],
        componentData: [
          {
            view: { 'state':true, 'choice':true }
          },
          { state: [ 
              { title: 'title1', value: 't1' }, 
              { title: 'title2', value: 't2' },
              { title: 'title3', value: 't3' }
            ],
            choice: [
              { title: 'title4', value: 't4' }, 
              { title: 'title5', value: 't5' },
              { title: 'title6', value: 't6' }
            ]
          }
        ]
    }
  },
  methods: {
      move(data) {
          this.$router.push({name: data.link});
      }
  },
  computed: {
    ...mapGetters(['testList'])
  }
};
</script>