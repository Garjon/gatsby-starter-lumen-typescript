import { useStaticQuery, graphql } from 'gatsby';

interface CategoriesListData {
  allMarkdownRemark: {
    group: [
      {
        fieldValue: string;
        totalCount: number;
      }
    ];
  };
}

const useCategoriesList = () => {
  const { allMarkdownRemark } = useStaticQuery<CategoriesListData>(
    graphql`
      query CategoriesListQuery {
        allMarkdownRemark(filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `
  );

  return allMarkdownRemark.group;
};

export default useCategoriesList;
