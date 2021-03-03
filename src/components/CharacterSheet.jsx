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
          cog: 0,
          coo: 0,
          int: 0,
          ref: 0,
          sav: 0,
          som: 0,
          wil: 0,
        },
        aptitudesMax: 0,
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
        aptitudesMax: 25,
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
        aptitudesMax: 30,
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
        aptitudesMax: 40,
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
      default: {
        label: 'Select One'
      },
      drifter: {
        label: 'Drifter',
        description: `You were raised with a social grouping that remained
        on the move throughout the Sol system. This could
        have been free traders, pirates, asteroid farmers,
        scavengers, or just migrant workers. You are used to
        roaming space travel between habitats and stations.`,
        skillMod: {
          navigation: {mod: 10},
          pilot: {mod: 10, subSkills: ['Spacecraft']},
          netorking: {
            mod: 10, 
            subSkills: [
              'Autonomists', 'Criminals', 'Ecologists', 'Firewall', 
              'Hypercorps', 'Media', 'Scientists'
            ]
          }          
        }
      },
      fallEvacuee: {
        label: 'Fall Evacuee',
        description: `You were born and raised on Earth and evacuated
        during the horrors of the Fall, leaving your old life
        (and possibly your friends, family, and loved ones)
        behind you. You were lucky enough to survive with
        your body intact and continue to make a life for yourself
        out in the system.`,
        skillMod: {
          pilot: {mod: 10, subSkills: ['Groundcraft']},
          netorking: {
            mod: 10, 
            subSkills: [
              'Autonomists', 'Criminals', 'Ecologists', 'Firewall', 
              'Hypercorps', 'Media', 'Scientists'
            ]
          }
        },
        moxieMod: 1,
        creditMod: 2500
      },
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
    },
    demolitions: {
      lable: 'Demolitions',
      aptitudeKey: 'cog'
    },
    disguise: {
      lable: 'Disguise',
      aptitudeKey: 'int'
    },
    exoticMelee: {
      lable: 'Exotic Melee',
      aptitudeKey: 'som',
      options: ['Morning-Star', 'Spear', 'Whip']
    },
    exoticRanged: {
      lable: 'Exotic Ranged',
      aptitudeKey: 'coo',
      options: ['Blowgun', 'Crossbow', 'Slingshot']
    },
    flight: {
      lable: 'Flight',
      aptitudeKey: 'som'
    },
    fray: {
      lable: 'Fray',
      aptitudeKey: 'ref'
    },
    freeFall: {
      lable: 'Free Fall',
      aptitudeKey: 'ref'
    },
    freeRunning: {
      lable: 'Freerunning',
      aptitudeKey: 'som'
    },
    gunnery: {
      lable: 'Gunnery',
      aptitudeKey: 'int'
    },
    hardware: {
      lable: 'Hardware',
      aptitudeKey: 'cog',
      options: [
        'Aerospace', 'Armorer', 'Electronics', 'Groundcraft', 
        'Implants', 'Industrial', 'Nautical', 'Robotics'
      ]
    },
    impersonatoin: {
      lable: 'Impersonation',
      aptitudeKey: 'sav'
    },
    infiltration: {
      lable: 'Infiltration',
      aptitudeKey: 'coo'
    },
    infoSec: {
      lable: 'Infosec',
      aptitudeKey: 'cog'
    },
    interface: {
      lable: 'Interfacing',
      aptitudeKey: 'cog'
    },
    intimidation: {
      lable: 'Intimidation',
      aptitudeKey: 'sav'
    },
    investigation: {
      lable: 'Investigation',
      aptitudeKey: 'int'
    },
    kinesice: {
      lable: 'Kinesics',
      aptitudeKey: 'sav'
    },
    kineticWeapons: {
      lable: 'Kinetic Weapons',
      aptitudeKey: 'coo'
    },
    medicine: {
      lable: 'Medicine',
      aptitudeKey: 'cog',
      options: [
        'Biosculpting', 'Exotic-Biomorphs', 'Gene-Therapy,', 'General-Practice', 
        'Implant-Surgery', 'Nanomedicine', 'Paramedic', 'Pods', 'Psychiatry', 'Remote-Surgery', 
        'Trauma-Surgery', 'Uplifts', 'Veterinary'
      ]
    },
    navigation: {
      lable: 'Navigation',
      aptitudeKey: 'int'
    },
    networking: {
      lable: 'Networking',
      aptitudeKey: 'sav',
      options: [
        'Autonomists', 'Criminals', 'Ecologists', 'Firewall', 
        'Hypercorps', 'Media', 'Scientists'
      ]
    },
    palming: {
      lable: 'Palming',
      aptitudeKey: 'coo'
    },
    perception: {
      lable: 'Perception',
      aptitudeKey: 'int'
    },
    persuasion: {
      lable: 'Persuasion',
      aptitudeKey: 'sav'
    },
    pilot: {
      lable: 'Pilot',
      aptitudeKey: 'ref',
      options: [
        'Aircraft', 'Anthroform', 'Exotic-Vehicle', 'Groundcraft-tracked',
        'Groundcraft-wheeled', 'Spacecraft', 'Watercraft'
      ]
    },
    programming: {
      lable: 'programming',
      aptitudeKey: 'cog'
    },
    protocol: {
      lable: 'protocol',
      aptitudeKey: 'sav'
    },
    psiAssault: {
      lable: 'Psi Assault',
      aptitudeKey: 'wil'
    },
    psychosurgery: {
      lable: 'Psychosurgery',
      aptitudeKey: 'int'
    },
    research: {
      lable: 'Research',
      aptitudeKey: 'cog'
    },
    scrounging: {
      lable: 'Scrounging',
      aptitudeKey: 'int'
    },
    seekerWeapons: {
      lable: 'Seeker Weapons',
      aptitudeKey: 'coo'
    },
    sence: {
      lable: 'Sence',
      aptitudeKey: 'int'
    },
    sprayWeapons: {
      lable: 'Spray Weapons',
      aptitudeKey: 'coo'
    },
    swimming: {
      lable: 'Swimming',
      aptitudeKey: 'som'
    },
    thrownWeapons: {
      lable: 'Thrown Weapons',
      aptitudeKey: 'coo'
    },
    unarmedConbat: {
      lable: 'Unarmed Combat',
      aptitudeKey: 'som'
    },
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
  moxie: 0,
  sleeve: 'default',
  backGround: 'default',
  faction: 'default',
  skills: {
    exoticMelee: { Spear: 4 }
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
  const fixed = props.dataStatic;
  const dynamic = props.dataDynmic;
  return(
    <section className='character-aptitudes'>
      {Object.keys(dynamic.aptitudes).map((key) => {
        const maxApt = fixed.sleeve.options[dynamic.sleeve].aptitudesMax
        const myData = dynamic.aptitudes[key];
        let alertStyle = {fontWeight: 'normal', color: 'black'};
        if(maxApt < myData.total){
          alertStyle = {fontWeight: 'bold', color: 'red'};
        }
          
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
            <p style={alertStyle}>{maxApt}</p>
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
        <p>Sleeve Max</p>
        <p>Total</p>
      </label>   
    </section>
  )
}

class Skills extends Component{
  constructor(props){
    super(props)
    this.SimpleSkill = this.SimpleSkill.bind(this)
    this.TemplateSkill = this.TemplateSkill.bind(this)
  }
  SimpleSkill(props){
    const skillKey = props.skillKey
    const fixedSkill = props.fixedSkill
    const dataDynmic = props.dataDynmic
    const dataStatic = props.dataStatic
    const rank = props.rank

    const aptMod = (()=>{
      const aptitude = dataDynmic.aptitudes[fixedSkill.aptitudeKey].total
      const morphMax = dataStatic.sleeve.options[dataDynmic.sleeve].aptitudesMax
      return (aptitude > morphMax) ? morphMax : aptitude
    })()
    const specialMod = 0 //this is a place holder for faction/background bonuses TBD
    const total = rank + aptMod + specialMod
  
    return (
      <label 
        className='skill_row'
        key={['skill', skillKey].join('_')}
      >
        <p className='skill_text' >
          {fixedSkill.lable}
        </p>
        <p className='skill_cell' >{fixedSkill.aptitudeKey.toUpperCase()}</p>
        <p className='skill_cell' >{total}</p>
        <input
          className='skill_input'
          type='number'
          min='0' max='60'
          value={rank}
          step='5'
          onChange={event => props.handleChange(event, skillKey)}
          key={['skill', skillKey, 'input'].join('_')}
        />
        <p className='skill_cell' >{aptMod}</p>
        <p className='skill_cell' >{specialMod}</p>
      </label>
    )      
  }
  TemplateSkill(props){
    const skillKey = props.skillKey
    const fixedSkill = props.fixedSkill
    const dataDynmic = props.dataDynmic
    const dataStatic = props.dataStatic
    const subSkills = fixedSkill.options.filter( _key => {
      let charSubSkills = dataDynmic.skills[skillKey]
      if(charSubSkills){
        charSubSkills = charSubSkills[_key]
        if(charSubSkills >= 0){
          return true
        }
      } else {
        return false
      }
    })

    return (
      <>
        <label
          className='skill_row'
          key={['skill', skillKey].join('_')}
        >
          <div className='skill_template-lable' >
            <p className='skill_text' >
              {fixedSkill.lable}: 
            </p>
            <select value='default' onChange={(event) => props.handleNewSubSkill( event, skillKey )}>
                <option value='default'>Select One</option>
              {fixedSkill.options.map( option => {
                return( 
                  <option value={option} key={['option', skillKey, option ].join('_')}>
                    {option}
                  </option>
                )
              })}
            </select>
          </div>
          <p className='skill_cell' >{fixedSkill.aptitudeKey.toUpperCase()}</p>
          <p className='skill_cell' />
          <p className='skill_cell' />
          <p className='skill_cell' />
          <p className='skill_cell' />
        </label>
        {subSkills.map( subSkillKey => {
          const thisSkill = {lable: `${fixedSkill.lable}: ${subSkillKey}`, aptitudeKey:fixedSkill.aptitudeKey}
          const rank = dataDynmic.skills[skillKey][subSkillKey]
          return(
            <this.SimpleSkill
              fixedSkill={thisSkill}
              rank={rank}
              skillKey={subSkillKey}
              dataStatic={dataStatic}
              dataDynmic={dataDynmic}
              handleChange={(event, subKey) => props.handleChange(event, skillKey, subKey)}
              key={['over-skill', skillKey, subSkillKey].join('_')}
            />
          )          
        })}
      </>
    )
  }
  render(){
    const skillList = this.props.dataStatic.skills
    const dataDynmic = this.props.dataDynmic
    return(
      <section className='skill_block' >
        <label 
          className='skill_row skill_header'          
          key={['over-skill', 'header'].join('_')}
        >
          <p className='skill_text' >Skill Name</p>
          <p className='skill_cell' >Aptitude</p>
          <p className='skill_cell' >Total</p>
          <p className='skill_cell' >Ranks</p>
          <p className='skill_cell' >Apt. Mod</p>
          <p className='skill_cell' >Special Bonuses</p>
        </label>
        {Object.keys(skillList).map( skillKey => {
          const fixedSkill = skillList[skillKey];

          //If Normal Skill then render a SimpleSkill
          if(!fixedSkill.options){
            const rank = (dataDynmic.skills[skillKey]) ? dataDynmic.skills[skillKey] : 0
            return(
              <this.SimpleSkill
                fixedSkill={fixedSkill}
                rank={rank}
                skillKey={skillKey}
                dataStatic={this.props.dataStatic}
                dataDynmic={dataDynmic}
                handleChange={this.props.handleChange}
                key={['over-skill', skillKey].join('_')}
              />
            )
          }//Otherwise its a TemplateSkill 
          else{
            return(
              <this.TemplateSkill 
                fixedSkill={fixedSkill}
                skillKey={skillKey}
                dataStatic={this.props.dataStatic}
                dataDynmic={dataDynmic}
                handleChange={this.props.handleChange}
                handleNewSubSkill={this.props.handleNewSubSkill}
                key={['over-skill', skillKey].join('_')}
              />
            )
          }
        })}
      </section>
    )
  }
}

class CharacterSheet extends Component {
  constructor(props){
    super(props);
    this.state = dynamicData;
    this.staticData = staticData;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNewSubSkill = this.handleNewSubSkill.bind(this);
  }

  handleNewSubSkill(event, skill){
    const subSkill = event.target.value
    const data = this.state
    if(data.skills[skill]){
      if(data.skills[skill][subSkill] >= 0){
        return
      }else{
        data.skills[skill][subSkill] = 0
      }
    }else{
      data.skills[skill] = {}
      data.skills[skill][subSkill] = 0
    }
    this.setState(data)
  }

  handleInputChange(event, ...keys){
    const isNum = parseInt(event.target.value, 10);
    // const isObj = JSON.parse(event.target.value);
    let value = event.target.value;
    if (isNum || isNum === 0) value = isNum;
    // else if (isObj) value = isObj;
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
          dataDynmic={this.state}
          dataStatic={this.staticData}
          handleChange={(event, keyOne, keyTwo ) => this.handleInputChange(event, 'aptitudes', keyOne, keyTwo)}
        />
        <br/>
        <Skills
          dataDynmic={this.state}
          dataStatic={this.staticData}
          handleChange={(event, skill, subSkill) => {
            this.handleInputChange(event, 'skills', skill, subSkill)
          }}
          handleNewSubSkill={this.handleNewSubSkill}
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