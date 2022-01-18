import MyComponent from '../../../../slices/QuoteSlice';

export default {
  title: 'slices/QuoteSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"paragraph","text":"Minim officia incididunt officia elit incididunt culpa mollit labore tempor ea cupidatat eu. Do veniam excepteur deserunt veniam sit cupidatat. Aliquip excepteur est sunt.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _QuoteReference = () => <MyComponent slice={{"variation":"quoteReference","name":"QuoteReference","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"paragraph","text":"Velit irure qui ut proident ad tempor.","spans":[]}],"reference":[{"type":"paragraph","text":"Labore esse sunt ipsum proident laboris qui officia id tempor cupidatat dolore voluptate ad eiusmod. Sunt aliquip ut esse adipisicing adipisicing.","spans":[]}]},"id":"_QuoteReference"}} />
_QuoteReference.storyName = 'QuoteReference'
