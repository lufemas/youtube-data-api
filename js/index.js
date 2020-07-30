// 'use strict'

function Header(){

  return(
    <div className="jr card text-center">
      <h1>You Tube Data Api</h1>

    </div>
  )
}

function App(){

  return(
    <div>
    <Header />
    <AddContent />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));


function AddContent(){

  return(
    <div className="jr mh-auto flex-col center mt-3">
        <label htmlFor="content-id">Content ID</label>
      <div>
        <input type="text" id="content-id" name="content-id"/>
        <input type="button" value="Add"/>
      </div>
    </div>
  );
}
