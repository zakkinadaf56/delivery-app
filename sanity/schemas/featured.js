import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'featured',
    type: 'document',
    title: 'Featured new Category',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Category name',
      validation:(Rule)=>Rule.required(),

    }),
    
    defineField({
        name: 'short_description',
        type: 'string',
        title: 'Short description',
        validation:(Rule)=>Rule.max(200),
      }),

      defineField({
        name: 'restuarant',
        type: 'array',
        title: 'Restaurants',
        of:[{type:"reference",to: [{type:"restaurant"}] }],
      }),
  ],
})
