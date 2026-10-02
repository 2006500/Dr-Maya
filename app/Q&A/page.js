import Link from "next/link";

const FAQ = () => {
  return (
    <>
      <div
        className="
          flex flex-col
          w-full
          px-5 sm:px-8 md:px-10 lg:px-9
        "
      >
       
        <div className="w-full">
          {/* Heading */}
          <span
            className="
              block
              pb-10 sm:pb-14 md:pb-16 lg:pb-16
              font-display
              text-4xl sm:text-5xl md:text-5xl lg:text-6xl
              font-bold
              text-[#163B32]
            "
          >
            Questions?
            <br />
          </span>

          {/* Intro */}
          <div
            className="
              font-body
              text-sm sm:text-base md:text-base lg:text-base
              leading-relaxed
              text-[#163B32]
              pb-8 md:pb-10 lg:pb-8
            "
          >
            Here are some of the most common questions we get about working
            together.
            <br className="hidden lg:block" />
            <br className="hidden lg:block" />

            If you don’t see your question listed or are ready to schedule a
            free consult,{" "}
            <Link
              href="/contact"
              className="underline hover:opacity-70 transition-opacity"
            >
              Contact us.
            </Link>
          </div>
        </div>

        {/*  FAQ SECTION  */}
        <div className="w-full">

          {/*  QUESTION 1 */}
          <div
            className="
              font-display
              text-base sm:text-lg md:text-[19px] lg:text-[20px]
              text-[#163B32]
              leading-relaxed
            "
          >
            <div className="pb-6 lg:pb-7">
              Where are you located?
            </div>

            <div className="pb-8 lg:pb-9">
              Newbury Park, CA. We also offer video sessions for clients
              out of the area or if a client simply prefers video instead.
            </div>
          </div>

          <hr className="my-6 lg:my-8 w-full border-t-2 border-[#8B0000] opacity-30" />

          {/*  QUESTION 2 */}
          <div
            className="
              font-display
              text-base sm:text-lg md:text-[19px] lg:text-[20px]
              text-[#163B32]
              leading-relaxed
            "
          >
            <div className="pb-6 lg:pb-7">
              How does online therapy work?
            </div>

            <div className="pb-8 lg:pb-9">
              Telehealth therapy allows you to meet with your therapist
              online through a secure video platform from the comfort of
              your home or another private location. Sessions are conducted
              similarly to in-person therapy, providing a convenient and
              confidential way to receive support and work toward your
              therapeutic goals.
            </div>
          </div>

          <hr className="my-6 lg:my-8 w-full border-t-2 border-[#8B0000] opacity-30" />

          {/*  QUESTION 3  */}
          <div
            className="
              font-display
              text-base sm:text-lg md:text-[19px] lg:text-[20px]
              text-[#163B32]
              leading-relaxed
            "
          >
            <div className="pb-6 lg:pb-7">
              What are your fees and what insurance do you take?
            </div>

            <div className="pb-8 lg:pb-9">
              Fees for Jennifer are $225 per session. Fees for all other staff
              members are $175 per session.
              We accept the following insurance plans:
              Anthem Blue Cross of California
              Blue Cross Blue Shield (not Blue Shield of CA)
              <br />

              Cigna
              <br />

              United/Optum
              <br />

              Aetna
              <br />

              Gold-Coast Medi-Cal
              <br />

              A limited amount of sliding scale spots are available.
            </div>
          </div>

          <hr className="my-6 lg:my-8 w-full border-t-2 border-[#8B0000] opacity-30" />

          {/*  QUESTION 4  */}
          <div
            className="
              font-display
              text-base sm:text-lg md:text-[19px] lg:text-[20px]
              text-[#163B32]
              leading-relaxed
            "
          >
            <div className="pb-6 lg:pb-7">
              What is a Good Faith Estimate?
            </div>

            <div className="pb-8 lg:pb-9">
              A Good Faith Estimate is a document that provides
              an estimate of the expected costs for your therapy
              services.
              <br />
              <br />

              Under the No Surprises Act, healthcare providers,
              including therapists, are required to give clients
              an upfront estimate for the anticipated duration and
              costs of treatment. This estimate helps you
              understand potential expenses and make informed
              financial decisions about your care. Please note
              that this is an estimate and may vary based on the
              length and frequency of sessions as your treatment
              progresses.
            </div>
          </div>

          <hr className="my-6 lg:my-8 w-full border-t-2 border-[#8B0000] opacity-30" />

          {/*  QUESTION 5  */}
          <div
            className="
              font-display
              text-base sm:text-lg md:text-[19px] lg:text-[20px]
              text-[#163B32]
              leading-relaxed
            "
          >
            <div className="pb-6 lg:pb-7">
              What can I expect during my first appointment?
            </div>

            <div className="pb-8 lg:pb-9">
              During your first therapy session, we’ll start with a
              thorough assessment of the concerns that brought you
              to therapy.
              <br />
              <br />

              This means we’ll explore your presenting issues in detail,
              including what you’re experiencing, how long you’ve been
              dealing with these concerns, and how they impact your
              daily life, relationships, and overall well-being.
              <br />
              <br />

              We’ll also discuss any relevant personal history,
              including past experiences that may shape your current
              challenges, to gain a holistic view of your unique situation.
              <br />
              <br />

              Together, we’ll begin the initial stages of creating a
              treatment plan tailored to your needs. This includes
              setting preliminary goals for therapy, identifying areas
              of focus, and discussing potential therapeutic approaches
              that align with your preferences and comfort level. By the
              end of the session, you’ll have a clear understanding of the
              therapy process, a sense of the steps we’ll take to support
              your growth, and an open invitation to ask questions or express
              any concerns. The goal is for you to leave the session feeling
              heard, supported, and hopeful about the path forward.
            </div>
          </div>

          <hr className="my-6 lg:my-8 w-full border-t-2 border-[#8B0000] opacity-30" />

          {/*  QUESTION 6  */}
          <div
            className="
              font-display
              text-base sm:text-lg md:text-[19px] lg:text-[20px]
              text-[#163B32]
              leading-relaxed
            "
          >
            <div className="pb-6 lg:pb-7">
              What if I need to get ahold of my therapist after hours?
            </div>

            <div className="pb-8 lg:pb-9">
              We do not provide emergency services.
              If you need urgent assistance outside of business
              hours, you may leave a message for your therapist, who
              will return your call on the next business day.
              <br />

              For mental health emergencies, please go to the
              nearest emergency room or contact local emergency
              services for immediate support.
            </div>
          </div>

          <hr className="my-6 lg:my-8 w-full border-t-2 border-[#8B0000] opacity-30" />

          {/*  QUESTION 7  */}
          <div
            className="
              font-display
              text-base sm:text-lg md:text-[19px] lg:text-[20px]
              text-[#163B32]
              leading-relaxed
            "
          >
            <div className="pb-6 lg:pb-7">
              What is the cancellation/missed appointment policy?
            </div>

            <div className="pb-8 lg:pb-9">
              A minimum of 48 hours' notice is required for cancellations.
              Frequent cancellations or missed appointments may lead
              to a reassessment of the therapeutic relationship and could
              result in its termination to ensure continuity of care and
              respect for scheduling availability.
            </div>
          </div>

          <hr className="my-6 lg:my-8 w-full border-t-2 border-[#8B0000] opacity-30" />

          {/* ================= QUESTION 8 ================= */}
          <div
            className="
              font-display
              text-base sm:text-lg md:text-[19px] lg:text-[20px]
              text-[#163B32]
              leading-relaxed
            "
          >
            <div className="pb-6 lg:pb-7">
              Is therapy confidential?
            </div>

            <div className="pb-8 lg:pb-9">
              Yes, therapy is confidential. Information shared in
              therapy sessions is protected by privacy laws and ethical
              guidelines, meaning your therapist cannot disclose
              what you discuss without your permission. There are, however,
              a few legal exceptions to confidentiality, such as if there
              is a risk of harm to yourself or others, if there is suspected
              abuse of a child, elder, or vulnerable adult, or if a court
              order mandates disclosure. Your therapist will review these
              exceptions with you in your first session to ensure you
              understand your rights and the limits of confidentiality.
            </div>
          </div>

          <hr className="my-6 lg:my-8 w-full border-t-2 border-[#8B0000] opacity-30" />
        </div>
      </div>
    </>
  );
};

export default FAQ;