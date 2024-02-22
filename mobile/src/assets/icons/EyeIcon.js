import Svg, { Path } from 'react-native-svg';

export default function EyeIcon({ size, color, style }) {
    return (
        <Svg width={size} height={size} fill={color} style={style} class="bi bi-eye-fill" viewBox="0 0 16 16">
            <Path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
            <Path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
        </Svg>
    )
}