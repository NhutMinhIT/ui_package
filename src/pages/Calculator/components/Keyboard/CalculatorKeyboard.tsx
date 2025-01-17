import React, { FC } from 'react';
import styles from '../../style/calculator.module.css';
import { Box } from '@mui/material';
import AClearButton from './ActionButton/AClearButton';
import NSevenButton from './NumberButton/NSevenButton';
import NNineButton from './NumberButton/NNineButton';
import NEightButton from './NumberButton/NEightButton';
import NFourButton from './NumberButton/NFourButton';
import NFiveButton from './NumberButton/NFiveButton';
import NSixButton from './NumberButton/NSixButton';
import { NOneButton } from '../index';
import NTwoButton from './NumberButton/NTwoButton';
import NThreeButton from './NumberButton/NThreeButton';
import OPlusOrMinusButton from './OperatorButton/OPlusOrMinusButton';
import NZeroButton from './NumberButton/NZeroButton';
import ODecimalButton from './OperatorButton/ODecimalButton';
import ADeleteButton from './ActionButton/ADeleteButton';
import { ECalculatorOperator, TCalculatorKeyboardProps } from '../../types/calculatorType';
import { CALCULATOR_KEYBOARD_BUTTON_CLEAR_DATA_TEST_ID, CALCULATOR_KEYBOARD_BUTTON_DECIMAL_DATA_TEST_ID, CALCULATOR_KEYBOARD_BUTTON_DELETE_DATA_TEST_ID, CALCULATOR_KEYBOARD_BUTTON_LIST_DATA_TEST_ID, CALCULATOR_KEYBOARD_BUTTON_NUMBER_EIGHT_DATA_TEST_ID, CALCULATOR_KEYBOARD_BUTTON_NUMBER_FIVE_DATA_TEST_ID, CALCULATOR_KEYBOARD_BUTTON_NUMBER_FOUR_DATA_TEST_ID, CALCULATOR_KEYBOARD_BUTTON_NUMBER_NINE_DATA_TEST_ID, CALCULATOR_KEYBOARD_BUTTON_NUMBER_ONE_DATA_TEST_ID, CALCULATOR_KEYBOARD_BUTTON_NUMBER_SEVEN_DATA_TEST_ID, CALCULATOR_KEYBOARD_BUTTON_NUMBER_SIX_DATA_TEST_ID, CALCULATOR_KEYBOARD_BUTTON_NUMBER_THREE_DATA_TEST_ID, CALCULATOR_KEYBOARD_BUTTON_NUMBER_TWO_DATA_TEST_ID, CALCULATOR_KEYBOARD_BUTTON_NUMBER_ZERO_DATA_TEST_ID, CALCULATOR_KEYBOARD_BUTTON_PLUS_OR_MINUS_DATA_TEST_ID } from '../../constant';

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
                        onClick={() => onButtonClick(ECalculatorOperator.CLEAR)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_DELETE_DATA_TEST_ID}
                    className={styles.deleteButton}
                >
                    <ADeleteButton
                        onClick={() => onButtonClick(ECalculatorOperator.DELETE)}
                    />
                </div>
            </Box>
            <Box className={styles.gridContainerNumber}>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_SEVEN_DATA_TEST_ID}
                    className={styles.sevenButton}
                    onClick={() => onButtonClick('7')}
                >
                    <NSevenButton />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_EIGHT_DATA_TEST_ID}
                    className={styles.eightButton}
                    onClick={() => onButtonClick('8')}
                >
                    <NEightButton />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_NINE_DATA_TEST_ID}
                    className={styles.nineButton}
                    onClick={() => onButtonClick('9')}
                >
                    <NNineButton />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_FOUR_DATA_TEST_ID}
                    className={styles.fourButton}
                    onClick={() => onButtonClick('4')}
                >
                    <NFourButton />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_FIVE_DATA_TEST_ID}
                    className={styles.fiveButton}
                    onClick={() => onButtonClick('5')}
                >
                    <NFiveButton />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_SIX_DATA_TEST_ID}
                    className={styles.sixButton}
                    onClick={() => onButtonClick('6')}
                >
                    <NSixButton />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_ONE_DATA_TEST_ID}
                    className={styles.oneButton}
                    onClick={() => onButtonClick('1')}
                >
                    <NOneButton />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_TWO_DATA_TEST_ID}
                    className={styles.twoButton}
                    onClick={() => onButtonClick('2')}
                >
                    <NTwoButton />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_THREE_DATA_TEST_ID}
                    className={styles.threeButton}
                    onClick={() => onButtonClick('3')}
                >
                    <NThreeButton />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_PLUS_OR_MINUS_DATA_TEST_ID}
                    className={styles.plusMinusButton}
                    onClick={() => onButtonClick('+/-')}
                >
                    <OPlusOrMinusButton />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_ZERO_DATA_TEST_ID}
                    className={styles.zeroButton}
                    onClick={() => onButtonClick('0')}
                >
                    <NZeroButton />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_DECIMAL_DATA_TEST_ID}
                    className={styles.decimalButton}
                    onClick={() => onButtonClick('.')}
                >
                    <ODecimalButton />
                </div>
            </Box>
        </Box>
    );
};

export default CalculatorKeyboard;
