import React from "react"
import Svg, { Path } from "react-native-svg"

export default function ChevronRight({ style, color, size }) {
    return (
        <Svg width={size} height={size} fill={color} style={style} class="bi bi-chevron-right" viewBox="0 0 16 16">
            <Path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
        </Svg>
    )
}