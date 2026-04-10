'use client'

import { Group, UnstyledButton, ThemeIcon, useMantineTheme, Text } from '@mantine/core'
import classes from './linkCards.module.css'
import Link from 'next/link'
import { IconCalculator, IconNote, IconToolsKitchen3 } from '@tabler/icons-react'

type CardData = {
  icon: typeof IconNote
  title: string
  description: string
  link: string
}

const linkCardData = [
  {
    icon: IconNote,
    title: 'Notes',
    description: 'Note taking app',
    link: '/notes',
  },
  {
    icon: IconCalculator,
    title: 'BMI Calculator',
    description: 'Simple BMI calculator',
    link: '/bmi-calculator',
  },
  {
    icon: IconCalculator,
    title: 'TDEE Calculator',
    description: 'Simple TDEE calculator',
    link: '/tdee-calculator',
  },
  {
    icon: IconToolsKitchen3,
    title: 'Calories Tracker',
    description: 'Calories tracking app',
    link: '/calories-tracker',
  },
]

type CardType = 'header' | 'collapse' | 'main'

type LinkCardProps = {
  cardType: CardType
}

function LinkCard({ data, cardType = 'header' }: LinkCardProps & { data: CardData }) {
  const theme = useMantineTheme()

  // Link card in app header
  if (cardType === 'header') {
    return (
      <UnstyledButton
        className={`${classes.linkCard} ${classes.header}`}
        renderRoot={(props) => (
          <Link
            href={data.link}
            {...props}
          />
        )}
      >
        <Group
          wrap="nowrap"
          align="flex-start"
        >
          <ThemeIcon
            size={34}
            variant="default"
            radius="md"
          >
            <data.icon
              size={22}
              color={theme.colors[theme.primaryColor][4]}
            />
          </ThemeIcon>
          <div>
            <Text
              size="sm"
              fw={500}
            >
              {data.title}
            </Text>
            <Text
              size="xs"
              c="dimmed"
            >
              {data.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    )
  }

  // Link card in mobile navigation collapse
  if (cardType === 'collapse') {
    return (
      <UnstyledButton
        className={`${classes.linkCard} ${classes.collapse}`}
        renderRoot={(props) => (
          <Link
            href={data.link}
            {...props}
          />
        )}
      >
        <Group
          wrap="nowrap"
          align="flex-start"
        >
          <ThemeIcon
            size={34}
            variant="default"
            radius="md"
          >
            <data.icon
              size={22}
              color={theme.colors[theme.primaryColor][4]}
            />
          </ThemeIcon>
          <div>
            <Text
              size="sm"
              fw={500}
            >
              {data.title}
            </Text>
            <Text
              size="xs"
              c="dimmed"
            >
              {data.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    )
  }

  // Link card on home page
  if (cardType === 'main') {
    return (
      <UnstyledButton
        className={`${classes.linkCard} ${classes.main}`}
        renderRoot={(props) => (
          <Link
            href={data.link}
            {...props}
          />
        )}
      >
        <Group
          wrap="nowrap"
          align="flex-start"
        >
          <ThemeIcon
            size={52}
            variant="transparent"
            radius="md"
          >
            <data.icon
              size={40}
              color={theme.colors[theme.primaryColor][4]}
            />
          </ThemeIcon>
          <div>
            <Text
              className={classes.title}
              size="xl"
              fw={500}
            >
              {data.title}
            </Text>
            <Text
              size="md"
              c="dimmed"
            >
              {data.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    )
  }
}

export function LinkCards({ cardType }: LinkCardProps) {
  return linkCardData.map((item) => (
    <LinkCard
      key={item.title}
      data={item}
      cardType={cardType}
    />
  ))
}
