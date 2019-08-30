import React, { useCallback, SyntheticEvent } from "react"
import useToggle from "../hooks/use-toggle"
import { Status } from "../types"
import Switch, { ReactSwitchProps } from "react-switch"
import { noop } from "../utils/utilities"

interface Props {
  onOn?: () => void
  onOff?: () => void
  onChange?: () => void
}

export default function Switcher({
  onOn = noop,
  onOff = noop,
  onChange = noop,
}: Props) {
  const { status, toggle } = useToggle("OFF", onOn, onOff, onChange)

  return <Switch {...switchProps} onChange={toggle} checked={status === "ON"} />
}
