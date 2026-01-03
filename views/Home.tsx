import React from "react";
import { ViewState } from "../types";
import { getServices, CLIENTS } from "../constants";
import { Button } from "../components/Button";
import { ServiceCard } from "../components/ServiceCard";
import { ChevronRight, Star } from "lucide-react";
import { useLanguage } from "../LanguageContext";

import backgroundImage from "../assets/images/fond_Couleur.jpg";
import video from "../assets/video/Séquence.mp4";

interface HomeProps {
  setView: (view: ViewState) => void;
}

export const Home: React.FC<HomeProps> = ({ setView }) => {
  const { t, language } = useLanguage();
  const services = getServices(language);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image/Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt="Camera Operator"
            className="relative rounded-xl shadow-2xl border border-gray-800 w-full"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-8 px-4 py-1 border border-brand-yellow/30 rounded-full bg-black/40 backdrop-blur-md">
            <span className="text-brand-yellow font-medium text-sm tracking-wider uppercase">
              {t("hero.microcopy")}
            </span>
          </div>

          <div className="flex justify-center mb-10">
            <div className="relative p-6 md:p-10">
              {/* Top Left Bracket */}
              <div className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24 border-t-[8px] border-l-[8px] border-brand-yellow"></div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight flex flex-col items-center text-center relative z-10 px-4">
                <span className="mb-2 md:mb-4">{t("hero.title_start")}</span>
                <span className="text-brand-yellow">{t("hero.title_end")}</span>
              </h1>

              {/* Bottom Right Bracket */}
              <div className="absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24 border-b-[8px] border-r-[8px] border-brand-yellow"></div>
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => setView("contact")}
              className="w-full md:w-auto"
            >
              {t("hero.cta_primary")}
            </Button>
            <Button
              variant="outline"
              onClick={() => setView("portfolio")}
              className="w-full md:w-auto group"
            >
              <span>{t("hero.cta_secondary")}</span>
              <ChevronRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
          <div className="w-0.5 h-16 bg-gradient-to-b from-transparent via-brand-yellow to-transparent" />
        </div>
      </section>

      {/* Intro / Value Prop */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-yellow/20 rounded-xl blur-xl" />
              {/* <img
                src="https://picsum.photos/800/800?random=10"
                alt="Camera Operator"
                className="relative rounded-xl shadow-2xl border border-gray-800 w-full"
              /> */}
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="relative rounded-xl shadow-2xl border border-gray-800 w-full"
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute -bottom-6 -right-6 bg-brand-yellow p-6 rounded-lg shadow-xl hidden md:block">
                <p className="font-bold text-black text-lg">
                  {t("intro.badge_title")}
                </p>
                <p className="text-black/80 text-sm">{t("intro.badge_sub")}</p>
              </div>
            </div>
            <div>
              <div className="relative inline-block pl-8 pt-8 pr-8 pb-8 mb-6">
                {/* Top Left Bracket */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-[6px] border-l-[6px] border-brand-yellow"></div>

                <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight max-w-lg">
                  <span className="block text-white mb-2">
                    {t("intro.title_start")}
                  </span>
                  <span className="block text-brand-yellow">
                    {t("intro.title_end")}
                  </span>
                </h2>

                {/* Bottom Right Bracket */}
                <div className="absolute bottom-0 right-20 w-12 h-12 border-b-[6px] border-r-[6px] border-brand-yellow"></div>
              </div>
              {/* <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block">
                {t("intro.title_start")}
                <span className="block text-brand-yellow mt-2">
                  {t("intro.title_end")}
                </span>
              </h2> */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {t("intro.description")}
              </p>
              <ul className="space-y-4 mb-8">
                {t("intro.points").map((item: string, i: number) => (
                  <li key={i} className="flex items-center text-gray-200">
                    <span className="bg-brand-yellow/10 p-1 rounded-full mr-3 text-brand-yellow">
                      <Star size={14} fill="currentColor" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="secondary" onClick={() => setView("about")}>
                {t("intro.cta")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {t("home_services.title")}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t("home_services.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" onClick={() => setView("services")}>
              {t("home_services.cta")}
            </Button>
          </div>
        </div>
      </section>

      {/* Trust / Clients (Dynamic Marquee) */}
      <section className="py-20 bg-brand-gray border-y border-gray-800 overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
            {t("clients.title")}
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-brand-gray to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-brand-gray to-transparent pointer-events-none"></div>

          <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
            {/* Original Set */}
            <div className="flex space-x-16 mx-8">
              {CLIENTS.map((client, idx) => (
                <div
                  key={`a-${idx}`}
                  className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
                  title={client.name}
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} Logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Duplicate Set for Seamless Loop */}
            <div className="flex space-x-16 mx-8">
              {CLIENTS.map((client, idx) => (
                <div
                  key={`b-${idx}`}
                  className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
                  title={client.name}
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} Logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-yellow">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-black mb-6">
            {t("cta_section.title")}
          </h2>
          <p className="text-black/80 text-xl max-w-2xl mx-auto mb-10 font-medium">
            {t("cta_section.subtitle")}
          </p>
          <div className="flex justify-center">
            <Button
              className="bg-black text-white hover:bg-gray-800 border-none px-8 py-4 text-lg shadow-2xl"
              onClick={() => setView("contact")}
            >
              {t("cta_section.button")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
