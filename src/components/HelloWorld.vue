<template>
  <div>
    <p>{{ counter }}</p>
    <button @click="increase()">Increase</button>&nbsp;
    <button @click="decrease()">Decrease</button>
  </div>
</template>

<script>
import { INCREASE_COUNT, DECREASE_COUNT } from "../store/action.type";
import { mapGetters } from "vuex";
export default {
  name: "HelloWorld",
  computed: {
    ...mapGetters(["counter"])
  },
  methods: {
    increase() {
      // this.counter = this.counter + 1;
      this.$store.dispatch(INCREASE_COUNT);
    },
    decrease() {
      // this.counter = this.counter - 1;
      this.$store.dispatch(DECREASE_COUNT);
    }
  }
};
</script>

<style scoped></style>
