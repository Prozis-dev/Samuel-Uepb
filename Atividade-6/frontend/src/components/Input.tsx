interface Props {
    id: string,
    placeholder: string
}

export function Input({ id, placeholder }: Props) {
    return (
        <input type="text" className="w-full text-[#131016] pl-3 shadow-2xl shadow-black rounded-lg h-10" required id={id} placeholder={placeholder} />
    )
}