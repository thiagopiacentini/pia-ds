import React, { useState } from "react";
import styled from "styled-components";

export interface PiaCardOption {
    id: number
    title: string
    subtitle: string
    footer: string
}

export interface PiaCardOptionsProps {
    options: PiaCardOption[]
    valueDefault?: PiaCardOption | null
    onChange?: (option: PiaCardOption) => void
}

const SectionStyled = styled.section<{ selected: boolean }>`
    background: ${props => props.selected ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)' : '#FFFFFF'};
    border-radius: 8px;
    border: 1px solid;
    border-color: ${props => props.selected ? '#002F52' : '#EB9B00'};
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    height: 88px;
    justify-content: space-around;
    margin: 10px;
    text-align: center;
    width: 194px;
    header {
        color: ${props => props.selected ? '#FFF' : '#EB9B00'};
        font-size: 12px;
        font-weight: 400;
    }
    strong {
        color: ${props => props.selected ? '#FFF' : '#EB9B00'};;
        font-size: 16px;
        font-weight: 700;
    }
    footer {
        color: ${props => props.selected ? '#FFF' : 'rgba(0, 0, 0, 0.54)'};;
        font-size: 12px;
        font-weight: 400;
    }
`

const PiaCardOptions = ({ options: options, onChange, valueDefault: valueDefault }: PiaCardOptionsProps) => {
    const [cardSelected, setCardSelected] = useState<PiaCardOption | null>(valueDefault ?? null)
    const isSelected = (option: PiaCardOption): void => {
        setCardSelected(option);
        if (onChange) {
            onChange(option)
        }
    }

    return (
        <>
            {options.map(option =>
                <SectionStyled
                    onClick={() => isSelected(option)}
                    key={option.id}
                    selected={cardSelected?.id == option.id}
                >
                    <header>
                        {option.title}
                    </header>
                    <div>
                        <strong>{option.subtitle}</strong>
                    </div>
                    <footer>
                        {option.footer}
                    </footer>
                </SectionStyled>
            )}
        </>)
}

export default PiaCardOptions;