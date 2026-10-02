import Image from "next/image";
import Link from "next/link";
import picture1 from "@/public/picture 1.jpg";
import picture2 from "@/public/picture 2.jpg";
import adult from "@/public/Adult.jpg";
import couple from "@/public/Couples.jpg";
import children from "@/public/children.jpg";

const Home = () => {
  return <>
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-20">

      {/* IMAGE */}
      <div className="w-full md:w-1/2">
        <Image
          src={picture1}
          alt="Image Loading"
          width={1000}
          height={1000}
          className="w-full h-auto rounded-[20px]"
        />
      </div>

      {/* CONTENT */}
      <div className="w-full md:w-1/2">

        <div className="font-body text-base sm:text-lg text-[#111111] font-bold pb-10 sm:pb-14 md:pb-16 lg:pb-20">
          ONLINE & IN-PERSON COUNSELING IN NEWBURY PARK & ACROSS CA
        </div>

        <div className="font-body text-4xl sm:text-5xl md:text-6xl text-[#111111] pb-6 sm:pb-8 md:pb-10">
          Rebuild your foundation on solid ground and finally begin to

          <span className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#8B0000] pl-2 sm:pl-3 md:pl-4 lg:pl-5">
            thrive.
          </span>
        </div>

        <div className="font-body text-base sm:text-lg text-[#111111] pb-6 sm:pb-8 md:pb-10">
          Specialized therapy for adults, couples, teens, and children to
          reflect, heal, and grow.
        </div>

        <div>
          <li className="font-body text-base sm:text-lg text-[#111111] pb-6 sm:pb-8 md:pb-10">
            <Link href="/contact">
              Book An Appointment
            </Link>
          </li>
        </div>

      </div>
    </div>

    {/* Second paraah */}

    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-20 items-center">

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <div className="font-body text-[#111111] text-3xl sm:text-4xl md:text-4xl lg:text-5xl pt-8 sm:pt-12 md:pt-20 lg:pt-30 pb-8 md:pb-10 text-center md:text-left leading-tight">
            You’re holding onto hope that life{" "}
            <br className="hidden md:block" />
            can be better than it is right now.
          </div>

          {/* Two Text Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-[#666666] text-base sm:text-lg leading-relaxed">

            <div className="font-body">
              At Conejo Valley Family Counseling we want to make that hope a
              reality.

              <br />
              <br />

              Whether you're an adult seeking personal growth, looking to work
              through your trauma, a couple working on your relationship, or a
              parent looking for support for your child, we provide a
              compassionate and safe space to help you navigate all of life’s ups
              and downs.
            </div>

            <div className="font-body">
              First and foremost, we believe what you’re going through is real,
              valid, and worthy of support.

              <br />
              <br />

              Our team offers clients in the Newbury Park area and across CA an
              environment to discover a new life and a deeper sense of self in the
              midst of their struggles.

              <br />
              <br />

              As we tap into the power of connection and understanding, you can
              find your footing again and take a transformative path forward.
            </div>

          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src={picture2}
            alt="Counseling"
            width={1000}
            height={1200}
            className="w-full h-auto rounded-[20px] object-cover"
          />
        </div>

      </div>
    </div>

    {/* Third parah */}

    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 pt-10" >
      {/* Heading */}
      <div className="font-body text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 md:mb-12">
        Who we
        <span className="font-script text-7xl sm:text-8xl md:text-9xl text-[#8B0000]">
          help
        </span>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8">

        {/* Adults */}
        <div className="pt-0 sm:pt-8 lg:pt-16">
          <Image
            src={adult}
            alt="Adults"
            width={1000}
            height={1200}
            className="w-full h-auto aspect-[5/6] object-cover rounded-[20px]"
          />

          <div className="pt-4 md:pt-5 pb-5 font-body text-base sm:text-lg leading-relaxed">
            <span className="text-xl sm:text-2xl font-body">
              Adults
            </span>
            <br />

            Feeling stuck or overwhelmed? We help adults find clarity, build
            resilience, and move forward with confidence by addressing the root
            causes of anxiety, stress, and emotional pain.
          </div>
        </div>

        {/* Couples */}
        <div className="pt-0 sm:pt-8 lg:pt-16">
          <Image
            src={couple}
            alt="Couples"
            width={1000}
            height={800}
            className="w-full aspect-[5/6] object-cover rounded-[20px]"
          />

          <div className="pt-4 md:pt-5 pb-5 font-body text-base sm:text-lg leading-relaxed">
            <span className="text-xl sm:text-2xl font-body">
              Couples
            </span>
            <br />

            Relationships require effort, and we’re here to help you strengthen
            yours. We guide couples through challenges like communication
            breakdowns and trust issues, helping you rebuild intimacy and
            strengthen your relationship.
          </div>
        </div>

        {/* Children & Teens */}
        <div className="pt-0 sm:pt-8 lg:pt-16">
          <Image
            src={children}
            alt="Children & Teens"
            width={1000}
            height={1200}
            className="w-full aspect-[5/6] object-cover rounded-[20px]"
          />

          <div className="pt-4 md:pt-5 pb-5 font-body text-base sm:text-lg leading-relaxed">
            <span className="text-xl sm:text-2xl font-body">
              Children&apos;s & Teens
            </span>
            <br />

            Kids need support, too. We help them process big emotions, cope with
            challenging family situations, build coping skills, and feel
            understood, while also working closely with their parents to create a
            nurturing environment.
          </div>
        </div>

      </div>
    </div>




  </>;
};

export default Home;