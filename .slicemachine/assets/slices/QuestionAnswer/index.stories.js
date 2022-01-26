import MyComponent from '../../../../slices/QuestionAnswer';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/QuestionAnswer'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"question_answer","items":[{"question":[{"type":"heading3","text":"Integrate seamless relationships","spans":[]}],"answer":[{"type":"paragraph","text":"Lorem pariatur Lorem incididunt esse quis id eu est reprehenderit amet nulla. Tempor exercitation ullamco cillum eu ullamco ipsum dolor fugiat voluptate duis consectetur sit. Id anim nostrud sint pariatur laborum culpa quis sunt tempor.","spans":[]}]},{"question":[{"type":"heading3","text":"Empower sticky synergies","spans":[]}],"answer":[{"type":"paragraph","text":"Excepteur est exercitation elit reprehenderit. Velit elit officia do do excepteur ullamco pariatur minim minim aliqua dolore consectetur labore qui nulla. Laboris id esse commodo dolor amet proident exercitation magna aliquip.","spans":[]}]},{"question":[{"type":"heading3","text":"Matrix bricks-and-clicks communities","spans":[]}],"answer":[{"type":"paragraph","text":"Eu minim incididunt enim exercitation non aute id cillum ut non occaecat eu. Ipsum aliqua consequat ipsum veniam nostrud veniam pariatur adipisicing aliqua velit ut do.","spans":[]}]},{"question":[{"type":"heading3","text":"Transform bleeding-edge e-commerce","spans":[]}],"answer":[{"type":"paragraph","text":"Sint commodo minim fugiat aute aliquip reprehenderit aute ipsum fugiat quis aute in. Tempor occaecat nisi nulla excepteur officia adipisicing laborum amet consequat.","spans":[]}]},{"question":[{"type":"heading3","text":"Recontextualize end-to-end synergies","spans":[]}],"answer":[{"type":"paragraph","text":"Est ipsum aliquip ea duis fugiat esse laborum consequat consectetur minim eu fugiat duis in.","spans":[]}]}],"primary":{"title":[{"type":"heading2","text":"Leverage proactive experiences","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
