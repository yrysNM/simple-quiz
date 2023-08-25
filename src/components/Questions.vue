<template>
  <div class="questions-ctr">
    <div class="progress">
      <div class="bar"></div>
      <div class="status">1 out of 3 questions answered</div>
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
        <div
          class="answer"
          :style="{
            //   'background-color': answerData?.is_correct ? 'green' : 'red',
          }"
        >
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
  setup(props) {
    let questionsData = props.questionsData;

    const selectAnswer = (is_correct: boolean) => {
      console.log(is_correct);
    };
    // const CheckAnswer = (text: tAns,) => {

    //   if (text.is_correct) {
    //     point.value += 1;
    //   } else {
    //     point.value += point.value <= 0 ? 0 : -1;
    //   }
    // };

    return {
      questionsData,
      selectAnswer,
    };
  },
};
</script>

<style lang="scss" scoped></style>
