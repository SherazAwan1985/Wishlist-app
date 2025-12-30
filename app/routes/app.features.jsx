import {
  Page,
  Layout,
  Card,
  BlockStack,
  InlineStack,
  InlineGrid,
  RadioButton,
  TextField,
  Button,
  Text,
  ColorPicker,
  Tabs,
  Icon,
  Box,
} from "@shopify/polaris";
import { useState, useCallback } from "react";

export default function CustomizeWishlistPlus() {
  const [selectedTab, setSelectedTab] = useState(1);
  const handleTabChange = useCallback((selectedTabIndex) => setSelectedTab(selectedTabIndex), []);
    const [PrimaryColor, setPrimaryColor] = useState({
      hue: 120,
    brightness: 1,
    saturation: 1,
    }); 
  const tabs = [
    { id: "basics", content: "Basics" },
    { id: "product-page", content: "Product Page" },
    { id: "collections", content: "Collections" },
    { id: "wishlist-page", content: "Wishlist Page" },
    { id: "cart", content: "Cart" },
  ];

  // Settings states
  const heartIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
  <path d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z" fill="currentColor"/>
  </svg>`;
  const starIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
  <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  const [buttonPosition, setButtonPosition] = useState("below");
  const [WishlistIcon, setWishlistIcon] = useState("heart");
  const [pdpButtonType, setPdpButtonType] = useState("iconText");
  const [pdpButtonStyle, setPdpButtonStyle] = useState("solid");
  const [pdpLabel, setPdpLabel] = useState("Add To Wishlist");

  // Left-side tab content
  const renderTabContent = () => {
    switch (selectedTab) {
      case 0: // Basics
        return (
          <Card>
            <BlockStack gap="400">
              <Text variant="headingMd" as="h2">Colors</Text>
              <InlineStack gap="400">
                <Text variant="headingMd">Primary Color</Text>
                <ColorPicker
                  color={PrimaryColor}
                  onChange={setPrimaryColor}
                   />
              </InlineStack>
            </BlockStack>
          </Card>
        );
      case 1: // Product Page
        return (
          <Card>
            <BlockStack gap="500">
              <Text variant="headingMd" as="h2">Button Position</Text>
              <InlineStack gap="400">
                <RadioButton label="Above Cart Button" checked={buttonPosition === "above"} id="above" name="buttonPosition" onChange={() => setButtonPosition("above")} />
                <RadioButton label="Below Cart Button" checked={buttonPosition === "below"} id="below" name="buttonPosition" onChange={() => setButtonPosition("below")} />
                <RadioButton label="Right of Cart Button" checked={buttonPosition === "right"} id="right" name="buttonPosition" onChange={() => setButtonPosition("right")} />
              </InlineStack>

              <Text variant="headingMd" as="h2">Button Type</Text>
              <InlineStack gap="400">
                <RadioButton label="Icon and Text" checked={pdpButtonType === "iconText"} id="iconText" name="buttonType" onChange={() => setPdpButtonType("iconText")} />
                <RadioButton label="Only Text" checked={pdpButtonType === "text"} id="text" name="buttonType" onChange={() => setPdpButtonType("text")} />
                <RadioButton label="Only Icon" checked={pdpButtonType === "icon"} id="icon" name="buttonType" onChange={() => setPdpButtonType("icon")} />
              </InlineStack>

              <Text variant="headingMd" as="h2">Appearance</Text>
              <InlineStack gap="400">
                <RadioButton label="Solid" checked={pdpButtonStyle === "solid"} id="solid" name="buttonStyle" onChange={() => setPdpButtonStyle("solid")} />
                <RadioButton label="Outline" checked={pdpButtonStyle === "outline"} id="outline" name="buttonStyle" onChange={() => setPdpButtonStyle("outline")} />
                <RadioButton label="Plain" checked={pdpButtonStyle === "plain"} id="plain" name="buttonStyle" onChange={() => setPdpButtonStyle("plain")} />
              </InlineStack>

              <Text variant="headingMd" as="h2">Button Text</Text>
              <TextField label="Label" value={pdpLabel} onChange={setPdpLabel} autoComplete="off" />
            </BlockStack>
          </Card>
        );
      case 2: // Collections
        return (
          <Card>
            <BlockStack gap="400">
              <Text variant="headingMd" as="h2">Collections</Text>
              <Text as="p">Options to show wishlist actions on collection grids and quick add cards.</Text>
            </BlockStack>
          </Card>
        );
      case 3: // Wishlist Page
        return (
          <Card>
            <BlockStack gap="400">
              <Text variant="headingMd" as="h2">Wishlist Page</Text>
              <Text as="p">Configure the dedicated wishlist page layout and behaviors.</Text>
            </BlockStack>
          </Card>
        );
      case 4: // Cart
        return (
          <Card>
            <BlockStack gap="400">
              <Text variant="headingMd" as="h2">Cart</Text>
              <Text as="p">Control wishlist interactions inside the cart (e.g., move to wishlist).</Text>
            </BlockStack>
          </Card>
        );
      default:
        return null;
    }
  };

  // Right-side preview box per tab
  const renderPreview = () => {
    const heading = tabs[selectedTab]?.content || "Preview";
    // Helper to render the selected icon string as an element
    const IconEl = (
      <span
        aria-hidden
        style={{ display: "inline-flex", lineHeight: 0 }}
        dangerouslySetInnerHTML={{ __html: WishlistIcon === "heart" ? heartIcon : starIcon }}
      />
    );
    // Compose button inner content based on 
    const ButtonInner = (
      pdpButtonType === "iconText" ? (
        <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
          {IconEl}
          <span>{pdpLabel}</span>
        </span>
      ) : pdpButtonType === "text" ? (
        <span>{pdpLabel}</span>
      ) : (
        IconEl
      )
    );
    return (
      <Card>
        <BlockStack gap="400" align="center">
          <Text variant="headingMd" as="h2">{heading} Preview</Text>
          <InlineGrid columns={2} gap="500">
            <BlockStack>
            <div style={{ background: "#f6f6f7", width: "100%", height: 400, borderRadius: 5 }} />
            </BlockStack>
            <BlockStack>
              <BlockStack gap="1000">
              <BlockStack gap="500">
            <div style={{ background: "#f6f6f7", width: "100%", height: 40, borderRadius: 5 }} />
            <div style={{ background: "#f6f6f7", width: "70%", height: 40, borderRadius: 5 }} />
            </BlockStack>
              <BlockStack gap="200">
            <div style={{ background: "#f6f6f7", width: "100%", height: 10, borderRadius: 5  }} />
            <div style={{ background: "#f6f6f7", width: "100%", height: 10, borderRadius: 5 }} />
            <div style={{ background: "#f6f6f7", width: "70%", height: 10, borderRadius: 5 }} />
            </BlockStack>
              <BlockStack>
            <div style={{ background: "#f6f6f7", width: "100%", height: 50, borderRadius: 5 }} />
            </BlockStack>
            </BlockStack>
            {pdpButtonStyle === "solid" ? (
              <button style={{ backgroundColor: "#000", marginTop: 10, fontSize: 16, color: "#fff", borderRadius: 0, padding: 15, border: "none" }}>
                {ButtonInner}
              </button>
            ) : pdpButtonStyle === "outline" ? (
              <button style={{ backgroundColor: "transparent", marginTop: 10, fontSize: 16, color: "#000", borderRadius: 0, padding: 15, border: "1px solid #000" }}>
                {ButtonInner}
              </button>
            ) : (
              <button style={{ backgroundColor: "transparent", marginTop: 10, fontSize: 16, color: "#000", borderRadius: 0, padding: 15, border: "none" }}>
                {ButtonInner}
              </button>
            )}
            </BlockStack>
          </InlineGrid>
        </BlockStack>
      </Card>
    );
  };

  return (
      <Page fullWidth title="Customize Wishlist Plus" >
        <BlockStack gap="500">
        {/* Tabs */}
        <Card
          background="bg-surface-secondary"
          padding="100" 
        >
          <Tabs tabs={tabs} selected={selectedTab} onSelect={handleTabChange} />
        </Card>

        {/* Page Content */}
        <Layout>
          <Layout.Section>
            <Box background="bg-surface" padding="500" borderRadius="300">
              <InlineGrid gap="500" columns={['oneThird', 'twoThirds']}>
                {renderTabContent()}
                {renderPreview()}
              </InlineGrid>
          </Box>
          </Layout.Section> 
        </Layout>
        </BlockStack>
      </Page>
  );
}
