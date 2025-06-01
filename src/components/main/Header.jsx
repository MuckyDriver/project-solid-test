import { createSignal, onMount } from "solid-js";
import { A } from "@solidjs/router";
import "./Header.css";

export default function Header(props) {
    let mobileMenuButton;
    let mobileMenuCloseBtn;
    let navigation;

    onMount(() => {
        mobileMenuButton.addEventListener("click", () => {
            navigation.classList.add("open")
        })

        mobileMenuCloseBtn.addEventListener("click", () => {
            navigation.classList.remove("open")
        })
    })

    return (
        <header>
            {/* Main Desktop/Mobile Menu */}
            <div>
                <A class="logo" href="/">
                    <img src="/logo.svg" alt="logo img" width="24"></img>
                    <span>Project Solid</span>
                </A>
                <nav ref={navigation}>
                    <button ref={mobileMenuCloseBtn}><span>&times;</span></button>
                    <A href="/" end={true}>Home</A>
                    <A href="/components" activeClass="active">Components</A>
                    <A href="/contact" activeClass="active">Contact</A>
                </nav>
                <div class="mobile-menu-button" ref={mobileMenuButton}>
                    <img src="/hamburger.svg" alt="hamburgermenu" width="24"></img>
                </div>
            </div>
        </header>
    )
}