type SelectProdUctColor = {
  colors: string[];
  productColor: string;
  setProductColor: React.Dispatch<React.SetStateAction<string>>;
};

const SelectProductColor = ({
  colors,
  productColor,
  setProductColor,
}: SelectProdUctColor) => {
  return (
    <div className="mt-6">
      <h4 className="text-md font-medium tracking-wider capitalize">colors</h4>
      <div className="mt-2">
        {colors.map((color) => {
          return (
            <button
              key={color}
              type="button"
              className={`rounded-full w-6 mr-2 h-6 border-2 ${
                color === productColor && "border-primary"
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setProductColor(color)}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default SelectProductColor;
