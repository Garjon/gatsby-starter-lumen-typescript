import { ReactNode } from 'react';

export interface RenderCallback {
  render: (data: any) => ReactNode;
}

export interface Entry {
  getIn: (value: string[]) => string;
}

export type WidgetFor = (value: string) => string;

export interface PageContext {
  tag: string;
  category: string;
  currentPage: number;
  prevPagePath: string;
  nextPagePath: string;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}

export interface Node {
  fields: {
    slug: string;
    categorySlug?: string;
    tagSlugs?: string[];
  };
  frontmatter: {
    date: string;
    description?: string;
    category?: string;
    tags?: string[];
    title: string;
    socialImage?: string;
  };
  html: string;
  id: string;
}

export interface Edge {
  node: Node;
}

export type Edges = Array<Edge>;

export interface AllMarkdownRemark {
  allMarkdownRemark: {
    edges: Edges;
  };
  group: {
    fieldValue: string;
    totalCount: number;
  }[];
}

export type MarkdownRemark = Node;
