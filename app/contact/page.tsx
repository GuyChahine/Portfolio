"use client";

import Menu from "@/components/menu";
import Footer from "@/components/footer";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import SectionContainer from "@/components/oposite_gradient_container";
import { ContactData } from "@/data/setup";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

function ContactIntroduction() {
  return (
    <div className="mt-32 margins !max-w-screen-md !pb-6">
      <h2>Contact Me</h2>
      <p className="mt-6">{ContactData.page_description}</p>
    </div>
  );
}

type ContactFormData = z.infer<typeof contactFormSchema>;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await sleep(2000);
    console.log(data);
    setStatus("Message sent successfully!");
    reset();
  };

  return (
    <div className="margins w-full !max-w-screen-md !pt-6">
      <form className="space-y-6 w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="contact_form_divs">
          <label>Name</label>
          <input
            className={errors.name ? "!border-error" : ""}
            type="text"
            autoComplete="off"
            placeholder="Your name"
            {...register("name")}
          />
          {errors.name ? (
            <p className="text-error">{errors.name.message}</p>
          ) : null}
        </div>
        <div className="contact_form_divs">
          <label>Email</label>
          <input
            className={errors.email ? "!border-error" : ""}
            type="text"
            autoComplete="off"
            placeholder="your.email@example.com"
            {...register("email")}
          />
          {errors.email ? (
            <p className="text-error">{errors.email.message}</p>
          ) : null}
        </div>
        <div className="contact_form_divs">
          <label>Message</label>
          <textarea
            className={`min-h-32 ${errors.message ? "!border-error" : ""}`}
            placeholder="Your message..."
            {...register("message")}
          />
          {errors.message ? (
            <p className="text-error">{errors.message.message}</p>
          ) : null}
        </div>
        <button
          className="buttons w-full disabled:bg-secondary/70 disabled:hover:bg-secondary/70"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        {status ? <p className="text-center text-success">{status}</p> : null}
      </form>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Menu />
      <SectionContainer bg_gradient={true} className="flex-grow">
        <ContactIntroduction />
        <ContactForm />
      </SectionContainer>
      <Footer />
    </div>
  );
}
