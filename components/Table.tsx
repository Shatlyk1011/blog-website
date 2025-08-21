import { FC } from 'react'

interface Props {
  thead: string[]
  tbody: string[][]
  classes?: string
}

export const Table: FC<Props> = ({ thead, tbody, classes }) => {
  return (
    <div className="no-scrollbar w-full overflow-x-scroll">
      <table className={`scroll w-full text-lg ${classes}`}>
        <thead className="leading-8 font-bold">
          <tr>
            {thead?.map((text) => (
              <th key={text} className="px-1">
                {text}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tbody?.map((list, i) => (
            <tr key={i} className="transition">
              {list.map((text, i) => (
                <td key={i} className="border border-white p-2.5">
                  {text}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
