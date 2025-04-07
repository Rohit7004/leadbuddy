"use client"; // if you're using App Router

import React from "react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Ways to Generate Quality Real Estate Leads",
    description: "Discover proven strategies to attract and convert high-quality property inquiries.",
    date: "April 7, 2025",
    slug: "generate-quality-real-estate-leads",
  },
  {
    id: 2,
    title: "How to Nurture Long-Term Buyer Leads Effectively",
    description: "Master the art of lead nurturing to close high-ticket property deals over time.",
    date: "March 28, 2025",
    slug: "nurture-long-term-buyer-leads",
  },
  {
    id: 3,
    title: "LeadBuddy vs. Other Platforms: What's Different?",
    description: "A side-by-side comparison of how LeadBuddy delivers better ROI for real estate marketing.",
    date: "March 10, 2025",
    slug: "leadbuddy-vs-others",
  },
];

const BlogPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-700">Our Blog</h1>
        <p className="text-gray-600 mt-2">Insights, tips, and updates on real estate lead generation.</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id}>
            <div className="border rounded-xl p-6 hover:shadow-xl transition cursor-pointer h-full flex flex-col justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-gray-600 text-sm">{post.description}</p>
              </div>
              <span className="text-purple-600 mt-4 text-sm font-medium">Read More →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
