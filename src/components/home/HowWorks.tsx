import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconClockHour3Filled,
  IconCloud,
  IconCreditCardFilled,
  IconCurrencyDollar,
  IconEaseInOut,
  IconGaugeFilled,
  IconHeart,
  IconHelp,
  IconLocationFilled,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

const HowWorks = () => {
  const steps = [
    {
      title: "Search Location",
      description:
        "Find the perfect car by searching for available vehicles in your preferred location quickly and easily.",
      icon: <IconLocationFilled className="text-red-500"/>,
    },
    {
      title: "Select Date & Time",
      description:
        "Choose the date and time that fits your schedule to ensure the car is available when you need it.",
      icon: <IconClockHour3Filled className="text-red-500"/>,
    },
    {
      title: "Make Ride",
      description:
        "Select your vehicle and confirm your booking. Enjoy a smooth and hassle-free ride with no hidden fees.",
      icon: <IconGaugeFilled className="text-red-500" />,
    },
    {
      title: "Pay Later",
      description:
        "Convenient payment options allow you to pay later, giving you flexibility and peace of mind.",
      icon: <IconCreditCardFilled className="text-red-500" />,
    },
  ];

  return (
    <>
      <p className="flex justify-center pt-10 text-3xl font-bold">
        How Turbo Car Rental Works
      </p>
      <p className="flex justify-center text-sm pt-2">
        We are innovative and passionate about the work we do.
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10">
        {steps.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature  ",
        (index === 0 || index === 4) && "lg:border-l ",
        index < 4 && "lg:border-b"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-red-100 pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300  group-hover/feature:bg-red-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export default HowWorks;
