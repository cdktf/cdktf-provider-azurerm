# `azurerm_storage_account`

Refer to the Terraform Registory for docs: [`azurerm_storage_account`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account).

# `storageAccount` Submodule <a name="`storageAccount` Submodule" id="@cdktf/provider-azurerm.storageAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageAccount <a name="StorageAccount" id="@cdktf/provider-azurerm.storageAccount.StorageAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account azurerm_storage_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccount(scope Construct, id *string, config StorageAccountConfig) StorageAccount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig">StorageAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig">StorageAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putAzureFilesAuthentication">PutAzureFilesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putBlobProperties">PutBlobProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomDomain">PutCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomerManagedKey">PutCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putImmutabilityPolicy">PutImmutabilityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putNetworkRules">PutNetworkRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putQueueProperties">PutQueueProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putRouting">PutRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putSasPolicy">PutSasPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putShareProperties">PutShareProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putStaticWebsite">PutStaticWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAccessTier">ResetAccessTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAccountKind">ResetAccountKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAllowedCopyScope">ResetAllowedCopyScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAllowNestedItemsToBePublic">ResetAllowNestedItemsToBePublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAzureFilesAuthentication">ResetAzureFilesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetBlobProperties">ResetBlobProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetCrossTenantReplicationEnabled">ResetCrossTenantReplicationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetCustomDomain">ResetCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetCustomerManagedKey">ResetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetDefaultToOauthAuthentication">ResetDefaultToOauthAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetEdgeZone">ResetEdgeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetEnableHttpsTrafficOnly">ResetEnableHttpsTrafficOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetImmutabilityPolicy">ResetImmutabilityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetInfrastructureEncryptionEnabled">ResetInfrastructureEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetIsHnsEnabled">ResetIsHnsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetLargeFileShareEnabled">ResetLargeFileShareEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetMinTlsVersion">ResetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetNetworkRules">ResetNetworkRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetNfsv3Enabled">ResetNfsv3Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetQueueEncryptionKeyType">ResetQueueEncryptionKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetQueueProperties">ResetQueueProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetRouting">ResetRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetSasPolicy">ResetSasPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetSftpEnabled">ResetSftpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetSharedAccessKeyEnabled">ResetSharedAccessKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetShareProperties">ResetShareProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetStaticWebsite">ResetStaticWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetTableEncryptionKeyType">ResetTableEncryptionKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAzureFilesAuthentication` <a name="PutAzureFilesAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putAzureFilesAuthentication"></a>

```go
func PutAzureFilesAuthentication(value StorageAccountAzureFilesAuthentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putAzureFilesAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a>

---

##### `PutBlobProperties` <a name="PutBlobProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putBlobProperties"></a>

```go
func PutBlobProperties(value StorageAccountBlobProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putBlobProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a>

---

##### `PutCustomDomain` <a name="PutCustomDomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomDomain"></a>

```go
func PutCustomDomain(value StorageAccountCustomDomain)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomDomain.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a>

---

##### `PutCustomerManagedKey` <a name="PutCustomerManagedKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomerManagedKey"></a>

```go
func PutCustomerManagedKey(value StorageAccountCustomerManagedKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomerManagedKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putIdentity"></a>

```go
func PutIdentity(value StorageAccountIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a>

---

##### `PutImmutabilityPolicy` <a name="PutImmutabilityPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putImmutabilityPolicy"></a>

```go
func PutImmutabilityPolicy(value StorageAccountImmutabilityPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putImmutabilityPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a>

---

##### `PutNetworkRules` <a name="PutNetworkRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putNetworkRules"></a>

```go
func PutNetworkRules(value StorageAccountNetworkRules)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putNetworkRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a>

---

##### `PutQueueProperties` <a name="PutQueueProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putQueueProperties"></a>

```go
func PutQueueProperties(value StorageAccountQueueProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putQueueProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a>

---

##### `PutRouting` <a name="PutRouting" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putRouting"></a>

```go
func PutRouting(value StorageAccountRouting)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a>

---

##### `PutSasPolicy` <a name="PutSasPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putSasPolicy"></a>

```go
func PutSasPolicy(value StorageAccountSasPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putSasPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a>

---

##### `PutShareProperties` <a name="PutShareProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putShareProperties"></a>

```go
func PutShareProperties(value StorageAccountShareProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putShareProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a>

---

##### `PutStaticWebsite` <a name="PutStaticWebsite" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putStaticWebsite"></a>

```go
func PutStaticWebsite(value StorageAccountStaticWebsite)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putStaticWebsite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putTimeouts"></a>

```go
func PutTimeouts(value StorageAccountTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a>

---

##### `ResetAccessTier` <a name="ResetAccessTier" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAccessTier"></a>

```go
func ResetAccessTier()
```

##### `ResetAccountKind` <a name="ResetAccountKind" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAccountKind"></a>

```go
func ResetAccountKind()
```

##### `ResetAllowedCopyScope` <a name="ResetAllowedCopyScope" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAllowedCopyScope"></a>

```go
func ResetAllowedCopyScope()
```

##### `ResetAllowNestedItemsToBePublic` <a name="ResetAllowNestedItemsToBePublic" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAllowNestedItemsToBePublic"></a>

```go
func ResetAllowNestedItemsToBePublic()
```

##### `ResetAzureFilesAuthentication` <a name="ResetAzureFilesAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAzureFilesAuthentication"></a>

```go
func ResetAzureFilesAuthentication()
```

##### `ResetBlobProperties` <a name="ResetBlobProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetBlobProperties"></a>

```go
func ResetBlobProperties()
```

##### `ResetCrossTenantReplicationEnabled` <a name="ResetCrossTenantReplicationEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetCrossTenantReplicationEnabled"></a>

```go
func ResetCrossTenantReplicationEnabled()
```

##### `ResetCustomDomain` <a name="ResetCustomDomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetCustomDomain"></a>

```go
func ResetCustomDomain()
```

##### `ResetCustomerManagedKey` <a name="ResetCustomerManagedKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetCustomerManagedKey"></a>

```go
func ResetCustomerManagedKey()
```

##### `ResetDefaultToOauthAuthentication` <a name="ResetDefaultToOauthAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetDefaultToOauthAuthentication"></a>

```go
func ResetDefaultToOauthAuthentication()
```

##### `ResetEdgeZone` <a name="ResetEdgeZone" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetEdgeZone"></a>

```go
func ResetEdgeZone()
```

##### `ResetEnableHttpsTrafficOnly` <a name="ResetEnableHttpsTrafficOnly" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetEnableHttpsTrafficOnly"></a>

```go
func ResetEnableHttpsTrafficOnly()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetImmutabilityPolicy` <a name="ResetImmutabilityPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetImmutabilityPolicy"></a>

```go
func ResetImmutabilityPolicy()
```

##### `ResetInfrastructureEncryptionEnabled` <a name="ResetInfrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetInfrastructureEncryptionEnabled"></a>

```go
func ResetInfrastructureEncryptionEnabled()
```

##### `ResetIsHnsEnabled` <a name="ResetIsHnsEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetIsHnsEnabled"></a>

```go
func ResetIsHnsEnabled()
```

##### `ResetLargeFileShareEnabled` <a name="ResetLargeFileShareEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetLargeFileShareEnabled"></a>

```go
func ResetLargeFileShareEnabled()
```

##### `ResetMinTlsVersion` <a name="ResetMinTlsVersion" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetMinTlsVersion"></a>

```go
func ResetMinTlsVersion()
```

##### `ResetNetworkRules` <a name="ResetNetworkRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetNetworkRules"></a>

```go
func ResetNetworkRules()
```

##### `ResetNfsv3Enabled` <a name="ResetNfsv3Enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetNfsv3Enabled"></a>

```go
func ResetNfsv3Enabled()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetPublicNetworkAccessEnabled"></a>

```go
func ResetPublicNetworkAccessEnabled()
```

##### `ResetQueueEncryptionKeyType` <a name="ResetQueueEncryptionKeyType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetQueueEncryptionKeyType"></a>

```go
func ResetQueueEncryptionKeyType()
```

##### `ResetQueueProperties` <a name="ResetQueueProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetQueueProperties"></a>

```go
func ResetQueueProperties()
```

##### `ResetRouting` <a name="ResetRouting" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetRouting"></a>

```go
func ResetRouting()
```

##### `ResetSasPolicy` <a name="ResetSasPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetSasPolicy"></a>

```go
func ResetSasPolicy()
```

##### `ResetSftpEnabled` <a name="ResetSftpEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetSftpEnabled"></a>

```go
func ResetSftpEnabled()
```

##### `ResetSharedAccessKeyEnabled` <a name="ResetSharedAccessKeyEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetSharedAccessKeyEnabled"></a>

```go
func ResetSharedAccessKeyEnabled()
```

##### `ResetShareProperties` <a name="ResetShareProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetShareProperties"></a>

```go
func ResetShareProperties()
```

##### `ResetStaticWebsite` <a name="ResetStaticWebsite" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetStaticWebsite"></a>

```go
func ResetStaticWebsite()
```

##### `ResetTableEncryptionKeyType` <a name="ResetTableEncryptionKeyType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetTableEncryptionKeyType"></a>

```go
func ResetTableEncryptionKeyType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.StorageAccount_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.StorageAccount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.StorageAccount_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.azureFilesAuthentication">AzureFilesAuthentication</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference">StorageAccountAzureFilesAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.blobProperties">BlobProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference">StorageAccountBlobPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customDomain">CustomDomain</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference">StorageAccountCustomDomainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customerManagedKey">CustomerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference">StorageAccountCustomerManagedKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference">StorageAccountIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.immutabilityPolicy">ImmutabilityPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference">StorageAccountImmutabilityPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.networkRules">NetworkRules</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference">StorageAccountNetworkRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryAccessKey">PrimaryAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobConnectionString">PrimaryBlobConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobEndpoint">PrimaryBlobEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobHost">PrimaryBlobHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryConnectionString">PrimaryConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsEndpoint">PrimaryDfsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsHost">PrimaryDfsHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileEndpoint">PrimaryFileEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileHost">PrimaryFileHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryLocation">PrimaryLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueEndpoint">PrimaryQueueEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueHost">PrimaryQueueHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableEndpoint">PrimaryTableEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableHost">PrimaryTableHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebEndpoint">PrimaryWebEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebHost">PrimaryWebHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueProperties">QueueProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference">StorageAccountQueuePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.routing">Routing</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference">StorageAccountRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sasPolicy">SasPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference">StorageAccountSasPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryAccessKey">SecondaryAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobConnectionString">SecondaryBlobConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobEndpoint">SecondaryBlobEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobHost">SecondaryBlobHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryConnectionString">SecondaryConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsEndpoint">SecondaryDfsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsHost">SecondaryDfsHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileEndpoint">SecondaryFileEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileHost">SecondaryFileHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryLocation">SecondaryLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueEndpoint">SecondaryQueueEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueHost">SecondaryQueueHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableEndpoint">SecondaryTableEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableHost">SecondaryTableHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebEndpoint">SecondaryWebEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebHost">SecondaryWebHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.shareProperties">ShareProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference">StorageAccountSharePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.staticWebsite">StaticWebsite</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference">StorageAccountStaticWebsiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference">StorageAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accessTierInput">AccessTierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountKindInput">AccountKindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountReplicationTypeInput">AccountReplicationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountTierInput">AccountTierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowedCopyScopeInput">AllowedCopyScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowNestedItemsToBePublicInput">AllowNestedItemsToBePublicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.azureFilesAuthenticationInput">AzureFilesAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.blobPropertiesInput">BlobPropertiesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.crossTenantReplicationEnabledInput">CrossTenantReplicationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customDomainInput">CustomDomainInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customerManagedKeyInput">CustomerManagedKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.defaultToOauthAuthenticationInput">DefaultToOauthAuthenticationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.edgeZoneInput">EdgeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.enableHttpsTrafficOnlyInput">EnableHttpsTrafficOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.immutabilityPolicyInput">ImmutabilityPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.infrastructureEncryptionEnabledInput">InfrastructureEncryptionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.isHnsEnabledInput">IsHnsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.largeFileShareEnabledInput">LargeFileShareEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.minTlsVersionInput">MinTlsVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.networkRulesInput">NetworkRulesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nfsv3EnabledInput">Nfsv3EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueEncryptionKeyTypeInput">QueueEncryptionKeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queuePropertiesInput">QueuePropertiesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.routingInput">RoutingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sasPolicyInput">SasPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sftpEnabledInput">SftpEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharedAccessKeyEnabledInput">SharedAccessKeyEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharePropertiesInput">SharePropertiesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.staticWebsiteInput">StaticWebsiteInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tableEncryptionKeyTypeInput">TableEncryptionKeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accessTier">AccessTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountKind">AccountKind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountReplicationType">AccountReplicationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountTier">AccountTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowedCopyScope">AllowedCopyScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowNestedItemsToBePublic">AllowNestedItemsToBePublic</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.crossTenantReplicationEnabled">CrossTenantReplicationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.defaultToOauthAuthentication">DefaultToOauthAuthentication</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.edgeZone">EdgeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.enableHttpsTrafficOnly">EnableHttpsTrafficOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.infrastructureEncryptionEnabled">InfrastructureEncryptionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.isHnsEnabled">IsHnsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.largeFileShareEnabled">LargeFileShareEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.minTlsVersion">MinTlsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nfsv3Enabled">Nfsv3Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueEncryptionKeyType">QueueEncryptionKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sftpEnabled">SftpEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharedAccessKeyEnabled">SharedAccessKeyEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tableEncryptionKeyType">TableEncryptionKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AzureFilesAuthentication`<sup>Required</sup> <a name="AzureFilesAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.azureFilesAuthentication"></a>

```go
func AzureFilesAuthentication() StorageAccountAzureFilesAuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference">StorageAccountAzureFilesAuthenticationOutputReference</a>

---

##### `BlobProperties`<sup>Required</sup> <a name="BlobProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.blobProperties"></a>

```go
func BlobProperties() StorageAccountBlobPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference">StorageAccountBlobPropertiesOutputReference</a>

---

##### `CustomDomain`<sup>Required</sup> <a name="CustomDomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customDomain"></a>

```go
func CustomDomain() StorageAccountCustomDomainOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference">StorageAccountCustomDomainOutputReference</a>

---

##### `CustomerManagedKey`<sup>Required</sup> <a name="CustomerManagedKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customerManagedKey"></a>

```go
func CustomerManagedKey() StorageAccountCustomerManagedKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference">StorageAccountCustomerManagedKeyOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.identity"></a>

```go
func Identity() StorageAccountIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference">StorageAccountIdentityOutputReference</a>

---

##### `ImmutabilityPolicy`<sup>Required</sup> <a name="ImmutabilityPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.immutabilityPolicy"></a>

```go
func ImmutabilityPolicy() StorageAccountImmutabilityPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference">StorageAccountImmutabilityPolicyOutputReference</a>

---

##### `NetworkRules`<sup>Required</sup> <a name="NetworkRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.networkRules"></a>

```go
func NetworkRules() StorageAccountNetworkRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference">StorageAccountNetworkRulesOutputReference</a>

---

##### `PrimaryAccessKey`<sup>Required</sup> <a name="PrimaryAccessKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryAccessKey"></a>

```go
func PrimaryAccessKey() *string
```

- *Type:* *string

---

##### `PrimaryBlobConnectionString`<sup>Required</sup> <a name="PrimaryBlobConnectionString" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobConnectionString"></a>

```go
func PrimaryBlobConnectionString() *string
```

- *Type:* *string

---

##### `PrimaryBlobEndpoint`<sup>Required</sup> <a name="PrimaryBlobEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobEndpoint"></a>

```go
func PrimaryBlobEndpoint() *string
```

- *Type:* *string

---

##### `PrimaryBlobHost`<sup>Required</sup> <a name="PrimaryBlobHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobHost"></a>

```go
func PrimaryBlobHost() *string
```

- *Type:* *string

---

##### `PrimaryConnectionString`<sup>Required</sup> <a name="PrimaryConnectionString" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryConnectionString"></a>

```go
func PrimaryConnectionString() *string
```

- *Type:* *string

---

##### `PrimaryDfsEndpoint`<sup>Required</sup> <a name="PrimaryDfsEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsEndpoint"></a>

```go
func PrimaryDfsEndpoint() *string
```

- *Type:* *string

---

##### `PrimaryDfsHost`<sup>Required</sup> <a name="PrimaryDfsHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsHost"></a>

```go
func PrimaryDfsHost() *string
```

- *Type:* *string

---

##### `PrimaryFileEndpoint`<sup>Required</sup> <a name="PrimaryFileEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileEndpoint"></a>

```go
func PrimaryFileEndpoint() *string
```

- *Type:* *string

---

##### `PrimaryFileHost`<sup>Required</sup> <a name="PrimaryFileHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileHost"></a>

```go
func PrimaryFileHost() *string
```

- *Type:* *string

---

##### `PrimaryLocation`<sup>Required</sup> <a name="PrimaryLocation" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryLocation"></a>

```go
func PrimaryLocation() *string
```

- *Type:* *string

---

##### `PrimaryQueueEndpoint`<sup>Required</sup> <a name="PrimaryQueueEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueEndpoint"></a>

```go
func PrimaryQueueEndpoint() *string
```

- *Type:* *string

---

##### `PrimaryQueueHost`<sup>Required</sup> <a name="PrimaryQueueHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueHost"></a>

```go
func PrimaryQueueHost() *string
```

- *Type:* *string

---

##### `PrimaryTableEndpoint`<sup>Required</sup> <a name="PrimaryTableEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableEndpoint"></a>

```go
func PrimaryTableEndpoint() *string
```

- *Type:* *string

---

##### `PrimaryTableHost`<sup>Required</sup> <a name="PrimaryTableHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableHost"></a>

```go
func PrimaryTableHost() *string
```

- *Type:* *string

---

##### `PrimaryWebEndpoint`<sup>Required</sup> <a name="PrimaryWebEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebEndpoint"></a>

```go
func PrimaryWebEndpoint() *string
```

- *Type:* *string

---

##### `PrimaryWebHost`<sup>Required</sup> <a name="PrimaryWebHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebHost"></a>

```go
func PrimaryWebHost() *string
```

- *Type:* *string

---

##### `QueueProperties`<sup>Required</sup> <a name="QueueProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueProperties"></a>

```go
func QueueProperties() StorageAccountQueuePropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference">StorageAccountQueuePropertiesOutputReference</a>

---

##### `Routing`<sup>Required</sup> <a name="Routing" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.routing"></a>

```go
func Routing() StorageAccountRoutingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference">StorageAccountRoutingOutputReference</a>

---

##### `SasPolicy`<sup>Required</sup> <a name="SasPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sasPolicy"></a>

```go
func SasPolicy() StorageAccountSasPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference">StorageAccountSasPolicyOutputReference</a>

---

##### `SecondaryAccessKey`<sup>Required</sup> <a name="SecondaryAccessKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryAccessKey"></a>

```go
func SecondaryAccessKey() *string
```

- *Type:* *string

---

##### `SecondaryBlobConnectionString`<sup>Required</sup> <a name="SecondaryBlobConnectionString" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobConnectionString"></a>

```go
func SecondaryBlobConnectionString() *string
```

- *Type:* *string

---

##### `SecondaryBlobEndpoint`<sup>Required</sup> <a name="SecondaryBlobEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobEndpoint"></a>

```go
func SecondaryBlobEndpoint() *string
```

- *Type:* *string

---

##### `SecondaryBlobHost`<sup>Required</sup> <a name="SecondaryBlobHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobHost"></a>

```go
func SecondaryBlobHost() *string
```

- *Type:* *string

---

##### `SecondaryConnectionString`<sup>Required</sup> <a name="SecondaryConnectionString" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryConnectionString"></a>

```go
func SecondaryConnectionString() *string
```

- *Type:* *string

---

##### `SecondaryDfsEndpoint`<sup>Required</sup> <a name="SecondaryDfsEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsEndpoint"></a>

```go
func SecondaryDfsEndpoint() *string
```

- *Type:* *string

---

##### `SecondaryDfsHost`<sup>Required</sup> <a name="SecondaryDfsHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsHost"></a>

```go
func SecondaryDfsHost() *string
```

- *Type:* *string

---

##### `SecondaryFileEndpoint`<sup>Required</sup> <a name="SecondaryFileEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileEndpoint"></a>

```go
func SecondaryFileEndpoint() *string
```

- *Type:* *string

---

##### `SecondaryFileHost`<sup>Required</sup> <a name="SecondaryFileHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileHost"></a>

```go
func SecondaryFileHost() *string
```

- *Type:* *string

---

##### `SecondaryLocation`<sup>Required</sup> <a name="SecondaryLocation" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryLocation"></a>

```go
func SecondaryLocation() *string
```

- *Type:* *string

---

##### `SecondaryQueueEndpoint`<sup>Required</sup> <a name="SecondaryQueueEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueEndpoint"></a>

```go
func SecondaryQueueEndpoint() *string
```

- *Type:* *string

---

##### `SecondaryQueueHost`<sup>Required</sup> <a name="SecondaryQueueHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueHost"></a>

```go
func SecondaryQueueHost() *string
```

- *Type:* *string

---

##### `SecondaryTableEndpoint`<sup>Required</sup> <a name="SecondaryTableEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableEndpoint"></a>

```go
func SecondaryTableEndpoint() *string
```

- *Type:* *string

---

##### `SecondaryTableHost`<sup>Required</sup> <a name="SecondaryTableHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableHost"></a>

```go
func SecondaryTableHost() *string
```

- *Type:* *string

---

##### `SecondaryWebEndpoint`<sup>Required</sup> <a name="SecondaryWebEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebEndpoint"></a>

```go
func SecondaryWebEndpoint() *string
```

- *Type:* *string

---

##### `SecondaryWebHost`<sup>Required</sup> <a name="SecondaryWebHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebHost"></a>

```go
func SecondaryWebHost() *string
```

- *Type:* *string

---

##### `ShareProperties`<sup>Required</sup> <a name="ShareProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.shareProperties"></a>

```go
func ShareProperties() StorageAccountSharePropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference">StorageAccountSharePropertiesOutputReference</a>

---

##### `StaticWebsite`<sup>Required</sup> <a name="StaticWebsite" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.staticWebsite"></a>

```go
func StaticWebsite() StorageAccountStaticWebsiteOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference">StorageAccountStaticWebsiteOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.timeouts"></a>

```go
func Timeouts() StorageAccountTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference">StorageAccountTimeoutsOutputReference</a>

---

##### `AccessTierInput`<sup>Optional</sup> <a name="AccessTierInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accessTierInput"></a>

```go
func AccessTierInput() *string
```

- *Type:* *string

---

##### `AccountKindInput`<sup>Optional</sup> <a name="AccountKindInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountKindInput"></a>

```go
func AccountKindInput() *string
```

- *Type:* *string

---

##### `AccountReplicationTypeInput`<sup>Optional</sup> <a name="AccountReplicationTypeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountReplicationTypeInput"></a>

```go
func AccountReplicationTypeInput() *string
```

- *Type:* *string

---

##### `AccountTierInput`<sup>Optional</sup> <a name="AccountTierInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountTierInput"></a>

```go
func AccountTierInput() *string
```

- *Type:* *string

---

##### `AllowedCopyScopeInput`<sup>Optional</sup> <a name="AllowedCopyScopeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowedCopyScopeInput"></a>

```go
func AllowedCopyScopeInput() *string
```

- *Type:* *string

---

##### `AllowNestedItemsToBePublicInput`<sup>Optional</sup> <a name="AllowNestedItemsToBePublicInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowNestedItemsToBePublicInput"></a>

```go
func AllowNestedItemsToBePublicInput() interface{}
```

- *Type:* interface{}

---

##### `AzureFilesAuthenticationInput`<sup>Optional</sup> <a name="AzureFilesAuthenticationInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.azureFilesAuthenticationInput"></a>

```go
func AzureFilesAuthenticationInput() StorageAccountAzureFilesAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a>

---

##### `BlobPropertiesInput`<sup>Optional</sup> <a name="BlobPropertiesInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.blobPropertiesInput"></a>

```go
func BlobPropertiesInput() StorageAccountBlobProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a>

---

##### `CrossTenantReplicationEnabledInput`<sup>Optional</sup> <a name="CrossTenantReplicationEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.crossTenantReplicationEnabledInput"></a>

```go
func CrossTenantReplicationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CustomDomainInput`<sup>Optional</sup> <a name="CustomDomainInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customDomainInput"></a>

```go
func CustomDomainInput() StorageAccountCustomDomain
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a>

---

##### `CustomerManagedKeyInput`<sup>Optional</sup> <a name="CustomerManagedKeyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customerManagedKeyInput"></a>

```go
func CustomerManagedKeyInput() StorageAccountCustomerManagedKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a>

---

##### `DefaultToOauthAuthenticationInput`<sup>Optional</sup> <a name="DefaultToOauthAuthenticationInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.defaultToOauthAuthenticationInput"></a>

```go
func DefaultToOauthAuthenticationInput() interface{}
```

- *Type:* interface{}

---

##### `EdgeZoneInput`<sup>Optional</sup> <a name="EdgeZoneInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.edgeZoneInput"></a>

```go
func EdgeZoneInput() *string
```

- *Type:* *string

---

##### `EnableHttpsTrafficOnlyInput`<sup>Optional</sup> <a name="EnableHttpsTrafficOnlyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.enableHttpsTrafficOnlyInput"></a>

```go
func EnableHttpsTrafficOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.identityInput"></a>

```go
func IdentityInput() StorageAccountIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImmutabilityPolicyInput`<sup>Optional</sup> <a name="ImmutabilityPolicyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.immutabilityPolicyInput"></a>

```go
func ImmutabilityPolicyInput() StorageAccountImmutabilityPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a>

---

##### `InfrastructureEncryptionEnabledInput`<sup>Optional</sup> <a name="InfrastructureEncryptionEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.infrastructureEncryptionEnabledInput"></a>

```go
func InfrastructureEncryptionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsHnsEnabledInput`<sup>Optional</sup> <a name="IsHnsEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.isHnsEnabledInput"></a>

```go
func IsHnsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LargeFileShareEnabledInput`<sup>Optional</sup> <a name="LargeFileShareEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.largeFileShareEnabledInput"></a>

```go
func LargeFileShareEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MinTlsVersionInput`<sup>Optional</sup> <a name="MinTlsVersionInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.minTlsVersionInput"></a>

```go
func MinTlsVersionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkRulesInput`<sup>Optional</sup> <a name="NetworkRulesInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.networkRulesInput"></a>

```go
func NetworkRulesInput() StorageAccountNetworkRules
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a>

---

##### `Nfsv3EnabledInput`<sup>Optional</sup> <a name="Nfsv3EnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nfsv3EnabledInput"></a>

```go
func Nfsv3EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.publicNetworkAccessEnabledInput"></a>

```go
func PublicNetworkAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `QueueEncryptionKeyTypeInput`<sup>Optional</sup> <a name="QueueEncryptionKeyTypeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueEncryptionKeyTypeInput"></a>

```go
func QueueEncryptionKeyTypeInput() *string
```

- *Type:* *string

---

##### `QueuePropertiesInput`<sup>Optional</sup> <a name="QueuePropertiesInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queuePropertiesInput"></a>

```go
func QueuePropertiesInput() StorageAccountQueueProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `RoutingInput`<sup>Optional</sup> <a name="RoutingInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.routingInput"></a>

```go
func RoutingInput() StorageAccountRouting
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a>

---

##### `SasPolicyInput`<sup>Optional</sup> <a name="SasPolicyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sasPolicyInput"></a>

```go
func SasPolicyInput() StorageAccountSasPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a>

---

##### `SftpEnabledInput`<sup>Optional</sup> <a name="SftpEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sftpEnabledInput"></a>

```go
func SftpEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SharedAccessKeyEnabledInput`<sup>Optional</sup> <a name="SharedAccessKeyEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharedAccessKeyEnabledInput"></a>

```go
func SharedAccessKeyEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SharePropertiesInput`<sup>Optional</sup> <a name="SharePropertiesInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharePropertiesInput"></a>

```go
func SharePropertiesInput() StorageAccountShareProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a>

---

##### `StaticWebsiteInput`<sup>Optional</sup> <a name="StaticWebsiteInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.staticWebsiteInput"></a>

```go
func StaticWebsiteInput() StorageAccountStaticWebsite
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a>

---

##### `TableEncryptionKeyTypeInput`<sup>Optional</sup> <a name="TableEncryptionKeyTypeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tableEncryptionKeyTypeInput"></a>

```go
func TableEncryptionKeyTypeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AccessTier`<sup>Required</sup> <a name="AccessTier" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accessTier"></a>

```go
func AccessTier() *string
```

- *Type:* *string

---

##### `AccountKind`<sup>Required</sup> <a name="AccountKind" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountKind"></a>

```go
func AccountKind() *string
```

- *Type:* *string

---

##### `AccountReplicationType`<sup>Required</sup> <a name="AccountReplicationType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountReplicationType"></a>

```go
func AccountReplicationType() *string
```

- *Type:* *string

---

##### `AccountTier`<sup>Required</sup> <a name="AccountTier" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountTier"></a>

```go
func AccountTier() *string
```

- *Type:* *string

---

##### `AllowedCopyScope`<sup>Required</sup> <a name="AllowedCopyScope" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowedCopyScope"></a>

```go
func AllowedCopyScope() *string
```

- *Type:* *string

---

##### `AllowNestedItemsToBePublic`<sup>Required</sup> <a name="AllowNestedItemsToBePublic" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowNestedItemsToBePublic"></a>

```go
func AllowNestedItemsToBePublic() interface{}
```

- *Type:* interface{}

---

##### `CrossTenantReplicationEnabled`<sup>Required</sup> <a name="CrossTenantReplicationEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.crossTenantReplicationEnabled"></a>

```go
func CrossTenantReplicationEnabled() interface{}
```

- *Type:* interface{}

---

##### `DefaultToOauthAuthentication`<sup>Required</sup> <a name="DefaultToOauthAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.defaultToOauthAuthentication"></a>

```go
func DefaultToOauthAuthentication() interface{}
```

- *Type:* interface{}

---

##### `EdgeZone`<sup>Required</sup> <a name="EdgeZone" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.edgeZone"></a>

```go
func EdgeZone() *string
```

- *Type:* *string

---

##### `EnableHttpsTrafficOnly`<sup>Required</sup> <a name="EnableHttpsTrafficOnly" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.enableHttpsTrafficOnly"></a>

```go
func EnableHttpsTrafficOnly() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InfrastructureEncryptionEnabled`<sup>Required</sup> <a name="InfrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.infrastructureEncryptionEnabled"></a>

```go
func InfrastructureEncryptionEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsHnsEnabled`<sup>Required</sup> <a name="IsHnsEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.isHnsEnabled"></a>

```go
func IsHnsEnabled() interface{}
```

- *Type:* interface{}

---

##### `LargeFileShareEnabled`<sup>Required</sup> <a name="LargeFileShareEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.largeFileShareEnabled"></a>

```go
func LargeFileShareEnabled() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MinTlsVersion`<sup>Required</sup> <a name="MinTlsVersion" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.minTlsVersion"></a>

```go
func MinTlsVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Nfsv3Enabled`<sup>Required</sup> <a name="Nfsv3Enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nfsv3Enabled"></a>

```go
func Nfsv3Enabled() interface{}
```

- *Type:* interface{}

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.publicNetworkAccessEnabled"></a>

```go
func PublicNetworkAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `QueueEncryptionKeyType`<sup>Required</sup> <a name="QueueEncryptionKeyType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueEncryptionKeyType"></a>

```go
func QueueEncryptionKeyType() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SftpEnabled`<sup>Required</sup> <a name="SftpEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sftpEnabled"></a>

```go
func SftpEnabled() interface{}
```

- *Type:* interface{}

---

##### `SharedAccessKeyEnabled`<sup>Required</sup> <a name="SharedAccessKeyEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharedAccessKeyEnabled"></a>

```go
func SharedAccessKeyEnabled() interface{}
```

- *Type:* interface{}

---

##### `TableEncryptionKeyType`<sup>Required</sup> <a name="TableEncryptionKeyType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tableEncryptionKeyType"></a>

```go
func TableEncryptionKeyType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageAccountAzureFilesAuthentication <a name="StorageAccountAzureFilesAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

&storageaccount.StorageAccountAzureFilesAuthentication {
	DirectoryType: *string,
	ActiveDirectory: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication.property.directoryType">DirectoryType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#directory_type StorageAccount#directory_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication.property.activeDirectory">ActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a></code> | active_directory block. |

---

##### `DirectoryType`<sup>Required</sup> <a name="DirectoryType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication.property.directoryType"></a>

```go
DirectoryType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#directory_type StorageAccount#directory_type}.

---

##### `ActiveDirectory`<sup>Optional</sup> <a name="ActiveDirectory" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication.property.activeDirectory"></a>

```go
ActiveDirectory StorageAccountAzureFilesAuthenticationActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#active_directory StorageAccount#active_directory}

---

### StorageAccountAzureFilesAuthenticationActiveDirectory <a name="StorageAccountAzureFilesAuthenticationActiveDirectory" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

&storageaccount.StorageAccountAzureFilesAuthenticationActiveDirectory {
	DomainGuid: *string,
	DomainName: *string,
	DomainSid: *string,
	ForestName: *string,
	NetbiosDomainName: *string,
	StorageSid: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainGuid">DomainGuid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#domain_guid StorageAccount#domain_guid}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#domain_name StorageAccount#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainSid">DomainSid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#domain_sid StorageAccount#domain_sid}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.forestName">ForestName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#forest_name StorageAccount#forest_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.netbiosDomainName">NetbiosDomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#netbios_domain_name StorageAccount#netbios_domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.storageSid">StorageSid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#storage_sid StorageAccount#storage_sid}. |

---

##### `DomainGuid`<sup>Required</sup> <a name="DomainGuid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainGuid"></a>

```go
DomainGuid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#domain_guid StorageAccount#domain_guid}.

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#domain_name StorageAccount#domain_name}.

---

##### `DomainSid`<sup>Optional</sup> <a name="DomainSid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainSid"></a>

```go
DomainSid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#domain_sid StorageAccount#domain_sid}.

---

##### `ForestName`<sup>Optional</sup> <a name="ForestName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.forestName"></a>

```go
ForestName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#forest_name StorageAccount#forest_name}.

---

##### `NetbiosDomainName`<sup>Optional</sup> <a name="NetbiosDomainName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.netbiosDomainName"></a>

```go
NetbiosDomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#netbios_domain_name StorageAccount#netbios_domain_name}.

---

##### `StorageSid`<sup>Optional</sup> <a name="StorageSid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.storageSid"></a>

```go
StorageSid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#storage_sid StorageAccount#storage_sid}.

---

### StorageAccountBlobProperties <a name="StorageAccountBlobProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

&storageaccount.StorageAccountBlobProperties {
	ChangeFeedEnabled: interface{},
	ChangeFeedRetentionInDays: *f64,
	ContainerDeleteRetentionPolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy,
	CorsRule: interface{},
	DefaultServiceVersion: *string,
	DeleteRetentionPolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy,
	LastAccessTimeEnabled: interface{},
	RestorePolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.storageAccount.StorageAccountBlobPropertiesRestorePolicy,
	VersioningEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.changeFeedEnabled">ChangeFeedEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#change_feed_enabled StorageAccount#change_feed_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.changeFeedRetentionInDays">ChangeFeedRetentionInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#change_feed_retention_in_days StorageAccount#change_feed_retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.containerDeleteRetentionPolicy">ContainerDeleteRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a></code> | container_delete_retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.corsRule">CorsRule</a></code> | <code>interface{}</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.defaultServiceVersion">DefaultServiceVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#default_service_version StorageAccount#default_service_version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.deleteRetentionPolicy">DeleteRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a></code> | delete_retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.lastAccessTimeEnabled">LastAccessTimeEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#last_access_time_enabled StorageAccount#last_access_time_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.restorePolicy">RestorePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.versioningEnabled">VersioningEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#versioning_enabled StorageAccount#versioning_enabled}. |

---

##### `ChangeFeedEnabled`<sup>Optional</sup> <a name="ChangeFeedEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.changeFeedEnabled"></a>

```go
ChangeFeedEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#change_feed_enabled StorageAccount#change_feed_enabled}.

---

##### `ChangeFeedRetentionInDays`<sup>Optional</sup> <a name="ChangeFeedRetentionInDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.changeFeedRetentionInDays"></a>

```go
ChangeFeedRetentionInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#change_feed_retention_in_days StorageAccount#change_feed_retention_in_days}.

---

##### `ContainerDeleteRetentionPolicy`<sup>Optional</sup> <a name="ContainerDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.containerDeleteRetentionPolicy"></a>

```go
ContainerDeleteRetentionPolicy StorageAccountBlobPropertiesContainerDeleteRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a>

container_delete_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#container_delete_retention_policy StorageAccount#container_delete_retention_policy}

---

##### `CorsRule`<sup>Optional</sup> <a name="CorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.corsRule"></a>

```go
CorsRule interface{}
```

- *Type:* interface{}

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#cors_rule StorageAccount#cors_rule}

---

##### `DefaultServiceVersion`<sup>Optional</sup> <a name="DefaultServiceVersion" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.defaultServiceVersion"></a>

```go
DefaultServiceVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#default_service_version StorageAccount#default_service_version}.

---

##### `DeleteRetentionPolicy`<sup>Optional</sup> <a name="DeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.deleteRetentionPolicy"></a>

```go
DeleteRetentionPolicy StorageAccountBlobPropertiesDeleteRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a>

delete_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#delete_retention_policy StorageAccount#delete_retention_policy}

---

##### `LastAccessTimeEnabled`<sup>Optional</sup> <a name="LastAccessTimeEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.lastAccessTimeEnabled"></a>

```go
LastAccessTimeEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#last_access_time_enabled StorageAccount#last_access_time_enabled}.

---

##### `RestorePolicy`<sup>Optional</sup> <a name="RestorePolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.restorePolicy"></a>

```go
RestorePolicy StorageAccountBlobPropertiesRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#restore_policy StorageAccount#restore_policy}

---

##### `VersioningEnabled`<sup>Optional</sup> <a name="VersioningEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.versioningEnabled"></a>

```go
VersioningEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#versioning_enabled StorageAccount#versioning_enabled}.

---

### StorageAccountBlobPropertiesContainerDeleteRetentionPolicy <a name="StorageAccountBlobPropertiesContainerDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

&storageaccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy {
	Days: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy.property.days">Days</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#days StorageAccount#days}. |

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy.property.days"></a>

```go
Days *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#days StorageAccount#days}.

---

### StorageAccountBlobPropertiesCorsRule <a name="StorageAccountBlobPropertiesCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

&storageaccount.StorageAccountBlobPropertiesCorsRule {
	AllowedHeaders: *[]*string,
	AllowedMethods: *[]*string,
	AllowedOrigins: *[]*string,
	ExposedHeaders: *[]*string,
	MaxAgeInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedHeaders">AllowedHeaders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedMethods">AllowedMethods</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.exposedHeaders">ExposedHeaders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}. |

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedHeaders"></a>

```go
AllowedHeaders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}.

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedMethods"></a>

```go
AllowedMethods *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}.

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedOrigins"></a>

```go
AllowedOrigins *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}.

---

##### `ExposedHeaders`<sup>Required</sup> <a name="ExposedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.exposedHeaders"></a>

```go
ExposedHeaders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}.

---

##### `MaxAgeInSeconds`<sup>Required</sup> <a name="MaxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.maxAgeInSeconds"></a>

```go
MaxAgeInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}.

---

### StorageAccountBlobPropertiesDeleteRetentionPolicy <a name="StorageAccountBlobPropertiesDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

&storageaccount.StorageAccountBlobPropertiesDeleteRetentionPolicy {
	Days: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy.property.days">Days</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#days StorageAccount#days}. |

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy.property.days"></a>

```go
Days *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#days StorageAccount#days}.

---

### StorageAccountBlobPropertiesRestorePolicy <a name="StorageAccountBlobPropertiesRestorePolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

&storageaccount.StorageAccountBlobPropertiesRestorePolicy {
	Days: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy.property.days">Days</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#days StorageAccount#days}. |

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy.property.days"></a>

```go
Days *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#days StorageAccount#days}.

---

### StorageAccountConfig <a name="StorageAccountConfig" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

&storageaccount.StorageAccountConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountReplicationType: *string,
	AccountTier: *string,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	AccessTier: *string,
	AccountKind: *string,
	AllowedCopyScope: *string,
	AllowNestedItemsToBePublic: interface{},
	AzureFilesAuthentication: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.storageAccount.StorageAccountAzureFilesAuthentication,
	BlobProperties: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.storageAccount.StorageAccountBlobProperties,
	CrossTenantReplicationEnabled: interface{},
	CustomDomain: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.storageAccount.StorageAccountCustomDomain,
	CustomerManagedKey: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.storageAccount.StorageAccountCustomerManagedKey,
	DefaultToOauthAuthentication: interface{},
	EdgeZone: *string,
	EnableHttpsTrafficOnly: interface{},
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.storageAccount.StorageAccountIdentity,
	ImmutabilityPolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.storageAccount.StorageAccountImmutabilityPolicy,
	InfrastructureEncryptionEnabled: interface{},
	IsHnsEnabled: interface{},
	LargeFileShareEnabled: interface{},
	MinTlsVersion: *string,
	NetworkRules: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.storageAccount.StorageAccountNetworkRules,
	Nfsv3Enabled: interface{},
	PublicNetworkAccessEnabled: interface{},
	QueueEncryptionKeyType: *string,
	QueueProperties: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.storageAccount.StorageAccountQueueProperties,
	Routing: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.storageAccount.StorageAccountRouting,
	SasPolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.storageAccount.StorageAccountSasPolicy,
	SftpEnabled: interface{},
	SharedAccessKeyEnabled: interface{},
	ShareProperties: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.storageAccount.StorageAccountShareProperties,
	StaticWebsite: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.storageAccount.StorageAccountStaticWebsite,
	TableEncryptionKeyType: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.storageAccount.StorageAccountTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountReplicationType">AccountReplicationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#account_replication_type StorageAccount#account_replication_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountTier">AccountTier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#account_tier StorageAccount#account_tier}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#location StorageAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#name StorageAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#resource_group_name StorageAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accessTier">AccessTier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#access_tier StorageAccount#access_tier}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountKind">AccountKind</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#account_kind StorageAccount#account_kind}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.allowedCopyScope">AllowedCopyScope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#allowed_copy_scope StorageAccount#allowed_copy_scope}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.allowNestedItemsToBePublic">AllowNestedItemsToBePublic</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#allow_nested_items_to_be_public StorageAccount#allow_nested_items_to_be_public}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.azureFilesAuthentication">AzureFilesAuthentication</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a></code> | azure_files_authentication block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.blobProperties">BlobProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a></code> | blob_properties block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.crossTenantReplicationEnabled">CrossTenantReplicationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#cross_tenant_replication_enabled StorageAccount#cross_tenant_replication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.customDomain">CustomDomain</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a></code> | custom_domain block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.customerManagedKey">CustomerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a></code> | customer_managed_key block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.defaultToOauthAuthentication">DefaultToOauthAuthentication</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#default_to_oauth_authentication StorageAccount#default_to_oauth_authentication}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.edgeZone">EdgeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#edge_zone StorageAccount#edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.enableHttpsTrafficOnly">EnableHttpsTrafficOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#enable_https_traffic_only StorageAccount#enable_https_traffic_only}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#id StorageAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.immutabilityPolicy">ImmutabilityPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a></code> | immutability_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.infrastructureEncryptionEnabled">InfrastructureEncryptionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#infrastructure_encryption_enabled StorageAccount#infrastructure_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.isHnsEnabled">IsHnsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#is_hns_enabled StorageAccount#is_hns_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.largeFileShareEnabled">LargeFileShareEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#large_file_share_enabled StorageAccount#large_file_share_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.minTlsVersion">MinTlsVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#min_tls_version StorageAccount#min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.networkRules">NetworkRules</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a></code> | network_rules block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.nfsv3Enabled">Nfsv3Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#nfsv3_enabled StorageAccount#nfsv3_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#public_network_access_enabled StorageAccount#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.queueEncryptionKeyType">QueueEncryptionKeyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#queue_encryption_key_type StorageAccount#queue_encryption_key_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.queueProperties">QueueProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a></code> | queue_properties block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.routing">Routing</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a></code> | routing block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sasPolicy">SasPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a></code> | sas_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sftpEnabled">SftpEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#sftp_enabled StorageAccount#sftp_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sharedAccessKeyEnabled">SharedAccessKeyEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#shared_access_key_enabled StorageAccount#shared_access_key_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.shareProperties">ShareProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a></code> | share_properties block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.staticWebsite">StaticWebsite</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a></code> | static_website block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.tableEncryptionKeyType">TableEncryptionKeyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#table_encryption_key_type StorageAccount#table_encryption_key_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#tags StorageAccount#tags}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountReplicationType`<sup>Required</sup> <a name="AccountReplicationType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountReplicationType"></a>

```go
AccountReplicationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#account_replication_type StorageAccount#account_replication_type}.

---

##### `AccountTier`<sup>Required</sup> <a name="AccountTier" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountTier"></a>

```go
AccountTier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#account_tier StorageAccount#account_tier}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#location StorageAccount#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#name StorageAccount#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#resource_group_name StorageAccount#resource_group_name}.

---

##### `AccessTier`<sup>Optional</sup> <a name="AccessTier" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accessTier"></a>

```go
AccessTier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#access_tier StorageAccount#access_tier}.

---

##### `AccountKind`<sup>Optional</sup> <a name="AccountKind" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountKind"></a>

```go
AccountKind *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#account_kind StorageAccount#account_kind}.

---

##### `AllowedCopyScope`<sup>Optional</sup> <a name="AllowedCopyScope" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.allowedCopyScope"></a>

```go
AllowedCopyScope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#allowed_copy_scope StorageAccount#allowed_copy_scope}.

---

##### `AllowNestedItemsToBePublic`<sup>Optional</sup> <a name="AllowNestedItemsToBePublic" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.allowNestedItemsToBePublic"></a>

```go
AllowNestedItemsToBePublic interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#allow_nested_items_to_be_public StorageAccount#allow_nested_items_to_be_public}.

---

##### `AzureFilesAuthentication`<sup>Optional</sup> <a name="AzureFilesAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.azureFilesAuthentication"></a>

```go
AzureFilesAuthentication StorageAccountAzureFilesAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a>

azure_files_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#azure_files_authentication StorageAccount#azure_files_authentication}

---

##### `BlobProperties`<sup>Optional</sup> <a name="BlobProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.blobProperties"></a>

```go
BlobProperties StorageAccountBlobProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a>

blob_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#blob_properties StorageAccount#blob_properties}

---

##### `CrossTenantReplicationEnabled`<sup>Optional</sup> <a name="CrossTenantReplicationEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.crossTenantReplicationEnabled"></a>

```go
CrossTenantReplicationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#cross_tenant_replication_enabled StorageAccount#cross_tenant_replication_enabled}.

---

##### `CustomDomain`<sup>Optional</sup> <a name="CustomDomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.customDomain"></a>

```go
CustomDomain StorageAccountCustomDomain
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a>

custom_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#custom_domain StorageAccount#custom_domain}

---

##### `CustomerManagedKey`<sup>Optional</sup> <a name="CustomerManagedKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.customerManagedKey"></a>

```go
CustomerManagedKey StorageAccountCustomerManagedKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a>

customer_managed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#customer_managed_key StorageAccount#customer_managed_key}

---

##### `DefaultToOauthAuthentication`<sup>Optional</sup> <a name="DefaultToOauthAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.defaultToOauthAuthentication"></a>

```go
DefaultToOauthAuthentication interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#default_to_oauth_authentication StorageAccount#default_to_oauth_authentication}.

---

##### `EdgeZone`<sup>Optional</sup> <a name="EdgeZone" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.edgeZone"></a>

```go
EdgeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#edge_zone StorageAccount#edge_zone}.

---

##### `EnableHttpsTrafficOnly`<sup>Optional</sup> <a name="EnableHttpsTrafficOnly" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.enableHttpsTrafficOnly"></a>

```go
EnableHttpsTrafficOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#enable_https_traffic_only StorageAccount#enable_https_traffic_only}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#id StorageAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.identity"></a>

```go
Identity StorageAccountIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#identity StorageAccount#identity}

---

##### `ImmutabilityPolicy`<sup>Optional</sup> <a name="ImmutabilityPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.immutabilityPolicy"></a>

```go
ImmutabilityPolicy StorageAccountImmutabilityPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a>

immutability_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#immutability_policy StorageAccount#immutability_policy}

---

##### `InfrastructureEncryptionEnabled`<sup>Optional</sup> <a name="InfrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.infrastructureEncryptionEnabled"></a>

```go
InfrastructureEncryptionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#infrastructure_encryption_enabled StorageAccount#infrastructure_encryption_enabled}.

---

##### `IsHnsEnabled`<sup>Optional</sup> <a name="IsHnsEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.isHnsEnabled"></a>

```go
IsHnsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#is_hns_enabled StorageAccount#is_hns_enabled}.

---

##### `LargeFileShareEnabled`<sup>Optional</sup> <a name="LargeFileShareEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.largeFileShareEnabled"></a>

```go
LargeFileShareEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#large_file_share_enabled StorageAccount#large_file_share_enabled}.

---

##### `MinTlsVersion`<sup>Optional</sup> <a name="MinTlsVersion" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.minTlsVersion"></a>

```go
MinTlsVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#min_tls_version StorageAccount#min_tls_version}.

---

##### `NetworkRules`<sup>Optional</sup> <a name="NetworkRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.networkRules"></a>

```go
NetworkRules StorageAccountNetworkRules
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a>

network_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#network_rules StorageAccount#network_rules}

---

##### `Nfsv3Enabled`<sup>Optional</sup> <a name="Nfsv3Enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.nfsv3Enabled"></a>

```go
Nfsv3Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#nfsv3_enabled StorageAccount#nfsv3_enabled}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.publicNetworkAccessEnabled"></a>

```go
PublicNetworkAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#public_network_access_enabled StorageAccount#public_network_access_enabled}.

---

##### `QueueEncryptionKeyType`<sup>Optional</sup> <a name="QueueEncryptionKeyType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.queueEncryptionKeyType"></a>

```go
QueueEncryptionKeyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#queue_encryption_key_type StorageAccount#queue_encryption_key_type}.

---

##### `QueueProperties`<sup>Optional</sup> <a name="QueueProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.queueProperties"></a>

```go
QueueProperties StorageAccountQueueProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a>

queue_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#queue_properties StorageAccount#queue_properties}

---

##### `Routing`<sup>Optional</sup> <a name="Routing" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.routing"></a>

```go
Routing StorageAccountRouting
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a>

routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#routing StorageAccount#routing}

---

##### `SasPolicy`<sup>Optional</sup> <a name="SasPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sasPolicy"></a>

```go
SasPolicy StorageAccountSasPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a>

sas_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#sas_policy StorageAccount#sas_policy}

---

##### `SftpEnabled`<sup>Optional</sup> <a name="SftpEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sftpEnabled"></a>

```go
SftpEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#sftp_enabled StorageAccount#sftp_enabled}.

---

##### `SharedAccessKeyEnabled`<sup>Optional</sup> <a name="SharedAccessKeyEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sharedAccessKeyEnabled"></a>

```go
SharedAccessKeyEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#shared_access_key_enabled StorageAccount#shared_access_key_enabled}.

---

##### `ShareProperties`<sup>Optional</sup> <a name="ShareProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.shareProperties"></a>

```go
ShareProperties StorageAccountShareProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a>

share_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#share_properties StorageAccount#share_properties}

---

##### `StaticWebsite`<sup>Optional</sup> <a name="StaticWebsite" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.staticWebsite"></a>

```go
StaticWebsite StorageAccountStaticWebsite
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a>

static_website block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#static_website StorageAccount#static_website}

---

##### `TableEncryptionKeyType`<sup>Optional</sup> <a name="TableEncryptionKeyType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.tableEncryptionKeyType"></a>

```go
TableEncryptionKeyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#table_encryption_key_type StorageAccount#table_encryption_key_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#tags StorageAccount#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.timeouts"></a>

```go
Timeouts StorageAccountTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#timeouts StorageAccount#timeouts}

---

### StorageAccountCustomDomain <a name="StorageAccountCustomDomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

&storageaccount.StorageAccountCustomDomain {
	Name: *string,
	UseSubdomain: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#name StorageAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain.property.useSubdomain">UseSubdomain</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#use_subdomain StorageAccount#use_subdomain}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#name StorageAccount#name}.

---

##### `UseSubdomain`<sup>Optional</sup> <a name="UseSubdomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain.property.useSubdomain"></a>

```go
UseSubdomain interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#use_subdomain StorageAccount#use_subdomain}.

---

### StorageAccountCustomerManagedKey <a name="StorageAccountCustomerManagedKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

&storageaccount.StorageAccountCustomerManagedKey {
	KeyVaultKeyId: *string,
	UserAssignedIdentityId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#key_vault_key_id StorageAccount#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#user_assigned_identity_id StorageAccount#user_assigned_identity_id}. |

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey.property.keyVaultKeyId"></a>

```go
KeyVaultKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#key_vault_key_id StorageAccount#key_vault_key_id}.

---

##### `UserAssignedIdentityId`<sup>Required</sup> <a name="UserAssignedIdentityId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey.property.userAssignedIdentityId"></a>

```go
UserAssignedIdentityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#user_assigned_identity_id StorageAccount#user_assigned_identity_id}.

---

### StorageAccountIdentity <a name="StorageAccountIdentity" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

&storageaccount.StorageAccountIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#type StorageAccount#type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#identity_ids StorageAccount#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#type StorageAccount#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#identity_ids StorageAccount#identity_ids}.

---

### StorageAccountImmutabilityPolicy <a name="StorageAccountImmutabilityPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

&storageaccount.StorageAccountImmutabilityPolicy {
	AllowProtectedAppendWrites: interface{},
	PeriodSinceCreationInDays: *f64,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.allowProtectedAppendWrites">AllowProtectedAppendWrites</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#allow_protected_append_writes StorageAccount#allow_protected_append_writes}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.periodSinceCreationInDays">PeriodSinceCreationInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#period_since_creation_in_days StorageAccount#period_since_creation_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#state StorageAccount#state}. |

---

##### `AllowProtectedAppendWrites`<sup>Required</sup> <a name="AllowProtectedAppendWrites" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.allowProtectedAppendWrites"></a>

```go
AllowProtectedAppendWrites interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#allow_protected_append_writes StorageAccount#allow_protected_append_writes}.

---

##### `PeriodSinceCreationInDays`<sup>Required</sup> <a name="PeriodSinceCreationInDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.periodSinceCreationInDays"></a>

```go
PeriodSinceCreationInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#period_since_creation_in_days StorageAccount#period_since_creation_in_days}.

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#state StorageAccount#state}.

---

### StorageAccountNetworkRules <a name="StorageAccountNetworkRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

&storageaccount.StorageAccountNetworkRules {
	DefaultAction: *string,
	Bypass: *[]*string,
	IpRules: *[]*string,
	PrivateLinkAccess: interface{},
	VirtualNetworkSubnetIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.defaultAction">DefaultAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#default_action StorageAccount#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.bypass">Bypass</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#bypass StorageAccount#bypass}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.ipRules">IpRules</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#ip_rules StorageAccount#ip_rules}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.privateLinkAccess">PrivateLinkAccess</a></code> | <code>interface{}</code> | private_link_access block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.virtualNetworkSubnetIds">VirtualNetworkSubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#virtual_network_subnet_ids StorageAccount#virtual_network_subnet_ids}. |

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.defaultAction"></a>

```go
DefaultAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#default_action StorageAccount#default_action}.

---

##### `Bypass`<sup>Optional</sup> <a name="Bypass" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.bypass"></a>

```go
Bypass *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#bypass StorageAccount#bypass}.

---

##### `IpRules`<sup>Optional</sup> <a name="IpRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.ipRules"></a>

```go
IpRules *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#ip_rules StorageAccount#ip_rules}.

---

##### `PrivateLinkAccess`<sup>Optional</sup> <a name="PrivateLinkAccess" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.privateLinkAccess"></a>

```go
PrivateLinkAccess interface{}
```

- *Type:* interface{}

private_link_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#private_link_access StorageAccount#private_link_access}

---

##### `VirtualNetworkSubnetIds`<sup>Optional</sup> <a name="VirtualNetworkSubnetIds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.virtualNetworkSubnetIds"></a>

```go
VirtualNetworkSubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#virtual_network_subnet_ids StorageAccount#virtual_network_subnet_ids}.

---

### StorageAccountNetworkRulesPrivateLinkAccess <a name="StorageAccountNetworkRulesPrivateLinkAccess" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

&storageaccount.StorageAccountNetworkRulesPrivateLinkAccess {
	EndpointResourceId: *string,
	EndpointTenantId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess.property.endpointResourceId">EndpointResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#endpoint_resource_id StorageAccount#endpoint_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess.property.endpointTenantId">EndpointTenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#endpoint_tenant_id StorageAccount#endpoint_tenant_id}. |

---

##### `EndpointResourceId`<sup>Required</sup> <a name="EndpointResourceId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess.property.endpointResourceId"></a>

```go
EndpointResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#endpoint_resource_id StorageAccount#endpoint_resource_id}.

---

##### `EndpointTenantId`<sup>Optional</sup> <a name="EndpointTenantId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess.property.endpointTenantId"></a>

```go
EndpointTenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#endpoint_tenant_id StorageAccount#endpoint_tenant_id}.

---

### StorageAccountQueueProperties <a name="StorageAccountQueueProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

&storageaccount.StorageAccountQueueProperties {
	CorsRule: interface{},
	HourMetrics: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.storageAccount.StorageAccountQueuePropertiesHourMetrics,
	Logging: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.storageAccount.StorageAccountQueuePropertiesLogging,
	MinuteMetrics: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.storageAccount.StorageAccountQueuePropertiesMinuteMetrics,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.corsRule">CorsRule</a></code> | <code>interface{}</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.hourMetrics">HourMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a></code> | hour_metrics block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.minuteMetrics">MinuteMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a></code> | minute_metrics block. |

---

##### `CorsRule`<sup>Optional</sup> <a name="CorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.corsRule"></a>

```go
CorsRule interface{}
```

- *Type:* interface{}

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#cors_rule StorageAccount#cors_rule}

---

##### `HourMetrics`<sup>Optional</sup> <a name="HourMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.hourMetrics"></a>

```go
HourMetrics StorageAccountQueuePropertiesHourMetrics
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a>

hour_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#hour_metrics StorageAccount#hour_metrics}

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.logging"></a>

```go
Logging StorageAccountQueuePropertiesLogging
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#logging StorageAccount#logging}

---

##### `MinuteMetrics`<sup>Optional</sup> <a name="MinuteMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.minuteMetrics"></a>

```go
MinuteMetrics StorageAccountQueuePropertiesMinuteMetrics
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a>

minute_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#minute_metrics StorageAccount#minute_metrics}

---

### StorageAccountQueuePropertiesCorsRule <a name="StorageAccountQueuePropertiesCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

&storageaccount.StorageAccountQueuePropertiesCorsRule {
	AllowedHeaders: *[]*string,
	AllowedMethods: *[]*string,
	AllowedOrigins: *[]*string,
	ExposedHeaders: *[]*string,
	MaxAgeInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedHeaders">AllowedHeaders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedMethods">AllowedMethods</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.exposedHeaders">ExposedHeaders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}. |

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedHeaders"></a>

```go
AllowedHeaders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}.

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedMethods"></a>

```go
AllowedMethods *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}.

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedOrigins"></a>

```go
AllowedOrigins *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}.

---

##### `ExposedHeaders`<sup>Required</sup> <a name="ExposedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.exposedHeaders"></a>

```go
ExposedHeaders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}.

---

##### `MaxAgeInSeconds`<sup>Required</sup> <a name="MaxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.maxAgeInSeconds"></a>

```go
MaxAgeInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}.

---

### StorageAccountQueuePropertiesHourMetrics <a name="StorageAccountQueuePropertiesHourMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

&storageaccount.StorageAccountQueuePropertiesHourMetrics {
	Enabled: interface{},
	Version: *string,
	IncludeApis: interface{},
	RetentionPolicyDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#enabled StorageAccount#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#version StorageAccount#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.includeApis">IncludeApis</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#include_apis StorageAccount#include_apis}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#enabled StorageAccount#enabled}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#version StorageAccount#version}.

---

##### `IncludeApis`<sup>Optional</sup> <a name="IncludeApis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.includeApis"></a>

```go
IncludeApis interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#include_apis StorageAccount#include_apis}.

---

##### `RetentionPolicyDays`<sup>Optional</sup> <a name="RetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.retentionPolicyDays"></a>

```go
RetentionPolicyDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}.

---

### StorageAccountQueuePropertiesLogging <a name="StorageAccountQueuePropertiesLogging" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

&storageaccount.StorageAccountQueuePropertiesLogging {
	Delete: interface{},
	Read: interface{},
	Version: *string,
	Write: interface{},
	RetentionPolicyDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.delete">Delete</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#delete StorageAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.read">Read</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#read StorageAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#version StorageAccount#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.write">Write</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#write StorageAccount#write}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}. |

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.delete"></a>

```go
Delete interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#delete StorageAccount#delete}.

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.read"></a>

```go
Read interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#read StorageAccount#read}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#version StorageAccount#version}.

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.write"></a>

```go
Write interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#write StorageAccount#write}.

---

##### `RetentionPolicyDays`<sup>Optional</sup> <a name="RetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.retentionPolicyDays"></a>

```go
RetentionPolicyDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}.

---

### StorageAccountQueuePropertiesMinuteMetrics <a name="StorageAccountQueuePropertiesMinuteMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

&storageaccount.StorageAccountQueuePropertiesMinuteMetrics {
	Enabled: interface{},
	Version: *string,
	IncludeApis: interface{},
	RetentionPolicyDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#enabled StorageAccount#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#version StorageAccount#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.includeApis">IncludeApis</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#include_apis StorageAccount#include_apis}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#enabled StorageAccount#enabled}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#version StorageAccount#version}.

---

##### `IncludeApis`<sup>Optional</sup> <a name="IncludeApis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.includeApis"></a>

```go
IncludeApis interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#include_apis StorageAccount#include_apis}.

---

##### `RetentionPolicyDays`<sup>Optional</sup> <a name="RetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.retentionPolicyDays"></a>

```go
RetentionPolicyDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}.

---

### StorageAccountRouting <a name="StorageAccountRouting" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

&storageaccount.StorageAccountRouting {
	Choice: *string,
	PublishInternetEndpoints: interface{},
	PublishMicrosoftEndpoints: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.choice">Choice</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#choice StorageAccount#choice}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.publishInternetEndpoints">PublishInternetEndpoints</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#publish_internet_endpoints StorageAccount#publish_internet_endpoints}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.publishMicrosoftEndpoints">PublishMicrosoftEndpoints</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#publish_microsoft_endpoints StorageAccount#publish_microsoft_endpoints}. |

---

##### `Choice`<sup>Optional</sup> <a name="Choice" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.choice"></a>

```go
Choice *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#choice StorageAccount#choice}.

---

##### `PublishInternetEndpoints`<sup>Optional</sup> <a name="PublishInternetEndpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.publishInternetEndpoints"></a>

```go
PublishInternetEndpoints interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#publish_internet_endpoints StorageAccount#publish_internet_endpoints}.

---

##### `PublishMicrosoftEndpoints`<sup>Optional</sup> <a name="PublishMicrosoftEndpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.publishMicrosoftEndpoints"></a>

```go
PublishMicrosoftEndpoints interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#publish_microsoft_endpoints StorageAccount#publish_microsoft_endpoints}.

---

### StorageAccountSasPolicy <a name="StorageAccountSasPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

&storageaccount.StorageAccountSasPolicy {
	ExpirationPeriod: *string,
	ExpirationAction: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy.property.expirationPeriod">ExpirationPeriod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#expiration_period StorageAccount#expiration_period}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy.property.expirationAction">ExpirationAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#expiration_action StorageAccount#expiration_action}. |

---

##### `ExpirationPeriod`<sup>Required</sup> <a name="ExpirationPeriod" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy.property.expirationPeriod"></a>

```go
ExpirationPeriod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#expiration_period StorageAccount#expiration_period}.

---

##### `ExpirationAction`<sup>Optional</sup> <a name="ExpirationAction" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy.property.expirationAction"></a>

```go
ExpirationAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#expiration_action StorageAccount#expiration_action}.

---

### StorageAccountShareProperties <a name="StorageAccountShareProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

&storageaccount.StorageAccountShareProperties {
	CorsRule: interface{},
	RetentionPolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.storageAccount.StorageAccountSharePropertiesRetentionPolicy,
	Smb: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.storageAccount.StorageAccountSharePropertiesSmb,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.corsRule">CorsRule</a></code> | <code>interface{}</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.smb">Smb</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a></code> | smb block. |

---

##### `CorsRule`<sup>Optional</sup> <a name="CorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.corsRule"></a>

```go
CorsRule interface{}
```

- *Type:* interface{}

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#cors_rule StorageAccount#cors_rule}

---

##### `RetentionPolicy`<sup>Optional</sup> <a name="RetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.retentionPolicy"></a>

```go
RetentionPolicy StorageAccountSharePropertiesRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#retention_policy StorageAccount#retention_policy}

---

##### `Smb`<sup>Optional</sup> <a name="Smb" id="@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.smb"></a>

```go
Smb StorageAccountSharePropertiesSmb
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a>

smb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#smb StorageAccount#smb}

---

### StorageAccountSharePropertiesCorsRule <a name="StorageAccountSharePropertiesCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

&storageaccount.StorageAccountSharePropertiesCorsRule {
	AllowedHeaders: *[]*string,
	AllowedMethods: *[]*string,
	AllowedOrigins: *[]*string,
	ExposedHeaders: *[]*string,
	MaxAgeInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedHeaders">AllowedHeaders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedMethods">AllowedMethods</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.exposedHeaders">ExposedHeaders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}. |

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedHeaders"></a>

```go
AllowedHeaders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}.

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedMethods"></a>

```go
AllowedMethods *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}.

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedOrigins"></a>

```go
AllowedOrigins *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}.

---

##### `ExposedHeaders`<sup>Required</sup> <a name="ExposedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.exposedHeaders"></a>

```go
ExposedHeaders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}.

---

##### `MaxAgeInSeconds`<sup>Required</sup> <a name="MaxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.maxAgeInSeconds"></a>

```go
MaxAgeInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}.

---

### StorageAccountSharePropertiesRetentionPolicy <a name="StorageAccountSharePropertiesRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

&storageaccount.StorageAccountSharePropertiesRetentionPolicy {
	Days: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy.property.days">Days</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#days StorageAccount#days}. |

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy.property.days"></a>

```go
Days *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#days StorageAccount#days}.

---

### StorageAccountSharePropertiesSmb <a name="StorageAccountSharePropertiesSmb" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

&storageaccount.StorageAccountSharePropertiesSmb {
	AuthenticationTypes: *[]*string,
	ChannelEncryptionType: *[]*string,
	KerberosTicketEncryptionType: *[]*string,
	MultichannelEnabled: interface{},
	Versions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.authenticationTypes">AuthenticationTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#authentication_types StorageAccount#authentication_types}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.channelEncryptionType">ChannelEncryptionType</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#channel_encryption_type StorageAccount#channel_encryption_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.kerberosTicketEncryptionType">KerberosTicketEncryptionType</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#kerberos_ticket_encryption_type StorageAccount#kerberos_ticket_encryption_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.multichannelEnabled">MultichannelEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#multichannel_enabled StorageAccount#multichannel_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.versions">Versions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#versions StorageAccount#versions}. |

---

##### `AuthenticationTypes`<sup>Optional</sup> <a name="AuthenticationTypes" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.authenticationTypes"></a>

```go
AuthenticationTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#authentication_types StorageAccount#authentication_types}.

---

##### `ChannelEncryptionType`<sup>Optional</sup> <a name="ChannelEncryptionType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.channelEncryptionType"></a>

```go
ChannelEncryptionType *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#channel_encryption_type StorageAccount#channel_encryption_type}.

---

##### `KerberosTicketEncryptionType`<sup>Optional</sup> <a name="KerberosTicketEncryptionType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.kerberosTicketEncryptionType"></a>

```go
KerberosTicketEncryptionType *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#kerberos_ticket_encryption_type StorageAccount#kerberos_ticket_encryption_type}.

---

##### `MultichannelEnabled`<sup>Optional</sup> <a name="MultichannelEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.multichannelEnabled"></a>

```go
MultichannelEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#multichannel_enabled StorageAccount#multichannel_enabled}.

---

##### `Versions`<sup>Optional</sup> <a name="Versions" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.versions"></a>

```go
Versions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#versions StorageAccount#versions}.

---

### StorageAccountStaticWebsite <a name="StorageAccountStaticWebsite" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

&storageaccount.StorageAccountStaticWebsite {
	Error404Document: *string,
	IndexDocument: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite.property.error404Document">Error404Document</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#error_404_document StorageAccount#error_404_document}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite.property.indexDocument">IndexDocument</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#index_document StorageAccount#index_document}. |

---

##### `Error404Document`<sup>Optional</sup> <a name="Error404Document" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite.property.error404Document"></a>

```go
Error404Document *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#error_404_document StorageAccount#error_404_document}.

---

##### `IndexDocument`<sup>Optional</sup> <a name="IndexDocument" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite.property.indexDocument"></a>

```go
IndexDocument *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#index_document StorageAccount#index_document}.

---

### StorageAccountTimeouts <a name="StorageAccountTimeouts" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

&storageaccount.StorageAccountTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#create StorageAccount#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#delete StorageAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#read StorageAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#update StorageAccount#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#create StorageAccount#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#delete StorageAccount#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#read StorageAccount#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account#update StorageAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference <a name="StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resetDomainSid">ResetDomainSid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resetForestName">ResetForestName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resetNetbiosDomainName">ResetNetbiosDomainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resetStorageSid">ResetStorageSid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomainSid` <a name="ResetDomainSid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resetDomainSid"></a>

```go
func ResetDomainSid()
```

##### `ResetForestName` <a name="ResetForestName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resetForestName"></a>

```go
func ResetForestName()
```

##### `ResetNetbiosDomainName` <a name="ResetNetbiosDomainName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resetNetbiosDomainName"></a>

```go
func ResetNetbiosDomainName()
```

##### `ResetStorageSid` <a name="ResetStorageSid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resetStorageSid"></a>

```go
func ResetStorageSid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainGuidInput">DomainGuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainSidInput">DomainSidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.forestNameInput">ForestNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.netbiosDomainNameInput">NetbiosDomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.storageSidInput">StorageSidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainGuid">DomainGuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainSid">DomainSid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.forestName">ForestName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.netbiosDomainName">NetbiosDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.storageSid">StorageSid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainGuidInput`<sup>Optional</sup> <a name="DomainGuidInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainGuidInput"></a>

```go
func DomainGuidInput() *string
```

- *Type:* *string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `DomainSidInput`<sup>Optional</sup> <a name="DomainSidInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainSidInput"></a>

```go
func DomainSidInput() *string
```

- *Type:* *string

---

##### `ForestNameInput`<sup>Optional</sup> <a name="ForestNameInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.forestNameInput"></a>

```go
func ForestNameInput() *string
```

- *Type:* *string

---

##### `NetbiosDomainNameInput`<sup>Optional</sup> <a name="NetbiosDomainNameInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.netbiosDomainNameInput"></a>

```go
func NetbiosDomainNameInput() *string
```

- *Type:* *string

---

##### `StorageSidInput`<sup>Optional</sup> <a name="StorageSidInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.storageSidInput"></a>

```go
func StorageSidInput() *string
```

- *Type:* *string

---

##### `DomainGuid`<sup>Required</sup> <a name="DomainGuid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainGuid"></a>

```go
func DomainGuid() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `DomainSid`<sup>Required</sup> <a name="DomainSid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainSid"></a>

```go
func DomainSid() *string
```

- *Type:* *string

---

##### `ForestName`<sup>Required</sup> <a name="ForestName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.forestName"></a>

```go
func ForestName() *string
```

- *Type:* *string

---

##### `NetbiosDomainName`<sup>Required</sup> <a name="NetbiosDomainName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.netbiosDomainName"></a>

```go
func NetbiosDomainName() *string
```

- *Type:* *string

---

##### `StorageSid`<sup>Required</sup> <a name="StorageSid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.storageSid"></a>

```go
func StorageSid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageAccountAzureFilesAuthenticationActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a>

---


### StorageAccountAzureFilesAuthenticationOutputReference <a name="StorageAccountAzureFilesAuthenticationOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountAzureFilesAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountAzureFilesAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.putActiveDirectory">PutActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.resetActiveDirectory">ResetActiveDirectory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActiveDirectory` <a name="PutActiveDirectory" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.putActiveDirectory"></a>

```go
func PutActiveDirectory(value StorageAccountAzureFilesAuthenticationActiveDirectory)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.putActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a>

---

##### `ResetActiveDirectory` <a name="ResetActiveDirectory" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.resetActiveDirectory"></a>

```go
func ResetActiveDirectory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.activeDirectory">ActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference">StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.activeDirectoryInput">ActiveDirectoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.directoryTypeInput">DirectoryTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.directoryType">DirectoryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveDirectory`<sup>Required</sup> <a name="ActiveDirectory" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.activeDirectory"></a>

```go
func ActiveDirectory() StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference">StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference</a>

---

##### `ActiveDirectoryInput`<sup>Optional</sup> <a name="ActiveDirectoryInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.activeDirectoryInput"></a>

```go
func ActiveDirectoryInput() StorageAccountAzureFilesAuthenticationActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a>

---

##### `DirectoryTypeInput`<sup>Optional</sup> <a name="DirectoryTypeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.directoryTypeInput"></a>

```go
func DirectoryTypeInput() *string
```

- *Type:* *string

---

##### `DirectoryType`<sup>Required</sup> <a name="DirectoryType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.directoryType"></a>

```go
func DirectoryType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageAccountAzureFilesAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a>

---


### StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference <a name="StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.resetDays">ResetDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.resetDays"></a>

```go
func ResetDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.daysInput">DaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.days">Days</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.daysInput"></a>

```go
func DaysInput() *f64
```

- *Type:* *f64

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.days"></a>

```go
func Days() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageAccountBlobPropertiesContainerDeleteRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a>

---


### StorageAccountBlobPropertiesCorsRuleList <a name="StorageAccountBlobPropertiesCorsRuleList" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountBlobPropertiesCorsRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StorageAccountBlobPropertiesCorsRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.get"></a>

```go
func Get(index *f64) StorageAccountBlobPropertiesCorsRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageAccountBlobPropertiesCorsRuleOutputReference <a name="StorageAccountBlobPropertiesCorsRuleOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountBlobPropertiesCorsRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StorageAccountBlobPropertiesCorsRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedHeadersInput">AllowedHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedMethodsInput">AllowedMethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.exposedHeadersInput">ExposedHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput">MaxAgeInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedHeaders">AllowedHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.exposedHeaders">ExposedHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedHeadersInput`<sup>Optional</sup> <a name="AllowedHeadersInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedHeadersInput"></a>

```go
func AllowedHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedMethodsInput`<sup>Optional</sup> <a name="AllowedMethodsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedMethodsInput"></a>

```go
func AllowedMethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedOriginsInput"></a>

```go
func AllowedOriginsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExposedHeadersInput`<sup>Optional</sup> <a name="ExposedHeadersInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.exposedHeadersInput"></a>

```go
func ExposedHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaxAgeInSecondsInput`<sup>Optional</sup> <a name="MaxAgeInSecondsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput"></a>

```go
func MaxAgeInSecondsInput() *f64
```

- *Type:* *f64

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedHeaders"></a>

```go
func AllowedHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedMethods"></a>

```go
func AllowedMethods() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedOrigins"></a>

```go
func AllowedOrigins() *[]*string
```

- *Type:* *[]*string

---

##### `ExposedHeaders`<sup>Required</sup> <a name="ExposedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.exposedHeaders"></a>

```go
func ExposedHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `MaxAgeInSeconds`<sup>Required</sup> <a name="MaxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.maxAgeInSeconds"></a>

```go
func MaxAgeInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference <a name="StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.resetDays">ResetDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.resetDays"></a>

```go
func ResetDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.daysInput">DaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.days">Days</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.daysInput"></a>

```go
func DaysInput() *f64
```

- *Type:* *f64

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.days"></a>

```go
func Days() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageAccountBlobPropertiesDeleteRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a>

---


### StorageAccountBlobPropertiesOutputReference <a name="StorageAccountBlobPropertiesOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountBlobPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountBlobPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putContainerDeleteRetentionPolicy">PutContainerDeleteRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putCorsRule">PutCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putDeleteRetentionPolicy">PutDeleteRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putRestorePolicy">PutRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetChangeFeedEnabled">ResetChangeFeedEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetChangeFeedRetentionInDays">ResetChangeFeedRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetContainerDeleteRetentionPolicy">ResetContainerDeleteRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetCorsRule">ResetCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetDefaultServiceVersion">ResetDefaultServiceVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetDeleteRetentionPolicy">ResetDeleteRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetLastAccessTimeEnabled">ResetLastAccessTimeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetRestorePolicy">ResetRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetVersioningEnabled">ResetVersioningEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainerDeleteRetentionPolicy` <a name="PutContainerDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putContainerDeleteRetentionPolicy"></a>

```go
func PutContainerDeleteRetentionPolicy(value StorageAccountBlobPropertiesContainerDeleteRetentionPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putContainerDeleteRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a>

---

##### `PutCorsRule` <a name="PutCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putCorsRule"></a>

```go
func PutCorsRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putCorsRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDeleteRetentionPolicy` <a name="PutDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putDeleteRetentionPolicy"></a>

```go
func PutDeleteRetentionPolicy(value StorageAccountBlobPropertiesDeleteRetentionPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putDeleteRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a>

---

##### `PutRestorePolicy` <a name="PutRestorePolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putRestorePolicy"></a>

```go
func PutRestorePolicy(value StorageAccountBlobPropertiesRestorePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putRestorePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a>

---

##### `ResetChangeFeedEnabled` <a name="ResetChangeFeedEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetChangeFeedEnabled"></a>

```go
func ResetChangeFeedEnabled()
```

##### `ResetChangeFeedRetentionInDays` <a name="ResetChangeFeedRetentionInDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetChangeFeedRetentionInDays"></a>

```go
func ResetChangeFeedRetentionInDays()
```

##### `ResetContainerDeleteRetentionPolicy` <a name="ResetContainerDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetContainerDeleteRetentionPolicy"></a>

```go
func ResetContainerDeleteRetentionPolicy()
```

##### `ResetCorsRule` <a name="ResetCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetCorsRule"></a>

```go
func ResetCorsRule()
```

##### `ResetDefaultServiceVersion` <a name="ResetDefaultServiceVersion" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetDefaultServiceVersion"></a>

```go
func ResetDefaultServiceVersion()
```

##### `ResetDeleteRetentionPolicy` <a name="ResetDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetDeleteRetentionPolicy"></a>

```go
func ResetDeleteRetentionPolicy()
```

##### `ResetLastAccessTimeEnabled` <a name="ResetLastAccessTimeEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetLastAccessTimeEnabled"></a>

```go
func ResetLastAccessTimeEnabled()
```

##### `ResetRestorePolicy` <a name="ResetRestorePolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetRestorePolicy"></a>

```go
func ResetRestorePolicy()
```

##### `ResetVersioningEnabled` <a name="ResetVersioningEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetVersioningEnabled"></a>

```go
func ResetVersioningEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.containerDeleteRetentionPolicy">ContainerDeleteRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference">StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.corsRule">CorsRule</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList">StorageAccountBlobPropertiesCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.deleteRetentionPolicy">DeleteRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference">StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.restorePolicy">RestorePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference">StorageAccountBlobPropertiesRestorePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedEnabledInput">ChangeFeedEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedRetentionInDaysInput">ChangeFeedRetentionInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.containerDeleteRetentionPolicyInput">ContainerDeleteRetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.corsRuleInput">CorsRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.defaultServiceVersionInput">DefaultServiceVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.deleteRetentionPolicyInput">DeleteRetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.lastAccessTimeEnabledInput">LastAccessTimeEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.restorePolicyInput">RestorePolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.versioningEnabledInput">VersioningEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedEnabled">ChangeFeedEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedRetentionInDays">ChangeFeedRetentionInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.defaultServiceVersion">DefaultServiceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.lastAccessTimeEnabled">LastAccessTimeEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.versioningEnabled">VersioningEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerDeleteRetentionPolicy`<sup>Required</sup> <a name="ContainerDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.containerDeleteRetentionPolicy"></a>

```go
func ContainerDeleteRetentionPolicy() StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference">StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference</a>

---

##### `CorsRule`<sup>Required</sup> <a name="CorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.corsRule"></a>

```go
func CorsRule() StorageAccountBlobPropertiesCorsRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList">StorageAccountBlobPropertiesCorsRuleList</a>

---

##### `DeleteRetentionPolicy`<sup>Required</sup> <a name="DeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.deleteRetentionPolicy"></a>

```go
func DeleteRetentionPolicy() StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference">StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference</a>

---

##### `RestorePolicy`<sup>Required</sup> <a name="RestorePolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.restorePolicy"></a>

```go
func RestorePolicy() StorageAccountBlobPropertiesRestorePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference">StorageAccountBlobPropertiesRestorePolicyOutputReference</a>

---

##### `ChangeFeedEnabledInput`<sup>Optional</sup> <a name="ChangeFeedEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedEnabledInput"></a>

```go
func ChangeFeedEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ChangeFeedRetentionInDaysInput`<sup>Optional</sup> <a name="ChangeFeedRetentionInDaysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedRetentionInDaysInput"></a>

```go
func ChangeFeedRetentionInDaysInput() *f64
```

- *Type:* *f64

---

##### `ContainerDeleteRetentionPolicyInput`<sup>Optional</sup> <a name="ContainerDeleteRetentionPolicyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.containerDeleteRetentionPolicyInput"></a>

```go
func ContainerDeleteRetentionPolicyInput() StorageAccountBlobPropertiesContainerDeleteRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a>

---

##### `CorsRuleInput`<sup>Optional</sup> <a name="CorsRuleInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.corsRuleInput"></a>

```go
func CorsRuleInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultServiceVersionInput`<sup>Optional</sup> <a name="DefaultServiceVersionInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.defaultServiceVersionInput"></a>

```go
func DefaultServiceVersionInput() *string
```

- *Type:* *string

---

##### `DeleteRetentionPolicyInput`<sup>Optional</sup> <a name="DeleteRetentionPolicyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.deleteRetentionPolicyInput"></a>

```go
func DeleteRetentionPolicyInput() StorageAccountBlobPropertiesDeleteRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a>

---

##### `LastAccessTimeEnabledInput`<sup>Optional</sup> <a name="LastAccessTimeEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.lastAccessTimeEnabledInput"></a>

```go
func LastAccessTimeEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RestorePolicyInput`<sup>Optional</sup> <a name="RestorePolicyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.restorePolicyInput"></a>

```go
func RestorePolicyInput() StorageAccountBlobPropertiesRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a>

---

##### `VersioningEnabledInput`<sup>Optional</sup> <a name="VersioningEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.versioningEnabledInput"></a>

```go
func VersioningEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ChangeFeedEnabled`<sup>Required</sup> <a name="ChangeFeedEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedEnabled"></a>

```go
func ChangeFeedEnabled() interface{}
```

- *Type:* interface{}

---

##### `ChangeFeedRetentionInDays`<sup>Required</sup> <a name="ChangeFeedRetentionInDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedRetentionInDays"></a>

```go
func ChangeFeedRetentionInDays() *f64
```

- *Type:* *f64

---

##### `DefaultServiceVersion`<sup>Required</sup> <a name="DefaultServiceVersion" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.defaultServiceVersion"></a>

```go
func DefaultServiceVersion() *string
```

- *Type:* *string

---

##### `LastAccessTimeEnabled`<sup>Required</sup> <a name="LastAccessTimeEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.lastAccessTimeEnabled"></a>

```go
func LastAccessTimeEnabled() interface{}
```

- *Type:* interface{}

---

##### `VersioningEnabled`<sup>Required</sup> <a name="VersioningEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.versioningEnabled"></a>

```go
func VersioningEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageAccountBlobProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a>

---


### StorageAccountBlobPropertiesRestorePolicyOutputReference <a name="StorageAccountBlobPropertiesRestorePolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountBlobPropertiesRestorePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountBlobPropertiesRestorePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.daysInput">DaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.days">Days</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.daysInput"></a>

```go
func DaysInput() *f64
```

- *Type:* *f64

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.days"></a>

```go
func Days() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageAccountBlobPropertiesRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a>

---


### StorageAccountCustomDomainOutputReference <a name="StorageAccountCustomDomainOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountCustomDomainOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountCustomDomainOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.resetUseSubdomain">ResetUseSubdomain</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseSubdomain` <a name="ResetUseSubdomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.resetUseSubdomain"></a>

```go
func ResetUseSubdomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.useSubdomainInput">UseSubdomainInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.useSubdomain">UseSubdomain</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `UseSubdomainInput`<sup>Optional</sup> <a name="UseSubdomainInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.useSubdomainInput"></a>

```go
func UseSubdomainInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `UseSubdomain`<sup>Required</sup> <a name="UseSubdomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.useSubdomain"></a>

```go
func UseSubdomain() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageAccountCustomDomain
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a>

---


### StorageAccountCustomerManagedKeyOutputReference <a name="StorageAccountCustomerManagedKeyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountCustomerManagedKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountCustomerManagedKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.userAssignedIdentityIdInput">UserAssignedIdentityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput"></a>

```go
func KeyVaultKeyIdInput() *string
```

- *Type:* *string

---

##### `UserAssignedIdentityIdInput`<sup>Optional</sup> <a name="UserAssignedIdentityIdInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.userAssignedIdentityIdInput"></a>

```go
func UserAssignedIdentityIdInput() *string
```

- *Type:* *string

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.keyVaultKeyId"></a>

```go
func KeyVaultKeyId() *string
```

- *Type:* *string

---

##### `UserAssignedIdentityId`<sup>Required</sup> <a name="UserAssignedIdentityId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.userAssignedIdentityId"></a>

```go
func UserAssignedIdentityId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageAccountCustomerManagedKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a>

---


### StorageAccountIdentityOutputReference <a name="StorageAccountIdentityOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageAccountIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a>

---


### StorageAccountImmutabilityPolicyOutputReference <a name="StorageAccountImmutabilityPolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountImmutabilityPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountImmutabilityPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.allowProtectedAppendWritesInput">AllowProtectedAppendWritesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.periodSinceCreationInDaysInput">PeriodSinceCreationInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.allowProtectedAppendWrites">AllowProtectedAppendWrites</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.periodSinceCreationInDays">PeriodSinceCreationInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowProtectedAppendWritesInput`<sup>Optional</sup> <a name="AllowProtectedAppendWritesInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.allowProtectedAppendWritesInput"></a>

```go
func AllowProtectedAppendWritesInput() interface{}
```

- *Type:* interface{}

---

##### `PeriodSinceCreationInDaysInput`<sup>Optional</sup> <a name="PeriodSinceCreationInDaysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.periodSinceCreationInDaysInput"></a>

```go
func PeriodSinceCreationInDaysInput() *f64
```

- *Type:* *f64

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `AllowProtectedAppendWrites`<sup>Required</sup> <a name="AllowProtectedAppendWrites" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.allowProtectedAppendWrites"></a>

```go
func AllowProtectedAppendWrites() interface{}
```

- *Type:* interface{}

---

##### `PeriodSinceCreationInDays`<sup>Required</sup> <a name="PeriodSinceCreationInDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.periodSinceCreationInDays"></a>

```go
func PeriodSinceCreationInDays() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageAccountImmutabilityPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a>

---


### StorageAccountNetworkRulesOutputReference <a name="StorageAccountNetworkRulesOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountNetworkRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountNetworkRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.putPrivateLinkAccess">PutPrivateLinkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetBypass">ResetBypass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetIpRules">ResetIpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetPrivateLinkAccess">ResetPrivateLinkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetVirtualNetworkSubnetIds">ResetVirtualNetworkSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrivateLinkAccess` <a name="PutPrivateLinkAccess" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.putPrivateLinkAccess"></a>

```go
func PutPrivateLinkAccess(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.putPrivateLinkAccess.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBypass` <a name="ResetBypass" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetBypass"></a>

```go
func ResetBypass()
```

##### `ResetIpRules` <a name="ResetIpRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetIpRules"></a>

```go
func ResetIpRules()
```

##### `ResetPrivateLinkAccess` <a name="ResetPrivateLinkAccess" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetPrivateLinkAccess"></a>

```go
func ResetPrivateLinkAccess()
```

##### `ResetVirtualNetworkSubnetIds` <a name="ResetVirtualNetworkSubnetIds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetVirtualNetworkSubnetIds"></a>

```go
func ResetVirtualNetworkSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.privateLinkAccess">PrivateLinkAccess</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList">StorageAccountNetworkRulesPrivateLinkAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.bypassInput">BypassInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.defaultActionInput">DefaultActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.ipRulesInput">IpRulesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.privateLinkAccessInput">PrivateLinkAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.virtualNetworkSubnetIdsInput">VirtualNetworkSubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.bypass">Bypass</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.defaultAction">DefaultAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.ipRules">IpRules</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.virtualNetworkSubnetIds">VirtualNetworkSubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrivateLinkAccess`<sup>Required</sup> <a name="PrivateLinkAccess" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.privateLinkAccess"></a>

```go
func PrivateLinkAccess() StorageAccountNetworkRulesPrivateLinkAccessList
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList">StorageAccountNetworkRulesPrivateLinkAccessList</a>

---

##### `BypassInput`<sup>Optional</sup> <a name="BypassInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.bypassInput"></a>

```go
func BypassInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultActionInput`<sup>Optional</sup> <a name="DefaultActionInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.defaultActionInput"></a>

```go
func DefaultActionInput() *string
```

- *Type:* *string

---

##### `IpRulesInput`<sup>Optional</sup> <a name="IpRulesInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.ipRulesInput"></a>

```go
func IpRulesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateLinkAccessInput`<sup>Optional</sup> <a name="PrivateLinkAccessInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.privateLinkAccessInput"></a>

```go
func PrivateLinkAccessInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualNetworkSubnetIdsInput`<sup>Optional</sup> <a name="VirtualNetworkSubnetIdsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.virtualNetworkSubnetIdsInput"></a>

```go
func VirtualNetworkSubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Bypass`<sup>Required</sup> <a name="Bypass" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.bypass"></a>

```go
func Bypass() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.defaultAction"></a>

```go
func DefaultAction() *string
```

- *Type:* *string

---

##### `IpRules`<sup>Required</sup> <a name="IpRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.ipRules"></a>

```go
func IpRules() *[]*string
```

- *Type:* *[]*string

---

##### `VirtualNetworkSubnetIds`<sup>Required</sup> <a name="VirtualNetworkSubnetIds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.virtualNetworkSubnetIds"></a>

```go
func VirtualNetworkSubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageAccountNetworkRules
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a>

---


### StorageAccountNetworkRulesPrivateLinkAccessList <a name="StorageAccountNetworkRulesPrivateLinkAccessList" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountNetworkRulesPrivateLinkAccessList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StorageAccountNetworkRulesPrivateLinkAccessList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.get"></a>

```go
func Get(index *f64) StorageAccountNetworkRulesPrivateLinkAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageAccountNetworkRulesPrivateLinkAccessOutputReference <a name="StorageAccountNetworkRulesPrivateLinkAccessOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountNetworkRulesPrivateLinkAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StorageAccountNetworkRulesPrivateLinkAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.resetEndpointTenantId">ResetEndpointTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpointTenantId` <a name="ResetEndpointTenantId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.resetEndpointTenantId"></a>

```go
func ResetEndpointTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointResourceIdInput">EndpointResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointTenantIdInput">EndpointTenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointResourceId">EndpointResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointTenantId">EndpointTenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointResourceIdInput`<sup>Optional</sup> <a name="EndpointResourceIdInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointResourceIdInput"></a>

```go
func EndpointResourceIdInput() *string
```

- *Type:* *string

---

##### `EndpointTenantIdInput`<sup>Optional</sup> <a name="EndpointTenantIdInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointTenantIdInput"></a>

```go
func EndpointTenantIdInput() *string
```

- *Type:* *string

---

##### `EndpointResourceId`<sup>Required</sup> <a name="EndpointResourceId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointResourceId"></a>

```go
func EndpointResourceId() *string
```

- *Type:* *string

---

##### `EndpointTenantId`<sup>Required</sup> <a name="EndpointTenantId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointTenantId"></a>

```go
func EndpointTenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageAccountQueuePropertiesCorsRuleList <a name="StorageAccountQueuePropertiesCorsRuleList" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountQueuePropertiesCorsRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StorageAccountQueuePropertiesCorsRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.get"></a>

```go
func Get(index *f64) StorageAccountQueuePropertiesCorsRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageAccountQueuePropertiesCorsRuleOutputReference <a name="StorageAccountQueuePropertiesCorsRuleOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountQueuePropertiesCorsRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StorageAccountQueuePropertiesCorsRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedHeadersInput">AllowedHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedMethodsInput">AllowedMethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.exposedHeadersInput">ExposedHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput">MaxAgeInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedHeaders">AllowedHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.exposedHeaders">ExposedHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedHeadersInput`<sup>Optional</sup> <a name="AllowedHeadersInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedHeadersInput"></a>

```go
func AllowedHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedMethodsInput`<sup>Optional</sup> <a name="AllowedMethodsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedMethodsInput"></a>

```go
func AllowedMethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedOriginsInput"></a>

```go
func AllowedOriginsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExposedHeadersInput`<sup>Optional</sup> <a name="ExposedHeadersInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.exposedHeadersInput"></a>

```go
func ExposedHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaxAgeInSecondsInput`<sup>Optional</sup> <a name="MaxAgeInSecondsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput"></a>

```go
func MaxAgeInSecondsInput() *f64
```

- *Type:* *f64

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedHeaders"></a>

```go
func AllowedHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedMethods"></a>

```go
func AllowedMethods() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedOrigins"></a>

```go
func AllowedOrigins() *[]*string
```

- *Type:* *[]*string

---

##### `ExposedHeaders`<sup>Required</sup> <a name="ExposedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.exposedHeaders"></a>

```go
func ExposedHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `MaxAgeInSeconds`<sup>Required</sup> <a name="MaxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.maxAgeInSeconds"></a>

```go
func MaxAgeInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageAccountQueuePropertiesHourMetricsOutputReference <a name="StorageAccountQueuePropertiesHourMetricsOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountQueuePropertiesHourMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountQueuePropertiesHourMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resetIncludeApis">ResetIncludeApis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resetRetentionPolicyDays">ResetRetentionPolicyDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeApis` <a name="ResetIncludeApis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resetIncludeApis"></a>

```go
func ResetIncludeApis()
```

##### `ResetRetentionPolicyDays` <a name="ResetRetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resetRetentionPolicyDays"></a>

```go
func ResetRetentionPolicyDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.includeApisInput">IncludeApisInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.retentionPolicyDaysInput">RetentionPolicyDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.includeApis">IncludeApis</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeApisInput`<sup>Optional</sup> <a name="IncludeApisInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.includeApisInput"></a>

```go
func IncludeApisInput() interface{}
```

- *Type:* interface{}

---

##### `RetentionPolicyDaysInput`<sup>Optional</sup> <a name="RetentionPolicyDaysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.retentionPolicyDaysInput"></a>

```go
func RetentionPolicyDaysInput() *f64
```

- *Type:* *f64

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `IncludeApis`<sup>Required</sup> <a name="IncludeApis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.includeApis"></a>

```go
func IncludeApis() interface{}
```

- *Type:* interface{}

---

##### `RetentionPolicyDays`<sup>Required</sup> <a name="RetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.retentionPolicyDays"></a>

```go
func RetentionPolicyDays() *f64
```

- *Type:* *f64

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageAccountQueuePropertiesHourMetrics
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a>

---


### StorageAccountQueuePropertiesLoggingOutputReference <a name="StorageAccountQueuePropertiesLoggingOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountQueuePropertiesLoggingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountQueuePropertiesLoggingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.resetRetentionPolicyDays">ResetRetentionPolicyDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRetentionPolicyDays` <a name="ResetRetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.resetRetentionPolicyDays"></a>

```go
func ResetRetentionPolicyDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.deleteInput">DeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.readInput">ReadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.retentionPolicyDaysInput">RetentionPolicyDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.writeInput">WriteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.delete">Delete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.read">Read</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.write">Write</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.deleteInput"></a>

```go
func DeleteInput() interface{}
```

- *Type:* interface{}

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.readInput"></a>

```go
func ReadInput() interface{}
```

- *Type:* interface{}

---

##### `RetentionPolicyDaysInput`<sup>Optional</sup> <a name="RetentionPolicyDaysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.retentionPolicyDaysInput"></a>

```go
func RetentionPolicyDaysInput() *f64
```

- *Type:* *f64

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `WriteInput`<sup>Optional</sup> <a name="WriteInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.writeInput"></a>

```go
func WriteInput() interface{}
```

- *Type:* interface{}

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.delete"></a>

```go
func Delete() interface{}
```

- *Type:* interface{}

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.read"></a>

```go
func Read() interface{}
```

- *Type:* interface{}

---

##### `RetentionPolicyDays`<sup>Required</sup> <a name="RetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.retentionPolicyDays"></a>

```go
func RetentionPolicyDays() *f64
```

- *Type:* *f64

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.write"></a>

```go
func Write() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageAccountQueuePropertiesLogging
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a>

---


### StorageAccountQueuePropertiesMinuteMetricsOutputReference <a name="StorageAccountQueuePropertiesMinuteMetricsOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountQueuePropertiesMinuteMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountQueuePropertiesMinuteMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resetIncludeApis">ResetIncludeApis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resetRetentionPolicyDays">ResetRetentionPolicyDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeApis` <a name="ResetIncludeApis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resetIncludeApis"></a>

```go
func ResetIncludeApis()
```

##### `ResetRetentionPolicyDays` <a name="ResetRetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resetRetentionPolicyDays"></a>

```go
func ResetRetentionPolicyDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.includeApisInput">IncludeApisInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.retentionPolicyDaysInput">RetentionPolicyDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.includeApis">IncludeApis</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeApisInput`<sup>Optional</sup> <a name="IncludeApisInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.includeApisInput"></a>

```go
func IncludeApisInput() interface{}
```

- *Type:* interface{}

---

##### `RetentionPolicyDaysInput`<sup>Optional</sup> <a name="RetentionPolicyDaysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.retentionPolicyDaysInput"></a>

```go
func RetentionPolicyDaysInput() *f64
```

- *Type:* *f64

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `IncludeApis`<sup>Required</sup> <a name="IncludeApis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.includeApis"></a>

```go
func IncludeApis() interface{}
```

- *Type:* interface{}

---

##### `RetentionPolicyDays`<sup>Required</sup> <a name="RetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.retentionPolicyDays"></a>

```go
func RetentionPolicyDays() *f64
```

- *Type:* *f64

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageAccountQueuePropertiesMinuteMetrics
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a>

---


### StorageAccountQueuePropertiesOutputReference <a name="StorageAccountQueuePropertiesOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountQueuePropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountQueuePropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putCorsRule">PutCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putHourMetrics">PutHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putLogging">PutLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putMinuteMetrics">PutMinuteMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetCorsRule">ResetCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetHourMetrics">ResetHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetLogging">ResetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetMinuteMetrics">ResetMinuteMetrics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCorsRule` <a name="PutCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putCorsRule"></a>

```go
func PutCorsRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putCorsRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHourMetrics` <a name="PutHourMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putHourMetrics"></a>

```go
func PutHourMetrics(value StorageAccountQueuePropertiesHourMetrics)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putHourMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a>

---

##### `PutLogging` <a name="PutLogging" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putLogging"></a>

```go
func PutLogging(value StorageAccountQueuePropertiesLogging)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a>

---

##### `PutMinuteMetrics` <a name="PutMinuteMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putMinuteMetrics"></a>

```go
func PutMinuteMetrics(value StorageAccountQueuePropertiesMinuteMetrics)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putMinuteMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a>

---

##### `ResetCorsRule` <a name="ResetCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetCorsRule"></a>

```go
func ResetCorsRule()
```

##### `ResetHourMetrics` <a name="ResetHourMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetHourMetrics"></a>

```go
func ResetHourMetrics()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetLogging"></a>

```go
func ResetLogging()
```

##### `ResetMinuteMetrics` <a name="ResetMinuteMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetMinuteMetrics"></a>

```go
func ResetMinuteMetrics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.corsRule">CorsRule</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList">StorageAccountQueuePropertiesCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.hourMetrics">HourMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference">StorageAccountQueuePropertiesHourMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference">StorageAccountQueuePropertiesLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.minuteMetrics">MinuteMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference">StorageAccountQueuePropertiesMinuteMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.corsRuleInput">CorsRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.hourMetricsInput">HourMetricsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.loggingInput">LoggingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.minuteMetricsInput">MinuteMetricsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CorsRule`<sup>Required</sup> <a name="CorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.corsRule"></a>

```go
func CorsRule() StorageAccountQueuePropertiesCorsRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList">StorageAccountQueuePropertiesCorsRuleList</a>

---

##### `HourMetrics`<sup>Required</sup> <a name="HourMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.hourMetrics"></a>

```go
func HourMetrics() StorageAccountQueuePropertiesHourMetricsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference">StorageAccountQueuePropertiesHourMetricsOutputReference</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.logging"></a>

```go
func Logging() StorageAccountQueuePropertiesLoggingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference">StorageAccountQueuePropertiesLoggingOutputReference</a>

---

##### `MinuteMetrics`<sup>Required</sup> <a name="MinuteMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.minuteMetrics"></a>

```go
func MinuteMetrics() StorageAccountQueuePropertiesMinuteMetricsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference">StorageAccountQueuePropertiesMinuteMetricsOutputReference</a>

---

##### `CorsRuleInput`<sup>Optional</sup> <a name="CorsRuleInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.corsRuleInput"></a>

```go
func CorsRuleInput() interface{}
```

- *Type:* interface{}

---

##### `HourMetricsInput`<sup>Optional</sup> <a name="HourMetricsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.hourMetricsInput"></a>

```go
func HourMetricsInput() StorageAccountQueuePropertiesHourMetrics
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a>

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.loggingInput"></a>

```go
func LoggingInput() StorageAccountQueuePropertiesLogging
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a>

---

##### `MinuteMetricsInput`<sup>Optional</sup> <a name="MinuteMetricsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.minuteMetricsInput"></a>

```go
func MinuteMetricsInput() StorageAccountQueuePropertiesMinuteMetrics
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageAccountQueueProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a>

---


### StorageAccountRoutingOutputReference <a name="StorageAccountRoutingOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountRoutingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountRoutingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resetChoice">ResetChoice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resetPublishInternetEndpoints">ResetPublishInternetEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resetPublishMicrosoftEndpoints">ResetPublishMicrosoftEndpoints</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChoice` <a name="ResetChoice" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resetChoice"></a>

```go
func ResetChoice()
```

##### `ResetPublishInternetEndpoints` <a name="ResetPublishInternetEndpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resetPublishInternetEndpoints"></a>

```go
func ResetPublishInternetEndpoints()
```

##### `ResetPublishMicrosoftEndpoints` <a name="ResetPublishMicrosoftEndpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resetPublishMicrosoftEndpoints"></a>

```go
func ResetPublishMicrosoftEndpoints()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.choiceInput">ChoiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishInternetEndpointsInput">PublishInternetEndpointsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishMicrosoftEndpointsInput">PublishMicrosoftEndpointsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.choice">Choice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishInternetEndpoints">PublishInternetEndpoints</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishMicrosoftEndpoints">PublishMicrosoftEndpoints</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChoiceInput`<sup>Optional</sup> <a name="ChoiceInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.choiceInput"></a>

```go
func ChoiceInput() *string
```

- *Type:* *string

---

##### `PublishInternetEndpointsInput`<sup>Optional</sup> <a name="PublishInternetEndpointsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishInternetEndpointsInput"></a>

```go
func PublishInternetEndpointsInput() interface{}
```

- *Type:* interface{}

---

##### `PublishMicrosoftEndpointsInput`<sup>Optional</sup> <a name="PublishMicrosoftEndpointsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishMicrosoftEndpointsInput"></a>

```go
func PublishMicrosoftEndpointsInput() interface{}
```

- *Type:* interface{}

---

##### `Choice`<sup>Required</sup> <a name="Choice" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.choice"></a>

```go
func Choice() *string
```

- *Type:* *string

---

##### `PublishInternetEndpoints`<sup>Required</sup> <a name="PublishInternetEndpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishInternetEndpoints"></a>

```go
func PublishInternetEndpoints() interface{}
```

- *Type:* interface{}

---

##### `PublishMicrosoftEndpoints`<sup>Required</sup> <a name="PublishMicrosoftEndpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishMicrosoftEndpoints"></a>

```go
func PublishMicrosoftEndpoints() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageAccountRouting
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a>

---


### StorageAccountSasPolicyOutputReference <a name="StorageAccountSasPolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountSasPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountSasPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.resetExpirationAction">ResetExpirationAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpirationAction` <a name="ResetExpirationAction" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.resetExpirationAction"></a>

```go
func ResetExpirationAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationActionInput">ExpirationActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationPeriodInput">ExpirationPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationAction">ExpirationAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationPeriod">ExpirationPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpirationActionInput`<sup>Optional</sup> <a name="ExpirationActionInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationActionInput"></a>

```go
func ExpirationActionInput() *string
```

- *Type:* *string

---

##### `ExpirationPeriodInput`<sup>Optional</sup> <a name="ExpirationPeriodInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationPeriodInput"></a>

```go
func ExpirationPeriodInput() *string
```

- *Type:* *string

---

##### `ExpirationAction`<sup>Required</sup> <a name="ExpirationAction" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationAction"></a>

```go
func ExpirationAction() *string
```

- *Type:* *string

---

##### `ExpirationPeriod`<sup>Required</sup> <a name="ExpirationPeriod" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationPeriod"></a>

```go
func ExpirationPeriod() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageAccountSasPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a>

---


### StorageAccountSharePropertiesCorsRuleList <a name="StorageAccountSharePropertiesCorsRuleList" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountSharePropertiesCorsRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StorageAccountSharePropertiesCorsRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.get"></a>

```go
func Get(index *f64) StorageAccountSharePropertiesCorsRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageAccountSharePropertiesCorsRuleOutputReference <a name="StorageAccountSharePropertiesCorsRuleOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountSharePropertiesCorsRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StorageAccountSharePropertiesCorsRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedHeadersInput">AllowedHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedMethodsInput">AllowedMethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.exposedHeadersInput">ExposedHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput">MaxAgeInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedHeaders">AllowedHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.exposedHeaders">ExposedHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedHeadersInput`<sup>Optional</sup> <a name="AllowedHeadersInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedHeadersInput"></a>

```go
func AllowedHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedMethodsInput`<sup>Optional</sup> <a name="AllowedMethodsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedMethodsInput"></a>

```go
func AllowedMethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedOriginsInput"></a>

```go
func AllowedOriginsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExposedHeadersInput`<sup>Optional</sup> <a name="ExposedHeadersInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.exposedHeadersInput"></a>

```go
func ExposedHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaxAgeInSecondsInput`<sup>Optional</sup> <a name="MaxAgeInSecondsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput"></a>

```go
func MaxAgeInSecondsInput() *f64
```

- *Type:* *f64

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedHeaders"></a>

```go
func AllowedHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedMethods"></a>

```go
func AllowedMethods() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedOrigins"></a>

```go
func AllowedOrigins() *[]*string
```

- *Type:* *[]*string

---

##### `ExposedHeaders`<sup>Required</sup> <a name="ExposedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.exposedHeaders"></a>

```go
func ExposedHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `MaxAgeInSeconds`<sup>Required</sup> <a name="MaxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.maxAgeInSeconds"></a>

```go
func MaxAgeInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageAccountSharePropertiesOutputReference <a name="StorageAccountSharePropertiesOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountSharePropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountSharePropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putCorsRule">PutCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putRetentionPolicy">PutRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putSmb">PutSmb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resetCorsRule">ResetCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resetRetentionPolicy">ResetRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resetSmb">ResetSmb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCorsRule` <a name="PutCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putCorsRule"></a>

```go
func PutCorsRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putCorsRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRetentionPolicy` <a name="PutRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putRetentionPolicy"></a>

```go
func PutRetentionPolicy(value StorageAccountSharePropertiesRetentionPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a>

---

##### `PutSmb` <a name="PutSmb" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putSmb"></a>

```go
func PutSmb(value StorageAccountSharePropertiesSmb)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putSmb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a>

---

##### `ResetCorsRule` <a name="ResetCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resetCorsRule"></a>

```go
func ResetCorsRule()
```

##### `ResetRetentionPolicy` <a name="ResetRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resetRetentionPolicy"></a>

```go
func ResetRetentionPolicy()
```

##### `ResetSmb` <a name="ResetSmb" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resetSmb"></a>

```go
func ResetSmb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.corsRule">CorsRule</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList">StorageAccountSharePropertiesCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference">StorageAccountSharePropertiesRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.smb">Smb</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference">StorageAccountSharePropertiesSmbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.corsRuleInput">CorsRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.retentionPolicyInput">RetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.smbInput">SmbInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CorsRule`<sup>Required</sup> <a name="CorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.corsRule"></a>

```go
func CorsRule() StorageAccountSharePropertiesCorsRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList">StorageAccountSharePropertiesCorsRuleList</a>

---

##### `RetentionPolicy`<sup>Required</sup> <a name="RetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.retentionPolicy"></a>

```go
func RetentionPolicy() StorageAccountSharePropertiesRetentionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference">StorageAccountSharePropertiesRetentionPolicyOutputReference</a>

---

##### `Smb`<sup>Required</sup> <a name="Smb" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.smb"></a>

```go
func Smb() StorageAccountSharePropertiesSmbOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference">StorageAccountSharePropertiesSmbOutputReference</a>

---

##### `CorsRuleInput`<sup>Optional</sup> <a name="CorsRuleInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.corsRuleInput"></a>

```go
func CorsRuleInput() interface{}
```

- *Type:* interface{}

---

##### `RetentionPolicyInput`<sup>Optional</sup> <a name="RetentionPolicyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.retentionPolicyInput"></a>

```go
func RetentionPolicyInput() StorageAccountSharePropertiesRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a>

---

##### `SmbInput`<sup>Optional</sup> <a name="SmbInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.smbInput"></a>

```go
func SmbInput() StorageAccountSharePropertiesSmb
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageAccountShareProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a>

---


### StorageAccountSharePropertiesRetentionPolicyOutputReference <a name="StorageAccountSharePropertiesRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountSharePropertiesRetentionPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountSharePropertiesRetentionPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.resetDays">ResetDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.resetDays"></a>

```go
func ResetDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.daysInput">DaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.days">Days</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.daysInput"></a>

```go
func DaysInput() *f64
```

- *Type:* *f64

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.days"></a>

```go
func Days() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageAccountSharePropertiesRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a>

---


### StorageAccountSharePropertiesSmbOutputReference <a name="StorageAccountSharePropertiesSmbOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountSharePropertiesSmbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountSharePropertiesSmbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetAuthenticationTypes">ResetAuthenticationTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetChannelEncryptionType">ResetChannelEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetKerberosTicketEncryptionType">ResetKerberosTicketEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetMultichannelEnabled">ResetMultichannelEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetVersions">ResetVersions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationTypes` <a name="ResetAuthenticationTypes" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetAuthenticationTypes"></a>

```go
func ResetAuthenticationTypes()
```

##### `ResetChannelEncryptionType` <a name="ResetChannelEncryptionType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetChannelEncryptionType"></a>

```go
func ResetChannelEncryptionType()
```

##### `ResetKerberosTicketEncryptionType` <a name="ResetKerberosTicketEncryptionType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetKerberosTicketEncryptionType"></a>

```go
func ResetKerberosTicketEncryptionType()
```

##### `ResetMultichannelEnabled` <a name="ResetMultichannelEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetMultichannelEnabled"></a>

```go
func ResetMultichannelEnabled()
```

##### `ResetVersions` <a name="ResetVersions" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetVersions"></a>

```go
func ResetVersions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.authenticationTypesInput">AuthenticationTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.channelEncryptionTypeInput">ChannelEncryptionTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.kerberosTicketEncryptionTypeInput">KerberosTicketEncryptionTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.multichannelEnabledInput">MultichannelEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.versionsInput">VersionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.authenticationTypes">AuthenticationTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.channelEncryptionType">ChannelEncryptionType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.kerberosTicketEncryptionType">KerberosTicketEncryptionType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.multichannelEnabled">MultichannelEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.versions">Versions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationTypesInput`<sup>Optional</sup> <a name="AuthenticationTypesInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.authenticationTypesInput"></a>

```go
func AuthenticationTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ChannelEncryptionTypeInput`<sup>Optional</sup> <a name="ChannelEncryptionTypeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.channelEncryptionTypeInput"></a>

```go
func ChannelEncryptionTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `KerberosTicketEncryptionTypeInput`<sup>Optional</sup> <a name="KerberosTicketEncryptionTypeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.kerberosTicketEncryptionTypeInput"></a>

```go
func KerberosTicketEncryptionTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `MultichannelEnabledInput`<sup>Optional</sup> <a name="MultichannelEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.multichannelEnabledInput"></a>

```go
func MultichannelEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `VersionsInput`<sup>Optional</sup> <a name="VersionsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.versionsInput"></a>

```go
func VersionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuthenticationTypes`<sup>Required</sup> <a name="AuthenticationTypes" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.authenticationTypes"></a>

```go
func AuthenticationTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ChannelEncryptionType`<sup>Required</sup> <a name="ChannelEncryptionType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.channelEncryptionType"></a>

```go
func ChannelEncryptionType() *[]*string
```

- *Type:* *[]*string

---

##### `KerberosTicketEncryptionType`<sup>Required</sup> <a name="KerberosTicketEncryptionType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.kerberosTicketEncryptionType"></a>

```go
func KerberosTicketEncryptionType() *[]*string
```

- *Type:* *[]*string

---

##### `MultichannelEnabled`<sup>Required</sup> <a name="MultichannelEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.multichannelEnabled"></a>

```go
func MultichannelEnabled() interface{}
```

- *Type:* interface{}

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.versions"></a>

```go
func Versions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageAccountSharePropertiesSmb
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a>

---


### StorageAccountStaticWebsiteOutputReference <a name="StorageAccountStaticWebsiteOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountStaticWebsiteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountStaticWebsiteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resetError404Document">ResetError404Document</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resetIndexDocument">ResetIndexDocument</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetError404Document` <a name="ResetError404Document" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resetError404Document"></a>

```go
func ResetError404Document()
```

##### `ResetIndexDocument` <a name="ResetIndexDocument" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resetIndexDocument"></a>

```go
func ResetIndexDocument()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.error404DocumentInput">Error404DocumentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.indexDocumentInput">IndexDocumentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.error404Document">Error404Document</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.indexDocument">IndexDocument</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Error404DocumentInput`<sup>Optional</sup> <a name="Error404DocumentInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.error404DocumentInput"></a>

```go
func Error404DocumentInput() *string
```

- *Type:* *string

---

##### `IndexDocumentInput`<sup>Optional</sup> <a name="IndexDocumentInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.indexDocumentInput"></a>

```go
func IndexDocumentInput() *string
```

- *Type:* *string

---

##### `Error404Document`<sup>Required</sup> <a name="Error404Document" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.error404Document"></a>

```go
func Error404Document() *string
```

- *Type:* *string

---

##### `IndexDocument`<sup>Required</sup> <a name="IndexDocument" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.indexDocument"></a>

```go
func IndexDocument() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageAccountStaticWebsite
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a>

---


### StorageAccountTimeoutsOutputReference <a name="StorageAccountTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/storageaccount"

storageaccount.NewStorageAccountTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



