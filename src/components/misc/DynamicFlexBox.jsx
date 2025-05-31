import { For } from "solid-js";

export default function DynamicFlexBox(props) {
    const containsSpaces = String => !/\S/.test(String)

    return <div class="flex-box dynamic">
        <For each={props.items || ["None"]}>
            {(item, index) => {
                if (!containsSpaces(item)) {
                    return <div>{item} <button class="delete" onClick={() => {
                        let filterThis = props.items

                        props.updater(filterThis.filter(i => i !== item))
                    }}>&times;</button></div>
                }
            }}
        </For>
    </div>
}