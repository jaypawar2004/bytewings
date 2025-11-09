// studio/schemas/project.js

export default {
  // Ye naam unique hona chahiye
  name: 'project', 
  title: 'Project',
  type: 'document',
  
  // Ye fields admin panel mein dikhengi
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(), // Title zaroori hai
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title', // 'title' field se slug automatically generate karega
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true, // Image ko crop/focus karne mein help karega
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text', // 'text' (long) 'string' (short) se behtar hai
      validation: (Rule) => Rule.required(),
    },
    // Aap baad mein aur fields (jaise 'projectUrl') add kar sakte hain
  ],
}