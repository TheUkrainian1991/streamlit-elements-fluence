import { Streamlit } from "streamlit-component-lib"

// Use the same height source that streamlit-component-lib uses internally
// when setFrameHeight() is called with no arguments: document.body.scrollHeight.
// This ensures the iframe height matches what Streamlit expects, preventing
// click target misalignment.

let rafId: number | null = null

const updateHeight = () => {
  // Cancel any pending frame to avoid redundant updates
  if (rafId !== null) {
    cancelAnimationFrame(rafId)
  }

  // Use requestAnimationFrame to batch measurements after layout/paint,
  // ensuring dynamically-loaded MUI components are fully rendered.
  rafId = requestAnimationFrame(() => {
    Streamlit.setFrameHeight()
    rafId = null
  })
}

// ResizeObserver catches size changes from layout shifts, content loading, etc.
const resizeObserver = new ResizeObserver(() => {
  updateHeight()
})

// MutationObserver catches DOM changes that don't immediately trigger a resize,
// such as dynamically-loaded MUI components being inserted into the tree.
let mutationObserver: MutationObserver | null = null

const observeElement = (element: HTMLDivElement | null) => {
  if (element !== null) {
    resizeObserver.observe(element)

    mutationObserver = new MutationObserver(() => {
      updateHeight()
    })
    mutationObserver.observe(element, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style", "class"]
    })

    // Initial height report
    updateHeight()
  } else {
    resizeObserver.disconnect()
    if (mutationObserver !== null) {
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
  <div ref={observeElement}>
    {children}
  </div>

export default ElementsResizer
