<template>
  <div class="ctr">
    <Questions
      v-if="questionsAnswered < questionsData.length"
      :questions-data="questionsData"
      :questionsAnswered="questionsAnswered"
      @question-answered="QuestionAnswered"
    />
    <Result v-else :results="results" :totalCorrect="point" />
    <button
      v-if="questionsAnswered === questionsData.length"
      type="button"
      class="reset-btn"
      @click.prevent="ResetCount"
    >
      Reset
    </button>
  </div>
</template>

<script lang="ts">
import { onMounted, Ref, ref } from "vue";
import type { questionInterface, resultInterface } from "./common/interfaces";
import Questions from "./components/Questions.vue";
import { getQuestions, getResult } from "./common";
import Result from "./components/Result.vue";

export default {
  components: {
    Questions,
    Result,
  },
  setup() {
    const point: Ref<number> = ref(0);
    const results: Ref<resultInterface[]> = ref([]);
    const questionsData: Ref<questionInterface[]> = ref([]);
    const questionsAnswered: Ref<number> = ref(0);

    onMounted(async () => {
      questionsData.value = await getQuestions().then(
        (res: questionInterface[]) => res
      );
      results.value = await getResult();
    });

    const ResetCount = () => {
      questionsAnswered.value = 0;
      point.value = 0;
    };

    const QuestionAnswered = (is_correct: boolean) => {
      if (is_correct) {
        point.value += 1;
      }

      questionsAnswered.value++;
    };

    return {
      point,
      results,
      questionsData,
      ResetCount,
      questionsAnswered,
      QuestionAnswered,
    };
  },
};
</script>

<style lang="scss" scoped></style>
