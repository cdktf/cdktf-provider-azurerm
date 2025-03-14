# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-azurerm.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzurermProvider <a name="AzurermProvider" id="@cdktf/provider-azurerm.provider.AzurermProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs azurerm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/provider"

provider.NewAzurermProvider(scope Construct, id *string, config AzurermProviderConfig) AzurermProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig">AzurermProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.provider.AzurermProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.provider.AzurermProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.provider.AzurermProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.provider.AzurermProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.provider.AzurermProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.provider.AzurermProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.provider.AzurermProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.provider.AzurermProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAdoPipelineServiceConnectionId` <a name="ResetAdoPipelineServiceConnectionId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetAdoPipelineServiceConnectionId"></a>

```go
func ResetAdoPipelineServiceConnectionId()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetAuxiliaryTenantIds` <a name="ResetAuxiliaryTenantIds" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetAuxiliaryTenantIds"></a>

```go
func ResetAuxiliaryTenantIds()
```

##### `ResetClientCertificate` <a name="ResetClientCertificate" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientCertificate"></a>

```go
func ResetClientCertificate()
```

##### `ResetClientCertificatePassword` <a name="ResetClientCertificatePassword" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientCertificatePassword"></a>

```go
func ResetClientCertificatePassword()
```

##### `ResetClientCertificatePath` <a name="ResetClientCertificatePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientCertificatePath"></a>

```go
func ResetClientCertificatePath()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientIdFilePath` <a name="ResetClientIdFilePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientIdFilePath"></a>

```go
func ResetClientIdFilePath()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetClientSecretFilePath` <a name="ResetClientSecretFilePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientSecretFilePath"></a>

```go
func ResetClientSecretFilePath()
```

##### `ResetDisableCorrelationRequestId` <a name="ResetDisableCorrelationRequestId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetDisableCorrelationRequestId"></a>

```go
func ResetDisableCorrelationRequestId()
```

##### `ResetDisableTerraformPartnerId` <a name="ResetDisableTerraformPartnerId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetDisableTerraformPartnerId"></a>

```go
func ResetDisableTerraformPartnerId()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetFeatures` <a name="ResetFeatures" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetFeatures"></a>

```go
func ResetFeatures()
```

##### `ResetMetadataHost` <a name="ResetMetadataHost" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetMetadataHost"></a>

```go
func ResetMetadataHost()
```

##### `ResetMsiEndpoint` <a name="ResetMsiEndpoint" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetMsiEndpoint"></a>

```go
func ResetMsiEndpoint()
```

##### `ResetOidcRequestToken` <a name="ResetOidcRequestToken" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcRequestToken"></a>

```go
func ResetOidcRequestToken()
```

##### `ResetOidcRequestUrl` <a name="ResetOidcRequestUrl" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcRequestUrl"></a>

```go
func ResetOidcRequestUrl()
```

##### `ResetOidcToken` <a name="ResetOidcToken" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcToken"></a>

```go
func ResetOidcToken()
```

##### `ResetOidcTokenFilePath` <a name="ResetOidcTokenFilePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcTokenFilePath"></a>

```go
func ResetOidcTokenFilePath()
```

##### `ResetPartnerId` <a name="ResetPartnerId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetPartnerId"></a>

```go
func ResetPartnerId()
```

##### `ResetResourceProviderRegistrations` <a name="ResetResourceProviderRegistrations" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetResourceProviderRegistrations"></a>

```go
func ResetResourceProviderRegistrations()
```

##### `ResetResourceProvidersToRegister` <a name="ResetResourceProvidersToRegister" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetResourceProvidersToRegister"></a>

```go
func ResetResourceProvidersToRegister()
```

##### `ResetSkipProviderRegistration` <a name="ResetSkipProviderRegistration" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetSkipProviderRegistration"></a>

```go
func ResetSkipProviderRegistration()
```

##### `ResetStorageUseAzuread` <a name="ResetStorageUseAzuread" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetStorageUseAzuread"></a>

```go
func ResetStorageUseAzuread()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetSubscriptionId"></a>

```go
func ResetSubscriptionId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetTenantId"></a>

```go
func ResetTenantId()
```

##### `ResetUseAksWorkloadIdentity` <a name="ResetUseAksWorkloadIdentity" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetUseAksWorkloadIdentity"></a>

```go
func ResetUseAksWorkloadIdentity()
```

##### `ResetUseCli` <a name="ResetUseCli" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetUseCli"></a>

```go
func ResetUseCli()
```

##### `ResetUseMsi` <a name="ResetUseMsi" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetUseMsi"></a>

```go
func ResetUseMsi()
```

##### `ResetUseOidc` <a name="ResetUseOidc" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetUseOidc"></a>

```go
func ResetUseOidc()
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

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/provider"

provider.AzurermProvider_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.provider.AzurermProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/provider"

provider.AzurermProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.provider.AzurermProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-azurerm.provider.AzurermProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/provider"

provider.AzurermProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.provider.AzurermProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.provider.AzurermProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/provider"

provider.AzurermProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AzurermProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.provider.AzurermProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.provider.AzurermProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AzurermProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.provider.AzurermProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AzurermProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.provider.AzurermProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AzurermProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.adoPipelineServiceConnectionIdInput">AdoPipelineServiceConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.auxiliaryTenantIdsInput">AuxiliaryTenantIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificateInput">ClientCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePasswordInput">ClientCertificatePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePathInput">ClientCertificatePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdFilePathInput">ClientIdFilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretFilePathInput">ClientSecretFilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.disableCorrelationRequestIdInput">DisableCorrelationRequestIdInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.disableTerraformPartnerIdInput">DisableTerraformPartnerIdInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.featuresInput">FeaturesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.metadataHostInput">MetadataHostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.msiEndpointInput">MsiEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestTokenInput">OidcRequestTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestUrlInput">OidcRequestUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenFilePathInput">OidcTokenFilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenInput">OidcTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.partnerIdInput">PartnerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.resourceProviderRegistrationsInput">ResourceProviderRegistrationsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.resourceProvidersToRegisterInput">ResourceProvidersToRegisterInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.skipProviderRegistrationInput">SkipProviderRegistrationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.storageUseAzureadInput">StorageUseAzureadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useAksWorkloadIdentityInput">UseAksWorkloadIdentityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useCliInput">UseCliInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useMsiInput">UseMsiInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useOidcInput">UseOidcInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.adoPipelineServiceConnectionId">AdoPipelineServiceConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.auxiliaryTenantIds">AuxiliaryTenantIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePassword">ClientCertificatePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePath">ClientCertificatePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdFilePath">ClientIdFilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretFilePath">ClientSecretFilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.disableCorrelationRequestId">DisableCorrelationRequestId</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.disableTerraformPartnerId">DisableTerraformPartnerId</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.features">Features</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.metadataHost">MetadataHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.msiEndpoint">MsiEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestToken">OidcRequestToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestUrl">OidcRequestUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcToken">OidcToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenFilePath">OidcTokenFilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.partnerId">PartnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.resourceProviderRegistrations">ResourceProviderRegistrations</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.resourceProvidersToRegister">ResourceProvidersToRegister</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.skipProviderRegistration">SkipProviderRegistration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.storageUseAzuread">StorageUseAzuread</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useAksWorkloadIdentity">UseAksWorkloadIdentity</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useCli">UseCli</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useMsi">UseMsi</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useOidc">UseOidc</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AdoPipelineServiceConnectionIdInput`<sup>Optional</sup> <a name="AdoPipelineServiceConnectionIdInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.adoPipelineServiceConnectionIdInput"></a>

```go
func AdoPipelineServiceConnectionIdInput() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `AuxiliaryTenantIdsInput`<sup>Optional</sup> <a name="AuxiliaryTenantIdsInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.auxiliaryTenantIdsInput"></a>

```go
func AuxiliaryTenantIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClientCertificateInput`<sup>Optional</sup> <a name="ClientCertificateInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificateInput"></a>

```go
func ClientCertificateInput() *string
```

- *Type:* *string

---

##### `ClientCertificatePasswordInput`<sup>Optional</sup> <a name="ClientCertificatePasswordInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePasswordInput"></a>

```go
func ClientCertificatePasswordInput() *string
```

- *Type:* *string

---

##### `ClientCertificatePathInput`<sup>Optional</sup> <a name="ClientCertificatePathInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePathInput"></a>

```go
func ClientCertificatePathInput() *string
```

- *Type:* *string

---

##### `ClientIdFilePathInput`<sup>Optional</sup> <a name="ClientIdFilePathInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdFilePathInput"></a>

```go
func ClientIdFilePathInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretFilePathInput`<sup>Optional</sup> <a name="ClientSecretFilePathInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretFilePathInput"></a>

```go
func ClientSecretFilePathInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `DisableCorrelationRequestIdInput`<sup>Optional</sup> <a name="DisableCorrelationRequestIdInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.disableCorrelationRequestIdInput"></a>

```go
func DisableCorrelationRequestIdInput() interface{}
```

- *Type:* interface{}

---

##### `DisableTerraformPartnerIdInput`<sup>Optional</sup> <a name="DisableTerraformPartnerIdInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.disableTerraformPartnerIdInput"></a>

```go
func DisableTerraformPartnerIdInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `FeaturesInput`<sup>Optional</sup> <a name="FeaturesInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.featuresInput"></a>

```go
func FeaturesInput() interface{}
```

- *Type:* interface{}

---

##### `MetadataHostInput`<sup>Optional</sup> <a name="MetadataHostInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.metadataHostInput"></a>

```go
func MetadataHostInput() *string
```

- *Type:* *string

---

##### `MsiEndpointInput`<sup>Optional</sup> <a name="MsiEndpointInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.msiEndpointInput"></a>

```go
func MsiEndpointInput() *string
```

- *Type:* *string

---

##### `OidcRequestTokenInput`<sup>Optional</sup> <a name="OidcRequestTokenInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestTokenInput"></a>

```go
func OidcRequestTokenInput() *string
```

- *Type:* *string

---

##### `OidcRequestUrlInput`<sup>Optional</sup> <a name="OidcRequestUrlInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestUrlInput"></a>

```go
func OidcRequestUrlInput() *string
```

- *Type:* *string

---

##### `OidcTokenFilePathInput`<sup>Optional</sup> <a name="OidcTokenFilePathInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenFilePathInput"></a>

```go
func OidcTokenFilePathInput() *string
```

- *Type:* *string

---

##### `OidcTokenInput`<sup>Optional</sup> <a name="OidcTokenInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenInput"></a>

```go
func OidcTokenInput() *string
```

- *Type:* *string

---

##### `PartnerIdInput`<sup>Optional</sup> <a name="PartnerIdInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.partnerIdInput"></a>

```go
func PartnerIdInput() *string
```

- *Type:* *string

---

##### `ResourceProviderRegistrationsInput`<sup>Optional</sup> <a name="ResourceProviderRegistrationsInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.resourceProviderRegistrationsInput"></a>

```go
func ResourceProviderRegistrationsInput() *string
```

- *Type:* *string

---

##### `ResourceProvidersToRegisterInput`<sup>Optional</sup> <a name="ResourceProvidersToRegisterInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.resourceProvidersToRegisterInput"></a>

```go
func ResourceProvidersToRegisterInput() *[]*string
```

- *Type:* *[]*string

---

##### `SkipProviderRegistrationInput`<sup>Optional</sup> <a name="SkipProviderRegistrationInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.skipProviderRegistrationInput"></a>

```go
func SkipProviderRegistrationInput() interface{}
```

- *Type:* interface{}

---

##### `StorageUseAzureadInput`<sup>Optional</sup> <a name="StorageUseAzureadInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.storageUseAzureadInput"></a>

```go
func StorageUseAzureadInput() interface{}
```

- *Type:* interface{}

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `UseAksWorkloadIdentityInput`<sup>Optional</sup> <a name="UseAksWorkloadIdentityInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useAksWorkloadIdentityInput"></a>

```go
func UseAksWorkloadIdentityInput() interface{}
```

- *Type:* interface{}

---

##### `UseCliInput`<sup>Optional</sup> <a name="UseCliInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useCliInput"></a>

```go
func UseCliInput() interface{}
```

- *Type:* interface{}

---

##### `UseMsiInput`<sup>Optional</sup> <a name="UseMsiInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useMsiInput"></a>

```go
func UseMsiInput() interface{}
```

- *Type:* interface{}

---

##### `UseOidcInput`<sup>Optional</sup> <a name="UseOidcInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useOidcInput"></a>

```go
func UseOidcInput() interface{}
```

- *Type:* interface{}

---

##### `AdoPipelineServiceConnectionId`<sup>Optional</sup> <a name="AdoPipelineServiceConnectionId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.adoPipelineServiceConnectionId"></a>

```go
func AdoPipelineServiceConnectionId() *string
```

- *Type:* *string

---

##### `AuxiliaryTenantIds`<sup>Optional</sup> <a name="AuxiliaryTenantIds" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.auxiliaryTenantIds"></a>

```go
func AuxiliaryTenantIds() *[]*string
```

- *Type:* *[]*string

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificate"></a>

```go
func ClientCertificate() *string
```

- *Type:* *string

---

##### `ClientCertificatePassword`<sup>Optional</sup> <a name="ClientCertificatePassword" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePassword"></a>

```go
func ClientCertificatePassword() *string
```

- *Type:* *string

---

##### `ClientCertificatePath`<sup>Optional</sup> <a name="ClientCertificatePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePath"></a>

```go
func ClientCertificatePath() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientIdFilePath`<sup>Optional</sup> <a name="ClientIdFilePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdFilePath"></a>

```go
func ClientIdFilePath() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `ClientSecretFilePath`<sup>Optional</sup> <a name="ClientSecretFilePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretFilePath"></a>

```go
func ClientSecretFilePath() *string
```

- *Type:* *string

---

##### `DisableCorrelationRequestId`<sup>Optional</sup> <a name="DisableCorrelationRequestId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.disableCorrelationRequestId"></a>

```go
func DisableCorrelationRequestId() interface{}
```

- *Type:* interface{}

---

##### `DisableTerraformPartnerId`<sup>Optional</sup> <a name="DisableTerraformPartnerId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.disableTerraformPartnerId"></a>

```go
func DisableTerraformPartnerId() interface{}
```

- *Type:* interface{}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Features`<sup>Optional</sup> <a name="Features" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.features"></a>

```go
func Features() interface{}
```

- *Type:* interface{}

---

##### `MetadataHost`<sup>Optional</sup> <a name="MetadataHost" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.metadataHost"></a>

```go
func MetadataHost() *string
```

- *Type:* *string

---

##### `MsiEndpoint`<sup>Optional</sup> <a name="MsiEndpoint" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.msiEndpoint"></a>

```go
func MsiEndpoint() *string
```

- *Type:* *string

---

##### `OidcRequestToken`<sup>Optional</sup> <a name="OidcRequestToken" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestToken"></a>

```go
func OidcRequestToken() *string
```

- *Type:* *string

---

##### `OidcRequestUrl`<sup>Optional</sup> <a name="OidcRequestUrl" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestUrl"></a>

```go
func OidcRequestUrl() *string
```

- *Type:* *string

---

##### `OidcToken`<sup>Optional</sup> <a name="OidcToken" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcToken"></a>

```go
func OidcToken() *string
```

- *Type:* *string

---

##### `OidcTokenFilePath`<sup>Optional</sup> <a name="OidcTokenFilePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenFilePath"></a>

```go
func OidcTokenFilePath() *string
```

- *Type:* *string

---

##### `PartnerId`<sup>Optional</sup> <a name="PartnerId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.partnerId"></a>

```go
func PartnerId() *string
```

- *Type:* *string

---

##### `ResourceProviderRegistrations`<sup>Optional</sup> <a name="ResourceProviderRegistrations" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.resourceProviderRegistrations"></a>

```go
func ResourceProviderRegistrations() *string
```

- *Type:* *string

---

##### `ResourceProvidersToRegister`<sup>Optional</sup> <a name="ResourceProvidersToRegister" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.resourceProvidersToRegister"></a>

```go
func ResourceProvidersToRegister() *[]*string
```

- *Type:* *[]*string

---

##### `SkipProviderRegistration`<sup>Optional</sup> <a name="SkipProviderRegistration" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.skipProviderRegistration"></a>

```go
func SkipProviderRegistration() interface{}
```

- *Type:* interface{}

---

##### `StorageUseAzuread`<sup>Optional</sup> <a name="StorageUseAzuread" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.storageUseAzuread"></a>

```go
func StorageUseAzuread() interface{}
```

- *Type:* interface{}

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `UseAksWorkloadIdentity`<sup>Optional</sup> <a name="UseAksWorkloadIdentity" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useAksWorkloadIdentity"></a>

```go
func UseAksWorkloadIdentity() interface{}
```

- *Type:* interface{}

---

##### `UseCli`<sup>Optional</sup> <a name="UseCli" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useCli"></a>

```go
func UseCli() interface{}
```

- *Type:* interface{}

---

##### `UseMsi`<sup>Optional</sup> <a name="UseMsi" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useMsi"></a>

```go
func UseMsi() interface{}
```

- *Type:* interface{}

---

##### `UseOidc`<sup>Optional</sup> <a name="UseOidc" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useOidc"></a>

```go
func UseOidc() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AzurermProviderConfig <a name="AzurermProviderConfig" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/provider"

&provider.AzurermProviderConfig {
	AdoPipelineServiceConnectionId: *string,
	Alias: *string,
	AuxiliaryTenantIds: *[]*string,
	ClientCertificate: *string,
	ClientCertificatePassword: *string,
	ClientCertificatePath: *string,
	ClientId: *string,
	ClientIdFilePath: *string,
	ClientSecret: *string,
	ClientSecretFilePath: *string,
	DisableCorrelationRequestId: interface{},
	DisableTerraformPartnerId: interface{},
	Environment: *string,
	Features: interface{},
	MetadataHost: *string,
	MsiEndpoint: *string,
	OidcRequestToken: *string,
	OidcRequestUrl: *string,
	OidcToken: *string,
	OidcTokenFilePath: *string,
	PartnerId: *string,
	ResourceProviderRegistrations: *string,
	ResourceProvidersToRegister: *[]*string,
	SkipProviderRegistration: interface{},
	StorageUseAzuread: interface{},
	SubscriptionId: *string,
	TenantId: *string,
	UseAksWorkloadIdentity: interface{},
	UseCli: interface{},
	UseMsi: interface{},
	UseOidc: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.adoPipelineServiceConnectionId">AdoPipelineServiceConnectionId</a></code> | <code>*string</code> | The Azure DevOps Pipeline Service Connection ID. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.auxiliaryTenantIds">AuxiliaryTenantIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#auxiliary_tenant_ids AzurermProvider#auxiliary_tenant_ids}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificatePassword">ClientCertificatePassword</a></code> | <code>*string</code> | The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificatePath">ClientCertificatePath</a></code> | <code>*string</code> | The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientId">ClientId</a></code> | <code>*string</code> | The Client ID which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientIdFilePath">ClientIdFilePath</a></code> | <code>*string</code> | The path to a file containing the Client ID which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientSecretFilePath">ClientSecretFilePath</a></code> | <code>*string</code> | The path to a file containing the Client Secret which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.disableCorrelationRequestId">DisableCorrelationRequestId</a></code> | <code>interface{}</code> | This will disable the x-ms-correlation-request-id header. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.disableTerraformPartnerId">DisableTerraformPartnerId</a></code> | <code>interface{}</code> | This will disable the Terraform Partner ID which is used if a custom `partner_id` isn't specified. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.environment">Environment</a></code> | <code>*string</code> | The Cloud Environment which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.features">Features</a></code> | <code>interface{}</code> | features block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.metadataHost">MetadataHost</a></code> | <code>*string</code> | The Hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.msiEndpoint">MsiEndpoint</a></code> | <code>*string</code> | The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcRequestToken">OidcRequestToken</a></code> | <code>*string</code> | The bearer token for the request to the OIDC provider. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcRequestUrl">OidcRequestUrl</a></code> | <code>*string</code> | The URL for the OIDC provider from which to request an ID token. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcToken">OidcToken</a></code> | <code>*string</code> | The OIDC ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcTokenFilePath">OidcTokenFilePath</a></code> | <code>*string</code> | The path to a file containing an OIDC ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.partnerId">PartnerId</a></code> | <code>*string</code> | A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.resourceProviderRegistrations">ResourceProviderRegistrations</a></code> | <code>*string</code> | The set of Resource Providers which should be automatically registered for the subscription. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.resourceProvidersToRegister">ResourceProvidersToRegister</a></code> | <code>*[]*string</code> | A list of Resource Providers to explicitly register for the subscription, in addition to those specified by the `resource_provider_registrations` property. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.skipProviderRegistration">SkipProviderRegistration</a></code> | <code>interface{}</code> | Should the AzureRM Provider skip registering all of the Resource Providers that it supports, if they're not already registered? |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.storageUseAzuread">StorageUseAzuread</a></code> | <code>interface{}</code> | Should the AzureRM Provider use Azure AD Authentication when accessing the Storage Data Plane APIs? |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | The Subscription ID which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | The Tenant ID which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useAksWorkloadIdentity">UseAksWorkloadIdentity</a></code> | <code>interface{}</code> | Allow Azure AKS Workload Identity to be used for Authentication. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useCli">UseCli</a></code> | <code>interface{}</code> | Allow Azure CLI to be used for Authentication. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useMsi">UseMsi</a></code> | <code>interface{}</code> | Allow Managed Service Identity to be used for Authentication. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useOidc">UseOidc</a></code> | <code>interface{}</code> | Allow OpenID Connect to be used for authentication. |

---

##### `AdoPipelineServiceConnectionId`<sup>Optional</sup> <a name="AdoPipelineServiceConnectionId" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.adoPipelineServiceConnectionId"></a>

```go
AdoPipelineServiceConnectionId *string
```

- *Type:* *string

The Azure DevOps Pipeline Service Connection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#ado_pipeline_service_connection_id AzurermProvider#ado_pipeline_service_connection_id}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#alias AzurermProvider#alias}

---

##### `AuxiliaryTenantIds`<sup>Optional</sup> <a name="AuxiliaryTenantIds" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.auxiliaryTenantIds"></a>

```go
AuxiliaryTenantIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#auxiliary_tenant_ids AzurermProvider#auxiliary_tenant_ids}.

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificate"></a>

```go
ClientCertificate *string
```

- *Type:* *string

Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#client_certificate AzurermProvider#client_certificate}

---

##### `ClientCertificatePassword`<sup>Optional</sup> <a name="ClientCertificatePassword" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificatePassword"></a>

```go
ClientCertificatePassword *string
```

- *Type:* *string

The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#client_certificate_password AzurermProvider#client_certificate_password}

---

##### `ClientCertificatePath`<sup>Optional</sup> <a name="ClientCertificatePath" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificatePath"></a>

```go
ClientCertificatePath *string
```

- *Type:* *string

The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#client_certificate_path AzurermProvider#client_certificate_path}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The Client ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#client_id AzurermProvider#client_id}

---

##### `ClientIdFilePath`<sup>Optional</sup> <a name="ClientIdFilePath" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientIdFilePath"></a>

```go
ClientIdFilePath *string
```

- *Type:* *string

The path to a file containing the Client ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#client_id_file_path AzurermProvider#client_id_file_path}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#client_secret AzurermProvider#client_secret}

---

##### `ClientSecretFilePath`<sup>Optional</sup> <a name="ClientSecretFilePath" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientSecretFilePath"></a>

```go
ClientSecretFilePath *string
```

- *Type:* *string

The path to a file containing the Client Secret which should be used.

For use When authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#client_secret_file_path AzurermProvider#client_secret_file_path}

---

##### `DisableCorrelationRequestId`<sup>Optional</sup> <a name="DisableCorrelationRequestId" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.disableCorrelationRequestId"></a>

```go
DisableCorrelationRequestId interface{}
```

- *Type:* interface{}

This will disable the x-ms-correlation-request-id header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#disable_correlation_request_id AzurermProvider#disable_correlation_request_id}

---

##### `DisableTerraformPartnerId`<sup>Optional</sup> <a name="DisableTerraformPartnerId" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.disableTerraformPartnerId"></a>

```go
DisableTerraformPartnerId interface{}
```

- *Type:* interface{}

This will disable the Terraform Partner ID which is used if a custom `partner_id` isn't specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#disable_terraform_partner_id AzurermProvider#disable_terraform_partner_id}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

The Cloud Environment which should be used.

Possible values are public, usgovernment, and china. Defaults to public. Not used and should not be specified when `metadata_host` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#environment AzurermProvider#environment}

---

##### `Features`<sup>Optional</sup> <a name="Features" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.features"></a>

```go
Features interface{}
```

- *Type:* interface{}

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#features AzurermProvider#features}

---

##### `MetadataHost`<sup>Optional</sup> <a name="MetadataHost" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.metadataHost"></a>

```go
MetadataHost *string
```

- *Type:* *string

The Hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#metadata_host AzurermProvider#metadata_host}

---

##### `MsiEndpoint`<sup>Optional</sup> <a name="MsiEndpoint" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.msiEndpoint"></a>

```go
MsiEndpoint *string
```

- *Type:* *string

The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#msi_endpoint AzurermProvider#msi_endpoint}

---

##### `OidcRequestToken`<sup>Optional</sup> <a name="OidcRequestToken" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcRequestToken"></a>

```go
OidcRequestToken *string
```

- *Type:* *string

The bearer token for the request to the OIDC provider.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#oidc_request_token AzurermProvider#oidc_request_token}

---

##### `OidcRequestUrl`<sup>Optional</sup> <a name="OidcRequestUrl" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcRequestUrl"></a>

```go
OidcRequestUrl *string
```

- *Type:* *string

The URL for the OIDC provider from which to request an ID token.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#oidc_request_url AzurermProvider#oidc_request_url}

---

##### `OidcToken`<sup>Optional</sup> <a name="OidcToken" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcToken"></a>

```go
OidcToken *string
```

- *Type:* *string

The OIDC ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#oidc_token AzurermProvider#oidc_token}

---

##### `OidcTokenFilePath`<sup>Optional</sup> <a name="OidcTokenFilePath" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcTokenFilePath"></a>

```go
OidcTokenFilePath *string
```

- *Type:* *string

The path to a file containing an OIDC ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#oidc_token_file_path AzurermProvider#oidc_token_file_path}

---

##### `PartnerId`<sup>Optional</sup> <a name="PartnerId" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.partnerId"></a>

```go
PartnerId *string
```

- *Type:* *string

A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#partner_id AzurermProvider#partner_id}

---

##### `ResourceProviderRegistrations`<sup>Optional</sup> <a name="ResourceProviderRegistrations" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.resourceProviderRegistrations"></a>

```go
ResourceProviderRegistrations *string
```

- *Type:* *string

The set of Resource Providers which should be automatically registered for the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#resource_provider_registrations AzurermProvider#resource_provider_registrations}

---

##### `ResourceProvidersToRegister`<sup>Optional</sup> <a name="ResourceProvidersToRegister" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.resourceProvidersToRegister"></a>

```go
ResourceProvidersToRegister *[]*string
```

- *Type:* *[]*string

A list of Resource Providers to explicitly register for the subscription, in addition to those specified by the `resource_provider_registrations` property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#resource_providers_to_register AzurermProvider#resource_providers_to_register}

---

##### `SkipProviderRegistration`<sup>Optional</sup> <a name="SkipProviderRegistration" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.skipProviderRegistration"></a>

```go
SkipProviderRegistration interface{}
```

- *Type:* interface{}

Should the AzureRM Provider skip registering all of the Resource Providers that it supports, if they're not already registered?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#skip_provider_registration AzurermProvider#skip_provider_registration}

---

##### `StorageUseAzuread`<sup>Optional</sup> <a name="StorageUseAzuread" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.storageUseAzuread"></a>

```go
StorageUseAzuread interface{}
```

- *Type:* interface{}

Should the AzureRM Provider use Azure AD Authentication when accessing the Storage Data Plane APIs?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#storage_use_azuread AzurermProvider#storage_use_azuread}

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

The Subscription ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#subscription_id AzurermProvider#subscription_id}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

The Tenant ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#tenant_id AzurermProvider#tenant_id}

---

##### `UseAksWorkloadIdentity`<sup>Optional</sup> <a name="UseAksWorkloadIdentity" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useAksWorkloadIdentity"></a>

```go
UseAksWorkloadIdentity interface{}
```

- *Type:* interface{}

Allow Azure AKS Workload Identity to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#use_aks_workload_identity AzurermProvider#use_aks_workload_identity}

---

##### `UseCli`<sup>Optional</sup> <a name="UseCli" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useCli"></a>

```go
UseCli interface{}
```

- *Type:* interface{}

Allow Azure CLI to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#use_cli AzurermProvider#use_cli}

---

##### `UseMsi`<sup>Optional</sup> <a name="UseMsi" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useMsi"></a>

```go
UseMsi interface{}
```

- *Type:* interface{}

Allow Managed Service Identity to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#use_msi AzurermProvider#use_msi}

---

##### `UseOidc`<sup>Optional</sup> <a name="UseOidc" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useOidc"></a>

```go
UseOidc interface{}
```

- *Type:* interface{}

Allow OpenID Connect to be used for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#use_oidc AzurermProvider#use_oidc}

---

### AzurermProviderFeatures <a name="AzurermProviderFeatures" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/provider"

&provider.AzurermProviderFeatures {
	ApiManagement: interface{},
	AppConfiguration: interface{},
	ApplicationInsights: interface{},
	CognitiveAccount: interface{},
	KeyVault: interface{},
	LogAnalyticsWorkspace: interface{},
	MachineLearning: interface{},
	ManagedDisk: interface{},
	Netapp: interface{},
	PostgresqlFlexibleServer: interface{},
	RecoveryService: interface{},
	RecoveryServicesVaults: interface{},
	ResourceGroup: interface{},
	Storage: interface{},
	Subscription: interface{},
	TemplateDeployment: interface{},
	VirtualMachine: interface{},
	VirtualMachineScaleSet: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.apiManagement">ApiManagement</a></code> | <code>interface{}</code> | api_management block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.appConfiguration">AppConfiguration</a></code> | <code>interface{}</code> | app_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.applicationInsights">ApplicationInsights</a></code> | <code>interface{}</code> | application_insights block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.cognitiveAccount">CognitiveAccount</a></code> | <code>interface{}</code> | cognitive_account block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.keyVault">KeyVault</a></code> | <code>interface{}</code> | key_vault block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.logAnalyticsWorkspace">LogAnalyticsWorkspace</a></code> | <code>interface{}</code> | log_analytics_workspace block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.machineLearning">MachineLearning</a></code> | <code>interface{}</code> | machine_learning block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.managedDisk">ManagedDisk</a></code> | <code>interface{}</code> | managed_disk block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.netapp">Netapp</a></code> | <code>interface{}</code> | netapp block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.postgresqlFlexibleServer">PostgresqlFlexibleServer</a></code> | <code>interface{}</code> | postgresql_flexible_server block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.recoveryService">RecoveryService</a></code> | <code>interface{}</code> | recovery_service block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.recoveryServicesVaults">RecoveryServicesVaults</a></code> | <code>interface{}</code> | recovery_services_vaults block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.resourceGroup">ResourceGroup</a></code> | <code>interface{}</code> | resource_group block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.storage">Storage</a></code> | <code>interface{}</code> | storage block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.subscription">Subscription</a></code> | <code>interface{}</code> | subscription block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.templateDeployment">TemplateDeployment</a></code> | <code>interface{}</code> | template_deployment block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.virtualMachine">VirtualMachine</a></code> | <code>interface{}</code> | virtual_machine block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.virtualMachineScaleSet">VirtualMachineScaleSet</a></code> | <code>interface{}</code> | virtual_machine_scale_set block. |

---

##### `ApiManagement`<sup>Optional</sup> <a name="ApiManagement" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.apiManagement"></a>

```go
ApiManagement interface{}
```

- *Type:* interface{}

api_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#api_management AzurermProvider#api_management}

---

##### `AppConfiguration`<sup>Optional</sup> <a name="AppConfiguration" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.appConfiguration"></a>

```go
AppConfiguration interface{}
```

- *Type:* interface{}

app_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#app_configuration AzurermProvider#app_configuration}

---

##### `ApplicationInsights`<sup>Optional</sup> <a name="ApplicationInsights" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.applicationInsights"></a>

```go
ApplicationInsights interface{}
```

- *Type:* interface{}

application_insights block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#application_insights AzurermProvider#application_insights}

---

##### `CognitiveAccount`<sup>Optional</sup> <a name="CognitiveAccount" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.cognitiveAccount"></a>

```go
CognitiveAccount interface{}
```

- *Type:* interface{}

cognitive_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#cognitive_account AzurermProvider#cognitive_account}

---

##### `KeyVault`<sup>Optional</sup> <a name="KeyVault" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.keyVault"></a>

```go
KeyVault interface{}
```

- *Type:* interface{}

key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#key_vault AzurermProvider#key_vault}

---

##### `LogAnalyticsWorkspace`<sup>Optional</sup> <a name="LogAnalyticsWorkspace" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.logAnalyticsWorkspace"></a>

```go
LogAnalyticsWorkspace interface{}
```

- *Type:* interface{}

log_analytics_workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#log_analytics_workspace AzurermProvider#log_analytics_workspace}

---

##### `MachineLearning`<sup>Optional</sup> <a name="MachineLearning" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.machineLearning"></a>

```go
MachineLearning interface{}
```

- *Type:* interface{}

machine_learning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#machine_learning AzurermProvider#machine_learning}

---

##### `ManagedDisk`<sup>Optional</sup> <a name="ManagedDisk" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.managedDisk"></a>

```go
ManagedDisk interface{}
```

- *Type:* interface{}

managed_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#managed_disk AzurermProvider#managed_disk}

---

##### `Netapp`<sup>Optional</sup> <a name="Netapp" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.netapp"></a>

```go
Netapp interface{}
```

- *Type:* interface{}

netapp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#netapp AzurermProvider#netapp}

---

##### `PostgresqlFlexibleServer`<sup>Optional</sup> <a name="PostgresqlFlexibleServer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.postgresqlFlexibleServer"></a>

```go
PostgresqlFlexibleServer interface{}
```

- *Type:* interface{}

postgresql_flexible_server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#postgresql_flexible_server AzurermProvider#postgresql_flexible_server}

---

##### `RecoveryService`<sup>Optional</sup> <a name="RecoveryService" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.recoveryService"></a>

```go
RecoveryService interface{}
```

- *Type:* interface{}

recovery_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#recovery_service AzurermProvider#recovery_service}

---

##### `RecoveryServicesVaults`<sup>Optional</sup> <a name="RecoveryServicesVaults" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.recoveryServicesVaults"></a>

```go
RecoveryServicesVaults interface{}
```

- *Type:* interface{}

recovery_services_vaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#recovery_services_vaults AzurermProvider#recovery_services_vaults}

---

##### `ResourceGroup`<sup>Optional</sup> <a name="ResourceGroup" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.resourceGroup"></a>

```go
ResourceGroup interface{}
```

- *Type:* interface{}

resource_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#resource_group AzurermProvider#resource_group}

---

##### `Storage`<sup>Optional</sup> <a name="Storage" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.storage"></a>

```go
Storage interface{}
```

- *Type:* interface{}

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#storage AzurermProvider#storage}

---

##### `Subscription`<sup>Optional</sup> <a name="Subscription" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.subscription"></a>

```go
Subscription interface{}
```

- *Type:* interface{}

subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#subscription AzurermProvider#subscription}

---

##### `TemplateDeployment`<sup>Optional</sup> <a name="TemplateDeployment" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.templateDeployment"></a>

```go
TemplateDeployment interface{}
```

- *Type:* interface{}

template_deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#template_deployment AzurermProvider#template_deployment}

---

##### `VirtualMachine`<sup>Optional</sup> <a name="VirtualMachine" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.virtualMachine"></a>

```go
VirtualMachine interface{}
```

- *Type:* interface{}

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#virtual_machine AzurermProvider#virtual_machine}

---

##### `VirtualMachineScaleSet`<sup>Optional</sup> <a name="VirtualMachineScaleSet" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.virtualMachineScaleSet"></a>

```go
VirtualMachineScaleSet interface{}
```

- *Type:* interface{}

virtual_machine_scale_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#virtual_machine_scale_set AzurermProvider#virtual_machine_scale_set}

---

### AzurermProviderFeaturesApiManagement <a name="AzurermProviderFeaturesApiManagement" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/provider"

&provider.AzurermProviderFeaturesApiManagement {
	PurgeSoftDeleteOnDestroy: interface{},
	RecoverSoftDeleted: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.property.purgeSoftDeleteOnDestroy">PurgeSoftDeleteOnDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.property.recoverSoftDeleted">RecoverSoftDeleted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}. |

---

##### `PurgeSoftDeleteOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeleteOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.property.purgeSoftDeleteOnDestroy"></a>

```go
PurgeSoftDeleteOnDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}.

---

##### `RecoverSoftDeleted`<sup>Optional</sup> <a name="RecoverSoftDeleted" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.property.recoverSoftDeleted"></a>

```go
RecoverSoftDeleted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}.

---

### AzurermProviderFeaturesAppConfiguration <a name="AzurermProviderFeaturesAppConfiguration" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/provider"

&provider.AzurermProviderFeaturesAppConfiguration {
	PurgeSoftDeleteOnDestroy: interface{},
	RecoverSoftDeleted: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.property.purgeSoftDeleteOnDestroy">PurgeSoftDeleteOnDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.property.recoverSoftDeleted">RecoverSoftDeleted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}. |

---

##### `PurgeSoftDeleteOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeleteOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.property.purgeSoftDeleteOnDestroy"></a>

```go
PurgeSoftDeleteOnDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}.

---

##### `RecoverSoftDeleted`<sup>Optional</sup> <a name="RecoverSoftDeleted" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.property.recoverSoftDeleted"></a>

```go
RecoverSoftDeleted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}.

---

### AzurermProviderFeaturesApplicationInsights <a name="AzurermProviderFeaturesApplicationInsights" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/provider"

&provider.AzurermProviderFeaturesApplicationInsights {
	DisableGeneratedRule: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights.property.disableGeneratedRule">DisableGeneratedRule</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#disable_generated_rule AzurermProvider#disable_generated_rule}. |

---

##### `DisableGeneratedRule`<sup>Optional</sup> <a name="DisableGeneratedRule" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights.property.disableGeneratedRule"></a>

```go
DisableGeneratedRule interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#disable_generated_rule AzurermProvider#disable_generated_rule}.

---

### AzurermProviderFeaturesCognitiveAccount <a name="AzurermProviderFeaturesCognitiveAccount" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/provider"

&provider.AzurermProviderFeaturesCognitiveAccount {
	PurgeSoftDeleteOnDestroy: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount.property.purgeSoftDeleteOnDestroy">PurgeSoftDeleteOnDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}. |

---

##### `PurgeSoftDeleteOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeleteOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount.property.purgeSoftDeleteOnDestroy"></a>

```go
PurgeSoftDeleteOnDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}.

---

### AzurermProviderFeaturesKeyVault <a name="AzurermProviderFeaturesKeyVault" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/provider"

&provider.AzurermProviderFeaturesKeyVault {
	PurgeSoftDeletedCertificatesOnDestroy: interface{},
	PurgeSoftDeletedHardwareSecurityModuleKeysOnDestroy: interface{},
	PurgeSoftDeletedHardwareSecurityModulesOnDestroy: interface{},
	PurgeSoftDeletedKeysOnDestroy: interface{},
	PurgeSoftDeletedSecretsOnDestroy: interface{},
	PurgeSoftDeleteOnDestroy: interface{},
	RecoverSoftDeletedCertificates: interface{},
	RecoverSoftDeletedHardwareSecurityModuleKeys: interface{},
	RecoverSoftDeletedKeys: interface{},
	RecoverSoftDeletedKeyVaults: interface{},
	RecoverSoftDeletedSecrets: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedCertificatesOnDestroy">PurgeSoftDeletedCertificatesOnDestroy</a></code> | <code>interface{}</code> | When enabled soft-deleted `azurerm_key_vault_certificate` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedHardwareSecurityModuleKeysOnDestroy">PurgeSoftDeletedHardwareSecurityModuleKeysOnDestroy</a></code> | <code>interface{}</code> | When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module_key` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedHardwareSecurityModulesOnDestroy">PurgeSoftDeletedHardwareSecurityModulesOnDestroy</a></code> | <code>interface{}</code> | When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedKeysOnDestroy">PurgeSoftDeletedKeysOnDestroy</a></code> | <code>interface{}</code> | When enabled soft-deleted `azurerm_key_vault_key` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedSecretsOnDestroy">PurgeSoftDeletedSecretsOnDestroy</a></code> | <code>interface{}</code> | When enabled soft-deleted `azurerm_key_vault_secret` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeleteOnDestroy">PurgeSoftDeleteOnDestroy</a></code> | <code>interface{}</code> | When enabled soft-deleted `azurerm_key_vault` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedCertificates">RecoverSoftDeletedCertificates</a></code> | <code>interface{}</code> | When enabled soft-deleted `azurerm_key_vault_certificate` resources will be restored, instead of creating new ones. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedHardwareSecurityModuleKeys">RecoverSoftDeletedHardwareSecurityModuleKeys</a></code> | <code>interface{}</code> | When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module_key` resources will be restored, instead of creating new ones. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedKeys">RecoverSoftDeletedKeys</a></code> | <code>interface{}</code> | When enabled soft-deleted `azurerm_key_vault_key` resources will be restored, instead of creating new ones. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedKeyVaults">RecoverSoftDeletedKeyVaults</a></code> | <code>interface{}</code> | When enabled soft-deleted `azurerm_key_vault` resources will be restored, instead of creating new ones. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedSecrets">RecoverSoftDeletedSecrets</a></code> | <code>interface{}</code> | When enabled soft-deleted `azurerm_key_vault_secret` resources will be restored, instead of creating new ones. |

---

##### `PurgeSoftDeletedCertificatesOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeletedCertificatesOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedCertificatesOnDestroy"></a>

```go
PurgeSoftDeletedCertificatesOnDestroy interface{}
```

- *Type:* interface{}

When enabled soft-deleted `azurerm_key_vault_certificate` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#purge_soft_deleted_certificates_on_destroy AzurermProvider#purge_soft_deleted_certificates_on_destroy}

---

##### `PurgeSoftDeletedHardwareSecurityModuleKeysOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeletedHardwareSecurityModuleKeysOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedHardwareSecurityModuleKeysOnDestroy"></a>

```go
PurgeSoftDeletedHardwareSecurityModuleKeysOnDestroy interface{}
```

- *Type:* interface{}

When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module_key` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#purge_soft_deleted_hardware_security_module_keys_on_destroy AzurermProvider#purge_soft_deleted_hardware_security_module_keys_on_destroy}

---

##### `PurgeSoftDeletedHardwareSecurityModulesOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeletedHardwareSecurityModulesOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedHardwareSecurityModulesOnDestroy"></a>

```go
PurgeSoftDeletedHardwareSecurityModulesOnDestroy interface{}
```

- *Type:* interface{}

When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#purge_soft_deleted_hardware_security_modules_on_destroy AzurermProvider#purge_soft_deleted_hardware_security_modules_on_destroy}

---

##### `PurgeSoftDeletedKeysOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeletedKeysOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedKeysOnDestroy"></a>

```go
PurgeSoftDeletedKeysOnDestroy interface{}
```

- *Type:* interface{}

When enabled soft-deleted `azurerm_key_vault_key` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#purge_soft_deleted_keys_on_destroy AzurermProvider#purge_soft_deleted_keys_on_destroy}

---

##### `PurgeSoftDeletedSecretsOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeletedSecretsOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedSecretsOnDestroy"></a>

```go
PurgeSoftDeletedSecretsOnDestroy interface{}
```

- *Type:* interface{}

When enabled soft-deleted `azurerm_key_vault_secret` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#purge_soft_deleted_secrets_on_destroy AzurermProvider#purge_soft_deleted_secrets_on_destroy}

---

##### `PurgeSoftDeleteOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeleteOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeleteOnDestroy"></a>

```go
PurgeSoftDeleteOnDestroy interface{}
```

- *Type:* interface{}

When enabled soft-deleted `azurerm_key_vault` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}

---

##### `RecoverSoftDeletedCertificates`<sup>Optional</sup> <a name="RecoverSoftDeletedCertificates" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedCertificates"></a>

```go
RecoverSoftDeletedCertificates interface{}
```

- *Type:* interface{}

When enabled soft-deleted `azurerm_key_vault_certificate` resources will be restored, instead of creating new ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#recover_soft_deleted_certificates AzurermProvider#recover_soft_deleted_certificates}

---

##### `RecoverSoftDeletedHardwareSecurityModuleKeys`<sup>Optional</sup> <a name="RecoverSoftDeletedHardwareSecurityModuleKeys" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedHardwareSecurityModuleKeys"></a>

```go
RecoverSoftDeletedHardwareSecurityModuleKeys interface{}
```

- *Type:* interface{}

When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module_key` resources will be restored, instead of creating new ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#recover_soft_deleted_hardware_security_module_keys AzurermProvider#recover_soft_deleted_hardware_security_module_keys}

---

##### `RecoverSoftDeletedKeys`<sup>Optional</sup> <a name="RecoverSoftDeletedKeys" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedKeys"></a>

```go
RecoverSoftDeletedKeys interface{}
```

- *Type:* interface{}

When enabled soft-deleted `azurerm_key_vault_key` resources will be restored, instead of creating new ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#recover_soft_deleted_keys AzurermProvider#recover_soft_deleted_keys}

---

##### `RecoverSoftDeletedKeyVaults`<sup>Optional</sup> <a name="RecoverSoftDeletedKeyVaults" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedKeyVaults"></a>

```go
RecoverSoftDeletedKeyVaults interface{}
```

- *Type:* interface{}

When enabled soft-deleted `azurerm_key_vault` resources will be restored, instead of creating new ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#recover_soft_deleted_key_vaults AzurermProvider#recover_soft_deleted_key_vaults}

---

##### `RecoverSoftDeletedSecrets`<sup>Optional</sup> <a name="RecoverSoftDeletedSecrets" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedSecrets"></a>

```go
RecoverSoftDeletedSecrets interface{}
```

- *Type:* interface{}

When enabled soft-deleted `azurerm_key_vault_secret` resources will be restored, instead of creating new ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#recover_soft_deleted_secrets AzurermProvider#recover_soft_deleted_secrets}

---

### AzurermProviderFeaturesLogAnalyticsWorkspace <a name="AzurermProviderFeaturesLogAnalyticsWorkspace" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/provider"

&provider.AzurermProviderFeaturesLogAnalyticsWorkspace {
	PermanentlyDeleteOnDestroy: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace.property.permanentlyDeleteOnDestroy">PermanentlyDeleteOnDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#permanently_delete_on_destroy AzurermProvider#permanently_delete_on_destroy}. |

---

##### `PermanentlyDeleteOnDestroy`<sup>Optional</sup> <a name="PermanentlyDeleteOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace.property.permanentlyDeleteOnDestroy"></a>

```go
PermanentlyDeleteOnDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#permanently_delete_on_destroy AzurermProvider#permanently_delete_on_destroy}.

---

### AzurermProviderFeaturesMachineLearning <a name="AzurermProviderFeaturesMachineLearning" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesMachineLearning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesMachineLearning.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/provider"

&provider.AzurermProviderFeaturesMachineLearning {
	PurgeSoftDeletedWorkspaceOnDestroy: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesMachineLearning.property.purgeSoftDeletedWorkspaceOnDestroy">PurgeSoftDeletedWorkspaceOnDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#purge_soft_deleted_workspace_on_destroy AzurermProvider#purge_soft_deleted_workspace_on_destroy}. |

---

##### `PurgeSoftDeletedWorkspaceOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeletedWorkspaceOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesMachineLearning.property.purgeSoftDeletedWorkspaceOnDestroy"></a>

```go
PurgeSoftDeletedWorkspaceOnDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#purge_soft_deleted_workspace_on_destroy AzurermProvider#purge_soft_deleted_workspace_on_destroy}.

---

### AzurermProviderFeaturesManagedDisk <a name="AzurermProviderFeaturesManagedDisk" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/provider"

&provider.AzurermProviderFeaturesManagedDisk {
	ExpandWithoutDowntime: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk.property.expandWithoutDowntime">ExpandWithoutDowntime</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#expand_without_downtime AzurermProvider#expand_without_downtime}. |

---

##### `ExpandWithoutDowntime`<sup>Optional</sup> <a name="ExpandWithoutDowntime" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk.property.expandWithoutDowntime"></a>

```go
ExpandWithoutDowntime interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#expand_without_downtime AzurermProvider#expand_without_downtime}.

---

### AzurermProviderFeaturesNetapp <a name="AzurermProviderFeaturesNetapp" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesNetapp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesNetapp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/provider"

&provider.AzurermProviderFeaturesNetapp {
	DeleteBackupsOnBackupVaultDestroy: interface{},
	PreventVolumeDestruction: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesNetapp.property.deleteBackupsOnBackupVaultDestroy">DeleteBackupsOnBackupVaultDestroy</a></code> | <code>interface{}</code> | When enabled, backups will be deleted when the `azurerm_netapp_backup_vault` resource is destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesNetapp.property.preventVolumeDestruction">PreventVolumeDestruction</a></code> | <code>interface{}</code> | When enabled, the volume will not be destroyed, safeguarding from severe data loss. |

---

##### `DeleteBackupsOnBackupVaultDestroy`<sup>Optional</sup> <a name="DeleteBackupsOnBackupVaultDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesNetapp.property.deleteBackupsOnBackupVaultDestroy"></a>

```go
DeleteBackupsOnBackupVaultDestroy interface{}
```

- *Type:* interface{}

When enabled, backups will be deleted when the `azurerm_netapp_backup_vault` resource is destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#delete_backups_on_backup_vault_destroy AzurermProvider#delete_backups_on_backup_vault_destroy}

---

##### `PreventVolumeDestruction`<sup>Optional</sup> <a name="PreventVolumeDestruction" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesNetapp.property.preventVolumeDestruction"></a>

```go
PreventVolumeDestruction interface{}
```

- *Type:* interface{}

When enabled, the volume will not be destroyed, safeguarding from severe data loss.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#prevent_volume_destruction AzurermProvider#prevent_volume_destruction}

---

### AzurermProviderFeaturesPostgresqlFlexibleServer <a name="AzurermProviderFeaturesPostgresqlFlexibleServer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesPostgresqlFlexibleServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesPostgresqlFlexibleServer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/provider"

&provider.AzurermProviderFeaturesPostgresqlFlexibleServer {
	RestartServerOnConfigurationValueChange: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesPostgresqlFlexibleServer.property.restartServerOnConfigurationValueChange">RestartServerOnConfigurationValueChange</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#restart_server_on_configuration_value_change AzurermProvider#restart_server_on_configuration_value_change}. |

---

##### `RestartServerOnConfigurationValueChange`<sup>Optional</sup> <a name="RestartServerOnConfigurationValueChange" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesPostgresqlFlexibleServer.property.restartServerOnConfigurationValueChange"></a>

```go
RestartServerOnConfigurationValueChange interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#restart_server_on_configuration_value_change AzurermProvider#restart_server_on_configuration_value_change}.

---

### AzurermProviderFeaturesRecoveryService <a name="AzurermProviderFeaturesRecoveryService" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/provider"

&provider.AzurermProviderFeaturesRecoveryService {
	PurgeProtectedItemsFromVaultOnDestroy: interface{},
	VmBackupStopProtectionAndRetainDataOnDestroy: interface{},
	VmBackupSuspendProtectionAndRetainDataOnDestroy: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.property.purgeProtectedItemsFromVaultOnDestroy">PurgeProtectedItemsFromVaultOnDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#purge_protected_items_from_vault_on_destroy AzurermProvider#purge_protected_items_from_vault_on_destroy}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.property.vmBackupStopProtectionAndRetainDataOnDestroy">VmBackupStopProtectionAndRetainDataOnDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#vm_backup_stop_protection_and_retain_data_on_destroy AzurermProvider#vm_backup_stop_protection_and_retain_data_on_destroy}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.property.vmBackupSuspendProtectionAndRetainDataOnDestroy">VmBackupSuspendProtectionAndRetainDataOnDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#vm_backup_suspend_protection_and_retain_data_on_destroy AzurermProvider#vm_backup_suspend_protection_and_retain_data_on_destroy}. |

---

##### `PurgeProtectedItemsFromVaultOnDestroy`<sup>Optional</sup> <a name="PurgeProtectedItemsFromVaultOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.property.purgeProtectedItemsFromVaultOnDestroy"></a>

```go
PurgeProtectedItemsFromVaultOnDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#purge_protected_items_from_vault_on_destroy AzurermProvider#purge_protected_items_from_vault_on_destroy}.

---

##### `VmBackupStopProtectionAndRetainDataOnDestroy`<sup>Optional</sup> <a name="VmBackupStopProtectionAndRetainDataOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.property.vmBackupStopProtectionAndRetainDataOnDestroy"></a>

```go
VmBackupStopProtectionAndRetainDataOnDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#vm_backup_stop_protection_and_retain_data_on_destroy AzurermProvider#vm_backup_stop_protection_and_retain_data_on_destroy}.

---

##### `VmBackupSuspendProtectionAndRetainDataOnDestroy`<sup>Optional</sup> <a name="VmBackupSuspendProtectionAndRetainDataOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.property.vmBackupSuspendProtectionAndRetainDataOnDestroy"></a>

```go
VmBackupSuspendProtectionAndRetainDataOnDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#vm_backup_suspend_protection_and_retain_data_on_destroy AzurermProvider#vm_backup_suspend_protection_and_retain_data_on_destroy}.

---

### AzurermProviderFeaturesRecoveryServicesVaults <a name="AzurermProviderFeaturesRecoveryServicesVaults" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryServicesVaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryServicesVaults.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/provider"

&provider.AzurermProviderFeaturesRecoveryServicesVaults {
	RecoverSoftDeletedBackupProtectedVm: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryServicesVaults.property.recoverSoftDeletedBackupProtectedVm">RecoverSoftDeletedBackupProtectedVm</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#recover_soft_deleted_backup_protected_vm AzurermProvider#recover_soft_deleted_backup_protected_vm}. |

---

##### `RecoverSoftDeletedBackupProtectedVm`<sup>Optional</sup> <a name="RecoverSoftDeletedBackupProtectedVm" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryServicesVaults.property.recoverSoftDeletedBackupProtectedVm"></a>

```go
RecoverSoftDeletedBackupProtectedVm interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#recover_soft_deleted_backup_protected_vm AzurermProvider#recover_soft_deleted_backup_protected_vm}.

---

### AzurermProviderFeaturesResourceGroup <a name="AzurermProviderFeaturesResourceGroup" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/provider"

&provider.AzurermProviderFeaturesResourceGroup {
	PreventDeletionIfContainsResources: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup.property.preventDeletionIfContainsResources">PreventDeletionIfContainsResources</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#prevent_deletion_if_contains_resources AzurermProvider#prevent_deletion_if_contains_resources}. |

---

##### `PreventDeletionIfContainsResources`<sup>Optional</sup> <a name="PreventDeletionIfContainsResources" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup.property.preventDeletionIfContainsResources"></a>

```go
PreventDeletionIfContainsResources interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#prevent_deletion_if_contains_resources AzurermProvider#prevent_deletion_if_contains_resources}.

---

### AzurermProviderFeaturesStorage <a name="AzurermProviderFeaturesStorage" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesStorage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/provider"

&provider.AzurermProviderFeaturesStorage {
	DataPlaneAvailable: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesStorage.property.dataPlaneAvailable">DataPlaneAvailable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#data_plane_available AzurermProvider#data_plane_available}. |

---

##### `DataPlaneAvailable`<sup>Optional</sup> <a name="DataPlaneAvailable" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesStorage.property.dataPlaneAvailable"></a>

```go
DataPlaneAvailable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#data_plane_available AzurermProvider#data_plane_available}.

---

### AzurermProviderFeaturesSubscription <a name="AzurermProviderFeaturesSubscription" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesSubscription"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesSubscription.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/provider"

&provider.AzurermProviderFeaturesSubscription {
	PreventCancellationOnDestroy: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesSubscription.property.preventCancellationOnDestroy">PreventCancellationOnDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#prevent_cancellation_on_destroy AzurermProvider#prevent_cancellation_on_destroy}. |

---

##### `PreventCancellationOnDestroy`<sup>Optional</sup> <a name="PreventCancellationOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesSubscription.property.preventCancellationOnDestroy"></a>

```go
PreventCancellationOnDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#prevent_cancellation_on_destroy AzurermProvider#prevent_cancellation_on_destroy}.

---

### AzurermProviderFeaturesTemplateDeployment <a name="AzurermProviderFeaturesTemplateDeployment" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/provider"

&provider.AzurermProviderFeaturesTemplateDeployment {
	DeleteNestedItemsDuringDeletion: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment.property.deleteNestedItemsDuringDeletion">DeleteNestedItemsDuringDeletion</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#delete_nested_items_during_deletion AzurermProvider#delete_nested_items_during_deletion}. |

---

##### `DeleteNestedItemsDuringDeletion`<sup>Required</sup> <a name="DeleteNestedItemsDuringDeletion" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment.property.deleteNestedItemsDuringDeletion"></a>

```go
DeleteNestedItemsDuringDeletion interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#delete_nested_items_during_deletion AzurermProvider#delete_nested_items_during_deletion}.

---

### AzurermProviderFeaturesVirtualMachine <a name="AzurermProviderFeaturesVirtualMachine" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/provider"

&provider.AzurermProviderFeaturesVirtualMachine {
	DeleteOsDiskOnDeletion: interface{},
	DetachImplicitDataDiskOnDeletion: interface{},
	GracefulShutdown: interface{},
	SkipShutdownAndForceDelete: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.deleteOsDiskOnDeletion">DeleteOsDiskOnDeletion</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#delete_os_disk_on_deletion AzurermProvider#delete_os_disk_on_deletion}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.detachImplicitDataDiskOnDeletion">DetachImplicitDataDiskOnDeletion</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#detach_implicit_data_disk_on_deletion AzurermProvider#detach_implicit_data_disk_on_deletion}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.gracefulShutdown">GracefulShutdown</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#graceful_shutdown AzurermProvider#graceful_shutdown}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.skipShutdownAndForceDelete">SkipShutdownAndForceDelete</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#skip_shutdown_and_force_delete AzurermProvider#skip_shutdown_and_force_delete}. |

---

##### `DeleteOsDiskOnDeletion`<sup>Optional</sup> <a name="DeleteOsDiskOnDeletion" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.deleteOsDiskOnDeletion"></a>

```go
DeleteOsDiskOnDeletion interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#delete_os_disk_on_deletion AzurermProvider#delete_os_disk_on_deletion}.

---

##### `DetachImplicitDataDiskOnDeletion`<sup>Optional</sup> <a name="DetachImplicitDataDiskOnDeletion" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.detachImplicitDataDiskOnDeletion"></a>

```go
DetachImplicitDataDiskOnDeletion interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#detach_implicit_data_disk_on_deletion AzurermProvider#detach_implicit_data_disk_on_deletion}.

---

##### `GracefulShutdown`<sup>Optional</sup> <a name="GracefulShutdown" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.gracefulShutdown"></a>

```go
GracefulShutdown interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#graceful_shutdown AzurermProvider#graceful_shutdown}.

---

##### `SkipShutdownAndForceDelete`<sup>Optional</sup> <a name="SkipShutdownAndForceDelete" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.skipShutdownAndForceDelete"></a>

```go
SkipShutdownAndForceDelete interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#skip_shutdown_and_force_delete AzurermProvider#skip_shutdown_and_force_delete}.

---

### AzurermProviderFeaturesVirtualMachineScaleSet <a name="AzurermProviderFeaturesVirtualMachineScaleSet" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/provider"

&provider.AzurermProviderFeaturesVirtualMachineScaleSet {
	ForceDelete: interface{},
	ReimageOnManualUpgrade: interface{},
	RollInstancesWhenRequired: interface{},
	ScaleToZeroBeforeDeletion: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#force_delete AzurermProvider#force_delete}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.reimageOnManualUpgrade">ReimageOnManualUpgrade</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#reimage_on_manual_upgrade AzurermProvider#reimage_on_manual_upgrade}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.rollInstancesWhenRequired">RollInstancesWhenRequired</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#roll_instances_when_required AzurermProvider#roll_instances_when_required}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.scaleToZeroBeforeDeletion">ScaleToZeroBeforeDeletion</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#scale_to_zero_before_deletion AzurermProvider#scale_to_zero_before_deletion}. |

---

##### `ForceDelete`<sup>Optional</sup> <a name="ForceDelete" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.forceDelete"></a>

```go
ForceDelete interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#force_delete AzurermProvider#force_delete}.

---

##### `ReimageOnManualUpgrade`<sup>Optional</sup> <a name="ReimageOnManualUpgrade" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.reimageOnManualUpgrade"></a>

```go
ReimageOnManualUpgrade interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#reimage_on_manual_upgrade AzurermProvider#reimage_on_manual_upgrade}.

---

##### `RollInstancesWhenRequired`<sup>Optional</sup> <a name="RollInstancesWhenRequired" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.rollInstancesWhenRequired"></a>

```go
RollInstancesWhenRequired interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#roll_instances_when_required AzurermProvider#roll_instances_when_required}.

---

##### `ScaleToZeroBeforeDeletion`<sup>Optional</sup> <a name="ScaleToZeroBeforeDeletion" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.scaleToZeroBeforeDeletion"></a>

```go
ScaleToZeroBeforeDeletion interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs#scale_to_zero_before_deletion AzurermProvider#scale_to_zero_before_deletion}.

---



