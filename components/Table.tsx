import { FC } from 'react'

import { cn } from '@/lib/cn'

interface Props {
  thead: string[]
  tbody: string[][]
  classes?: string
  elementClass?: string
}

export const Table: FC<Props> = ({ thead, tbody, classes, elementClass }) => {
  return (
    <div className="no-scrollbar w-full overflow-x-scroll">
      <table className={cn('scroll w-full text-base leading-[135%]', classes)}>
        <thead className="leading-6 font-bold">
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
            <tr key={i}>
              {list.map((text, i) => (
                <td key={i} className={cn(`border border-white/80 p-2.5`, elementClass)}>
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
