import React from "react";
import { Page, Layout, Card, Text, Link, List, BlockStack, Button, InlineStack, InlineGrid } from "@shopify/polaris";
import { ExternalSmallIcon } from '@shopify/polaris-icons';
import { TitleBar } from "@shopify/app-bridge-react";

export default function AdditionalPage() {
  return (
    <Page >
      <TitleBar title="Settings" />
      <Layout >
        <Layout.Section>
          <BlockStack gap="500">
            <Text variant="headingLg">Hi 👋, welcome to X Wishlist</Text>
            <Card>
              <InlineStack align="space-between" blockAlign="center">
                <Text variant="headingMd">Please enable app to start using wishlist app.</Text>
                <Button variant="primary"  icon={ExternalSmallIcon}>Enale App</Button>
              </InlineStack>
            </Card>
            <Card>
              <InlineStack align="space-between" blockAlign="center">
                <Text variant="headingMd">Enable wishlist widget to show 'Add to wishlist' button on product page.</Text>
                <Button variant="primary"  icon={ExternalSmallIcon}>Enale App Block</Button>
              </InlineStack>
            </Card>
              <InlineGrid columns={2} gap="500">
                <Card>
                  <InlineStack align="space-between" blockAlign="center">
                    <Text variant="headingMd">Wishlist customers</Text>
                    <Text variant="headingMd">0</Text>
                  </InlineStack>
                </Card>
                <Card>
                  <InlineStack align="space-between" blockAlign="center">
                    <Text variant="headingMd">Wishlist products</Text>
                    <Text variant="headingMd">0</Text>
                  </InlineStack>
                </Card>
              </InlineGrid>  
          </BlockStack>

        </Layout.Section> 
      </Layout>
    </Page>
  );
}
