import { For } from "solid-js";

export default function FlexBox(props) {

    return <div class="flex-box">
        <For each={props.items || ["None"]}>
            {(item, index) => <div>{item}</div>}
        </For>
    </div>
}