import MyComponent from '../../../../slices/TextSlice';

export default {
  title: 'slices/TextSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Do nulla velit ex officia incididunt ut et aliquip.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _TwoColumn = () => <MyComponent slice={{"variation":"twoColumn","name":"TwoColumn","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Ad pariatur adipisicing ipsum nisi aliqua minim ea aute incididunt. Irure voluptate minim nisi.","spans":[]}]},"id":"_TwoColumn"}} />
_TwoColumn.storyName = 'TwoColumn'
