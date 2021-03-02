import React,{Component} from 'react';
//this data block will be dirved from the rule book and can not be altered by players
const staticData = {
  playerName: {        
    label: 'Player Name',
    id: 'plynam01',
    type: 'text',
    value: ''
  },
  characterName: {        
    label: 'Character Name',
    id: 'charnam02',
    type: 'text',
    value: ''
  },
  subjectiveAge: {        
    label: 'Subjective Age',
    id: 'fisihghari65644f34s6',
    type: 'text',
    value: ''
  },
  objectiveAge: {        
    label: 'Objective Age',
    id: '45g45g3sadfg5f15s3',
    type: 'text',
    value: ''
  },
  sleeve: {        
    label: 'Sleeve',
    type: 'dropDown',
    options: {
      default: {
        label: 'Select One',
        aptitudesMods: {
          cog: -1,
          coo: -1,
          int: -1,
          ref: -1,
          sav: -1,
          som: -1,
          wil: -1,
        },
        cost: 0
      }, 
      normal: {
        label: 'Normal',
        aptitudesMods: {
          cog: 0,
          coo: 0,
          int: 0,
          ref: 0,
          sav: 0,
          som: 0,
          wil: 0,
        },
        cost: 0
      }, 
      gradeThree: {
        label: 'Grade 3',
        aptitudesMods: {
          cog: 3,
          coo: 0,
          int: 0,
          ref: 0,
          sav: 0,
          som: 3,
          wil: 0,
        },
        cost: 10
      }, 
      gradeFour: {
        label: 'Grade 4',
        aptitudesMods: {
          cog: 5,
          coo: 0,
          int: 0,
          ref: 0,
          sav: 0,
          som: 5,
          wil: 0,
        },
        cost: 20
      }, 
    }
  },
  backGround: {        
    label: 'Background',
    type: 'dropDown',
    options: {
      default: {label: 'Select One'}, 
      streetKid: {label: 'Street Kid'}, 
      corpo: {label: 'Corpo'}, 
      nomad: {label: 'Nomad'}
    }
  },
  faction: {        
    label: 'Faction',
    type: 'dropDown',
    options: {
      default: {label: 'Select One'}, 
      red: {label: 'Red Team'}, 
      blue: {label: 'Blue Team'}, 
      green: {label: 'Green Team'}
    }
  },
}

//this data black will be defined by the static date but the values will be set by user, saved to the DB, and then loard back.
const dynamicData = {
  playerName: '',
  characterName: '',
  subjectiveAge: '',
  objectiveAge: '',
  aptitudes: {
    cog: {name: 'Cognition', abbreviation: 'COG', value: 5, morphBonus: 0, total: 5},
    coo: {name: 'Coordination', abbreviation: 'COO', value: 5, morphBonus: 0, total: 5},
    int: {name: 'Intuition', abbreviation: 'INT', value: 5, morphBonus: 0, total: 5},
    ref: {name: 'Reflexes', abbreviation: 'REF', value: 5, morphBonus: 0, total: 5},
    sav: {name: 'Savvy', abbreviation: 'SAV', value: 5, morphBonus: 0, total: 5},
    som: {name: 'Somatics', abbreviation: 'SOM', value: 5, morphBonus: 0, total: 5},
    wil: {name: 'Willpower', abbreviation: 'WIL', value: 5, morphBonus: 0, total: 5}    
  },
  sleeve: 'default',
  backGround: 'default',
  faction: 'default'
}

function keyGen() {
  const num = Math.floor((Math.random() * 10000) + (Math.random() * 1000));
  return num.toString();
}

//RPData Sub-Components
function SimpleField (props) {
  const autoFocus = (props.autoFocus) ? true : false;
  const autoComplete = (props.autoComplete) ? 'on' : 'off';
  return(
    <label>
      <p>{props.label}</p>
      <input 
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
      ></input>
    </label>
  )
}

function SimpleDropDown (props){
  return(
    <label>
      <p>{props.label}</p>
      <select onChange={props.onChange} value={props.value}>
        {Object.keys(props.options).map(key => {
          const item = props.options[key];
          return <option value={key} key={keyGen()}>{item.label}</option>
        })}
      </select>
    </label>
  )
}

function Aptitudes (props) {
  return(
    <section className='character-aptitudes'>
      {Object.keys(props.data).map((key) => {

        //pull respective data point for this element
        const myData = props.data[key];

        //return sub-component
        return (
          <label 
            className='single-aptitude' 
            key={['aptitudes', key].join('_')} 
          >
            <p className='tooltip'>
              {myData.abbreviation}
              <span className='tooltiptext'>{myData.name}</span>
            </p>
            <input
              className='aptitudes-input'
              type='number' 
              min='5' max='25' 
              value={myData.value}
              step='1'
              onChange={event => props.handleChange(event, key, 'value')}
            />
            <p>{myData.morphBonus}</p>
            <p>{myData.total}</p>
          </label>            
        )

      } ) }
    </section>
  )
}

class CharacterSheet extends Component {
  constructor(props){
    super(props);
    this.state = dynamicData;
    this.staticData = staticData;

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event, ...keys){
    const isNum = parseInt(event.target.value, 10)
    const value = isNum ? isNum : event.target.value ;
    let newState = this.state;

    for(let i = 0, state = newState; i < keys.length; i++){
      if(!keys[(i + 1)]) {
        state[keys[i]] = value;
      }else{
        state = state[keys[i]];
      }
    }

    this.setState(newState);
  }

  render(){
    const formMap = this.staticData;
    return(
      <>
        {Object.keys(formMap).map( key => {
          const item = formMap[key];
          if (item.type === 'text') {
            return (
              <SimpleField
                type={item.type}
                label={item.label}
                value={this.state[key]}
                onChange={event => this.handleInputChange(event, key)}
                key={[item.type, key].join('_')}
              />
            )
          } else if (item.type === 'dropDown') {
            return (
              <SimpleDropDown
                label={item.label}
                options={item.options}
                value={this.state[key]}
                onChange={event => this.handleInputChange(event, key)}                
                key={[item.type, key].join('_')}
              />
            )
          } else {
            return <p>Failed to render element</p>
          }
        })}
        <Aptitudes 
          data={this.state.aptitudes}
          handleChange={(event, keyOne, keyTwo ) => this.handleInputChange(event, 'aptitudes', keyOne, keyTwo)}
        />
        <button onClick={()=>{
          console.log(this.state);
        }}>Report</button>
      </>
    )
  }
}

export default CharacterSheet;