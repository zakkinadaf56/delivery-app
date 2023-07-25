import {defineCliConfig} from 'sanity/cli'
import imageUrlBuilder from '@sanity/image-url'

export default defineCliConfig({
  api: {
    projectId: 'nt46vhxv',
    dataset: 'production',
    useCdn: true
  }
})

const builder=imageUrlBuilder(client);
export const urlFor=(source)=>builder.image(source);


