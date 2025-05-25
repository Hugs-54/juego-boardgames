"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { title } from "process";

export default function ContactForm(props: {
  withTitle?: boolean;
  withTopShadow?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !subject || !message) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    setError("");
    const templateParams = {
      from_email: email,
      subject,
      message,
    };

    try {
      await emailjs.send(
        "service_vb0fxk7",
        "template_5cglrmm",
        templateParams,
        "z92xzu3GbuvuBUZLm"
      );
      setSuccess("Votre message a été envoyé !");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setError("Une erreur s'est produite lors de l'envoi.");
    }
  };

  return (
    <div
      className={`bg-[#58937E] flex flex-col items-center font-bree pb-6 sm:pb-6 md:pb-10 xl:pb-16 ${
        props.withTopShadow ? "shadow-bloc-top-phone sm:shadow-bloc-top" : ""
      } `}
    >
      {props.withTitle ? (
        <div className="my-4 sm:my-5 md:my-8 xl:my-12 text-center text-white font-bold text-2xl sm:text-4xl md:text-6xl xl:text-8xl">
          Nous contacter
        </div>
      ) : (
        <div className="mb-6 sm:mb-6 md:mb-10 xl:mb-16" />
      )}
      <form
        onSubmit={handleSubmit}
        className="w-11/12 max-w-2xl space-y-4 text-left text-white"
      >
        <div>
          <label className="md:text-2xl">
            Adresse email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            placeholder="Exemple : email@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 px-3 py-2 rounded-lg text-[#58937E] border-2 border-white focus:outline-none focus:border-[#58937E] md:text-2xl"
            required
          />
        </div>

        <div>
          <label className="md:text-2xl">
            Objet de votre message <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            placeholder="Exemple : Prise de contact"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full mt-1 px-3 py-2 rounded-lg text-[#58937E] border-2 border-white focus:outline-none focus:border-[#58937E] md:text-2xl"
            required
          />
        </div>

        <div>
          <label className="md:text-2xl">
            Message <span className="text-red-600">*</span>
          </label>
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            className="w-full mt-1 px-3 py-2 rounded-lg text-[#58937E] border-2 border-white focus:outline-none focus:border-[#58937E] md:text-2xl"
            required
          />
        </div>

        <p className="text-sm text-red-600 italic">*champs obligatoires</p>

        {error && <p className="text-red-600">{error}</p>}

        {success && <p className="text-white">{success}</p>}

        <div className="text-center">
          <button
            type="submit"
            className="bg-white text-[#58937E] py-3 px-8 rounded-xl hover:bg-gray-200 md:text-2xl"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}
