import MyComponent from '../../../../slices/HeroSlice';

export default {
  title: 'slices/HeroSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"hero_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Expedite B2B schemas","spans":[]}],"description":[{"type":"paragraph","text":"Exercitation veniam fugiat magna duis officia reprehenderit ex consectetur commodo amet nostrud dolor cillum. Ea minim exercitation ex velit id ea.","spans":[]}],"link":{"link_type":"Web","url":"https://prismic.io"},"linkLabel":"synergize magnetic e-tailers","background":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _BannerSlice = () => <MyComponent slice={{"variation":"bannerSlice","name":"BannerSlice","slice_type":"hero_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Engage turn-key networks","spans":[]}],"description":[{"type":"paragraph","text":"Lorem laboris aute elit dolore est eiusmod deserunt elit cupidatat ad veniam consequat tempor sint et.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"},"linkLabel":"extend open-source e-commerce","background":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=900&h=500&fit=crop"}},"id":"_BannerSlice"}} />
_BannerSlice.storyName = 'BannerSlice'
