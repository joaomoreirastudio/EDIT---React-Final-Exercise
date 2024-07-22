import style from "../NavBar/NavBar.module.scss";
const NavBar = () => {
    return (
        <>
            <nav className={style.navbar__container}>
                <div className="navbar__logo">Logo</div>
                <div className={style.navbar__menu}>hamburguer</div>
            </nav>
        </>
    );
};

export default NavBar;
