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