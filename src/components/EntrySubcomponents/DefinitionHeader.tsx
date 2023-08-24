import React from "react";
import playButton from "../../assets/images/icon-play.svg"
import "../../css/EntrySubcomponentsStyles/DefinitionHeader.css"

interface DefinitionHeaderProps {
  word: string;
  phonetics: Array<Phonetic>
}

interface Phonetic {
  audio : string;
  text: string;
}

function DefinitionHeader(props: DefinitionHeaderProps) {
  const { word, phonetics } = props;

  const firstPhonetic = phonetics[0];
  const audioRef = React.createRef<HTMLAudioElement>();

  const handlePlay = () => {
    if(audioRef.current) {
      audioRef.current.play();
    }
  }

  return (
    <div className="definition-header">
        <div>
            <h1>{word}</h1>
            <h2>{firstPhonetic.text}</h2>
        </div>
        {
          (firstPhonetic.audio !== '')?
          <button onClick={handlePlay}>
              <img src={playButton} alt="play" />
              <audio ref={audioRef}>
                <source src={firstPhonetic.audio} type="audio/mpeg"/>
              </audio>
          </button>
          :
          <></>
        }
    </div>
  )
}

export default DefinitionHeader
