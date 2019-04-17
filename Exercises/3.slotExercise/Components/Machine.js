class Machine extends React.Component{
  render(){
    const {s1, s2, s3} = this.props;
    const match = (s1 === s2) && (s2 === s3)
    return(
      <div className="Machine">
      <p style={{fontSize: '50px'}}>{s1}{s2}{s3}</p>
      <h1 className={match ? 'win' : 'lose'}>{match ? "Matched! :)" : "Not Matched"}  </h1>
      </div>
    )
  }
}
