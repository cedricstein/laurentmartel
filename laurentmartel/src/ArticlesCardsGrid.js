import {
  createStyles,
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
} from "@mantine/core";
import { Link } from "react-router-dom";

export const formatData = [
  {
    title: "Basic format (no background)",
    id: "basic-format-no-background",
    image: "https://i.imgur.com/ZL52Q2D.png",
    format: "A4 (8.5' x 11')",
    price: "$ 115-130",
  },
  {
    title: "Large format (no background)",
    id: "large-format-no-background",
    image:
      "https://i.imgur.com/1a58LZp_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    format: "A3 (11' x 17')",
    price: "$ 220-235",
  },
  {
    title: "XL format (with no background)",
    id: "xl-format-with-no-background",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    format: "A4 (18' x 24')",
    price: "$ 415-430",
  },
  {
    title: "Basic format (with background)",
    id: "basic-format-with-background",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    format: "A4 (8.5' x 11')",
    price: "$ 205-220",
  },
  {
    title: "Large format (with background)",
    id: "large-format-with-background",
    image: "https://i.imgur.com/Fca4Zxd.png",
    format: "A3 (11' x 17')",
    price: "$ 400-415",
  },
  {
    title: "XL format (with background)",
    id: "xl-format-with-background",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    format: "A4 (18' x 24')",
    price: "$ 665-680",
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

export function ArticlesCardsGrid() {
  const { classes } = useStyles();

  const cards = formatData.map((article) => {
    // Create a clean URL-friendly title
    const cleanTitle = article.title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
    console.log(article.id);
    return (
      <Link
        key={article.id}
        to={`/order/${article.id}`} // Pass the article ID in the URL
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Card
          p="md"
          radius="md"
          component="a"
          href="#"
          className={classes.card}
        >
          <AspectRatio ratio={1920 / 1080}>
            <Image src={article.image} alt="Car" />
          </AspectRatio>
          <Text
            color="dimmed"
            size="xs"
            transform="uppercase"
            weight={700}
            mt="md"
          >
            {article.format}
          </Text>
          <Text className={classes.title} mt={5}>
            {article.title}
          </Text>
        </Card>
      </Link>
    );
  });

  return (
    <Container py="xl">
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}
