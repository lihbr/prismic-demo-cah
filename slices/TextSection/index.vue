<template>
  <section
    class="textSection bg-white text-black font-main leading-[1.2] py-40 px-5 bg-contain bg-center"
    :style="slice.variation === 'default-slice' ? {
        backgroundImage:
          `url(${slice.primary.background.url})`
      } : {}"
  >
    <div class="container mx-auto max-w-2xl">
      <prismic-rich-text :field="slice.primary.text" class="text-[20px] md:text-[32px] lg:text-[40px] space-y-5" />
      <ul v-if="slice.variation === 'withCta'" class="flex flex-wrap gap-5 justify-center mt-[30px] lg:mt-[50px]">
        <li v-for="item in slice.items" :key="item.label">
          <prismic-link :field="item.link" class="rounded-full bg-black text-white text-[24px] lg:text-[28px] font-bold px-10 lg:px-[60px] block">
            <span class="leading-[64px] lg:leading-[80px]">{{ item.label }}</span>
          </prismic-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "TextSection",
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

<style>
.textSection h2 {
  @apply text-[40px] lg:text-[80px] font-bold mb-[30px] lg:mb-[50px]
}
</style>
