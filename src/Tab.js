import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** This Component creates the tabs in the tabs list */
class Tab extends Component {
    static propTypes = {
        /** Current selected tab */
        activeTab: PropTypes.string.isRequired,
        /** Name of the tab */
        label: PropTypes.string.isRequired,
        /** onClick function from Tabs */
        onClick: PropTypes.func.isRequired,
    };

    /** Calles the onClick function in Tabs */
    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    };

    /** Returns the name of the Tab */
    render() {
        const {
            onClick,
            props: {
                activeTab,
                label,
            },
        } = this;

        let className = 'tab-list-item';

        if (activeTab === label) {
            className += ' tab-list-active';
        }

        return (
            <li
                className={className}
                onClick={onClick}
            >
                {label}
            </li>
        );
    }
}

export default Tab;