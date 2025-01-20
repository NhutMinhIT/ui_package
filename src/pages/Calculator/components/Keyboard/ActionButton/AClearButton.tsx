import React, { FC, memo } from 'react'
import { KeyboardIconButton } from '../../index'
import { TCalculatorButton } from '../../../types/calculatorType';
import { DeleteForeverOutlined } from '@mui/icons-material';

const AClearButton: FC<TCalculatorButton> = ({
    onClick
}) => {
    return (
        <KeyboardIconButton
            //set the button value to Clear (AC)
            onClick={onClick}
        >
            <DeleteForeverOutlined fontSize='medium' />
        </KeyboardIconButton>

    )
}

export default memo(AClearButton);