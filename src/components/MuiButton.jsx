import React, { useState } from 'react';
import { Button, Stack, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const MuiButton = () => {
    const [format, setFormat] = useState([]);

    const handleFormatChange = (e) => {
        let value = e.target.value
        console.log(value);
        // if(format.includes(e.target.value)) {
        //     format.filter((item) => item !== e.target.value )
        // }

        // setFormat(...format, e.target.value)
    }
    console.log(format);
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button variant='text'> Text </Button>
            <Button variant='contained'> Contained </Button>
            <Button variant='outlined'> Outlined </Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='contained' color='primary'> primary </Button>
            <Button variant='contained' color='secondary'> secondary </Button>
            <Button variant='contained' color='error'> error </Button>
            <Button variant='contained' color='warning'> warning </Button>
            <Button variant='contained' color='info'> info </Button>
            <Button variant='contained' color='success'> success </Button>
        </Stack>

        {/* We are Specifying display='block' because display='flex' is the default value and affects the size of the button */}
        <Stack display='block' spacing={2} direction='row' >
            <Button variant='contained' size='small'> Small </Button>
            <Button variant='contained' size='medium'> Medium </Button>
            <Button variant='contained' size='large'> Large </Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='contained' startIcon={<SendIcon/>}>
                    Send
            </Button>
            <Button variant='contained' endIcon={<SendIcon/>}>
                    Send
            </Button>

            <IconButton aria-label='send' color='success' size='small'>
                <SendIcon/>
            </IconButton>
        </Stack>

        <Stack direction='row'>
            <ButtonGroup 
                variant='contained' 
                orientation='vertical' 
                color='secondary' 
                size='small' 
                aria-label='alignment button group'
                >
                    <Button onClick={() => alert('Left Button Clicked')}>Left</Button>
                    <Button onClick={() => alert('Center Button Clicked')}>Center</Button>
                    <Button onClick={() => alert('Right Button Clicked')}>Right</Button>
            </ButtonGroup>
        </Stack>

        <Stack direction='row'>
            <ToggleButtonGroup 
                aria-label='text formatting' 
                value={format} 
                onChange={handleFormatChange}
                size='small'
                color='success'
                orientation='vertical'
                exclusive
                > 
                <ToggleButton value='bold' aria-label='bold'>
                    <FormatBoldIcon/>
                </ToggleButton>
                <ToggleButton value='italic' aria-label='italic'>
                    <FormatItalicIcon/>
                </ToggleButton>
                <ToggleButton value='underline' aria-label='underline'>
                    <FormatUnderlinedIcon/>
                </ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </Stack>
    
  )
}

export default MuiButton;

// Mui Buttons are native buttons or anchor elements enhanced with Material Design.

// The Buttom Component has 3 variants that we can use namely text, contained, outlined
// text - used when have to usee less attention (eg - card footer or confirmation pop-up)
// contained - used when we want to grab users attention and is used for primary actions (eg - register or login button)
// outlined - in between text and contained when grabbing users attention and can be used for secondary actions.(eg - cancel or goBack buttons)

// We can use href attribute with the variant type text and the button will behave as an anchor tag which will direct us to the value mentioned in the href attribute

// In Mui Docs - customization - pallette 
//  Here we can see there are 6 category of colors

// For larger or smaller button we can use the size prop with the values smalll, medium and large.

// Mui has a wide range of icons, to use it we need to install it - npm install @mui/icons-material
// We can use the startIcon prop to start the button with the icon followed by the text and endIcon to end the button with the icon.
// When we want only the icon to act as a button we can wrap the icon inside of <IconButton> tag, it is still applicable for size and color props.

// The Button with variant="contained" have an elevation and shadow as styling and a ripple effect on clicking it, we can disable the elevation by using the disableElevation prop in the Button component, and disable the ripple Effect using the  disableRipple prop.
// To handle click we use the onClick prop.

// The Button Group component is used to group buttons, for it we place the <Button> components to be grouped together wrapped inside a <ButtonGroup> component
// We provide the varient, size, color and orientation prop to the <ButtonGroup> component and not to individual <Button> COmponent but we provide the onClick prop to each <Button> individually.

// ToggleButton Component can be used to groooup relllated buttons, in thiis we also have access to the selected state of the button group which can be further utilised.
// 