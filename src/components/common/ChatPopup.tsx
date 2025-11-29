import { siteConfig } from "@/data/config";

export function ChatPopup() {
  return (
    <>
      <div className="chat-icon">
        <button type="button" className="chat-toggler">
          <i className="fa fa-comment" />
        </button>
      </div>
      <div id="chat-popup" className="chat-popup">
        <div className="popup-inner">
          <div className="close-chat">
            <i className="fa fa-times" />
          </div>
          <div className="chat-form">
            <p>Please fill out the form below and we will get back to you as soon as possible.</p>
            <form
              action={siteConfig.footer.links[0].url}
              method="POST"
              className="contact-form-validated"
            >
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Text" required defaultValue={""} />
              </div>
              <div className="form-group message-btn">
                <button type="submit" className="thm-btn">
                  Submit Now
                  <i className="fal fa-long-arrow-right" />
                  <span className="hover-btn hover-bx" />
                  <span className="hover-btn hover-bx2" />
                  <span className="hover-btn hover-bx3" />
                  <span className="hover-btn hover-bx4" />
                </button>
              </div>
              <div className="result" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

