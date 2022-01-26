import MyComponent from '../../../../slices/FeaturedLinks';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/FeaturedLinks'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"featured_links","items":[{"link":{"link_type":"Web","url":"https://prismic.io"},"tag":"deploy visionary supply-chains","title":[{"type":"heading3","text":"Enhance distributed e-markets","spans":[]}],"image":{"dimensions":{"width":200,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=200&h=500&fit=crop"},"background":"#60827f","color":"#b1312f"},{"link":{"link_type":"Web","url":"http://twitter.com"},"tag":"maximize vertical methodologies","title":[{"type":"heading3","text":"Grow integrated vortals","spans":[]}],"image":{"dimensions":{"width":200,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=200&h=500&fit=crop"},"background":"#14c18c","color":"#a85293"}],"primary":{"title":[{"type":"heading2","text":"Seize wireless relationships","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
