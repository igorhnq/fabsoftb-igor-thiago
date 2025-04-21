import Select from 'react-select';
import { Coffee, ForkKnife, GridFour, IceCream, Pizza, SealPercent } from '@phosphor-icons/react';

import styles from './CustomSelect.module.css';

const options = [
    {
        value: 'all',
        label: (
            <div className={styles.option}>
                <GridFour size={18} weight="fill" />
                Ver todos
            </div>
        )
    },
    {
        value: 'sales',
        label: (
            <div className={styles.option}>
                <SealPercent size={18} weight="fill" />
                Promoções
            </div>
        )
    },
    {
        value: 'drinks',
        label: (
            <div className={styles.option}>
                <Coffee size={18} weight="fill" />
                Bebidas
            </div>
        )
    },
	{
        value: 'snacks',
        label: (
            <div className={styles.option}>
                <Pizza size={18} weight="fill" />
                Salgados
            </div>
        )
    },
	{
        value: 'sweets',
        label: (
            <div className={styles.option}>
                <IceCream size={18} weight="fill" />
                Doces
            </div>
        )
    },
	{
        value: 'dishes',
        label: (
            <div className={styles.option}>
                <ForkKnife size={18} weight="fill" />
                Pratos de balcão
            </div>
        )
    }
];

export default function CustomSelect() {
    return (
        <Select
            className={styles.selectContainer}
            classNamePrefix="custom"
            options={options}
            defaultValue={options[0]}
            isSearchable={false}
            styles={{
                control: (base) => ({
                    ...base,
                    border: 'none',
                    boxShadow: 'none', 
                    borderRadius: '12px',
                    padding: '4px 8px',
                    backgroundColor: '#eee'
                }),
                option: (base, state) => ({
                    ...base,
                    backgroundColor: state.isSelected ? '#616658' : '#f1f1f1',
                    color: state.isSelected ? 'white' : 'black',
                    padding: '10px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer'
                }),
                menu: (base) => ({
                    ...base,
                    borderRadius: '10px',
                    overflow: 'hidden'
                }),
            }}
        />
    );
}
