const { Provider } = ReactRedux;

ConnectThingsAppRoot = () => {
  return (
    <div className="connect-things-container">
      <Provider store={Store}>
        <ConnectThingsApp/>
      </Provider>
    </div>
  );
}

Meteor.startup(()=> {
  ReactDOM.render(
    <ConnectThingsAppRoot />,
    document.getElementById('app')
  );
});
