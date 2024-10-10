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
   git clone https://github.com/your-username/portfolio.git
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

## 🔑 Setting Up Secrets and Environment Variables in GitHub

To use GitHub Actions workflows effectively, set up the following secrets and environment variables in your GitHub repository. These will allow the workflows to access necessary credentials and configuration values for building, deploying, and managing the project.

1. **🔧 Go to your GitHub repository** > **Settings** > **Secrets and variables** > **Actions**.
2. Click **New repository secret** or **New repository variable** and add the following:

### 🔒 Secrets

| Secret Name               | Description                                   |
| ------------------------- | --------------------------------------------- |
| `CONTENTFUL_ACCESS_TOKEN` | Access token for Contentful to fetch CMS data |

### 🌐 Environment Variables

| Variable Name                  | Description                                     |
| ------------------------------ | ----------------------------------------------- |
| `AWS_BUCKET_NAME`              | Your AWS S3 bucket name                         |
| `AWS_DISTRIBUTION_ID`          | AWS CloudFront distribution ID                  |
| `AWS_IAM_ROLE`                 | IAM role with permissions for S3 and CloudFront |
| `AWS_REGION`                   | AWS region where the S3 bucket is hosted        |
| `CONTENTFUL_SPACE_ID`          | Contentful space ID to access CMS content       |
| `GOOGLE_ANALYTICS_TRACKING_ID` | Tracking ID for Google Analytics                |

After adding these secrets and variables, they will be available to your GitHub Actions workflows as environment variables, allowing for secure access to third-party services during the build and deployment processes.

## 🚢 GitHub Actions Workflow

This project uses GitHub Actions for an automated release and deployment pipeline, following these steps:

1. **🔖 Semantic Versioning**: Every push to the main branch triggers semantic versioning to increment version numbers automatically.
2. **📦 Create Release**: A new release is generated with version tags and release notes.
3. **⚙️ Build and Upload Artifact**: The release build is generated, optimized, and uploaded as an artifact in the GitHub release.
4. **🚀 Manual Deployment**: Once the release is created, you can manually trigger deployment to AWS S3 and CloudFront.

### 🔐 Protecting the Main Branch

To enforce best practices and protect the `main` branch from direct modifications, configure branch protection rules:

1. **Go to your GitHub repository** > **Settings** > **Branches** > **Branch protection rules**.
2. Click **Add rule** and set the following rules for the `main` branch:

   - **✅ Require pull request reviews before merging**: Enforce a review process for all changes.
   - **⚠️ Require status checks to pass before merging**: Ensure that all tests and workflows in GitHub Actions complete successfully before merging.
   - **🔏 Require signed commits** (optional): For added security, require that all commits are signed.
   - **🔄 Require linear history**: Enforce a linear history by preventing merge commits.
   - **🔐 Include administrators** (optional): If you want these rules to apply to administrators as well.

3. Click **Create** to save the branch protection rules.

These protections help maintain the integrity of the `main` branch by enforcing a review and testing process before any code is merged.

### ⚙️ Manually Deploying to S3 and CloudFront

If you need to manually deploy after a release:

1. **⬇️ Download the Artifact**:

   - Go to the release in GitHub and download the artifact from the release assets.

2. **☁️ Upload to AWS S3**:

   - Use the AWS CLI or AWS S3 console to upload the artifact files to the specified S3 bucket.

   ```bash
   aws s3 sync ./public s3://$AWS_BUCKET_NAME
   ```

3. **🚀 Invalidate CloudFront Cache**:

   - Use the AWS CLI to invalidate the CloudFront distribution cache, ensuring that updated content is delivered.

   ```bash
   aws cloudfront create-invalidation --distribution-id $AWS_DISTRIBUTION_ID --paths "/*"
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

## 📝 Commit Naming Standards

This project follows **[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)** to maintain clear and consistent commit messages. Use the following format for commit messages:

```
<type>[optional scope]: <description>
```

### Examples of Commit Types

- **feat**: Adding a new feature (e.g., `feat: add new project page`)
- **fix**: Fixing a bug (e.g., `fix: resolve API request issue`)
- **docs**: Documentation changes (e.g., `docs: update README with setup instructions`)
- **style**: Code style changes (non-functional, like formatting) (e.g., `style: format code with Prettier`)
- **refactor**: Refactoring code

(no functional changes) (e.g., `refactor: optimize component structure`)

- **test**: Adding or updating tests (e.g., `test: add tests for login function`)
- **chore**: Routine tasks or maintenance (e.g., `chore: update dependencies`)

Using Conventional Commits helps in generating changelogs, automating release processes, and understanding the history of changes.

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

For any questions or feedback, please reach out through my [LinkedIn](https://www.linkedin.com/) or visit my [website](https://your-portfolio-link.com).
