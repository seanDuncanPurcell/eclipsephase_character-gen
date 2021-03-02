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
        skillMods: {
          animalHandling: 0,
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
        skillMods: {
          climbing: +10
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
        skillMods: {
          animalHandling: +10,
          disguise: +5
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
        skillMods: {
          blades: +10,
          climbing: +5,
          control: +5
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
  skills: {
    animalHandling: {
      lable: 'Animal Handling',
      aptitudeKey: 'sav'
    },
    beamWeapons: {
      lable: 'Beam Weapons',
      aptitudeKey: 'coo'
    },
    blades: {
      lable: 'Blades',
      aptitudeKey: 'som'
    },
    climbing: {
      lable: 'Climbing',
      aptitudeKey: 'som'
    },
    clubs: {
      lable: 'Clubs',
      aptitudeKey: 'som'
    },
    constrol: {
      lable: 'Control',
      aptitudeKey: 'wil'
    },
    deception: {
      lable: 'Deception',
      aptitudeKey: 'sav'
    }
  }
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
  faction: 'default',
  skills: {
    animalHandling: 0,
    beamWeapons: 0,
    blades:  0,
    climbing: 0,
    clubs: 0,
    constrol: 0,
    deception: 0
  }
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
      <label 
        className='single-aptitude'
      >
        <p>Aptitudes</p>
        <p>Base Score</p>
        <p>Sleeve Mod</p>
        <p>Total</p>
      </label>   
    </section>
  )
}

function Skill (props){
  const fixed = props.dataStatic;
  const dynamic = props.dataDynmic;
  return (
    <section className='skill_block'>
      <label className='skill_row skill_header'>
        <p className='skill_text' >Skill Name</p>
        <p className='skill_text' >Aptitude</p>
        <p className='skill_num' >Total</p>
        <p className='skill_num' >Ranks</p>
        <p className='skill_num' >Apt. Mod</p>
        <p className='skill_num' >Sleeve Mod</p>
      </label>
      {Object.keys(fixed.skills).map( skill =>{
        const item = fixed.skills[skill];
        const itemRank = dynamic.skills[skill];
        const aptitudeBonus = dynamic.aptitudes[item.aptitudeKey].total;
        const morphMod = fixed.sleeve.options[dynamic.sleeve].skillMods[skill];
        const morphBonus =  morphMod ? morphMod : 0 ;
        const itemTotal = itemRank + aptitudeBonus + morphBonus;
        return(
          <label 
            className='skill_row'
            key={['skill', skill].join('_')}
          >
            <p className='skill_text' >{item.lable}</p>
            <p className='skill_text' >{item.aptitudeKey.toUpperCase()}</p>
            <p className='skill_num' >{itemTotal}</p>
            <input
              className='skill_input'
              type='number' 
              min='0' max='60' 
              value={itemRank}
              step='5'
              onChange={event => props.handleChange(event, skill)}
              key={['skill', skill, 'input'].join('_')}
            />
            <p className='skill_num' >{aptitudeBonus}</p>
            <p className='skill_num' >{morphBonus}</p>
          </label>
        )
      })}      
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

  componentDidUpdate () {
    //Calc Total for Apts
    const apts = this.state.aptitudes
    Object.keys(apts).forEach( key => {
      const apt = apts[key];
      let morphBonus = apt.morphBonus;
      const sleeveBounse = this.staticData.sleeve.options[this.state.sleeve].aptitudesMods[key];
      const state = this.state;
      let change = false;
      
      //check for new sleeve bounses
      if(morphBonus !== sleeveBounse){
        state.aptitudes[key].morphBonus = sleeveBounse;        
        morphBonus = sleeveBounse;
        change = true;
      }
      
      const baseApt = apt.value;
      const total = apt.total;
      const newTotal = baseApt + morphBonus;

      //check for new apts totals;
      if(total !== newTotal){
        state.aptitudes[key].total = newTotal;
        change = true;
      }

      if(change) this.setState(state);

    })
  }

  render(){
    const {} = this.staticData;
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
          } else if (!item.type) {
            return <></>
          } else {
            return <p>Failed to render element</p>
          }
        })}
        <br/>
        <Aptitudes 
          data={this.state.aptitudes}
          handleChange={(event, keyOne, keyTwo ) => this.handleInputChange(event, 'aptitudes', keyOne, keyTwo)}
        />
        <br/>
        <Skill
          dataDynmic={this.state}
          dataStatic={this.staticData}
          handleChange={(event, skill) => this.handleInputChange(event, 'skills', skill)}
        />
        <br/>
        <button onClick={()=>{
          console.log(this.state);
        }}>Report</button>
        <br/>
      </>
    )
  }
}

export default CharacterSheet;