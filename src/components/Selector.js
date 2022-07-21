function Selector(props) {


  // render
  const renderChoices = () => {
    let ele = props.data.map((elem,ind)=>{
      return <option key={ind} value={ind}>{elem.title}</option>
    })
    return ele // implement changes
  }

  return (
    <div id="div-selector">
      <span>Select Story: </span>
      <select onChange={event=>props.setSelectedMadLib(props.data[event.target.value])}>
        { renderChoices() }
      </select>
    </div>
  )
}

export default Selector