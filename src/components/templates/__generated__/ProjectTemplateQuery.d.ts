/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProjectTemplateQuery
// ====================================================

export interface ProjectTemplateQuery_poetry {
  id: string;
  title: string | null;
  slug: string | null;
  published: boolean | null;
  image_url: string | null;
  excerpt: string | null;
  description: string | null;
  strapiId: string | null;
  createdAt: any | null;
}

export interface ProjectTemplateQuery {
  poetry: ProjectTemplateQuery_poetry | null;
}

export interface ProjectTemplateQueryVariables {
  slug: string;
}
