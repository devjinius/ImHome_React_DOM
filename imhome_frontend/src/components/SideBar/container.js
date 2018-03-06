import React, {Component} from 'react';
import SideBar from './presenter';

class Container extends Component {

    render() {
      return <SideBar showMenu={this._showMenu} {...this.props} />;
    }


    _showMenu = e => {

        let menuListStyle = document.getElementById("sidebarMenu").style;
        
        if (menuListStyle.display === "none" || menuListStyle.display === "") {
            menuListStyle.display="block";
        } else {
            menuListStyle.display="none";
        }
    }
}

export default Container;