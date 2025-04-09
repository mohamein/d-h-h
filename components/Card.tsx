import { IconType } from "react-icons/lib";
interface CardProps {
  Icon: IconType;
  title: string;
  total: number;
}
const Card = ({ Icon, title, total }: CardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg hover:scale-110 transition-scale duration-500 ease-in-out">
      <div className="flex gap-3 items-center">
        <div className="flex justify-center bg-green-100 items-center h-11 w-11 rounded-full">
          <Icon className="text-green-500" size={22} />
        </div>

        <div className="flex flex-col">
          <h2 className="text-gray-700 text-base font-semibold">{title}</h2>
          <p className="text-green-600 text-sm">
            {title === "Total Income" ? `$${total.toFixed(3)}` : total}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
