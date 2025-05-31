import { Title, Link } from "@solidjs/meta";
import { createSignal, onMount, Switch, Match } from "solid-js";
import "../app.css"

// Importing Components
import Header from "~/components/main/Header";
import FeedbackForm from "~/components/main/FeedbackForm";
import ContactForm from "~/components/main/ContactForm";

export default function Contact() {
    const [formChoice, setFormChoice] = createSignal("contact");
    const [activeValue, setActiveValue] = createSignal("contact");
    let buttonContact;
    let buttonFeedback;

    onMount(() => {
        const [buttons, addButtons] = createSignal([buttonContact, buttonFeedback])

        function updateButtons(button) {
            buttons().forEach((val, index) => {
                if (val == button) {
                    val.classList.add("active")
                    setActiveValue(val.getAttribute("data-value"))
                } else {
                    val.classList.remove("active")
                }
            })
        }

        buttonContact.addEventListener("click", (e) => {
            updateButtons(buttonContact)
        })

        buttonFeedback.addEventListener("click", () => {
            updateButtons(buttonFeedback)
        })

    })

    return (
        <main>
            <Title>MySite - Contact</Title>
            <Header />

            <div class="page">
                <div class="content">
                    <h1 class="design">Contact & Feedback</h1>
                </div>

                <div class="content form-choice bottom">

                    <div>
                        {/* Choice of a different form to choose from. */}
                        <section class="form-choice">
                            <h2 class="design blue">Choose Form Type</h2>

                            <div class="choices">
                                <button data-value="contact" type="button" ref={buttonContact} class="active">Contact</button>
                                <button data-value="feedback" type="button" ref={buttonFeedback}>Feedback</button>
                            </div>
                        </section>

                        <Switch>
                            <Match when={activeValue() == "contact"}>
                                <ContactForm />
                            </Match>
                            <Match when={activeValue() == "feedback"}>
                                <FeedbackForm />
                            </Match>
                        </Switch>
                    </div>
                </div>
            </div>
        </main>
    )
}