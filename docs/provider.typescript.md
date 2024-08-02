# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-azurerm.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzurermProvider <a name="AzurermProvider" id="@cdktf/provider-azurerm.provider.AzurermProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs azurerm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-azurerm'

new provider.AzurermProvider(scope: Construct, id: string, config: AzurermProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig">AzurermProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig">AzurermProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetAuxiliaryTenantIds">resetAuxiliaryTenantIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetClientCertificatePassword">resetClientCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetClientCertificatePath">resetClientCertificatePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetClientIdFilePath">resetClientIdFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetClientSecretFilePath">resetClientSecretFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetDisableCorrelationRequestId">resetDisableCorrelationRequestId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetDisableTerraformPartnerId">resetDisableTerraformPartnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetMetadataHost">resetMetadataHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetMsiEndpoint">resetMsiEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcRequestToken">resetOidcRequestToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcRequestUrl">resetOidcRequestUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcToken">resetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcTokenFilePath">resetOidcTokenFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetPartnerId">resetPartnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetSkipProviderRegistration">resetSkipProviderRegistration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetStorageUseAzuread">resetStorageUseAzuread</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetUseAksWorkloadIdentity">resetUseAksWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetUseCli">resetUseCli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetUseMsi">resetUseMsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetUseOidc">resetUseOidc</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.provider.AzurermProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.provider.AzurermProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.provider.AzurermProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.provider.AzurermProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.provider.AzurermProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.provider.AzurermProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.provider.AzurermProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.provider.AzurermProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.provider.AzurermProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetAuxiliaryTenantIds` <a name="resetAuxiliaryTenantIds" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetAuxiliaryTenantIds"></a>

```typescript
public resetAuxiliaryTenantIds(): void
```

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientCertificate"></a>

```typescript
public resetClientCertificate(): void
```

##### `resetClientCertificatePassword` <a name="resetClientCertificatePassword" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientCertificatePassword"></a>

```typescript
public resetClientCertificatePassword(): void
```

##### `resetClientCertificatePath` <a name="resetClientCertificatePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientCertificatePath"></a>

```typescript
public resetClientCertificatePath(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientIdFilePath` <a name="resetClientIdFilePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientIdFilePath"></a>

```typescript
public resetClientIdFilePath(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetClientSecretFilePath` <a name="resetClientSecretFilePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientSecretFilePath"></a>

```typescript
public resetClientSecretFilePath(): void
```

##### `resetDisableCorrelationRequestId` <a name="resetDisableCorrelationRequestId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetDisableCorrelationRequestId"></a>

```typescript
public resetDisableCorrelationRequestId(): void
```

##### `resetDisableTerraformPartnerId` <a name="resetDisableTerraformPartnerId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetDisableTerraformPartnerId"></a>

```typescript
public resetDisableTerraformPartnerId(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetMetadataHost` <a name="resetMetadataHost" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetMetadataHost"></a>

```typescript
public resetMetadataHost(): void
```

##### `resetMsiEndpoint` <a name="resetMsiEndpoint" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetMsiEndpoint"></a>

```typescript
public resetMsiEndpoint(): void
```

##### `resetOidcRequestToken` <a name="resetOidcRequestToken" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcRequestToken"></a>

```typescript
public resetOidcRequestToken(): void
```

##### `resetOidcRequestUrl` <a name="resetOidcRequestUrl" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcRequestUrl"></a>

```typescript
public resetOidcRequestUrl(): void
```

##### `resetOidcToken` <a name="resetOidcToken" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcToken"></a>

```typescript
public resetOidcToken(): void
```

##### `resetOidcTokenFilePath` <a name="resetOidcTokenFilePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcTokenFilePath"></a>

```typescript
public resetOidcTokenFilePath(): void
```

##### `resetPartnerId` <a name="resetPartnerId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetPartnerId"></a>

```typescript
public resetPartnerId(): void
```

##### `resetSkipProviderRegistration` <a name="resetSkipProviderRegistration" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetSkipProviderRegistration"></a>

```typescript
public resetSkipProviderRegistration(): void
```

##### `resetStorageUseAzuread` <a name="resetStorageUseAzuread" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetStorageUseAzuread"></a>

```typescript
public resetStorageUseAzuread(): void
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetSubscriptionId"></a>

```typescript
public resetSubscriptionId(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetUseAksWorkloadIdentity` <a name="resetUseAksWorkloadIdentity" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetUseAksWorkloadIdentity"></a>

```typescript
public resetUseAksWorkloadIdentity(): void
```

##### `resetUseCli` <a name="resetUseCli" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetUseCli"></a>

```typescript
public resetUseCli(): void
```

##### `resetUseMsi` <a name="resetUseMsi" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetUseMsi"></a>

```typescript
public resetUseMsi(): void
```

##### `resetUseOidc` <a name="resetUseOidc" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetUseOidc"></a>

```typescript
public resetUseOidc(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AzurermProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.provider.AzurermProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-azurerm'

provider.AzurermProvider.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.provider.AzurermProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.provider.AzurermProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-azurerm'

provider.AzurermProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.provider.AzurermProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-azurerm.provider.AzurermProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-azurerm'

provider.AzurermProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.provider.AzurermProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.provider.AzurermProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktf/provider-azurerm'

provider.AzurermProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AzurermProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.provider.AzurermProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.provider.AzurermProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AzurermProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.provider.AzurermProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AzurermProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.provider.AzurermProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AzurermProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.auxiliaryTenantIdsInput">auxiliaryTenantIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificateInput">clientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePasswordInput">clientCertificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePathInput">clientCertificatePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdFilePathInput">clientIdFilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretFilePathInput">clientSecretFilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.disableCorrelationRequestIdInput">disableCorrelationRequestIdInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.disableTerraformPartnerIdInput">disableTerraformPartnerIdInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.featuresInput">featuresInput</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures">AzurermProviderFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.metadataHostInput">metadataHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.msiEndpointInput">msiEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestTokenInput">oidcRequestTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestUrlInput">oidcRequestUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenFilePathInput">oidcTokenFilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenInput">oidcTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.partnerIdInput">partnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.skipProviderRegistrationInput">skipProviderRegistrationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.storageUseAzureadInput">storageUseAzureadInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useAksWorkloadIdentityInput">useAksWorkloadIdentityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useCliInput">useCliInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useMsiInput">useMsiInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useOidcInput">useOidcInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.auxiliaryTenantIds">auxiliaryTenantIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePassword">clientCertificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePath">clientCertificatePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdFilePath">clientIdFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretFilePath">clientSecretFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.disableCorrelationRequestId">disableCorrelationRequestId</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.disableTerraformPartnerId">disableTerraformPartnerId</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.features">features</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures">AzurermProviderFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.metadataHost">metadataHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.msiEndpoint">msiEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestToken">oidcRequestToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestUrl">oidcRequestUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcToken">oidcToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenFilePath">oidcTokenFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.partnerId">partnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.skipProviderRegistration">skipProviderRegistration</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.storageUseAzuread">storageUseAzuread</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useAksWorkloadIdentity">useAksWorkloadIdentity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useCli">useCli</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useMsi">useMsi</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useOidc">useOidc</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `auxiliaryTenantIdsInput`<sup>Optional</sup> <a name="auxiliaryTenantIdsInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.auxiliaryTenantIdsInput"></a>

```typescript
public readonly auxiliaryTenantIdsInput: string[];
```

- *Type:* string[]

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificateInput"></a>

```typescript
public readonly clientCertificateInput: string;
```

- *Type:* string

---

##### `clientCertificatePasswordInput`<sup>Optional</sup> <a name="clientCertificatePasswordInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePasswordInput"></a>

```typescript
public readonly clientCertificatePasswordInput: string;
```

- *Type:* string

---

##### `clientCertificatePathInput`<sup>Optional</sup> <a name="clientCertificatePathInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePathInput"></a>

```typescript
public readonly clientCertificatePathInput: string;
```

- *Type:* string

---

##### `clientIdFilePathInput`<sup>Optional</sup> <a name="clientIdFilePathInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdFilePathInput"></a>

```typescript
public readonly clientIdFilePathInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretFilePathInput`<sup>Optional</sup> <a name="clientSecretFilePathInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretFilePathInput"></a>

```typescript
public readonly clientSecretFilePathInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `disableCorrelationRequestIdInput`<sup>Optional</sup> <a name="disableCorrelationRequestIdInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.disableCorrelationRequestIdInput"></a>

```typescript
public readonly disableCorrelationRequestIdInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableTerraformPartnerIdInput`<sup>Optional</sup> <a name="disableTerraformPartnerIdInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.disableTerraformPartnerIdInput"></a>

```typescript
public readonly disableTerraformPartnerIdInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `featuresInput`<sup>Optional</sup> <a name="featuresInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.featuresInput"></a>

```typescript
public readonly featuresInput: AzurermProviderFeatures;
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures">AzurermProviderFeatures</a>

---

##### `metadataHostInput`<sup>Optional</sup> <a name="metadataHostInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.metadataHostInput"></a>

```typescript
public readonly metadataHostInput: string;
```

- *Type:* string

---

##### `msiEndpointInput`<sup>Optional</sup> <a name="msiEndpointInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.msiEndpointInput"></a>

```typescript
public readonly msiEndpointInput: string;
```

- *Type:* string

---

##### `oidcRequestTokenInput`<sup>Optional</sup> <a name="oidcRequestTokenInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestTokenInput"></a>

```typescript
public readonly oidcRequestTokenInput: string;
```

- *Type:* string

---

##### `oidcRequestUrlInput`<sup>Optional</sup> <a name="oidcRequestUrlInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestUrlInput"></a>

```typescript
public readonly oidcRequestUrlInput: string;
```

- *Type:* string

---

##### `oidcTokenFilePathInput`<sup>Optional</sup> <a name="oidcTokenFilePathInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenFilePathInput"></a>

```typescript
public readonly oidcTokenFilePathInput: string;
```

- *Type:* string

---

##### `oidcTokenInput`<sup>Optional</sup> <a name="oidcTokenInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenInput"></a>

```typescript
public readonly oidcTokenInput: string;
```

- *Type:* string

---

##### `partnerIdInput`<sup>Optional</sup> <a name="partnerIdInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.partnerIdInput"></a>

```typescript
public readonly partnerIdInput: string;
```

- *Type:* string

---

##### `skipProviderRegistrationInput`<sup>Optional</sup> <a name="skipProviderRegistrationInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.skipProviderRegistrationInput"></a>

```typescript
public readonly skipProviderRegistrationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageUseAzureadInput`<sup>Optional</sup> <a name="storageUseAzureadInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.storageUseAzureadInput"></a>

```typescript
public readonly storageUseAzureadInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `useAksWorkloadIdentityInput`<sup>Optional</sup> <a name="useAksWorkloadIdentityInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useAksWorkloadIdentityInput"></a>

```typescript
public readonly useAksWorkloadIdentityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useCliInput`<sup>Optional</sup> <a name="useCliInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useCliInput"></a>

```typescript
public readonly useCliInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useMsiInput`<sup>Optional</sup> <a name="useMsiInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useMsiInput"></a>

```typescript
public readonly useMsiInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useOidcInput`<sup>Optional</sup> <a name="useOidcInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useOidcInput"></a>

```typescript
public readonly useOidcInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `auxiliaryTenantIds`<sup>Optional</sup> <a name="auxiliaryTenantIds" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.auxiliaryTenantIds"></a>

```typescript
public readonly auxiliaryTenantIds: string[];
```

- *Type:* string[]

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

---

##### `clientCertificatePassword`<sup>Optional</sup> <a name="clientCertificatePassword" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePassword"></a>

```typescript
public readonly clientCertificatePassword: string;
```

- *Type:* string

---

##### `clientCertificatePath`<sup>Optional</sup> <a name="clientCertificatePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePath"></a>

```typescript
public readonly clientCertificatePath: string;
```

- *Type:* string

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientIdFilePath`<sup>Optional</sup> <a name="clientIdFilePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdFilePath"></a>

```typescript
public readonly clientIdFilePath: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `clientSecretFilePath`<sup>Optional</sup> <a name="clientSecretFilePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretFilePath"></a>

```typescript
public readonly clientSecretFilePath: string;
```

- *Type:* string

---

##### `disableCorrelationRequestId`<sup>Optional</sup> <a name="disableCorrelationRequestId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.disableCorrelationRequestId"></a>

```typescript
public readonly disableCorrelationRequestId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableTerraformPartnerId`<sup>Optional</sup> <a name="disableTerraformPartnerId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.disableTerraformPartnerId"></a>

```typescript
public readonly disableTerraformPartnerId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.features"></a>

```typescript
public readonly features: AzurermProviderFeatures;
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures">AzurermProviderFeatures</a>

---

##### `metadataHost`<sup>Optional</sup> <a name="metadataHost" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.metadataHost"></a>

```typescript
public readonly metadataHost: string;
```

- *Type:* string

---

##### `msiEndpoint`<sup>Optional</sup> <a name="msiEndpoint" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.msiEndpoint"></a>

```typescript
public readonly msiEndpoint: string;
```

- *Type:* string

---

##### `oidcRequestToken`<sup>Optional</sup> <a name="oidcRequestToken" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestToken"></a>

```typescript
public readonly oidcRequestToken: string;
```

- *Type:* string

---

##### `oidcRequestUrl`<sup>Optional</sup> <a name="oidcRequestUrl" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestUrl"></a>

```typescript
public readonly oidcRequestUrl: string;
```

- *Type:* string

---

##### `oidcToken`<sup>Optional</sup> <a name="oidcToken" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcToken"></a>

```typescript
public readonly oidcToken: string;
```

- *Type:* string

---

##### `oidcTokenFilePath`<sup>Optional</sup> <a name="oidcTokenFilePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenFilePath"></a>

```typescript
public readonly oidcTokenFilePath: string;
```

- *Type:* string

---

##### `partnerId`<sup>Optional</sup> <a name="partnerId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.partnerId"></a>

```typescript
public readonly partnerId: string;
```

- *Type:* string

---

##### `skipProviderRegistration`<sup>Optional</sup> <a name="skipProviderRegistration" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.skipProviderRegistration"></a>

```typescript
public readonly skipProviderRegistration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageUseAzuread`<sup>Optional</sup> <a name="storageUseAzuread" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.storageUseAzuread"></a>

```typescript
public readonly storageUseAzuread: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `useAksWorkloadIdentity`<sup>Optional</sup> <a name="useAksWorkloadIdentity" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useAksWorkloadIdentity"></a>

```typescript
public readonly useAksWorkloadIdentity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useCli`<sup>Optional</sup> <a name="useCli" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useCli"></a>

```typescript
public readonly useCli: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useMsi`<sup>Optional</sup> <a name="useMsi" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useMsi"></a>

```typescript
public readonly useMsi: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useOidc`<sup>Optional</sup> <a name="useOidc" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useOidc"></a>

```typescript
public readonly useOidc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AzurermProviderConfig <a name="AzurermProviderConfig" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-azurerm'

const azurermProviderConfig: provider.AzurermProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.features">features</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures">AzurermProviderFeatures</a></code> | features block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.auxiliaryTenantIds">auxiliaryTenantIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#auxiliary_tenant_ids AzurermProvider#auxiliary_tenant_ids}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificatePassword">clientCertificatePassword</a></code> | <code>string</code> | The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificatePath">clientCertificatePath</a></code> | <code>string</code> | The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientId">clientId</a></code> | <code>string</code> | The Client ID which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientIdFilePath">clientIdFilePath</a></code> | <code>string</code> | The path to a file containing the Client ID which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientSecretFilePath">clientSecretFilePath</a></code> | <code>string</code> | The path to a file containing the Client Secret which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.disableCorrelationRequestId">disableCorrelationRequestId</a></code> | <code>boolean \| cdktf.IResolvable</code> | This will disable the x-ms-correlation-request-id header. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.disableTerraformPartnerId">disableTerraformPartnerId</a></code> | <code>boolean \| cdktf.IResolvable</code> | This will disable the Terraform Partner ID which is used if a custom `partner_id` isn't specified. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.environment">environment</a></code> | <code>string</code> | The Cloud Environment which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.metadataHost">metadataHost</a></code> | <code>string</code> | The Hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.msiEndpoint">msiEndpoint</a></code> | <code>string</code> | The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcRequestToken">oidcRequestToken</a></code> | <code>string</code> | The bearer token for the request to the OIDC provider. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcRequestUrl">oidcRequestUrl</a></code> | <code>string</code> | The URL for the OIDC provider from which to request an ID token. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcToken">oidcToken</a></code> | <code>string</code> | The OIDC ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcTokenFilePath">oidcTokenFilePath</a></code> | <code>string</code> | The path to a file containing an OIDC ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.partnerId">partnerId</a></code> | <code>string</code> | A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.skipProviderRegistration">skipProviderRegistration</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the AzureRM Provider skip registering all of the Resource Providers that it supports, if they're not already registered? |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.storageUseAzuread">storageUseAzuread</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the AzureRM Provider use Azure AD Authentication when accessing the Storage Data Plane APIs? |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | The Subscription ID which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.tenantId">tenantId</a></code> | <code>string</code> | The Tenant ID which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useAksWorkloadIdentity">useAksWorkloadIdentity</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow Azure AKS Workload Identity to be used for Authentication. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useCli">useCli</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow Azure CLI to be used for Authentication. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useMsi">useMsi</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow Managed Service Identity to be used for Authentication. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useOidc">useOidc</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow OpenID Connect to be used for authentication. |

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.features"></a>

```typescript
public readonly features: AzurermProviderFeatures;
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures">AzurermProviderFeatures</a>

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#features AzurermProvider#features}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#alias AzurermProvider#alias}

---

##### `auxiliaryTenantIds`<sup>Optional</sup> <a name="auxiliaryTenantIds" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.auxiliaryTenantIds"></a>

```typescript
public readonly auxiliaryTenantIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#auxiliary_tenant_ids AzurermProvider#auxiliary_tenant_ids}.

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#client_certificate AzurermProvider#client_certificate}

---

##### `clientCertificatePassword`<sup>Optional</sup> <a name="clientCertificatePassword" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificatePassword"></a>

```typescript
public readonly clientCertificatePassword: string;
```

- *Type:* string

The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#client_certificate_password AzurermProvider#client_certificate_password}

---

##### `clientCertificatePath`<sup>Optional</sup> <a name="clientCertificatePath" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificatePath"></a>

```typescript
public readonly clientCertificatePath: string;
```

- *Type:* string

The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#client_certificate_path AzurermProvider#client_certificate_path}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The Client ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#client_id AzurermProvider#client_id}

---

##### `clientIdFilePath`<sup>Optional</sup> <a name="clientIdFilePath" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientIdFilePath"></a>

```typescript
public readonly clientIdFilePath: string;
```

- *Type:* string

The path to a file containing the Client ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#client_id_file_path AzurermProvider#client_id_file_path}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#client_secret AzurermProvider#client_secret}

---

##### `clientSecretFilePath`<sup>Optional</sup> <a name="clientSecretFilePath" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientSecretFilePath"></a>

```typescript
public readonly clientSecretFilePath: string;
```

- *Type:* string

The path to a file containing the Client Secret which should be used.

For use When authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#client_secret_file_path AzurermProvider#client_secret_file_path}

---

##### `disableCorrelationRequestId`<sup>Optional</sup> <a name="disableCorrelationRequestId" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.disableCorrelationRequestId"></a>

```typescript
public readonly disableCorrelationRequestId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This will disable the x-ms-correlation-request-id header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#disable_correlation_request_id AzurermProvider#disable_correlation_request_id}

---

##### `disableTerraformPartnerId`<sup>Optional</sup> <a name="disableTerraformPartnerId" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.disableTerraformPartnerId"></a>

```typescript
public readonly disableTerraformPartnerId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This will disable the Terraform Partner ID which is used if a custom `partner_id` isn't specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#disable_terraform_partner_id AzurermProvider#disable_terraform_partner_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The Cloud Environment which should be used.

Possible values are public, usgovernment, and china. Defaults to public. Not used and should not be specified when `metadata_host` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#environment AzurermProvider#environment}

---

##### `metadataHost`<sup>Optional</sup> <a name="metadataHost" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.metadataHost"></a>

```typescript
public readonly metadataHost: string;
```

- *Type:* string

The Hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#metadata_host AzurermProvider#metadata_host}

---

##### `msiEndpoint`<sup>Optional</sup> <a name="msiEndpoint" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.msiEndpoint"></a>

```typescript
public readonly msiEndpoint: string;
```

- *Type:* string

The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#msi_endpoint AzurermProvider#msi_endpoint}

---

##### `oidcRequestToken`<sup>Optional</sup> <a name="oidcRequestToken" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcRequestToken"></a>

```typescript
public readonly oidcRequestToken: string;
```

- *Type:* string

The bearer token for the request to the OIDC provider.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#oidc_request_token AzurermProvider#oidc_request_token}

---

##### `oidcRequestUrl`<sup>Optional</sup> <a name="oidcRequestUrl" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcRequestUrl"></a>

```typescript
public readonly oidcRequestUrl: string;
```

- *Type:* string

The URL for the OIDC provider from which to request an ID token.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#oidc_request_url AzurermProvider#oidc_request_url}

---

##### `oidcToken`<sup>Optional</sup> <a name="oidcToken" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcToken"></a>

```typescript
public readonly oidcToken: string;
```

- *Type:* string

The OIDC ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#oidc_token AzurermProvider#oidc_token}

---

##### `oidcTokenFilePath`<sup>Optional</sup> <a name="oidcTokenFilePath" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcTokenFilePath"></a>

```typescript
public readonly oidcTokenFilePath: string;
```

- *Type:* string

The path to a file containing an OIDC ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#oidc_token_file_path AzurermProvider#oidc_token_file_path}

---

##### `partnerId`<sup>Optional</sup> <a name="partnerId" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.partnerId"></a>

```typescript
public readonly partnerId: string;
```

- *Type:* string

A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#partner_id AzurermProvider#partner_id}

---

##### `skipProviderRegistration`<sup>Optional</sup> <a name="skipProviderRegistration" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.skipProviderRegistration"></a>

```typescript
public readonly skipProviderRegistration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the AzureRM Provider skip registering all of the Resource Providers that it supports, if they're not already registered?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#skip_provider_registration AzurermProvider#skip_provider_registration}

---

##### `storageUseAzuread`<sup>Optional</sup> <a name="storageUseAzuread" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.storageUseAzuread"></a>

```typescript
public readonly storageUseAzuread: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the AzureRM Provider use Azure AD Authentication when accessing the Storage Data Plane APIs?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#storage_use_azuread AzurermProvider#storage_use_azuread}

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

The Subscription ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#subscription_id AzurermProvider#subscription_id}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

The Tenant ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#tenant_id AzurermProvider#tenant_id}

---

##### `useAksWorkloadIdentity`<sup>Optional</sup> <a name="useAksWorkloadIdentity" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useAksWorkloadIdentity"></a>

```typescript
public readonly useAksWorkloadIdentity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow Azure AKS Workload Identity to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#use_aks_workload_identity AzurermProvider#use_aks_workload_identity}

---

##### `useCli`<sup>Optional</sup> <a name="useCli" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useCli"></a>

```typescript
public readonly useCli: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow Azure CLI to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#use_cli AzurermProvider#use_cli}

---

##### `useMsi`<sup>Optional</sup> <a name="useMsi" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useMsi"></a>

```typescript
public readonly useMsi: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow Managed Service Identity to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#use_msi AzurermProvider#use_msi}

---

##### `useOidc`<sup>Optional</sup> <a name="useOidc" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useOidc"></a>

```typescript
public readonly useOidc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow OpenID Connect to be used for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#use_oidc AzurermProvider#use_oidc}

---

### AzurermProviderFeatures <a name="AzurermProviderFeatures" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-azurerm'

const azurermProviderFeatures: provider.AzurermProviderFeatures = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.apiManagement">apiManagement</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement">AzurermProviderFeaturesApiManagement</a></code> | api_management block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.appConfiguration">appConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration">AzurermProviderFeaturesAppConfiguration</a></code> | app_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.applicationInsights">applicationInsights</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights">AzurermProviderFeaturesApplicationInsights</a></code> | application_insights block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.cognitiveAccount">cognitiveAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount">AzurermProviderFeaturesCognitiveAccount</a></code> | cognitive_account block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.keyVault">keyVault</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault">AzurermProviderFeaturesKeyVault</a></code> | key_vault block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.logAnalyticsWorkspace">logAnalyticsWorkspace</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace">AzurermProviderFeaturesLogAnalyticsWorkspace</a></code> | log_analytics_workspace block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.machineLearning">machineLearning</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesMachineLearning">AzurermProviderFeaturesMachineLearning</a></code> | machine_learning block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.managedDisk">managedDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk">AzurermProviderFeaturesManagedDisk</a></code> | managed_disk block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.postgresqlFlexibleServer">postgresqlFlexibleServer</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesPostgresqlFlexibleServer">AzurermProviderFeaturesPostgresqlFlexibleServer</a></code> | postgresql_flexible_server block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.recoveryService">recoveryService</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService">AzurermProviderFeaturesRecoveryService</a></code> | recovery_service block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.recoveryServicesVaults">recoveryServicesVaults</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryServicesVaults">AzurermProviderFeaturesRecoveryServicesVaults</a></code> | recovery_services_vaults block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.resourceGroup">resourceGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup">AzurermProviderFeaturesResourceGroup</a></code> | resource_group block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.subscription">subscription</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesSubscription">AzurermProviderFeaturesSubscription</a></code> | subscription block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.templateDeployment">templateDeployment</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment">AzurermProviderFeaturesTemplateDeployment</a></code> | template_deployment block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.virtualMachine">virtualMachine</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine">AzurermProviderFeaturesVirtualMachine</a></code> | virtual_machine block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.virtualMachineScaleSet">virtualMachineScaleSet</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet">AzurermProviderFeaturesVirtualMachineScaleSet</a></code> | virtual_machine_scale_set block. |

---

##### `apiManagement`<sup>Optional</sup> <a name="apiManagement" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.apiManagement"></a>

```typescript
public readonly apiManagement: AzurermProviderFeaturesApiManagement;
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement">AzurermProviderFeaturesApiManagement</a>

api_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#api_management AzurermProvider#api_management}

---

##### `appConfiguration`<sup>Optional</sup> <a name="appConfiguration" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.appConfiguration"></a>

```typescript
public readonly appConfiguration: AzurermProviderFeaturesAppConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration">AzurermProviderFeaturesAppConfiguration</a>

app_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#app_configuration AzurermProvider#app_configuration}

---

##### `applicationInsights`<sup>Optional</sup> <a name="applicationInsights" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.applicationInsights"></a>

```typescript
public readonly applicationInsights: AzurermProviderFeaturesApplicationInsights;
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights">AzurermProviderFeaturesApplicationInsights</a>

application_insights block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#application_insights AzurermProvider#application_insights}

---

##### `cognitiveAccount`<sup>Optional</sup> <a name="cognitiveAccount" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.cognitiveAccount"></a>

```typescript
public readonly cognitiveAccount: AzurermProviderFeaturesCognitiveAccount;
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount">AzurermProviderFeaturesCognitiveAccount</a>

cognitive_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#cognitive_account AzurermProvider#cognitive_account}

---

##### `keyVault`<sup>Optional</sup> <a name="keyVault" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.keyVault"></a>

```typescript
public readonly keyVault: AzurermProviderFeaturesKeyVault;
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault">AzurermProviderFeaturesKeyVault</a>

key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#key_vault AzurermProvider#key_vault}

---

##### `logAnalyticsWorkspace`<sup>Optional</sup> <a name="logAnalyticsWorkspace" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.logAnalyticsWorkspace"></a>

```typescript
public readonly logAnalyticsWorkspace: AzurermProviderFeaturesLogAnalyticsWorkspace;
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace">AzurermProviderFeaturesLogAnalyticsWorkspace</a>

log_analytics_workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#log_analytics_workspace AzurermProvider#log_analytics_workspace}

---

##### `machineLearning`<sup>Optional</sup> <a name="machineLearning" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.machineLearning"></a>

```typescript
public readonly machineLearning: AzurermProviderFeaturesMachineLearning;
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesMachineLearning">AzurermProviderFeaturesMachineLearning</a>

machine_learning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#machine_learning AzurermProvider#machine_learning}

---

##### `managedDisk`<sup>Optional</sup> <a name="managedDisk" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.managedDisk"></a>

```typescript
public readonly managedDisk: AzurermProviderFeaturesManagedDisk;
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk">AzurermProviderFeaturesManagedDisk</a>

managed_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#managed_disk AzurermProvider#managed_disk}

---

##### `postgresqlFlexibleServer`<sup>Optional</sup> <a name="postgresqlFlexibleServer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.postgresqlFlexibleServer"></a>

```typescript
public readonly postgresqlFlexibleServer: AzurermProviderFeaturesPostgresqlFlexibleServer;
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesPostgresqlFlexibleServer">AzurermProviderFeaturesPostgresqlFlexibleServer</a>

postgresql_flexible_server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#postgresql_flexible_server AzurermProvider#postgresql_flexible_server}

---

##### `recoveryService`<sup>Optional</sup> <a name="recoveryService" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.recoveryService"></a>

```typescript
public readonly recoveryService: AzurermProviderFeaturesRecoveryService;
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService">AzurermProviderFeaturesRecoveryService</a>

recovery_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#recovery_service AzurermProvider#recovery_service}

---

##### `recoveryServicesVaults`<sup>Optional</sup> <a name="recoveryServicesVaults" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.recoveryServicesVaults"></a>

```typescript
public readonly recoveryServicesVaults: AzurermProviderFeaturesRecoveryServicesVaults;
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryServicesVaults">AzurermProviderFeaturesRecoveryServicesVaults</a>

recovery_services_vaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#recovery_services_vaults AzurermProvider#recovery_services_vaults}

---

##### `resourceGroup`<sup>Optional</sup> <a name="resourceGroup" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.resourceGroup"></a>

```typescript
public readonly resourceGroup: AzurermProviderFeaturesResourceGroup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup">AzurermProviderFeaturesResourceGroup</a>

resource_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#resource_group AzurermProvider#resource_group}

---

##### `subscription`<sup>Optional</sup> <a name="subscription" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.subscription"></a>

```typescript
public readonly subscription: AzurermProviderFeaturesSubscription;
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesSubscription">AzurermProviderFeaturesSubscription</a>

subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#subscription AzurermProvider#subscription}

---

##### `templateDeployment`<sup>Optional</sup> <a name="templateDeployment" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.templateDeployment"></a>

```typescript
public readonly templateDeployment: AzurermProviderFeaturesTemplateDeployment;
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment">AzurermProviderFeaturesTemplateDeployment</a>

template_deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#template_deployment AzurermProvider#template_deployment}

---

##### `virtualMachine`<sup>Optional</sup> <a name="virtualMachine" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.virtualMachine"></a>

```typescript
public readonly virtualMachine: AzurermProviderFeaturesVirtualMachine;
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine">AzurermProviderFeaturesVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#virtual_machine AzurermProvider#virtual_machine}

---

##### `virtualMachineScaleSet`<sup>Optional</sup> <a name="virtualMachineScaleSet" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.virtualMachineScaleSet"></a>

```typescript
public readonly virtualMachineScaleSet: AzurermProviderFeaturesVirtualMachineScaleSet;
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet">AzurermProviderFeaturesVirtualMachineScaleSet</a>

virtual_machine_scale_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#virtual_machine_scale_set AzurermProvider#virtual_machine_scale_set}

---

### AzurermProviderFeaturesApiManagement <a name="AzurermProviderFeaturesApiManagement" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-azurerm'

const azurermProviderFeaturesApiManagement: provider.AzurermProviderFeaturesApiManagement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.property.purgeSoftDeleteOnDestroy">purgeSoftDeleteOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.property.recoverSoftDeleted">recoverSoftDeleted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}. |

---

##### `purgeSoftDeleteOnDestroy`<sup>Optional</sup> <a name="purgeSoftDeleteOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.property.purgeSoftDeleteOnDestroy"></a>

```typescript
public readonly purgeSoftDeleteOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}.

---

##### `recoverSoftDeleted`<sup>Optional</sup> <a name="recoverSoftDeleted" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.property.recoverSoftDeleted"></a>

```typescript
public readonly recoverSoftDeleted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}.

---

### AzurermProviderFeaturesAppConfiguration <a name="AzurermProviderFeaturesAppConfiguration" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-azurerm'

const azurermProviderFeaturesAppConfiguration: provider.AzurermProviderFeaturesAppConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.property.purgeSoftDeleteOnDestroy">purgeSoftDeleteOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.property.recoverSoftDeleted">recoverSoftDeleted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}. |

---

##### `purgeSoftDeleteOnDestroy`<sup>Optional</sup> <a name="purgeSoftDeleteOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.property.purgeSoftDeleteOnDestroy"></a>

```typescript
public readonly purgeSoftDeleteOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}.

---

##### `recoverSoftDeleted`<sup>Optional</sup> <a name="recoverSoftDeleted" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.property.recoverSoftDeleted"></a>

```typescript
public readonly recoverSoftDeleted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}.

---

### AzurermProviderFeaturesApplicationInsights <a name="AzurermProviderFeaturesApplicationInsights" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-azurerm'

const azurermProviderFeaturesApplicationInsights: provider.AzurermProviderFeaturesApplicationInsights = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights.property.disableGeneratedRule">disableGeneratedRule</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#disable_generated_rule AzurermProvider#disable_generated_rule}. |

---

##### `disableGeneratedRule`<sup>Optional</sup> <a name="disableGeneratedRule" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights.property.disableGeneratedRule"></a>

```typescript
public readonly disableGeneratedRule: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#disable_generated_rule AzurermProvider#disable_generated_rule}.

---

### AzurermProviderFeaturesCognitiveAccount <a name="AzurermProviderFeaturesCognitiveAccount" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-azurerm'

const azurermProviderFeaturesCognitiveAccount: provider.AzurermProviderFeaturesCognitiveAccount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount.property.purgeSoftDeleteOnDestroy">purgeSoftDeleteOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}. |

---

##### `purgeSoftDeleteOnDestroy`<sup>Optional</sup> <a name="purgeSoftDeleteOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount.property.purgeSoftDeleteOnDestroy"></a>

```typescript
public readonly purgeSoftDeleteOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}.

---

### AzurermProviderFeaturesKeyVault <a name="AzurermProviderFeaturesKeyVault" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-azurerm'

const azurermProviderFeaturesKeyVault: provider.AzurermProviderFeaturesKeyVault = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedCertificatesOnDestroy">purgeSoftDeletedCertificatesOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled soft-deleted `azurerm_key_vault_certificate` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedHardwareSecurityModuleKeysOnDestroy">purgeSoftDeletedHardwareSecurityModuleKeysOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module_key` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedHardwareSecurityModulesOnDestroy">purgeSoftDeletedHardwareSecurityModulesOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedKeysOnDestroy">purgeSoftDeletedKeysOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled soft-deleted `azurerm_key_vault_key` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedSecretsOnDestroy">purgeSoftDeletedSecretsOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled soft-deleted `azurerm_key_vault_secret` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeleteOnDestroy">purgeSoftDeleteOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled soft-deleted `azurerm_key_vault` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedCertificates">recoverSoftDeletedCertificates</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled soft-deleted `azurerm_key_vault_certificate` resources will be restored, instead of creating new ones. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedHardwareSecurityModuleKeys">recoverSoftDeletedHardwareSecurityModuleKeys</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module_key` resources will be restored, instead of creating new ones. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedKeys">recoverSoftDeletedKeys</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled soft-deleted `azurerm_key_vault_key` resources will be restored, instead of creating new ones. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedKeyVaults">recoverSoftDeletedKeyVaults</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled soft-deleted `azurerm_key_vault` resources will be restored, instead of creating new ones. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedSecrets">recoverSoftDeletedSecrets</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled soft-deleted `azurerm_key_vault_secret` resources will be restored, instead of creating new ones. |

---

##### `purgeSoftDeletedCertificatesOnDestroy`<sup>Optional</sup> <a name="purgeSoftDeletedCertificatesOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedCertificatesOnDestroy"></a>

```typescript
public readonly purgeSoftDeletedCertificatesOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled soft-deleted `azurerm_key_vault_certificate` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#purge_soft_deleted_certificates_on_destroy AzurermProvider#purge_soft_deleted_certificates_on_destroy}

---

##### `purgeSoftDeletedHardwareSecurityModuleKeysOnDestroy`<sup>Optional</sup> <a name="purgeSoftDeletedHardwareSecurityModuleKeysOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedHardwareSecurityModuleKeysOnDestroy"></a>

```typescript
public readonly purgeSoftDeletedHardwareSecurityModuleKeysOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module_key` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#purge_soft_deleted_hardware_security_module_keys_on_destroy AzurermProvider#purge_soft_deleted_hardware_security_module_keys_on_destroy}

---

##### `purgeSoftDeletedHardwareSecurityModulesOnDestroy`<sup>Optional</sup> <a name="purgeSoftDeletedHardwareSecurityModulesOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedHardwareSecurityModulesOnDestroy"></a>

```typescript
public readonly purgeSoftDeletedHardwareSecurityModulesOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#purge_soft_deleted_hardware_security_modules_on_destroy AzurermProvider#purge_soft_deleted_hardware_security_modules_on_destroy}

---

##### `purgeSoftDeletedKeysOnDestroy`<sup>Optional</sup> <a name="purgeSoftDeletedKeysOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedKeysOnDestroy"></a>

```typescript
public readonly purgeSoftDeletedKeysOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled soft-deleted `azurerm_key_vault_key` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#purge_soft_deleted_keys_on_destroy AzurermProvider#purge_soft_deleted_keys_on_destroy}

---

##### `purgeSoftDeletedSecretsOnDestroy`<sup>Optional</sup> <a name="purgeSoftDeletedSecretsOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedSecretsOnDestroy"></a>

```typescript
public readonly purgeSoftDeletedSecretsOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled soft-deleted `azurerm_key_vault_secret` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#purge_soft_deleted_secrets_on_destroy AzurermProvider#purge_soft_deleted_secrets_on_destroy}

---

##### `purgeSoftDeleteOnDestroy`<sup>Optional</sup> <a name="purgeSoftDeleteOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeleteOnDestroy"></a>

```typescript
public readonly purgeSoftDeleteOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled soft-deleted `azurerm_key_vault` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}

---

##### `recoverSoftDeletedCertificates`<sup>Optional</sup> <a name="recoverSoftDeletedCertificates" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedCertificates"></a>

```typescript
public readonly recoverSoftDeletedCertificates: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled soft-deleted `azurerm_key_vault_certificate` resources will be restored, instead of creating new ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#recover_soft_deleted_certificates AzurermProvider#recover_soft_deleted_certificates}

---

##### `recoverSoftDeletedHardwareSecurityModuleKeys`<sup>Optional</sup> <a name="recoverSoftDeletedHardwareSecurityModuleKeys" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedHardwareSecurityModuleKeys"></a>

```typescript
public readonly recoverSoftDeletedHardwareSecurityModuleKeys: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module_key` resources will be restored, instead of creating new ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#recover_soft_deleted_hardware_security_module_keys AzurermProvider#recover_soft_deleted_hardware_security_module_keys}

---

##### `recoverSoftDeletedKeys`<sup>Optional</sup> <a name="recoverSoftDeletedKeys" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedKeys"></a>

```typescript
public readonly recoverSoftDeletedKeys: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled soft-deleted `azurerm_key_vault_key` resources will be restored, instead of creating new ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#recover_soft_deleted_keys AzurermProvider#recover_soft_deleted_keys}

---

##### `recoverSoftDeletedKeyVaults`<sup>Optional</sup> <a name="recoverSoftDeletedKeyVaults" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedKeyVaults"></a>

```typescript
public readonly recoverSoftDeletedKeyVaults: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled soft-deleted `azurerm_key_vault` resources will be restored, instead of creating new ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#recover_soft_deleted_key_vaults AzurermProvider#recover_soft_deleted_key_vaults}

---

##### `recoverSoftDeletedSecrets`<sup>Optional</sup> <a name="recoverSoftDeletedSecrets" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedSecrets"></a>

```typescript
public readonly recoverSoftDeletedSecrets: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled soft-deleted `azurerm_key_vault_secret` resources will be restored, instead of creating new ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#recover_soft_deleted_secrets AzurermProvider#recover_soft_deleted_secrets}

---

### AzurermProviderFeaturesLogAnalyticsWorkspace <a name="AzurermProviderFeaturesLogAnalyticsWorkspace" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-azurerm'

const azurermProviderFeaturesLogAnalyticsWorkspace: provider.AzurermProviderFeaturesLogAnalyticsWorkspace = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace.property.permanentlyDeleteOnDestroy">permanentlyDeleteOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#permanently_delete_on_destroy AzurermProvider#permanently_delete_on_destroy}. |

---

##### `permanentlyDeleteOnDestroy`<sup>Optional</sup> <a name="permanentlyDeleteOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace.property.permanentlyDeleteOnDestroy"></a>

```typescript
public readonly permanentlyDeleteOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#permanently_delete_on_destroy AzurermProvider#permanently_delete_on_destroy}.

---

### AzurermProviderFeaturesMachineLearning <a name="AzurermProviderFeaturesMachineLearning" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesMachineLearning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesMachineLearning.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-azurerm'

const azurermProviderFeaturesMachineLearning: provider.AzurermProviderFeaturesMachineLearning = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesMachineLearning.property.purgeSoftDeletedWorkspaceOnDestroy">purgeSoftDeletedWorkspaceOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#purge_soft_deleted_workspace_on_destroy AzurermProvider#purge_soft_deleted_workspace_on_destroy}. |

---

##### `purgeSoftDeletedWorkspaceOnDestroy`<sup>Optional</sup> <a name="purgeSoftDeletedWorkspaceOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesMachineLearning.property.purgeSoftDeletedWorkspaceOnDestroy"></a>

```typescript
public readonly purgeSoftDeletedWorkspaceOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#purge_soft_deleted_workspace_on_destroy AzurermProvider#purge_soft_deleted_workspace_on_destroy}.

---

### AzurermProviderFeaturesManagedDisk <a name="AzurermProviderFeaturesManagedDisk" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-azurerm'

const azurermProviderFeaturesManagedDisk: provider.AzurermProviderFeaturesManagedDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk.property.expandWithoutDowntime">expandWithoutDowntime</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#expand_without_downtime AzurermProvider#expand_without_downtime}. |

---

##### `expandWithoutDowntime`<sup>Optional</sup> <a name="expandWithoutDowntime" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk.property.expandWithoutDowntime"></a>

```typescript
public readonly expandWithoutDowntime: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#expand_without_downtime AzurermProvider#expand_without_downtime}.

---

### AzurermProviderFeaturesPostgresqlFlexibleServer <a name="AzurermProviderFeaturesPostgresqlFlexibleServer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesPostgresqlFlexibleServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesPostgresqlFlexibleServer.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-azurerm'

const azurermProviderFeaturesPostgresqlFlexibleServer: provider.AzurermProviderFeaturesPostgresqlFlexibleServer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesPostgresqlFlexibleServer.property.restartServerOnConfigurationValueChange">restartServerOnConfigurationValueChange</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#restart_server_on_configuration_value_change AzurermProvider#restart_server_on_configuration_value_change}. |

---

##### `restartServerOnConfigurationValueChange`<sup>Optional</sup> <a name="restartServerOnConfigurationValueChange" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesPostgresqlFlexibleServer.property.restartServerOnConfigurationValueChange"></a>

```typescript
public readonly restartServerOnConfigurationValueChange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#restart_server_on_configuration_value_change AzurermProvider#restart_server_on_configuration_value_change}.

---

### AzurermProviderFeaturesRecoveryService <a name="AzurermProviderFeaturesRecoveryService" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-azurerm'

const azurermProviderFeaturesRecoveryService: provider.AzurermProviderFeaturesRecoveryService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.property.purgeProtectedItemsFromVaultOnDestroy">purgeProtectedItemsFromVaultOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#purge_protected_items_from_vault_on_destroy AzurermProvider#purge_protected_items_from_vault_on_destroy}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.property.vmBackupStopProtectionAndRetainDataOnDestroy">vmBackupStopProtectionAndRetainDataOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#vm_backup_stop_protection_and_retain_data_on_destroy AzurermProvider#vm_backup_stop_protection_and_retain_data_on_destroy}. |

---

##### `purgeProtectedItemsFromVaultOnDestroy`<sup>Optional</sup> <a name="purgeProtectedItemsFromVaultOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.property.purgeProtectedItemsFromVaultOnDestroy"></a>

```typescript
public readonly purgeProtectedItemsFromVaultOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#purge_protected_items_from_vault_on_destroy AzurermProvider#purge_protected_items_from_vault_on_destroy}.

---

##### `vmBackupStopProtectionAndRetainDataOnDestroy`<sup>Optional</sup> <a name="vmBackupStopProtectionAndRetainDataOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.property.vmBackupStopProtectionAndRetainDataOnDestroy"></a>

```typescript
public readonly vmBackupStopProtectionAndRetainDataOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#vm_backup_stop_protection_and_retain_data_on_destroy AzurermProvider#vm_backup_stop_protection_and_retain_data_on_destroy}.

---

### AzurermProviderFeaturesRecoveryServicesVaults <a name="AzurermProviderFeaturesRecoveryServicesVaults" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryServicesVaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryServicesVaults.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-azurerm'

const azurermProviderFeaturesRecoveryServicesVaults: provider.AzurermProviderFeaturesRecoveryServicesVaults = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryServicesVaults.property.recoverSoftDeletedBackupProtectedVm">recoverSoftDeletedBackupProtectedVm</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#recover_soft_deleted_backup_protected_vm AzurermProvider#recover_soft_deleted_backup_protected_vm}. |

---

##### `recoverSoftDeletedBackupProtectedVm`<sup>Optional</sup> <a name="recoverSoftDeletedBackupProtectedVm" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryServicesVaults.property.recoverSoftDeletedBackupProtectedVm"></a>

```typescript
public readonly recoverSoftDeletedBackupProtectedVm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#recover_soft_deleted_backup_protected_vm AzurermProvider#recover_soft_deleted_backup_protected_vm}.

---

### AzurermProviderFeaturesResourceGroup <a name="AzurermProviderFeaturesResourceGroup" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-azurerm'

const azurermProviderFeaturesResourceGroup: provider.AzurermProviderFeaturesResourceGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup.property.preventDeletionIfContainsResources">preventDeletionIfContainsResources</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#prevent_deletion_if_contains_resources AzurermProvider#prevent_deletion_if_contains_resources}. |

---

##### `preventDeletionIfContainsResources`<sup>Optional</sup> <a name="preventDeletionIfContainsResources" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup.property.preventDeletionIfContainsResources"></a>

```typescript
public readonly preventDeletionIfContainsResources: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#prevent_deletion_if_contains_resources AzurermProvider#prevent_deletion_if_contains_resources}.

---

### AzurermProviderFeaturesSubscription <a name="AzurermProviderFeaturesSubscription" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesSubscription"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesSubscription.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-azurerm'

const azurermProviderFeaturesSubscription: provider.AzurermProviderFeaturesSubscription = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesSubscription.property.preventCancellationOnDestroy">preventCancellationOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#prevent_cancellation_on_destroy AzurermProvider#prevent_cancellation_on_destroy}. |

---

##### `preventCancellationOnDestroy`<sup>Optional</sup> <a name="preventCancellationOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesSubscription.property.preventCancellationOnDestroy"></a>

```typescript
public readonly preventCancellationOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#prevent_cancellation_on_destroy AzurermProvider#prevent_cancellation_on_destroy}.

---

### AzurermProviderFeaturesTemplateDeployment <a name="AzurermProviderFeaturesTemplateDeployment" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-azurerm'

const azurermProviderFeaturesTemplateDeployment: provider.AzurermProviderFeaturesTemplateDeployment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment.property.deleteNestedItemsDuringDeletion">deleteNestedItemsDuringDeletion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#delete_nested_items_during_deletion AzurermProvider#delete_nested_items_during_deletion}. |

---

##### `deleteNestedItemsDuringDeletion`<sup>Required</sup> <a name="deleteNestedItemsDuringDeletion" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment.property.deleteNestedItemsDuringDeletion"></a>

```typescript
public readonly deleteNestedItemsDuringDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#delete_nested_items_during_deletion AzurermProvider#delete_nested_items_during_deletion}.

---

### AzurermProviderFeaturesVirtualMachine <a name="AzurermProviderFeaturesVirtualMachine" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-azurerm'

const azurermProviderFeaturesVirtualMachine: provider.AzurermProviderFeaturesVirtualMachine = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.deleteOsDiskOnDeletion">deleteOsDiskOnDeletion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#delete_os_disk_on_deletion AzurermProvider#delete_os_disk_on_deletion}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.detachImplicitDataDiskOnDeletion">detachImplicitDataDiskOnDeletion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#detach_implicit_data_disk_on_deletion AzurermProvider#detach_implicit_data_disk_on_deletion}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.gracefulShutdown">gracefulShutdown</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#graceful_shutdown AzurermProvider#graceful_shutdown}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.skipShutdownAndForceDelete">skipShutdownAndForceDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#skip_shutdown_and_force_delete AzurermProvider#skip_shutdown_and_force_delete}. |

---

##### `deleteOsDiskOnDeletion`<sup>Optional</sup> <a name="deleteOsDiskOnDeletion" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.deleteOsDiskOnDeletion"></a>

```typescript
public readonly deleteOsDiskOnDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#delete_os_disk_on_deletion AzurermProvider#delete_os_disk_on_deletion}.

---

##### `detachImplicitDataDiskOnDeletion`<sup>Optional</sup> <a name="detachImplicitDataDiskOnDeletion" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.detachImplicitDataDiskOnDeletion"></a>

```typescript
public readonly detachImplicitDataDiskOnDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#detach_implicit_data_disk_on_deletion AzurermProvider#detach_implicit_data_disk_on_deletion}.

---

##### `gracefulShutdown`<sup>Optional</sup> <a name="gracefulShutdown" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.gracefulShutdown"></a>

```typescript
public readonly gracefulShutdown: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#graceful_shutdown AzurermProvider#graceful_shutdown}.

---

##### `skipShutdownAndForceDelete`<sup>Optional</sup> <a name="skipShutdownAndForceDelete" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.skipShutdownAndForceDelete"></a>

```typescript
public readonly skipShutdownAndForceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#skip_shutdown_and_force_delete AzurermProvider#skip_shutdown_and_force_delete}.

---

### AzurermProviderFeaturesVirtualMachineScaleSet <a name="AzurermProviderFeaturesVirtualMachineScaleSet" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-azurerm'

const azurermProviderFeaturesVirtualMachineScaleSet: provider.AzurermProviderFeaturesVirtualMachineScaleSet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#force_delete AzurermProvider#force_delete}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.reimageOnManualUpgrade">reimageOnManualUpgrade</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#reimage_on_manual_upgrade AzurermProvider#reimage_on_manual_upgrade}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.rollInstancesWhenRequired">rollInstancesWhenRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#roll_instances_when_required AzurermProvider#roll_instances_when_required}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.scaleToZeroBeforeDeletion">scaleToZeroBeforeDeletion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#scale_to_zero_before_deletion AzurermProvider#scale_to_zero_before_deletion}. |

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#force_delete AzurermProvider#force_delete}.

---

##### `reimageOnManualUpgrade`<sup>Optional</sup> <a name="reimageOnManualUpgrade" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.reimageOnManualUpgrade"></a>

```typescript
public readonly reimageOnManualUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#reimage_on_manual_upgrade AzurermProvider#reimage_on_manual_upgrade}.

---

##### `rollInstancesWhenRequired`<sup>Optional</sup> <a name="rollInstancesWhenRequired" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.rollInstancesWhenRequired"></a>

```typescript
public readonly rollInstancesWhenRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#roll_instances_when_required AzurermProvider#roll_instances_when_required}.

---

##### `scaleToZeroBeforeDeletion`<sup>Optional</sup> <a name="scaleToZeroBeforeDeletion" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.scaleToZeroBeforeDeletion"></a>

```typescript
public readonly scaleToZeroBeforeDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs#scale_to_zero_before_deletion AzurermProvider#scale_to_zero_before_deletion}.

---



