import { useState } from 'react';

const useSwitch = (init) => {
  const [ value, setValue] = useState(init);

  return [ value, setValue ];
}

export default useSwitch;