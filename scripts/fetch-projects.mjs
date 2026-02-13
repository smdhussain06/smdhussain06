#!/usr/bin/env node

import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// GitHub API configuration
const GITHUB_USER = 'smdhussain06';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';
const API_URL = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&type=public`;

// Topic to category mapping
const TOPIC_CATEGORY_MAP = {
  'ai-engineering': 'AI Engineering',
  'digital-marketing': 'Digital Marketing',
  'content-creation': 'Content Creation'
};

// Category to icon mapping
const CATEGORY_ICON_MAP = {
  'AI Engineering': 'ai',
  'Digital Marketing': 'design',
  'Content Creation': 'video'
};

// Capitalize words for tags
function formatTag(tag) {
  return tag
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Determine button type and text based on homepage URL
function getButtonInfo(homepageUrl) {
  if (homepageUrl && homepageUrl.trim() !== '') {
    return {
      buttonText: 'Try It Live',
      buttonType: 'demo',
      link: homepageUrl
    };
  }
  return {
    buttonText: 'View Repository',
    buttonType: 'github',
    link: null // Will be set to github URL
  };
}

async function fetchGitHubProjects() {
  console.log('Fetching GitHub repositories...');
  
  try {
    const headers = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'portfolio-updater'
    };
    
    // Add auth token if available
    if (GITHUB_TOKEN) {
      headers['Authorization'] = `token ${GITHUB_TOKEN}`;
    }
    
    const response = await fetch(API_URL, { headers });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const repos = await response.json();
    console.log(`Found ${repos.length} total repositories`);

    // Filter and transform repositories
    const projects = [];
    
    for (const repo of repos) {
      const topics = repo.topics || [];
      
      // Check if repo has any of our category topics
      const categoryTopic = topics.find(topic => TOPIC_CATEGORY_MAP[topic]);
      
      if (!categoryTopic) {
        continue; // Skip repos without category topics
      }

      const category = TOPIC_CATEGORY_MAP[categoryTopic];
      const iconType = CATEGORY_ICON_MAP[category];
      
      // Get tags (excluding the category topic itself)
      const tags = topics
        .filter(topic => topic !== categoryTopic)
        .map(formatTag);

      // Get button info
      const buttonInfo = getButtonInfo(repo.homepage);

      const project = {
        title: repo.name.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' '),
        category: category,
        description: repo.description || 'No description provided',
        image: '/placeholder.svg?height=300&width=400',
        iconType: iconType,
        isSlider: false, // GitHub projects don't have sliders by default
        tags: tags,
        link: buttonInfo.link || repo.html_url,
        github: repo.html_url,
        buttonText: buttonInfo.buttonText,
        buttonType: buttonInfo.buttonType,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
        updatedAt: repo.updated_at
      };

      projects.push(project);
    }

    console.log(`Processed ${projects.length} projects with category topics`);

    // Write to JSON file
    const outputPath = join(__dirname, '..', 'data', 'github-projects.json');
    writeFileSync(outputPath, JSON.stringify(projects, null, 2));
    console.log(`✅ Successfully wrote ${projects.length} projects to ${outputPath}`);

    return projects;
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    process.exit(1);
  }
}

// Run the script
fetchGitHubProjects();
