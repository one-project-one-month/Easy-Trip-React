import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Handshake,
  Heart,
  Sparkles,
  Undo2,
  User2,
  UsersRound,
} from "lucide-react";
import { useNavigate } from "react-router";
import { isBefore, startOfToday } from "date-fns";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import FormDateRangePicker from "@/components/common/form-inputs/FormDateRangePicker";
import FormCardRadioGroup from "@/components/common/form-inputs/FormCardRadioGroup";
import FormNumberStepper from "@/components/common/form-inputs/FormNumberStepper";

import useAppSettingStore from "@/store/appSettingStore";
import { getTodayDate } from "@/lib/helper";

const todayDate = getTodayDate();

const TripPlanSchema = z.object({
  date: z.object(
    {
      from: z
        .string()
        .min(1)
        .refine(val => val >= todayDate, {
          message: "Date can't be in the past",
        }),
      to: z.string().min(1),
    },
    { message: "Date is required" }
  ),
  budget: z.number().min(100000),
  attendanceType: z.string().min(1),
});

const attendanceOptions = [
  {
    value: "alone",
    label: <User2 />,
    info: "Solo Trip",
  },
  {
    value: "family",
    label: <UsersRound />,
    info: "Family Trip",
  },
  {
    value: "partner",
    label: <Heart />,
    info: "Partner Trip",
  },
  {
    value: "friend",
    label: <Handshake />,
    info: "Friend Trip",
  },
];

type TripPlanValue = z.infer<typeof TripPlanSchema>;

export default function TripPlanForm() {
  const form = useForm<TripPlanValue>({
    resolver: zodResolver(TripPlanSchema),
    defaultValues: {
      date: undefined,
      budget: 0,
      attendanceType: "",
    },
  });

  const navigate = useNavigate();

  const setDestinationSetting = useAppSettingStore(
    s => s.setDestinationSetting
  );

  const onSubmit = (data: TripPlanValue) => {
    setDestinationSetting({
      attendentsType: data.attendanceType,
      budget: `${data.budget}MMK`,
      startDate: data.date.from,
      endDate: data.date.to,
    });

    navigate("/plan/itinerary");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center py-12 mb-7">
      <div className="w-full">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-800 mb-4 tracking-tight drop-shadow-lg">
            Plan Your Perfect Trip
          </h1>
          <p className="text-neutral-600 md:text-2xl font-medium">
            Provide your preferences and let us craft a personalized itinerary
            for you.
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <FormDateRangePicker
                form={form}
                name="date"
                labelClassName="md:text-xl font-semibold"
                label="When are you going?"
                className="w-full col-span-2"
                disabled={(date: Date) => isBefore(date, startOfToday())}
                required
              />

              <FormNumberStepper
                form={form}
                name="budget"
                wrapperClassName="col-span-1"
                labelClassName="md:text-xl font-semibold"
                label="Your budget (MMK)"
                min={100000}
                step={100000}
                required
              />
            </div>

            <div>
              <FormCardRadioGroup
                form={form}
                name="attendanceType"
                label="Who are you traveling with?"
                options={attendanceOptions}
                radioClassName="grid grid-cols-2 md:grid-cols-4 gap-6"
                className="w-full"
                labelClassName="md:text-xl font-semibold"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                onClick={handleGoBack}
                type="button"
                variant="outline"
                className="w-full py-5 md:text-xl flex gap-3 items-center justify-center font-bold"
              >
                <span>Go Back</span>
                <Undo2 size={28} />
              </Button>
              <Button
                type="submit"
                className="w-full py-5 md:text-xl flex gap-3 items-center justify-center font-bold"
              >
                <span>Generate</span>
                <Sparkles size={28} />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
