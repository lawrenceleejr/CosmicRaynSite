import { getCollection } from "astro:content";

// Expose plain async functions for build-time data fetching. These replace
// server actions so the site can be exported as a fully static site for
// GitHub Pages (static hosting doesn't support server adapters/actions).
export async function getCategories() {
    const allArticles = await getCollection("articles");

    const categories = [
        ...new Set(allArticles.map((article) => article.data.category)),
    ];

    return { success: true, categories };
}

export async function filterByCategory({ category }: { category: string }) {
    const articles: any[] = [];

    const allArticles = await getCollection("articles");

    if (!category || category === "all") {
        articles.push(...allArticles);
        return { success: true, articles };
    }

    const filteredArticles = allArticles.filter((article) =>
        article.data.category.toLowerCase() === category.toLowerCase(),
    );

    articles.push(...filteredArticles);

    return { success: true, articles };
}
