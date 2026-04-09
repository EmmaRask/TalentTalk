export default function CompanyButton ( {onSelect, value, content} ){
return (
        <button onClick={() => onSelect(value)}>
                {content}
              </button>

     )
}