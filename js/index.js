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

  function handleAdd(){
    const rx = /\=(.+)\?*/
    // const rx = /a/
    const ytUrl = document.getElementById("content-url").value
    const ytID = rx.exec(ytUrl)

    console.log(ytUrl)
    console.log(rx)

    console.log(ytID)

    execute(ytID)
  }

  return(
    <div className="jr mh-auto flex-col center mt-3">
        <label htmlFor="content-url">Content URL</label>
      <div>
        <input type="text" id="content-url" name="content-url" value="https://www.youtube.com/watch?v=J01X-7NzozQ"/>
        <input type="button" value="Add" onClick={handleAdd}/>
      </div>
    </div>
  );
}
