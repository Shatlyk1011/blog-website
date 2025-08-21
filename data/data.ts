export const WebStorageTableHead = [
  'Feature',
  'Cookies',
  'Local Storage',
  'Session Storage',
  'IndexedDB',
]

export const WebStorageTableBody = [
  [
    'Size Limit',
    '~4KB per cookie',
    '5-10 MiB per origin',
    '5-10 MiB per origin',
    'Up to 10-60% of disk',
  ],
  [
    'Persistence',
    'Session or set expiration',
    'Across sessions',
    'Tab/session only',
    'Across sessions',
  ],
  ['Access', 'Client & Server', 'Client only', 'Client only', 'Client only'],
  [
    'Data Type',
    'Strings',
    'Strings (JSON for objects)',
    'Strings (JSON for objects)',
    'Structured objects/blobs',
  ],
  ['Sent with Requests', 'Yes', 'No', 'No', 'No'],
  ['Async/Sync', 'Sync', 'Sync', 'Sync', 'Async'],
  [
    'Use Case',
    'Sessions, tracking',
    'Persistent preferences',
    'Temporary tab data',
    'Large/offline data',
  ],
]
