<template>
  <div class="questions-ctr">
    <div class="progress">
      <div
        class="bar"
        :style="{
          width: `${(questionsAnswered / questionsData.length) * 100}%`,
        }"
      ></div>
      <div class="status">
        {{ questionsAnswered }} out of {{ questionsData.length }} questions
        answered
      </div>
    </div>
    <div
      class="single-question"
      v-for="(question, qi) in questionsData"
      :key="qi"
      v-show="questionsAnswered === +qi"
    >
      <div class="question">{{ question.q }}</div>
      <div
        class="answers"
        v-for="(answer, i) in question.answers"
        :key="i"
        @click.prevent="selectAnswer(answer.is_correct)"
      >
        <div class="answer" :style="{}">
          {{ answer.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    questionsData: {
      type: Object,
      required: true,
    },
    questionsAnswered: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    let questionsData = props.questionsData;

    const selectAnswer = (is_correct: boolean) => {
      emit("question-answered", is_correct);
      console.log(is_correct);
    };

    return {
      questionsData,
      selectAnswer,
    };
  },
};
</script>

<style lang="scss" scoped></style>
