const { connect } = ReactRedux;

Things = ({ dispatch }) => {
  let input;


  handleTap = (foo) => {
    console.log(foo);
  }

  handlePan = (foo) => {
    var clientY = foo.pointers[0].clientY;
    var body = document.body, html = document.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight );

    half_height = height/2;
    var amount = 0;

    if (clientY > half_height) {
      amount = clientY - half_height;
    }
    else if(clientY < half_height) {
      amount = (half_height - clientY) * -1;
    }

    pull_percentage = 100 / half_height * amount;

    if(pull_percentage < 0) {
      $('.thing-container .bucket-a').css('background-color', '#888888');
      $('.thing-container .bucket-b').css('background-color', '#333333');
    }
    else if(pull_percentage > 0) {
      $('.thing-container .bucket-b').css('background-color', '#888888');
      $('.thing-container .bucket-a').css('background-color', '#333333');
    }
    else {
      $('.thing-container .bucket-b').css('background-color', '#333333');
      $('.thing-container .bucket-a').css('background-color', '#333333');
    }
  }

  var options = {
    touchAction:true
  };

  return (
    <div className="thing-container">
      <div className="skip centered">
        <div className="centered left">&#x25C4;</div>
        <div className="centered right">&#x25B6;</div>
      </div>
      <div className="bucket bucket-a">
        <div className="centered">Bucket A</div>
      </div>
      <div className="fullwidth">
        <Hammer onTap={handleTap} onPan={handlePan} vertical={true}>
        <div className="word">
          <div className="centered">Some word</div>
        </div>
        </Hammer>
      </div>
      <div className="bucket bucket-b">
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
