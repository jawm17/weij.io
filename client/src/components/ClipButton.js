import React, { useState, } from "react";

export default function ClipButton(props) {
    const [clipboard, setClipboard] = useState(false);

    function copyAddress() {
        /* Get the text field */
        var copyText = document.getElementById("addressInput");
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
        /* Copy the text inside the text field */
        document.execCommand("copy");

        // display notification
        setClipboard(true);
        setTimeout(function () {
            setClipboard(false);
        }, 1000);
    }

    return (
        <div className="clip">
            <img className="clipboardIcon" src="https://image.flaticon.com/icons/svg/1621/1621635.svg" alt="copy address" onClick={() => copyAddress()}></img>
            {clipboard ? <span className="clipboardAlertShow">Copied Address</span> : <span className="clipboardAlert">Link Copied on Clipboard</span>}
            <input id="addressInput" type="text" defaultValue={props.address.toString()}></input>
        </div>
    );
}