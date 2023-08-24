import "../../css/EntrySubcomponentsStyles/Definition.css"

interface DefinitionProps {
  partOfSpeech: string;
  definitions: Array<DefinitionObj>;
  synonyms: Array<string>;
}

interface DefinitionObj {
  definition: string;
}

function Definition(props: DefinitionProps) {
  const { partOfSpeech, definitions, synonyms } = props;

  return (
    <section className="definition">
        <div>
            <h3>{partOfSpeech}</h3>
        </div>
        <h4>Meaning</h4>
        <ul className="definitions-list">
            {
              definitions.map((el) => {
                return(<li>{el.definition}</li>)
              })
            }
        </ul>
        <div>
            {
              synonyms.length > 0 ?
              <>
                <h4>Synonyms</h4>
                <ul>
                {
                  synonyms.map((el) => {
                    return(<li>{el}</li>)
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
