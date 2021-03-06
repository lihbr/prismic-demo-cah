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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"question_answer","items":[{"question":[{"type":"heading3","text":"Embrace synergistic synergies","spans":[]}],"answer":[{"type":"paragraph","text":"Exercitation sunt ullamco proident adipisicing consequat reprehenderit amet cupidatat commodo dolore aliqua.","spans":[]}]},{"question":[{"type":"heading3","text":"Orchestrate leading-edge deliverables","spans":[]}],"answer":[{"type":"paragraph","text":"Culpa tempor nisi dolor est eiusmod veniam dolore ad laboris elit anim aute. Ea aute non exercitation qui aliquip deserunt occaecat magna. Ullamco minim aliqua quis in dolore ad occaecat quis duis consequat do.","spans":[]}]},{"question":[{"type":"heading3","text":"Reinvent revolutionary deliverables","spans":[]}],"answer":[{"type":"paragraph","text":"Cillum laborum enim ullamco officia culpa sunt qui mollit.","spans":[]}]}],"primary":{"title":[{"type":"heading2","text":"Benchmark clicks-and-mortar platforms","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
