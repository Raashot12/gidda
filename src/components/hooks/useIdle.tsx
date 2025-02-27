import {useEffect, useState, useRef, useCallback} from "react"

type UseIdleOptions = {
  initialState?: boolean
  events?: string[]
}

export function useIdle(idleTime: number, options?: UseIdleOptions): boolean {
  const {
    initialState = false,
    events = ["mousemove", "mousedown", "keydown", "touchstart", "scroll"],
  } = options || {}
  const [isIdle, setIsIdle] = useState(initialState)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    if (isIdle) {
      setIsIdle(false)
    }
    timerRef.current = setTimeout(() => {
      setIsIdle(true)
    }, idleTime)
  }, [idleTime, isIdle])

  useEffect(() => {
    // Attach event listeners to detect user activity.
    const handleActivity = () => resetTimer()
    events.forEach(event => window.addEventListener(event, handleActivity))

    resetTimer()

    return () => {
      events.forEach(event => window.removeEventListener(event, handleActivity))
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [idleTime, resetTimer, events])

  return isIdle
}
