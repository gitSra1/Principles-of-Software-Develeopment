 import React, {
  useState
} from 'react';
import Hatscol from './Hatscol';
import Gamedash from './Gamedash';
import Die from './Die';
import Navtitle from './Navtitle';
import './Game.css';
import naruto from './assets/naruto.gif';
import CumulativeFlowDiagram from './CumulativeFlowDiagram';
import Cookies from 'js-cookie';
import CreateTable from './CreateTable';
var rollCount = 0,
  dayCount = 1;
const dummyHatlist = ['Backlog', 'Refinement', 'Design', 'Development', 'Testing', 'Production'];
var dieValList=[]
var listOfList=[]

const Game = () => {
  var [dieValue, setDieValue] = useState(null);
  const [valList, setValList] = useState([50, 0, 0, 0, 0, 0]);
  const[customDays,setCustomDays]=useState(null);
  var [isButtonClicked, setIsButtonClicked] = useState(false);
  var [isshowButtonClicked,setIsShowButtonClicked]=useState(false);
  const [modifierValue, setModifierValue] = useState(null);
  const [limitRefinementValue, setLimitRefinementValue] = useState(null);
  const [limitOnWip, setLimitOnWipValue] = useState(null);
  var[isGraphButtonClicked,setIsGraphButtonClicked]=useState(false);
  var[isPrevScoresButtonClicked,setIsPrevScoresButtonClicked]=useState(false);

  const handleCSS = tempRollCount =>{
    const CSSDeletionElement=document.getElementById(dummyHatlist[tempRollCount])
    CSSDeletionElement.classList.remove('active');

    const CSSSelectionElement=document.getElementById(dummyHatlist[tempRollCount+1])
    CSSSelectionElement.className+=' active';

  }

  const fastForward =() =>{
    while(dayCount<=customDays){
    var dummyDiceValue=Math.floor(Math.random()*6)+1;
    handleDieRoll(dummyDiceValue)
  }

  }

  const handleDieRoll = value => {

      setDieValue(value);
      if (rollCount === 5) {
        console.log('sravan',dieValList)
        const CSSDeletionElement=document.getElementById(dummyHatlist[rollCount])
    CSSDeletionElement.classList.remove('active');
          rollCount = 0;
          dayCount += 1;
      }
      handleCSS(rollCount);
      if (dayCount <= customDays) {

          console.log("day",dayCount)
          if (rollCount <= 4) {
              console.log('before if condition', value);

              if (value > valList[rollCount]) {
                  value = valList[rollCount];
              }
              console.log('After if condition', value);

              if (rollCount === 0) {
                  
                  if (modifierValue === null) {
                          if(limitRefinementValue===null){
                            
                            if(limitOnWip!==null){
                              const sliced=valList.slice(1,4);
                              const totalWip= sliced.reduce((acc, curr) => acc + curr, 0);
                              if(totalWip+value>limitOnWip){
                                value=limitOnWip-totalWip
                            }
                            dieValList.push(value)
                            valList[rollCount]=valList[rollCount]-value;
                            valList[rollCount+1]=valList[rollCount+1]+value;
                              
                                

                            }
                            else{
                              console.log("modifier and refinement null")
                              dieValList.push(value)
                              valList[rollCount]=valList[rollCount]-value;
                              valList[rollCount+1]=valList[rollCount+1]+value;
                            }
                            }
                          else{
                              if(valList[1]+value>limitRefinementValue){
                                value=limitRefinementValue-valList[1]
                              }
                              dieValList.push(value)
                              valList[rollCount]=valList[rollCount]-value;
                              valList[rollCount+1]=valList[rollCount+1]+value;
                          }
                  }
                   else {
                    dieValList.push(value)
                      valList[rollCount] = valList[rollCount] - value - modifierValue;
                      valList[rollCount + 1] += value + modifierValue;
                  }
              }
              else{
                dieValList.push(value)
                valList[rollCount]=valList[rollCount]-value;
                valList[rollCount+1]=valList[rollCount+1]+value;
              }

              setValList([...valList]);
              console.log(valList)
              rollCount = rollCount + 1;
          } 
      } else {
        console.log(listOfList)
          alert('Game Over');
      }
  };

  const show =() =>{
    setIsShowButtonClicked(true);
  }
  

  const handleButtonClick = () => {
    try{
      var daysCustom=document.getElementById('days-val');
      const daysCustomValue=parseInt(daysCustom.value);
      if (isNaN(daysCustomValue)) {
        alert('Please enter an integer value');
    } else {
      daysCustom.className+=' hide';
        setCustomDays(daysCustomValue);
    }
    }
    catch(e){
      setCustomDays(10);
    }
      try {
          const newModifierValue = parseInt(document.getElementById('modifier').value);
          if (isNaN(newModifierValue)) {
              alert('Please enter an integer value');
          } else {
              setModifierValue(newModifierValue);
              setIsButtonClicked(true);
          }
      } catch (e) {
          try {
              const newLimitRefinement = parseInt(document.getElementById('limit-refinement').value)
              if (isNaN(newLimitRefinement)) {
                  alert('Please enter an integer value');
              } else {
                  setLimitRefinementValue(newLimitRefinement);
                  setIsButtonClicked(true);
              }
          } catch (e) {
              try {
                  const newlimitOnWip = parseInt(document.getElementById('limitonwip').value)
                  if (isNaN(newlimitOnWip)) {
                      alert('Please enter an integer value');
                  } else {
                      setLimitOnWipValue(newlimitOnWip);
                      setIsButtonClicked(true);
                  }
              } catch (e) {
                  setIsButtonClicked(true);
              }
          }
      }
  };

  const handleReset = () => {
    setDieValue(null);
    setValList([50, 0, 0, 0, 0, 0]);
    setIsButtonClicked(false);
    setIsShowButtonClicked(false);
    setModifierValue(null);
    setLimitRefinementValue(null);
    setLimitOnWipValue(null);
    setIsGraphButtonClicked(false);
    setIsPrevScoresButtonClicked(false);
    rollCount = 0;
    dayCount = 1;
    listOfList = [];
    const CSSDeletionElement = document.querySelector('.active');
    if (CSSDeletionElement) {
      CSSDeletionElement.classList.remove('active');
    }
  };


  const handlePrevScoresButtonClick =() =>{
    const currentVal = Cookies.get('myCookie') || '';
  const firstFourVals = valList.slice(1, 5).reduce((acc, cur) => acc + cur, 0);
  const newVal = currentVal ? `${currentVal}-${firstFourVals} ${valList[5]}` : `${firstFourVals} ${valList[5]}`;
  Cookies.set('myCookie', newVal, { expires: 365 });
    setIsPrevScoresButtonClicked(true);

  }

  const handleGraphButtonClick =() =>{
  const arr = dieValList;
  const sets = [];
  const setSize = 5;
  for (let i = 0; i < arr.length; i += setSize) {
    const set = arr.slice(i, i + setSize);
  if (sets.length > 0) {
    const prevSet = sets[sets.length - 1];
    const updatedSet = set.map((num, j) => num + prevSet[j]);
    sets.push(updatedSet);
  } else {
    sets.push(set);
  }
}
listOfList=sets
console.log(listOfList);

    setIsGraphButtonClicked(true);
  }

  

  return ( <div className = "gamediv" >
    <Navtitle />
      {!(isButtonClicked) && < Gamedash />}
      <input className='custom-days' id='days-val' type='text' placeholder='Enter days'></input>
      <button id = 'play-button'
      onClick = {
          handleButtonClick
      } > Play </button> 

      <span id='day'>Day:- {dayCount}</span>
      <Hatscol valList = {[...valList]}/> 
      {isButtonClicked && < Die onRoll = {handleDieRoll}/>}
   

      {isButtonClicked && <button id = 'play-button' onClick = {fastForward}> Fast Forward </button>}
      {dieValue && <p> The value of the die is: {dieValue} </p>} 
      {isButtonClicked && <button id = 'play-button' onClick = {show}> Show Score</button>}
      {isButtonClicked && <button id='reset' onClick={handleReset}>Reset</button>}
      {isButtonClicked && <button id='reset' onClick={handleGraphButtonClick}>Graph</button>}
      {isButtonClicked && <button id='reset' onClick={handlePrevScoresButtonClick}>Previous Scores</button>}
      {isshowButtonClicked && <div className='scoreclass'>
        <img id='narutogif' src={naruto} alt='naruto'></img>
        <span id='score'>Score is {valList[5]-(valList[4]+valList[3]+valList[2]+valList[1])} </span>
      </div>}
      {isPrevScoresButtonClicked && <CreateTable />}    
      {isGraphButtonClicked && (<CumulativeFlowDiagram
  data={listOfList} labsPass={customDays}
/>)}

      </div >
  );
};

export default Game;

 