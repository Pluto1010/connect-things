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
  var metaInfo = {name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui"};
  DocHead.addMeta(metaInfo);
  DocHead.addMeta({
    name: "apple-mobile-web-app-status-bar-style",
    content: "black-translucent"
  });

  document.ontouchmove = function(event){
    event.preventDefault();
  };

  ReactDOM.render(
    <ConnectThingsAppRoot />,
    document.getElementById('app')
  );
});
