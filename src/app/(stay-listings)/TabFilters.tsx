'use client'

import { Fragment, useState } from 'react'
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
	Popover,
	PopoverButton,
	PopoverPanel,
	Transition,
} from '@headlessui/react'
import NcInputNumber from '@/components/NcInputNumber'
import ButtonPrimary from '@/shared/ButtonPrimary'
import ButtonThird from '@/shared/ButtonThird'
import ButtonClose from '@/shared/ButtonClose'
import Checkbox from '@/shared/Checkbox'
import Slider from 'rc-slider'
import convertNumbThousand from '@/utils/convertNumbThousand'
import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/24/outline'
import T from '@/utils/getT'
import { XMarkIcon } from '@heroicons/react/20/solid'

// DEMO DATA
const typeOfPaces = [
	{
		name: 'Entire place',
		description: 'Have a place to yourself',
	},
	{
		name: 'Private room',
		description: 'Have your own room and share some common spaces',
	},
	{
		name: 'Hotel room',
		description:
			'Have a private or shared room in a boutique hotel, hostel, and more',
	},
	{
		name: 'Shared room',
		description: 'Stay in a shared space, like a common room',
	},
]

const moreFilter1 = [
	{ name: 'Kitchen', defaultChecked: true },
	{ name: 'Air conditioning', defaultChecked: true },
	{ name: 'Heating' },
	{ name: 'Dryer' },
	{ name: 'Washer' },
	{ name: 'Wifi' },
	{ name: 'Indoor fireplace' },
	{ name: 'Breakfast' },
	{ name: 'Hair dryer' },
	{ name: 'Dedicated workspace' },
]

const moreFilter2 = [
	{ name: 'Free parking on premise' },
	{ name: 'Hot tub' },
	{ name: 'Gym' },
	{ name: 'Pool' },
	{ name: 'EV charger' },
]

const moreFilter3 = [
	{ name: 'House' },
	{ name: 'Bed and breakfast' },
	{ name: 'Apartment', defaultChecked: true },
	{ name: 'Boutique hotel' },
	{ name: 'Bungalow' },
	{ name: 'Chalet', defaultChecked: true },
	{ name: 'Condominium', defaultChecked: true },
	{ name: 'Cottage' },
	{ name: 'Guest suite' },
	{ name: 'Guesthouse' },
]

const moreFilter4 = [{ name: 'Pets allowed' }, { name: 'Smoking allowed' }]

const TabFilters = () => {
	const [isOpenMoreFilter, setisOpenMoreFilter] = useState(false)
	const [isOpenMoreFilterMobile, setisOpenMoreFilterMobile] = useState(false)
	const [rangePrices, setRangePrices] = useState([0, 1000])

	//
	const closeModalMoreFilter = () => setisOpenMoreFilter(false)
	const openModalMoreFilter = () => setisOpenMoreFilter(true)
	//
	const closeModalMoreFilterMobile = () => setisOpenMoreFilterMobile(false)
	const openModalMoreFilterMobile = () => setisOpenMoreFilterMobile(true)

	const renderXClear = () => {
		return (
			<span className="ms-2.5 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-primary-500 text-white">
				<XMarkIcon className="h-3 w-3" />
			</span>
		)
	}

	const renderTabsTypeOfPlace = () => {
		return (
			<Popover className="relative">
				{({ open, close }) => (
					<>
						<PopoverButton
							className={`flex items-center justify-center rounded-full border border-neutral-300 px-4 py-2 text-sm hover:border-neutral-400 focus:outline-none dark:border-neutral-700 dark:hover:border-neutral-600 ${
								open ? '!border-primary-500' : ''
							}`}
						>
							<span>Type of place</span>
							<ChevronDownIcon className="ms-1 h-4 w-4" />
						</PopoverButton>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<PopoverPanel className="absolute start-0 z-10 mt-3 w-screen max-w-sm px-4 sm:px-0 lg:max-w-md">
								<div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl dark:border-neutral-700 dark:bg-neutral-900">
									<div className="relative flex flex-col space-y-5 px-5 py-6">
										{typeOfPaces.map((item) => (
											<div key={item.name}>
												<Checkbox
													name={item.name}
													label={item.name}
													subLabel={item.description}
												/>
											</div>
										))}
									</div>
									<div className="flex items-center justify-between bg-neutral-50 p-5 dark:border-t dark:border-neutral-800 dark:bg-neutral-900">
										<ButtonThird onClick={close} sizeClass="px-4 py-2 sm:px-5">
											{T['common']['Clear']}
										</ButtonThird>
										<ButtonPrimary
											onClick={close}
											sizeClass="px-4 py-2 sm:px-5"
										>
											{T['common']['Apply']}
										</ButtonPrimary>
									</div>
								</div>
							</PopoverPanel>
						</Transition>
					</>
				)}
			</Popover>
		)
	}

	const renderTabsRoomAndBeds = () => {
		return (
			<Popover className="relative">
				{({ open, close }) => (
					<>
						<PopoverButton
							className={`flex items-center justify-center rounded-full border border-neutral-300 px-4 py-2 text-sm hover:border-neutral-400 focus:outline-none dark:border-neutral-700 dark:hover:border-neutral-600 ${
								open ? '!border-primary-500' : ''
							}`}
						>
							<span>Rooms of Beds</span>
							<ChevronDownIcon className="ms-1 h-4 w-4" />
						</PopoverButton>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<PopoverPanel className="absolute start-0 z-10 mt-3 w-screen max-w-sm px-4 sm:px-0">
								<div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl dark:border-neutral-700 dark:bg-neutral-900">
									<div className="relative flex flex-col space-y-5 px-5 py-6">
										<NcInputNumber label="Beds" max={10} />
										<NcInputNumber label="Bedrooms" max={10} />
										<NcInputNumber label="Bathrooms" max={10} />
									</div>
									<div className="flex items-center justify-between bg-neutral-50 p-5 dark:border-t dark:border-neutral-800 dark:bg-neutral-900">
										<ButtonThird onClick={close} sizeClass="px-4 py-2 sm:px-5">
											{T['common']['Clear']}
										</ButtonThird>
										<ButtonPrimary
											onClick={close}
											sizeClass="px-4 py-2 sm:px-5"
										>
											{T['common']['Apply']}
										</ButtonPrimary>
									</div>
								</div>
							</PopoverPanel>
						</Transition>
					</>
				)}
			</Popover>
		)
	}

	const renderTabsPriceRage = () => {
		return (
			<Popover className="relative">
				{({ open, close }) => (
					<>
						<PopoverButton className="flex items-center justify-center rounded-full border border-primary-500 bg-primary-50 px-4 py-2 text-sm text-primary-700 focus:outline-none">
							<span>
								{`$${convertNumbThousand(
									rangePrices[0],
								)} - $${convertNumbThousand(rangePrices[1])}`}{' '}
							</span>
							{renderXClear()}
						</PopoverButton>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<PopoverPanel className="absolute start-0 z-10 mt-3 w-screen max-w-sm px-4 sm:px-0">
								<div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl dark:border-neutral-700 dark:bg-neutral-900">
									<div className="relative flex flex-col space-y-8 px-5 py-6">
										<div className="space-y-5">
											<span className="font-medium">Price per day</span>
											<Slider
												range
												className="text-red-400"
												min={0}
												max={2000}
												defaultValue={[rangePrices[0], rangePrices[1]]}
												allowCross={false}
												onChange={(e) => setRangePrices(e as number[])}
											/>
										</div>

										<div className="flex justify-between gap-x-5">
											<div>
												<label
													htmlFor="minPrice"
													className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
												>
													{T['common']['Min price']}
												</label>
												<div className="relative mt-1 rounded-md">
													<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
														<span className="text-neutral-500 sm:text-sm">
															$
														</span>
													</div>
													<input
														type="text"
														name="minPrice"
														disabled
														id="minPrice"
														className="block w-full rounded-full border-neutral-200 pe-3 ps-7 text-neutral-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
														value={rangePrices[0]}
													/>
												</div>
											</div>
											<div>
												<label
													htmlFor="maxPrice"
													className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
												>
													{T['common']['Max price']}
												</label>
												<div className="relative mt-1 rounded-md">
													<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
														<span className="text-neutral-500 sm:text-sm">
															$
														</span>
													</div>
													<input
														type="text"
														disabled
														name="maxPrice"
														id="maxPrice"
														className="block w-full rounded-full border-neutral-200 pe-3 ps-7 text-neutral-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
														value={rangePrices[1]}
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="flex items-center justify-between bg-neutral-50 p-5 dark:border-t dark:border-neutral-800 dark:bg-neutral-900">
										<ButtonThird onClick={close} sizeClass="px-4 py-2 sm:px-5">
											{T['common']['Clear']}
										</ButtonThird>
										<ButtonPrimary
											onClick={close}
											sizeClass="px-4 py-2 sm:px-5"
										>
											{T['common']['Apply']}
										</ButtonPrimary>
									</div>
								</div>
							</PopoverPanel>
						</Transition>
					</>
				)}
			</Popover>
		)
	}

	const renderMoreFilterItem = (
		data: {
			name: string
			defaultChecked?: boolean
		}[],
	) => {
		const list1 = data.filter((_, i) => i < data.length / 2)
		const list2 = data.filter((_, i) => i >= data.length / 2)
		return (
			<div className="grid grid-cols-2 gap-4">
				<div className="flex flex-col space-y-5">
					{list1.map((item) => (
						<Checkbox
							key={item.name}
							name={item.name}
							label={item.name}
							defaultChecked={!!item.defaultChecked}
						/>
					))}
				</div>
				<div className="flex flex-col space-y-5">
					{list2.map((item) => (
						<Checkbox
							key={item.name}
							name={item.name}
							label={item.name}
							defaultChecked={!!item.defaultChecked}
						/>
					))}
				</div>
			</div>
		)
	}

	const renderTabMoreFilter = () => {
		return (
			<div>
				<div
					className="flex cursor-pointer items-center justify-center rounded-full border border-primary-500 bg-primary-50 px-4 py-2 text-sm text-primary-700 focus:outline-none"
					onClick={openModalMoreFilter}
				>
					<FunnelIcon className="me-2 h-5 w-5" />
					<span>
						{T['common']['Filters']}
						{`  `}
						(3)
					</span>
				</div>

				<Dialog
					open={isOpenMoreFilter}
					onClose={closeModalMoreFilter}
					className="relative z-50 hidden lg:block"
				>
					<DialogBackdrop
						transition
						className="fixed inset-0 bg-black/50 duration-200 ease-out data-[closed]:opacity-0"
					/>
					<div className="fixed inset-0 flex max-h-screen w-screen items-center justify-center p-4">
						<DialogPanel
							className="flex max-h-full w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl duration-200 ease-out data-[closed]:translate-y-16 data-[closed]:opacity-0 dark:border dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
							transition
						>
							<div className="relative flex-shrink-0 border-b border-neutral-200 px-6 py-4 text-center dark:border-neutral-800">
								<DialogTitle
									as="h3"
									className="text-lg font-medium leading-6 text-gray-900"
								>
									{T['common']['Filters']}
								</DialogTitle>
								<span className="absolute start-3 top-3">
									<ButtonClose onClick={closeModalMoreFilter} />
								</span>
							</div>

							<div className="hiddenScrollbar flex-1 overflow-y-auto">
								<div className="divide-y divide-neutral-200 px-10 text-start dark:divide-neutral-800">
									<div className="py-7">
										<h3 className="text-xl font-medium">Amenities</h3>
										<div className="relative mt-6">
											{renderMoreFilterItem(moreFilter1)}
										</div>
									</div>
									<div className="py-7">
										<h3 className="text-xl font-medium">Facilities</h3>
										<div className="relative mt-6">
											{renderMoreFilterItem(moreFilter2)}
										</div>
									</div>
									<div className="py-7">
										<h3 className="text-xl font-medium">Property type</h3>
										<div className="relative mt-6">
											{renderMoreFilterItem(moreFilter3)}
										</div>
									</div>
									<div className="py-7">
										<h3 className="text-xl font-medium">House rules</h3>
										<div className="relative mt-6">
											{renderMoreFilterItem(moreFilter4)}
										</div>
									</div>
								</div>
							</div>

							<div className="flex flex-shrink-0 items-center justify-between bg-neutral-50 p-6 dark:border-t dark:border-neutral-800 dark:bg-neutral-900">
								<ButtonThird
									onClick={closeModalMoreFilter}
									sizeClass="px-4 py-2.5 sm:px-5"
								>
									{T['common']['Clear']}
								</ButtonThird>
								<ButtonPrimary
									onClick={closeModalMoreFilter}
									sizeClass="px-4 py-2.5 sm:px-5"
								>
									{T['common']['Apply']}
								</ButtonPrimary>
							</div>
						</DialogPanel>
					</div>
				</Dialog>
			</div>
		)
	}

	const renderTabMoreFilterMobile = () => {
		return (
			<div>
				<div
					className="flex cursor-pointer items-center justify-center rounded-full border border-primary-500 bg-primary-50 px-5 py-3 text-sm text-primary-700 focus:outline-none lg:hidden"
					onClick={openModalMoreFilterMobile}
				>
					<FunnelIcon className="me-2 h-5 w-5" />
					<span>
						{T['common']['Filters']}
						{`  `}
						(3)
					</span>
				</div>

				<Dialog
					open={isOpenMoreFilterMobile}
					onClose={closeModalMoreFilterMobile}
					className="relative z-50 lg:hidden"
				>
					<DialogBackdrop
						transition
						className="fixed inset-0 bg-black/50 duration-200 ease-out data-[closed]:opacity-0"
					/>
					<div className="fixed inset-0 flex max-h-screen w-screen items-center justify-center pt-3">
						<DialogPanel
							className="flex max-h-full w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl bg-white text-left align-middle shadow-xl duration-200 ease-out data-[closed]:translate-y-16 data-[closed]:opacity-0 dark:border dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
							transition
						>
							<div className="relative flex-shrink-0 border-b border-neutral-200 p-4 text-center dark:border-neutral-800">
								<DialogTitle
									as="h3"
									className="text-lg font-medium leading-6 text-gray-900"
								>
									{T['common']['Filters']}
								</DialogTitle>
								<span className="absolute start-3 top-3">
									<ButtonClose onClick={closeModalMoreFilterMobile} />
								</span>
							</div>

							<div className="hiddenScrollbar flex-grow overflow-y-auto text-start">
								<div className="divide-y divide-neutral-200 px-4 dark:divide-neutral-800">
									{/* ---- */}
									<div className="py-7">
										<h3 className="text-xl font-medium">Type of place</h3>
										<div className="relative mt-6">
											{renderMoreFilterItem(typeOfPaces)}
										</div>
									</div>

									{/* ---- */}
									<div className="py-7">
										<h3 className="text-xl font-medium">Range Prices</h3>
										<div className="relative mt-6">
											<div className="relative flex flex-col space-y-8">
												<div className="space-y-5">
													<Slider
														range
														className="text-red-400"
														min={0}
														max={2000}
														defaultValue={[0, 1000]}
														allowCross={false}
														onChange={(e) => setRangePrices(e as number[])}
													/>
												</div>

												<div className="flex justify-between gap-x-5">
													<div>
														<label
															htmlFor="minPrice"
															className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
														>
															{T['common']['Min price']}
														</label>
														<div className="relative mt-1 rounded-md">
															<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
																<span className="text-sm text-neutral-500">
																	$
																</span>
															</div>
															<input
																type="text"
																name="minPrice"
																disabled
																id="minPrice"
																className="block w-full rounded-full border-neutral-200 pe-3 ps-7 text-sm text-neutral-900 focus:border-indigo-500 focus:ring-indigo-500"
																value={rangePrices[0]}
															/>
														</div>
													</div>
													<div>
														<label
															htmlFor="maxPrice"
															className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
														>
															{T['common']['Max price']}
														</label>
														<div className="relative mt-1 rounded-md">
															<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
																<span className="text-sm text-neutral-500">
																	$
																</span>
															</div>
															<input
																type="text"
																disabled
																name="maxPrice"
																id="maxPrice"
																className="block w-full rounded-full border-neutral-200 pe-3 ps-7 text-sm text-neutral-900 focus:border-indigo-500 focus:ring-indigo-500"
																value={rangePrices[1]}
															/>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									{/* ---- */}
									<div className="py-7">
										<h3 className="text-xl font-medium">Rooms and beds</h3>
										<div className="relative mt-6 flex flex-col space-y-5">
											<NcInputNumber label="Beds" max={10} />
											<NcInputNumber label="Bedrooms" max={10} />
											<NcInputNumber label="Bathrooms" max={10} />
										</div>
									</div>

									{/* ---- */}
									<div className="py-7">
										<h3 className="text-xl font-medium">Amenities</h3>
										<div className="relative mt-6">
											{renderMoreFilterItem(moreFilter1)}
										</div>
									</div>

									{/* ---- */}
									<div className="py-7">
										<h3 className="text-xl font-medium">Facilities</h3>
										<div className="relative mt-6">
											{renderMoreFilterItem(moreFilter2)}
										</div>
									</div>

									{/* ---- */}
									<div className="py-7">
										<h3 className="text-xl font-medium">Property type</h3>
										<div className="relative mt-6">
											{renderMoreFilterItem(moreFilter3)}
										</div>
									</div>

									{/* ---- */}
									<div className="py-7">
										<h3 className="text-xl font-medium">House rules</h3>
										<div className="relative mt-6">
											{renderMoreFilterItem(moreFilter4)}
										</div>
									</div>
								</div>
							</div>

							<div className="flex flex-shrink-0 items-center justify-between bg-neutral-50 p-4 dark:border-t dark:border-neutral-800 dark:bg-neutral-900">
								<ButtonThird
									onClick={closeModalMoreFilterMobile}
									sizeClass="px-4 py-2.5 sm:px-5"
								>
									{T['common']['Clear']}
								</ButtonThird>
								<ButtonPrimary
									onClick={closeModalMoreFilterMobile}
									sizeClass="px-4 py-2.5 sm:px-5"
								>
									{T['common']['Apply']}
								</ButtonPrimary>
							</div>
						</DialogPanel>
					</div>
				</Dialog>
			</div>
		)
	}

	return (
		<div className="flex lg:gap-x-4">
			<div className="hidden gap-x-4 lg:flex">
				{renderTabsTypeOfPlace()}
				{renderTabsPriceRage()}
				{renderTabsRoomAndBeds()}
				{renderTabMoreFilter()}
			</div>
			{renderTabMoreFilterMobile()}
		</div>
	)
}

export default TabFilters
