import { FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";

type FormFieldsProps = {
  label: string;
  placeholder?: string;
  type: "text" | "password" | "number" | "date";
  control: any;
  name: string;
  className?: string;
};
const FormFields = ({
  label,
  placeholder,
  control,
  type,
  name,
  className,
}: FormFieldsProps) => {
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input type={type} placeholder={placeholder} {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </>
  );
};

export default FormFields;
