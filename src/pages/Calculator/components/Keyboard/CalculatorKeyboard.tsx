import React, { FC, memo } from 'react';
import styles from '../../style/calculator.module.css';
import { Box } from '@mui/material';
import {
    AClearButton,
    ADeleteButton,
    NEightButton,
    NFiveButton,
    NFourButton,
    NNineButton,
    NOneButton,
    NSevenButton,
    NSixButton,
    NThreeButton,
    NTwoButton,
    NZeroButton,
    ODecimalButton,
    OPlusOrMinusButton
} from '../index';
import {
    ECalculatorOperator,
    ECalculatorValue,
    TCalculatorKeyboardProps
} from '../../types/calculatorType';
import {
    //test id
    CALCULATOR_KEYBOARD_BUTTON_CLEAR_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_DECIMAL_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_DELETE_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_LIST_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_EIGHT_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_FIVE_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_FOUR_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_NINE_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_ONE_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_SEVEN_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_SIX_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_THREE_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_TWO_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_ZERO_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_PLUS_OR_MINUS_DATA_TEST_ID,
} from '../../constant';

const CalculatorKeyboard: FC<TCalculatorKeyboardProps> = ({ onButtonClick }) => {
    return (
        <Box
            data-testid={CALCULATOR_KEYBOARD_BUTTON_LIST_DATA_TEST_ID}
            className={styles.calculatorKeyboard}
        >
            <Box className={styles.gridContainerAction}>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_CLEAR_DATA_TEST_ID}
                    className={styles.clearButton}
                >
                    <AClearButton
                        //set the onClick event to the clear button
                        onClick={() => onButtonClick(ECalculatorOperator.CLEAR)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_DELETE_DATA_TEST_ID}
                    className={styles.deleteButton}
                >
                    <ADeleteButton
                        //set the onClick event to the delete button
                        onClick={() => onButtonClick(ECalculatorOperator.DELETE)}
                    />
                </div>
            </Box>
            <Box className={styles.gridContainerNumber}>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_SEVEN_DATA_TEST_ID}
                    className={styles.sevenButton}
                >
                    <NSevenButton
                        // set the onClick event to the seven button (value = 7)
                        onClick={() => onButtonClick(ECalculatorValue.SEVEN)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_EIGHT_DATA_TEST_ID}
                    className={styles.eightButton}
                >
                    <NEightButton
                        // set the onClick event to the eight button (value = 8)
                        onClick={() => onButtonClick(ECalculatorValue.EIGHT)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_NINE_DATA_TEST_ID}
                    className={styles.nineButton}
                >
                    <NNineButton
                        // set the onClick event to the nine button (value = 9)
                        onClick={() => onButtonClick(ECalculatorValue.NINE)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_FOUR_DATA_TEST_ID}
                    className={styles.fourButton}
                >
                    <NFourButton
                        // set the onClick event to the four button (value = 4)
                        onClick={() => onButtonClick(ECalculatorValue.FOUR)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_FIVE_DATA_TEST_ID}
                    className={styles.fiveButton}
                >
                    <NFiveButton
                        // set the onClick event to the five button (value = 5)
                        onClick={() => onButtonClick(ECalculatorValue.FIVE)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_SIX_DATA_TEST_ID}
                    className={styles.sixButton}
                >
                    <NSixButton
                        // set the onClick event to the six button (value = 6)
                        onClick={() => onButtonClick(ECalculatorValue.SIX)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_ONE_DATA_TEST_ID}
                    className={styles.oneButton}

                >
                    <NOneButton
                        // set the onClick event to the one button (value = 1)
                        onClick={() => onButtonClick(ECalculatorValue.ONE)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_TWO_DATA_TEST_ID}
                    className={styles.twoButton}
                >
                    <NTwoButton
                        // set the onClick event to the two button (value = 2)
                        onClick={() => onButtonClick(ECalculatorValue.TWO)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_THREE_DATA_TEST_ID}
                    className={styles.threeButton}
                >
                    <NThreeButton
                        // set the onClick event to the three button (value = 3)
                        onClick={() => onButtonClick(ECalculatorValue.THREE)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_PLUS_OR_MINUS_DATA_TEST_ID}
                    className={styles.plusMinusButton}
                >
                    <OPlusOrMinusButton
                        // set the onClick event to the plus or minus button
                        onClick={() => onButtonClick(ECalculatorOperator.PLUSORMINUS)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_ZERO_DATA_TEST_ID}
                    className={styles.zeroButton}
                >
                    <NZeroButton
                        // set the onClick event to the zero button (value = 0)
                        onClick={() => onButtonClick(ECalculatorValue.ZERO)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_DECIMAL_DATA_TEST_ID}
                    className={styles.decimalButton}
                >
                    <ODecimalButton
                        // set the onClick event to the decimal button
                        onClick={() => onButtonClick(ECalculatorOperator.DECIMAL)}
                    />
                </div>
            </Box>
        </Box>
    );
};

export default memo(CalculatorKeyboard);