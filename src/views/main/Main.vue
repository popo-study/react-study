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
  </div>
</template>

<script>
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
  computed: {}
};
</script>