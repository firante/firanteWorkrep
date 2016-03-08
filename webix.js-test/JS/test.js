webix.ui({
  width: 700,
  rows: [
    {// row 1
      view: "toolbar", elements: [
        { view:"button", value: "Add", width: 100, click: "add_row" },
        { view:"button", value: "Update", width: 100, click: "update_row" },
        { view:"button", value: "Delete", width: 100, click: "delete_row" },
        { view:"button", value: "Clear Form", width: 100 }
      ]},

    { cols: [ // row 2
      { //Col 1
        view: "form", id:"myform", elements: [
          {view: "text", name: "title", placeholder: "Title"},
          {view: "text", name: "year", placeholder: "Year"}
        ]
      },
      { //Col 2
        view: "list",
        template: "#title# - #year#",
        select: true,
        height: 400,
        id: "mylist", 
        data: [
          {id: 1, title: "The Shawshank Redemption", year: 1994},
          {id: 2, title: "The Godfather", year: 1972},
          {id: 3, title: "The Godfather: Part II", year: 1974},
          {id: 4, title: "The Good, the Bad and the Ugly", year: 1966},
          {id: 5, title: "My Fair Lady", year: 1964},
          {id: 6, title: "12 Angry Men", year: 1957}
        ]
      }
    ]}
  ]
});

$$("mylist").attachEvent("onAfterSelect", function (id) {
  $$("myform").setValues({
    title: $$("mylist").getItem(id).title,
    year: $$("mylist").getItem(id).year
  });
});

var update_row = function () {
  var sel = $$("mylist").getSelectedId();
  if(!sel) return;

  var value1 = $$("myform").getValues().title;
  var value2 = $$("myform").getValues().year;

  var item = $$("mylist").getItem(sel);
  item.title = value1;
  item.year = value2;
  $$("mylist").updateItem(sel, true);
};

var delete_row = function () {
  var id = $$("mylist").getSelectedId();
  webix.confirm({
    title: "Delete",
    text: "Are you sure you want to delete the selected item?",
    callback: function (result) {
      if (result) {
        $$("mylist").remove(id);
      }
    }
  });
};

var add_row = function () {
  $$("mylist").add ({
    title: $$("myform").getValues().title,
    year: $$("myform").getValues().year,
  })
};
