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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_section","items":[],"primary":{"text":[{"type":"paragraph","text":"Sit dolor Lorem amet velit.","spans":[]}],"background":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
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
      mock: {"variation":"withCta","name":"WithCTA","slice_type":"text_section","items":[{"link":{"link_type":"Web","url":"http://google.com"},"label":"syndicate value-added initiatives"},{"link":{"link_type":"Web","url":"http://google.com"},"label":"harness innovative supply-chains"},{"link":{"link_type":"Web","url":"https://prismic.io"},"label":"embrace transparent e-commerce"}],"primary":{"text":[{"type":"paragraph","text":"Do incididunt eu mollit est anim aute nostrud sunt voluptate reprehenderit qui.","spans":[]}]},"id":"_WithCta"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_WithCta.storyName = 'WithCTA'
