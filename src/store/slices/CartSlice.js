import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [
      {
        id: "201227660",
        name: "Chicken Maxxx - BBQ (Med)",
        category: "Chicken Maxxx",
        description:
          "45+ gms of Protein: BBQ Chicken, Chicken Keema with Chicken Seekh Kebab in the crust layered with Masala Curry Sauce.",
        imageId:
          "FOOD_CATALOG/IMAGES/CMS/2026/5/12/844fef3d-b176-4667-a95c-70ef94ee58e3_b24793cf-4eaa-4424-95b8-d6e72e87b65a.jpg",
        inStock: 1,
        variants: {},
        variantsV2: {
          variantGroups: [
            {
              groupId: "75901222",
              name: "Crust",
              variations: [
                {
                  name: "New Hand Tossed",
                  default: 1,
                  id: "221420927",
                  inStock: 1,
                  isEnabled: 1,
                  dependantVariation: {
                    groupId: "75901223",
                    variationId: "221420929",
                  },
                },
              ],
            },
            {
              groupId: "75901223",
              name: "Size",
              variations: [
                {
                  name: "Medium",
                  default: 1,
                  id: "221420929",
                  inStock: 1,
                  isEnabled: 1,
                },
              ],
            },
          ],
          pricingModels: [
            {
              variations: [
                {
                  groupId: "75901222",
                  variationId: "221420927",
                },
                {
                  groupId: "75901223",
                  variationId: "221420929",
                },
              ],
              price: 56900,
              finalPrice: {
                currencyCode: "INR",
                units: "569",
              },
            },
          ],
        },
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        defaultPrice: 56900,
        ribbon: {},
        showImage: true,
        offerTags: [
          {
            title: "₹100 OFF",
            subTitle: "USE FLATDEAL100",
            textColor: "#DB6742",
            backgroundColor: "#FAE8E3",
            matchText: "SILD",
          },
        ],
        itemBadge: {},
        badgesV2: {},
        ratings: {
          aggregatedRating: {
            rating: "4.6",
            ratingCount: "15 ratings",
            ratingCountV2: "15",
          },
          ratingsPresentationConfig: {
            bgGradient: {
              colours: ["#C8F9E5", "#00FFFFFF"],
              gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
            },
            ratingIconColor: "rating_very_good",
            ratingTextColor: "rating_very_good",
            ratingCountTextColor: "rating_very_good",
            ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
            ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
          },
        },
        itemPriceStrikeOff: true,
        offerIds: ["147c5856-e662-493f-b279-faae0caa628a"],
        parentId: "122878174",
        menuFilterIds: ["NONVEG", "offer", "toprated"],
        priceComparisonComms: {},
        instrumentationMetaMap: {
          swiggy_listing_price: "0",
          swiggy_final_price: "0",
        },
      },
      {
        id: "201227661",
        name: "Chicken Maxxx - Shawarma (Med)",
        category: "Chicken Maxxx",
        description:
          "45+ gms of Protein: Chicken Rashers, Chicken Keema with Chicken Seekh Kebab in the crust layered with Shawarma Sauce",
        imageId:
          "FOOD_CATALOG/IMAGES/CMS/2026/5/12/8d6a1288-3b43-48bf-b803-2de0e0a50d6e_8e4af708-3f1f-4d48-9c8e-bad4ce9b7fef.jpg",
        inStock: 1,
        variants: {},
        variantsV2: {
          variantGroups: [
            {
              groupId: "75901230",
              name: "Crust",
              variations: [
                {
                  name: "New Hand Tossed",
                  default: 1,
                  id: "221420942",
                  inStock: 1,
                  isEnabled: 1,
                  dependantVariation: {
                    groupId: "75901231",
                    variationId: "221420944",
                  },
                },
              ],
            },
            {
              groupId: "75901231",
              name: "Size",
              variations: [
                {
                  name: "Medium",
                  default: 1,
                  id: "221420944",
                  inStock: 1,
                  isEnabled: 1,
                },
              ],
            },
          ],
          pricingModels: [
            {
              variations: [
                {
                  groupId: "75901230",
                  variationId: "221420942",
                },
                {
                  groupId: "75901231",
                  variationId: "221420944",
                },
              ],
              price: 59900,
              finalPrice: {
                currencyCode: "INR",
                units: "599",
              },
            },
          ],
        },
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        defaultPrice: 59900,
        ribbon: {},
        showImage: true,
        offerTags: [
          {
            title: "₹100 OFF",
            subTitle: "USE FLATDEAL100",
            textColor: "#DB6742",
            backgroundColor: "#FAE8E3",
            matchText: "SILD",
          },
        ],
        itemBadge: {},
        badgesV2: {},
        ratings: {
          aggregatedRating: {
            rating: "5.0",
            ratingCount: "5 ratings",
            ratingCountV2: "5",
          },
          ratingsPresentationConfig: {
            bgGradient: {
              colours: ["#C8F9E5", "#00FFFFFF"],
              gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
            },
            ratingIconColor: "rating_very_good",
            ratingTextColor: "rating_very_good",
            ratingCountTextColor: "rating_very_good",
            ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
            ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
          },
        },
        itemPriceStrikeOff: true,
        offerIds: ["147c5856-e662-493f-b279-faae0caa628a"],
        parentId: "122878175",
        menuFilterIds: ["NONVEG", "offer", "toprated"],
        priceComparisonComms: {},
        instrumentationMetaMap: {
          swiggy_listing_price: "0",
          swiggy_final_price: "0",
        },
      },
      {
        id: "201227663",
        name: "Chicken Maxxx - Tandoori (Med)",
        category: "Chicken Maxxx",
        description:
          "45+ gms of Protein: Chicken Tikka, Chicken Keema with Chicken Seekh Kebab in the crust layered with Tandoori Sauce.",
        imageId:
          "FOOD_CATALOG/IMAGES/CMS/2026/5/12/8616af7b-b27c-486f-b1c7-43f068c4dabb_99a13ff5-1b42-41a0-a4b7-8f96f2c2704d.jpg",
        inStock: 1,
        variants: {},
        variantsV2: {
          variantGroups: [
            {
              groupId: "75901268",
              name: "Crust",
              variations: [
                {
                  name: "New Hand Tossed",
                  default: 1,
                  id: "221421003",
                  inStock: 1,
                  isEnabled: 1,
                  dependantVariation: {
                    groupId: "75901269",
                    variationId: "221421005",
                  },
                },
              ],
            },
            {
              groupId: "75901269",
              name: "Size",
              variations: [
                {
                  name: "Medium",
                  default: 1,
                  id: "221421005",
                  inStock: 1,
                  isEnabled: 1,
                },
              ],
            },
          ],
          pricingModels: [
            {
              variations: [
                {
                  groupId: "75901268",
                  variationId: "221421003",
                },
                {
                  groupId: "75901269",
                  variationId: "221421005",
                },
              ],
              price: 59900,
              finalPrice: {
                currencyCode: "INR",
                units: "599",
              },
            },
          ],
        },
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        defaultPrice: 59900,
        ribbon: {},
        showImage: true,
        offerTags: [
          {
            title: "₹100 OFF",
            subTitle: "USE FLATDEAL100",
            textColor: "#DB6742",
            backgroundColor: "#FAE8E3",
            matchText: "SILD",
          },
        ],
        itemBadge: {},
        badgesV2: {},
        ratings: {
          aggregatedRating: {
            rating: "4.0",
            ratingCount: "2 ratings",
            ratingCountV2: "2",
          },
          ratingsPresentationConfig: {
            bgGradient: {
              colours: ["#C8F9E5", "#00FFFFFF"],
              gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
            },
            ratingIconColor: "rating_very_good",
            ratingTextColor: "rating_very_good",
            ratingCountTextColor: "rating_very_good",
            ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
            ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
          },
        },
        itemPriceStrikeOff: true,
        offerIds: ["147c5856-e662-493f-b279-faae0caa628a"],
        parentId: "122878176",
        menuFilterIds: ["NONVEG", "offer", "toprated"],
        priceComparisonComms: {},
        instrumentationMetaMap: {
          swiggy_final_price: "0",
          swiggy_listing_price: "0",
        },
      },
      {
        id: "206508019",
        name: "Chicken Maxxx - BBQ (Reg)",
        category: "Chicken Maxxx",
        description:
          "45+ gms of Protein: BBQ Chicken, Chicken Keema with Chicken Seekh Kebab in the crust layered with Masala Curry Sauce.",
        imageId:
          "FOOD_CATALOG/IMAGES/CMS/2026/5/12/844fef3d-b176-4667-a95c-70ef94ee58e3_b24793cf-4eaa-4424-95b8-d6e72e87b65a.jpg",
        inStock: 1,
        finalPrice: 28900,
        variants: {},
        variantsV2: {
          variantGroups: [
            {
              groupId: "78580691",
              name: "Crust",
              variations: [
                {
                  name: "New Hand Tossed",
                  default: 1,
                  id: "227985473",
                  inStock: 1,
                  isEnabled: 1,
                  dependantVariation: {
                    groupId: "78580692",
                    variationId: "227985474",
                  },
                },
              ],
            },
            {
              groupId: "78580692",
              name: "Size",
              variations: [
                {
                  name: "Regular",
                  default: 1,
                  id: "227985474",
                  inStock: 1,
                  isEnabled: 1,
                },
              ],
            },
          ],
          pricingModels: [
            {
              variations: [
                {
                  groupId: "78580691",
                  variationId: "227985473",
                },
                {
                  groupId: "78580692",
                  variationId: "227985474",
                },
              ],
              price: 34900,
              finalPrice: {
                currencyCode: "INR",
                units: "289",
              },
            },
          ],
        },
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        defaultPrice: 34900,
        ribbon: {},
        showImage: true,
        offerTags: [
          {
            matchText: "SILD",
          },
          {
            title: "₹100 OFF",
            subTitle: "USE FLATDEAL100",
            textColor: "#DB6742",
            backgroundColor: "#FAE8E3",
            matchText: "SILD",
          },
        ],
        itemBadge: {},
        badgesV2: {},
        itemNudgeType: "FinalPrice",
        ratings: {
          aggregatedRating: {
            rating: "4.2",
            ratingCount: "4 ratings",
            ratingCountV2: "4",
          },
          ratingsPresentationConfig: {
            bgGradient: {
              colours: ["#C8F9E5", "#00FFFFFF"],
              gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
            },
            ratingIconColor: "rating_very_good",
            ratingTextColor: "rating_very_good",
            ratingCountTextColor: "rating_very_good",
            ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
            ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
          },
        },
        itemPriceStrikeOff: true,
        offerIds: [
          "2a1d5d4f-0751-4af0-ba73-53cd8cc4b4b6",
          "147c5856-e662-493f-b279-faae0caa628a",
        ],
        parentId: "126759166",
        menuFilterIds: ["NONVEG", "offer", "toprated"],
        priceComparisonComms: {},
        instrumentationMetaMap: {
          swiggy_listing_price: "0",
          swiggy_final_price: "0",
        },
      },
      {
        id: "206508013",
        name: "Chicken Maxxx - Tandoori (Reg)",
        category: "Chicken Maxxx",
        description:
          "45+ gms of Protein: Chicken Tikka, Chicken Keema with Chicken Seekh Kebab in the crust layered with Tandoori Sauce.",
        imageId:
          "FOOD_CATALOG/IMAGES/CMS/2026/5/12/8616af7b-b27c-486f-b1c7-43f068c4dabb_99a13ff5-1b42-41a0-a4b7-8f96f2c2704d.jpg",
        inStock: 1,
        finalPrice: 30900,
        variants: {},
        variantsV2: {
          variantGroups: [
            {
              groupId: "78580681",
              name: "Crust",
              variations: [
                {
                  name: "New Hand Tossed",
                  default: 1,
                  id: "227985461",
                  inStock: 1,
                  isEnabled: 1,
                  dependantVariation: {
                    groupId: "78580682",
                    variationId: "227985462",
                  },
                },
              ],
            },
            {
              groupId: "78580682",
              name: "Size",
              variations: [
                {
                  name: "Regular",
                  default: 1,
                  id: "227985462",
                  inStock: 1,
                  isEnabled: 1,
                },
              ],
            },
          ],
          pricingModels: [
            {
              variations: [
                {
                  groupId: "78580681",
                  variationId: "227985461",
                },
                {
                  groupId: "78580682",
                  variationId: "227985462",
                },
              ],
              price: 34900,
              finalPrice: {
                currencyCode: "INR",
                units: "309",
              },
            },
          ],
        },
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        defaultPrice: 34900,
        ribbon: {},
        showImage: true,
        offerTags: [
          {
            matchText: "SILD",
          },
          {
            title: "₹100 OFF",
            subTitle: "USE FLATDEAL100",
            textColor: "#DB6742",
            backgroundColor: "#FAE8E3",
            matchText: "SILD",
          },
        ],
        itemBadge: {},
        badgesV2: {},
        itemNudgeType: "FinalPrice",
        ratings: {
          aggregatedRating: {
            rating: "4.0",
            ratingCount: "1 rating",
            ratingCountV2: "1",
          },
          ratingsPresentationConfig: {
            bgGradient: {
              colours: ["#C8F9E5", "#00FFFFFF"],
              gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
            },
            ratingIconColor: "rating_very_good",
            ratingTextColor: "rating_very_good",
            ratingCountTextColor: "rating_very_good",
            ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
            ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
          },
        },
        itemPriceStrikeOff: true,
        offerIds: [
          "dbc511a3-d8c3-4a11-94cf-fc4554aa25f5",
          "147c5856-e662-493f-b279-faae0caa628a",
        ],
        parentId: "126759168",
        menuFilterIds: ["NONVEG", "offer", "toprated"],
        priceComparisonComms: {},
        instrumentationMetaMap: {
          swiggy_listing_price: "0",
          swiggy_final_price: "0",
        },
      },
    ],
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    updateItemQuantity(state, action) {
      const { itemId, quantity } = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.quantity = quantity;
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, updateItemQuantity, removeItem } = CartSlice.actions;
