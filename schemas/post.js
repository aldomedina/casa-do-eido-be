export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título para gerar URL",
      type: "string",
    },
    {
      name: "post_title",
      title: "Título",
      type: "object",
      fields: [
        {
          name: "en",
          title: "English",
          type: "string",
          validation: Rule => Rule.required().max(70),
        },
        {
          name: "pt",
          title: "Portugues",
          type: "string",
          validation: Rule => Rule.required().max(70),
        },
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    // {
    //   name: "workshop",
    //   title: "Workshop",
    //   type: "reference",
    //   to: { type: "workshop" },
    // },
    {
      name: "mainImage",
      title: "Imagem principal",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "body",
      title: "Conteúdo",
      type: "object",
      fields: [
        {
          name: "en",
          title: "English",
          type: "blockContent",
        },
        {
          name: "pt",
          title: "Portugues",
          type: "blockContent",
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
