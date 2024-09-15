import React from "react";
import styles from "./footer.module.scss";
import facebookIcon from "../../../assets/socials/icons8-facebook.svg";
import instagramIcon from "../../../assets/socials/icons8-instagram.svg";
import youtubeIcon from "../../../assets/socials/icons8-youtube.svg";

interface FooterProps {
    // Define any props you need for the Footer component
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <>
            <footer className={styles.footer}>
                <section className={styles.footer__social}>
                    <div className={styles.footer__social__subscribe}>
                        <input
                            type="text"
                            placeholder="Sign up for enthralling couch reads"
                        />
                        <button>SUBSCRIBE</button>
                    </div>
                    <div className={styles.footer__social__media}>
                        <a href="https://www.facebook.com" target="_blank">
                            <img src={facebookIcon} alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank">
                            <img src={instagramIcon} alt="Instagram" />
                        </a>
                        <a href="https://www.youtube.com" target="_blank">
                            <img src={youtubeIcon} alt="Youtube" />
                        </a>
                    </div>
                </section>
                <section className={styles.footer__company}>
                    <div className={styles.footer__company__info}>
                        <div className={styles.footer__company__info__break}>
                            <span>Shopping Services</span>
                            <ul>
                                <li>
                                    <a href="index.html">
                                        Schedule Consultation
                                    </a>
                                </li>
                                <li>
                                    <a href="index.html">Showrooms</a>
                                </li>
                                <li>
                                    <a href="index.html">Trade Program</a>
                                </li>
                                <li>
                                    <a href="index.html">Outlet</a>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.footer__company__info__break}>
                            <span>About</span>
                            <ul>
                                <li>
                                    <a href="index.html">Our Story </a>
                                </li>
                                <li>
                                    <a href="index.html">Reviews</a>
                                </li>
                                <li>
                                    <a href="index.html">Careers</a>
                                </li>
                                <li>
                                    <a href="index.html">Financing</a>
                                </li>
                                <li>
                                    <a href="index.html">Patents</a>
                                </li>
                                <li>
                                    <a href="index.html">Our Blog</a>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.footer__company__info__break}>
                            <span>Resources</span>
                            <ul>
                                <li>
                                    <a href="index.html">
                                        Look Up Order Status
                                    </a>
                                </li>
                                <li>
                                    <a href="index.html">
                                        Assembly Instructions
                                    </a>
                                </li>
                                <li>
                                    <a href="index.html">Returns</a>
                                </li>
                                <li>
                                    <a href="index.html">Shipping & Delivery</a>
                                </li>
                                <li>
                                    <a href="index.html">FAQ</a>
                                </li>
                                <li>
                                    <a href="index.html">Refer a Friend</a>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.footer__company__info__break}>
                            <span>Contact Customer Experience</span>
                            <ul>
                                <li>
                                    <a href="index.html">
                                        Email: support@template.com
                                    </a>
                                </li>
                                <li>
                                    <a href="index.html">Text: 224-628-7769</a>
                                </li>
                                <li>
                                    <a href="index.html">Hours:</a>
                                </li>
                                <li>
                                    <a href="index.html">
                                        Monday to Friday — 10a to 8p EST
                                    </a>
                                </li>
                                <li>
                                    <a href="index.html">
                                        Saturday to Sunday — 10a to 2p EST
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.footer__company__legal}>
                        <span>© 2023 Template</span>
                        <ul>
                            <li>
                                <a href="index.html">Terms</a>
                            </li>
                            <li>-</li>
                            <li>
                                <a href="index.html">Accessibility</a>
                            </li>
                            <li>-</li>
                            <li>
                                <a href="index.html"> Sitemap</a>
                            </li>
                            <li>-</li>
                            <li>
                                <a href="index.html">Privacy</a>
                            </li>
                        </ul>
                        <span>
                            15 W 27th Street, 9th Floor New York, NY, 10001
                        </span>
                    </div>
                </section>
            </footer>
        </>
    );
};

export default Footer;
