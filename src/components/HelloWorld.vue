<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-button variant="primary" @click="open()">Open Modal</b-button>
      </b-row>
      <b-modal ref="my-modal">
        <template v-slot:modal-title>Hello, World</template>
        <template v-slot:default>
          <sub-form
            :onOk="onOk"
            :onCancel="onCancel"
            @ok-pressed="handleOk($event)"
            @cancel-pressed="handleCancel($event)"
          ></sub-form>
        </template>
        <template v-slot:modal-footer="{ok, cancel}">
          <b-button variant="primary-outline" @click="cancel()">Cancel</b-button>
          <b-button variant="primary" @click="ok()">Save</b-button>
        </template>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
import SubForm from "./SubForm.vue";
export default {
  name: "HelloWorld",
  components: {
    SubForm
  },
  props: {
    msg: String
  },
  data() {
    return {
      onOk: false,
      onCancel: false
    };
  },
  methods: {
    open() {
      this.$refs["my-modal"].show();
    },
    handleOk(evt) {
      console.log("handle ok", evt);
      this.onOk = evt;
    },
    handleCancel(evt) {
      console.log("handle cancel", evt);
      this.onCancel = evt;
    }
  },
  mounted() {
    this.$root.$on("bv::modal::hide", evt => {
      if (evt.trigger === "ok") {
        this.onOk = true;
      } else if (evt.trigger === "cancel") {
        this.onCancel = true;
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
