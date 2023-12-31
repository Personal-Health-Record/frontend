import { Dispatch, SetStateAction } from 'react';
import { chipTypes } from '../../constants';
import ChipFilterItem from '../ChipFilterItem';

interface Props {
  handleClickChip: Dispatch<SetStateAction<string>>;
  selectedChip: string;
}

const ChipTypes = ({ handleClickChip, selectedChip }: Props) => {
  return (
    <div className="flex overflow-x-auto gap-3">
      {chipTypes.map((chip) => (
        <div key={`chip-filter-${chip}`} onClick={() => handleClickChip(chip)}>
          <ChipFilterItem
            text={chip}
            bgColor={
              selectedChip !== chip ? 'bg-superLightGrey' : 'bg-mainBlue'
            }
          />
        </div>
      ))}
    </div>
  );
};

export default ChipTypes;
