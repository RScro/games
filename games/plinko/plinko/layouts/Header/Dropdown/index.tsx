import { useState } from "react";
import DropdownIcon from "../../../../assets/icons/dropdown.svg";
import styles from "./dropdown.module.scss";
import Image from "next/image";

type DropdownProps = {
  options?: Array<string | number>;
  defaultValue: string | number;
  disabled?: boolean;
  onChange: (option: string | number) => void;
};

const Dropdown = (props: DropdownProps) => {
  const { options, defaultValue, disabled, onChange } = props;
  const [open, setOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string | number>(
    defaultValue
  );

  const handleSelect = (option: string | number) => {
    setSelectedValue(option);
    setOpen(false);
    onChange(option);
  };
  return (
    <div className={styles.dropdown}>
      <div
        className={`selected text-option ${disabled ? "disabled" : ""} ${
          open ? "open" : ""
        }`}
        onClick={() => !disabled && setOpen((prev) => !prev)}
      >
        {selectedValue}
        <Image src={DropdownIcon} alt="aas" />
      </div>
      {open ? (
        <>
          <div className="dropdown-items">
            {options?.map((option: string | number, index: number) => (
              <div
                key={index}
                className="item text-option"
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
          <div className="blank" onClick={() => setOpen(false)} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Dropdown;
