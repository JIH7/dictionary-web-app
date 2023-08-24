import Definition from "./EntrySubcomponents/Definition"
import DefinitionHeader from "./EntrySubcomponents/DefinitionHeader"

interface EntryProps {
  entryObj: EntryObj;
}

interface EntryObj {
  word: string;
  phonetics: Array<Phonetic>;
  meanings: Array<Meaning>;
  partOfSpeech: string;
  synonyms: Array<string>;
}

interface Meaning {
  partOfSpeech: string;
  definitions: Array<DefinitionObj>;
  synonyms: Array<string>;
}

interface DefinitionObj {
  definition: string;
}

interface Phonetic {
  audio : string;
  text: string;
}



function Entry(props: EntryProps) {
  const { entryObj } = props;

  return (
    <>
        <DefinitionHeader word={entryObj.word} phonetics={entryObj.phonetics} />
        {
          entryObj.meanings.map((el) => {
            return(<Definition partOfSpeech={el.partOfSpeech} definitions={el.definitions} synonyms={el.synonyms} />)
          })
        }
    </>
  )
}

export default Entry
