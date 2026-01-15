// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { getUniqueName } from "../testHelpers.js";

export { getUniqueName };

export function getSignatureFromSasUrl(sasUrl: string): string {
  const url = new URL(sasUrl);
  const signature = url.searchParams.get("sig");
  return signature!;
}
