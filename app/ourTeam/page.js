"use client";
import Link from "next/link";
import Image from "next/image";
import Maya from "@/public/maya.png";
import { useState } from "react";

export default function AboutMaya() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(
      openSection === section ? null : section
    );
  };
  return (
    <section className="w-full px-6 py-10 sm:px-8 md:px-10 lg:px-16 xl:px-20">

      <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">

        <div className="w-full lg:w-[40%] lg:shrink-0">
          <Image
            src={Maya}
            alt="Dr. Maya Reynolds"
            width={1000}
            height={1200}
            className="
              h-[450px]
              w-full
              rounded-[20px]
              object-cover
              sm:h-[550px]
              md:h-[600px]
              lg:h-[680px]
              xl:h-[720px]
            "
          />
          <div className="p-50 text-[#FFFFFF] ">
            <section className=" bg-[#8B0000] flex h-36 w-36 shrink-0 items-center justify-center rounded-full border-2 p-5 text-center">
              <Link
                href="#"
                className="text-sm leading-tight"
              >
                Book Your Appointment
              </Link>
            </section>
          </div>

          <section className="w-full">

            {/* SPECIALTIES */}
            <div className="border-b border-[#d8cfbd] font-body">

              <button
                onClick={() => toggleSection("specialties")}
                className="flex w-full items-center justify-between py-8 text-left"
              >
                <h2 className="text-3xl font-normal">
                  Specialties
                </h2>

                <span className="text-4xl font-light">
                  {openSection === "specialties" ? "−" : "+"}
                </span>
              </button>

              {openSection === "specialties" && (
                <ul className="space-y-5 pb-8 pl-6 text-xl">
                  <li>Trauma</li>
                  <li>Anxiety</li>
                  <li>Perfectionism</li>
                </ul>
              )}

            </div>


            {/* MODALITIES */}
            <div className="border-b border-[#d8cfbd] font-body">

              <button
                onClick={() => toggleSection("modalities")}
                className="flex w-full items-center justify-between py-8 text-left"
              >
                <h2 className="text-3xl font-normal">
                  Modalities
                </h2>

                <span className="text-4xl font-light">
                  {openSection === "modalities" ? "−" : "+"}
                </span>
              </button>

              {openSection === "modalities" && (
                <ul className="space-y-5 pb-8 pl-6 text-xl">
                  <li>Cognitive Behavioral Therapy (CBT)</li>
                  <li>EMDR Therapy</li>
                  <li>Mindfulness-Based Therapy</li>
                </ul>
              )}

            </div>

          </section>




        </div>



        <div className="min-w-0 w-full lg:w-[60%]">

          {/* Doctor Name */}
          <div className="mb-6">
            <h2 className="text-4xl font-normal  font-script sm:text-5xl pb-10">
              Dr. Maya Reynolds, PsyD
            </h2>

            <p className="mt-1 text-[#718B78] text-base sm:text-lg">
              Licensed Clinical Psychologist (Anxiety, Trauma & Perfectionism)
            </p>
          </div>
          <hr className="my-8 w-full border-t border-current opacity-30" />


          <div className="mb-7">
            <p className="text-2xl font-display sm:text-4xl">
              My goal is to create a safe, collaborative space where you can
              slow down, understand yourself more deeply, heal from past
              experiences, and build a more grounded and fulfilling life.
            </p>
          </div>


          {/* About */}
          <div className="space-y-5 font-body text-base leading-7 sm:text-lg sm:leading-8">

            <p>
              I’m a licensed clinical psychologist based in Santa Monica,
              California, offering therapy for adults who feel overwhelmed by
              anxiety, stress, or the lingering effects of past experiences.
              Many of the people I work with are high-achieving, thoughtful,
              and self-aware—but internally feel exhausted, stuck in
              overthinking, or emotionally on edge.
            </p>

            <p>
              My work often focuses on anxiety, panic, trauma, and burnout.
              Clients frequently come to me feeling “functional” on the
              outside while quietly struggling with constant worry, tension
              in their body, difficulty sleeping, or a sense that they’re
              always bracing for something to go wrong. Others are navigating
              the impact of earlier life experiences that continue to affect
              their relationships, confidence, or sense of safety.
            </p>

            <p>
              I take a warm, collaborative, and grounded approach to therapy.
              Sessions are structured enough to feel supportive, while still
              leaving space for reflection and depth. I integrate evidence-
              based methods such as cognitive-behavioral therapy (CBT), EMDR,
              mindfulness-based practices, and body-oriented techniques to
              help clients understand both the emotional and physiological
              sides of what they’re experiencing.
            </p>

            <p>
              Trauma work is an important part of my practice. I work with
              adults who have experienced single-incident trauma as well as
              more complex, long-standing patterns that may stem from
              childhood, relationships, or chronic stress. My approach is
              paced carefully, with an emphasis on safety, stabilization,
              and helping clients feel more regulated in their daily
              lives—not just during sessions.
            </p>

            <p>
              In addition to trauma and anxiety, I frequently support clients
              dealing with professional burnout, perfectionism, and high
              internal pressure. Many are entrepreneurs, creatives, or
              professionals who feel disconnected from themselves after years
              of pushing through stress. Therapy can become a space to slow
              down, reconnect, and develop more sustainable ways of living
              and working.
            </p>

            <p>
              I offer both in-person therapy from my Santa Monica office and
              secure telehealth sessions for clients located in California.
              My office is a quiet, private space designed to feel calm and
              grounding, with natural light and a comfortable, uncluttered
              environment. Clients often share that the space itself helps
              them feel more at ease when they arrive.
            </p>

            <p>
              I believe therapy works best when clients feel respected,
              understood, and actively involved in the process. My goal is not
              just symptom relief, but helping clients develop insight,
              resilience, and a stronger relationship with themselves over
              time.
            </p>

            <p>
              If you’re looking for a therapist who combines practical tools
              with depth-oriented work—and who understands the realities of
              living and working in a fast-paced environment—I may be a good
              fit.
            </p>

          </div>
        </div>

      </div>
      <hr className="my-8 w-full border-t border-current opacity-30" />
      <div>
        <div className="font-display text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] pr-4 sm:pr-8 md:pr-12 lg:pr-50 pl-4 sm:pl-8 md:pl-12 lg:pl-20 pb-8 sm:pb-10 md:pb-12 lg:pb-15">
          One of my first priorities in our work together is helping you feel  
          <span className="font-script pl-5 text-7xl text-[#8B0000]">
            safe.
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-2">
          <div className="font-body pl-4 sm:pl-8 md:pl-12 lg:pl-25">
            If you’re feeling overwhelmed or struggling with intense emotions, we’ll work together to manage those first, creating a foundation of support and stability. I’ll also help you understand how the trauma you’ve been through can affect both your brain and body. This allows you to begin understanding and recognizing all the different parts of yourself—your roles, your anxious parts, and where feelings are coming from. Together, we’ll move through your feelings and uncover the hard experiences you’ve been through at a pace that feels right for you. <br/> <br/>
            I’m here to listen, validate your stress, and help you feel seen in what you’re going through, whether you’re a parent of special needs, someone who’s experiencing dissociation, or trying to move on from the past. We’ll work on coping tools for the day-to-day challenges, learning when it’s okay to delegate or seek outside help.
          </div>
          <div className="font-body pr-4 sm:pr-8 md:pr-12 lg:pr-25">
            I also believe in the power of effort and commitment within the therapy experience. If you’re willing to show up and do the work—just like I am—you can see profound changes in your life and understand how your past has shaped the way you see and feel about yourself. <br/> <br/>
            With over 20 years of experience in this field, I’ve had the privilege of working with people from all walks of life. My lived experiences empower me to connect with you in a genuine, personal way. With this kind of support, you can heal, regain confidence, and feel empowered in a way that maybe hasn’t seemed possible before. It’s okay to start where you are and take things one step at a time—you don’t have to do it alone. I will meet you wherever you are, help lift you up, and guide you toward a brighter future ahead.
             
          </div>
        </div>
      </div>
    </section>



  );
}