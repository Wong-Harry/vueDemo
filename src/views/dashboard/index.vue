<template>
  <div class="home">
    <p>这是首页{{ count }}</p>
    <p>这是首页{{ count123 }}</p>
    <el-button type="primary" @click="add()">增加</el-button>
    <div v-for="item in todos" :key="item.id">{{ item }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { mapState } from 'vuex'

export default {
  name: 'Dashboard',
  data: function() {
    return {
      count12: 12,
      todos: this.$store.state.todos
    }
  },
  computed: {
    ...mapState(['count', 'count1']),
    count123(state) {
      return state.count1 + state.count - 1
    }
  },
  created: () => {
    console.log(123123)
  },

  // computed: mapState({
  //   count: 'count1',
  //   // eslint-disable-next-line arrow-body-style
  //   count1(state) {
  //     return state.count + this.count12;
  //   }
  // }),
  methods: {
    add() {
      // this.$set(this.$store.state, 'newValue', 12);
      // this.$store.dispatch('increment');
      // this.$store.dispatch('incrementAsync', {
      //   amount: 10
      // });

      this.$store.dispatch('actionPromise').then(() => {
        console.log(123123)
      })
      // this.$store.commit('increment', {
      //   amount: 10
      // });
      // this.$store.commit({
      //   type: 'increment',
      //   amount: 10
      // });
    }
  }
}
</script>
