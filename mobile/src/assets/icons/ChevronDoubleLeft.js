import React from "react"
import Svg, { Path } from "react-native-svg"

export default function ChevronDoubleLeft({ size, style, color }) {
    return (
        <Svg width={size} height={size} fill={color} style={style} class="bi bi-chevron-double-left" viewBox="0 0 16 16">
            <Path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
            <Path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
        </Svg>
    )
}