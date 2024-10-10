# 🚀 My Portfolio

This repository contains the source code for my personal portfolio website, built with modern web technologies to showcase my projects and experience.

## 🛠️ Built With

- **⚛️ [Gatsby](https://www.gatsbyjs.com/)** - A React-based open-source framework for creating static websites and apps.
- **⚙️ [React.js](https://reactjs.org/)** - JavaScript library for building user interfaces.
- **📝 [Contentful](https://www.contentful.com/)** - A headless CMS for managing dynamic content.
- **🤖 [GitHub Actions](https://github.com/features/actions)** - Automating workflows for testing, building, and managing releases.
- **☁️ [AWS S3](https://aws.amazon.com/s3/)** - Scalable object storage for hosting static assets.
- **🌍 [AWS CloudFront](https://aws.amazon.com/cloudfront/)** - Content delivery network for serving assets globally with low latency.
- **🌐 [Cloudflare](https://www.cloudflare.com/)** - DNS provider to manage domain and traffic routing.
- **📊 [Google Analytics](https://analytics.google.com/)** - Provides insights and data on website traffic and usage.
- **🖌️ [Prettier](https://prettier.io/)** - Opinionated code formatter to maintain consistent code style.
- **⚡ [XO](https://github.com/xojs/xo)** - JavaScript linter with great defaults for code quality and style enforcement.
- **🐶 [Husky](https://typicode.github.io/husky/)** - Git hooks for running automated tasks.
- **🛠️ [lint-staged](https://github.com/okonet/lint-staged)** - Run linters on only staged files in Git.

## ✨ Features

- **📱 Responsive Design**: Mobile-first approach, ensuring the website works smoothly across devices.
- **🤖 Automated Release Workflow**: GitHub Actions workflow for semantic versioning, creating releases, building, and uploading artifacts.
- **⚡ Optimized Performance**: Gatsby optimizations and CloudFront for fast, globally distributed content delivery.
- **📋 Content Management with Contentful**: Update site content dynamically via Contentful's headless CMS.
- **📈 Google Analytics**: Integrated for tracking and analyzing user interactions and traffic patterns.
- **✅ Code Quality**: Prettier and XO integration for consistent and high-quality code style.
- **🔍 SEO Optimized**: Gatsby’s SEO-friendly setup to help improve search engine rankings.
- **♿ Accessible Design**: Built to meet accessibility standards for a more inclusive user experience.
- **🔧 Git Hooks**: Husky and lint-staged enforce code quality and prevent broken code on commit.

## 🚀 Installation and Setup

1. **📂 Clone the repository**:

   ```bash
   git clone git@github.com:SebSV-GitHub/Portfolio.git
   cd portfolio
   ```

2. **📦 Install dependencies**:

   ```bash
   npm install
   ```

3. **🔐 Environment Variables**: Create a `.env` file in the root directory with your Contentful and Google Analytics credentials.

   ```env
   CONTENTFUL_SPACE_ID=your_contentful_space_id
   CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token
   GOOGLE_ANALYTICS_TRACKING_ID=UA-XXXXXXXXX-X
   ```

## 🚢 GitHub Actions Workflow

This project uses GitHub Actions for an automated release and deployment pipeline, following these steps:

1. **Semantic Versioning**: Every push to the main branch triggers semantic versioning to increment version numbers automatically.
2. **Create Release**: A new release is generated with version tags and release notes.
3. **Build and Upload Artifact**: The release build is generated, optimized, and uploaded as an artifact in the GitHub release.
4. **Manual Deployment**: Once the release is created, you can manually trigger deployment to AWS S3 and CloudFront.

To deploy manually, download the latest artifact from the release and upload it to your AWS S3 bucket. Then, use AWS CloudFront to invalidate the cache and serve updated content globally.

In order allow the workflow to be shared you need to follow this [Article](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-select-actions-and-reusable-workflows-to-run)

The workflows created here follow this [patter](https://docs.github.com/en/actions/sharing-automations/reusing-workflows#creating-a-reusable-workflow)

> Don't forget to add this environment variables: CONTENTFUL_SPACE_ID and GOOGLE_ANALYTICS_TRACKING_ID, and the secret: CONTENTFUL_ACCESS_TOKEN

### Manually Deploying to S3 and CloudFront

If you need to manually deploy after a release:

1. **Download the Artifact**:

   - Go to the release in GitHub and download the artifact from the release assets.

2. **Upload to AWS S3**:

   - Use the AWS CLI or AWS S3 console to upload the artifact files to the specified S3 bucket.

   ```bash
   aws s3 sync ./public s3://your-bucket-name
   ```

3. **Invalidate CloudFront Cache**:

   - Use the AWS CLI to invalidate the CloudFront distribution cache, ensuring that updated content is delivered.

   ```bash
   aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
   ```

## 📋 Contentful Setup

1. **🌟 Create a Contentful Account** and set up a space for your content.
2. **🔧 Define Content Models**: Create content types (e.g., "Project", "About Me") and add fields such as title, description, and images.
3. **⚙️ Configure Contentful in Gatsby**:

   - Install the Gatsby Contentful plugin:
     ```bash
     npm install gatsby-source-contentful
     ```
   - Add `gatsby-source-contentful` to `gatsby-config.mjs` and reference your space ID and access token.

4. **🔍 Query Contentful Data**:
   - Test queries in Gatsby’s GraphQL explorer at `http://localhost:8000/___graphql`.

## 📈 Google Analytics Setup

1. **🌟 Create a Google Analytics Account** and set up a new property for your portfolio site.
2. **📊 Copy the Tracking ID**: (format: `UA-XXXXXXXXX-X` or `G-XXXXXXXXX` for GA4).
3. **⚙️ Install the Gatsby Google Analytics plugin**:
   ```bash
   npm install gatsby-plugin-google-analytics
   ```
4. **🛠️ Add Google Analytics to `gatsby-config.mjs`** with the tracking ID as shown in the ESM setup.

## ✅ Code Quality and Linting

- **🖌️ Format code using Prettier**:

  ```bash
  npm run format
  ```

- **⚡ Lint code using XO**:
  ```bash
  npm run lint
  ```

## ⚙️ Configuration

To customize this repository for your own portfolio, update the following:

1. **📄 Site Metadata**: Edit `gatsby-config.mjs` to configure site information such as title, description, and author.
2. **🔐 AWS Credentials**: Set up AWS credentials as secrets in your GitHub repository for deployment via GitHub Actions.
3. **🌐 Cloudflare**: Update DNS settings on Cloudflare to point to your CloudFront distribution.
4. **📋 Contentful Models**: Set up and edit Contentful models to match your content needs.

## 📁 Directory Structure

```
├── src
│   ├── components    # Reusable components
│   ├── images        # Image assets
│   ├── pages         # Pages for each section of the portfolio
│   └── styles        # Styling files
├── static            # Static assets
├── gatsby-config.mjs # Gatsby configuration file (ESM enabled)
├── gatsby-node.mjs   # Programmatic creation of pages (ESM enabled)
└── ...
```

## 🤝 Contributing

If you’d like to contribute to this portfolio, feel free to fork the repo and submit a pull request. Improvements and feature suggestions are welcome!

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 📬 Contact

For any questions or feedback, please reach out through my [LinkedIn](https://www.linkedin.com/in/sebastian-suarez-valencia/) or visit my [website](https://www.sebsv.com).
