import { useMemo } from "react"
import { PaletteMode } from "@mui/material"
import { Theme as MuiTheme, ThemeProvider, createTheme } from "@mui/material/styles"

const defaultTheme = createTheme()

const toRecord = (value: unknown): Record<string, unknown> =>
  (typeof value === "object" && value !== null) ? (value as Record<string, unknown>) : {}

const toMode = (value: unknown): PaletteMode =>
  value === "dark" ? "dark" : "light"

const toColor = (value: unknown, fallback: string): string =>
  (typeof value === "string" && value.trim() !== "") ? value : fallback

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
