import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { UStoreProvider } from '@ustore/core'
import urlGenerator from '$ustoreinternal/services/urlGenerator'
import { decodeStringForURL } from '$ustoreinternal/services/utils'
import { Link } from '$routes';
import './BreadCrumb.scss'

// Example of the tree structure
// const tree = [
//   {
//   Category: { Name: "Root" },
//   SubCategories: [
//     {
//       Category: { Name: "Category1" },
//       SubCategories: [
//         {
//           Category: { Name: "Category1_1" },
//           SubCategories: []
//         },
//         {
//           Category: { Name: "Category1_2" },
//           SubCategories: []
//         }
//       ]
//     }
//   ]
// },
//   {
//   Category: { Name: "Root2" },
//   SubCategories: [
//       {
//       Category: { Name: "Category3" },
//       SubCategories: []
//       }
//   ]
//   }
// ];

/**
 * This component represents the breadcrumb in the store.
 * It uses UStoreProvider to get the current category and the categories tree
 * to find the path to the current category.
 * 
 * @returns JSX for the breadcrumb
 */

const BreadCrumb = () => {

  // Check if breadcrumb is enabled,
  // if not, return null
  const breadcrumbToggle = getVariableValue('--breadcrumb-toggle')
  if (breadcrumbToggle === '0px') return null;

  // Finds the path to the current category in the categories tree
  function findCategoryPath(tree, targetCategory, currentPath = []) {
    for (let i = 0; i < tree.length; i++) {
      const category = tree[i].Category;
      const newPath = [...currentPath, category];

      if (category.ID === targetCategory) {
        return newPath;
      }

      if (tree[i].SubCategories.length > 0) {
        const foundPath = findCategoryPath(tree[i].SubCategories, targetCategory, newPath);
        if (foundPath) {
          return foundPath;
        }
      }
    }

    return null; // Category not found in this branch
  }

  // Gets the current category and the categories tree from UStoreProvider
  // and calls findCategoryPath to get the path to the current category
  // If no current category or categories tree is found, return null
  function breadCrumb() {
    let currentCategory = UStoreProvider.state.customState.get('currentCategory')
    if (currentCategory === undefined) {
      return null
    }
    let categoriesTree = UStoreProvider.state.customState.get('categoriesTree')
    if (categoriesTree === undefined) {
      return null
    }
    return findCategoryPath(categoriesTree, currentCategory.ID)
  }

  const breadCrumbList = breadCrumb();
  if (!breadCrumbList) return null;

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to={urlGenerator.get({ page: 'home' })}><a>Home</a></Link>
        </BreadcrumbItem>
        {breadCrumbList.map((category, index) => {
          return <BreadcrumbItem key={index}>
            <Link to={urlGenerator.get({ 
                page: 'category', 
                id: category.FriendlyID, 
                name: decodeStringForURL(category.Name) })
            }>
              <a>{category.Name}</a>
            </Link>
          </BreadcrumbItem>
        })}
      </Breadcrumb>
    </div>
  )
}

export default BreadCrumb;
