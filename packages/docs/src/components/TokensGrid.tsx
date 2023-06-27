import '../styles/tokens-grid.css'

interface TokensGridProps {
  token: Record<string, string>
  hasRemValue?: boolean
}

export function TokensGrid({ token, hasRemValue = false }: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>pixels</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(token).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && (
                <td>{Number(value.replace('rem', '')) * 16}px</td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
