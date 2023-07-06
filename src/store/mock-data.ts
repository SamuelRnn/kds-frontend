import { OrderInterface } from '@/interfaces/order.interface'

export const orders: OrderInterface[] = [
	{
		id: 'order-1',
		table: 1,
		items: [
			{
				id: 'sushi',
				name: 'Sushi (10 piezas)',
				specialInstructions: {
					addons: [],
					exclusions: [],
				},
				quantity: 1,
			},
			{
				id: 'sashimi',
				name: 'Sashimi (8 piezas)',
				specialInstructions: {
					addons: [],
					exclusions: [],
				},
				quantity: 2,
			},
		],
		status: 'pending',
		orderTime: '2023-07-06T12:30:00.000Z',
	},
	{
		id: 'order-2',
		table: 2,
		items: [
			{
				id: 'tempura_vegetales',
				name: 'Tempura de vegetales',
				specialInstructions: {
					addons: ['Extra salsa de soja'],
					exclusions: [],
				},
				quantity: 3,
			},
			{
				id: 'gyudon',
				name: 'Gyudon (bol de arroz con carne de res)',
				specialInstructions: {
					addons: [],
					exclusions: ['Sin cebolla'],
				},
				quantity: 1,
			},
		],
		status: 'progress',
		orderTime: '2023-07-06T13:15:00.000Z',
	},
	{
		id: 'order-3',
		table: 3,
		items: [
			{
				id: 'ramen_miso',
				name: 'Ramen de miso',
				specialInstructions: {
					addons: [],
					exclusions: [],
				},
				quantity: 2,
			},
			{
				id: 'udon_tempura_camarones',
				name: 'Udon con tempura de camarones',
				specialInstructions: {
					addons: [],
					exclusions: [],
				},
				quantity: 1,
			},
			{
				id: 'gyoza',
				name: 'Gyoza (empanadillas japonesas)',
				specialInstructions: {
					addons: [],
					exclusions: ['Sin ajo'],
				},
				quantity: 4,
			},
		],
		status: 'pending',
		orderTime: '2023-07-06T13:45:00.000Z',
	},
	{
		id: 'order-4',
		table: 3,
		items: [
			{
				id: 'tempura_vegetales',
				name: 'Tempura de vegetales',
				specialInstructions: {
					addons: ['extra salsa de soja'],
					exclusions: ['sin cebolla'],
				},
				quantity: 1,
			},
			{
				id: 'gyoza',
				name: 'Gyoza (empanadillas japonesas)',
				specialInstructions: {
					addons: [],
					exclusions: ['sin salsa agridulce'],
				},
				quantity: 2,
			},
		],
		status: 'progress',
		orderTime: '2023-07-06T13:15:00.000Z',
	},
	{
		id: 'order-5',
		table: 5,
		items: [
			{
				id: 'ramen_miso',
				name: 'Ramen de miso',
				specialInstructions: {
					addons: ['extra cerdo'],
					exclusions: [],
				},
				quantity: 1,
			},
			{
				id: 'yakisoba',
				name: 'Yakisoba (fideos fritos)',
				specialInstructions: {
					addons: ['extra verduras'],
					exclusions: [],
				},
				quantity: 1,
			},
			{
				id: 'gyudon',
				name: 'Gyudon (bol de arroz con carne de res)',
				specialInstructions: {
					addons: [],
					exclusions: ['sin cebolla'],
				},
				quantity: 2,
			},
		],
		status: 'pending',
		orderTime: '2023-07-06T14:00:00.000Z',
	},
	{
		id: 'order-6',
		table: 2,
		items: [
			{
				id: 'sukiyaki',
				name: 'Sukiyaki (estofado japonés)',
				specialInstructions: {
					addons: [],
					exclusions: [],
				},
				quantity: 1,
			},
			{
				id: 'onigiri',
				name: 'Onigiri (bolas de arroz rellenas)',
				specialInstructions: {
					addons: [],
					exclusions: [],
				},
				quantity: 3,
			},
		],
		status: 'canceled',
		orderTime: '2023-07-06T15:30:00.000Z',
	},
	{
		id: 'order-7',
		table: 6,
		items: [
			{
				id: 'sushi',
				name: 'Sushi (10 piezas)',
				specialInstructions: {
					addons: [],
					exclusions: [],
				},
				quantity: 1,
			},
			{
				id: 'tempura_vegetales',
				name: 'Tempura de vegetales',
				specialInstructions: {
					addons: [],
					exclusions: [],
				},
				quantity: 1,
			},
			{
				id: 'teriyaki_salmon',
				name: 'Teriyaki de salmón',
				specialInstructions: {
					addons: [],
					exclusions: [],
				},
				quantity: 2,
			},
		],
		status: 'done',
		orderTime: '2023-07-06T15:30:00',
	},
	{
		id: 'order-8',
		table: 6,
		items: [
			{
				id: 'gyudon',
				name: 'Gyudon (bol de arroz con carne de res)',
				specialInstructions: {
					addons: ['Extra sauce on the side'],
					exclusions: [],
				},
				quantity: 2,
			},
			{
				id: 'ramen_miso',
				name: 'Ramen de miso',
				specialInstructions: {
					addons: [],
					exclusions: [],
				},
				quantity: 1,
			},
			{
				id: 'yakisoba',
				name: 'Yakisoba (fideos fritos)',
				specialInstructions: {
					addons: ['Extra spicy'],
					exclusions: [],
				},
				quantity: 1,
			},
		],
		status: 'done',
		orderTime: '2023-07-06T16:00:00',
	},
]
