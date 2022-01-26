<template>
  <section class="featuredLinks bg-black text-white font-main leading-[1.2] py-[90px] px-5">
    <div class="container mx-auto">
      <prismic-text :field="slice.primary.title" wrapper="h2" class="text-[40px] lg:text-[80px] font-bold mb-[30px] lg:mb-[50px]" />
      <ul class="space-y-6 lg:space-y-0 lg:flex lg:gap-6">
        <li
          v-for="item in slice.items"
          :key="$prismic.asText(item.title)"
          class="flex-1"
        >
          <prismic-link
            :field="item.link"
            class="block h-full rounded-2xl p-[30px] overflow-hidden relative z-0 group"
            :style="{
              background: item.background,
              color: item.color
            }"
          >
            <div
              class="rounded-full inline-block uppercase font-bold leading-[38px] px-5 mb-5"
              :style="{
                background: item.color,
                color: item.background
              }"
            >{{ item.tag }}</div>
            <prismic-text :field="item.title" wrapper="h3" class="text-[32px] md:text-[48px] lg:text-[55px] font-bold mb-48" />
            <span class="text-[20px] lg:text-[28px] flex gap-2 font-bold absolute bottom-5 right-5 items-center">
              Read
              <svg width="27" height="26" viewBox="0 0 27 26" fill="none"><path d="M25.5 13C25.5 19.6274 20.1274 25 13.5 25C6.87258 25 1.5 19.6274 1.5 13C1.5 6.37258 6.87258 1 13.5 1C20.1274 1 25.5 6.37259 25.5 13Z" stroke="currentColor" stroke-width="2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.0827 9.64176L9.35982 9.60053L9.37423 7.60059L18.4725 7.66614L18.538 16.7644L16.5381 16.7788L16.4969 11.056L9.50503 18.0478L8.09082 16.6336L15.0827 9.64176Z" fill="currentColor"></path></svg>
            </span>
            <prismic-image :field="item.image" class="absolute pointer-events-none bottom-[-50px] left-[-50px] transform origin-bottom-left transition ease-in-out group-hover:scale-110 z-[-10]" />
          </prismic-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeaturedLinks",
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
