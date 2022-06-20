import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import React from 'react'
import {Input, InputIdentifier} from '../questionTypes'
type Props = {
    specs: Input
}

const InputFactory: React.FC<Props> = ({specs}) => {
    let componentToReturn:ReactJSXElement;
    switch(specs.type){
        case InputIdentifier.TEXTFIELD:
            // Lets build a text field
            break;
        case InputIdentifier.DATEPICKER:
            //leyts buil d a date picker
            break;
        case InputIdentifier.CHECKBOX:
            //lets build a checkbox
            break;
        case InputIdentifier.RADIOBOX:
            // lets build a radiobox
            break; 
    }
    return (
    {<div>Input</div>}
    )
}

export default InputFactory;