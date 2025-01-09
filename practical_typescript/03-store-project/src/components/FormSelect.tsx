import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";

type SelectInputProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  options: string[];
};

const FormSelect = ({
  label,
  name,
  defaultValue,
  options,
}: SelectInputProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Select defaultValue={defaultValue || options[0]} name={name}>
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((el) => {
            return (
              <SelectItem key={el} value={el}>
                {el}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FormSelect;
