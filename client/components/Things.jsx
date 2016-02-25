const { connect } = ReactRedux;

Things = ({ dispatch }) => {
  let input;

  return (
    <div className="thing-container">
      <div className="bucket">
        <div className="centered">Bucket A</div>
      </div>
      <div className="fullwidth">
        <div className="word">
          <div className="centered">Some word</div>
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
