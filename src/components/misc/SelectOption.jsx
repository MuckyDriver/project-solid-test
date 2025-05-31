import { Index, For } from "solid-js";
import "./SelectOption.css";

export default function SelectOption(props) {
    const list = {
        counters: [
            "Counter", "Limited Counter"
        ]
    }

    return <select autocomplete={false} ref={props.ref}>
        <For each={list[props.optionList]}>
            {(item, index) => (
                <option value={String(item).toLowerCase().replace(" ", "_")}>{item}</option>
            )}
        </For>
    </select>
}