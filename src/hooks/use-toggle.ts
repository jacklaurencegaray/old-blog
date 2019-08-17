import { useEffect, useState } from "react"
import { Status } from "../types"

export default function useToggle(
  toggleStatus: Status,
  onOn: () => void,
  onOff: () => void
) {
  const [status, setStatus] = useState(toggleStatus)

  const toggle = () =>
    setStatus(prevStatus => (prevStatus === "ON" ? "OFF" : "ON"))
  const turnOn = () => setStatus("ON")
  const turnOff = () => setStatus("OFF")

  useEffect(() => {
    status === "ON" && onOn()
    status === "OFF" && onOff()
  }, [status])

  return [status, toggle, turnOn, turnOff]
}
