<template>
  <q-item clickable :to="link">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
      <q-tooltip class="shadow-4" :offset="[10, 10]">
        {{ title }}
      </q-tooltip>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
  },
});
</script>
