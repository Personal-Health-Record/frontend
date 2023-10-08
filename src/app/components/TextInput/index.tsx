type TextInputProps = {
  label: string,
  placeholder: string,
  type: string,
  onChange: (value: any) => void,
}

const TextInput = (
  {
    label,
    placeholder,
    type,
    onChange,
  }: TextInputProps) => {
  return (
    <div className="relative mt-4 px-8">
      <label
        htmlFor="input"
        className="absolute left-12 -top-3 bg-white px-1 text-gray-600 text-sm"
      >
        {label}
      </label>
      <input
        type={type}
        id="input"
        className="w-full px-4 py-2 border border-gray-400 rounded-2xl bg-transparent focus:outline-none focus:border-gray-900"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
export default TextInput;
