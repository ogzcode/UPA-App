import React from "react"
import Svg, { Path } from "react-native-svg"

export default function ChevronDoubleRight({ size, color, style }) {
    return (
        <Svg width={size} height={size} fill={color} style={style} class="bi bi-chevron-double-right" viewBox="0 0 16 16">
            <Path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708" />
            <Path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708" />
        </Svg>
    )
}