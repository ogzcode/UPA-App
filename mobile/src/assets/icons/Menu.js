import React from "react";
import Svg, { Path } from "react-native-svg";

export default function Menu({ size, color, style }) {
    return (
        <Svg width={size} height={size} fill={color} style={style} class="bi bi-filter-left" viewBox="0 0 16 16">
            <Path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
        </Svg>
    )
}
