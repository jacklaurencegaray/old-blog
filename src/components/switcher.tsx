import React, { useCallback, SyntheticEvent } from "react"
import useToggle from "../hooks/use-toggle"
import { Status } from "../types"

interface Props {
  onOn: () => void
  onOff: () => void
}

export default function Switcher({ onOn = () => {}, onOff = () => {} }: Props) {
  const [status, toggle] = useToggle("OFF", onOn, onOff)

  return status === "ON" ? (
    <p onClick={toggle}>OFF</p>
  ) : (
    <p onClick={toggle}>ON</p>
  )
}
