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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"featured_links","items":[{"link":{"link_type":"Web","url":"https://slicemachine.dev"},"tag":"deploy dynamic e-markets","title":[{"type":"heading3","text":"Exploit customized channels","spans":[]}],"image":{"dimensions":{"width":300,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=500&fit=crop"},"background":"#e21288","color":"#00db37"},{"link":{"link_type":"Web","url":"https://slicemachine.dev"},"tag":"mesh magnetic communities","title":[{"type":"heading3","text":"Maximize user-centric vortals","spans":[]}],"image":{"dimensions":{"width":300,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=300&h=500&fit=crop"},"background":"#5d8eea","color":"#0c12bd"},{"link":{"link_type":"Web","url":"http://google.com"},"tag":"drive transparent metrics","title":[{"type":"heading3","text":"Transition magnetic convergence","spans":[]}],"image":{"dimensions":{"width":300,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6?w=300&h=500&fit=crop"},"background":"#bd86de","color":"#3a683b"},{"link":{"link_type":"Web","url":"https://slicemachine.dev"},"tag":"aggregate vertical mindshare","title":[{"type":"heading3","text":"Implement B2C niches","spans":[]}],"image":{"dimensions":{"width":300,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=500&fit=crop"},"background":"#d0e94c","color":"#0f445a"},{"link":{"link_type":"Web","url":"https://slicemachine.dev"},"tag":"implement end-to-end schemas","title":[{"type":"heading3","text":"Incubate value-added experiences","spans":[]}],"image":{"dimensions":{"width":300,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560762484-813fc97650a0?w=300&h=500&fit=crop"},"background":"#873e1f","color":"#dc9dc8"}],"primary":{"title":[{"type":"heading2","text":"Matrix cutting-edge networks","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
