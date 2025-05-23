import React, { FC } from 'react'
import { DEMO_CAR_LISTINGS } from '@/data/listings'
import { CarDataType } from '@/data/types'
import Pagination from '@/shared/Pagination'
import TabFilters from './TabFilters'
import Heading2 from '@/shared/Heading2'
import CarCard from '@/components/CarCard'

export interface SectionGridFilterCardProps {
	className?: string
	data?: CarDataType[]
}

const DEMO_DATA: CarDataType[] = DEMO_CAR_LISTINGS.filter((_, i) => i < 12)

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
	className = '',
	data = DEMO_DATA,
}) => {
	return (
		<div className={`nc-SectionGridFilterCard ${className}`}>
			<Heading2
				heading="Cars in Tokyo"
				subHeading={
					<span className="mt-3 block text-neutral-500 dark:text-neutral-400">
						233 cars
						<span className="mx-2">·</span>
						Aug 12 - 18
					</span>
				}
			/>

			<div className="mb-8 lg:mb-11">
				<TabFilters />
			</div>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
				{data.map((car) => (
					<CarCard key={car.id} data={car} />
				))}
			</div>
			<div className="mt-16 flex items-center justify-center">
				<Pagination />
			</div>
		</div>
	)
}

export default SectionGridFilterCard
