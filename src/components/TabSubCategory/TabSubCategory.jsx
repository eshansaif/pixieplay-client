import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabSubCategory = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabSelect = (index) => {
        setSelectedTab(index);
    };

    return (
        <div>
            <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
                <TabList className="flex justify-center gap-4 tabs tabs-boxed">
                    <Tab className={`tab ${selectedTab === 0 ? 'active' : ''}`}>Title 1</Tab>
                    <Tab className={`tab ${selectedTab === 1 ? 'active' : ''}`}>Title 2</Tab>
                    <Tab className={`tab ${selectedTab === 2 ? 'active' : ''}`}>Title 3</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabSubCategory;
