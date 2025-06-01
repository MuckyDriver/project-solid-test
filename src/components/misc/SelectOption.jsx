import { Index, For } from "solid-js";
import "./SelectOption.css";

export default function SelectOption(props) {
    const list = {
        counters: [
            "Counter", "Limited Counter"
        ],

        rating: [
            "★★★★★ Excellent", "★★★★✩ Good", "★★★✩✩ Okay", "★★✩✩✩ Bad", "★✩✩✩✩ Terrible"
        ]
    }

    return <select autocomplete={false} ref={props.ref} id={props.id} name={props.name}>
        <For each={list[props.optionList]}>
            {(item, index) => (
                <option value={String(item).toLowerCase().replace(" ", "_")}>{item}</option>
            )}
        </For>
    </select>
}