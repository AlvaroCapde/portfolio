import React, { Component } from 'react';
import './NavBar.css';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { CloseSharp, MenuSharp, Add } from '@mui/icons-material';
import '../../styles.css';

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        let maxHeight = 0;
        let scrollToTop = 0;

        if (typeof window !== 'undefined') {
            maxHeight = window.innerHeight - 50;
            scrollToTop = (Math.min(window.scrollY, maxHeight) / maxHeight);
        }

        this.state = {
            scrollToTop: scrollToTop,
            openedMenu: false, // for the main menu
        };
        this.onScroll = this.onScroll.bind(this);
    }

    onScroll() {
        const maxHeight = window.innerHeight - 50;
        const scrollTotop = (Math.min(window.scrollY, maxHeight) / maxHeight);
        this.setState({ scrollToTop: scrollTotop });
    }

    componentDidMount() {
        document.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScroll);
    }

    handleMainMenuClick = () => {
        this.setState({ openedMenu: !this.state.openedMenu });
    }

    render() {
        const { scrollToTop } = this.state;

        return (

            <div className='nav-bar page-title-navbar  '>

                <a href="/manuel/about"><img src="/logo.png" className="nav-bar-img"></img></a>
                <div className={`nav-bar-btns ${this.state.openedMenu ? 'opened' : ''}`}>
                    <IconButton className='menu-icon icon-close' onClick={this.handleMainMenuClick} disableRipple>
                        <CloseSharp />
                    </IconButton>
                   
                  <NavBarBtn label="Photography" hasSubMenu disableRipple>
                        <SubMenu>

                        <div className='submenu-content'>
                            <br />
   <a href="/manuel/photography/weddings" >Weddings</a>
                            <br />
                            <br />
   <a href="/manuel/photography/conferences" >Conferences</a>

                            <br />
                            <br />
                            <a href="/manuel/photography/portraits" >Portraits</a>
                </div>

                        </SubMenu>
                    </NavBarBtn>
                    <NavBarBtn label="Animation" hasSubMenu disableRipple >
                        <SubMenu disableRipple>
                        <div className='submenu-content'>
                            <br />
                        <a href="/manuel/animation/renders"  >Renders</a>
                        <br />
                            <br />
                        <a href="/manuel/animation/drawings" >Drawings</a>
                        </div>

                        </SubMenu>
                    </NavBarBtn>
                  
                    <NavBarBtn label="Contact" className="no-hover" href="/manuel/contact/" disableRipple> </NavBarBtn>
                </div>


                <IconButton className='menu-icon' onClick={this.handleMainMenuClick} disableRipple>
                    <MenuSharp />
                </IconButton>
            </div>
        );
    }
}

class NavBarBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
            expanded: false, 
        };
    }

    handleMouseEnter = () => {
        this.setState({ isHovered: true });
    }

    handleMouseLeave = () => {
        this.setState({ isHovered: false });
    }

    handleSubMenuClick = () => {
        this.setState({ expanded: !this.state.expanded });
    }

    render() {
        const { label, children, hasSubMenu } = this.props;
        const { isHovered, expanded } = this.state;


        const isNarrowScreen = window.innerWidth < 40 * 16;

        return (
            <a href={this.props.href} className={`nav-bar-btn ${isHovered ? 'hovered' : ''}`} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                {label || children}

                {hasSubMenu && isNarrowScreen && (
                    <IconButton className="submenu-toggle" onClick={this.handleSubMenuClick} >
                        {expanded ? <CloseSharp /> : <Add disableRipple/>}
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

}

function SubMenu({ children }) {
    return (
        <div className="submenu-content">
            <div className="submenu-content-bg">{children}</div>
        </div>
    );
}