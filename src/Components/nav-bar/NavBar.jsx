import React, { useEffect, useState } from 'react';
import './NavBar.css';
import { IconButton } from '@mui/material';
import { CloseSharp, MenuSharp, Add } from '@mui/icons-material';
import '../../styles.css';

export default function NavBar() {
    const [scrollToTop, setScrollToTop] = useState(0);
    const [openedMenu, setOpenedMenu] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const maxHeight = window.innerHeight - 50;
            const scrollTotop = Math.min(window.scrollY, maxHeight) / maxHeight;
            setScrollToTop(scrollTotop);
        };

        document.addEventListener('scroll', onScroll);

        return () => {
            document.removeEventListener('scroll', onScroll);
        };
    }, []);

    const handleMainMenuClick = () => {
        setOpenedMenu(!openedMenu);
    };

    return (
        <div className='nav-bar page-title-navbar drop-shadow-2xl'>
            <a href="/manuel"><img src="/logo.png" className="nav-bar-img" alt="Logo" /></a>
            <div className={`nav-bar-btns ${openedMenu ? 'opened' : ''}`}>
                <IconButton className='menu-icon icon-close' onClick={handleMainMenuClick} disableRipple>
                    <CloseSharp />
                </IconButton>
                <NavBarBtn label="Photography" href="/manuel/photography/" hasSubMenu disableRipple>
                    <SubMenu>
                        <div className='submenu-content submenu-drop-shadow'>
                            <br />
                            <a href="/manuel/photography/weddings">Weddings</a>
                            <br />
                            <br />
                            <a href="/manuel/photography/conferences">Conferences</a>
                            <br />
                            <br />
                            <a href="/manuel/photography/portraits">Portraits</a>
                        </div>
                    </SubMenu>
                </NavBarBtn>
                <NavBarBtn label="Animation" hasSubMenu disableRipple>
                    <SubMenu disableRipple>
                        <div className='submenu-content submenu-drop-shadow'>
                            <br />
                            <a href="/manuel/animation/renders">Renders</a>
                        </div>
                    </SubMenu>
                </NavBarBtn>
                <NavBarBtn label="Contact" className="no-hover" href="/manuel/contact/" disableRipple></NavBarBtn>
            </div>
            <IconButton className='menu-icon' onClick={handleMainMenuClick} disableRipple>
                <MenuSharp />
            </IconButton>
        </div>
    );
}

function NavBarBtn(props) {
    const [isHovered, setIsHovered] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const handleSubMenuClick = () => {
        setExpanded(!expanded);
    }

    const { label, children, hasSubMenu } = props;
    const isNarrowScreen = typeof window !== 'undefined' && window.innerWidth < 40 * 16;

    return (
        <a href={props.href} className={`nav-bar-btn ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {label || children}
            {hasSubMenu && isNarrowScreen && (
                <IconButton className="submenu-toggle" onClick={handleSubMenuClick}>
                    {expanded ? <CloseSharp /> : <Add disableRipple />}
                </IconButton>
            )}
            {children && expanded && (
                <div className="submenu-content">{children}</div>
            )}
            {isHovered && children && !isNarrowScreen && (
                <div className="submenu-content">{children}</div>
            )}
        </a>
    );
}

function SubMenu({ children }) {
    return (
        <div className="submenu-content">
            <div className="submenu-content-bg">{children}</div>
        </div>
    );
}
