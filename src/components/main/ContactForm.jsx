import "./Form.css"

export default function ContactForm() {

    return <form method="post" action="https://submit-form.com/WMN0hbc07" autocomplete="off">
        <fieldset>
            <label for="email">Your email</label>
            <input required type="email" name="email" id="email" placeholder="someone@email.com"></input>
        </fieldset>
        <fieldset>
            <label for="subject">Subject</label>
            <input type="text" required placeholder="Subject" id="subject" name="subject"></input>
        </fieldset>
        <fieldset>
            <label for="message">Message</label>
            <textarea required id="message" name="message"></textarea>
        </fieldset>
        <button type="submit">Send Message</button>
    </form>
}