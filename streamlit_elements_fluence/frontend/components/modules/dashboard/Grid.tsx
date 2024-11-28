import React from "react"
import { Global } from "@emotion/react"
import { Responsive, WidthProvider } from "react-grid-layout"
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"

const ResponsiveGridLayout = WidthProvider(Responsive)
const GridPlaceholderStyle = <Global styles={{
  ".react-grid-item.react-grid-placeholder": {
    background: "transparent !important",
    border: "thin dashed grey !important",
    opacity: ".9 !important",
  }
}}/>

const Grid = ({ children, ...props }: ElementsDashboardGridProps) => (
  <>
    {GridPlaceholderStyle}
    <ResponsiveGridLayout {...props}>
      {[children].flat().map(child => {
        if (React.isValidElement(child) && child.key !== undefined) {
          const childElement = child as React.ReactElement;
          if (!childElement.props.hasOwnProperty("style")) {
            childElement.props.style = {}
          }

          const style = childElement.props.style
          style.height = "100%"
          style.width = "100%"
          style.boxSizing = "border-box"

          return <div key={child.key}>{child}</div>
        }
        else {
          return child
        }
      })}
    </ResponsiveGridLayout>
  </>
)

const elements: ElementsRecord = { Grid }
const loadGrid: ElementsLoader = element => elements[element]

export default loadGrid
