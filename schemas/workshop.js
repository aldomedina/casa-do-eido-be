export const activity = {
  name: "dia",
  title: "dia",
  description: "",
  type: "object",
  fields: [
    {
      name: "activity_date",
      title: "Data da atividade",
      description: '"Sexta - 23 de Outubro" ou "dia X"',
      type: "string",
    },
    {
      name: "activities",
      title: "atividades",
      type: "array",

      of: [
        {
          name: "activity_row",
          title: "activity",
          type: "object",
          fields: [
            {
              name: "activity",
              title: "actividade",
              description: "nome da atividade",
              type: "string",
            },
            {
              name: "start_time",
              title: "hora de inicio",
              description: "e.g. 10:25",
              type: "string",
            },
            {
              name: "end_time",
              title: "hora de termino",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};

const workshop = {
  name: "workshop",
  title: "Workshops",
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
      name: "subtitle",
      title: "Subtítulo",
      type: "object",
      description: "e.g. Nome do profesor",
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
      description: "A parte do URL que identifica um workshop especifico",
      options: {
        source: doc => doc.title.pt,
        maxLength: 96,
      },
    },
    {
      name: "mainImage",
      title: "Imagem principal",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "start_date",
      title: "Data de inicio",
      type: "richDate",
      options: {
        inputTime: false,
      },
    },
    {
      name: "end_date",
      title: "Data de termino",
      type: "richDate",
      options: {
        inputTime: false,
      },
    },
    {
      name: "price",
      title: "Preço",
      description: "só colocar número: 20.50",
      type: "number",
      validation: Rule => Rule.required().min(0),
    },
    {
      name: "duration",
      title: "Duração",
      type: "number",
      description: "Duration in days",
    },
    {
      name: "url",
      title: "URL da Reserva",
      type: "string",
    },
    {
      name: "programa",
      title: "Programa",
      type: "object",
      fields: [
        {
          name: "dia_1",
          title: "Dia 1",
          type: "dia",
        },
        {
          name: "dia_2",
          title: "Dia 2",
          type: "dia",
        },
        {
          name: "dia_3",
          title: "Dia 3",
          type: "dia",
        },
        {
          name: "dia_4",
          title: "Dia 4",
          type: "dia",
        },
        {
          name: "dia_5",
          title: "Dia 5",
          type: "dia",
        },
        {
          name: "dia_6",
          title: "Dia 6",
          type: "dia",
        },
        {
          name: "dia_7",
          title: "Dia 7",
          type: "dia",
        },
      ],
    },
    {
      name: "intro",
      title: "introduction",
      type: "object",
      fields: [
        {
          name: "en",
          title: "English",
          type: "text",
          validation: Rule => Rule.required().max(800),
        },
        {
          name: "pt",
          title: "Portugues",
          type: "text",
          validation: Rule => Rule.required().max(800),
        },
      ],
    },
    {
      name: "other_info",
      title: "Other informations",
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
export default workshop;
