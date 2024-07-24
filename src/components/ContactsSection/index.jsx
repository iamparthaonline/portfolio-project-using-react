import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import "./style.css";
const ContactsSection = () => {
  const [isCopied, setIsCopied] = useState();
  const email = "john.doe@gmail.com";
  return (
    <div id="contacts-section" className="section-container">
      <div>
        <h1>Contacts</h1>
        <div className="email-container">
          <p>{email}</p>
          <CopyToClipboard
            text={email}
            onCopy={() => {
              setIsCopied(true);
              setTimeout(() => {
                setIsCopied(false);
              }, 2000);
            }}
          >
            <span>{isCopied ? "Copied!!" : "Copy"}</span>
          </CopyToClipboard>

          <button>Send Mail</button>
        </div>
      </div>
    </div>
  );
};

export default ContactsSection;
