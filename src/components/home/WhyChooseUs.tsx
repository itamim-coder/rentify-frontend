import { cn } from "@/lib/utils";
import { IconTerminal2 } from "@tabler/icons-react";

const whyChooseUs = () => {
  return (
    <>
      <p className="flex justify-center pt-10 text-3xl font-bold">
        Why Choose Us
      </p>
      <p className="flex justify-center text-sm pt-2">
        We are innovative and passionate about the work we do.
      </p>

      <section className="">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="flex flex-col  space-y-16">
            <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4 lg:items-center">
              <div className="order-1 grid gap-10 sm:grid-cols-2 md:order-1 md:grid-cols-1 lg:order-1">
                <div className="flex flex-col space-y-6 justify-center md:justify-start">
                  <span className="p-2 rounded-md bg-red-50 text-red-700 flex w-max">
                    {/* feature icon */}
                    <div className="">
                      <IconTerminal2 />
                    </div>
                  </span>
                  <h1 className="flex text-lg font-semibold capitalize text-gray-900 dark:text-white">
                    Easy & Fast Booking
                  </h1>
                  <p className="text-sm font-light text-gray-700 dark:text-gray-300">
                    Completely carinate e business testing process whereas fully
                    researched customer service. Globally extensive content with
                    quality.
                  </p>
                </div>
                <div className="flex flex-col space-y-6 justify-center md:justify-start">
                  <span className="p-2 rounded-md bg-red-50 text-red-700 flex w-max">
                    {/* feature icon */}
                    <div className="">
                      <IconTerminal2 />
                    </div>
                  </span>
                  <h1 className="flex text-lg font-semibold capitalize text-gray-900 dark:text-white">
                    Many Pickup Location
                  </h1>
                  <p className="text-sm font-light text-gray-700 dark:text-gray-300">
                    Enthusiastically magnetic initiatives with cross-platform
                    sources. Dynamically target testing procedures through
                    effective.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center order-3 md:col-span-2 lg:order-2 lg:row-span-2 lg:h-full">
                <div
                  className="flex items-center relative bg-gradient-to-tr  
                  p-6 rounded-lg aspect-[4/2.4] overflow-hidden"
                >
                  <img
                    src="https://turbo.redq.io/wp-content/uploads/2023/07/image-448-1-1536x370.png"
                    alt="illustration"
                    width={1800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="order-1 grid gap-10 sm:grid-cols-2 md:order-2 md:grid-cols-1 lg:order-3">
                <div className="flex flex-col space-y-6 justify-center md:justify-start">
                  <span className="p-2 rounded-md bg-red-50 text-red-700 flex w-max">
                    {/* feature icon */}
                    <div className="">
                      <IconTerminal2 />
                    </div>
                  </span>
                  <h1 className="flex text-lg font-semibold capitalize text-gray-900 dark:text-white">
                    Wide Range of Vehicles
                  </h1>
                  <p className="text-sm font-light text-gray-700 dark:text-gray-300">
                    Choose from a diverse fleet of well-maintained vehicles,
                    including compact cars, luxury sedans, spacious SUVs, and
                    eco-friendly.
                  </p>
                </div>
                <div className="flex flex-col space-y-6 justify-center md:justify-start">
                  <span className="p-2 rounded-md bg-red-50 text-red-700 flex w-max">
                    {/* feature icon */}
                    <div className="">
                      <IconTerminal2 />
                    </div>
                  </span>
                  <h1 className="flex text-lg font-semibold capitalize text-gray-900 dark:text-white">
                    Customer Satisfaction
                  </h1>
                  <p className="text-sm font-light text-gray-700 dark:text-gray-300">
                    Globally user centric method interactive. Seamlessly
                    revolutionize unique portals corporate collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800 ",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
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

export default whyChooseUs;
