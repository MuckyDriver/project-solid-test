import { Title, Meta } from "@solidjs/meta";
import { createSignal, Switch, Match, onMount } from "solid-js";
import "../app.css"

// Importing Components
import Header from "~/components/main/Header";
import Counter from "~/components/misc/Counter";
import SelectOption from "~/components/misc/SelectOption"

// Content for page below
export default function Home() {
  const [selectData, updateSelectData] = createSignal("counter")

  let selectChangeObj;

  onMount(() => {
    selectChangeObj.onchange = (e) => {updateSelectData(e.currentTarget.value)}
  })

  return (
    <main>
      <Title>MySite - Homepage</Title>
      <Header />

      <div class="page">
        <div class="content">
          <h1 class="design">Homepage</h1>

          <div class="featurette">
            <h2 class="no-margin-top">Choose your counter style</h2>

            <SelectOption optionList="counters" ref={selectChangeObj}/>

            <Switch fallback={
              <div>Choose your counter:</div>
            }>
              <Match when={selectData() == "counter"}>
                <Counter />
              </Match>
              <Match when={selectData() == "limited_counter"}>
                <Counter maxCountUntilReset="100" incrementCount="3" prefix="Limited counter: "/>
              </Match>
            </Switch>
          </div>
        </div>
      </div>

    </main>
  );
}