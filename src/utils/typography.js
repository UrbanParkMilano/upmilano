import Typography from 'typography'
// import funstonTheme from 'typography-theme-funston'

// const typography = new Typography(funstonTheme)
const typography = new Typography({
    baseFontSize: "12px",
    baseLineHeight: 1.666,
    headerFontFamily: [
      "Avenir Next",
      "Helvetica Neue",
      "Segoe UI",
      "Helvetica",
      "Arial",
      "sans-serif",
    ],
    bodyFontFamily: ["Georgia", "serif"],
  })

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography