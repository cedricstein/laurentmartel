import React, { useState } from "react";
import {
  Card,
  Image,
  Text,
  Group,
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

// Define your email form component (assuming you have one) here.
// This component should handle the email form UI and submission.

// For this example, let's create a simple EmailForm component.
const EmailForm = ({ article, onClose }) => {
  const [emailContent, setEmailContent] = useState(""); // State to store email content

  const handleSendEmail = () => {
    // Here, you can implement the logic to send an email with the content.
    // In this example, we'll just log the email content to the console.
    console.log("Email content:", emailContent);

    // Close the email form
    onClose();
  };

  return (
    <div className="email-form">
      <h2>Send an Email</h2>
      <form>
        <div>
          <label htmlFor="emailContent">Email Content:</label>
          <textarea
            id="emailContent"
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
            placeholder="Enter your message here..."
            rows="4"
            required
          ></textarea>
        </div>
        <button type="button" onClick={handleSendEmail}>
          Send Email
        </button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

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

  // Step 1: Create a state variable to control the visibility of the email form
  const [showEmailForm, setShowEmailForm] = useState(false);

  // Step 2: Function to handle the "Buy now" button click event
  const handleBuyNowClick = () => {
    // Toggle the visibility of the email form
    setShowEmailForm(!showEmailForm);
  };

  return (
    <Wrapper>
      <Sidebar />
      <ContentDiv>
        <Card
          withBorder
          radius="md"
          className={classes.card}
          style={{ width: "80%", maxWidth: "800px" }}
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
              {/* Step 3: Render the "Buy now" button with onClick event */}
              <Button
                radius="xl"
                style={{ flex: 1 }}
                onClick={handleBuyNowClick}
              >
                Buy now
              </Button>
            </Group>
          </Card.Section>
        </Card>
      </ContentDiv>

      {/* Step 4: Render the email form conditionally */}
      {showEmailForm && (
        <EmailForm
          article={article}
          onClose={() => setShowEmailForm(false)} // Function to close the email form
        />
      )}
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
