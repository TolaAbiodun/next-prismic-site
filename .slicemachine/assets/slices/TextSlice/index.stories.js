import MyComponent from '../../../../slices/TextSlice';

export default {
  title: 'slices/TextSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Consequat nulla ullamco ea mollit culpa duis exercitation. Minim excepteur enim incididunt.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _TwoColumn = () => <MyComponent slice={{"variation":"twoColumn","name":"TwoColumn","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Ea ipsum pariatur amet et mollit ut consequat tempor enim pariatur labore nulla id est. Aliquip laborum sunt ea enim aliqua nulla laborum. Mollit qui enim nisi consequat anim est ad quis.","spans":[]}]},"id":"_TwoColumn"}} />
_TwoColumn.storyName = 'TwoColumn'
