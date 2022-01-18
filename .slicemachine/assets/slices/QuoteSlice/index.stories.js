import MyComponent from '../../../../slices/QuoteSlice';

export default {
  title: 'slices/QuoteSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"paragraph","text":"Officia eiusmod nulla labore ex elit. Do exercitation nostrud consectetur nostrud. Nisi cupidatat anim nisi et id ea.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _QuoteReference = () => <MyComponent slice={{"variation":"quoteReference","name":"QuoteReference","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"paragraph","text":"Ea quis eu duis. Pariatur fugiat duis commodo dolor incididunt Lorem.","spans":[]}],"reference":[{"type":"paragraph","text":"Qui ad commodo pariatur ipsum velit voluptate labore esse dolor est ea deserunt nostrud nulla ut.","spans":[]}]},"id":"_QuoteReference"}} />
_QuoteReference.storyName = 'QuoteReference'
