import equipment from "../../images/equipments.jpg";
import trainer from "../../images/personal trainer.svg";
import person from "../../images/person1.jpg";
import register from "../../images/register.svg";

export const aboutData = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "5 Star Gym Next To You!",
  headLine: "Where Fitness Becomes Yor Lifestyle",
  description:
    "Join us now and get to make Fitness Becomes part of Your Lifestyle for a very cheap mothly subscription fee! I swear you are gonna love it here",
  buttonLabel: "Get started",
  imgStart: false,
  img: equipment,
  alt: "gym",
  dark: true,
  primary: true,
  darkText: false,
};

export const servivesData = {
  id: "trainers",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Private coaching",
  headLine: "Meet our trainers",
  description:
    "All our trainers have over 30 years of experience combined. Each trainer specializes in strength and mobility workouts",
  buttonLabel: "Learn More",
  imgStart: true,
  img: trainer,
  alt: "person",
  dark: false,
  primary: false,
  darkText: true,
};
export const benefitsSection = {
  id: "benefits",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "benefits of workout",
  headLine: "Why you should workout",
  description:
    "Workout can help you to build your confidence, boost your mood and increase energy levels",
  buttonLabel: "Start Now",
  imgStart: false,
  img: person,
  alt: "gym",
  dark: true,
  primary: true,
  darkText: false,
};
export const signUp = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Join our team",
  headLine: "Creating an account is extremely easy",
  description:
    "Get everything setup and and ready in under 1 minute. All you need to do is add your information and you are ready to go.",
  buttonLabel: "Start Now",
  imgStart: true,
  img: register,
  alt: "sign up",
  dark: false,
  primary: false,
  darkText: true,
};
