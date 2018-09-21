import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';


/** This Component creates the Tabs section beneath the header */
class Tabs extends Component {
    static propTypes = {
        /** Contains all of the Tabs */
        children: PropTypes.instanceOf(Array).isRequired,
    };

    constructor(props) {
        super(props);

        /** This state is the current selected tab */
        this.state = {
            activeTab: this.props.children[0].props.label,
        };
    }

    /** Sets the activeTab state when a tab is clicked */
    onClickTabItem = (tab) => {
        this.setState({ activeTab: tab });
    };

    /** Returns the Tab list */
    render() {
        const {
            onClickTabItem,
            props: {
                children,
            },
            state: {
                activeTab,
            }
        } = this;

        return (
            <div className="tabs">
                <ol className="tab-list">
                    {children.map((child) => {
                        const { label } = child.props;

                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={onClickTabItem}
                            />
                        );
                    })}
                </ol>
                <div className="tab-content">
                    {children.map((child) => {
                        if (child.props.label !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
            </div>
        );
    }
}

export default Tabs;