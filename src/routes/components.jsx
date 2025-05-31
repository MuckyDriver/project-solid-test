import { Title } from "@solidjs/meta";
import { For, createSignal } from "solid-js";
import "../app.css"

// Importing Components
import Header from "~/components/main/Header";
import FlexBox from "~/components/misc/FlexBox";
import DynamicFlexBox from "~/components/misc/DynamicFlexBox";
import ImageSlideshow from "~/components/misc/ImageSlideshow";

export default function About() {
    const [myFlexBox, updateMyFlexBox] = createSignal(["One", "Two", "Three"])
    let myFlexBoxInput;

    const addFlexItem = function() {
        // updateMyFlexBox(() => { return [].concat(myFlexBoxInput.value, myFlexBox()) })
        updateMyFlexBox(
            () => {
                return myFlexBox().reverse().concat(myFlexBoxInput.value).reverse()
            }
        )
    }

    return (
        <main>
            <Title>MySite - Components</Title>
            <Header />

            <div class="page">
                <div class="content">
                    <h1 class="design">Components</h1>
                    <p>A list of developed components that are going to be implemented into the Developer Site.</p>
                </div>

                <div class="content">
                    <h2 class="design blue">Flex Boxes</h2>
                    <p>Flex boxes allow containers to resize within the size of the viewport allowing a responsive layout.</p>

                    <FlexBox items={["Hello World", "How are you today?", "This website is all about Project Solid"]}/>
                </div>

                <div class="content">
                    <h2 class="design blue">Dynamic Flex Boxes</h2>
                    <p>A dynamic flex box could be rigged up to add new items if a new input is added.</p>

                    <div class="flex-box input-test">
                        <input type="text" class="custom" ref={myFlexBoxInput} placeholder="Type here"></input>
                        <button onClick={addFlexItem} type="button">Add Item</button>
                    </div>

                    <DynamicFlexBox items={myFlexBox()} updater={updateMyFlexBox}/>
                </div>

                <div class="content bottom">
                    <h2 class="design blue">Image Slideshow</h2>

                    <ImageSlideshow dir="/slideshow/" captions={true} images={["space1.jpg", "space2.jpg", "space3.jpg", "space4.jpg"]}/>
                </div>
            </div>
        </main>
    );
}
