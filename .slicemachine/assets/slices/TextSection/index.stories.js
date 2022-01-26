import MyComponent from '../../../../slices/TextSection';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TextSection'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_section","items":[],"primary":{"text":[{"type":"paragraph","text":"Quis officia laboris fugiat.","spans":[]},{"type":"paragraph","text":"Id velit ad nisi sint cupidatat mollit in elit ipsum pariatur proident deserunt laborum adipisicing. Deserunt ipsum officia nulla fugiat deserunt dolor enim.","spans":[]}],"background":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/tmp-test-cah/3c2c8174-bc81-46a1-98cf-4c1cbedb6b38_background.png?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _WithCta = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"withCta","name":"WithCTA","slice_type":"text_section","items":[{"link":{"link_type":"Web","url":"http://twitter.com"},"label":"incubate rich action-items"},{"link":{"link_type":"Web","url":"https://prismic.io"},"label":"whiteboard user-centric models"},{"link":{"link_type":"Web","url":"https://prismic.io"},"label":"embrace open-source channels"}],"primary":{"text":[{"type":"heading2","text":"Productize world-class mindshare","spans":[]},{"type":"paragraph","text":"Adipisicing commodo veniam quis tempor do excepteur adipisicing cillum fugiat non. Amet incididunt elit ipsum non nulla excepteur non aute non sint ex. Ea aliquip laboris sit nisi exercitation.","spans":[]}]},"id":"_WithCta"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_WithCta.storyName = 'WithCTA'
