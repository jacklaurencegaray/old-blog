import { createContext } from "react"

export type ThemeColor = "light" | "dark"

export interface UserSettings {
  theme: {
    mode: ThemeColor
  }
}

const defaultTheme: ThemeColor = "light"

export const initialValue = {
  theme: {
    mode: defaultTheme,
  },
}

const UserSettingsContext = createContext<UserSettings>(initialValue)

export default UserSettingsContext
