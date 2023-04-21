# `azurerm_cosmosdb_account`

Refer to the Terraform Registory for docs: [`azurerm_cosmosdb_account`](https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account).

# `cosmosdbAccount` Submodule <a name="`cosmosdbAccount` Submodule" id="@cdktf/provider-azurerm.cosmosdbAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbAccount <a name="CosmosdbAccount" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account azurerm_cosmosdb_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

cosmosdbaccount.NewCosmosdbAccount(scope Construct, id *string, config CosmosdbAccountConfig) CosmosdbAccount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig">CosmosdbAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig">CosmosdbAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putAnalyticalStorage">PutAnalyticalStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putBackup">PutBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCapabilities">PutCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCapacity">PutCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putConsistencyPolicy">PutConsistencyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCorsRule">PutCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putGeoLocation">PutGeoLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putRestore">PutRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putVirtualNetworkRule">PutVirtualNetworkRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetAccessKeyMetadataWritesEnabled">ResetAccessKeyMetadataWritesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetAnalyticalStorage">ResetAnalyticalStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetAnalyticalStorageEnabled">ResetAnalyticalStorageEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetBackup">ResetBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCapabilities">ResetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCapacity">ResetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCorsRule">ResetCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCreateMode">ResetCreateMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetDefaultIdentityType">ResetDefaultIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetEnableAutomaticFailover">ResetEnableAutomaticFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetEnableFreeTier">ResetEnableFreeTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetEnableMultipleWriteLocations">ResetEnableMultipleWriteLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetIpRangeFilter">ResetIpRangeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetIsVirtualNetworkFilterEnabled">ResetIsVirtualNetworkFilterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetKeyVaultKeyId">ResetKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetKind">ResetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetLocalAuthenticationDisabled">ResetLocalAuthenticationDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetMongoServerVersion">ResetMongoServerVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetNetworkAclBypassForAzureServices">ResetNetworkAclBypassForAzureServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetNetworkAclBypassIds">ResetNetworkAclBypassIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetRestore">ResetRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetVirtualNetworkRule">ResetVirtualNetworkRule</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAnalyticalStorage` <a name="PutAnalyticalStorage" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putAnalyticalStorage"></a>

```go
func PutAnalyticalStorage(value CosmosdbAccountAnalyticalStorage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putAnalyticalStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage">CosmosdbAccountAnalyticalStorage</a>

---

##### `PutBackup` <a name="PutBackup" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putBackup"></a>

```go
func PutBackup(value CosmosdbAccountBackup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup">CosmosdbAccountBackup</a>

---

##### `PutCapabilities` <a name="PutCapabilities" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCapabilities"></a>

```go
func PutCapabilities(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCapabilities.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCapacity` <a name="PutCapacity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCapacity"></a>

```go
func PutCapacity(value CosmosdbAccountCapacity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity">CosmosdbAccountCapacity</a>

---

##### `PutConsistencyPolicy` <a name="PutConsistencyPolicy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putConsistencyPolicy"></a>

```go
func PutConsistencyPolicy(value CosmosdbAccountConsistencyPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putConsistencyPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy">CosmosdbAccountConsistencyPolicy</a>

---

##### `PutCorsRule` <a name="PutCorsRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCorsRule"></a>

```go
func PutCorsRule(value CosmosdbAccountCorsRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCorsRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule">CosmosdbAccountCorsRule</a>

---

##### `PutGeoLocation` <a name="PutGeoLocation" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putGeoLocation"></a>

```go
func PutGeoLocation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putGeoLocation.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putIdentity"></a>

```go
func PutIdentity(value CosmosdbAccountIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity">CosmosdbAccountIdentity</a>

---

##### `PutRestore` <a name="PutRestore" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putRestore"></a>

```go
func PutRestore(value CosmosdbAccountRestore)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putRestore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore">CosmosdbAccountRestore</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putTimeouts"></a>

```go
func PutTimeouts(value CosmosdbAccountTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts">CosmosdbAccountTimeouts</a>

---

##### `PutVirtualNetworkRule` <a name="PutVirtualNetworkRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putVirtualNetworkRule"></a>

```go
func PutVirtualNetworkRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putVirtualNetworkRule.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessKeyMetadataWritesEnabled` <a name="ResetAccessKeyMetadataWritesEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetAccessKeyMetadataWritesEnabled"></a>

```go
func ResetAccessKeyMetadataWritesEnabled()
```

##### `ResetAnalyticalStorage` <a name="ResetAnalyticalStorage" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetAnalyticalStorage"></a>

```go
func ResetAnalyticalStorage()
```

##### `ResetAnalyticalStorageEnabled` <a name="ResetAnalyticalStorageEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetAnalyticalStorageEnabled"></a>

```go
func ResetAnalyticalStorageEnabled()
```

##### `ResetBackup` <a name="ResetBackup" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetBackup"></a>

```go
func ResetBackup()
```

##### `ResetCapabilities` <a name="ResetCapabilities" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCapabilities"></a>

```go
func ResetCapabilities()
```

##### `ResetCapacity` <a name="ResetCapacity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCapacity"></a>

```go
func ResetCapacity()
```

##### `ResetCorsRule` <a name="ResetCorsRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCorsRule"></a>

```go
func ResetCorsRule()
```

##### `ResetCreateMode` <a name="ResetCreateMode" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCreateMode"></a>

```go
func ResetCreateMode()
```

##### `ResetDefaultIdentityType` <a name="ResetDefaultIdentityType" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetDefaultIdentityType"></a>

```go
func ResetDefaultIdentityType()
```

##### `ResetEnableAutomaticFailover` <a name="ResetEnableAutomaticFailover" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetEnableAutomaticFailover"></a>

```go
func ResetEnableAutomaticFailover()
```

##### `ResetEnableFreeTier` <a name="ResetEnableFreeTier" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetEnableFreeTier"></a>

```go
func ResetEnableFreeTier()
```

##### `ResetEnableMultipleWriteLocations` <a name="ResetEnableMultipleWriteLocations" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetEnableMultipleWriteLocations"></a>

```go
func ResetEnableMultipleWriteLocations()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetIpRangeFilter` <a name="ResetIpRangeFilter" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetIpRangeFilter"></a>

```go
func ResetIpRangeFilter()
```

##### `ResetIsVirtualNetworkFilterEnabled` <a name="ResetIsVirtualNetworkFilterEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetIsVirtualNetworkFilterEnabled"></a>

```go
func ResetIsVirtualNetworkFilterEnabled()
```

##### `ResetKeyVaultKeyId` <a name="ResetKeyVaultKeyId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetKeyVaultKeyId"></a>

```go
func ResetKeyVaultKeyId()
```

##### `ResetKind` <a name="ResetKind" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetKind"></a>

```go
func ResetKind()
```

##### `ResetLocalAuthenticationDisabled` <a name="ResetLocalAuthenticationDisabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetLocalAuthenticationDisabled"></a>

```go
func ResetLocalAuthenticationDisabled()
```

##### `ResetMongoServerVersion` <a name="ResetMongoServerVersion" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetMongoServerVersion"></a>

```go
func ResetMongoServerVersion()
```

##### `ResetNetworkAclBypassForAzureServices` <a name="ResetNetworkAclBypassForAzureServices" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetNetworkAclBypassForAzureServices"></a>

```go
func ResetNetworkAclBypassForAzureServices()
```

##### `ResetNetworkAclBypassIds` <a name="ResetNetworkAclBypassIds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetNetworkAclBypassIds"></a>

```go
func ResetNetworkAclBypassIds()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetPublicNetworkAccessEnabled"></a>

```go
func ResetPublicNetworkAccessEnabled()
```

##### `ResetRestore` <a name="ResetRestore" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetRestore"></a>

```go
func ResetRestore()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVirtualNetworkRule` <a name="ResetVirtualNetworkRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetVirtualNetworkRule"></a>

```go
func ResetVirtualNetworkRule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

cosmosdbaccount.CosmosdbAccount_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

cosmosdbaccount.CosmosdbAccount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

cosmosdbaccount.CosmosdbAccount_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorage">AnalyticalStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference">CosmosdbAccountAnalyticalStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.backup">Backup</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference">CosmosdbAccountBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capabilities">Capabilities</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList">CosmosdbAccountCapabilitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capacity">Capacity</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference">CosmosdbAccountCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.connectionStrings">ConnectionStrings</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.consistencyPolicy">ConsistencyPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference">CosmosdbAccountConsistencyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.corsRule">CorsRule</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference">CosmosdbAccountCorsRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.geoLocation">GeoLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList">CosmosdbAccountGeoLocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference">CosmosdbAccountIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryKey">PrimaryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryReadonlyKey">PrimaryReadonlyKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryReadonlySqlConnectionString">PrimaryReadonlySqlConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primarySqlConnectionString">PrimarySqlConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.readEndpoints">ReadEndpoints</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.restore">Restore</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference">CosmosdbAccountRestoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryKey">SecondaryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryReadonlyKey">SecondaryReadonlyKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryReadonlySqlConnectionString">SecondaryReadonlySqlConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondarySqlConnectionString">SecondarySqlConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference">CosmosdbAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.virtualNetworkRule">VirtualNetworkRule</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList">CosmosdbAccountVirtualNetworkRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.writeEndpoints">WriteEndpoints</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.accessKeyMetadataWritesEnabledInput">AccessKeyMetadataWritesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorageEnabledInput">AnalyticalStorageEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorageInput">AnalyticalStorageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage">CosmosdbAccountAnalyticalStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.backupInput">BackupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup">CosmosdbAccountBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capabilitiesInput">CapabilitiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capacityInput">CapacityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity">CosmosdbAccountCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.consistencyPolicyInput">ConsistencyPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy">CosmosdbAccountConsistencyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.corsRuleInput">CorsRuleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule">CosmosdbAccountCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.createModeInput">CreateModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.defaultIdentityTypeInput">DefaultIdentityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.enableAutomaticFailoverInput">EnableAutomaticFailoverInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.enableFreeTierInput">EnableFreeTierInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.enableMultipleWriteLocationsInput">EnableMultipleWriteLocationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.geoLocationInput">GeoLocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity">CosmosdbAccountIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.ipRangeFilterInput">IpRangeFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.isVirtualNetworkFilterEnabledInput">IsVirtualNetworkFilterEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.localAuthenticationDisabledInput">LocalAuthenticationDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.mongoServerVersionInput">MongoServerVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassForAzureServicesInput">NetworkAclBypassForAzureServicesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassIdsInput">NetworkAclBypassIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.offerTypeInput">OfferTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.restoreInput">RestoreInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore">CosmosdbAccountRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.virtualNetworkRuleInput">VirtualNetworkRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.accessKeyMetadataWritesEnabled">AccessKeyMetadataWritesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorageEnabled">AnalyticalStorageEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.createMode">CreateMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.defaultIdentityType">DefaultIdentityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.enableAutomaticFailover">EnableAutomaticFailover</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.enableFreeTier">EnableFreeTier</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.enableMultipleWriteLocations">EnableMultipleWriteLocations</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.ipRangeFilter">IpRangeFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.isVirtualNetworkFilterEnabled">IsVirtualNetworkFilterEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.localAuthenticationDisabled">LocalAuthenticationDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.mongoServerVersion">MongoServerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassForAzureServices">NetworkAclBypassForAzureServices</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassIds">NetworkAclBypassIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.offerType">OfferType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AnalyticalStorage`<sup>Required</sup> <a name="AnalyticalStorage" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorage"></a>

```go
func AnalyticalStorage() CosmosdbAccountAnalyticalStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference">CosmosdbAccountAnalyticalStorageOutputReference</a>

---

##### `Backup`<sup>Required</sup> <a name="Backup" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.backup"></a>

```go
func Backup() CosmosdbAccountBackupOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference">CosmosdbAccountBackupOutputReference</a>

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capabilities"></a>

```go
func Capabilities() CosmosdbAccountCapabilitiesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList">CosmosdbAccountCapabilitiesList</a>

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capacity"></a>

```go
func Capacity() CosmosdbAccountCapacityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference">CosmosdbAccountCapacityOutputReference</a>

---

##### `ConnectionStrings`<sup>Required</sup> <a name="ConnectionStrings" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.connectionStrings"></a>

```go
func ConnectionStrings() *[]*string
```

- *Type:* *[]*string

---

##### `ConsistencyPolicy`<sup>Required</sup> <a name="ConsistencyPolicy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.consistencyPolicy"></a>

```go
func ConsistencyPolicy() CosmosdbAccountConsistencyPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference">CosmosdbAccountConsistencyPolicyOutputReference</a>

---

##### `CorsRule`<sup>Required</sup> <a name="CorsRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.corsRule"></a>

```go
func CorsRule() CosmosdbAccountCorsRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference">CosmosdbAccountCorsRuleOutputReference</a>

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `GeoLocation`<sup>Required</sup> <a name="GeoLocation" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.geoLocation"></a>

```go
func GeoLocation() CosmosdbAccountGeoLocationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList">CosmosdbAccountGeoLocationList</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.identity"></a>

```go
func Identity() CosmosdbAccountIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference">CosmosdbAccountIdentityOutputReference</a>

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryKey"></a>

```go
func PrimaryKey() *string
```

- *Type:* *string

---

##### `PrimaryReadonlyKey`<sup>Required</sup> <a name="PrimaryReadonlyKey" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryReadonlyKey"></a>

```go
func PrimaryReadonlyKey() *string
```

- *Type:* *string

---

##### `PrimaryReadonlySqlConnectionString`<sup>Required</sup> <a name="PrimaryReadonlySqlConnectionString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryReadonlySqlConnectionString"></a>

```go
func PrimaryReadonlySqlConnectionString() *string
```

- *Type:* *string

---

##### `PrimarySqlConnectionString`<sup>Required</sup> <a name="PrimarySqlConnectionString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primarySqlConnectionString"></a>

```go
func PrimarySqlConnectionString() *string
```

- *Type:* *string

---

##### `ReadEndpoints`<sup>Required</sup> <a name="ReadEndpoints" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.readEndpoints"></a>

```go
func ReadEndpoints() *[]*string
```

- *Type:* *[]*string

---

##### `Restore`<sup>Required</sup> <a name="Restore" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.restore"></a>

```go
func Restore() CosmosdbAccountRestoreOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference">CosmosdbAccountRestoreOutputReference</a>

---

##### `SecondaryKey`<sup>Required</sup> <a name="SecondaryKey" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryKey"></a>

```go
func SecondaryKey() *string
```

- *Type:* *string

---

##### `SecondaryReadonlyKey`<sup>Required</sup> <a name="SecondaryReadonlyKey" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryReadonlyKey"></a>

```go
func SecondaryReadonlyKey() *string
```

- *Type:* *string

---

##### `SecondaryReadonlySqlConnectionString`<sup>Required</sup> <a name="SecondaryReadonlySqlConnectionString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryReadonlySqlConnectionString"></a>

```go
func SecondaryReadonlySqlConnectionString() *string
```

- *Type:* *string

---

##### `SecondarySqlConnectionString`<sup>Required</sup> <a name="SecondarySqlConnectionString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondarySqlConnectionString"></a>

```go
func SecondarySqlConnectionString() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.timeouts"></a>

```go
func Timeouts() CosmosdbAccountTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference">CosmosdbAccountTimeoutsOutputReference</a>

---

##### `VirtualNetworkRule`<sup>Required</sup> <a name="VirtualNetworkRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.virtualNetworkRule"></a>

```go
func VirtualNetworkRule() CosmosdbAccountVirtualNetworkRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList">CosmosdbAccountVirtualNetworkRuleList</a>

---

##### `WriteEndpoints`<sup>Required</sup> <a name="WriteEndpoints" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.writeEndpoints"></a>

```go
func WriteEndpoints() *[]*string
```

- *Type:* *[]*string

---

##### `AccessKeyMetadataWritesEnabledInput`<sup>Optional</sup> <a name="AccessKeyMetadataWritesEnabledInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.accessKeyMetadataWritesEnabledInput"></a>

```go
func AccessKeyMetadataWritesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AnalyticalStorageEnabledInput`<sup>Optional</sup> <a name="AnalyticalStorageEnabledInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorageEnabledInput"></a>

```go
func AnalyticalStorageEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AnalyticalStorageInput`<sup>Optional</sup> <a name="AnalyticalStorageInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorageInput"></a>

```go
func AnalyticalStorageInput() CosmosdbAccountAnalyticalStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage">CosmosdbAccountAnalyticalStorage</a>

---

##### `BackupInput`<sup>Optional</sup> <a name="BackupInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.backupInput"></a>

```go
func BackupInput() CosmosdbAccountBackup
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup">CosmosdbAccountBackup</a>

---

##### `CapabilitiesInput`<sup>Optional</sup> <a name="CapabilitiesInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capabilitiesInput"></a>

```go
func CapabilitiesInput() interface{}
```

- *Type:* interface{}

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capacityInput"></a>

```go
func CapacityInput() CosmosdbAccountCapacity
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity">CosmosdbAccountCapacity</a>

---

##### `ConsistencyPolicyInput`<sup>Optional</sup> <a name="ConsistencyPolicyInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.consistencyPolicyInput"></a>

```go
func ConsistencyPolicyInput() CosmosdbAccountConsistencyPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy">CosmosdbAccountConsistencyPolicy</a>

---

##### `CorsRuleInput`<sup>Optional</sup> <a name="CorsRuleInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.corsRuleInput"></a>

```go
func CorsRuleInput() CosmosdbAccountCorsRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule">CosmosdbAccountCorsRule</a>

---

##### `CreateModeInput`<sup>Optional</sup> <a name="CreateModeInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.createModeInput"></a>

```go
func CreateModeInput() *string
```

- *Type:* *string

---

##### `DefaultIdentityTypeInput`<sup>Optional</sup> <a name="DefaultIdentityTypeInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.defaultIdentityTypeInput"></a>

```go
func DefaultIdentityTypeInput() *string
```

- *Type:* *string

---

##### `EnableAutomaticFailoverInput`<sup>Optional</sup> <a name="EnableAutomaticFailoverInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.enableAutomaticFailoverInput"></a>

```go
func EnableAutomaticFailoverInput() interface{}
```

- *Type:* interface{}

---

##### `EnableFreeTierInput`<sup>Optional</sup> <a name="EnableFreeTierInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.enableFreeTierInput"></a>

```go
func EnableFreeTierInput() interface{}
```

- *Type:* interface{}

---

##### `EnableMultipleWriteLocationsInput`<sup>Optional</sup> <a name="EnableMultipleWriteLocationsInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.enableMultipleWriteLocationsInput"></a>

```go
func EnableMultipleWriteLocationsInput() interface{}
```

- *Type:* interface{}

---

##### `GeoLocationInput`<sup>Optional</sup> <a name="GeoLocationInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.geoLocationInput"></a>

```go
func GeoLocationInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.identityInput"></a>

```go
func IdentityInput() CosmosdbAccountIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity">CosmosdbAccountIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpRangeFilterInput`<sup>Optional</sup> <a name="IpRangeFilterInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.ipRangeFilterInput"></a>

```go
func IpRangeFilterInput() *string
```

- *Type:* *string

---

##### `IsVirtualNetworkFilterEnabledInput`<sup>Optional</sup> <a name="IsVirtualNetworkFilterEnabledInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.isVirtualNetworkFilterEnabledInput"></a>

```go
func IsVirtualNetworkFilterEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.keyVaultKeyIdInput"></a>

```go
func KeyVaultKeyIdInput() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `LocalAuthenticationDisabledInput`<sup>Optional</sup> <a name="LocalAuthenticationDisabledInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.localAuthenticationDisabledInput"></a>

```go
func LocalAuthenticationDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MongoServerVersionInput`<sup>Optional</sup> <a name="MongoServerVersionInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.mongoServerVersionInput"></a>

```go
func MongoServerVersionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkAclBypassForAzureServicesInput`<sup>Optional</sup> <a name="NetworkAclBypassForAzureServicesInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassForAzureServicesInput"></a>

```go
func NetworkAclBypassForAzureServicesInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkAclBypassIdsInput`<sup>Optional</sup> <a name="NetworkAclBypassIdsInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassIdsInput"></a>

```go
func NetworkAclBypassIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OfferTypeInput`<sup>Optional</sup> <a name="OfferTypeInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.offerTypeInput"></a>

```go
func OfferTypeInput() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.publicNetworkAccessEnabledInput"></a>

```go
func PublicNetworkAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `RestoreInput`<sup>Optional</sup> <a name="RestoreInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.restoreInput"></a>

```go
func RestoreInput() CosmosdbAccountRestore
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore">CosmosdbAccountRestore</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualNetworkRuleInput`<sup>Optional</sup> <a name="VirtualNetworkRuleInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.virtualNetworkRuleInput"></a>

```go
func VirtualNetworkRuleInput() interface{}
```

- *Type:* interface{}

---

##### `AccessKeyMetadataWritesEnabled`<sup>Required</sup> <a name="AccessKeyMetadataWritesEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.accessKeyMetadataWritesEnabled"></a>

```go
func AccessKeyMetadataWritesEnabled() interface{}
```

- *Type:* interface{}

---

##### `AnalyticalStorageEnabled`<sup>Required</sup> <a name="AnalyticalStorageEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorageEnabled"></a>

```go
func AnalyticalStorageEnabled() interface{}
```

- *Type:* interface{}

---

##### `CreateMode`<sup>Required</sup> <a name="CreateMode" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.createMode"></a>

```go
func CreateMode() *string
```

- *Type:* *string

---

##### `DefaultIdentityType`<sup>Required</sup> <a name="DefaultIdentityType" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.defaultIdentityType"></a>

```go
func DefaultIdentityType() *string
```

- *Type:* *string

---

##### `EnableAutomaticFailover`<sup>Required</sup> <a name="EnableAutomaticFailover" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.enableAutomaticFailover"></a>

```go
func EnableAutomaticFailover() interface{}
```

- *Type:* interface{}

---

##### `EnableFreeTier`<sup>Required</sup> <a name="EnableFreeTier" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.enableFreeTier"></a>

```go
func EnableFreeTier() interface{}
```

- *Type:* interface{}

---

##### `EnableMultipleWriteLocations`<sup>Required</sup> <a name="EnableMultipleWriteLocations" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.enableMultipleWriteLocations"></a>

```go
func EnableMultipleWriteLocations() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpRangeFilter`<sup>Required</sup> <a name="IpRangeFilter" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.ipRangeFilter"></a>

```go
func IpRangeFilter() *string
```

- *Type:* *string

---

##### `IsVirtualNetworkFilterEnabled`<sup>Required</sup> <a name="IsVirtualNetworkFilterEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.isVirtualNetworkFilterEnabled"></a>

```go
func IsVirtualNetworkFilterEnabled() interface{}
```

- *Type:* interface{}

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.keyVaultKeyId"></a>

```go
func KeyVaultKeyId() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `LocalAuthenticationDisabled`<sup>Required</sup> <a name="LocalAuthenticationDisabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.localAuthenticationDisabled"></a>

```go
func LocalAuthenticationDisabled() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MongoServerVersion`<sup>Required</sup> <a name="MongoServerVersion" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.mongoServerVersion"></a>

```go
func MongoServerVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkAclBypassForAzureServices`<sup>Required</sup> <a name="NetworkAclBypassForAzureServices" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassForAzureServices"></a>

```go
func NetworkAclBypassForAzureServices() interface{}
```

- *Type:* interface{}

---

##### `NetworkAclBypassIds`<sup>Required</sup> <a name="NetworkAclBypassIds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassIds"></a>

```go
func NetworkAclBypassIds() *[]*string
```

- *Type:* *[]*string

---

##### `OfferType`<sup>Required</sup> <a name="OfferType" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.offerType"></a>

```go
func OfferType() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.publicNetworkAccessEnabled"></a>

```go
func PublicNetworkAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbAccountAnalyticalStorage <a name="CosmosdbAccountAnalyticalStorage" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

&cosmosdbaccount.CosmosdbAccountAnalyticalStorage {
	SchemaType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage.property.schemaType">SchemaType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#schema_type CosmosdbAccount#schema_type}. |

---

##### `SchemaType`<sup>Required</sup> <a name="SchemaType" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage.property.schemaType"></a>

```go
SchemaType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#schema_type CosmosdbAccount#schema_type}.

---

### CosmosdbAccountBackup <a name="CosmosdbAccountBackup" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

&cosmosdbaccount.CosmosdbAccountBackup {
	Type: *string,
	IntervalInMinutes: *f64,
	RetentionInHours: *f64,
	StorageRedundancy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#type CosmosdbAccount#type}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.intervalInMinutes">IntervalInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#interval_in_minutes CosmosdbAccount#interval_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.retentionInHours">RetentionInHours</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#retention_in_hours CosmosdbAccount#retention_in_hours}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.storageRedundancy">StorageRedundancy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#storage_redundancy CosmosdbAccount#storage_redundancy}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#type CosmosdbAccount#type}.

---

##### `IntervalInMinutes`<sup>Optional</sup> <a name="IntervalInMinutes" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.intervalInMinutes"></a>

```go
IntervalInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#interval_in_minutes CosmosdbAccount#interval_in_minutes}.

---

##### `RetentionInHours`<sup>Optional</sup> <a name="RetentionInHours" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.retentionInHours"></a>

```go
RetentionInHours *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#retention_in_hours CosmosdbAccount#retention_in_hours}.

---

##### `StorageRedundancy`<sup>Optional</sup> <a name="StorageRedundancy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.storageRedundancy"></a>

```go
StorageRedundancy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#storage_redundancy CosmosdbAccount#storage_redundancy}.

---

### CosmosdbAccountCapabilities <a name="CosmosdbAccountCapabilities" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

&cosmosdbaccount.CosmosdbAccountCapabilities {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}.

---

### CosmosdbAccountCapacity <a name="CosmosdbAccountCapacity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

&cosmosdbaccount.CosmosdbAccountCapacity {
	TotalThroughputLimit: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity.property.totalThroughputLimit">TotalThroughputLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#total_throughput_limit CosmosdbAccount#total_throughput_limit}. |

---

##### `TotalThroughputLimit`<sup>Required</sup> <a name="TotalThroughputLimit" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity.property.totalThroughputLimit"></a>

```go
TotalThroughputLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#total_throughput_limit CosmosdbAccount#total_throughput_limit}.

---

### CosmosdbAccountConfig <a name="CosmosdbAccountConfig" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

&cosmosdbaccount.CosmosdbAccountConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConsistencyPolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.cosmosdbAccount.CosmosdbAccountConsistencyPolicy,
	GeoLocation: interface{},
	Location: *string,
	Name: *string,
	OfferType: *string,
	ResourceGroupName: *string,
	AccessKeyMetadataWritesEnabled: interface{},
	AnalyticalStorage: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.cosmosdbAccount.CosmosdbAccountAnalyticalStorage,
	AnalyticalStorageEnabled: interface{},
	Backup: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.cosmosdbAccount.CosmosdbAccountBackup,
	Capabilities: interface{},
	Capacity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.cosmosdbAccount.CosmosdbAccountCapacity,
	CorsRule: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.cosmosdbAccount.CosmosdbAccountCorsRule,
	CreateMode: *string,
	DefaultIdentityType: *string,
	EnableAutomaticFailover: interface{},
	EnableFreeTier: interface{},
	EnableMultipleWriteLocations: interface{},
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.cosmosdbAccount.CosmosdbAccountIdentity,
	IpRangeFilter: *string,
	IsVirtualNetworkFilterEnabled: interface{},
	KeyVaultKeyId: *string,
	Kind: *string,
	LocalAuthenticationDisabled: interface{},
	MongoServerVersion: *string,
	NetworkAclBypassForAzureServices: interface{},
	NetworkAclBypassIds: *[]*string,
	PublicNetworkAccessEnabled: interface{},
	Restore: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.cosmosdbAccount.CosmosdbAccountRestore,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.cosmosdbAccount.CosmosdbAccountTimeouts,
	VirtualNetworkRule: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.consistencyPolicy">ConsistencyPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy">CosmosdbAccountConsistencyPolicy</a></code> | consistency_policy block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.geoLocation">GeoLocation</a></code> | <code>interface{}</code> | geo_location block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#location CosmosdbAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.offerType">OfferType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#offer_type CosmosdbAccount#offer_type}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#resource_group_name CosmosdbAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.accessKeyMetadataWritesEnabled">AccessKeyMetadataWritesEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#access_key_metadata_writes_enabled CosmosdbAccount#access_key_metadata_writes_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.analyticalStorage">AnalyticalStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage">CosmosdbAccountAnalyticalStorage</a></code> | analytical_storage block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.analyticalStorageEnabled">AnalyticalStorageEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#analytical_storage_enabled CosmosdbAccount#analytical_storage_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.backup">Backup</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup">CosmosdbAccountBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.capabilities">Capabilities</a></code> | <code>interface{}</code> | capabilities block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.capacity">Capacity</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity">CosmosdbAccountCapacity</a></code> | capacity block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.corsRule">CorsRule</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule">CosmosdbAccountCorsRule</a></code> | cors_rule block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.createMode">CreateMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#create_mode CosmosdbAccount#create_mode}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.defaultIdentityType">DefaultIdentityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#default_identity_type CosmosdbAccount#default_identity_type}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.enableAutomaticFailover">EnableAutomaticFailover</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#enable_automatic_failover CosmosdbAccount#enable_automatic_failover}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.enableFreeTier">EnableFreeTier</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#enable_free_tier CosmosdbAccount#enable_free_tier}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.enableMultipleWriteLocations">EnableMultipleWriteLocations</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#enable_multiple_write_locations CosmosdbAccount#enable_multiple_write_locations}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#id CosmosdbAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity">CosmosdbAccountIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.ipRangeFilter">IpRangeFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#ip_range_filter CosmosdbAccount#ip_range_filter}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.isVirtualNetworkFilterEnabled">IsVirtualNetworkFilterEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#is_virtual_network_filter_enabled CosmosdbAccount#is_virtual_network_filter_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#key_vault_key_id CosmosdbAccount#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.kind">Kind</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#kind CosmosdbAccount#kind}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.localAuthenticationDisabled">LocalAuthenticationDisabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#local_authentication_disabled CosmosdbAccount#local_authentication_disabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.mongoServerVersion">MongoServerVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#mongo_server_version CosmosdbAccount#mongo_server_version}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.networkAclBypassForAzureServices">NetworkAclBypassForAzureServices</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#network_acl_bypass_for_azure_services CosmosdbAccount#network_acl_bypass_for_azure_services}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.networkAclBypassIds">NetworkAclBypassIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#network_acl_bypass_ids CosmosdbAccount#network_acl_bypass_ids}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#public_network_access_enabled CosmosdbAccount#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.restore">Restore</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore">CosmosdbAccountRestore</a></code> | restore block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#tags CosmosdbAccount#tags}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts">CosmosdbAccountTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.virtualNetworkRule">VirtualNetworkRule</a></code> | <code>interface{}</code> | virtual_network_rule block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConsistencyPolicy`<sup>Required</sup> <a name="ConsistencyPolicy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.consistencyPolicy"></a>

```go
ConsistencyPolicy CosmosdbAccountConsistencyPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy">CosmosdbAccountConsistencyPolicy</a>

consistency_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#consistency_policy CosmosdbAccount#consistency_policy}

---

##### `GeoLocation`<sup>Required</sup> <a name="GeoLocation" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.geoLocation"></a>

```go
GeoLocation interface{}
```

- *Type:* interface{}

geo_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#geo_location CosmosdbAccount#geo_location}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#location CosmosdbAccount#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}.

---

##### `OfferType`<sup>Required</sup> <a name="OfferType" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.offerType"></a>

```go
OfferType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#offer_type CosmosdbAccount#offer_type}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#resource_group_name CosmosdbAccount#resource_group_name}.

---

##### `AccessKeyMetadataWritesEnabled`<sup>Optional</sup> <a name="AccessKeyMetadataWritesEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.accessKeyMetadataWritesEnabled"></a>

```go
AccessKeyMetadataWritesEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#access_key_metadata_writes_enabled CosmosdbAccount#access_key_metadata_writes_enabled}.

---

##### `AnalyticalStorage`<sup>Optional</sup> <a name="AnalyticalStorage" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.analyticalStorage"></a>

```go
AnalyticalStorage CosmosdbAccountAnalyticalStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage">CosmosdbAccountAnalyticalStorage</a>

analytical_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#analytical_storage CosmosdbAccount#analytical_storage}

---

##### `AnalyticalStorageEnabled`<sup>Optional</sup> <a name="AnalyticalStorageEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.analyticalStorageEnabled"></a>

```go
AnalyticalStorageEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#analytical_storage_enabled CosmosdbAccount#analytical_storage_enabled}.

---

##### `Backup`<sup>Optional</sup> <a name="Backup" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.backup"></a>

```go
Backup CosmosdbAccountBackup
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup">CosmosdbAccountBackup</a>

backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#backup CosmosdbAccount#backup}

---

##### `Capabilities`<sup>Optional</sup> <a name="Capabilities" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.capabilities"></a>

```go
Capabilities interface{}
```

- *Type:* interface{}

capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#capabilities CosmosdbAccount#capabilities}

---

##### `Capacity`<sup>Optional</sup> <a name="Capacity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.capacity"></a>

```go
Capacity CosmosdbAccountCapacity
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity">CosmosdbAccountCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#capacity CosmosdbAccount#capacity}

---

##### `CorsRule`<sup>Optional</sup> <a name="CorsRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.corsRule"></a>

```go
CorsRule CosmosdbAccountCorsRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule">CosmosdbAccountCorsRule</a>

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#cors_rule CosmosdbAccount#cors_rule}

---

##### `CreateMode`<sup>Optional</sup> <a name="CreateMode" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.createMode"></a>

```go
CreateMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#create_mode CosmosdbAccount#create_mode}.

---

##### `DefaultIdentityType`<sup>Optional</sup> <a name="DefaultIdentityType" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.defaultIdentityType"></a>

```go
DefaultIdentityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#default_identity_type CosmosdbAccount#default_identity_type}.

---

##### `EnableAutomaticFailover`<sup>Optional</sup> <a name="EnableAutomaticFailover" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.enableAutomaticFailover"></a>

```go
EnableAutomaticFailover interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#enable_automatic_failover CosmosdbAccount#enable_automatic_failover}.

---

##### `EnableFreeTier`<sup>Optional</sup> <a name="EnableFreeTier" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.enableFreeTier"></a>

```go
EnableFreeTier interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#enable_free_tier CosmosdbAccount#enable_free_tier}.

---

##### `EnableMultipleWriteLocations`<sup>Optional</sup> <a name="EnableMultipleWriteLocations" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.enableMultipleWriteLocations"></a>

```go
EnableMultipleWriteLocations interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#enable_multiple_write_locations CosmosdbAccount#enable_multiple_write_locations}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#id CosmosdbAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.identity"></a>

```go
Identity CosmosdbAccountIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity">CosmosdbAccountIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#identity CosmosdbAccount#identity}

---

##### `IpRangeFilter`<sup>Optional</sup> <a name="IpRangeFilter" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.ipRangeFilter"></a>

```go
IpRangeFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#ip_range_filter CosmosdbAccount#ip_range_filter}.

---

##### `IsVirtualNetworkFilterEnabled`<sup>Optional</sup> <a name="IsVirtualNetworkFilterEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.isVirtualNetworkFilterEnabled"></a>

```go
IsVirtualNetworkFilterEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#is_virtual_network_filter_enabled CosmosdbAccount#is_virtual_network_filter_enabled}.

---

##### `KeyVaultKeyId`<sup>Optional</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.keyVaultKeyId"></a>

```go
KeyVaultKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#key_vault_key_id CosmosdbAccount#key_vault_key_id}.

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#kind CosmosdbAccount#kind}.

---

##### `LocalAuthenticationDisabled`<sup>Optional</sup> <a name="LocalAuthenticationDisabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.localAuthenticationDisabled"></a>

```go
LocalAuthenticationDisabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#local_authentication_disabled CosmosdbAccount#local_authentication_disabled}.

---

##### `MongoServerVersion`<sup>Optional</sup> <a name="MongoServerVersion" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.mongoServerVersion"></a>

```go
MongoServerVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#mongo_server_version CosmosdbAccount#mongo_server_version}.

---

##### `NetworkAclBypassForAzureServices`<sup>Optional</sup> <a name="NetworkAclBypassForAzureServices" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.networkAclBypassForAzureServices"></a>

```go
NetworkAclBypassForAzureServices interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#network_acl_bypass_for_azure_services CosmosdbAccount#network_acl_bypass_for_azure_services}.

---

##### `NetworkAclBypassIds`<sup>Optional</sup> <a name="NetworkAclBypassIds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.networkAclBypassIds"></a>

```go
NetworkAclBypassIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#network_acl_bypass_ids CosmosdbAccount#network_acl_bypass_ids}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.publicNetworkAccessEnabled"></a>

```go
PublicNetworkAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#public_network_access_enabled CosmosdbAccount#public_network_access_enabled}.

---

##### `Restore`<sup>Optional</sup> <a name="Restore" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.restore"></a>

```go
Restore CosmosdbAccountRestore
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore">CosmosdbAccountRestore</a>

restore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#restore CosmosdbAccount#restore}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#tags CosmosdbAccount#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.timeouts"></a>

```go
Timeouts CosmosdbAccountTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts">CosmosdbAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#timeouts CosmosdbAccount#timeouts}

---

##### `VirtualNetworkRule`<sup>Optional</sup> <a name="VirtualNetworkRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.virtualNetworkRule"></a>

```go
VirtualNetworkRule interface{}
```

- *Type:* interface{}

virtual_network_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#virtual_network_rule CosmosdbAccount#virtual_network_rule}

---

### CosmosdbAccountConsistencyPolicy <a name="CosmosdbAccountConsistencyPolicy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

&cosmosdbaccount.CosmosdbAccountConsistencyPolicy {
	ConsistencyLevel: *string,
	MaxIntervalInSeconds: *f64,
	MaxStalenessPrefix: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy.property.consistencyLevel">ConsistencyLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#consistency_level CosmosdbAccount#consistency_level}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy.property.maxIntervalInSeconds">MaxIntervalInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#max_interval_in_seconds CosmosdbAccount#max_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy.property.maxStalenessPrefix">MaxStalenessPrefix</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#max_staleness_prefix CosmosdbAccount#max_staleness_prefix}. |

---

##### `ConsistencyLevel`<sup>Required</sup> <a name="ConsistencyLevel" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy.property.consistencyLevel"></a>

```go
ConsistencyLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#consistency_level CosmosdbAccount#consistency_level}.

---

##### `MaxIntervalInSeconds`<sup>Optional</sup> <a name="MaxIntervalInSeconds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy.property.maxIntervalInSeconds"></a>

```go
MaxIntervalInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#max_interval_in_seconds CosmosdbAccount#max_interval_in_seconds}.

---

##### `MaxStalenessPrefix`<sup>Optional</sup> <a name="MaxStalenessPrefix" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy.property.maxStalenessPrefix"></a>

```go
MaxStalenessPrefix *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#max_staleness_prefix CosmosdbAccount#max_staleness_prefix}.

---

### CosmosdbAccountCorsRule <a name="CosmosdbAccountCorsRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

&cosmosdbaccount.CosmosdbAccountCorsRule {
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
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.allowedHeaders">AllowedHeaders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#allowed_headers CosmosdbAccount#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.allowedMethods">AllowedMethods</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#allowed_methods CosmosdbAccount#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#allowed_origins CosmosdbAccount#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.exposedHeaders">ExposedHeaders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#exposed_headers CosmosdbAccount#exposed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#max_age_in_seconds CosmosdbAccount#max_age_in_seconds}. |

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.allowedHeaders"></a>

```go
AllowedHeaders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#allowed_headers CosmosdbAccount#allowed_headers}.

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.allowedMethods"></a>

```go
AllowedMethods *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#allowed_methods CosmosdbAccount#allowed_methods}.

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.allowedOrigins"></a>

```go
AllowedOrigins *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#allowed_origins CosmosdbAccount#allowed_origins}.

---

##### `ExposedHeaders`<sup>Required</sup> <a name="ExposedHeaders" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.exposedHeaders"></a>

```go
ExposedHeaders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#exposed_headers CosmosdbAccount#exposed_headers}.

---

##### `MaxAgeInSeconds`<sup>Required</sup> <a name="MaxAgeInSeconds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.maxAgeInSeconds"></a>

```go
MaxAgeInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#max_age_in_seconds CosmosdbAccount#max_age_in_seconds}.

---

### CosmosdbAccountGeoLocation <a name="CosmosdbAccountGeoLocation" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

&cosmosdbaccount.CosmosdbAccountGeoLocation {
	FailoverPriority: *f64,
	Location: *string,
	ZoneRedundant: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation.property.failoverPriority">FailoverPriority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#failover_priority CosmosdbAccount#failover_priority}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#location CosmosdbAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation.property.zoneRedundant">ZoneRedundant</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#zone_redundant CosmosdbAccount#zone_redundant}. |

---

##### `FailoverPriority`<sup>Required</sup> <a name="FailoverPriority" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation.property.failoverPriority"></a>

```go
FailoverPriority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#failover_priority CosmosdbAccount#failover_priority}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#location CosmosdbAccount#location}.

---

##### `ZoneRedundant`<sup>Optional</sup> <a name="ZoneRedundant" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation.property.zoneRedundant"></a>

```go
ZoneRedundant interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#zone_redundant CosmosdbAccount#zone_redundant}.

---

### CosmosdbAccountIdentity <a name="CosmosdbAccountIdentity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

&cosmosdbaccount.CosmosdbAccountIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#type CosmosdbAccount#type}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#identity_ids CosmosdbAccount#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#type CosmosdbAccount#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#identity_ids CosmosdbAccount#identity_ids}.

---

### CosmosdbAccountRestore <a name="CosmosdbAccountRestore" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

&cosmosdbaccount.CosmosdbAccountRestore {
	RestoreTimestampInUtc: *string,
	SourceCosmosdbAccountId: *string,
	Database: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.restoreTimestampInUtc">RestoreTimestampInUtc</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#restore_timestamp_in_utc CosmosdbAccount#restore_timestamp_in_utc}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.sourceCosmosdbAccountId">SourceCosmosdbAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#source_cosmosdb_account_id CosmosdbAccount#source_cosmosdb_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.database">Database</a></code> | <code>interface{}</code> | database block. |

---

##### `RestoreTimestampInUtc`<sup>Required</sup> <a name="RestoreTimestampInUtc" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.restoreTimestampInUtc"></a>

```go
RestoreTimestampInUtc *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#restore_timestamp_in_utc CosmosdbAccount#restore_timestamp_in_utc}.

---

##### `SourceCosmosdbAccountId`<sup>Required</sup> <a name="SourceCosmosdbAccountId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.sourceCosmosdbAccountId"></a>

```go
SourceCosmosdbAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#source_cosmosdb_account_id CosmosdbAccount#source_cosmosdb_account_id}.

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.database"></a>

```go
Database interface{}
```

- *Type:* interface{}

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#database CosmosdbAccount#database}

---

### CosmosdbAccountRestoreDatabase <a name="CosmosdbAccountRestoreDatabase" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

&cosmosdbaccount.CosmosdbAccountRestoreDatabase {
	Name: *string,
	CollectionNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase.property.collectionNames">CollectionNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#collection_names CosmosdbAccount#collection_names}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}.

---

##### `CollectionNames`<sup>Optional</sup> <a name="CollectionNames" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase.property.collectionNames"></a>

```go
CollectionNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#collection_names CosmosdbAccount#collection_names}.

---

### CosmosdbAccountTimeouts <a name="CosmosdbAccountTimeouts" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

&cosmosdbaccount.CosmosdbAccountTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#create CosmosdbAccount#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#delete CosmosdbAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#read CosmosdbAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#update CosmosdbAccount#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#create CosmosdbAccount#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#delete CosmosdbAccount#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#read CosmosdbAccount#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#update CosmosdbAccount#update}.

---

### CosmosdbAccountVirtualNetworkRule <a name="CosmosdbAccountVirtualNetworkRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

&cosmosdbaccount.CosmosdbAccountVirtualNetworkRule {
	Id: *string,
	IgnoreMissingVnetServiceEndpoint: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#id CosmosdbAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule.property.ignoreMissingVnetServiceEndpoint">IgnoreMissingVnetServiceEndpoint</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#ignore_missing_vnet_service_endpoint CosmosdbAccount#ignore_missing_vnet_service_endpoint}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#id CosmosdbAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreMissingVnetServiceEndpoint`<sup>Optional</sup> <a name="IgnoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule.property.ignoreMissingVnetServiceEndpoint"></a>

```go
IgnoreMissingVnetServiceEndpoint interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/cosmosdb_account#ignore_missing_vnet_service_endpoint CosmosdbAccount#ignore_missing_vnet_service_endpoint}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbAccountAnalyticalStorageOutputReference <a name="CosmosdbAccountAnalyticalStorageOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

cosmosdbaccount.NewCosmosdbAccountAnalyticalStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CosmosdbAccountAnalyticalStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.schemaTypeInput">SchemaTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.schemaType">SchemaType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage">CosmosdbAccountAnalyticalStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SchemaTypeInput`<sup>Optional</sup> <a name="SchemaTypeInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.schemaTypeInput"></a>

```go
func SchemaTypeInput() *string
```

- *Type:* *string

---

##### `SchemaType`<sup>Required</sup> <a name="SchemaType" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.schemaType"></a>

```go
func SchemaType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() CosmosdbAccountAnalyticalStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage">CosmosdbAccountAnalyticalStorage</a>

---


### CosmosdbAccountBackupOutputReference <a name="CosmosdbAccountBackupOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

cosmosdbaccount.NewCosmosdbAccountBackupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CosmosdbAccountBackupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resetIntervalInMinutes">ResetIntervalInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resetRetentionInHours">ResetRetentionInHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resetStorageRedundancy">ResetStorageRedundancy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIntervalInMinutes` <a name="ResetIntervalInMinutes" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resetIntervalInMinutes"></a>

```go
func ResetIntervalInMinutes()
```

##### `ResetRetentionInHours` <a name="ResetRetentionInHours" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resetRetentionInHours"></a>

```go
func ResetRetentionInHours()
```

##### `ResetStorageRedundancy` <a name="ResetStorageRedundancy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resetStorageRedundancy"></a>

```go
func ResetStorageRedundancy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.intervalInMinutesInput">IntervalInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.retentionInHoursInput">RetentionInHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.storageRedundancyInput">StorageRedundancyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.intervalInMinutes">IntervalInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.retentionInHours">RetentionInHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.storageRedundancy">StorageRedundancy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup">CosmosdbAccountBackup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IntervalInMinutesInput`<sup>Optional</sup> <a name="IntervalInMinutesInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.intervalInMinutesInput"></a>

```go
func IntervalInMinutesInput() *f64
```

- *Type:* *f64

---

##### `RetentionInHoursInput`<sup>Optional</sup> <a name="RetentionInHoursInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.retentionInHoursInput"></a>

```go
func RetentionInHoursInput() *f64
```

- *Type:* *f64

---

##### `StorageRedundancyInput`<sup>Optional</sup> <a name="StorageRedundancyInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.storageRedundancyInput"></a>

```go
func StorageRedundancyInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IntervalInMinutes`<sup>Required</sup> <a name="IntervalInMinutes" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.intervalInMinutes"></a>

```go
func IntervalInMinutes() *f64
```

- *Type:* *f64

---

##### `RetentionInHours`<sup>Required</sup> <a name="RetentionInHours" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.retentionInHours"></a>

```go
func RetentionInHours() *f64
```

- *Type:* *f64

---

##### `StorageRedundancy`<sup>Required</sup> <a name="StorageRedundancy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.storageRedundancy"></a>

```go
func StorageRedundancy() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.internalValue"></a>

```go
func InternalValue() CosmosdbAccountBackup
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup">CosmosdbAccountBackup</a>

---


### CosmosdbAccountCapabilitiesList <a name="CosmosdbAccountCapabilitiesList" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

cosmosdbaccount.NewCosmosdbAccountCapabilitiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CosmosdbAccountCapabilitiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.get"></a>

```go
func Get(index *f64) CosmosdbAccountCapabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CosmosdbAccountCapabilitiesOutputReference <a name="CosmosdbAccountCapabilitiesOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

cosmosdbaccount.NewCosmosdbAccountCapabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CosmosdbAccountCapabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CosmosdbAccountCapacityOutputReference <a name="CosmosdbAccountCapacityOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

cosmosdbaccount.NewCosmosdbAccountCapacityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CosmosdbAccountCapacityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.totalThroughputLimitInput">TotalThroughputLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.totalThroughputLimit">TotalThroughputLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity">CosmosdbAccountCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TotalThroughputLimitInput`<sup>Optional</sup> <a name="TotalThroughputLimitInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.totalThroughputLimitInput"></a>

```go
func TotalThroughputLimitInput() *f64
```

- *Type:* *f64

---

##### `TotalThroughputLimit`<sup>Required</sup> <a name="TotalThroughputLimit" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.totalThroughputLimit"></a>

```go
func TotalThroughputLimit() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.internalValue"></a>

```go
func InternalValue() CosmosdbAccountCapacity
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity">CosmosdbAccountCapacity</a>

---


### CosmosdbAccountConsistencyPolicyOutputReference <a name="CosmosdbAccountConsistencyPolicyOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

cosmosdbaccount.NewCosmosdbAccountConsistencyPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CosmosdbAccountConsistencyPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.resetMaxIntervalInSeconds">ResetMaxIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.resetMaxStalenessPrefix">ResetMaxStalenessPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxIntervalInSeconds` <a name="ResetMaxIntervalInSeconds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.resetMaxIntervalInSeconds"></a>

```go
func ResetMaxIntervalInSeconds()
```

##### `ResetMaxStalenessPrefix` <a name="ResetMaxStalenessPrefix" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.resetMaxStalenessPrefix"></a>

```go
func ResetMaxStalenessPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.consistencyLevelInput">ConsistencyLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxIntervalInSecondsInput">MaxIntervalInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxStalenessPrefixInput">MaxStalenessPrefixInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.consistencyLevel">ConsistencyLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxIntervalInSeconds">MaxIntervalInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxStalenessPrefix">MaxStalenessPrefix</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy">CosmosdbAccountConsistencyPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConsistencyLevelInput`<sup>Optional</sup> <a name="ConsistencyLevelInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.consistencyLevelInput"></a>

```go
func ConsistencyLevelInput() *string
```

- *Type:* *string

---

##### `MaxIntervalInSecondsInput`<sup>Optional</sup> <a name="MaxIntervalInSecondsInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxIntervalInSecondsInput"></a>

```go
func MaxIntervalInSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaxStalenessPrefixInput`<sup>Optional</sup> <a name="MaxStalenessPrefixInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxStalenessPrefixInput"></a>

```go
func MaxStalenessPrefixInput() *f64
```

- *Type:* *f64

---

##### `ConsistencyLevel`<sup>Required</sup> <a name="ConsistencyLevel" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.consistencyLevel"></a>

```go
func ConsistencyLevel() *string
```

- *Type:* *string

---

##### `MaxIntervalInSeconds`<sup>Required</sup> <a name="MaxIntervalInSeconds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxIntervalInSeconds"></a>

```go
func MaxIntervalInSeconds() *f64
```

- *Type:* *f64

---

##### `MaxStalenessPrefix`<sup>Required</sup> <a name="MaxStalenessPrefix" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxStalenessPrefix"></a>

```go
func MaxStalenessPrefix() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() CosmosdbAccountConsistencyPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy">CosmosdbAccountConsistencyPolicy</a>

---


### CosmosdbAccountCorsRuleOutputReference <a name="CosmosdbAccountCorsRuleOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

cosmosdbaccount.NewCosmosdbAccountCorsRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CosmosdbAccountCorsRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedHeadersInput">AllowedHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedMethodsInput">AllowedMethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.exposedHeadersInput">ExposedHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.maxAgeInSecondsInput">MaxAgeInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedHeaders">AllowedHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.exposedHeaders">ExposedHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule">CosmosdbAccountCorsRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedHeadersInput`<sup>Optional</sup> <a name="AllowedHeadersInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedHeadersInput"></a>

```go
func AllowedHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedMethodsInput`<sup>Optional</sup> <a name="AllowedMethodsInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedMethodsInput"></a>

```go
func AllowedMethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedOriginsInput"></a>

```go
func AllowedOriginsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExposedHeadersInput`<sup>Optional</sup> <a name="ExposedHeadersInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.exposedHeadersInput"></a>

```go
func ExposedHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaxAgeInSecondsInput`<sup>Optional</sup> <a name="MaxAgeInSecondsInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.maxAgeInSecondsInput"></a>

```go
func MaxAgeInSecondsInput() *f64
```

- *Type:* *f64

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedHeaders"></a>

```go
func AllowedHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedMethods"></a>

```go
func AllowedMethods() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedOrigins"></a>

```go
func AllowedOrigins() *[]*string
```

- *Type:* *[]*string

---

##### `ExposedHeaders`<sup>Required</sup> <a name="ExposedHeaders" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.exposedHeaders"></a>

```go
func ExposedHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `MaxAgeInSeconds`<sup>Required</sup> <a name="MaxAgeInSeconds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.maxAgeInSeconds"></a>

```go
func MaxAgeInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() CosmosdbAccountCorsRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule">CosmosdbAccountCorsRule</a>

---


### CosmosdbAccountGeoLocationList <a name="CosmosdbAccountGeoLocationList" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

cosmosdbaccount.NewCosmosdbAccountGeoLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CosmosdbAccountGeoLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.get"></a>

```go
func Get(index *f64) CosmosdbAccountGeoLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CosmosdbAccountGeoLocationOutputReference <a name="CosmosdbAccountGeoLocationOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

cosmosdbaccount.NewCosmosdbAccountGeoLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CosmosdbAccountGeoLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.resetZoneRedundant">ResetZoneRedundant</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetZoneRedundant` <a name="ResetZoneRedundant" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.resetZoneRedundant"></a>

```go
func ResetZoneRedundant()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.failoverPriorityInput">FailoverPriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.zoneRedundantInput">ZoneRedundantInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.failoverPriority">FailoverPriority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.zoneRedundant">ZoneRedundant</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `FailoverPriorityInput`<sup>Optional</sup> <a name="FailoverPriorityInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.failoverPriorityInput"></a>

```go
func FailoverPriorityInput() *f64
```

- *Type:* *f64

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ZoneRedundantInput`<sup>Optional</sup> <a name="ZoneRedundantInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.zoneRedundantInput"></a>

```go
func ZoneRedundantInput() interface{}
```

- *Type:* interface{}

---

##### `FailoverPriority`<sup>Required</sup> <a name="FailoverPriority" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.failoverPriority"></a>

```go
func FailoverPriority() *f64
```

- *Type:* *f64

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ZoneRedundant`<sup>Required</sup> <a name="ZoneRedundant" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.zoneRedundant"></a>

```go
func ZoneRedundant() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CosmosdbAccountIdentityOutputReference <a name="CosmosdbAccountIdentityOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

cosmosdbaccount.NewCosmosdbAccountIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CosmosdbAccountIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity">CosmosdbAccountIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() CosmosdbAccountIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity">CosmosdbAccountIdentity</a>

---


### CosmosdbAccountRestoreDatabaseList <a name="CosmosdbAccountRestoreDatabaseList" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

cosmosdbaccount.NewCosmosdbAccountRestoreDatabaseList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CosmosdbAccountRestoreDatabaseList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.get"></a>

```go
func Get(index *f64) CosmosdbAccountRestoreDatabaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CosmosdbAccountRestoreDatabaseOutputReference <a name="CosmosdbAccountRestoreDatabaseOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

cosmosdbaccount.NewCosmosdbAccountRestoreDatabaseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CosmosdbAccountRestoreDatabaseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.resetCollectionNames">ResetCollectionNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCollectionNames` <a name="ResetCollectionNames" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.resetCollectionNames"></a>

```go
func ResetCollectionNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.collectionNamesInput">CollectionNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.collectionNames">CollectionNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CollectionNamesInput`<sup>Optional</sup> <a name="CollectionNamesInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.collectionNamesInput"></a>

```go
func CollectionNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `CollectionNames`<sup>Required</sup> <a name="CollectionNames" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.collectionNames"></a>

```go
func CollectionNames() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CosmosdbAccountRestoreOutputReference <a name="CosmosdbAccountRestoreOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

cosmosdbaccount.NewCosmosdbAccountRestoreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CosmosdbAccountRestoreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.putDatabase">PutDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatabase` <a name="PutDatabase" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.putDatabase"></a>

```go
func PutDatabase(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.putDatabase.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.resetDatabase"></a>

```go
func ResetDatabase()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.database">Database</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList">CosmosdbAccountRestoreDatabaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.restoreTimestampInUtcInput">RestoreTimestampInUtcInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.sourceCosmosdbAccountIdInput">SourceCosmosdbAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.restoreTimestampInUtc">RestoreTimestampInUtc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.sourceCosmosdbAccountId">SourceCosmosdbAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore">CosmosdbAccountRestore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.database"></a>

```go
func Database() CosmosdbAccountRestoreDatabaseList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList">CosmosdbAccountRestoreDatabaseList</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.databaseInput"></a>

```go
func DatabaseInput() interface{}
```

- *Type:* interface{}

---

##### `RestoreTimestampInUtcInput`<sup>Optional</sup> <a name="RestoreTimestampInUtcInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.restoreTimestampInUtcInput"></a>

```go
func RestoreTimestampInUtcInput() *string
```

- *Type:* *string

---

##### `SourceCosmosdbAccountIdInput`<sup>Optional</sup> <a name="SourceCosmosdbAccountIdInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.sourceCosmosdbAccountIdInput"></a>

```go
func SourceCosmosdbAccountIdInput() *string
```

- *Type:* *string

---

##### `RestoreTimestampInUtc`<sup>Required</sup> <a name="RestoreTimestampInUtc" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.restoreTimestampInUtc"></a>

```go
func RestoreTimestampInUtc() *string
```

- *Type:* *string

---

##### `SourceCosmosdbAccountId`<sup>Required</sup> <a name="SourceCosmosdbAccountId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.sourceCosmosdbAccountId"></a>

```go
func SourceCosmosdbAccountId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.internalValue"></a>

```go
func InternalValue() CosmosdbAccountRestore
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore">CosmosdbAccountRestore</a>

---


### CosmosdbAccountTimeoutsOutputReference <a name="CosmosdbAccountTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

cosmosdbaccount.NewCosmosdbAccountTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CosmosdbAccountTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CosmosdbAccountVirtualNetworkRuleList <a name="CosmosdbAccountVirtualNetworkRuleList" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

cosmosdbaccount.NewCosmosdbAccountVirtualNetworkRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CosmosdbAccountVirtualNetworkRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.get"></a>

```go
func Get(index *f64) CosmosdbAccountVirtualNetworkRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CosmosdbAccountVirtualNetworkRuleOutputReference <a name="CosmosdbAccountVirtualNetworkRuleOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cosmosdbaccount"

cosmosdbaccount.NewCosmosdbAccountVirtualNetworkRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CosmosdbAccountVirtualNetworkRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.resetIgnoreMissingVnetServiceEndpoint">ResetIgnoreMissingVnetServiceEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIgnoreMissingVnetServiceEndpoint` <a name="ResetIgnoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.resetIgnoreMissingVnetServiceEndpoint"></a>

```go
func ResetIgnoreMissingVnetServiceEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.ignoreMissingVnetServiceEndpointInput">IgnoreMissingVnetServiceEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.ignoreMissingVnetServiceEndpoint">IgnoreMissingVnetServiceEndpoint</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoreMissingVnetServiceEndpointInput`<sup>Optional</sup> <a name="IgnoreMissingVnetServiceEndpointInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.ignoreMissingVnetServiceEndpointInput"></a>

```go
func IgnoreMissingVnetServiceEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreMissingVnetServiceEndpoint`<sup>Required</sup> <a name="IgnoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.ignoreMissingVnetServiceEndpoint"></a>

```go
func IgnoreMissingVnetServiceEndpoint() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



