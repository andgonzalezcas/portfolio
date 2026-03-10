"use client"

import { createContext, useContext, useEffect, useState } from "react"

export const THEMES = {
    LIGHT: "light",
    DARK: "dark",
    SYSTEM: "system",
} as const

export type Theme = (typeof THEMES)[keyof typeof THEMES]

type ThemeProviderProps = {
    children: React.ReactNode
    defaultTheme?: Theme
    storageKey?: string
}

type ThemeProviderState = {
    theme: Theme
    setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
    theme: "system",
    setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export default function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "portfolio-theme",
    ...props
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>("system")
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem(storageKey) as Theme
        if (savedTheme) {
            setTheme(savedTheme)
        } else {
            setTheme(defaultTheme)
        }
        setMounted(true)
    }, [defaultTheme, storageKey])

    useEffect(() => {
        if (!mounted) return

        const root = window.document.documentElement

        root.classList.remove("light", "dark")

        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
                .matches
                ? "dark"
                : "light"

            root.classList.add(systemTheme)
            return
        }

        root.classList.add(theme)
    }, [theme, mounted])

    const value = {
        theme,
        setTheme: (newTheme: Theme) => {
            localStorage.setItem(storageKey, newTheme)
            setTheme(newTheme)
        },
    }

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext)

    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider")

    return context
}