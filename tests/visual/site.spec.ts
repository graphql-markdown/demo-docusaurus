import { expect, test } from "@playwright/test";
import { argosScreenshot } from "@argos-ci/playwright";

// Paths are relative to the site baseUrl (`/demo-docusaurus/`).
// One page per GraphQL type kind the reference renders differently.
const pages = [
  ["object", "types/objects/project", "Project"],
  ["enum", "types/enums/project-status", "ProjectStatus"],
  ["interface", "types/interfaces/node", "Node"],
  ["union", "types/unions/search-result", "SearchResult"],
  ["input", "types/inputs/create-project-input", "CreateProjectInput"],
  ["scalar", "types/scalars/date-time", "DateTime"],
  ["query", "operations/queries/projects", "projects"],
  ["mutation", "operations/mutations/create-project", "createProject"],
  ["subscription", "operations/subscriptions/project-changed", "projectChanged"],
  ["directive", "types/directives/deprecated", "deprecated"],
] as const;

// Element screenshots are stitched while scrolling, so the sticky navbar
// and footer would be painted over the content. Hide them for those shots.
const hideChrome = "nav.navbar, footer { display: none !important; }";

const article = (page: import("@playwright/test").Page) =>
  page.locator(".theme-doc-markdown");

test("home", async ({ page }) => {
  const response = await page.goto("");
  expect(response?.status()).toBe(200);
  await expect(page.locator("h1")).toHaveText("Your API, mapped with intent.");
  await argosScreenshot(page, "home");
});

for (const [kind, path, title] of pages) {
  test(`page: ${kind}`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveText(title);
    await argosScreenshot(page, `page-${kind}`, {
      element: article(page),
      argosCSS: hideChrome,
    });
  });
}

// Each page is also published as plain Markdown next to it: no MDX or HTML spans.
test("markdown copy", async ({ page }) => {
  const response = await page.request.get("types/objects/project.md");
  expect(response.status()).toBe(200);
  const body = await response.text();
  expect(body.startsWith("# ")).toBe(true);
  expect(body).not.toContain("<span");
});

// Each page links to its copy.
test("markdown link", async ({ page }) => {
  await page.goto("types/objects/project");
  await expect(
    page.getByRole("link", { name: "View as Markdown" }),
  ).toHaveAttribute("href", /\/demo-docusaurus\/types\/objects\/project\.md$/);
});

// Type names in a deprecation reason link to their page.
test("deprecation reason links to a type page", async ({ page }) => {
  await page.goto("types/objects/project");
  const link = page
    .locator(".theme-admonition", { hasText: "Replaced by" })
    // Inside the collapsed "deprecated" group: hidden, so not a role query
    .locator("a", { hasText: "ProjectStatus" });
  await expect(link).toHaveAttribute(
    "href",
    /\/types\/enums\/project-status$/,
  );
});

// A type-level `@deprecatedType` renders a "Deprecated" notice.
test("deprecated type notice links to its replacement", async ({ page }) => {
  await page.goto("types/objects/legacy-project");
  const notice = page.locator(".theme-admonition", { hasText: "Replaced by" });
  await expect(notice).toContainText("Deprecated");
  await expect(notice.locator("a", { hasText: /^Project$/ })).toHaveAttribute(
    "href",
    /\/types\/objects\/project$/,
  );
});

test.describe("dark mode", () => {
  test.use({ colorScheme: "dark" });

  test("home", async ({ page }) => {
    await page.goto("");
    await argosScreenshot(page, "home-dark");
  });

  test("page: object", async ({ page }) => {
    await page.goto("types/objects/project");
    await expect(page.locator("h1")).toHaveText("Project");
    await argosScreenshot(page, "page-object-dark", {
      element: article(page),
      argosCSS: hideChrome,
    });
  });
});
