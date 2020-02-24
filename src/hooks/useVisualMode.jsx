import { useState } from 'react';

export default function useVisualMode(initial) {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setMode(newMode);

    replace ? history.pop() && setHistory(prev => ([...prev, newMode])) :
    setHistory(prev => ([...prev, newMode]))  
    
    console.log({ mode, history });
  }

  function back() {
    if (history.length > 1) {
      history.pop();
      console.log({ mode, history });
      setMode(history[history.length - 1]);
    }
  }

  return { mode, transition, back };

}