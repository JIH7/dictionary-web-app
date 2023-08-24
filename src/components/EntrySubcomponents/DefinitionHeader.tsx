import playButton from "../../assets/images/icon-play.svg"

function DefinitionHeader() {
  return (
    <div className="definition-header">
        <div>
            <h1>Keyboard</h1>
            <h2>/'ki:bɔ:d/</h2>
        </div>
        <button>
            <img src={playButton} alt="" />
        </button>
    </div>
  )
}

export default DefinitionHeader
