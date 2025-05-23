import T from '@/utils/getT'
import React, { FC } from 'react'

const PageAddListing7 = () => {
	return (
		<>
			<div>
				<h2 className="text-2xl font-semibold">
					{T['addListings']['page7']['pageTitle']}
				</h2>
				<span className="mt-2 block text-neutral-500 dark:text-neutral-400">
					{T['addListings']['page7']['pageDescription']}
				</span>
			</div>

			<div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
			{/* FORM */}
			<div className="space-y-8">
				<div>
					<span className="text-lg font-semibold">
						{T['addListings']['page7']['Cover image']}
					</span>
					<div className="mt-5">
						<div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-neutral-300 px-6 pb-6 pt-5 dark:border-neutral-600">
							<div className="space-y-1 text-center">
								<svg
									className="mx-auto h-12 w-12 text-neutral-400"
									stroke="currentColor"
									fill="none"
									viewBox="0 0 48 48"
									aria-hidden="true"
								>
									<path
										d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
								</svg>
								<div className="flex text-sm text-neutral-600 dark:text-neutral-300">
									<label
										htmlFor="file-upload"
										className="relative cursor-pointer rounded-md font-medium text-primary-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 hover:text-primary-500"
									>
										<span>{T['addListings']['page7']['Upload a file']}</span>
										<input
											id="file-upload"
											name="file-upload"
											type="file"
											className="sr-only"
										/>
									</label>
									<p className="ps-1">
										{T['addListings']['page7']['or drag and drop']}
									</p>
								</div>
								<p className="text-xs text-neutral-500 dark:text-neutral-400">
									{T['addListings']['page7']['PNG, JPG, GIF up to 10MB']}
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* ----------------- */}
				<div>
					<span className="text-lg font-semibold">
						{T['addListings']['page7']['Pictures of the place']}
					</span>
					<div className="mt-5">
						<div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-neutral-300 px-6 pb-6 pt-5 dark:border-neutral-600">
							<div className="space-y-1 text-center">
								<svg
									className="mx-auto h-12 w-12 text-neutral-400"
									stroke="currentColor"
									fill="none"
									viewBox="0 0 48 48"
									aria-hidden="true"
								>
									<path
										d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
								</svg>
								<div className="flex text-sm text-neutral-600 dark:text-neutral-300">
									<label
										htmlFor="file-upload-2"
										className="relative cursor-pointer rounded-md font-medium text-primary-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 hover:text-primary-500"
									>
										<span>{T['addListings']['page7']['Upload a file']}</span>
										<input
											id="file-upload-2"
											name="file-upload-2"
											type="file"
											className="sr-only"
										/>
									</label>
									<p className="ps-1">
										{T['addListings']['page7']['or drag and drop']}
									</p>
								</div>
								<p className="text-xs text-neutral-500 dark:text-neutral-400">
									{T['addListings']['page7']['PNG, JPG, GIF up to 10MB']}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default PageAddListing7
