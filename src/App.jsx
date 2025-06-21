import { useState } from "react";
import Nav from "./components/nav";
import Body from "./components/hero";
import About from "./components/about";
import Latest from "./components/latest";
import iconOnline from "../src/assets/images/icon-online.svg";
import iconBudgeting from "../src/assets/images/icon-budgeting.svg";
import iconOnboarding from "../src/assets/images/icon-onboarding.svg";
import iconApi from "../src/assets/images/icon-api.svg";
import currencyPic from "../src/assets/images/image-currency.jpg";
import restaurantPic from "../src/assets/images/image-restaurant.jpg";
import planePic from "../src/assets/images/image-plane.jpg";
import confettiPic from "../src/assets/images/image-confetti.jpg";
import Footer from "./components/footer";

function App() {
  const [about, setAbout] = useState([
    {
      info: " Online Banking",
      about:
        "  Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      icon: iconOnline,
    },
    {
      info: "Simple Budgeting ",
      about:
        "  See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
      icon: iconBudgeting,
    },
    {
      info: "Fast Onboarding ",
      about:
        "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
      icon: iconOnboarding,
    },
    {
      info: " Open API",
      about:
        " Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
      icon: iconApi,
    },
  ]);

  const [latest, setlatest] = useState([
    {
      image: currencyPic,
      author: "By Claire Robinson",
      title: "Receive money in any currency with no fees",
      news: " The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single…",
    },
    {
      image: restaurantPic,
      author: "By Wilson Hutton",
      title: "Treat yourself without worrying about money",
      news: " Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    },
    {
      image: planePic,
      author: "By Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      news: " We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    },
    {
      image: confettiPic,
      author: "By Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      news: " After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    },
  ]);

  return (
    <>
      <div className="m-0 p-0 w-full overflow-hidden ">
        <Nav />

        <Body />

        <About items={about} />

        <Latest news={latest} />
        <Footer />
      </div>
    </>
  );
}

export default App;
