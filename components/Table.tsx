import { FC } from 'react'

import { cn } from '@/lib/cn'

interface Props {
  thead: string[]
  tbody: string[][]
  isHighlight?: boolean
  classes?: string
}

export const CustomTable: FC<Props> = ({ thead, tbody, isHighlight, classes }) => {
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
                <td
                  key={i}
                  className={cn('border border-white/80 p-2.5', isHighlight && 'first:font-bold')}
                >
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
