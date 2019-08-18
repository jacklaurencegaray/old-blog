import { createContext } from "react"

export type Theme = "light" | "dark"

export interface UserSettings {
  theme: Theme
}

const defaultTheme: Theme = "light"

export const initialValue = {
  theme: defaultTheme,
}

const UserSettingsContext = createContext<UserSettings>(initialValue)

export default UserSettingsContext
