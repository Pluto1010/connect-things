const { connect } = ReactRedux;

Things = ({ dispatch }) => {
  let input;


  handleTap = (foo) => {
    console.log(foo);
  }

  handleSwipe = (foo) => {
    console.log(foo);
  }

  return (
    <div className="thing-container">
      <div className="bucket">
        <div className="centered">Bucket A</div>
      </div>
      <div className="fullwidth">
        <div className="skip">
        skip
        </div>
        <div className="word">
          <Hammer onTap={handleTap} onSwipe={handleSwipe}><div className="centered">Some word</div></Hammer>
        </div>
      </div>
      <div className="bucket">
        <div className="centered">Bucket B</div>
      </div>
    </div>
  );
};

Things = connect()(Things);


/*
<input ref={node => {
  input = node;
}}/>
<button onClick={() => {
  dispatch(addTodo(input.value));
  input.value = '';
}}>
  Add Todo
</button>
*/
