// export default function Background({ url }: { url: string }) {
// 	return (
// 		<div
// 			className="fixed inset-0 -z-10 bg-fixed bg-center bg-cover"
// 			style={{ backgroundImage: `url('${url}')` }}
// 		>
// 			<div className="w-full h-full bg-black/30" />
// 		</div>
// 	);
// }

export default function Background({ url }: { url: string }) {
	return (
		<div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">
			<video
				className="w-full h-full object-cover"
				src={url}
				autoPlay
				loop
				muted
				playsInline
			/>
			<div className="absolute inset-0 w-full h-full bg-black/20 pointer-events-none" />
		</div>
	);
}
