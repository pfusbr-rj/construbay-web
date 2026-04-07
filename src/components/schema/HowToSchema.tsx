import JsonLd from './JsonLd'

interface HowToStep {
  name: string
  text: string
}

interface EstimatedCost {
  currency: string
  value: string
}

interface HowToSchemaProps {
  name: string
  description?: string
  totalTime?: string
  estimatedCost?: EstimatedCost
  steps: HowToStep[]
}

export default function HowToSchema({ name, description, totalTime, estimatedCost, steps }: HowToSchemaProps) {
  const data: Record<string, unknown> = {
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
  if (description) data.description = description
  if (totalTime) data.totalTime = totalTime
  if (estimatedCost) {
    data.estimatedCost = {
      '@type': 'MonetaryAmount',
      currency: estimatedCost.currency,
      value: estimatedCost.value,
    }
  }
  return <JsonLd data={data} />
}
