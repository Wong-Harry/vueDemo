<template>
  <div class="home">
    <p>这是首页{{ count }}</p>
    <p>这是首页{{ count123 }}</p>
    <el-button type="primary" @click="add()">增加</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  data: function() {
    return {
      count12: 12
    };
  },
  created: () => {
    console.log(123123);
  },
  computed: {
    ...mapState(['count', 'count1']),
    count123(state) {
      return state.count ;
    }
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
      this.$store.state.count += 1;
    }
  },
  components: {
    // HelloWorld,
  }
};
</script>
