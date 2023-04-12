import { useContext } from 'react';

import { LevelContext } from './levelContext';


export default function Section({ level, children }) {
    return (
        <section>
            <LevelContext.Provider value={level}>
                {children}
            </LevelContext.Provider>
        </section>
    )
}