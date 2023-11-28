import { useCallback, useState } from 'react'

function useToggle (initialToggle = true) {
  const [toggle, setToggle] = useState(initialToggle)

  const changeToggle = useCallback(() => setToggle(!toggle), [toggle])

  return [toggle, changeToggle]
}

export { useToggle }
