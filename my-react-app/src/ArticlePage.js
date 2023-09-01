import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  Center,
  Button,
  rem,
} from "@mantine/core";
import {
  IconGasStation,
  IconGauge,
  IconManualGearbox,
  IconUsers,
} from "@tabler/icons-react";

import { styled } from "styled-components";
import Sidebar from "./Sidebar";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    textTransform: "uppercase",
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: rem(5),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
  },
}));

const formatData = [
  { label: "4 passengers", icon: IconUsers },
  { label: "100 km/h in 4 seconds", icon: IconGauge },
  { label: "Automatic gearbox", icon: IconManualGearbox },
  { label: "Electric", icon: IconGasStation },
];

export const ArticlePage = ({ article }) => {
  const { classes } = useStyles();
  const features = formatData.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <Wrapper>
      <Sidebar />
      <ContentDiv>
        <Card
          withBorder
          radius="md"
          className={classes.card}
          style={{ width: "80%", maxWidth: "800px" }} // Adjust these values as needed
        >
          <Card.Section className={classes.imageSection}>
            <Image src={article.image} alt="Car" />
          </Card.Section>

          <Group position="apart" mt="md">
            <div>
              <Text fw={500}>{article.format}</Text>
              <Text fz="xs" c="dimmed">
                {article.title}
              </Text>
            </div>
            {/* <Badge variant="outline">25% off</Badge> */}
          </Group>

          <Card.Section className={classes.section} mt="md">
            <Text fz="sm" c="dimmed" className={classes.label}>
              Features
            </Text>

            <Group spacing={8} mb={-8}>
              {features}
            </Group>
          </Card.Section>

          <Card.Section className={classes.section}>
            <Group spacing={30}>
              <div>
                <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
                  {article.price}
                </Text>
                <Text fz="sm" c="dimmed" fw={500} sx={{ lineHeight: 1 }} mt={3}>
                  USD
                </Text>
              </div>

              <Button radius="xl" style={{ flex: 1 }}>
                Buy now
              </Button>
            </Group>
          </Card.Section>
        </Card>
      </ContentDiv>
    </Wrapper>
  );
};

const ContentDiv = styled.div`
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  flex-grow: 1;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  background-color: white;
  width: 100%; /* Take up full available width */
  height: 100vh;
`;

export default ArticlePage;
