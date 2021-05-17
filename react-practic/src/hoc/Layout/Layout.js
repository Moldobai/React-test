import React, { Component } from 'react'
import Drawer from '../../components/Navigation/Drawer/Drawer';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import classes from './Layout.css'


class Layout extends Component {
    state = {
        menu: false
    }

    togglemenuHanler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }
    menuCloseHandler = () => {

        this.setState({
            menu: false
        })
    }

    render() {
        return (
            <div className={classes.Layout}>
                <Drawer
                    isOpen={this.state.menu}
                    onClose={this.menuCloseHandler}
                />
                <MenuToggle
                    onToggle={this.togglemenuHanler}
                    isOpen={this.state.menu}
                />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}
export default Layout;