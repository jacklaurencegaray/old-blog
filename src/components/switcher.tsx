import React, { useCallback } from "react"
import useToggle from "../hooks/use-toggle"
import { Status } from "../types"

interface Props {
  onOn: () => void
  onOff: () => void
}

export default function Switcher({ onOn = () => {}, onOff = () => {} }: Props) {
  const [status, toggle] = useToggle("OFF", onOn, onOff)
  const onSwitch = () => {}

  return status === "ON" ? (
    <p onClick={onSwitch}>OFF</p>
  ) : (
    <p onClick={onSwitch}>ON</p>
  )
}
