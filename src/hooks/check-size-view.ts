import { useEffect, useState } from "react";

export const useCheckSizeView = (widthMax: string) => {
    const [matches, setMatches] = useState(false);
  
    useEffect(() => {
      window.matchMedia(widthMax).addEventListener('change', e => setMatches( e.matches ));
      setMatches(window.matchMedia(widthMax).matches);
  
      return (window.matchMedia(widthMax).removeEventListener('change', e => setMatches( e.matches )))
    }, [widthMax]);
  
    return matches
  }