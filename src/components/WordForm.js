function WordForm(props) {

  // render
  const renderInputs = () => {
    let ele = props.words.map((elem,ind)=>{
 
      return <li key={ind}>
      <input type="text" placeholder={elem.label} onChange={event=>props.updateMadLibWord(ind,event.target.value)} ></input>
      </li> 

    })

    return <ul>{ele}</ul>// implement changes
  }
  
  return (
    <div id="div-words">
      { renderInputs() }
    </div>
  )
}

export default WordForm
