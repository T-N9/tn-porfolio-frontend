import React from "react";

const Greetings = () => {

    const date = new Date();
    let day = date.getDay();
    let titleText= "";
    let dayText = "";
    let emojiText = "";

    switch (day) {
        case 0:
            titleText = "God bless..."
            dayText = "Have a beautiful Sunday."
            emojiText = "đâĒđ"
            break;
        case 1:
            titleText = "Stay sharp!"
            dayText = "Have a great Monday."
            emojiText = "đī¸đ¨âđŧī¸đ¯ī¸"
            break;
        case 2:
            titleText = "Be positive."
            dayText = "Have a fantastic Tuesday."
            emojiText = "đ¤Šī¸đī¸âŠī¸"
            break;
        case 3:
            titleText = "Stay fresh."
            dayText = "Have a winning Wednesday."
            emojiText = "đ¨âđģī¸âī¸đĄī¸"
            break;
        case 4:
            titleText = "Brave and bold."
            dayText = "Have an awesome Thursday."
            emojiText = "đī¸đŦī¸đī¸"
            break;
        case 5:
            titleText = "TGIF!!!"
            dayText = "Have an amazing weekend."
            emojiText = "đŋī¸đī¸đī¸"
            break;
        case 6:
            titleText = "Be happy."
            dayText = "Have a super Saturday."
            emojiText = "đī¸đââī¸ī¸â¨ī¸"
            break;
        default:
            break;
    }

    return (
        <>
            <div className="greeting_txt">
                <h1 className="greeting_txt--wish">
                    <span>
                        {titleText}
                    </span>
                    <span>
                        {dayText}
                    </span>
                    <span className="emoji">
                        {emojiText}
                    </span>
                </h1>
            </div>
        </>
    )
}

export default Greetings;