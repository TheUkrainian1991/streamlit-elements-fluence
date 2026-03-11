import { useMemo } from "react"
import { PaletteMode } from "@mui/material"
import { Theme as MuiTheme, ThemeProvider, createTheme } from "@mui/material/styles"

const defaultTheme = createTheme()

const toRecord = (value: unknown): Record<string, unknown> =>
  (typeof value === "object" && value !== null) ? (value as Record<string, unknown>) : {}

const toMode = (value: unknown): PaletteMode =>
  value === "dark" ? "dark" : "light"

const clampRgbChannel = (value: number): number =>
  Math.min(255, Math.max(0, value))

const normalizeRgb = (value: string): string | null => {
  const rgbMatch = value.match(/^rgb\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*\)$/i)
  if (rgbMatch === null) {
    return null
  }

  const r = clampRgbChannel(Number(rgbMatch[1]))
  const g = clampRgbChannel(Number(rgbMatch[2]))
  const b = clampRgbChannel(Number(rgbMatch[3]))
  return `rgb(${r}, ${g}, ${b})`
}

const isValidCssColor = (value: string): boolean =>
  typeof CSS !== "undefined" && typeof CSS.supports === "function" && CSS.supports("color", value)

const toColor = (value: unknown, fallback: string): string => {
  if (typeof value !== "string" || value.trim() === "") {
    return fallback
  }

  const input = value.trim()
  if (isValidCssColor(input)) {
    return input
  }

  const normalizedRgb = normalizeRgb(input)
  if (normalizedRgb !== null && isValidCssColor(normalizedRgb)) {
    return normalizedRgb
  }

  return fallback
}

const toFont = (value: unknown, fallback: string): string =>
  (typeof value === "string" && value.trim() !== "") ? value : fallback

const buildElementsTheme = (theme: ElementsThemeProps["theme"]): MuiTheme => {
  if (theme === undefined) {
    return defaultTheme
  }

  const palette = defaultTheme.palette
  const typography = defaultTheme.typography
  const root = toRecord(theme as unknown)
  const mode = toMode(root.base)
  const modeSection = toRecord(root[mode])
  const primaryColor = toColor(modeSection.primaryColor ?? root.primaryColor, palette.primary.main)
  const backgroundDefault = toColor(modeSection.backgroundColor ?? root.backgroundColor, palette.background.default)
  const backgroundPaper = toColor(modeSection.secondaryBackgroundColor ?? root.secondaryBackgroundColor, palette.background.paper)
  const textPrimary = toColor(modeSection.textColor ?? root.textColor, palette.text.primary)
  const defaultFontFamily = typeof typography.fontFamily === "string" ? typography.fontFamily : "Roboto, sans-serif"
  const fontFamily = toFont(modeSection.font ?? root.font, defaultFontFamily)

  try {
    return createTheme({
      palette: {
        mode,
        primary: {
          main: primaryColor,
        },
        secondary: {
          main: primaryColor,
        },
        background: {
          default: backgroundDefault,
          paper: backgroundPaper,
        },
        text: {
          primary: textPrimary,
        },
      },
      typography: {
        fontFamily,
      },
    })
  } catch {
    return defaultTheme
  }
}

const ElementsTheme = ({ children, theme }: ElementsThemeProps) => {
  const elementsTheme = useMemo(() => buildElementsTheme(theme), [theme])

  return (
    <ThemeProvider theme={elementsTheme}>
      {children}
    </ThemeProvider>
  )
}

export default ElementsTheme
