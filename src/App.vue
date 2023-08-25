<template>
  <div class="ctr">
    <Questions
      v-if="questionsAnswered < questionsData.length"
      :questions-data="questionsData"
      :questionsAnswered="questionsAnswered"
    />
    <Result />
    <button type="button" class="reset-btn" @click.prevent="ResetCount">
      Reset
    </button>
  </div>
</template>

<script lang="ts">
import { onMounted, Ref, ref } from "vue";
import type { questionInterface } from "./common/interfaces";
import Questions from "./components/Questions.vue";
import { getQuestions } from "./common";
import Result from "./components/Result.vue";

export default {
  components: {
    Questions,
    Result,
  },
  setup() {
    const point: Ref<number> = ref(0);
    const questionsData: Ref<questionInterface[]> = ref([]);
    const questionsAnswered: Ref<number> = ref(0);

    onMounted(async () => {
      questionsData.value = await getQuestions().then(
        (res: questionInterface[]) => res
      );
    });

    const ResetCount = () => {
      point.value = 0;
    };

    return {
      point,
      questionsData,
      ResetCount,
      questionsAnswered,
    };
  },
};
</script>

<style lang="scss" scoped></style>
