export default function Button({children,textOnly, className, ...props}){
    const cssClassess=textOnly?`text-button ${className}`: `button ${className}`;

    return <button {...props} className={cssClassess}>{children} </button>
}