interface HowToStep {
  name: string
  text: string
}

interface HowToSchemaProps {
  name: string
  description?: string
  steps: HowToStep[]
}

export default function HowToSchema({ name, description, steps }: HowToSchemaProps) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  }

  if (description) {
    schema.description = description
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
