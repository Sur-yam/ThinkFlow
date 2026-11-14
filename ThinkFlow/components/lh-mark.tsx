import Image from "next/image";

export function LhMark({ className = "" }: { className?: string }) {
	return <Image src="/icon.svg" alt="" width={24} height={24} className={className} unoptimized />;
}
