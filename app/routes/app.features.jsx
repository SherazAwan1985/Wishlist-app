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
  Popover,
  Divider,
  Checkbox,
  Badge,
} from "@shopify/polaris";
import { useState, useCallback } from "react";

export default function CustomizeWishlistPlus() {
  const [selectedTab, setSelectedTab] = useState(1);
  const handleTabChange = useCallback((selectedTabIndex) => setSelectedTab(selectedTabIndex), []);
  const tabs = [
    { id: "basics", content: "Basics" },
    { id: "product-page", content: "Product Page" },
    { id: "collections", content: "Collections" },
    { id: "wishlist-page", content: "Wishlist Page" },
    { id: "cart", content: "Cart" },
  ];

  // Settings states
  const heartIcon = `<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path fill="currentColor" d="M12 22.59l-9.2-9.12C.43 11.09.43 7.21 2.8 4.83a6.03 6.03 0 0 1 4.29-1.79c1.62 0 3.14.63 4.29 1.79l.62.62.62-.62a6.014 6.014 0 0 1 4.29-1.79c1.62 0 3.14.63 4.29 1.79 2.37 2.38 2.37 6.26 0 8.64L12 22.59zM7.09 4c-1.37 0-2.65.54-3.61 1.51-2 2.01-2 5.28 0 7.29L12 21.25l8.53-8.45c2-2.01 2-5.28 0-7.29A5.079 5.079 0 0 0 16.92 4c-1.37 0-2.65.54-3.61 1.51l-1.3 1.3-1.3-1.3C9.75 4.54 8.46 4.01 7.1 4z"/><path fill="none" d="M0 0h24v24H0z"/>
  </svg>`;
  const heartIconFill = `<svg width="24px" height="24px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor"  d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z" fill="currentColor"/>
    </svg>`;
  const starIcon = `<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  fill="currentColor"  d="M23.054 8.781l-7.536-.635-2.965-7.082a.619.619 0 0 0-1.155 0L8.433 8.145.896 8.78a.607.607 0 0 0-.357 1.1l5.726 4.96-1.729 7.395a.63.63 0 0 0 .223.679.573.573 0 0 0 .339.108.717.717 0 0 0 .374-.111l6.503-3.954 6.503 3.953a.606.606 0 0 0 .935-.677l-1.727-7.392 5.725-4.96a.607.607 0 0 0-.357-1.099zm-6.48 5.698l1.662 7.113-6.261-3.806-6.262 3.807 1.663-7.114-5.513-4.776 7.257-.611 2.855-6.817 2.855 6.817 7.257.611z"/><path fill="none" d="M0 0h24v24H0z"/></svg>`;
  const starIconFill = `<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M23.632 9.201a.628.628 0 0 1-.22.678l-5.726 4.96 1.727 7.394a.606.606 0 0 1-.935.676l-6.503-3.953-6.503 3.953a.713.713 0 0 1-.374.112.57.57 0 0 1-.34-.109.629.629 0 0 1-.222-.679l1.729-7.393L.539 9.879A.607.607 0 0 1 .897 8.78l7.536-.635 2.965-7.083a.62.62 0 0 1 1.155.001l2.965 7.082 7.536.635a .63 .63 .42z"/><path fill="none" d="M0 0h24v24H0z"/></svg>`;

  const [buttonPosition, setButtonPosition] = useState("below");
  const [plpButtonPosition, setPlpButtonPosition] = useState("top-left");
  const [showPlpButton, setShowPlpButton] = useState(true);
  const [WishlistIcon, setWishlistIcon] = useState("heart");
  const [pdpButtonType, setPdpButtonType] = useState("iconText");
  const [pdpButtonStyle, setPdpButtonStyle] = useState("solid");
  const [pdpLabel, setPdpLabel] = useState("Add To Wishlist");
  const [pdpAddedLabel, setPdpAddedLabel] = useState("Added To Wishlist");
  const [showLabel, setShowLabel] = useState("before-add");
  const [buttonGridPosition, setButtonGridPosition] = useState("form");
  const [primaryColor, setPrimaryColor] = useState({
    hue: 0,
    brightness: 0,
    saturation: 0,
  });
  const [secondaryColor, setSecondaryColor] = useState({
    hue: 0,
    brightness: 1,
    saturation: 0,
  });
  const [pcPopupActive, setpcPopupActive] = useState(false);
  const [scPopupActive, setscPopupActive] = useState(false);

  const togglepcPopupActive = useCallback(
    () => setpcPopupActive((pcPopupActive) => !pcPopupActive),
    [],
  );

  const toggleScPopupActive = useCallback(
    () => setscPopupActive((scPopupActive) => !scPopupActive),
    [],
  );

  // Convert HSB to hex for display
  const hsbToHex = (hsb) => {
    const { hue, saturation, brightness } = hsb;
    const h = hue;
    const s = saturation;
    const v = brightness;

    const c = v * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = v - c;

    let r, g, b;
    if (h >= 0 && h < 60) {
      [r, g, b] = [c, x, 0];
    } else if (h >= 60 && h < 120) {
      [r, g, b] = [x, c, 0];
    } else if (h >= 120 && h < 180) {
      [r, g, b] = [0, c, x];
    } else if (h >= 180 && h < 240) {
      [r, g, b] = [0, x, c];
    } else if (h >= 240 && h < 300) {
      [r, g, b] = [x, 0, c];
    } else {
      [r, g, b] = [c, 0, x];
    }

    const toHex = (n) => {
      const hex = Math.round((n + m) * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  const pcactivator = (
    <div style={{ width: '100%' }}>
      <div
        onClick={togglepcPopupActive}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '4px 15px',
          border: '1px solid #c4cdd5',
          borderRadius: '4px',
          backgroundColor: '#fff',
          cursor: 'pointer',
          minHeight: '30px',
          minWidth: '180px',
        }}
      >
        <div
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: hsbToHex(primaryColor),
            border: '1px solid #e1e3e5',
            flexShrink: 0,
          }}
        />
        <span style={{ flex: 1, fontSize: '14px', color: '#202223' }}>
          {hsbToHex(primaryColor)}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          style={{ flexShrink: 0 }}
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="#202223"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
  const scactivator = (
    <div style={{ width: '100%' }}>
      <div
        onClick={toggleScPopupActive}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '4px 15px',
          border: '1px solid #c4cdd5',
          borderRadius: '4px',
          backgroundColor: '#fff',
          cursor: 'pointer',
          minHeight: '30px',
          minWidth: '180px',
        }}
      >
        <div
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: hsbToHex(secondaryColor),
            border: '1px solid #e1e3e5',
            flexShrink: 0,
          }}
        />
        <span style={{ flex: 1, fontSize: '14px', color: '#202223' }}>
          {hsbToHex(secondaryColor)}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          style={{ flexShrink: 0 }}
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="#202223"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );

  const IconRenderer = ({ icon }) => (
    <span
      dangerouslySetInnerHTML={{ __html: icon }}
      style={{ display: "inline-flex", lineHeight: 0, alignItems: "center" }}
    />
  );
  // Compose button inner content based on 
  const ButtonInner = (
    showLabel === "before-add" ?
      pdpButtonType === "iconText" ? (
        <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
          <IconRenderer icon={WishlistIcon === "heart" ? heartIcon : starIcon} />
          <span>{pdpLabel}</span>
        </span>
      ) : pdpButtonType === "text" ? (
        <span>{pdpLabel}</span>
      ) : (
        <IconRenderer icon={WishlistIcon === "heart" ? heartIcon : starIcon} />
      ) :
      pdpButtonType === "iconText" ? (
        <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
          <IconRenderer icon={WishlistIcon === "heart" ? heartIconFill : starIconFill} />
          <span>{pdpAddedLabel}</span>
        </span>
      ) : pdpButtonType === "text" ? (
        <span>{pdpAddedLabel}</span>
      ) : (
        <IconRenderer icon={WishlistIcon === "heart" ? heartIconFill : starIconFill} />
      )
  );
  // Add this helper function before renderPreview
  const renderWishlistButton = () => {
    const buttonStyles = {
      solid: {
        backgroundColor: hsbToHex(primaryColor),
        color: hsbToHex(secondaryColor),
        border: "none"
      },
      outline: {
        backgroundColor: "transparent",
        color: hsbToHex(primaryColor),
        border: `1px solid ${hsbToHex(primaryColor)}`
      },
      plain: {
        backgroundColor: "transparent",
        color: hsbToHex(primaryColor),
        border: "none"
      }
    };

    const style = {
      ...buttonStyles[pdpButtonStyle],
      fontSize: 16,
      borderRadius: 0,
      padding: "10px 15px",
      ...(buttonPosition === "right" && { flexShrink: 0, minWidth: "fit-content" })
    };

    return (
      <button style={style}>
        {ButtonInner}
      </button>
    );
  };
  // Left-side tab content
  const renderTabContent = () => {
    switch (selectedTab) {
      case 0: // Basics
        return (
          <Card>
            <BlockStack gap="1000">
              <BlockStack gap="400">
                <Text variant="headingMd" as="h2">Colors</Text>
                <InlineStack gap="400" wrap={false} blockAlign="center" align="space-between">
                  <Text variant="bodyMd" as="p">Primary Color</Text>
                  <Popover
                    active={pcPopupActive}
                    activator={pcactivator}
                    onClose={togglepcPopupActive}
                    ariaHaspopup={false}
                    sectioned
                  >
                    <ColorPicker
                      color={primaryColor}
                      onChange={setPrimaryColor}
                    />
                  </Popover>
                </InlineStack>
                <Divider />
                <InlineStack gap="400" wrap={false} blockAlign="center" align="space-between">
                  <Text variant="bodyMd" as="p">Secondary Color</Text>
                  <Popover
                    active={scPopupActive}
                    activator={scactivator}
                    onClose={toggleScPopupActive}
                    ariaHaspopup={false}
                    sectioned
                  >
                    <ColorPicker
                      color={secondaryColor}
                      onChange={setSecondaryColor}
                    />
                  </Popover>
                </InlineStack>
                <Divider />
              </BlockStack>
              <BlockStack gap="400">
                <Text variant="headingMd" as="h2">Icons</Text>
                <InlineStack gap="400" wrap={false} blockAlign="center">
                  <Box background={WishlistIcon === 'heart' ? 'bg-fill-info' : 'bg-fill-secondary'} padding="200" borderRadius="200">
                    <InlineStack gap="100" wrap={false} blockAlign="center">
                      <RadioButton
                        label="Heart Icon"
                        id="heart"
                        name="wishlistIcon"
                        checked={WishlistIcon === 'heart'}
                        onChange={setWishlistIcon.bind(null, 'heart')}
                      />
                      <IconRenderer icon={showLabel === "before-add" ? heartIcon : heartIconFill} />
                    </InlineStack>
                  </Box>
                  <Box background={WishlistIcon === 'star' ? 'bg-fill-info' : 'bg-fill-secondary'} padding="200" borderRadius="200">
                    <InlineStack gap="100" wrap={false} blockAlign="center">
                      <RadioButton
                        label="Star Icon"
                        id="star"
                        name="wishlistIcon"
                        checked={WishlistIcon === 'star'}
                        onChange={setWishlistIcon.bind(null, 'star')}
                      />
                      <IconRenderer icon={showLabel === "before-add" ? starIcon : starIconFill} />
                    </InlineStack>
                  </Box>
                </InlineStack>
              </BlockStack>
            </BlockStack>
          </Card>
        );
      case 1: // Product Page
        return (
          <Card>
            <BlockStack gap="500">
              <InlineStack gap="400">
                <Text variant="headingMd" as="h2">Button Position</Text>
                <InlineStack gap="200" align="center">
                  <Button fontSize="12" variant="tertiary" pressed={buttonGridPosition === "form"} padding="200" borderRadius="200" onClick={() => setButtonGridPosition("form")}>Near cart button</Button>
                  <Button fontSize="12" variant="tertiary" pressed={buttonGridPosition === "media"} padding="200" borderRadius="200" onClick={() => setButtonGridPosition("media")}>On image</Button>
                </InlineStack>
              </InlineStack>
              {buttonGridPosition === "media" ? (
                <InlineStack gap="400">
                  <RadioButton label="Top Left on image" checked={buttonPosition === "top-left-image"} id="top-left-image" name="buttonPosition" onChange={() => { setButtonPosition("top-left-image"), setPdpButtonType("icon") }} />
                  <RadioButton label="Top Right on image" checked={buttonPosition === "top-right-image"} id="top-right-image" name="buttonPosition" onChange={() => { setButtonPosition("top-right-image"), setPdpButtonType("icon") }} />
                  <RadioButton label="Bottom Right on image" checked={buttonPosition === "bottom-right-image"} id="bottom-right-image" name="buttonPosition" onChange={() => { setButtonPosition("bottom-right-image"), setPdpButtonType("icon") }} />
                  <RadioButton label="Bottom Left on image" checked={buttonPosition === "bottom-left-image"} id="bottom-left-image" name="buttonPosition" onChange={() => { setButtonPosition("bottom-left-image"), setPdpButtonType("icon") }} />
                </InlineStack>
              ) : (
                <InlineStack gap="400">
                  <RadioButton label="Above Cart Button" checked={buttonPosition === "above"} id="above" name="buttonPosition" onChange={() => setButtonPosition("above")} />
                  <RadioButton label="Below Cart Button" checked={buttonPosition === "below"} id="below" name="buttonPosition" onChange={() => setButtonPosition("below")} />
                  <RadioButton label="Right of Cart Button" checked={buttonPosition === "right"} id="right" name="buttonPosition" onChange={() => setButtonPosition("right")} />
                </InlineStack>
              )}

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
              <InlineStack gap="400">
                <Text variant="headingMd" as="h2">Button Text</Text>
                <InlineStack gap="200" align="center">
                  <Button fontSize="12" variant={showLabel === 'before-add' ? 'primary' : 'secondary'} padding="200" borderRadius="200" onClick={() => setShowLabel("before-add")}>Before adding</Button>
                  <Button fontSize="12" variant={showLabel === 'after-add' ? 'primary' : 'secondary'} padding="200" borderRadius="200" onClick={() => setShowLabel("after-add")}>After adding</Button>
                </InlineStack>
              </InlineStack>
              {showLabel === "after-add" && <TextField value={pdpAddedLabel} onChange={setPdpAddedLabel} autoComplete="off" />}
              {showLabel === "before-add" && <TextField value={pdpLabel} onChange={setPdpLabel} autoComplete="off" />}
            </BlockStack>
          </Card>
        );
      case 2: // Collections
        return (
          <Card>
            <BlockStack gap="400">
            <Checkbox label="Enable shoppers to add items to wishlist from Collections pages" checked={showPlpButton} id="show-plp-button" name="showPlpButton" onChange={() => setShowPlpButton(!showPlpButton)} />
              <Divider />
              <Text variant="headingMd" as="h2">Button Position</Text>
              <InlineGrid columns={2} gap="400">
                  <RadioButton disabled={!showPlpButton} label="Top Left" checked={plpButtonPosition === "top-left"} id="top-left" name="buttonPosition" onChange={() => setPlpButtonPosition("top-left")} />
                    <RadioButton disabled={!showPlpButton} label="Top Right" checked={plpButtonPosition === "top-right"} id="top-right" name="buttonPosition" onChange={() => setPlpButtonPosition("top-right")} />
                    <RadioButton disabled={!showPlpButton} label="Bottom Right" checked={plpButtonPosition === "bottom-right"} id="bottom-right" name="buttonPosition" onChange={() => setPlpButtonPosition("bottom-right")} />
                  <RadioButton disabled={!showPlpButton} label="Bottom Left" checked={plpButtonPosition === "bottom-left"} id="bottom-left" name="buttonPosition" onChange={() => setPlpButtonPosition("bottom-left")} />
                </InlineGrid>

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
    switch (selectedTab) {
      case 0: // Basics
        return (
          <Card>
            <BlockStack gap="400" align="center">
             <Box>
              <Badge>Mock Preview</Badge>
              </Box>
                 <Divider />
              <InlineGrid columns={2} gap="500">
                <BlockStack>
                  <div style={{ background: "#E3E3E3", width: "100%", height: 400, borderRadius: 5, position: "relative" }} >
                    {buttonPosition === "top-left-image" || buttonPosition === "top-right-image" || buttonPosition === "bottom-left-image" || buttonPosition === "bottom-right-image" ? (
                      <div style={{ position: "absolute", top: buttonPosition === "top-left-image" || buttonPosition === "top-right-image" ? 10 : "auto", left: buttonPosition === "top-left-image" || buttonPosition === "bottom-left-image" ? 10 : "auto", right: buttonPosition === "top-right-image" || buttonPosition === "bottom-right-image" ? 10 : "auto", bottom: buttonPosition === "bottom-left-image" || buttonPosition === "bottom-right-image" ? 10 : "auto" }}>
                        {renderWishlistButton()}
                      </div>
                    ) : null}
                  </div>
                </BlockStack>
                <BlockStack>
                  <BlockStack gap="1000">
                    <BlockStack gap="500">
                      <div style={{ background: "#E3E3E3", width: "100%", height: 40, borderRadius: 5 }} />
                      <div style={{ background: "#E3E3E3", width: "70%", height: 40, borderRadius: 5 }} />
                    </BlockStack>
                    <BlockStack gap="200">
                      <div style={{ background: "#E3E3E3", width: "100%", height: 10, borderRadius: 5 }} />
                      <div style={{ background: "#E3E3E3", width: "100%", height: 10, borderRadius: 5 }} />
                      <div style={{ background: "#E3E3E3", width: "70%", height: 10, borderRadius: 5 }} />
                    </BlockStack>
                    <BlockStack gap="300">
                      {/* Add to Cart Button - shows above wishlist button when position is "above" */}
                      {buttonPosition === "below" && (
                        <BlockStack>
                          <div style={{ background: "#E3E3E3", width: "100%", height: 50, borderRadius: 5 }} />
                        </BlockStack>
                      )}
                      {buttonPosition === "right" ? (
                        <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                          <div style={{ background: "#E3E3E3", width: "100%", height: 50, borderRadius: 5, flex: 1 }} />
                          {renderWishlistButton()}
                        </div>
                      ) : (
                        <>
                          {buttonPosition === "above" || buttonPosition === "below" ?
                            renderWishlistButton()
                            : null}
                          {buttonPosition === "above" ? (
                            <BlockStack>
                              <div style={{ background: "#E3E3E3", width: "100%", height: 50, borderRadius: 5 }} />
                            </BlockStack>
                          ) : null}
                        </>
                      )}
                    </BlockStack>
                  </BlockStack>
                </BlockStack>
              </InlineGrid>
            </BlockStack>
          </Card>
        );
      case 1:
        return (
         <Card>
            <BlockStack gap="400" align="center">
             <Box>
              <Badge>Mock Preview</Badge>
              </Box>
                 <Divider />
              <InlineGrid columns={2} gap="500">
                <BlockStack>
                  <div style={{ background: "#E3E3E3", width: "100%", height: 400, borderRadius: 5, position: "relative" }} >
                    {buttonPosition === "top-left-image" || buttonPosition === "top-right-image" || buttonPosition === "bottom-left-image" || buttonPosition === "bottom-right-image" ? (
                      <div style={{ position: "absolute", top: buttonPosition === "top-left-image" || buttonPosition === "top-right-image" ? 10 : "auto", left: buttonPosition === "top-left-image" || buttonPosition === "bottom-left-image" ? 10 : "auto", right: buttonPosition === "top-right-image" || buttonPosition === "bottom-right-image" ? 10 : "auto", bottom: buttonPosition === "bottom-left-image" || buttonPosition === "bottom-right-image" ? 10 : "auto" }}>
                        {renderWishlistButton()}
                      </div>
                    ) : null}
                  </div>
                </BlockStack>
                <BlockStack>
                  <BlockStack gap="1000">
                    <BlockStack gap="500">
                      <div style={{ background: "#E3E3E3", width: "100%", height: 40, borderRadius: 5 }} />
                      <div style={{ background: "#E3E3E3", width: "70%", height: 40, borderRadius: 5 }} />
                    </BlockStack>
                    <BlockStack gap="200">
                      <div style={{ background: "#E3E3E3", width: "100%", height: 10, borderRadius: 5 }} />
                      <div style={{ background: "#E3E3E3", width: "100%", height: 10, borderRadius: 5 }} />
                      <div style={{ background: "#E3E3E3", width: "70%", height: 10, borderRadius: 5 }} />
                    </BlockStack>
                    <BlockStack gap="300">
                      {/* Add to Cart Button - shows above wishlist button when position is "above" */}
                      {buttonPosition === "below" && (
                        <BlockStack>
                          <div style={{ background: "#E3E3E3", width: "100%", height: 50, borderRadius: 5 }} />
                        </BlockStack>
                      )}
                      {buttonPosition === "right" ? (
                        <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                          <div style={{ background: "#E3E3E3", width: "100%", height: 50, borderRadius: 5, flex: 1 }} />
                          {renderWishlistButton()}
                        </div>
                      ) : (
                        <>
                          {buttonPosition === "above" || buttonPosition === "below" ?
                            renderWishlistButton()
                            : null}
                          {buttonPosition === "above" ? (
                            <BlockStack>
                              <div style={{ background: "#E3E3E3", width: "100%", height: 50, borderRadius: 5 }} />
                            </BlockStack>
                          ) : null}
                        </>
                      )}
                    </BlockStack>
                  </BlockStack>
                </BlockStack>
              </InlineGrid>
            </BlockStack>
          </Card>
        );
      case 2: // Collections
        return (
          <Card>
            <BlockStack gap="400" align="center">
            <Box>
              <Badge>Mock Preview</Badge>
              </Box>
                 <Divider />
              <InlineGrid columns={3} gap="500">
                {Array.from({ length: 6 }).map((_, i) => (
                      <Box borderColor="border" borderWidth="025" key={i} padding="400" borderRadius="200">
                      <BlockStack gap="300">
                      <BlockStack>
                        <div style={{ background: "#E3E3E3", width: "100%", height: 200, borderRadius: 5, position: "relative" }}>
                          {plpButtonPosition === "top-left" || plpButtonPosition === "top-right" || plpButtonPosition === "bottom-left" || plpButtonPosition === "bottom-right" ? (
                            <div style={{ 
                              position: "absolute", 
                              color: hsbToHex(primaryColor),
                              top: plpButtonPosition === "top-left" || plpButtonPosition === "top-right" ? 10 : "auto", 
                              left: plpButtonPosition === "top-left" || plpButtonPosition === "bottom-left" ? 10 : "auto", 
                              right: plpButtonPosition === "top-right" || plpButtonPosition === "bottom-right" ? 10 : "auto", 
                              bottom: plpButtonPosition === "bottom-left" || plpButtonPosition === "bottom-right" ? 10 : "auto" 
                            }}>
                             {showPlpButton && <IconRenderer icon={WishlistIcon === "heart" ? heartIcon : starIcon} />}
                            </div>
                          ) : null}
                        </div>
                      </BlockStack>
                      <BlockStack gap="200">
                      <div style={{ background: "#E3E3E3", width: "70%", height: 30, borderRadius: 5 }} />
                      <div style={{ background: "#E3E3E3", width: "100%", height: 10, borderRadius: 5 }} />
                    </BlockStack>
                    </BlockStack>
                    </Box>
                    ))}
              </InlineGrid>
            </BlockStack>
          </Card>
        );
      case 3: // Wishlist Page
        return (
          <Card>
            <BlockStack gap="400" align="center">
              <div style={{ background: "#E3E3E3", width: "100%", height: 40, borderRadius: 5 }} />
              <div style={{ background: "#E3E3E3", width: "100%", height: 40, borderRadius: 5 }} />
              <div style={{ background: "#E3E3E3", width: "100%", height: 40, borderRadius: 5 }} />
            </BlockStack>
          </Card>
        );
      case 4: // Cart
        return (
          <Card>
            <BlockStack gap="400" align="center">
              <div style={{ background: "#E3E3E3", width: "100%", height: 40, borderRadius: 5 }} />
              <div style={{ background: "#E3E3E3", width: "100%", height: 40, borderRadius: 5 }} />
              <div style={{ background: "#E3E3E3", width: "100%", height: 40, borderRadius: 5 }} />
            </BlockStack>
          </Card>
        );
      default:
        return null;
    }
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
