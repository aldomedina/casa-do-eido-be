const contracts = {
  name: "contracts",
  title: "Contracts",
  type: "document",
  fields: [
    {
      name: "id",
      title: "id",
      type: "string",
      description: 'Só aceitam-se: "termos", "dados", "faq"',
    },

    {
      name: "content",
      title: "Content",
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
      title: "id",
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
export default contracts;
