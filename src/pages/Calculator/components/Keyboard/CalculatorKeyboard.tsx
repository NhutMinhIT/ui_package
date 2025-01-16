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
import NOneButton from './NumberButton/NOneButton';
import NTwoButton from './NumberButton/NTwoButton';
import NThreeButton from './NumberButton/NThreeButton';
import OPlusOrMinusButton from './OperatorButton/OPlusOrMinusButton';
import NZeroButton from './NumberButton/NZeroButton';
import ODecimalButton from './OperatorButton/ODecimalButton';
import ADeleteButton from './ActionButton/ADeleteButton';


interface Props {
    onButtonClick: (value: string) => void;
}

const CalculatorKeyboard: FC<Props> = ({ onButtonClick }) => {
    return (
        <Box
            data-testid="calculator-keyboard"
            className={styles.calculatorKeyboard}
        >
            <Box className={styles.gridContainerAction}>
                <div
                    data-testid="clear-button"
                    className={styles.clearButton}
                    onClick={() => onButtonClick('clear')}
                >
                    <AClearButton
                    />
                </div>
                <div
                    data-testid="delete-button"
                    className={styles.deleteButton}
                    onClick={() => onButtonClick('delete')}
                >
                    <ADeleteButton />
                </div>
            </Box>
            <Box className={styles.gridContainerNumber}>
                <div
                    data-testid="button-7"
                    className={styles.sevenButton}
                    onClick={() => onButtonClick('7')}
                >
                    <NSevenButton />
                </div>
                <div
                    data-testid="button-8"
                    className={styles.eightButton}
                    onClick={() => onButtonClick('8')}
                >
                    <NEightButton />
                </div>
                <div
                    data-testid="button-9"
                    className={styles.nineButton}
                    onClick={() => onButtonClick('9')}
                >
                    <NNineButton />
                </div>
                <div
                    data-testid="button-4"
                    className={styles.fourButton}
                    onClick={() => onButtonClick('4')}
                >
                    <NFourButton />
                </div>
                <div
                    data-testid="button-5"
                    className={styles.fiveButton}
                    onClick={() => onButtonClick('5')}
                >
                    <NFiveButton />
                </div>
                <div
                    data-testid="button-6"
                    className={styles.sixButton}
                    onClick={() => onButtonClick('6')}
                >
                    <NSixButton />
                </div>
                <div
                    data-testid="button-1"
                    className={styles.oneButton}
                    onClick={() => onButtonClick('1')}
                >
                    <NOneButton />
                </div>
                <div
                    data-testid="button-2"
                    className={styles.twoButton}
                    onClick={() => onButtonClick('2')}
                >
                    <NTwoButton />
                </div>
                <div
                    data-testid="button-3"
                    className={styles.threeButton}
                    onClick={() => onButtonClick('3')}
                >
                    <NThreeButton />
                </div>
                <div
                    data-testid="button-plus-minus"
                    className={styles.plusMinusButton}
                    onClick={() => onButtonClick('+/-')}
                >
                    <OPlusOrMinusButton />
                </div>
                <div
                    data-testid="button-0"
                    className={styles.zeroButton}
                    onClick={() => onButtonClick('0')}
                >
                    <NZeroButton />
                </div>
                <div
                    data-testid="button-decimal"
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
