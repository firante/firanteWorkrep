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

  getInitialState: function () {
    return {
      items : ListStore.getAll()
    };
  },

  componentDidMount: function() {
    ListStore.bind('change', this.listChanged);
  },

  listChanged: function () {
    this.setState({
      items: ListStore.getAll()
    });
  },

  componentWillUnmount: function () {
    ListStore.unbind('change', this.listChanged);
  },

  createNewItem: function (evt) {
    AppDispatcher.dispatch({
      eventName: 'new-item',
      newItem: {name : 'Macro'}
    });
  },

  render: function () {

    var itemHTML = this.state.items.map(function (listItem) {
      return (
        <li key={listItem.id} >
          {listItem.name}
        </li>
      );
    });

    return (
      <div>
        <ul>
          { itemHTML }
        </ul>

        <button onClick = { this.createNewItem }> New Item </button>
      </div>
    );
  }
});


  ReactDOM.render( <AppComponent />, document.getElementById('central'));
