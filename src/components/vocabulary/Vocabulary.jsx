import React from 'react';
import { VocabularyDrill, VocabularyForm} from '..';
import { useState } from 'react';

import Counter from '../Counter/Counter';



const Vocabulary = () => {
  const [vocabularyDrillActive, SetVocabularyDrillActive] = useState(false);


  return (  
    <div>
      { vocabularyDrillActive ?
        <VocabularyDrill
          vocabularyDrillActive = {vocabularyDrillActive}
          SetVocabularyDrillActive = {SetVocabularyDrillActive} /> : 
            <VocabularyForm />        
          
      }
    </div>
  )
}

export default Vocabulary