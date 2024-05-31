import React from 'react'
import { Typography } from '@mui/material'

const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'> Heading 1 </Typography>
        <Typography variant='h2'> Heading 2 </Typography>
        <Typography variant='h3'> Heading 3 </Typography>
        <Typography variant='h4'> Heading 4 </Typography>
        <Typography variant='h4' component='h1'> Heading 4 </Typography>
        <Typography variant='h4' component='h1' gutterBottom> Heading 4 </Typography>
        <Typography variant='h5'> Heading 5 </Typography>
        <Typography variant='h6'> Heading 6 </Typography>

        <Typography variant='subtitle1'> Sub title 1 </Typography>
        <Typography variant='subtitle1'> Sub title 2</Typography>

        <Typography variant='body1'> 
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Aspernatur aliquam voluptatibus debitis accusantium beatae rerum? 
            Perferendis, adipisci? A eos debitis quam nemo, minima laudantium. 
            Optio eveniet amet qui minus tempore!
        </Typography>
        <Typography variant='body2'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Aspernatur aliquam voluptatibus debitis accusantium beatae rerum? 
            Perferendis, adipisci? A eos debitis quam nemo, minima laudantium. 
            Optio eveniet amet qui minus tempore!
        </Typography>
        
    </div>
  )
}

export default MuiTypography;

// There are 15 different varients
// To access different varients we use the varient prop

// Heading varients - It ranges from h1 to h6
// eg - <Typography variant='h1'> Heading </Typography>

// Subtitle variants
// Among the subtitlle1 and subtitle2,
// subtitle1 has larger fontSize but lesser fontWeight whereas subtitle2 has smaller fontSize but more fontWeight

// Body Text variants
// Among body1 and body2
// On inspecting the elements we see that both variants have <p> tag as the element.
// body1 is the default 16px normal foontWeight element whereas body2 is a  smaller version of it.
// body1 is the default value of the variant prop, it means that if we do not mention any variant prop with the Typography element it will by default have body1 as the value of variant prop.


// We will be using the default theme
// In the Material UI docs - customization - default theme viewer - Expand All
// We will get to see the default theme that Material UI uses (different value of breakpoints, color pallette for our application, spacing values, shadows etc)

// We can change the underlying semantic element using the component prop
// eg - <Typography variant='h4' component='h1'> Heading 4 </Typography>
// By specifying the component prop to a value, on inspecting that element in browser we will get it as the element mentioned in the component prop


// By default the value of gutterBottom prop is false, but on apllying it on the component the text will have a bottom margin.
// When we specify page titles and section headings, adding a bit of space at the bottom is common and the best way to do it is by the gutterBottom prop.
