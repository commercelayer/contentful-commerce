import { ContentTypeField } from "@contentful/app-sdk";

export type ContentTypeConfiguration = {
  id: string;
  name: string;
  description: string;
  fields: ContentTypeField[];
  displayField: string;
};

const DEFAULTS = {
  variant: "Variant",
  product: "Product",
  taxonomy: "Taxonomy",
  taxon: "Taxon",
};

const getSchema = ({
  localized = false,
  productLabel,
  variantLabel,
  taxonomyLabel,
  taxonLabel,
}: {
  localized?: boolean;
  productLabel?: string;
  variantLabel?: string;
  taxonomyLabel?: string;
  taxonLabel?: string;
}): ContentTypeConfiguration[] => {
  return [
    {
      id: "variant",
      name: variantLabel || DEFAULTS.variant,
      displayField: "name",
      description:
        "Represents a specific variant of a product. Variants are typically different versions of a product, differentiated by attributes like size, color, or other specifications. Each variant has a unique SKU for inventory tracking and may have its own set of images.",
      fields: [
        {
          id: "name",
          name: "Name",
          type: "Symbol",
          required: true,
          localized,
        },
        {
          id: "description",
          name: "Description",
          type: "Text",
          required: false,
          localized,
        },
        {
          id: "sku",
          name: "SKU",
          type: "Symbol",
          required: true,
          localized,
        },
        {
          id: "images",
          name: "Images",
          type: "Array",
          items: {
            type: "Link",
            linkType: "Asset",
          },
          required: false,
          localized,
        },
      ],
    },
    {
      id: "product",
      name: productLabel || DEFAULTS.product,
      displayField: "name",
      description:
        "Represents a general product offering that can have multiple variants. This content type includes basic product information such as the product name and description. It also references the various variants of the product, allowing for a comprehensive view of all available options.",
      fields: [
        {
          id: "name",
          name: "Name",
          type: "Symbol",
          required: true,
          localized,
        },
        {
          id: "description",
          name: "Description",
          type: "Text",
          required: false,
          localized,
        },
        {
          id: "variants",
          name: "Variants",
          type: "Array",
          items: {
            type: "Link",
            linkType: "Entry",
            validations: [
              {
                linkContentType: ["variant"],
              },
            ],
          },
          required: false,
          localized,
        },
      ],
    },
    {
      id: "taxon",
      name: taxonLabel || DEFAULTS.taxon,
      displayField: "name",
      description:
        "Represents individual categories or subcategories within a taxonomy. Taxons help in organizing products into hierarchical structures, making it easier to navigate and find products. A taxon can reference other taxons, allowing for nested categorization, and can also link to specific products that fall under it.",
      fields: [
        {
          id: "name",
          name: "Name",
          type: "Symbol",
          required: true,
          localized,
        },
        {
          id: "description",
          name: "Description",
          type: "Text",
          required: false,
          localized,
        },
        {
          id: "taxons",
          name: "Taxons",
          type: "Array",
          items: {
            type: "Link",
            linkType: "Entry",
            validations: [
              {
                linkContentType: ["taxon"],
              },
            ],
          },
          required: false,
          localized,
        },
        {
          id: "products",
          name: "Products",
          type: "Array",
          items: {
            type: "Link",
            linkType: "Entry",
            validations: [
              {
                linkContentType: ["product"],
              },
            ],
          },
          required: false,
          localized,
        },
      ],
    },
    {
      id: "taxonomy",
      name: taxonomyLabel || DEFAULTS.taxonomy,
      displayField: "name",
      description:
        "Represents the overall categorization system used to organize products. A taxonomy is a hierarchical structure comprising various taxons. This content type defines the broad categories and their relationships, serving as a framework for the classification of products.",
      fields: [
        {
          id: "name",
          name: "Name",
          type: "Symbol",
          required: true,
          localized,
        },
        {
          id: "description",
          name: "Description",
          type: "Text",
          required: false,
          localized,
        },
        {
          id: "taxons",
          name: "Taxons",
          type: "Array",
          items: {
            type: "Link",
            linkType: "Entry",
            validations: [
              {
                linkContentType: ["taxon"],
              },
            ],
          },
          required: false,
          localized,
        },
      ],
    },
    {
      id: "catalog",
      name: "Catalog",
      displayField: "name",
      description:
        "Represents a collection of products, typically grouped under specific taxonomies for organizational purposes. A catalog is used to present a curated selection of products, often tailored for specific markets, seasons, or themes. It references taxonomies to leverage the established hierarchical structure for product categorization.",
      fields: [
        {
          id: "name",
          name: "Name",
          type: "Symbol",
          required: true,
          localized,
        },
        {
          id: "description",
          name: "Description",
          type: "Text",
          required: false,
          localized,
        },
        {
          id: "taxonomies",
          name: "Taxonomies",
          type: "Array",
          items: {
            type: "Link",
            linkType: "Entry",
            validations: [
              {
                linkContentType: ["taxonomy"],
              },
            ],
          },
          required: false,
          localized,
        },
      ],
    },
  ];
};

export default getSchema;
