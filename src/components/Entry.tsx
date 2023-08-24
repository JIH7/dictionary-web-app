import Definition from "./EntrySubcomponents/Definition"
import DefinitionHeader from "./EntrySubcomponents/DefinitionHeader"

interface EntryProps {
  entryObj: EntryObj;
}

interface EntryObj {
  word: string;
  definitions: Array<object>;
  phonetics: Array<Phonetic>;
  partOfSpeech: string;
  meanings: Array<object>;
  synonyms: Array<string>;
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
        <Definition />
        <Definition />
    </>
  )
}

export default Entry
