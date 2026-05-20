export async function getBlogs() {
  const response = await fetch(
    `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
    {
      method: "POST",

      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        filter: {
          property: "Published",
          checkbox: {
            equals: true,
          },
        },

        sorts: [
          {
            property: "Date",
            direction: "descending",
          },
        ],
      }),

      // IMPORTANT
      cache: "no-store",
    }
  );

  if (!response.ok) {
    console.log(await response.text());

    throw new Error("Failed to fetch blogs");
  }

  const data = await response.json();

  return data.results || [];
}