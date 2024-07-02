import React, { useState } from 'react';
import './ToggleSwitch.scss'; // Make sure to create this CSS file

const ToggleSwitch = ({isOn,toggleSwitch }) => {

    return (
        <div className={`toggle-switch ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
            <div className="toggle-handle">
                <div className="toggle-icon">
                    {isOn ? '🌙' : '☀️'}
                </div>
            </div>
        </div>
    );
};

export default ToggleSwitch;
