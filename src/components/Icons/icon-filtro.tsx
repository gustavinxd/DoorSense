interface IconFiltroProps {
    size: number,
    color: string,

}
export default function IconFiltro({size, color} : IconFiltroProps){
    return(       
        
        <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path stroke={color} fill-rule="evenodd" clip-rule="evenodd" d="M17.5 3.03906H0.5C0.22386 3.03906 0 2.75487 0 2.4043V1.13477C0 0.784197 0.22386 0.5 0.5 0.5H17.5C17.7761 0.5 18 0.784197 18 1.13477V2.4043C18 2.75487 17.7761 3.03906 17.5 3.03906ZM15 10.0215V8.75195C15 8.40144 14.7761 8.11719 14.5 8.11719H3.5C3.22386 8.11719 3 8.40144 3 8.75195V10.0215C3 10.372 3.22386 10.6562 3.5 10.6562H14.5C14.7761 10.6562 15 10.372 15 10.0215ZM12 16.3691V17.6387C12 17.9892 11.7761 18.2734 11.5 18.2734H6.5C6.22386 18.2734 6 17.9892 6 17.6387V16.3691C6 16.0186 6.22386 15.7344 6.5 15.7344H11.5C11.7761 15.7344 12 16.0186 12 16.3691Z" fill="#05AFF2"/>
        </svg>
    )
}
