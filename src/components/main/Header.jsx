import { createSignal } from "solid-js";
import { A } from "@solidjs/router";
import "./Header.css";

export default function Header(props) {
    return (
        <header>
            <div>
                <A class="logo" href="/">
                    <img src="/logo.svg" alt="logo img" width="24"></img>
                    <span>Project Solid</span>
                </A>
                <nav>
                    <A href="/" end={true}>Home</A>
                    <A href="/components" activeClass="active">Components</A>
                    <A href="/contact" activeClass="active">Contact</A>
                </nav>
            </div>
        </header>
    )
}