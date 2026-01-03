import React from "react";
import { Play } from "lucide-react";
import { Button } from "../components/Button";
import { ViewState } from "../types";
import { useLanguage } from "../LanguageContext";

/* =======================
   📸 Local Images Imports
======================= */

// Mariage
import mariage1 from "../assets/portfolio/mariage/por2.jpg";
import mariage2 from "../assets/portfolio/corporate/corporate5.jpg";
import mariage3 from "../assets/portfolio/corporate/por4.jpg";

// Corporate
import corporate1 from "../assets/portfolio/corporate/corporate1.jpg";
import corporate2 from "../assets/portfolio/corporate/seminaire2.jpg";
import corporate3 from "../assets/portfolio/corporate/seminaire1.jpg";

// Drone
import drone1 from "../assets/portfolio/drone/drone1.jpg";
import drone2 from "../assets/portfolio/drone/drone2.jpg";
import drone3 from "../assets/portfolio/corporate/por1.jpg";

/* =======================
   📦 Types
======================= */

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  type: "photo" | "video";
}

interface PortfolioProps {
  setView: (view: ViewState) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ setView }) => {
  const { t } = useLanguage();

  /* =======================
     📁 Portfolio Items
  ======================= */

  const ITEMS: PortfolioItem[] = [
    // 💍 Mariage
    {
      id: 1,
      title: "Mariage Élégant",
      category: t("portfolio_page.categories.wedding"),
      image: mariage1,
      type: "photo",
    },
    {
      id: 2,
      title: "Cérémonie",
      category: t("portfolio_page.categories.wedding"),
      image: mariage2,
      type: "video",
    },
    {
      id: 3,
      title: "Réception",
      category: t("portfolio_page.categories.wedding"),
      image: mariage3,
      type: "photo",
    },

    // 🏢 Corporate
    {
      id: 4,
      title: "Événement Corporate",
      category: t("portfolio_page.categories.corporate"),
      image: corporate1,
      type: "photo",
    },
    {
      id: 5,
      title: "Interview Professionnelle",
      category: t("portfolio_page.categories.corporate"),
      image: corporate2,
      type: "video",
    },
    {
      id: 6,
      title: "Séminaire",
      category: t("portfolio_page.categories.corporate"),
      image: corporate3,
      type: "photo",
    },

    // 🚁 Drone
    {
      id: 7,
      title: "Vue Aérienne",
      category: t("portfolio_page.categories.drone"),
      image: drone1,
      type: "video",
    },
    {
      id: 8,
      title: "Prise de Vue Drone",
      category: t("portfolio_page.categories.drone"),
      image: drone3,
      type: "photo",
    },
    {
      id: 9,
      title: "Survol Événement",
      category: t("portfolio_page.categories.drone"),
      image: drone2,
      type: "photo",
    },

    // // Corporate
    // {
    //   id: 10,
    //   title: "Vue Aérienne",
    //   category: t("portfolio_page.categories.drone"),
    //   image: drone1,
    //   type: "video",
    // },
    // {
    //   id: 11,
    //   title: "Prise de Vue Drone",
    //   category: t("portfolio_page.categories.drone"),
    //   image: drone2,
    //   type: "photo",
    // },
    // {
    //   id: 12,
    //   title: "Survol Événement",
    //   category: t("portfolio_page.categories.drone"),
    //   image: drone3,
    //   type: "video",
    // },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* 🏷️ Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            {t("portfolio_page.title")}
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t("portfolio_page.subtitle")}
          </p>
        </div>

        {/* 🖼️ Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer bg-gray-900"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-brand-yellow text-xs font-bold uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="text-white font-bold text-xl">{item.title}</h3>
              </div>

              {/* ▶ Video Icon */}
              {item.type === "video" && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-black transition-all">
                  <Play size={20} fill="currentColor" className="ml-1" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 📞 CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">{t("portfolio_page.cta_text")}</p>
          <Button onClick={() => setView("contact")}>
            {t("portfolio_page.cta_btn")}
          </Button>
        </div>
      </div>
    </div>
  );
};
