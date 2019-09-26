// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

interface TagListData {
  allMarkdownRemark: {
    group: [
      {
        fieldValue: string;
        totalCount: number;
      }
    ];
  };
}

const useTagsList = () => {
  const { allMarkdownRemark } = useStaticQuery<TagListData>(
    graphql`
      query TagsListQuery {
        allMarkdownRemark(filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `
  );

  return allMarkdownRemark.group;
};

export default useTagsList;
