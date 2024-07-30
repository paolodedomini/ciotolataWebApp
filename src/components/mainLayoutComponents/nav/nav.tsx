"use client";
import Image from "next/image";
import Link from "next/link";
import style from "./nav.module.scss";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import navigation from "../../../../public/data/navigation.json";

function NavBar() {
  const pathN = usePathname();
  const locale = useLocale();
  const [mobile, setMobile] = useState(false);
  const t = navigation[locale as keyof typeof navigation];

  function isHome() {
    if (pathN === "/" + locale) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    setMobile(false);
  }, [pathN]);

  return (
    <header
      className={`${style.header} ${isHome() ? style.header__home : null}`}
    >
      <nav className={style.mainNavBar}>
        <div className={style.mainNavBar__logo}>
          <Link href="/">
            {isHome() ? (
              <Image
                src="/image/logo.svg"
                width={437}
                height={108}
                alt="logo"
              />
            ) : (
              <Image src="/image/logo.svg" width={300} height={58} alt="logo" />
            )}
          </Link>
        </div>

        <div
          className={`${style.burger} ${
            isHome() ? style.burger__home : style.burger__inner
          }`}
          onClick={() => setMobile(true)}
        >
          <RxHamburgerMenu />
        </div>
        <AnimatePresence>
          {mobile && (
            <motion.div
              key="mobileMenu"
              className={style.navMobile}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div
                className={style.navMobile__close}
                onClick={() => setMobile(false)}
              >
                <RxCross2 />
              </div>
              <a href="/">
                <Image
                  src="/image/logo.svg"
                  width={220}
                  height={40}
                  alt="logo"
                />
              </a>

              <ul className={style.navMobile__nav}>
                {t.map((item, index) => (
                  <li
                    className={`${
                      pathN.includes(item.url || "") && style.activeLink
                    }`}
                    key={index}
                  >
                    <Link href={item.url || ""}>{item.name}</Link>
                  </li>
                ))}
              </ul>
              <hr style={{ width: "50%" }} />
              <div className={style.navMobile__generic}>
                Via della Stazione 27, Barga - 0583 711372 - info@vtservices.it
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
export default NavBar;
