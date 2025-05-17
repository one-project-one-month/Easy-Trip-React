import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/ui/form";
import FormDateRangePicker from "@/components/common/form-inputs/FormDateRangePicker";
import FormCardRadioGroup from "@/components/common/form-inputs/FormCardRadioGroup";
import { Button } from "@/components/ui/button";
import { Handshake, Heart, Sparkles, User2, UsersRound } from "lucide-react";
import FormNumberStepper from "@/components/common/form-inputs/FormNumberStepper";

const TripPlanSchema = z.object({
  date: z.object({
    from: z.string(),
    to: z.string(),
  }),
  budget: z.number(),
  attendanceType: z.string(),
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
  });

  const handleSubmint = (data: TripPlanValue) => {
    console.log(data);
  };

  return (
    <div
      style={{ aspectRatio: "2" }}
      className="w-full flex items-center justify-center py-10"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmint)}
          className="w-full max-w-xl p-8 bg-white shadow-2xl rounded-2xl space-y-8 animate-fade-in"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Plan Your Perfect Trip
            </h1>
            <p className="text-gray-600 text-sm">
              Fill out the details and let us craft a custom travel experience
              for you.
            </p>
          </div>

          <div className="flex gap-3">
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
              label="Your budget"
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
            radioClassName="grid grid-cols-2 gap-3"
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
    </div>
  );
}
