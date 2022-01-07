import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { GlobalStyle } from "./styles/GlobalStyles"
import CookieConsent from "react-cookie-consent"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />

      <main>{children}</main>
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
      >
        <h4>เว็บไซต์นี้ใช้คุกกี้</h4>
เราใช้คุกกี้เพื่อเพิ่มประสิทธิภาพ และประสบการณ์ที่ดีในการใช้งานเว็บไซต์ คุณสามารถเลือกตั้งค่าความยินยอมการใช้คุกกี้ได้ โดยคลิก "การตั้งค่าคุกกี้"นโยบายความเป็นส่วนตัว
      </CookieConsent>
    </>
  )
}

export default Layout
