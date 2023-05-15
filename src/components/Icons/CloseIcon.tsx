import { IconsProps } from "../../core/types";

export default function CloseIcon(props: IconsProps): JSX.Element {
    const { width, height, color } = props;

    return (
        <svg
            viewBox="0 0 72 72" 
            width={width ?? "64px"} 
            height={height ?? "64px"} 
            fill={color ?? "black"} 
            fillRule="nonzero"
        >
            <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/>
        </svg>
    )
}