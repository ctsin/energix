"use client";
import EmailIcon from "@/svg/EmailIcon";
import LocationIcon from "@/svg/LocationIcon";
import PhoneIcon from "@/svg/PhoneIcon";

const ContactArea = () => {
  return (
    <>
      <section className="gap section-contact">
        <div className="container">
          <div className="heading">
            <h2 style={{ paddingBottom: "2em" }}>
              talk about how we can help you reduce your energy
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-info contact-information">
                <div>
                  <i>
                    <PhoneIcon />
                  </i>
                </div>
                <div>
                  <h4>Phone No:</h4>
                  <a href="callto:+8618576775218">
                    <p>WhatsApp: +86 18576775218</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-info contact-information">
                <div>
                  <i>
                    <PhoneIcon />
                  </i>
                </div>
                <div>
                  <h4>Phone No:</h4>
                  <a href="callto:+8618576775218">
                    <p>WhatsApp: +86 18576775218</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-info contact-information">
                <div>
                  <i>
                    <LocationIcon />
                  </i>
                </div>
                <div>
                  <p>Hi-Tech Zone, Nanshan District, Shenzhen, PRC</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {" "}
              <div className="contact-info contact-information">
                <div>
                  <i>
                    <EmailIcon />
                  </i>
                </div>
                <div>
                  <h4>Email Address:</h4>
                  <a href="mailto:info@offgridsynergy.com">
                    <p>info@offgridsynergy.com</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;
