<template>
  <div>
    <p>{{ counter }}</p>
    <button @click="increase()">Increase</button>&nbsp;
    <button @click="decrease()">Decrease</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    increase() {
      this.counter = this.counter + 1;
    },
    decrease() {
      this.counter = this.counter - 1;
    }
  }
};
</script>

<style scoped></style>
