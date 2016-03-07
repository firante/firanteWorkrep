webix.ui({
  rows:[
    {
      view: "template",
      type: "header",
      template: "My App!"
    },
    {
      view: "datatable",
      autoConfig: true,
      data: {
        title: "My Fair Lady", year: 1964, votes: 533848, reating: 8.9, rang:5
      }
    }
  ]
});
