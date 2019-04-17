function randomMood(){
  const moods= ['Angry','Happy','Sad', 'Disgusting','Fear'];

  return moods[Math.floor(Math.random() * moods.length)];
}

class Mood extends React.Component {
  render(){
    return(
      <div>
      <h1> Today I am feeling very: {randomMood()} </h1>
      </div>
    )
  }
}


ReactDOM.render(<Mood />, document.getElementById('root'));
