export function InputBox({label,placeholder,onChange}){
    return <div>
    <div className="text-smfont-medium text-left py-2">
        {label}
    </div>
        <input onChange={onChange} placeholder={placeholder} className="w-full px-2 py1 border rounded border-slate-200"></input>
    </div>
}