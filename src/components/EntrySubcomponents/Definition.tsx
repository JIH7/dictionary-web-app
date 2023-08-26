import "../../css/EntrySubcomponentsStyles/Definition.css"

interface DefinitionProps {
  partOfSpeech: string;
  definitions: Array<DefinitionObj>;
  synonyms: Array<string>;
  searchSynonym: Function;
}

interface DefinitionObj {
  definition: string;
}

function Definition(props: DefinitionProps) {
  const { partOfSpeech, definitions, synonyms, searchSynonym } = props;

  return (
    <section className="definition">
        <div className="part-of-speech-holder">
            <h3>{partOfSpeech}</h3>
            <div className="divider"></div>
        </div>
        <h4>Meaning</h4>
        <ul className="definitions-list">
            {
              definitions.map((el) => {
                return(<li>{el.definition}</li>)
              })
            }
        </ul>
        <div className="synonym-container">
            {
              synonyms.length > 0 ?
              <>
                <h4>Synonyms</h4>
                <ul>
                {
                  synonyms.map((el, i) => {
                    return(<li onClick={() => searchSynonym(el)}>{el}{i < synonyms.length - 1 ? "," : ""}</li>)
                  })
                }
                </ul>
              </>
              :
              <></>
            }
        </div>
    </section>
  )
}

export default Definition
