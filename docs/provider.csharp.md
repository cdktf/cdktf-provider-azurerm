# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-azurerm.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzurermProvider <a name="AzurermProvider" id="@cdktf/provider-azurerm.provider.AzurermProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs azurerm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AzurermProvider(Construct Scope, string Id, AzurermProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig">AzurermProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig">AzurermProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetAdoPipelineServiceConnectionId">ResetAdoPipelineServiceConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetAuxiliaryTenantIds">ResetAuxiliaryTenantIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetClientCertificate">ResetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetClientCertificatePassword">ResetClientCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetClientCertificatePath">ResetClientCertificatePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetClientIdFilePath">ResetClientIdFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetClientSecretFilePath">ResetClientSecretFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetDisableCorrelationRequestId">ResetDisableCorrelationRequestId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetDisableTerraformPartnerId">ResetDisableTerraformPartnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetFeatures">ResetFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetMetadataHost">ResetMetadataHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetMsiApiVersion">ResetMsiApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetMsiEndpoint">ResetMsiEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcRequestToken">ResetOidcRequestToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcRequestUrl">ResetOidcRequestUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcToken">ResetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcTokenFilePath">ResetOidcTokenFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetPartnerId">ResetPartnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetResourceProviderRegistrations">ResetResourceProviderRegistrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetResourceProvidersToRegister">ResetResourceProvidersToRegister</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetSkipProviderRegistration">ResetSkipProviderRegistration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetStorageUseAzuread">ResetStorageUseAzuread</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetUseAksWorkloadIdentity">ResetUseAksWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetUseCli">ResetUseCli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetUseMsi">ResetUseMsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetUseOidc">ResetUseOidc</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.provider.AzurermProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.provider.AzurermProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.provider.AzurermProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.provider.AzurermProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.provider.AzurermProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.provider.AzurermProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.provider.AzurermProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.provider.AzurermProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.provider.AzurermProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAdoPipelineServiceConnectionId` <a name="ResetAdoPipelineServiceConnectionId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetAdoPipelineServiceConnectionId"></a>

```csharp
private void ResetAdoPipelineServiceConnectionId()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetAuxiliaryTenantIds` <a name="ResetAuxiliaryTenantIds" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetAuxiliaryTenantIds"></a>

```csharp
private void ResetAuxiliaryTenantIds()
```

##### `ResetClientCertificate` <a name="ResetClientCertificate" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientCertificate"></a>

```csharp
private void ResetClientCertificate()
```

##### `ResetClientCertificatePassword` <a name="ResetClientCertificatePassword" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientCertificatePassword"></a>

```csharp
private void ResetClientCertificatePassword()
```

##### `ResetClientCertificatePath` <a name="ResetClientCertificatePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientCertificatePath"></a>

```csharp
private void ResetClientCertificatePath()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientIdFilePath` <a name="ResetClientIdFilePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientIdFilePath"></a>

```csharp
private void ResetClientIdFilePath()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetClientSecretFilePath` <a name="ResetClientSecretFilePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientSecretFilePath"></a>

```csharp
private void ResetClientSecretFilePath()
```

##### `ResetDisableCorrelationRequestId` <a name="ResetDisableCorrelationRequestId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetDisableCorrelationRequestId"></a>

```csharp
private void ResetDisableCorrelationRequestId()
```

##### `ResetDisableTerraformPartnerId` <a name="ResetDisableTerraformPartnerId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetDisableTerraformPartnerId"></a>

```csharp
private void ResetDisableTerraformPartnerId()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetFeatures` <a name="ResetFeatures" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetFeatures"></a>

```csharp
private void ResetFeatures()
```

##### `ResetMetadataHost` <a name="ResetMetadataHost" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetMetadataHost"></a>

```csharp
private void ResetMetadataHost()
```

##### `ResetMsiApiVersion` <a name="ResetMsiApiVersion" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetMsiApiVersion"></a>

```csharp
private void ResetMsiApiVersion()
```

##### `ResetMsiEndpoint` <a name="ResetMsiEndpoint" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetMsiEndpoint"></a>

```csharp
private void ResetMsiEndpoint()
```

##### `ResetOidcRequestToken` <a name="ResetOidcRequestToken" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcRequestToken"></a>

```csharp
private void ResetOidcRequestToken()
```

##### `ResetOidcRequestUrl` <a name="ResetOidcRequestUrl" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcRequestUrl"></a>

```csharp
private void ResetOidcRequestUrl()
```

##### `ResetOidcToken` <a name="ResetOidcToken" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcToken"></a>

```csharp
private void ResetOidcToken()
```

##### `ResetOidcTokenFilePath` <a name="ResetOidcTokenFilePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcTokenFilePath"></a>

```csharp
private void ResetOidcTokenFilePath()
```

##### `ResetPartnerId` <a name="ResetPartnerId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetPartnerId"></a>

```csharp
private void ResetPartnerId()
```

##### `ResetResourceProviderRegistrations` <a name="ResetResourceProviderRegistrations" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetResourceProviderRegistrations"></a>

```csharp
private void ResetResourceProviderRegistrations()
```

##### `ResetResourceProvidersToRegister` <a name="ResetResourceProvidersToRegister" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetResourceProvidersToRegister"></a>

```csharp
private void ResetResourceProvidersToRegister()
```

##### `ResetSkipProviderRegistration` <a name="ResetSkipProviderRegistration" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetSkipProviderRegistration"></a>

```csharp
private void ResetSkipProviderRegistration()
```

##### `ResetStorageUseAzuread` <a name="ResetStorageUseAzuread" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetStorageUseAzuread"></a>

```csharp
private void ResetStorageUseAzuread()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetSubscriptionId"></a>

```csharp
private void ResetSubscriptionId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetTenantId"></a>

```csharp
private void ResetTenantId()
```

##### `ResetUseAksWorkloadIdentity` <a name="ResetUseAksWorkloadIdentity" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetUseAksWorkloadIdentity"></a>

```csharp
private void ResetUseAksWorkloadIdentity()
```

##### `ResetUseCli` <a name="ResetUseCli" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetUseCli"></a>

```csharp
private void ResetUseCli()
```

##### `ResetUseMsi` <a name="ResetUseMsi" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetUseMsi"></a>

```csharp
private void ResetUseMsi()
```

##### `ResetUseOidc` <a name="ResetUseOidc" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetUseOidc"></a>

```csharp
private void ResetUseOidc()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AzurermProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.provider.AzurermProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AzurermProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.provider.AzurermProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.provider.AzurermProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AzurermProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.provider.AzurermProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-azurerm.provider.AzurermProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AzurermProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.provider.AzurermProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.provider.AzurermProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AzurermProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AzurermProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.provider.AzurermProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.provider.AzurermProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AzurermProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.provider.AzurermProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AzurermProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.provider.AzurermProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AzurermProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.adoPipelineServiceConnectionIdInput">AdoPipelineServiceConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.auxiliaryTenantIdsInput">AuxiliaryTenantIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificateInput">ClientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePasswordInput">ClientCertificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePathInput">ClientCertificatePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdFilePathInput">ClientIdFilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretFilePathInput">ClientSecretFilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.disableCorrelationRequestIdInput">DisableCorrelationRequestIdInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.disableTerraformPartnerIdInput">DisableTerraformPartnerIdInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.featuresInput">FeaturesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.metadataHostInput">MetadataHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.msiApiVersionInput">MsiApiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.msiEndpointInput">MsiEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestTokenInput">OidcRequestTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestUrlInput">OidcRequestUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenFilePathInput">OidcTokenFilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenInput">OidcTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.partnerIdInput">PartnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.resourceProviderRegistrationsInput">ResourceProviderRegistrationsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.resourceProvidersToRegisterInput">ResourceProvidersToRegisterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.skipProviderRegistrationInput">SkipProviderRegistrationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.storageUseAzureadInput">StorageUseAzureadInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useAksWorkloadIdentityInput">UseAksWorkloadIdentityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useCliInput">UseCliInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useMsiInput">UseMsiInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useOidcInput">UseOidcInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.adoPipelineServiceConnectionId">AdoPipelineServiceConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.auxiliaryTenantIds">AuxiliaryTenantIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificate">ClientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePassword">ClientCertificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePath">ClientCertificatePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdFilePath">ClientIdFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretFilePath">ClientSecretFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.disableCorrelationRequestId">DisableCorrelationRequestId</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.disableTerraformPartnerId">DisableTerraformPartnerId</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.features">Features</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.metadataHost">MetadataHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.msiApiVersion">MsiApiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.msiEndpoint">MsiEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestToken">OidcRequestToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestUrl">OidcRequestUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcToken">OidcToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenFilePath">OidcTokenFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.partnerId">PartnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.resourceProviderRegistrations">ResourceProviderRegistrations</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.resourceProvidersToRegister">ResourceProvidersToRegister</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.skipProviderRegistration">SkipProviderRegistration</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.storageUseAzuread">StorageUseAzuread</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useAksWorkloadIdentity">UseAksWorkloadIdentity</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useCli">UseCli</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useMsi">UseMsi</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useOidc">UseOidc</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AdoPipelineServiceConnectionIdInput`<sup>Optional</sup> <a name="AdoPipelineServiceConnectionIdInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.adoPipelineServiceConnectionIdInput"></a>

```csharp
public string AdoPipelineServiceConnectionIdInput { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `AuxiliaryTenantIdsInput`<sup>Optional</sup> <a name="AuxiliaryTenantIdsInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.auxiliaryTenantIdsInput"></a>

```csharp
public string[] AuxiliaryTenantIdsInput { get; }
```

- *Type:* string[]

---

##### `ClientCertificateInput`<sup>Optional</sup> <a name="ClientCertificateInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificateInput"></a>

```csharp
public string ClientCertificateInput { get; }
```

- *Type:* string

---

##### `ClientCertificatePasswordInput`<sup>Optional</sup> <a name="ClientCertificatePasswordInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePasswordInput"></a>

```csharp
public string ClientCertificatePasswordInput { get; }
```

- *Type:* string

---

##### `ClientCertificatePathInput`<sup>Optional</sup> <a name="ClientCertificatePathInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePathInput"></a>

```csharp
public string ClientCertificatePathInput { get; }
```

- *Type:* string

---

##### `ClientIdFilePathInput`<sup>Optional</sup> <a name="ClientIdFilePathInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdFilePathInput"></a>

```csharp
public string ClientIdFilePathInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretFilePathInput`<sup>Optional</sup> <a name="ClientSecretFilePathInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretFilePathInput"></a>

```csharp
public string ClientSecretFilePathInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `DisableCorrelationRequestIdInput`<sup>Optional</sup> <a name="DisableCorrelationRequestIdInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.disableCorrelationRequestIdInput"></a>

```csharp
public object DisableCorrelationRequestIdInput { get; }
```

- *Type:* object

---

##### `DisableTerraformPartnerIdInput`<sup>Optional</sup> <a name="DisableTerraformPartnerIdInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.disableTerraformPartnerIdInput"></a>

```csharp
public object DisableTerraformPartnerIdInput { get; }
```

- *Type:* object

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `FeaturesInput`<sup>Optional</sup> <a name="FeaturesInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.featuresInput"></a>

```csharp
public object FeaturesInput { get; }
```

- *Type:* object

---

##### `MetadataHostInput`<sup>Optional</sup> <a name="MetadataHostInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.metadataHostInput"></a>

```csharp
public string MetadataHostInput { get; }
```

- *Type:* string

---

##### `MsiApiVersionInput`<sup>Optional</sup> <a name="MsiApiVersionInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.msiApiVersionInput"></a>

```csharp
public string MsiApiVersionInput { get; }
```

- *Type:* string

---

##### `MsiEndpointInput`<sup>Optional</sup> <a name="MsiEndpointInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.msiEndpointInput"></a>

```csharp
public string MsiEndpointInput { get; }
```

- *Type:* string

---

##### `OidcRequestTokenInput`<sup>Optional</sup> <a name="OidcRequestTokenInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestTokenInput"></a>

```csharp
public string OidcRequestTokenInput { get; }
```

- *Type:* string

---

##### `OidcRequestUrlInput`<sup>Optional</sup> <a name="OidcRequestUrlInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestUrlInput"></a>

```csharp
public string OidcRequestUrlInput { get; }
```

- *Type:* string

---

##### `OidcTokenFilePathInput`<sup>Optional</sup> <a name="OidcTokenFilePathInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenFilePathInput"></a>

```csharp
public string OidcTokenFilePathInput { get; }
```

- *Type:* string

---

##### `OidcTokenInput`<sup>Optional</sup> <a name="OidcTokenInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenInput"></a>

```csharp
public string OidcTokenInput { get; }
```

- *Type:* string

---

##### `PartnerIdInput`<sup>Optional</sup> <a name="PartnerIdInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.partnerIdInput"></a>

```csharp
public string PartnerIdInput { get; }
```

- *Type:* string

---

##### `ResourceProviderRegistrationsInput`<sup>Optional</sup> <a name="ResourceProviderRegistrationsInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.resourceProviderRegistrationsInput"></a>

```csharp
public string ResourceProviderRegistrationsInput { get; }
```

- *Type:* string

---

##### `ResourceProvidersToRegisterInput`<sup>Optional</sup> <a name="ResourceProvidersToRegisterInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.resourceProvidersToRegisterInput"></a>

```csharp
public string[] ResourceProvidersToRegisterInput { get; }
```

- *Type:* string[]

---

##### `SkipProviderRegistrationInput`<sup>Optional</sup> <a name="SkipProviderRegistrationInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.skipProviderRegistrationInput"></a>

```csharp
public object SkipProviderRegistrationInput { get; }
```

- *Type:* object

---

##### `StorageUseAzureadInput`<sup>Optional</sup> <a name="StorageUseAzureadInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.storageUseAzureadInput"></a>

```csharp
public object StorageUseAzureadInput { get; }
```

- *Type:* object

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.subscriptionIdInput"></a>

```csharp
public string SubscriptionIdInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `UseAksWorkloadIdentityInput`<sup>Optional</sup> <a name="UseAksWorkloadIdentityInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useAksWorkloadIdentityInput"></a>

```csharp
public object UseAksWorkloadIdentityInput { get; }
```

- *Type:* object

---

##### `UseCliInput`<sup>Optional</sup> <a name="UseCliInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useCliInput"></a>

```csharp
public object UseCliInput { get; }
```

- *Type:* object

---

##### `UseMsiInput`<sup>Optional</sup> <a name="UseMsiInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useMsiInput"></a>

```csharp
public object UseMsiInput { get; }
```

- *Type:* object

---

##### `UseOidcInput`<sup>Optional</sup> <a name="UseOidcInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useOidcInput"></a>

```csharp
public object UseOidcInput { get; }
```

- *Type:* object

---

##### `AdoPipelineServiceConnectionId`<sup>Optional</sup> <a name="AdoPipelineServiceConnectionId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.adoPipelineServiceConnectionId"></a>

```csharp
public string AdoPipelineServiceConnectionId { get; }
```

- *Type:* string

---

##### `AuxiliaryTenantIds`<sup>Optional</sup> <a name="AuxiliaryTenantIds" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.auxiliaryTenantIds"></a>

```csharp
public string[] AuxiliaryTenantIds { get; }
```

- *Type:* string[]

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificate"></a>

```csharp
public string ClientCertificate { get; }
```

- *Type:* string

---

##### `ClientCertificatePassword`<sup>Optional</sup> <a name="ClientCertificatePassword" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePassword"></a>

```csharp
public string ClientCertificatePassword { get; }
```

- *Type:* string

---

##### `ClientCertificatePath`<sup>Optional</sup> <a name="ClientCertificatePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePath"></a>

```csharp
public string ClientCertificatePath { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientIdFilePath`<sup>Optional</sup> <a name="ClientIdFilePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdFilePath"></a>

```csharp
public string ClientIdFilePath { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ClientSecretFilePath`<sup>Optional</sup> <a name="ClientSecretFilePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretFilePath"></a>

```csharp
public string ClientSecretFilePath { get; }
```

- *Type:* string

---

##### `DisableCorrelationRequestId`<sup>Optional</sup> <a name="DisableCorrelationRequestId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.disableCorrelationRequestId"></a>

```csharp
public object DisableCorrelationRequestId { get; }
```

- *Type:* object

---

##### `DisableTerraformPartnerId`<sup>Optional</sup> <a name="DisableTerraformPartnerId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.disableTerraformPartnerId"></a>

```csharp
public object DisableTerraformPartnerId { get; }
```

- *Type:* object

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Features`<sup>Optional</sup> <a name="Features" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.features"></a>

```csharp
public object Features { get; }
```

- *Type:* object

---

##### `MetadataHost`<sup>Optional</sup> <a name="MetadataHost" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.metadataHost"></a>

```csharp
public string MetadataHost { get; }
```

- *Type:* string

---

##### `MsiApiVersion`<sup>Optional</sup> <a name="MsiApiVersion" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.msiApiVersion"></a>

```csharp
public string MsiApiVersion { get; }
```

- *Type:* string

---

##### `MsiEndpoint`<sup>Optional</sup> <a name="MsiEndpoint" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.msiEndpoint"></a>

```csharp
public string MsiEndpoint { get; }
```

- *Type:* string

---

##### `OidcRequestToken`<sup>Optional</sup> <a name="OidcRequestToken" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestToken"></a>

```csharp
public string OidcRequestToken { get; }
```

- *Type:* string

---

##### `OidcRequestUrl`<sup>Optional</sup> <a name="OidcRequestUrl" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestUrl"></a>

```csharp
public string OidcRequestUrl { get; }
```

- *Type:* string

---

##### `OidcToken`<sup>Optional</sup> <a name="OidcToken" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcToken"></a>

```csharp
public string OidcToken { get; }
```

- *Type:* string

---

##### `OidcTokenFilePath`<sup>Optional</sup> <a name="OidcTokenFilePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenFilePath"></a>

```csharp
public string OidcTokenFilePath { get; }
```

- *Type:* string

---

##### `PartnerId`<sup>Optional</sup> <a name="PartnerId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.partnerId"></a>

```csharp
public string PartnerId { get; }
```

- *Type:* string

---

##### `ResourceProviderRegistrations`<sup>Optional</sup> <a name="ResourceProviderRegistrations" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.resourceProviderRegistrations"></a>

```csharp
public string ResourceProviderRegistrations { get; }
```

- *Type:* string

---

##### `ResourceProvidersToRegister`<sup>Optional</sup> <a name="ResourceProvidersToRegister" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.resourceProvidersToRegister"></a>

```csharp
public string[] ResourceProvidersToRegister { get; }
```

- *Type:* string[]

---

##### `SkipProviderRegistration`<sup>Optional</sup> <a name="SkipProviderRegistration" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.skipProviderRegistration"></a>

```csharp
public object SkipProviderRegistration { get; }
```

- *Type:* object

---

##### `StorageUseAzuread`<sup>Optional</sup> <a name="StorageUseAzuread" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.storageUseAzuread"></a>

```csharp
public object StorageUseAzuread { get; }
```

- *Type:* object

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `UseAksWorkloadIdentity`<sup>Optional</sup> <a name="UseAksWorkloadIdentity" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useAksWorkloadIdentity"></a>

```csharp
public object UseAksWorkloadIdentity { get; }
```

- *Type:* object

---

##### `UseCli`<sup>Optional</sup> <a name="UseCli" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useCli"></a>

```csharp
public object UseCli { get; }
```

- *Type:* object

---

##### `UseMsi`<sup>Optional</sup> <a name="UseMsi" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useMsi"></a>

```csharp
public object UseMsi { get; }
```

- *Type:* object

---

##### `UseOidc`<sup>Optional</sup> <a name="UseOidc" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useOidc"></a>

```csharp
public object UseOidc { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AzurermProviderConfig <a name="AzurermProviderConfig" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AzurermProviderConfig {
    string AdoPipelineServiceConnectionId = null,
    string Alias = null,
    string[] AuxiliaryTenantIds = null,
    string ClientCertificate = null,
    string ClientCertificatePassword = null,
    string ClientCertificatePath = null,
    string ClientId = null,
    string ClientIdFilePath = null,
    string ClientSecret = null,
    string ClientSecretFilePath = null,
    object DisableCorrelationRequestId = null,
    object DisableTerraformPartnerId = null,
    string Environment = null,
    object Features = null,
    string MetadataHost = null,
    string MsiApiVersion = null,
    string MsiEndpoint = null,
    string OidcRequestToken = null,
    string OidcRequestUrl = null,
    string OidcToken = null,
    string OidcTokenFilePath = null,
    string PartnerId = null,
    string ResourceProviderRegistrations = null,
    string[] ResourceProvidersToRegister = null,
    object SkipProviderRegistration = null,
    object StorageUseAzuread = null,
    string SubscriptionId = null,
    string TenantId = null,
    object UseAksWorkloadIdentity = null,
    object UseCli = null,
    object UseMsi = null,
    object UseOidc = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.adoPipelineServiceConnectionId">AdoPipelineServiceConnectionId</a></code> | <code>string</code> | The Azure DevOps Pipeline Service Connection ID. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.auxiliaryTenantIds">AuxiliaryTenantIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#auxiliary_tenant_ids AzurermProvider#auxiliary_tenant_ids}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificate">ClientCertificate</a></code> | <code>string</code> | Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificatePassword">ClientCertificatePassword</a></code> | <code>string</code> | The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificatePath">ClientCertificatePath</a></code> | <code>string</code> | The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientId">ClientId</a></code> | <code>string</code> | The Client ID which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientIdFilePath">ClientIdFilePath</a></code> | <code>string</code> | The path to a file containing the Client ID which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientSecretFilePath">ClientSecretFilePath</a></code> | <code>string</code> | The path to a file containing the Client Secret which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.disableCorrelationRequestId">DisableCorrelationRequestId</a></code> | <code>object</code> | This will disable the x-ms-correlation-request-id header. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.disableTerraformPartnerId">DisableTerraformPartnerId</a></code> | <code>object</code> | This will disable the Terraform Partner ID which is used if a custom `partner_id` isn't specified. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.environment">Environment</a></code> | <code>string</code> | The Cloud Environment which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.features">Features</a></code> | <code>object</code> | features block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.metadataHost">MetadataHost</a></code> | <code>string</code> | The Hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.msiApiVersion">MsiApiVersion</a></code> | <code>string</code> | The API version to use for Managed Service Identity (IMDS) - for cases where the default API version is not supported by the endpoint. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.msiEndpoint">MsiEndpoint</a></code> | <code>string</code> | The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcRequestToken">OidcRequestToken</a></code> | <code>string</code> | The bearer token for the request to the OIDC provider. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcRequestUrl">OidcRequestUrl</a></code> | <code>string</code> | The URL for the OIDC provider from which to request an ID token. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcToken">OidcToken</a></code> | <code>string</code> | The OIDC ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcTokenFilePath">OidcTokenFilePath</a></code> | <code>string</code> | The path to a file containing an OIDC ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.partnerId">PartnerId</a></code> | <code>string</code> | A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.resourceProviderRegistrations">ResourceProviderRegistrations</a></code> | <code>string</code> | The set of Resource Providers which should be automatically registered for the subscription. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.resourceProvidersToRegister">ResourceProvidersToRegister</a></code> | <code>string[]</code> | A list of Resource Providers to explicitly register for the subscription, in addition to those specified by the `resource_provider_registrations` property. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.skipProviderRegistration">SkipProviderRegistration</a></code> | <code>object</code> | Should the AzureRM Provider skip registering all of the Resource Providers that it supports, if they're not already registered? |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.storageUseAzuread">StorageUseAzuread</a></code> | <code>object</code> | Should the AzureRM Provider use Azure AD Authentication when accessing the Storage Data Plane APIs? |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | The Subscription ID which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.tenantId">TenantId</a></code> | <code>string</code> | The Tenant ID which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useAksWorkloadIdentity">UseAksWorkloadIdentity</a></code> | <code>object</code> | Allow Azure AKS Workload Identity to be used for Authentication. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useCli">UseCli</a></code> | <code>object</code> | Allow Azure CLI to be used for Authentication. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useMsi">UseMsi</a></code> | <code>object</code> | Allow Managed Service Identity to be used for Authentication. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useOidc">UseOidc</a></code> | <code>object</code> | Allow OpenID Connect to be used for authentication. |

---

##### `AdoPipelineServiceConnectionId`<sup>Optional</sup> <a name="AdoPipelineServiceConnectionId" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.adoPipelineServiceConnectionId"></a>

```csharp
public string AdoPipelineServiceConnectionId { get; set; }
```

- *Type:* string

The Azure DevOps Pipeline Service Connection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#ado_pipeline_service_connection_id AzurermProvider#ado_pipeline_service_connection_id}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#alias AzurermProvider#alias}

---

##### `AuxiliaryTenantIds`<sup>Optional</sup> <a name="AuxiliaryTenantIds" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.auxiliaryTenantIds"></a>

```csharp
public string[] AuxiliaryTenantIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#auxiliary_tenant_ids AzurermProvider#auxiliary_tenant_ids}.

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificate"></a>

```csharp
public string ClientCertificate { get; set; }
```

- *Type:* string

Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#client_certificate AzurermProvider#client_certificate}

---

##### `ClientCertificatePassword`<sup>Optional</sup> <a name="ClientCertificatePassword" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificatePassword"></a>

```csharp
public string ClientCertificatePassword { get; set; }
```

- *Type:* string

The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#client_certificate_password AzurermProvider#client_certificate_password}

---

##### `ClientCertificatePath`<sup>Optional</sup> <a name="ClientCertificatePath" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificatePath"></a>

```csharp
public string ClientCertificatePath { get; set; }
```

- *Type:* string

The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#client_certificate_path AzurermProvider#client_certificate_path}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The Client ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#client_id AzurermProvider#client_id}

---

##### `ClientIdFilePath`<sup>Optional</sup> <a name="ClientIdFilePath" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientIdFilePath"></a>

```csharp
public string ClientIdFilePath { get; set; }
```

- *Type:* string

The path to a file containing the Client ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#client_id_file_path AzurermProvider#client_id_file_path}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#client_secret AzurermProvider#client_secret}

---

##### `ClientSecretFilePath`<sup>Optional</sup> <a name="ClientSecretFilePath" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientSecretFilePath"></a>

```csharp
public string ClientSecretFilePath { get; set; }
```

- *Type:* string

The path to a file containing the Client Secret which should be used.

For use When authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#client_secret_file_path AzurermProvider#client_secret_file_path}

---

##### `DisableCorrelationRequestId`<sup>Optional</sup> <a name="DisableCorrelationRequestId" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.disableCorrelationRequestId"></a>

```csharp
public object DisableCorrelationRequestId { get; set; }
```

- *Type:* object

This will disable the x-ms-correlation-request-id header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#disable_correlation_request_id AzurermProvider#disable_correlation_request_id}

---

##### `DisableTerraformPartnerId`<sup>Optional</sup> <a name="DisableTerraformPartnerId" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.disableTerraformPartnerId"></a>

```csharp
public object DisableTerraformPartnerId { get; set; }
```

- *Type:* object

This will disable the Terraform Partner ID which is used if a custom `partner_id` isn't specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#disable_terraform_partner_id AzurermProvider#disable_terraform_partner_id}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

The Cloud Environment which should be used.

Possible values are public, usgovernment, and china. Defaults to public. Not used and should not be specified when `metadata_host` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#environment AzurermProvider#environment}

---

##### `Features`<sup>Optional</sup> <a name="Features" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.features"></a>

```csharp
public object Features { get; set; }
```

- *Type:* object

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#features AzurermProvider#features}

---

##### `MetadataHost`<sup>Optional</sup> <a name="MetadataHost" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.metadataHost"></a>

```csharp
public string MetadataHost { get; set; }
```

- *Type:* string

The Hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#metadata_host AzurermProvider#metadata_host}

---

##### `MsiApiVersion`<sup>Optional</sup> <a name="MsiApiVersion" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.msiApiVersion"></a>

```csharp
public string MsiApiVersion { get; set; }
```

- *Type:* string

The API version to use for Managed Service Identity (IMDS) - for cases where the default API version is not supported by the endpoint.

e.g. for Azure Container Apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#msi_api_version AzurermProvider#msi_api_version}

---

##### `MsiEndpoint`<sup>Optional</sup> <a name="MsiEndpoint" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.msiEndpoint"></a>

```csharp
public string MsiEndpoint { get; set; }
```

- *Type:* string

The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#msi_endpoint AzurermProvider#msi_endpoint}

---

##### `OidcRequestToken`<sup>Optional</sup> <a name="OidcRequestToken" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcRequestToken"></a>

```csharp
public string OidcRequestToken { get; set; }
```

- *Type:* string

The bearer token for the request to the OIDC provider.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#oidc_request_token AzurermProvider#oidc_request_token}

---

##### `OidcRequestUrl`<sup>Optional</sup> <a name="OidcRequestUrl" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcRequestUrl"></a>

```csharp
public string OidcRequestUrl { get; set; }
```

- *Type:* string

The URL for the OIDC provider from which to request an ID token.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#oidc_request_url AzurermProvider#oidc_request_url}

---

##### `OidcToken`<sup>Optional</sup> <a name="OidcToken" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcToken"></a>

```csharp
public string OidcToken { get; set; }
```

- *Type:* string

The OIDC ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#oidc_token AzurermProvider#oidc_token}

---

##### `OidcTokenFilePath`<sup>Optional</sup> <a name="OidcTokenFilePath" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcTokenFilePath"></a>

```csharp
public string OidcTokenFilePath { get; set; }
```

- *Type:* string

The path to a file containing an OIDC ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#oidc_token_file_path AzurermProvider#oidc_token_file_path}

---

##### `PartnerId`<sup>Optional</sup> <a name="PartnerId" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.partnerId"></a>

```csharp
public string PartnerId { get; set; }
```

- *Type:* string

A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#partner_id AzurermProvider#partner_id}

---

##### `ResourceProviderRegistrations`<sup>Optional</sup> <a name="ResourceProviderRegistrations" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.resourceProviderRegistrations"></a>

```csharp
public string ResourceProviderRegistrations { get; set; }
```

- *Type:* string

The set of Resource Providers which should be automatically registered for the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#resource_provider_registrations AzurermProvider#resource_provider_registrations}

---

##### `ResourceProvidersToRegister`<sup>Optional</sup> <a name="ResourceProvidersToRegister" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.resourceProvidersToRegister"></a>

```csharp
public string[] ResourceProvidersToRegister { get; set; }
```

- *Type:* string[]

A list of Resource Providers to explicitly register for the subscription, in addition to those specified by the `resource_provider_registrations` property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#resource_providers_to_register AzurermProvider#resource_providers_to_register}

---

##### `SkipProviderRegistration`<sup>Optional</sup> <a name="SkipProviderRegistration" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.skipProviderRegistration"></a>

```csharp
public object SkipProviderRegistration { get; set; }
```

- *Type:* object

Should the AzureRM Provider skip registering all of the Resource Providers that it supports, if they're not already registered?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#skip_provider_registration AzurermProvider#skip_provider_registration}

---

##### `StorageUseAzuread`<sup>Optional</sup> <a name="StorageUseAzuread" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.storageUseAzuread"></a>

```csharp
public object StorageUseAzuread { get; set; }
```

- *Type:* object

Should the AzureRM Provider use Azure AD Authentication when accessing the Storage Data Plane APIs?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#storage_use_azuread AzurermProvider#storage_use_azuread}

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

The Subscription ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#subscription_id AzurermProvider#subscription_id}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

The Tenant ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#tenant_id AzurermProvider#tenant_id}

---

##### `UseAksWorkloadIdentity`<sup>Optional</sup> <a name="UseAksWorkloadIdentity" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useAksWorkloadIdentity"></a>

```csharp
public object UseAksWorkloadIdentity { get; set; }
```

- *Type:* object

Allow Azure AKS Workload Identity to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#use_aks_workload_identity AzurermProvider#use_aks_workload_identity}

---

##### `UseCli`<sup>Optional</sup> <a name="UseCli" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useCli"></a>

```csharp
public object UseCli { get; set; }
```

- *Type:* object

Allow Azure CLI to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#use_cli AzurermProvider#use_cli}

---

##### `UseMsi`<sup>Optional</sup> <a name="UseMsi" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useMsi"></a>

```csharp
public object UseMsi { get; set; }
```

- *Type:* object

Allow Managed Service Identity to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#use_msi AzurermProvider#use_msi}

---

##### `UseOidc`<sup>Optional</sup> <a name="UseOidc" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useOidc"></a>

```csharp
public object UseOidc { get; set; }
```

- *Type:* object

Allow OpenID Connect to be used for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#use_oidc AzurermProvider#use_oidc}

---

### AzurermProviderFeatures <a name="AzurermProviderFeatures" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AzurermProviderFeatures {
    object ApiManagement = null,
    object AppConfiguration = null,
    object ApplicationInsights = null,
    object CognitiveAccount = null,
    object DatabricksWorkspace = null,
    object KeyVault = null,
    object LogAnalyticsWorkspace = null,
    object MachineLearning = null,
    object ManagedDisk = null,
    object Netapp = null,
    object PostgresqlFlexibleServer = null,
    object RecoveryService = null,
    object RecoveryServicesVaults = null,
    object ResourceGroup = null,
    object Storage = null,
    object Subscription = null,
    object TemplateDeployment = null,
    object VirtualMachine = null,
    object VirtualMachineScaleSet = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.apiManagement">ApiManagement</a></code> | <code>object</code> | api_management block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.appConfiguration">AppConfiguration</a></code> | <code>object</code> | app_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.applicationInsights">ApplicationInsights</a></code> | <code>object</code> | application_insights block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.cognitiveAccount">CognitiveAccount</a></code> | <code>object</code> | cognitive_account block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.databricksWorkspace">DatabricksWorkspace</a></code> | <code>object</code> | databricks_workspace block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.keyVault">KeyVault</a></code> | <code>object</code> | key_vault block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.logAnalyticsWorkspace">LogAnalyticsWorkspace</a></code> | <code>object</code> | log_analytics_workspace block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.machineLearning">MachineLearning</a></code> | <code>object</code> | machine_learning block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.managedDisk">ManagedDisk</a></code> | <code>object</code> | managed_disk block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.netapp">Netapp</a></code> | <code>object</code> | netapp block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.postgresqlFlexibleServer">PostgresqlFlexibleServer</a></code> | <code>object</code> | postgresql_flexible_server block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.recoveryService">RecoveryService</a></code> | <code>object</code> | recovery_service block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.recoveryServicesVaults">RecoveryServicesVaults</a></code> | <code>object</code> | recovery_services_vaults block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.resourceGroup">ResourceGroup</a></code> | <code>object</code> | resource_group block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.storage">Storage</a></code> | <code>object</code> | storage block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.subscription">Subscription</a></code> | <code>object</code> | subscription block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.templateDeployment">TemplateDeployment</a></code> | <code>object</code> | template_deployment block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.virtualMachine">VirtualMachine</a></code> | <code>object</code> | virtual_machine block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.virtualMachineScaleSet">VirtualMachineScaleSet</a></code> | <code>object</code> | virtual_machine_scale_set block. |

---

##### `ApiManagement`<sup>Optional</sup> <a name="ApiManagement" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.apiManagement"></a>

```csharp
public object ApiManagement { get; set; }
```

- *Type:* object

api_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#api_management AzurermProvider#api_management}

---

##### `AppConfiguration`<sup>Optional</sup> <a name="AppConfiguration" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.appConfiguration"></a>

```csharp
public object AppConfiguration { get; set; }
```

- *Type:* object

app_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#app_configuration AzurermProvider#app_configuration}

---

##### `ApplicationInsights`<sup>Optional</sup> <a name="ApplicationInsights" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.applicationInsights"></a>

```csharp
public object ApplicationInsights { get; set; }
```

- *Type:* object

application_insights block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#application_insights AzurermProvider#application_insights}

---

##### `CognitiveAccount`<sup>Optional</sup> <a name="CognitiveAccount" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.cognitiveAccount"></a>

```csharp
public object CognitiveAccount { get; set; }
```

- *Type:* object

cognitive_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#cognitive_account AzurermProvider#cognitive_account}

---

##### `DatabricksWorkspace`<sup>Optional</sup> <a name="DatabricksWorkspace" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.databricksWorkspace"></a>

```csharp
public object DatabricksWorkspace { get; set; }
```

- *Type:* object

databricks_workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#databricks_workspace AzurermProvider#databricks_workspace}

---

##### `KeyVault`<sup>Optional</sup> <a name="KeyVault" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.keyVault"></a>

```csharp
public object KeyVault { get; set; }
```

- *Type:* object

key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#key_vault AzurermProvider#key_vault}

---

##### `LogAnalyticsWorkspace`<sup>Optional</sup> <a name="LogAnalyticsWorkspace" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.logAnalyticsWorkspace"></a>

```csharp
public object LogAnalyticsWorkspace { get; set; }
```

- *Type:* object

log_analytics_workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#log_analytics_workspace AzurermProvider#log_analytics_workspace}

---

##### `MachineLearning`<sup>Optional</sup> <a name="MachineLearning" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.machineLearning"></a>

```csharp
public object MachineLearning { get; set; }
```

- *Type:* object

machine_learning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#machine_learning AzurermProvider#machine_learning}

---

##### `ManagedDisk`<sup>Optional</sup> <a name="ManagedDisk" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.managedDisk"></a>

```csharp
public object ManagedDisk { get; set; }
```

- *Type:* object

managed_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#managed_disk AzurermProvider#managed_disk}

---

##### `Netapp`<sup>Optional</sup> <a name="Netapp" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.netapp"></a>

```csharp
public object Netapp { get; set; }
```

- *Type:* object

netapp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#netapp AzurermProvider#netapp}

---

##### `PostgresqlFlexibleServer`<sup>Optional</sup> <a name="PostgresqlFlexibleServer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.postgresqlFlexibleServer"></a>

```csharp
public object PostgresqlFlexibleServer { get; set; }
```

- *Type:* object

postgresql_flexible_server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#postgresql_flexible_server AzurermProvider#postgresql_flexible_server}

---

##### `RecoveryService`<sup>Optional</sup> <a name="RecoveryService" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.recoveryService"></a>

```csharp
public object RecoveryService { get; set; }
```

- *Type:* object

recovery_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#recovery_service AzurermProvider#recovery_service}

---

##### `RecoveryServicesVaults`<sup>Optional</sup> <a name="RecoveryServicesVaults" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.recoveryServicesVaults"></a>

```csharp
public object RecoveryServicesVaults { get; set; }
```

- *Type:* object

recovery_services_vaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#recovery_services_vaults AzurermProvider#recovery_services_vaults}

---

##### `ResourceGroup`<sup>Optional</sup> <a name="ResourceGroup" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.resourceGroup"></a>

```csharp
public object ResourceGroup { get; set; }
```

- *Type:* object

resource_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#resource_group AzurermProvider#resource_group}

---

##### `Storage`<sup>Optional</sup> <a name="Storage" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.storage"></a>

```csharp
public object Storage { get; set; }
```

- *Type:* object

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#storage AzurermProvider#storage}

---

##### `Subscription`<sup>Optional</sup> <a name="Subscription" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.subscription"></a>

```csharp
public object Subscription { get; set; }
```

- *Type:* object

subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#subscription AzurermProvider#subscription}

---

##### `TemplateDeployment`<sup>Optional</sup> <a name="TemplateDeployment" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.templateDeployment"></a>

```csharp
public object TemplateDeployment { get; set; }
```

- *Type:* object

template_deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#template_deployment AzurermProvider#template_deployment}

---

##### `VirtualMachine`<sup>Optional</sup> <a name="VirtualMachine" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.virtualMachine"></a>

```csharp
public object VirtualMachine { get; set; }
```

- *Type:* object

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#virtual_machine AzurermProvider#virtual_machine}

---

##### `VirtualMachineScaleSet`<sup>Optional</sup> <a name="VirtualMachineScaleSet" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.virtualMachineScaleSet"></a>

```csharp
public object VirtualMachineScaleSet { get; set; }
```

- *Type:* object

virtual_machine_scale_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#virtual_machine_scale_set AzurermProvider#virtual_machine_scale_set}

---

### AzurermProviderFeaturesApiManagement <a name="AzurermProviderFeaturesApiManagement" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AzurermProviderFeaturesApiManagement {
    object PurgeSoftDeleteOnDestroy = null,
    object RecoverSoftDeleted = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.property.purgeSoftDeleteOnDestroy">PurgeSoftDeleteOnDestroy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.property.recoverSoftDeleted">RecoverSoftDeleted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}. |

---

##### `PurgeSoftDeleteOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeleteOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.property.purgeSoftDeleteOnDestroy"></a>

```csharp
public object PurgeSoftDeleteOnDestroy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}.

---

##### `RecoverSoftDeleted`<sup>Optional</sup> <a name="RecoverSoftDeleted" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.property.recoverSoftDeleted"></a>

```csharp
public object RecoverSoftDeleted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}.

---

### AzurermProviderFeaturesAppConfiguration <a name="AzurermProviderFeaturesAppConfiguration" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AzurermProviderFeaturesAppConfiguration {
    object PurgeSoftDeleteOnDestroy = null,
    object RecoverSoftDeleted = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.property.purgeSoftDeleteOnDestroy">PurgeSoftDeleteOnDestroy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.property.recoverSoftDeleted">RecoverSoftDeleted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}. |

---

##### `PurgeSoftDeleteOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeleteOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.property.purgeSoftDeleteOnDestroy"></a>

```csharp
public object PurgeSoftDeleteOnDestroy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}.

---

##### `RecoverSoftDeleted`<sup>Optional</sup> <a name="RecoverSoftDeleted" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.property.recoverSoftDeleted"></a>

```csharp
public object RecoverSoftDeleted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}.

---

### AzurermProviderFeaturesApplicationInsights <a name="AzurermProviderFeaturesApplicationInsights" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AzurermProviderFeaturesApplicationInsights {
    object DisableGeneratedRule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights.property.disableGeneratedRule">DisableGeneratedRule</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#disable_generated_rule AzurermProvider#disable_generated_rule}. |

---

##### `DisableGeneratedRule`<sup>Optional</sup> <a name="DisableGeneratedRule" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights.property.disableGeneratedRule"></a>

```csharp
public object DisableGeneratedRule { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#disable_generated_rule AzurermProvider#disable_generated_rule}.

---

### AzurermProviderFeaturesCognitiveAccount <a name="AzurermProviderFeaturesCognitiveAccount" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AzurermProviderFeaturesCognitiveAccount {
    object PurgeSoftDeleteOnDestroy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount.property.purgeSoftDeleteOnDestroy">PurgeSoftDeleteOnDestroy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}. |

---

##### `PurgeSoftDeleteOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeleteOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount.property.purgeSoftDeleteOnDestroy"></a>

```csharp
public object PurgeSoftDeleteOnDestroy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}.

---

### AzurermProviderFeaturesDatabricksWorkspace <a name="AzurermProviderFeaturesDatabricksWorkspace" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesDatabricksWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesDatabricksWorkspace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AzurermProviderFeaturesDatabricksWorkspace {
    object ForceDelete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesDatabricksWorkspace.property.forceDelete">ForceDelete</a></code> | <code>object</code> | When enabled, the managed resource group that contains the Unity Catalog data will be forcibly deleted when the workspace is destroyed, regardless of contents. |

---

##### `ForceDelete`<sup>Optional</sup> <a name="ForceDelete" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesDatabricksWorkspace.property.forceDelete"></a>

```csharp
public object ForceDelete { get; set; }
```

- *Type:* object

When enabled, the managed resource group that contains the Unity Catalog data will be forcibly deleted when the workspace is destroyed, regardless of contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#force_delete AzurermProvider#force_delete}

---

### AzurermProviderFeaturesKeyVault <a name="AzurermProviderFeaturesKeyVault" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AzurermProviderFeaturesKeyVault {
    object PurgeSoftDeletedCertificatesOnDestroy = null,
    object PurgeSoftDeletedHardwareSecurityModuleKeysOnDestroy = null,
    object PurgeSoftDeletedHardwareSecurityModulesOnDestroy = null,
    object PurgeSoftDeletedKeysOnDestroy = null,
    object PurgeSoftDeletedSecretsOnDestroy = null,
    object PurgeSoftDeleteOnDestroy = null,
    object RecoverSoftDeletedCertificates = null,
    object RecoverSoftDeletedHardwareSecurityModuleKeys = null,
    object RecoverSoftDeletedKeys = null,
    object RecoverSoftDeletedKeyVaults = null,
    object RecoverSoftDeletedSecrets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedCertificatesOnDestroy">PurgeSoftDeletedCertificatesOnDestroy</a></code> | <code>object</code> | When enabled soft-deleted `azurerm_key_vault_certificate` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedHardwareSecurityModuleKeysOnDestroy">PurgeSoftDeletedHardwareSecurityModuleKeysOnDestroy</a></code> | <code>object</code> | When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module_key` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedHardwareSecurityModulesOnDestroy">PurgeSoftDeletedHardwareSecurityModulesOnDestroy</a></code> | <code>object</code> | When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedKeysOnDestroy">PurgeSoftDeletedKeysOnDestroy</a></code> | <code>object</code> | When enabled soft-deleted `azurerm_key_vault_key` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedSecretsOnDestroy">PurgeSoftDeletedSecretsOnDestroy</a></code> | <code>object</code> | When enabled soft-deleted `azurerm_key_vault_secret` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeleteOnDestroy">PurgeSoftDeleteOnDestroy</a></code> | <code>object</code> | When enabled soft-deleted `azurerm_key_vault` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedCertificates">RecoverSoftDeletedCertificates</a></code> | <code>object</code> | When enabled soft-deleted `azurerm_key_vault_certificate` resources will be restored, instead of creating new ones. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedHardwareSecurityModuleKeys">RecoverSoftDeletedHardwareSecurityModuleKeys</a></code> | <code>object</code> | When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module_key` resources will be restored, instead of creating new ones. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedKeys">RecoverSoftDeletedKeys</a></code> | <code>object</code> | When enabled soft-deleted `azurerm_key_vault_key` resources will be restored, instead of creating new ones. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedKeyVaults">RecoverSoftDeletedKeyVaults</a></code> | <code>object</code> | When enabled soft-deleted `azurerm_key_vault` resources will be restored, instead of creating new ones. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedSecrets">RecoverSoftDeletedSecrets</a></code> | <code>object</code> | When enabled soft-deleted `azurerm_key_vault_secret` resources will be restored, instead of creating new ones. |

---

##### `PurgeSoftDeletedCertificatesOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeletedCertificatesOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedCertificatesOnDestroy"></a>

```csharp
public object PurgeSoftDeletedCertificatesOnDestroy { get; set; }
```

- *Type:* object

When enabled soft-deleted `azurerm_key_vault_certificate` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#purge_soft_deleted_certificates_on_destroy AzurermProvider#purge_soft_deleted_certificates_on_destroy}

---

##### `PurgeSoftDeletedHardwareSecurityModuleKeysOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeletedHardwareSecurityModuleKeysOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedHardwareSecurityModuleKeysOnDestroy"></a>

```csharp
public object PurgeSoftDeletedHardwareSecurityModuleKeysOnDestroy { get; set; }
```

- *Type:* object

When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module_key` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#purge_soft_deleted_hardware_security_module_keys_on_destroy AzurermProvider#purge_soft_deleted_hardware_security_module_keys_on_destroy}

---

##### `PurgeSoftDeletedHardwareSecurityModulesOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeletedHardwareSecurityModulesOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedHardwareSecurityModulesOnDestroy"></a>

```csharp
public object PurgeSoftDeletedHardwareSecurityModulesOnDestroy { get; set; }
```

- *Type:* object

When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#purge_soft_deleted_hardware_security_modules_on_destroy AzurermProvider#purge_soft_deleted_hardware_security_modules_on_destroy}

---

##### `PurgeSoftDeletedKeysOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeletedKeysOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedKeysOnDestroy"></a>

```csharp
public object PurgeSoftDeletedKeysOnDestroy { get; set; }
```

- *Type:* object

When enabled soft-deleted `azurerm_key_vault_key` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#purge_soft_deleted_keys_on_destroy AzurermProvider#purge_soft_deleted_keys_on_destroy}

---

##### `PurgeSoftDeletedSecretsOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeletedSecretsOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedSecretsOnDestroy"></a>

```csharp
public object PurgeSoftDeletedSecretsOnDestroy { get; set; }
```

- *Type:* object

When enabled soft-deleted `azurerm_key_vault_secret` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#purge_soft_deleted_secrets_on_destroy AzurermProvider#purge_soft_deleted_secrets_on_destroy}

---

##### `PurgeSoftDeleteOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeleteOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeleteOnDestroy"></a>

```csharp
public object PurgeSoftDeleteOnDestroy { get; set; }
```

- *Type:* object

When enabled soft-deleted `azurerm_key_vault` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}

---

##### `RecoverSoftDeletedCertificates`<sup>Optional</sup> <a name="RecoverSoftDeletedCertificates" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedCertificates"></a>

```csharp
public object RecoverSoftDeletedCertificates { get; set; }
```

- *Type:* object

When enabled soft-deleted `azurerm_key_vault_certificate` resources will be restored, instead of creating new ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#recover_soft_deleted_certificates AzurermProvider#recover_soft_deleted_certificates}

---

##### `RecoverSoftDeletedHardwareSecurityModuleKeys`<sup>Optional</sup> <a name="RecoverSoftDeletedHardwareSecurityModuleKeys" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedHardwareSecurityModuleKeys"></a>

```csharp
public object RecoverSoftDeletedHardwareSecurityModuleKeys { get; set; }
```

- *Type:* object

When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module_key` resources will be restored, instead of creating new ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#recover_soft_deleted_hardware_security_module_keys AzurermProvider#recover_soft_deleted_hardware_security_module_keys}

---

##### `RecoverSoftDeletedKeys`<sup>Optional</sup> <a name="RecoverSoftDeletedKeys" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedKeys"></a>

```csharp
public object RecoverSoftDeletedKeys { get; set; }
```

- *Type:* object

When enabled soft-deleted `azurerm_key_vault_key` resources will be restored, instead of creating new ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#recover_soft_deleted_keys AzurermProvider#recover_soft_deleted_keys}

---

##### `RecoverSoftDeletedKeyVaults`<sup>Optional</sup> <a name="RecoverSoftDeletedKeyVaults" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedKeyVaults"></a>

```csharp
public object RecoverSoftDeletedKeyVaults { get; set; }
```

- *Type:* object

When enabled soft-deleted `azurerm_key_vault` resources will be restored, instead of creating new ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#recover_soft_deleted_key_vaults AzurermProvider#recover_soft_deleted_key_vaults}

---

##### `RecoverSoftDeletedSecrets`<sup>Optional</sup> <a name="RecoverSoftDeletedSecrets" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedSecrets"></a>

```csharp
public object RecoverSoftDeletedSecrets { get; set; }
```

- *Type:* object

When enabled soft-deleted `azurerm_key_vault_secret` resources will be restored, instead of creating new ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#recover_soft_deleted_secrets AzurermProvider#recover_soft_deleted_secrets}

---

### AzurermProviderFeaturesLogAnalyticsWorkspace <a name="AzurermProviderFeaturesLogAnalyticsWorkspace" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AzurermProviderFeaturesLogAnalyticsWorkspace {
    object PermanentlyDeleteOnDestroy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace.property.permanentlyDeleteOnDestroy">PermanentlyDeleteOnDestroy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#permanently_delete_on_destroy AzurermProvider#permanently_delete_on_destroy}. |

---

##### `PermanentlyDeleteOnDestroy`<sup>Optional</sup> <a name="PermanentlyDeleteOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace.property.permanentlyDeleteOnDestroy"></a>

```csharp
public object PermanentlyDeleteOnDestroy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#permanently_delete_on_destroy AzurermProvider#permanently_delete_on_destroy}.

---

### AzurermProviderFeaturesMachineLearning <a name="AzurermProviderFeaturesMachineLearning" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesMachineLearning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesMachineLearning.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AzurermProviderFeaturesMachineLearning {
    object PurgeSoftDeletedWorkspaceOnDestroy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesMachineLearning.property.purgeSoftDeletedWorkspaceOnDestroy">PurgeSoftDeletedWorkspaceOnDestroy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#purge_soft_deleted_workspace_on_destroy AzurermProvider#purge_soft_deleted_workspace_on_destroy}. |

---

##### `PurgeSoftDeletedWorkspaceOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeletedWorkspaceOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesMachineLearning.property.purgeSoftDeletedWorkspaceOnDestroy"></a>

```csharp
public object PurgeSoftDeletedWorkspaceOnDestroy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#purge_soft_deleted_workspace_on_destroy AzurermProvider#purge_soft_deleted_workspace_on_destroy}.

---

### AzurermProviderFeaturesManagedDisk <a name="AzurermProviderFeaturesManagedDisk" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AzurermProviderFeaturesManagedDisk {
    object ExpandWithoutDowntime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk.property.expandWithoutDowntime">ExpandWithoutDowntime</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#expand_without_downtime AzurermProvider#expand_without_downtime}. |

---

##### `ExpandWithoutDowntime`<sup>Optional</sup> <a name="ExpandWithoutDowntime" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk.property.expandWithoutDowntime"></a>

```csharp
public object ExpandWithoutDowntime { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#expand_without_downtime AzurermProvider#expand_without_downtime}.

---

### AzurermProviderFeaturesNetapp <a name="AzurermProviderFeaturesNetapp" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesNetapp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesNetapp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AzurermProviderFeaturesNetapp {
    object DeleteBackupsOnBackupVaultDestroy = null,
    object PreventVolumeDestruction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesNetapp.property.deleteBackupsOnBackupVaultDestroy">DeleteBackupsOnBackupVaultDestroy</a></code> | <code>object</code> | When enabled, backups will be deleted when the `azurerm_netapp_backup_vault` resource is destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesNetapp.property.preventVolumeDestruction">PreventVolumeDestruction</a></code> | <code>object</code> | When enabled, the volume will not be destroyed, safeguarding from severe data loss. |

---

##### `DeleteBackupsOnBackupVaultDestroy`<sup>Optional</sup> <a name="DeleteBackupsOnBackupVaultDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesNetapp.property.deleteBackupsOnBackupVaultDestroy"></a>

```csharp
public object DeleteBackupsOnBackupVaultDestroy { get; set; }
```

- *Type:* object

When enabled, backups will be deleted when the `azurerm_netapp_backup_vault` resource is destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#delete_backups_on_backup_vault_destroy AzurermProvider#delete_backups_on_backup_vault_destroy}

---

##### `PreventVolumeDestruction`<sup>Optional</sup> <a name="PreventVolumeDestruction" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesNetapp.property.preventVolumeDestruction"></a>

```csharp
public object PreventVolumeDestruction { get; set; }
```

- *Type:* object

When enabled, the volume will not be destroyed, safeguarding from severe data loss.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#prevent_volume_destruction AzurermProvider#prevent_volume_destruction}

---

### AzurermProviderFeaturesPostgresqlFlexibleServer <a name="AzurermProviderFeaturesPostgresqlFlexibleServer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesPostgresqlFlexibleServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesPostgresqlFlexibleServer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AzurermProviderFeaturesPostgresqlFlexibleServer {
    object RestartServerOnConfigurationValueChange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesPostgresqlFlexibleServer.property.restartServerOnConfigurationValueChange">RestartServerOnConfigurationValueChange</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#restart_server_on_configuration_value_change AzurermProvider#restart_server_on_configuration_value_change}. |

---

##### `RestartServerOnConfigurationValueChange`<sup>Optional</sup> <a name="RestartServerOnConfigurationValueChange" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesPostgresqlFlexibleServer.property.restartServerOnConfigurationValueChange"></a>

```csharp
public object RestartServerOnConfigurationValueChange { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#restart_server_on_configuration_value_change AzurermProvider#restart_server_on_configuration_value_change}.

---

### AzurermProviderFeaturesRecoveryService <a name="AzurermProviderFeaturesRecoveryService" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AzurermProviderFeaturesRecoveryService {
    object PurgeProtectedItemsFromVaultOnDestroy = null,
    object VmBackupStopProtectionAndRetainDataOnDestroy = null,
    object VmBackupSuspendProtectionAndRetainDataOnDestroy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.property.purgeProtectedItemsFromVaultOnDestroy">PurgeProtectedItemsFromVaultOnDestroy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#purge_protected_items_from_vault_on_destroy AzurermProvider#purge_protected_items_from_vault_on_destroy}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.property.vmBackupStopProtectionAndRetainDataOnDestroy">VmBackupStopProtectionAndRetainDataOnDestroy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#vm_backup_stop_protection_and_retain_data_on_destroy AzurermProvider#vm_backup_stop_protection_and_retain_data_on_destroy}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.property.vmBackupSuspendProtectionAndRetainDataOnDestroy">VmBackupSuspendProtectionAndRetainDataOnDestroy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#vm_backup_suspend_protection_and_retain_data_on_destroy AzurermProvider#vm_backup_suspend_protection_and_retain_data_on_destroy}. |

---

##### `PurgeProtectedItemsFromVaultOnDestroy`<sup>Optional</sup> <a name="PurgeProtectedItemsFromVaultOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.property.purgeProtectedItemsFromVaultOnDestroy"></a>

```csharp
public object PurgeProtectedItemsFromVaultOnDestroy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#purge_protected_items_from_vault_on_destroy AzurermProvider#purge_protected_items_from_vault_on_destroy}.

---

##### `VmBackupStopProtectionAndRetainDataOnDestroy`<sup>Optional</sup> <a name="VmBackupStopProtectionAndRetainDataOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.property.vmBackupStopProtectionAndRetainDataOnDestroy"></a>

```csharp
public object VmBackupStopProtectionAndRetainDataOnDestroy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#vm_backup_stop_protection_and_retain_data_on_destroy AzurermProvider#vm_backup_stop_protection_and_retain_data_on_destroy}.

---

##### `VmBackupSuspendProtectionAndRetainDataOnDestroy`<sup>Optional</sup> <a name="VmBackupSuspendProtectionAndRetainDataOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.property.vmBackupSuspendProtectionAndRetainDataOnDestroy"></a>

```csharp
public object VmBackupSuspendProtectionAndRetainDataOnDestroy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#vm_backup_suspend_protection_and_retain_data_on_destroy AzurermProvider#vm_backup_suspend_protection_and_retain_data_on_destroy}.

---

### AzurermProviderFeaturesRecoveryServicesVaults <a name="AzurermProviderFeaturesRecoveryServicesVaults" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryServicesVaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryServicesVaults.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AzurermProviderFeaturesRecoveryServicesVaults {
    object RecoverSoftDeletedBackupProtectedVm = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryServicesVaults.property.recoverSoftDeletedBackupProtectedVm">RecoverSoftDeletedBackupProtectedVm</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#recover_soft_deleted_backup_protected_vm AzurermProvider#recover_soft_deleted_backup_protected_vm}. |

---

##### `RecoverSoftDeletedBackupProtectedVm`<sup>Optional</sup> <a name="RecoverSoftDeletedBackupProtectedVm" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryServicesVaults.property.recoverSoftDeletedBackupProtectedVm"></a>

```csharp
public object RecoverSoftDeletedBackupProtectedVm { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#recover_soft_deleted_backup_protected_vm AzurermProvider#recover_soft_deleted_backup_protected_vm}.

---

### AzurermProviderFeaturesResourceGroup <a name="AzurermProviderFeaturesResourceGroup" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AzurermProviderFeaturesResourceGroup {
    object PreventDeletionIfContainsResources = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup.property.preventDeletionIfContainsResources">PreventDeletionIfContainsResources</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#prevent_deletion_if_contains_resources AzurermProvider#prevent_deletion_if_contains_resources}. |

---

##### `PreventDeletionIfContainsResources`<sup>Optional</sup> <a name="PreventDeletionIfContainsResources" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup.property.preventDeletionIfContainsResources"></a>

```csharp
public object PreventDeletionIfContainsResources { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#prevent_deletion_if_contains_resources AzurermProvider#prevent_deletion_if_contains_resources}.

---

### AzurermProviderFeaturesStorage <a name="AzurermProviderFeaturesStorage" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AzurermProviderFeaturesStorage {
    object DataPlaneAvailable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesStorage.property.dataPlaneAvailable">DataPlaneAvailable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#data_plane_available AzurermProvider#data_plane_available}. |

---

##### `DataPlaneAvailable`<sup>Optional</sup> <a name="DataPlaneAvailable" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesStorage.property.dataPlaneAvailable"></a>

```csharp
public object DataPlaneAvailable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#data_plane_available AzurermProvider#data_plane_available}.

---

### AzurermProviderFeaturesSubscription <a name="AzurermProviderFeaturesSubscription" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesSubscription"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesSubscription.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AzurermProviderFeaturesSubscription {
    object PreventCancellationOnDestroy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesSubscription.property.preventCancellationOnDestroy">PreventCancellationOnDestroy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#prevent_cancellation_on_destroy AzurermProvider#prevent_cancellation_on_destroy}. |

---

##### `PreventCancellationOnDestroy`<sup>Optional</sup> <a name="PreventCancellationOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesSubscription.property.preventCancellationOnDestroy"></a>

```csharp
public object PreventCancellationOnDestroy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#prevent_cancellation_on_destroy AzurermProvider#prevent_cancellation_on_destroy}.

---

### AzurermProviderFeaturesTemplateDeployment <a name="AzurermProviderFeaturesTemplateDeployment" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AzurermProviderFeaturesTemplateDeployment {
    object DeleteNestedItemsDuringDeletion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment.property.deleteNestedItemsDuringDeletion">DeleteNestedItemsDuringDeletion</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#delete_nested_items_during_deletion AzurermProvider#delete_nested_items_during_deletion}. |

---

##### `DeleteNestedItemsDuringDeletion`<sup>Required</sup> <a name="DeleteNestedItemsDuringDeletion" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment.property.deleteNestedItemsDuringDeletion"></a>

```csharp
public object DeleteNestedItemsDuringDeletion { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#delete_nested_items_during_deletion AzurermProvider#delete_nested_items_during_deletion}.

---

### AzurermProviderFeaturesVirtualMachine <a name="AzurermProviderFeaturesVirtualMachine" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AzurermProviderFeaturesVirtualMachine {
    object DeleteOsDiskOnDeletion = null,
    object DetachImplicitDataDiskOnDeletion = null,
    object GracefulShutdown = null,
    object SkipShutdownAndForceDelete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.deleteOsDiskOnDeletion">DeleteOsDiskOnDeletion</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#delete_os_disk_on_deletion AzurermProvider#delete_os_disk_on_deletion}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.detachImplicitDataDiskOnDeletion">DetachImplicitDataDiskOnDeletion</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#detach_implicit_data_disk_on_deletion AzurermProvider#detach_implicit_data_disk_on_deletion}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.gracefulShutdown">GracefulShutdown</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#graceful_shutdown AzurermProvider#graceful_shutdown}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.skipShutdownAndForceDelete">SkipShutdownAndForceDelete</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#skip_shutdown_and_force_delete AzurermProvider#skip_shutdown_and_force_delete}. |

---

##### `DeleteOsDiskOnDeletion`<sup>Optional</sup> <a name="DeleteOsDiskOnDeletion" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.deleteOsDiskOnDeletion"></a>

```csharp
public object DeleteOsDiskOnDeletion { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#delete_os_disk_on_deletion AzurermProvider#delete_os_disk_on_deletion}.

---

##### `DetachImplicitDataDiskOnDeletion`<sup>Optional</sup> <a name="DetachImplicitDataDiskOnDeletion" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.detachImplicitDataDiskOnDeletion"></a>

```csharp
public object DetachImplicitDataDiskOnDeletion { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#detach_implicit_data_disk_on_deletion AzurermProvider#detach_implicit_data_disk_on_deletion}.

---

##### `GracefulShutdown`<sup>Optional</sup> <a name="GracefulShutdown" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.gracefulShutdown"></a>

```csharp
public object GracefulShutdown { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#graceful_shutdown AzurermProvider#graceful_shutdown}.

---

##### `SkipShutdownAndForceDelete`<sup>Optional</sup> <a name="SkipShutdownAndForceDelete" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.skipShutdownAndForceDelete"></a>

```csharp
public object SkipShutdownAndForceDelete { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#skip_shutdown_and_force_delete AzurermProvider#skip_shutdown_and_force_delete}.

---

### AzurermProviderFeaturesVirtualMachineScaleSet <a name="AzurermProviderFeaturesVirtualMachineScaleSet" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AzurermProviderFeaturesVirtualMachineScaleSet {
    object ForceDelete = null,
    object ReimageOnManualUpgrade = null,
    object RollInstancesWhenRequired = null,
    object ScaleToZeroBeforeDeletion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.forceDelete">ForceDelete</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#force_delete AzurermProvider#force_delete}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.reimageOnManualUpgrade">ReimageOnManualUpgrade</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#reimage_on_manual_upgrade AzurermProvider#reimage_on_manual_upgrade}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.rollInstancesWhenRequired">RollInstancesWhenRequired</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#roll_instances_when_required AzurermProvider#roll_instances_when_required}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.scaleToZeroBeforeDeletion">ScaleToZeroBeforeDeletion</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#scale_to_zero_before_deletion AzurermProvider#scale_to_zero_before_deletion}. |

---

##### `ForceDelete`<sup>Optional</sup> <a name="ForceDelete" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.forceDelete"></a>

```csharp
public object ForceDelete { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#force_delete AzurermProvider#force_delete}.

---

##### `ReimageOnManualUpgrade`<sup>Optional</sup> <a name="ReimageOnManualUpgrade" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.reimageOnManualUpgrade"></a>

```csharp
public object ReimageOnManualUpgrade { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#reimage_on_manual_upgrade AzurermProvider#reimage_on_manual_upgrade}.

---

##### `RollInstancesWhenRequired`<sup>Optional</sup> <a name="RollInstancesWhenRequired" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.rollInstancesWhenRequired"></a>

```csharp
public object RollInstancesWhenRequired { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#roll_instances_when_required AzurermProvider#roll_instances_when_required}.

---

##### `ScaleToZeroBeforeDeletion`<sup>Optional</sup> <a name="ScaleToZeroBeforeDeletion" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.scaleToZeroBeforeDeletion"></a>

```csharp
public object ScaleToZeroBeforeDeletion { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs#scale_to_zero_before_deletion AzurermProvider#scale_to_zero_before_deletion}.

---



