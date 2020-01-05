import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText'


export default function SwitchTest() {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const [check, setCheck] = React.useState({
        status: true
    });


    const handleChange = name => event => {
        console.log(name);
        setState({ ...state, [name]: event.target.checked });
    };

    const handleSwitch = name => event => {
        console.log(name);
        setCheck({ ...check, "status": event.target.checked });
        console.log(check);
    }

    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Assign responsibility</FormLabel>
                <FormGroup row>
                    <FormControlLabel onClick="alert('haha')" control={<AccessAlarmIcon />} label="AccessAlarmIcon" />
                    <FormLabel label="haha">haha</FormLabel>
                </FormGroup>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
                        }
                        label="Secondary"
                    />
                    <FormControlLabel
                        control={
                            <Switch checked={state.checkedB} onChange={handleChange('checkedB')} value="checkedB" />
                        }
                        label="Primary"
                    />
                    <Switch checked={check.status} onChange={handleSwitch("checkedA")} value="checkedA"/>
                </FormGroup>
                <FormHelperText>Be careful</FormHelperText>
            </FormControl>
        </div>
    );
}