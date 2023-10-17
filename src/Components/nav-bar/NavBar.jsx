import React, { Component } from 'react';
import './NavBar.css';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { CloseSharp, MenuSharp, Add } from '@mui/icons-material';

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
            <div className='nav-bar'>
                <h1 className='home-icon'>Name</h1>
                <div className={'nav-bar-btns' + (this.state.openedMenu ? ' opened' : '')}>
                    <IconButton className='menu-icon icon-close' onClick={this.handleMainMenuClick}>
                        <CloseSharp />
                    </IconButton>
                    <NavBarBtn label="Photography" hasSubMenu> {/* Updated */}
                        <SubMenu>
                            <MenuItem>Option 1</MenuItem>
                            <MenuItem>Option 2</MenuItem>
                        </SubMenu>
                    </NavBarBtn>
                    <NavBarBtn label="Animation" hasSubMenu> {/* Updated */}
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
            expanded: false, // New state to track submenu expansion
        };
    }

    handleMouseEnter = () => {
        this.setState({ isHovered: true });
    }

    handleMouseLeave = () => {
        this.setState({ isHovered: false });
    }

    // Toggle the submenu expansion state
    handleSubMenuClick = () => {
        this.setState({ expanded: !this.state.expanded });
    }

    render() {
        const { label, children, hasSubMenu } = this.props;
        const { isHovered, expanded } = this.state;

        // Check if the screen width is less than a certain value (e.g., 40 * 16).
        const isNarrowScreen = window.innerWidth < 40 * 16;

        return (
            <div className={`nav-bar-btn ${isHovered ? 'hovered' : ''}`} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                {label || children}

                {hasSubMenu && isNarrowScreen && (
                    <IconButton className="submenu-toggle" onClick={this.handleSubMenuClick}>
                        {expanded ? <CloseSharp /> : <Add />}
                    </IconButton>
                )}

                {children && expanded && (
                    <div className="submenu-content">{children}</div>
                )}

                {/* Display the submenu, if applicable, but not within submenu-toggle */}
                {isHovered && children && !isNarrowScreen && (
                    <div className="submenu-content">{children}</div>
                )}
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