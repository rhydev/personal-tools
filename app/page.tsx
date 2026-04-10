import { Container, SimpleGrid } from '@mantine/core'
import { LinkCards } from '@/app/ui/linkCards'

export default function Home() {
  return (
    <div>
      <main>
        <Container
          size="xl"
          py="md"
        >
          <SimpleGrid
            cols={{ base: 1, xs: 1, sm: 2 }}
            spacing={16}
          >
            <LinkCards cardType="main" />
          </SimpleGrid>
        </Container>
      </main>
    </div>
  )
}
