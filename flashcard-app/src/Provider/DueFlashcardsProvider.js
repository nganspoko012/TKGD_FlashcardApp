import { createContext, useState, useContext} from 'react';
import flashcards from '../Data/flashcards.json';

const DueFlashcardsContext = createContext();

const setDueDay = () => {
    let date = new Date();
    return date.addDays(2);
}

export function DueFlashcardProvider({children}){
    const [dueFlashcards, setDueFlashcards] = useState(flashcards);
    //flashcards.filter(flashcard => new Date(flashcard.dueDate) >= new Date())
    const learnFlashcard = (id) => {
                setDueFlashcards(dueFlashcards.map(flashcard => 
                    flashcard.id === id ? {...flashcard, lastedLearnDate:  Date.now(), dueDate: setDueDay()} : flashcard)
            )};
        return (
            <DueFlashcardsContext.Provider value={{dueFlashcards, learnFlashcard}}>
                {children}
            </DueFlashcardsContext.Provider>
        )
}

export const useDueFlashcards = () => useContext(DueFlashcardsContext);