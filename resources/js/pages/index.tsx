import PagePlate from '@/layouts/PagePlate';
import {blogItemMeta} from '@/content/meta';
import { Fragment } from 'react/jsx-runtime';
import Item from '@/components/listing/Item';
export default function Welcome() {
	return (
		<PagePlate title="Welcome to Motorcycle Science Blog">
			<div className='flex flex-wrap gap-2 px-2 justify-center my-20'>
				{blogItemMeta.map((item, index)=>{
					return <div key={index} className='w-80'>
						<Item 
							{...item}
						/>
					</div>
				})}

				<div className='w-80'></div>
				<div className='w-80'></div>
				<div className='w-80'></div>
				<div className='w-80'></div>
				<div className='w-80'></div>
			</div>
		</PagePlate>
	);
}
