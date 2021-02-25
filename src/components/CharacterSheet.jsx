import React,{Component} from 'react';

const rpdata = {
  playerName: {        
    lable: 'Player Name',
    id: 'plynam01',
    type: 'text',
    value: ''
  },
  characterName: {        
    lable: 'Character Name',
    id: 'charnam02',
    type: 'text',
    value: ''
  },
  subjectiveAge: {        
    lable: 'Subjective Age',
    id: 'fisihghari65644f34s6',
    type: 'text',
    value: ''
  },
  objjectiveAge: {        
    lable: 'Objective Age',
    id: '45g45g3sadfg5f15s3',
    type: 'text',
    value: ''
  },
  sleeve: {        
    lable: 'Sleeve',
    type: 'dropDown',
    list: [{name: 'Grade 1', id: 'sleeve001'}, {name: 'Grade 2', id: 'sleeve002'}, {name: 'Grade 3', id: 'sleeve004'}],
    value: ''
  },
  backGround: {        
    lable: 'Background',
    type: 'dropDown',
    list: [{name: 'Street Kid', id: 'bg001'}, {name: 'Corpo', id: 'bg002'}, {name: 'Nomad', id: 'bg003'}],
    value: ''
  },
  faction: {        
    lable: 'Faction',
    type: 'dropDown',
    list: [{name: 'Red', id: 'faction001'}, {name: 'Blue', id: 'faction002'}, {name: 'Green', id: 'faction003'}],
    value: ''
  },
}

const characterAptitudes = {
  cog: {name: 'Cognition', abbreviation: 'COG', value: 5, morphBonus: 0, total: 0},
  coo: {name: 'Coordination', abbreviation: 'COO', value: 5, morphBonus: 0, total: 0},
  int: {name: 'Intuition', abbreviation: 'INT', value: 5, morphBonus: 0, total: 0},
  ref: {name: 'Reflexes', abbreviation: 'REF', value: 5, morphBonus: 0, total: 0},
  sav: {name: 'Savvy', abbreviation: 'SAV', value: 5, morphBonus: 0, total: 0},
  som: {name: 'Somatics', abbreviation: 'SOM', value: 5, morphBonus: 0, total: 0},
  wil: {name: 'Willpower', abbreviation: 'WIL', value: 5, morphBonus: 0, total: 0}
}

function keyGen() {
  const num = Math.floor((Math.random() * 10000) + (Math.random() * 1000));
  return num.toString();
}

//RPData Sub-Components
class DropDown extends Component{
  constructor (props){
    super(props)
    this.state = {value: this.props.value}
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    const newValue = event.target.value
    this.setState({value: newValue})
    this.props.liftState(newValue);
  }
  
  render(){
    return(
      <label key={keyGen()} >
        <p key={keyGen()} >{this.props.children}</p>
        <select onChange={this.handleInputChange} key={keyGen()} value={this.state.value}>
          {this.props.list.map(item => {
            return <option value={item.name} key={keyGen()}>{item.name}</option>
          })}
        </select>
      </label>
    )
  }
}

class SimpleField extends Component{
  constructor (props){
    super(props)
    this.state = {value: this.props.value};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    const newValue = event.target.value;
    this.setState({value: newValue});
    this.props.liftState(newValue);
  }
  
  render(){
    return(
      <label>
        <p>{this.props.children}</p>
        <input 
          type={this.props.type}
          autoComplete='off'
          onChange={this.handleInputChange}   
          value={this.state.value}
        ></input>
      </label>
    )
  }
}

class RPData extends Component{
  constructor(props){
    super(props);
    this.handleLiftState = this.handleLiftState.bind(this);
  }

  handleLiftState(value, key){
    const newData = this.props.data
    newData[key].value = value;
    this.props.liftState(newData);
  }

  render(){
    const myData = this.props.data;
    return(
      <section className='RPData' key={keyGen()}>
        {Object.keys(myData).map(key => {
          if (myData[key].type === 'text')
            return (
              <SimpleField
                type='text'
                value={myData[key].value}
                liftState={(value)=>this.handleLiftState(value, key)}
                key={keyGen()}
              >{myData[key].lable}</SimpleField>
            )
          else if (myData[key].type === 'dropDown')
            return (
              <DropDown 
                list={myData[key].list}
                liftState={(value)=>this.handleLiftState(value, key)}
                key={keyGen()}
                value={myData[key].value}
              >{myData[key].lable}</DropDown>
            )
          else 
            return <p>render fail</p>
        })}
      </section>
    )
  }
}

//Aptitudes
class Aptitudes extends Component{
  constructor(props){
    super(props)
    this.state = this.props.data;
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event, key){
    const value = event.target.value;
    const newData = this.state
    newData[key].value = parseInt(value, 10);
    this.setState(newData);
    this.props.liftState(newData);
  }

  render(){
    return(
      <section className='character-aptitudes'>
        {Object.keys(this.state).map((key) => {
          return (
            <label className='single-aptitude' key={key}>
              <p className='tooltip'>
                {this.state[key].abbreviation}
                <span className='tooltiptext' key={keyGen()}>{this.state[key].name}</span>
              </p>
              <input
                className='aptitudes-input'
                type='number' 
                min='5' max='25' 
                value={this.state[key].value}
                step='1'
                onChange={ event => this.handleInputChange(event, key)}
              />
              <p>{this.state[key].morphBonus}</p>
              <p>{this.state[key].total}</p>
            </label>            
          )
        } ) }
      </section>
    )
  }
}

//Skills, Active

//Skills, Knowledge

//Morphs

//Main Component
class CharacterSheet extends Component {
  constructor(props){
    super(props)
    this.characterSheetData = {rpData: rpdata, charApts: characterAptitudes}
    this.handleLiftData = this.handleLiftData.bind(this);
  }

  handleLiftData(data, key) {
    this.characterSheetData[key] = data;
  }

  render(){
    return(
      <>
        <RPData liftState={data=>this.handleLiftData(data, 'rpData')} data={this.characterSheetData.rpData}/>
        <Aptitudes liftState={data=>this.handleLiftData(data, 'charApts')} data={this.characterSheetData.charApts}/>
        <button onClick={()=>{console.log(this.characterSheetData)}}>Report</button>
      </>
    )
  }
}

export default CharacterSheet;