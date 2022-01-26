<template>
  <section class="questionAnswer bg-black text-white font-main leading-[1.2] py-[90px] px-5">
    <div class="container mx-auto">
      <prismic-text :field="slice.primary.title" wrapper="h2" class="text-[40px] lg:text-[80px] font-bold mb-[30px] lg:mb-[50px]" />
      <ul class="border-t-2 border-white">
        <li v-for="item in slice.items" :key="$prismic.asText(item.question)" class="border-b-2 border-white">
          <question-answer-item :item="item" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import QuestionAnswerItem from './QuestionAnswerItem.vue'

export default {
  name: "QuestionAnswer",
  components: {
    QuestionAnswerItem,
  },
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>
