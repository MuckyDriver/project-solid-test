import { For, Show, createSignal } from "solid-js";
import "./ImageSlideshow.css"

export default function ImageSlideshow(props) {
    let [imageList, updateImageList] = createSignal([])
    let [currentIndex, updateIndex] = createSignal(0)
    let [caption, setCaption] = createSignal(props.images[0])
    
    function updateImageShown(indexNumber) {
        imageList().forEach((val, index) => {
            if (index == indexNumber) {
                val.classList.add("visible")
                updateIndex(index)
                setCaption(val.alt)
            } else {
                val.classList.remove("visible")
            }
        })
    }

    function next() {
        updateIndex(currentIndex() + 1)
        updateImageShown((currentIndex() > (imageList().length - 1)) ? 0 : currentIndex())
    }

    function prev() {
        updateIndex(currentIndex() - 1)
        updateImageShown((currentIndex() < 0) ? (imageList().length - 1) : currentIndex())
    }
    

    return <div class="image-slideshow">
        <button onclick={prev} type="button">
            {"«"}
        </button>

        <div class="images">

            <For each={props.images}>
                {(item, index) => {
                    let className = (index() == 0) ? "visible" : "";
                    let image = <img class={className} alt={item} src={props.dir + item}></img>

                    updateImageList(() => {
                        return imageList().concat(image)
                    })

                    return image
                }}
            </For>

        </div>

        <Show when={props.captions == true}>
            <div class="caption">
                {caption()}
            </div>
        </Show>

        <button onclick={next} type="button">
            {"»"}
        </button>
    </div>
}