import Button from "./Button";
import Section from "./Section";

const ContactUs = ({ className }) => {
  return (
    <Section id="ContactUs">
      {/* <div
        className="container relative z-1 items-center h-[39rem] mb-5 p-8 border
      border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]"
      > */}
      <div
        className={`${className} lg:flex justify-between w-full h-full max-w-[70rem] mx-auto mb-12 lg:mb-20 md:text-center`}
      >
        <img src="" alt="" />
        <h2 className="h2 font-bold mb-6">Contact Us</h2>
        <form action="">
          <div className="mb-4 flex">
            <label
              className="body-2 items-center min-h-[4rem] mb-3 text-n-1/50"
              htmlFor=""
            >
              Your&nbsp;Name&nbsp;&nbsp;
            </label>
            <input
              placeholder="Full name"
              className="w-full h-8 px-3 py-2 border rounded-lg bg-grey"
              type="text"
              required
            />
          </div>
          <div className="mb-4 flex">
            <label className="body-2 min-h-[4rem] mb-3 text-n-1/50" htmlFor="">
              Email&nbsp;Address&nbsp;&nbsp;
            </label>
            <input
              placeholder="E-mail"
              className="w-full h-8 px-3 py-2 border rounded-lg bg-grey"
              type="email"
            />
          </div>
          <div className="mb-4 flex">
            <label className="body-2 min-h-[4rem] mb-3 text-n-1/50" htmlFor="">
              Your&nbsp;Message&nbsp;&nbsp;
            </label>
            <textarea
              rows="4"
              placeholder="Type your message here..."
              className="w-full  px-3 py-2 border rounded-lg bg-grey"
              type="text"
            />
          </div>
          <Button className="mt-10 sm:items-center" href="/ContactUs" white>
            Send Message
          </Button>
        </form>
      </div>
      {/* </div> */}
    </Section>
  );
};

export default ContactUs;
