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
  Box,
  useMantineTheme,
  Button,
  Divider,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import classes from './header.module.css'
import Link from 'next/link'
import { IconChevronDown, IconMoon, IconSun } from '@tabler/icons-react'
import { LinkCards } from '@/app/ui/linkCards'

export function Header() {
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true })

  const [opened, { toggle, close }] = useDisclosure(false)

  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
  const theme = useMantineTheme()

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
                <LinkCards cardType="header" />
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
          <Collapse expanded={linksOpened}>
            <LinkCards cardType="collapse" />
          </Collapse>

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
