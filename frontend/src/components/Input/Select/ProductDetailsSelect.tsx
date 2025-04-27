import Select from 'react-select';
import styles from './CustomSelect.module.css';

const options = [
    { value: 'flavours', label: 'Sabores' },
    { value: 'size', label: 'Tamanho' },
    { value: 'extras', label: 'Complementos' },
];

interface CustomSelectProps {
    defaultValue: string;
}

export default function ProductDetailsSelect({ defaultValue }: CustomSelectProps) {
    return (
        <Select
            className={styles.selectContainer}
            classNamePrefix="custom"
            options={options}
            defaultValue={options.find(option => option.label === defaultValue)}
            isSearchable={false}
            styles={{
                control: (base) => ({
                    ...base,
                    marginTop: '1rem',
                    border: '1px solid black',
                    backgroundColor: '#D9D9D9',
                    borderRadius: '50px',
                    fontSize: '1.2rem',
                    color: '#1F242F',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    boxShadow: 'none',
                    cursor: 'pointer',
                    width: '200px',
                }),
                option: (base, state) => ({
                    ...base,
                    backgroundColor: state.isSelected ? '#616658' : '#f1f1f1',
                    color: state.isSelected ? 'white' : 'black',
                    padding: '10px 12px',
                    cursor: 'pointer'
                }),
                menu: (base) => ({
                    ...base,
                    borderRadius: '10px',
                    overflow: 'hidden'
                }),
                dropdownIndicator: (base) => ({
                    ...base,
                    color: '#1F242F',
                }),
                indicatorSeparator: () => ({
                    display: 'none',
                }),
            }}
        />
    );
}
