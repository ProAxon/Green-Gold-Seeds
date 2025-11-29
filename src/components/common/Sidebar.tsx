import { sidebarContent, siteConfig } from "@/data/config";
import { SocialLinks } from "../ui/SocialLinks";
import { ContactInfo } from "../ui/ContactInfo";

export function Sidebar() {
  return (
    <div className="xs-sidebar-group info-group info-sidebar">
      <div className="xs-overlay xs-bg-black" />
      <div className="xs-sidebar-widget">
        <div className="sidebar-widget-container">
          <div className="widget-heading">
            <a href="/#" className="close-side-widget">
              X
            </a>
          </div>
          <div className="sidebar-textwidget">
            <div className="sidebar-info-contents">
              <div className="content-inner">
                <div className="logo">
                  <a href="/">
                    <img src={siteConfig.logo.light} alt="" />
                  </a>
                </div>
                <div className="content-box">
                  <h4>{sidebarContent.about.title}</h4>
                  <div className="inner-text">
                    <p>{sidebarContent.about.text}</p>
                  </div>
                </div>
                <div className="form-inner">
                  <h4>{sidebarContent.formTitle}</h4>
                  <form
                    action={sidebarContent.formAction}
                    method="POST"
                    className="contact-form-validated"
                  >
                    <div className="form-group">
                      <input type="text" name="name" placeholder="Name" required />
                    </div>
                    <div className="form-group">
                      <input type="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                      <textarea name="message" placeholder="Message..." required defaultValue={""} />
                    </div>
                    <div className="form-group message-btn">
                      <button
                        className="thm-btn"
                        data-text="Submit Now +"
                        type="submit"
                        data-loading-text="Please wait..."
                      >
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
                <ContactInfo />
                <div className="thm-social-link1">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

