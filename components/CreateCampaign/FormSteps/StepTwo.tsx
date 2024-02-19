import { DatePicker, Select } from "@/components/ui";
import { callApi, zodValidator } from "@/lib";
import { useWatchFormStatus } from "@/lib/hooks";
import {
	STEP_DATA_KEY_LOOKUP,
	type StepTwoData,
	useFormStore,
} from "@/store/formStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDownIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import ErrorParagraph from "../ErrorParagraph";
import Heading from "../Heading";

function StepTwo() {
	const {
		currentStep,
		campaignId,
		stepTwoData,
		actions: { setData, goToStep, setCampaignId },
	} = useFormStore((state) => state);

	const { control, formState, register, handleSubmit } = useForm({
		mode: "onTouched",
		resolver: zodResolver(zodValidator("campaignStepTwo")!),
		defaultValues: stepTwoData,
	});

	useWatchFormStatus(formState);

	const onFormSubmit = async (data: StepTwoData) => {
		setData({ step: 2, data });

		const { data: dataInfo, error } = await callApi<{
			data: { _id: string };
		}>(`/campaign/create/two`, { ...data, campaignId });

		if (dataInfo) {
			setCampaignId(dataInfo.data._id);
			goToStep(currentStep + 1);
		}
	};

	return (
		<section>
			<Heading as="h2" className="text-formBtn">
				Share your funding goal and deadline
			</Heading>

			<form
				id={STEP_DATA_KEY_LOOKUP[currentStep]}
				className="mt-@3.2"
				onSubmit={(event) => {
					event.preventDefault();
					void handleSubmit(onFormSubmit)(event);
				}}
			>
				<ol className="flex flex-col gap-@2.4">
					<li>
						<label htmlFor="title" className="text-sm font-semibold lg:text-xl">
							Campaign Title
						</label>

						<input
							{...register("title")}
							id="title"
							type="text"
							placeholder="Give your campaign a catchy title that can resonate with donors"
							className="mt-@1.6 w-full rounded-[10px] border border-unfocused px-@0.8 py-@1.6 text-xs focus-visible:outline-formBtn lg:px-@1.6 lg:py-@2.2 lg:text-base"
						/>

						<ErrorParagraph formState={formState} errorField="title" />
					</li>

					<li>
						<label
							htmlFor="fundraiser"
							className="text-sm font-semibold lg:text-xl"
						>
							Who is fundraising?
						</label>

						<Controller
							control={control}
							name="fundraiser"
							render={({ field }) => (
								<Select.Root
									defaultValue={field.value}
									name={field.name}
									value={field.value}
									onValueChange={field.onChange}
								>
									<Select.Trigger
										icon={<ChevronDownIcon />}
										className="mt-@1.6 rounded-[10px] border-unfocused px-@0.8 py-@2.3 text-xs data-[placeholder]:text-placeholder lg:px-@1.6 lg:py-@3.4 lg:text-base"
									>
										<Select.Value placeholder="Specify who is fundraising" />
									</Select.Trigger>

									<Select.Content id="category">
										<Select.Item value="INDIVIDUAL">For Myself</Select.Item>
										<Select.Item value="BENEFICIARY">
											For Someone else
										</Select.Item>
									</Select.Content>
								</Select.Root>
							)}
						/>

						<ErrorParagraph formState={formState} errorField="fundraiser" />
					</li>

					<li>
						<label htmlFor="goal" className="text-sm font-semibold lg:text-xl">
							Campaign Goal
						</label>

						<input
							{...register("goal")}
							id="goal"
							type="number"
							placeholder="Set a realistic target amount"
							className="mt-@1.6 w-full rounded-[10px] border border-unfocused px-@0.8 py-@1.6 text-xs focus-visible:outline-formBtn lg:px-@1.6 lg:py-@2.2 lg:text-base"
						/>

						<ErrorParagraph formState={formState} errorField="goal" />
					</li>

					<li>
						<label
							htmlFor="deadline"
							className="text-sm font-semibold lg:text-xl"
						>
							Campaign Deadline
						</label>

						<Controller
							control={control}
							name="deadline"
							render={({ field }) => (
								<DatePicker
									className="mt-@1.6 w-full justify-between rounded-[10px] border border-unfocused px-@0.8 py-@2.3 text-xs lg:px-@1.6 lg:py-@3.4 lg:text-base"
									placeholder="Specify the end date for your campaign"
									dateValueString={field.value}
									onChange={field.onChange}
								/>
							)}
						/>

						<ErrorParagraph formState={formState} errorField="deadline" />
					</li>
				</ol>
			</form>
		</section>
	);
}

export default StepTwo;