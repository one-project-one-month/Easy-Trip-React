import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Handshake, Heart, Sparkles, User2, UsersRound } from "lucide-react";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import FormDateRangePicker from "@/components/common/form-inputs/FormDateRangePicker";
import FormCardRadioGroup from "@/components/common/form-inputs/FormCardRadioGroup";
import FormNumberStepper from "@/components/common/form-inputs/FormNumberStepper";
import { getDestination } from "@/store/appSettingStore";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { getTodayDate } from "@/lib/helper";

const todayDate = getTodayDate();

const TripPlanSchema = z.object({
  date: z.object(
    {
      from: z
        .string()
        .min(1)
        .refine((val) => val >= todayDate, {
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
    value: "solo trip",
    label: <User2 />,
    info: "Solo Trip",
  },
  {
    value: "family trip",
    label: <UsersRound />,
    info: "Family Trip",
  },
  {
    value: "partner trip",
    label: <Heart />,
    info: "Partner Trip",
  },
  {
    value: "friend trip",
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

  const destination = getDestination();

  useEffect(() => {
    if (!destination) {
      navigate("/plan/init");
    }
  }, [destination]);

  const handleSubmint = (data: TripPlanValue) => {
    console.log({...data, destination});
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmint)}
        className="w-full max-w-2xl p-8 bg-white md:shadow-2xl rounded-2xl space-y-8 animate-fade-in"
      >
        <div className="text-start">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Tell Us Your Travel Preferences
          </h1>
          <p className="text-gray-600 p-1 text-sm">
            Just provide some basic information, and our trip planner will
            generate a customized itinerary based on your preferences.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <FormDateRangePicker
            form={form}
            name="date"
            label="When are you going?"
            className="w-full"
            required
          />

          <FormNumberStepper
            form={form}
            name="budget"
            label="Your budget (MMK)"
            min={100000}
            step={100000}
            required
          />
        </div>

        <FormCardRadioGroup
          form={form}
          name="attendanceType"
          label="Who are you travelling with?"
          options={attendanceOptions}
          radioClassName="grid grid-cols-4 gap-3"
          className="w-full"
          required
        />

        <Button
          type="submit"
          className="w-full flex gap-2 items-center justify-center text-base font-semibold"
        >
          <span>Generate</span>
          <Sparkles size={20} />
        </Button>
      </form>
    </Form>
  );
}
