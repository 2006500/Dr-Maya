
const Contact = () => {
  return (
    <main className="w-full ">
      <div className="w-full px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-12 lg:py-16 xl:px-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 lg:flex-row lg:items-start lg:gap-14 xl:gap-20">

          {/* LEFT SIDE */}
          <section className="w-full lg:w-[38%] lg:shrink-0">
            <div className="font-display pt-2 pb-6 text-5xl leading-tight sm:text-6xl md:text-7xl lg:pt-6 lg:text-7xl xl:text-8xl">
              Get
              <span className="font-script ml-2 text-6xl text-[#8B0000] sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl">
                in touch.
              </span>
            </div>

            <p className="font-body max-w-xl pb-8 text-base leading-7 sm:text-lg sm:leading-8 lg:pb-10">
              Use this form to tell us more about what brings you to therapy.
              We’ll respond within 24 hours to match you with the therapist
              whose expertise and availability best aligns with your needs &
              goals.
            </p>

            <hr className="my-6 w-full border-t border-current opacity-30 sm:my-8" />

            <address className="font-body pb-6 text-base not-italic leading-7 text-[#718B78] sm:text-lg sm:leading-8">
              925 Broadbeck Dr Suite 225
              <br />
              Newbury Park, CA 91320
              <br />
              <br />
              info@conejovalleycounseling.com
              <br />
              805.242.3120
            </address>
          </section>

          {/* RIGHT SIDE - FORM */}
          <section className="w-full lg:w-[62%] lg:min-w-0">
            <form className="w-full space-y-8">

              {/* NAME */}
              <div>
                <h2 className="mb-5 text-lg sm:text-xl">
                  Name
                </h2>

                <div className="flex flex-col gap-6 md:flex-row">
                  <div className="w-full">
                    <label className="mb-2 block text-base">
                      First Name
                      <span className="ml-2 text-sm text-gray-500">
                        (required)
                      </span>
                    </label>

                    <input
                      type="text"
                      required
                      className="h-14 w-full border border-black bg-white px-3 outline-none transition focus:border-[#8B0000] sm:h-16"
                    />
                  </div>

                  <div className="w-full">
                    <label className="mb-2 block text-base">
                      Last Name
                      <span className="ml-2 text-sm text-gray-500">
                        (required)
                      </span>
                    </label>

                    <input
                      type="text"
                      required
                      className="h-14 w-full border border-black bg-white px-3 outline-none transition focus:border-[#8B0000] sm:h-16"
                    />
                  </div>
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-lg leading-7 sm:text-xl">
                  Email
                  <span className="ml-2 text-sm text-gray-500">
                    (required)
                  </span>
                </label>

                <input
                  type="email"
                  required
                  className="h-14 w-full border border-black bg-white px-3 outline-none transition focus:border-[#8B0000] sm:h-16"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="mb-2 block text-lg leading-7 sm:text-xl">
                  Phone
                  <span className="ml-2 text-sm text-gray-500">
                    (required)
                  </span>
                </label>

                <input
                  type="tel"
                  required
                  className="h-14 w-full border border-black bg-white px-3 outline-none transition focus:border-[#8B0000] sm:h-16"
                />
              </div>

              {/* TELEHEALTH / IN-PERSON */}
              <div>
                <label className="mb-2 block text-lg leading-7 sm:text-xl sm:leading-8">
                  Are you looking for telehealth or in-person therapy?
                  <span className="ml-2 text-sm text-gray-500">
                    (required)
                  </span>
                </label>

                <select
                  required
                  defaultValue=""
                  className="h-14 w-full border border-black bg-white px-3 text-base outline-none transition focus:border-[#8B0000]"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="telehealth">Telehealth</option>
                  <option value="in-person">In-person therapy</option>
                  <option value="either">Open to either</option>
                </select>
              </div>

              {/* HOW DID YOU HEAR */}
              <div>
                <label className="mb-2 block text-lg leading-7 sm:text-xl sm:leading-8">
                  How did you hear about our practice?
                  <span className="ml-2 text-sm text-gray-500">
                    (required)
                  </span>
                </label>

                <select
                  required
                  defaultValue=""
                  className="h-14 w-full border border-black bg-white px-3 text-base outline-none transition focus:border-[#8B0000]"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="google">Google</option>
                  <option value="social-media">Social Media</option>
                  <option value="friend">Friend or Family</option>
                  <option value="referral">Professional Referral</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* INSURANCE */}
              <div>
                <label className="mb-2 block text-lg leading-7 sm:text-xl sm:leading-8">
                  Please provide the name of your insurance company:
                  <span className="ml-2 text-sm text-gray-500">
                    (required)
                  </span>
                </label>

                <p className="mb-4 text-sm leading-6 text-gray-500 sm:text-base">
                  If you do not plan to use insurance, please write "None".
                </p>

                <input
                  type="text"
                  required
                  className="h-14 w-full border border-black bg-white px-3 outline-none transition focus:border-[#8B0000] sm:h-16"
                />
              </div>

              {/* PRESENTING ISSUES */}
              <div>
                <label className="mb-2 block text-lg leading-7 sm:text-xl sm:leading-8">
                  What are the presenting issues?
                  <span className="ml-2 text-sm text-gray-500">
                    (required)
                  </span>
                </label>

                <p className="mb-4 text-sm leading-6 text-gray-500 sm:text-base">
                  Note: Please do not provide any personal information in this
                  form.
                </p>

                <textarea
                  required
                  rows={5}
                  className="w-full resize-y border border-black bg-white px-3 py-3 outline-none transition focus:border-[#8B0000]"
                />
              </div>

              {/* MINOR AGE */}
              <div>
                <label className="mb-2 block text-lg leading-7 sm:text-xl sm:leading-8">
                  If the counseling is for a minor, please provide their age:
                </label>

                <input
                  type="number"
                  min="1"
                  max="17"
                  className="h-14 w-full border border-black bg-white px-3 outline-none transition focus:border-[#8B0000] sm:h-16"
                />
              </div>

              {/* PARTICULAR CLINICIAN */}
              <div>
                <label className="mb-2 block text-lg leading-7 sm:text-xl sm:leading-8">
                  Are you interested in working with a particular clinician?
                  <span className="ml-2 text-sm text-gray-500">
                    (required)
                  </span>
                </label>

                <p className="mb-4 text-sm leading-6 text-gray-500 sm:text-base">
                  If so, choose their name below. If not, select "None."
                </p>

                <select
                  required
                  defaultValue=""
                  className="h-14 w-full border border-black bg-white px-3 text-base outline-none transition focus:border-[#8B0000]"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="maya-reynolds">Dr. Maya Reynolds</option>
                  <option value="none">None</option>
                </select>
              </div>

              {/* DAYS AND TIMES */}
              <div>
                <label className="mb-2 block text-lg leading-7 sm:text-xl sm:leading-8">
                  We see clients the same day and time each week. Please
                  provide some consistent days and times that work for you:
                </label>

                <span className="mb-4 block text-sm text-gray-500 sm:text-base">
                  (required)
                </span>

                <textarea
                  required
                  rows={4}
                  className="w-full resize-y border border-black bg-white px-3 py-3 outline-none transition focus:border-[#8B0000]"
                />
              </div>

              {/* SUBMIT */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full border border-black bg-black px-8 py-3 text-base text-white transition hover:bg-[#8B0000] sm:w-auto"
                >
                  Submit
                </button>
              </div>

            </form>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Contact;