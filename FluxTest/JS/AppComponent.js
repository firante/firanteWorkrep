var Dispatcher = require('./Dispatcher');

var AppDispatcher = new Dispatcher();

var ListStore = {
  items: [],

  getAll: function () {
    return this.items;
  }
};

MicroEvent.mixin(ListStore);

AppDispatcher.register(function (payload) {
  switch (payload.eventName) {
    case 'new-item':
      ListStore.items.push(payload.newItem);
      ListStore.trigger('change');
      break;

    default:
      break;
  }

  return true;
});

var AppComponent = React.createClass({
  displayName: 'AppComponent',


  componentDidMount: function () {
    ListStore.bind('change', this.listChanged);
  },

  listChanged: function () {
    this.forceUpdate();
  },

  componentWillUnmount: function () {
    ListStore.unbind('change', this.listChanged);
  },

  createNewItem: function (evt) {
    AppDispatcher.dispatch({
      eventName: 'new-item',
      newItem: { name: 'Macro' }
    });
  },

  render: function () {
    var items = ListStore.getAll();

    var itemHTML = items.map(function (listItem) {
      return React.createElement(
        'li',
        { key: listItem.id },
        listItem.name
      );
    });

    return React.createElement(
      'div',
      null,
      React.createElement(
        'ul',
        null,
        itemHtml
      ),
      React.createElement(
        'button',
        { onClick: this.createNewItem },
        ' New Item '
      )
    );
  }
});

ReactDOM.render(React.createElement(AppComponent, null), document.getElementById('central'));