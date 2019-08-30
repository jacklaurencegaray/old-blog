import { useEffect, useState } from "react"
import { Status } from "../types"
import { noop } from "../utils/utilities"

export default function useToggle(
  toggleStatus: Status,
  onOn: () => void = noop,
  onOff: () => void = noop,
  onChange: () => void = noop
) {
  const [status, setStatus] = useState(toggleStatus)

  const toggle = () =>
    setStatus(prevStatus => (prevStatus === "ON" ? "OFF" : "ON"))
  const turnOn = () => setStatus("ON")
  const turnOff = () => setStatus("OFF")

  useEffect(() => {
    status === "ON" && onOn()
    status === "OFF" && onOff()
    onChange()
  }, [status])

  return { status, toggle, turnOn, turnOff }
}
