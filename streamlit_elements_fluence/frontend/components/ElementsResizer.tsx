import { Streamlit } from "streamlit-component-lib"

// Measure wrapper div height only. NOT body/html which can be inflated
// by MUI portals, tooltips, Nivo SVG viewboxes, etc.
const measureHeight = (element: HTMLElement): number => {
  return Math.ceil(Math.max(
    element.offsetHeight,
    element.scrollHeight
  ))
}

let currentHeight = 0
let rafId: number | null = null
let observedElement: HTMLElement | null = null

const updateHeight = () => {
  if (!observedElement) return
  if (rafId !== null) cancelAnimationFrame(rafId)

  rafId = requestAnimationFrame(() => {
    if (!observedElement) return
    const height = measureHeight(observedElement)

    if (height !== currentHeight && height > 0) {
      currentHeight = height
      // Reset the lib's internal dedupe cache so the message always goes through.
      // During dynamic loading, height can bounce through intermediate values
      // and the lib might cache a stale one, blocking the final correct value.
      ;(Streamlit as any).lastFrameHeight = undefined
      Streamlit.setFrameHeight(height)
    }
    rafId = null
  })
}

const resizeObserver = new ResizeObserver(() => updateHeight())
let mutationObserver: MutationObserver | null = null

const observeElement = (element: HTMLDivElement | null) => {
  if (element !== null) {
    observedElement = element
    currentHeight = 0

    resizeObserver.observe(element)

    mutationObserver = new MutationObserver(() => updateHeight())
    mutationObserver.observe(element, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style", "class"]
    })

    // Staggered measurements to catch dynamic import stages
    updateHeight()
    setTimeout(updateHeight, 100)
    setTimeout(updateHeight, 500)
    setTimeout(updateHeight, 2000)
  } else {
    observedElement = null
    resizeObserver.disconnect()
    if (mutationObserver) {
      mutationObserver.disconnect()
      mutationObserver = null
    }
    if (rafId !== null) {
      cancelAnimationFrame(rafId)
      rafId = null
    }
  }
}

const ElementsResizer = ({ children }: ElementsResizerProps) =>
  <div ref={observeElement} style={{overflow: "visible", position: "relative"}}>
    {children}
  </div>

export default ElementsResizer
