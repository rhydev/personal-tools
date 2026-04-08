'use client'

import {
  Title,
  Burger,
  Center,
  Collapse,
  Container,
  Drawer,
  Group,
  ScrollArea,
  UnstyledButton,
  useMantineColorScheme,
  useComputedColorScheme,
  ActionIcon,
  HoverCard,
  SimpleGrid,
  ThemeIcon,
  Box,
  useMantineTheme,
  Text,
  Button,
  Divider,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import classes from './header.module.css'
import Link from 'next/link'
import { IconChevronDown, IconMoon, IconSun, IconCalculator, IconNote, IconToolsKitchen3 } from '@tabler/icons-react'

const hoverCardData = [
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

export function Header() {
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true })

  const [opened, { toggle, close }] = useDisclosure(false)

  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
  const theme = useMantineTheme()

  const links = hoverCardData.map((item) => (
    <UnstyledButton
      className={classes.subLink}
      key={item.title}
      bdrs={opened ? '' : 'md'}
      style={{
        width: '100%',
      }}
      renderRoot={(props) => (
        <Link
          href={item.link}
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
          <item.icon
            size={22}
            color={theme.colors[theme.primaryColor][4]}
          />
        </ThemeIcon>
        <div>
          <Text
            size="sm"
            fw={500}
          >
            {item.title}
          </Text>
          <Text
            size="xs"
            c="dimmed"
          >
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ))

  return (
    <header className={classes.header}>
      <Container
        size="xl"
        className={classes.inner}
      >
        <Title
          className={classes.title}
          order={2}
          renderRoot={(props) => (
            <Link
              href="/"
              {...props}
            />
          )}
        >
          rhydev.tools
        </Title>
        <Group
          gap={5}
          visibleFrom="sm"
        >
          <HoverCard
            width={600}
            position="bottom"
            radius="md"
            shadow="md"
            withinPortal
          >
            <HoverCard.Target>
              <div
                className={classes.link}
                style={{ cursor: 'pointer' }}
              >
                <Center inline>
                  <Box
                    component="span"
                    mr={5}
                  >
                    Tools
                  </Box>
                  <IconChevronDown
                    size={16}
                    color={theme.colors[theme.primaryColor][4]}
                  />
                </Center>
              </div>
            </HoverCard.Target>

            <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
              <SimpleGrid
                cols={2}
                spacing={0}
              >
                {links}
              </SimpleGrid>
            </HoverCard.Dropdown>
          </HoverCard>
          <Link
            key="Register"
            href="/register"
            className={classes.link}
          >
            Register
          </Link>
          <ActionIcon
            onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
            variant="default"
            size="lg"
            radius="sm"
            aria-label="Toggle color scheme"
            style={{
              '--ai-bd': 'none',
              '--ai-bg': 'transparent',
            }}
          >
            <IconSun className={`${classes.icon} ${classes.light}`} />
            <IconMoon className={`${classes.icon} ${classes.dark}`} />
          </ActionIcon>
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
          aria-label="Toggle navigation"
        />
      </Container>

      <Drawer
        opened={opened}
        onClose={close}
        size="75%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea
          h="calc(100vh - 80px"
          mx="-md"
        >
          <UnstyledButton
            className={classes.link}
            onClick={toggleLinks}
            style={{ width: '100%' }}
          >
            <Center inline>
              <Box
                component="span"
                mr={5}
              >
                Tools
              </Box>
              <IconChevronDown
                size={16}
                color={theme.colors[theme.primaryColor][4]}
                className={`${classes.drawerMenuIcon} ${linksOpened ? classes.rotateUp : classes.rotateDown}`}
              />
            </Center>
          </UnstyledButton>
          <Collapse expanded={linksOpened}>{links}</Collapse>

          <Divider my="sm" />

          <Group
            justify="center"
            grow
            pb="xl"
            px="md"
          >
            <Button variant="default">Login</Button>
            <Button>Register</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </header>
  )
}
