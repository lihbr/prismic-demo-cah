<template>
  <div class="questionAnswerItem">
    <button class="py-2.5 lg:py-5 flex justify-between w-full" @click="isOpen = !isOpen">
      <prismic-text
        :field="item.question"
        wrapper="span"
        class="font-bold text-[20px] lg:text-[40px] text-left"
      />
      <span class="pointer-events-none lg:text-[30px] transform transition" :class="{ 'rotate-45': isOpen }">&times;</span>
    </button>
    <prismic-rich-text :field="item.answer" class="lg:text-[28px] mb-[30px] lg:ml-[30px] lg:mb-[50px]" v-if="isOpen" />
  </div>
</template>

<script>
export default {
  name: "QuestionAnswerItem",
  props: {
    item: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>
