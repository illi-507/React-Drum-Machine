import React from 'react';
// eslint-disable-next-line
import './App.css';


const keys = ['Q','W','E','A','S','D','Z','X','C'];
const sounds=[
   {
     key:'Q',
     mp3:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
   },
   {
    key:'W',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    key:'E',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    key:'A',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    key:'S',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    key:'D',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    key:'Z',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    key:'X',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    key:'C',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];


class App extends React.Component {

  render(){
    return (
    <div className ="app">
      <h1> Drum Machine</h1>
      <div id = "display" className="display">

      {sounds.map((sound,idx)=>(
        <Box text={sound.key} key={idx} audio={sound.mp3}/>
      ))}
    
    </div>
      </div>
    )
  }
}

class Box extends React.Component{
    constructor(props){
      super(props);
      this.audio = React.createRef();
    } 

   playSound = ()=>{

     this.audio.current.play();
   }
   render() {

     const{text,audio} = this.props;

       return (
        <div className="box" onClick ={this.playSound}>
        {text}
        <audio ref = {this.audio} src={audio} className="clip" id={text}/>
       </div>
       );
   }
  
  }



      
  document.addEventListener('keydown',(e)=>{
    const id = e.key.toUpperCase();
    const audio = document.getElementById(id);
    
     
    if(audio){
      const parent = audio.parentNode;
      parent.classList.add('active');
      audio.play();

      audio.addEventListener('ended',()=>{
        parent.classList.remove('active');
      })
    }
  })  
  
export default App;


