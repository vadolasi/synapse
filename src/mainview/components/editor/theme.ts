import type { EditorThemeClasses } from "lexical"

const theme: EditorThemeClasses = {
  paragraph: "mb-2 leading-7",
  heading: {
    h1: "scroll-m-20 text-3xl font-semibold tracking-tight",
    h2: "scroll-m-20 text-2xl font-semibold tracking-tight"
  },
  text: {
    bold: "font-bold",
    italic: "italic",
    code: "font-mono bg-muted rounded px-1"
  }
}

export default theme
