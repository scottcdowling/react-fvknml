import * as React from 'react';
import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';

const PanelBarComponent = (props) => {
    const { dir } = props;
    return (
        <div className="panelbar-wrapper">
            <PanelBar dir={dir}>
                <PanelBarItem title="Invasion Games">
                    <PanelBarItem title="Hockey"></PanelBarItem>
                    <PanelBarItem title="Soccer"></PanelBarItem>
                    <PanelBarItem title="Rugby"></PanelBarItem>
                </PanelBarItem>
                <PanelBarItem title="Net & Court Games" expanded="true">
                    <PanelBarItem title="Badminton"></PanelBarItem>
                    <PanelBarItem title="Squash"></PanelBarItem>
                    <PanelBarItem title="Tennis" selected={true}></PanelBarItem>
                    <PanelBarItem title="Table Tennis"></PanelBarItem>
                    <PanelBarItem title="Volleyball"></PanelBarItem>
                </PanelBarItem>
                <PanelBarItem title="Target Games">
                    <PanelBarItem title="Golf"></PanelBarItem>
                    <PanelBarItem title="Lawn bowls"></PanelBarItem>
                    <PanelBarItem title="Tenpin bowling"></PanelBarItem>
                </PanelBarItem>
            </PanelBar>
            <style>{`
            .panelbar-wrapper {
                max-width: 300px;
                margin: 0 auto;
            }`}</style>
        </div>
    )
};

export default PanelBarComponent;
