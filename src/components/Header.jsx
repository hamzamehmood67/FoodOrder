import logoIm from "../assets/logo.jpg"
import Button from "./UI/Button"
export default function Header(){
    return <header id="main-header">
        <div id="title">
            <img src={logoIm} />
            <h1>React Food</h1>
        </div>

        <nav>
            <Button textOnly={true}>Cart (0)</Button>
        </nav>
    </header>
}