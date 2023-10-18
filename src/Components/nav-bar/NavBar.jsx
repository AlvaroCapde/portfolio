import React, { Component } from 'react';
import './NavBar.css';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { CloseSharp, MenuSharp } from '@mui/icons-material';

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        const maxHeight = window.innerHeight - 50;
        const scrollToTop = (Math.min(window.scrollY, maxHeight) / maxHeight);
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
            <div className='nav-bar' style={{ backgroundColor: 'rgba(0, 0, 0, ' + scrollToTop + ')', boxShadow: `0 2px 20px 0px rgba(0,0, 0, ${(scrollToTop * 0.25)})` }}>
                <h1 className='home-icon'>NavBar</h1>
                <div className={'nav-bar-btns' + (this.state.openedMenu ? ' opened' : '')}>
                    <IconButton className='menu-icon icon-close' onClick={this.handleMainMenuClick}>
                        <CloseSharp />
                    </IconButton>
                    <NavBarBtn label="Photography"> {/* Updated */}
                        <SubMenu>
                            <MenuItem>Option 1</MenuItem>
                            <MenuItem>Option 2</MenuItem>
                        </SubMenu>
                    </NavBarBtn>
                    <NavBarBtn label="Animation"> {/* Updated */}
                        <SubMenu>
                            <MenuItem>Option A</MenuItem>
                            <MenuItem>Option B</MenuItem>
                        </SubMenu>
                    </NavBarBtn>
                    <NavBarBtn label="About Me" className="no-hover" />
                    <NavBarBtn label="Contact" className="no-hover" />
                </div>
                <IconButton className='menu-icon' onClick={this.handleMainMenuClick}>
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
        };
    }

    handleMouseEnter = () => {
        this.setState({ isHovered: true });
    }

    handleMouseLeave = () => {
        this.setState({ isHovered: false });
    }
    render() {
        const { label, children } = this.props;
        const { isHovered } = this.state;
        return (
            <div className={`nav-bar-btn ${isHovered ? 'hovered' : ''}`} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                {label || children}
                {isHovered && children && <div className="submenu-content">{children}</div>}
            </div>
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
