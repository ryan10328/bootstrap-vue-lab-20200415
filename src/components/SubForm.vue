<template>
  <div>Hello, World</div>
</template>
<script>
export default {
  name: "SubForm",
  props: ["onOk", "onCancel"],
  watch: {
    onOk: function(value) {
      if (value) {
        this.$emit("ok-pressed", false);
      }
    },
    onCancel: function(value) {
      if (value) {
        this.$emit("cancel-pressed", false);
      }
    }
  }
};
</script>
<style scoped>
</style>
