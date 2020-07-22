import { useEffect, useRef } from 'react'

const useInterval = (callback, time) => {
  const callbackRef = useRef(null)

  useEffect(() => {
    callbackRef.current = callback
  })

  useEffect(() => {
    const interval = setInterval(() => callbackRef.current(), time)
    return () => clearInterval(interval)
  }, [])
}

export default useInterval