<template>
  <div class="result">
    <div class="title">{{ results[currentIndex].title }}</div>
    <div class="desc">{{ results[currentIndex].desc }}</div>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { resultInterface } from "../common/interfaces";
export default {
  props: {
    results: {
      type: Object,
      required: true,
    },
    totalCorrect: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const currentIndex = computed(() => {
      let index = 0;

      props.results.forEach((element: resultInterface, i: number) => {
        if (
          element.max >= props.totalCorrect &&
          element.min <= props.totalCorrect
        ) {
          index = i;
        }
      });

      return index;
    });
    return { currentIndex };
  },
};
</script>

<style lang="scss" scoped></style>
