import { Service } from "./types";
import { Language } from "./types";
import tournageVideo from "./assets/images/Tournage_Video_Professionnel_copie.jpg";
import montage from "./assets/images/Montage & Post-Production copie.jpg";
import drone from "./assets/images/DroneetPrisesdeVueAeriennes copie.jpg";
import streaming from "./assets/images/StreamingetCaptationLive copie.jpg";
import lumiere from "./assets/images/LumièreeteclairageScenique copie.jpg";
import son from "./assets/images/SonorisationetSolutionsAudio copie.jpg";
import dj from "./assets/images/DJ&AnimationMusicale copie 2.jpg";
import photo from "./assets/images/PhotographieProfessionnelle copie.jpg";
import digital from "./assets/images/DigitaletContenusRéeseauxSociaux copie.jpg";
import m from "./assets/logo/2m.png";
import atelier_vert from "./assets/logo/atelier-vert.png";
import atomy from "./assets/logo/atomy.png";
import boston_scientific from "./assets/logo/boston-scientific.png";
import mcl from "./assets/logo/mcl.png";
import mfc from "./assets/logo/mfc.png";
import sothema from "./assets/logo/sothema.png";
import morocco_roleplay from "./assets/logo/morocco-roleplay.png";
import mea_distribution from "./assets/logo/mea-distribution.png";

import {
  Video,
  Film,
  Aperture,
  Radio,
  Mic2,
  Music,
  Lightbulb,
  Share2,
  Camera,
} from "lucide-react";

export const BRAND_NAME = "SoraProEvent";
export const CONTACT_PHONE = "07 24 39 06 56";
export const CONTACT_EMAIL = "Soraproevent1@Gmail.com";
export const CONTACT_ADDRESS =
  "55 Boulevard Zerktouni Espace Zerktouni 1er Etage N° 3, Casablanca, Maroc";

export const SOCIAL_LINKS = {
  instagram: "http://instagram.com/soraevent1/",
  linkedin: "https://www.linkedin.com/in/sora-event-6b1694354/",
};

export const getServices = (lang: Language): Service[] => {
  const isFr = lang === "fr";

  return [
    {
      id: "video",
      title: isFr
        ? "Tournage Vidéo Professionnel"
        : "Professional Video Shooting",
      description: isFr
        ? "Nous assurons des tournages adaptés à tous types de projets, du film institutionnel aux événements privés."
        : "We provide filming adapted to all types of projects, from corporate films to private events.",
      features: isFr
        ? [
            "Films institutionnels et corporate",
            "Publicités & campagnes de marque",
            "Vidéos promotionnelles & storytelling",
            "Captation d'événements privés et publics",
            "Interviews, portraits et reportages",
          ]
        : [
            "Corporate & institutional films",
            "Ads & brand campaigns",
            "Promotional videos & storytelling",
            "Private & public event coverage",
            "Interviews, portraits & reports",
          ],
      image: tournageVideo,
      icon: Video,
    },
    {
      id: "montage",
      title: isFr ? "Montage & Post-Production" : "Editing & Post-Production",
      description: isFr
        ? "Le montage est l'élément clé qui transforme les images en message percutant."
        : "Editing is the key element that transforms footage into a powerful message.",
      features: isFr
        ? [
            "Montage narratif et dynamique",
            "Étalonnage couleur professionnel",
            "Habillage graphique & animations",
            "Sound design & mixage audio",
            "Déclinaisons multi-formats (TV, web, réseaux sociaux)",
          ]
        : [
            "Narrative & dynamic editing",
            "Professional color grading",
            "Motion graphics & animations",
            "Sound design & audio mixing",
            "Multi-format adaptation (TV, web, social media)",
          ],
      image: montage,
      icon: Film,
    },
    {
      id: "drone",
      title: isFr ? "Drone & Prises de Vue Aériennes" : "Drone & Aerial Shots",
      description: isFr
        ? "Apportez une dimension spectaculaire à vos contenus avec des images aériennes immersives."
        : "Bring a spectacular dimension to your content with immersive aerial imagery.",
      features: isFr
        ? [
            "Plans aériens cinématographiques",
            "Valorisation de sites, événements et projets immobiliers",
            "Images immersives et innovantes",
            "Pilotes certifiés",
            "Qualité Full HD / 4K",
          ]
        : [
            "Cinematic aerial shots",
            "Site, event & real estate showcase",
            "Immersive & innovative images",
            "Certified pilots",
            "Full HD / 4K Quality",
          ],
      image: drone,
      icon: Aperture,
    },
    {
      id: "streaming",
      title: isFr ? "Streaming & Captation Live" : "Streaming & Live Coverage",
      description: isFr
        ? "Nous diffusons vos événements en direct avec une qualité professionnelle."
        : "We broadcast your events live with professional quality.",
      features: isFr
        ? [
            "Conférences & séminaires",
            "Lancements de produits",
            "Événements institutionnels et culturels",
            "Multi-caméras & régie live",
            "Interaction en temps réel",
          ]
        : [
            "Conferences & seminars",
            "Product launches",
            "Institutional & cultural events",
            "Multi-camera & live control room",
            "Real-time interaction",
          ],
      image: streaming,
      icon: Radio,
    },
    {
      id: "lumiere",
      title: isFr ? "Lumière & Éclairage Scénique" : "Lighting & Stage Design",
      description: isFr
        ? "La maîtrise de la lumière transforme l'image et l'ambiance de votre événement."
        : "Mastery of light transforms the image and atmosphere of your event.",
      features: isFr
        ? [
            "Éclairage cinéma et studio",
            "Mise en valeur de décors et de scènes",
            "Ambiances adaptées à chaque projet",
            "Coordination lumière / image / son",
          ]
        : [
            "Cinema & studio lighting",
            "Set & stage enhancement",
            "Atmospheres adapted to each project",
            "Light / image / sound coordination",
          ],
      image: lumiere,
      icon: Lightbulb,
    },
    {
      id: "son",
      title: isFr
        ? "Sonorisation & Solutions Audio"
        : "Sound & Audio Solutions",
      description: isFr
        ? "Le son est essentiel à l'expérience. Nous garantissons clarté et équilibre."
        : "Sound is essential to the experience. We guarantee clarity and balance.",
      features: isFr
        ? [
            "Sonorisation d'événements",
            "Micros HF & filaires",
            "Gestion audio live",
            "Enregistrement et diffusion",
          ]
        : [
            "Event sound systems",
            "Wireless & wired microphones",
            "Live audio management",
            "Recording & broadcasting",
          ],
      image: son,
      icon: Mic2,
    },
    {
      id: "dj",
      title: isFr ? "DJ & Animation Musicale" : "DJ & Musical Entertainment",
      description: isFr
        ? "Nous créons l'ambiance sonore parfaite pour vos événements."
        : "We create the perfect sound atmosphere for your events.",
      features: isFr
        ? [
            "DJ professionnels",
            "Sélection musicale sur mesure",
            "Animation moderne et élégante",
            "Coordination avec le timing événementiel",
          ]
        : [
            "Professional DJs",
            "Tailored music selection",
            "Modern & elegant entertainment",
            "Coordination with event timing",
          ],
      image: dj,
      icon: Music,
    },
    {
      id: "photo",
      title: isFr ? "Photographie Professionnelle" : "Professional Photography",
      description: isFr
        ? "L'image fixe reste un pilier de la communication. Des images élégantes et naturelles."
        : "Still images remain a pillar of communication. Elegant and natural photos.",
      features: isFr
        ? [
            "Photographie événementielle",
            "Portraits corporate & professionnels",
            "Produits, packshots & lifestyle",
            "Retouches et colorimétrie soignées",
          ]
        : [
            "Event photography",
            "Corporate & professional portraits",
            "Products, packshots & lifestyle",
            "Careful retouching & color grading",
          ],
      image: photo,
      icon: Camera,
    },
    {
      id: "digital",
      title: isFr ? "Digital & Réseaux Sociaux" : "Digital & Social Media",
      description: isFr
        ? "Nous créons des contenus pensés pour le digital et la performance."
        : "We create content designed for digital and performance.",
      features: isFr
        ? [
            "Vidéos courtes (Reels, Shorts, Stories)",
            "Contenus publicitaires digitaux",
            "Adaptation aux codes des plateformes",
            "Optimisation du format et du rythme",
          ]
        : [
            "Short videos (Reels, Shorts, Stories)",
            "Digital advertising content",
            "Adaptation to platform codes",
            "Format & rhythm optimization",
          ],
      image: digital,
      icon: Share2,
    },
  ];
};

/* 
   To use your local logos:
   1. Place your PNG files in the public/logos/ folder
   2. Uncomment the paths below and remove the placeholder URLs
*/

export const CLIENTS: Client[] = [
  {
    name: "2m",
    // logo: "/logos/atelier-vert.png"
    logo: m,
  },
  {
    name: "Atelier Vert",
    // logo: "/logos/atelier-vert.png"
    logo: atelier_vert,
  },
  {
    name: "Boston Scientific",
    // logo: "/logos/boston-scientific.png"
    logo: boston_scientific,
  },
  {
    name: "Sothema",
    // logo: "/logos/sothema.png"
    logo: sothema,
  },
  {
    name: "Morocco Roleplay",
    // logo: "/logos/morocco-roleplay.png"
    logo: morocco_roleplay,
  },
  {
    name: "AtomY",
    // logo: "/logos/atomy.png"
    logo: atomy,
  },
  {
    name: "MFC",
    // logo: "/logos/mfc.png"
    logo: mfc,
  },
  {
    name: "MEA Distribution",
    // logo: "/logos/mea-distribution.png"
    logo: mea_distribution,
  },
  {
    name: "Moroccan Combat League",
    // logo: "/logos/mcl.png"
    logo: mcl,
  },
];
