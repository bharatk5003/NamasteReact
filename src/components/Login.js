import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
// import { SITE_KEY } from "../utils/constants";
const SITE_KEY = "abcd";

// keep in .env

export default function Login() {
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleCaptcha = (token) => {
    console.log("Captcha token generated:", token);
    setCaptchaToken(token);
  };

  const handleLogin = () => {
    if (!captchaToken) {
      alert("Please complete the captcha before login.");
      return;
    }

    // 🔹 Here you could send token to backend
    console.log("Submitting login with captcha:", captchaToken);
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" />
      <input type="password" placeholder="Password" />

      {/* Captcha appears when rendering */}
      <ReCAPTCHA sitekey={SITE_KEY} onChange={handleCaptcha} />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
