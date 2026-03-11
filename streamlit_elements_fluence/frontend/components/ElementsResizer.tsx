import ResizeObserver from "resize-observer-polyfill"
import { Streamlit } from "streamlit-component-lib"

let debounceTimer: ReturnType<typeof setTimeout> | null = null

const resizeObserver = new ResizeObserver((entries: any) => {
  // Use scrollHeight of the observed element for the most accurate measurement,
  // as contentRect.height can miss overflowing children (e.g. MUI popups/tooltips).
  const element = entries[0].target as HTMLElement
  const height = Math.max(
    entries[0].contentRect.height,
    element.scrollHeight
  )

  // Debounce to ensure dynamically-loaded MUI components have finished rendering
  // before we commit the final frame height. This prevents the iframe from being
  // sized before content is fully laid out, which causes click offset issues.
  if (debounceTimer !== null) {
    clearTimeout(debounceTimer)
  }

  // Set height immediately for responsiveness
  Streamlit.setFrameHeight(height)

  // Then re-check shortly after in case dynamic components changed the layout
  debounceTimer = setTimeout(() => {
    const finalHeight = Math.max(
      element.getBoundingClientRect().height,
      element.scrollHeight
    )
    Streamlit.setFrameHeight(finalHeight)
  }, 100)
})

const observeElement = (element: HTMLDivElement | null) => {
  if (element !== null)
    resizeObserver.observe(element)
  else {
    resizeObserver.disconnect()
    if (debounceTimer !== null) {
      clearTimeout(debounceTimer)
      debounceTimer = null
    }
  }
}

const ElementsResizer = ({ children }: ElementsResizerProps) =>
  <div ref={observeElement}>
    {children}
  </div>

export default ElementsResizer
