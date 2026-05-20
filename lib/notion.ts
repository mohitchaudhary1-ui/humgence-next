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
          property: "Status",
          status: {
            equals: "Published",
          },
        },
      }),
      cache: "no-store",
    }
  );
  

  const data = await response.json();
  // debug
  console.log("Notion Blogs Response:", data);


  return data.results || [];
}