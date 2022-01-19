import React from "react";
import { TopSectionWrapper, TopSectionCol } from "./style";
import Link from "next/link";
import Image from "next/image";
import StyledLink from "../../../core-ui/styled-link";
import { FiInstagram } from "react-icons/fi";
import { FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
import { SiAparat } from "react-icons/si";

const TopSection = () => {
  return (
    <TopSectionWrapper>
      <TopSectionCol className="hrefp-section-col">
        <h4 className="section-col__title">شبکه های اجتماعی</h4>
        <h6 className="section-col__subtitle">
          با ما از طریق شبکه های اجتماعی در ارتباط باشید
        </h6>
        <div className="section-col-row">
          <Link href="https://www.instagram.com">
            <a className="col-row__icon">
              <FiInstagram />
            </a>
          </Link>
          <Link href="https://www.instagram.com">
            <a className="col-row__icon">
              <FaTelegramPlane />
            </a>
          </Link>
          <Link href="https://www.instagram.com">
            <a className="col-row__icon">
              <SiAparat />
            </a>
          </Link>
          <Link href="https://www.instagram.com">
            <a className="col-row__icon">
              <FaLinkedinIn />
            </a>
          </Link>
        </div>
      </TopSectionCol>
      <TopSectionCol className="hrefp-section-col">
        <h4 className="section-col__title">سرویس ها</h4>
        <StyledLink className="section-col__link" href="/products-categories">
          محصولات
        </StyledLink>
        <StyledLink className="section-col__link" href="/blog">
          وبلاگ
        </StyledLink>
        <StyledLink className="section-col__link" href="/services">
          خدمات
        </StyledLink>
      </TopSectionCol>
      <TopSectionCol className="hrefp-section-col">
        <h4 className="section-col__title">اطلاعات</h4>
        <StyledLink className="section-col__link" href="/events">
          رویداد ها
        </StyledLink>
        <StyledLink className="section-col__link" href="/about">
          درباره ما
        </StyledLink>
        <StyledLink className="section-col__link" href="/contact-us">
          تماس با ما
        </StyledLink>
      </TopSectionCol>
      <TopSectionCol className="hrefp-section-col">
        <h4 className="section-col__title">تماس با ما</h4>
        <p className="section-col__text">
          آدرس : فلکه دوم صادقیه خیابان ولیعصر - خیابان اعتمادیان پلاک 36 واحد 2
        </p>
        <p className="section-col__text">
          کد پستی : <span style={{ fontFamily: "Poppins" }}>1481795174</span>
        </p>
      </TopSectionCol>
      <TopSectionCol className="hrefp-section-col namad-col">
        <StyledLink href="/" className="section-col__image">
          <Image
            src="/image/Contact/namad-electronic.png"
            alt="نماد الکترونیک"
            width={85}
            height={85}
            layout="fixed"
          />
        </StyledLink>
      </TopSectionCol>
    </TopSectionWrapper>
  );
};

export default TopSection;
