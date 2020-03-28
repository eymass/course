import React, {memo} from 'react';
import PropTypes from 'prop-types';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

const NavItem = ({ item, selectedKey, icon, onClick }) => {
    return (<ListItem button
                      onClick={onClick}
                      selected={selectedKey === item.key}
                      aria-selected={selectedKey === item.key}
                      key={item.key}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={item.text} />
    </ListItem>);
};

NavItem.propTypes = {
    item: PropTypes.object,
    selectedKey: PropTypes.string,
    icon: PropTypes.object,
    onClick: PropTypes.func
};

export default memo(NavItem);
