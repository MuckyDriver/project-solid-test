import SelectOption from "../misc/SelectOption"

export default function FeedbackForm() {

    return <form method="post" action="https://submit-form.com/WMN0hbc07" autocomplete="off">
        <fieldset>
            <label for="email">Your email</label>
            <input required type="email" name="email" id="email" placeholder="someone@email.com"></input>
        </fieldset>
        <fieldset>
            <label for="rating">Rating</label>
            <SelectOption optionList="rating" id="rating" name="rating"/>
        </fieldset>
        <fieldset>
            <label for="review">Your Feedback</label>
            <textarea required id="review" name="review" placeholder="What did you like or not like about this website?"></textarea>
        </fieldset>
        <button type="submit">Send Feedback</button>
    </form>
}