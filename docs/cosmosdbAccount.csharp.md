# `cosmosdbAccount` Submodule <a name="`cosmosdbAccount` Submodule" id="@cdktf/provider-azurerm.cosmosdbAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbAccount <a name="CosmosdbAccount" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account azurerm_cosmosdb_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccount(Construct Scope, string Id, CosmosdbAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig">CosmosdbAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig">CosmosdbAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
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
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetAutomaticFailoverEnabled">ResetAutomaticFailoverEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetBackup">ResetBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetBurstCapacityEnabled">ResetBurstCapacityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCapabilities">ResetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCapacity">ResetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCorsRule">ResetCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCreateMode">ResetCreateMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetDefaultIdentityType">ResetDefaultIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetFreeTierEnabled">ResetFreeTierEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetIpRangeFilter">ResetIpRangeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetIsVirtualNetworkFilterEnabled">ResetIsVirtualNetworkFilterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetKeyVaultKeyId">ResetKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetKind">ResetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetLocalAuthenticationDisabled">ResetLocalAuthenticationDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetManagedHsmKeyId">ResetManagedHsmKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetMinimalTlsVersion">ResetMinimalTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetMongoServerVersion">ResetMongoServerVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetMultipleWriteLocationsEnabled">ResetMultipleWriteLocationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetNetworkAclBypassForAzureServices">ResetNetworkAclBypassForAzureServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetNetworkAclBypassIds">ResetNetworkAclBypassIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetPartitionMergeEnabled">ResetPartitionMergeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetRestore">ResetRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetVirtualNetworkRule">ResetVirtualNetworkRule</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAnalyticalStorage` <a name="PutAnalyticalStorage" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putAnalyticalStorage"></a>

```csharp
private void PutAnalyticalStorage(CosmosdbAccountAnalyticalStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putAnalyticalStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage">CosmosdbAccountAnalyticalStorage</a>

---

##### `PutBackup` <a name="PutBackup" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putBackup"></a>

```csharp
private void PutBackup(CosmosdbAccountBackup Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup">CosmosdbAccountBackup</a>

---

##### `PutCapabilities` <a name="PutCapabilities" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCapabilities"></a>

```csharp
private void PutCapabilities(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCapabilities.parameter.value"></a>

- *Type:* object

---

##### `PutCapacity` <a name="PutCapacity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCapacity"></a>

```csharp
private void PutCapacity(CosmosdbAccountCapacity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity">CosmosdbAccountCapacity</a>

---

##### `PutConsistencyPolicy` <a name="PutConsistencyPolicy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putConsistencyPolicy"></a>

```csharp
private void PutConsistencyPolicy(CosmosdbAccountConsistencyPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putConsistencyPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy">CosmosdbAccountConsistencyPolicy</a>

---

##### `PutCorsRule` <a name="PutCorsRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCorsRule"></a>

```csharp
private void PutCorsRule(CosmosdbAccountCorsRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCorsRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule">CosmosdbAccountCorsRule</a>

---

##### `PutGeoLocation` <a name="PutGeoLocation" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putGeoLocation"></a>

```csharp
private void PutGeoLocation(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putGeoLocation.parameter.value"></a>

- *Type:* object

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putIdentity"></a>

```csharp
private void PutIdentity(CosmosdbAccountIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity">CosmosdbAccountIdentity</a>

---

##### `PutRestore` <a name="PutRestore" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putRestore"></a>

```csharp
private void PutRestore(CosmosdbAccountRestore Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putRestore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore">CosmosdbAccountRestore</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putTimeouts"></a>

```csharp
private void PutTimeouts(CosmosdbAccountTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts">CosmosdbAccountTimeouts</a>

---

##### `PutVirtualNetworkRule` <a name="PutVirtualNetworkRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putVirtualNetworkRule"></a>

```csharp
private void PutVirtualNetworkRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putVirtualNetworkRule.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessKeyMetadataWritesEnabled` <a name="ResetAccessKeyMetadataWritesEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetAccessKeyMetadataWritesEnabled"></a>

```csharp
private void ResetAccessKeyMetadataWritesEnabled()
```

##### `ResetAnalyticalStorage` <a name="ResetAnalyticalStorage" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetAnalyticalStorage"></a>

```csharp
private void ResetAnalyticalStorage()
```

##### `ResetAnalyticalStorageEnabled` <a name="ResetAnalyticalStorageEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetAnalyticalStorageEnabled"></a>

```csharp
private void ResetAnalyticalStorageEnabled()
```

##### `ResetAutomaticFailoverEnabled` <a name="ResetAutomaticFailoverEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetAutomaticFailoverEnabled"></a>

```csharp
private void ResetAutomaticFailoverEnabled()
```

##### `ResetBackup` <a name="ResetBackup" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetBackup"></a>

```csharp
private void ResetBackup()
```

##### `ResetBurstCapacityEnabled` <a name="ResetBurstCapacityEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetBurstCapacityEnabled"></a>

```csharp
private void ResetBurstCapacityEnabled()
```

##### `ResetCapabilities` <a name="ResetCapabilities" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCapabilities"></a>

```csharp
private void ResetCapabilities()
```

##### `ResetCapacity` <a name="ResetCapacity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCapacity"></a>

```csharp
private void ResetCapacity()
```

##### `ResetCorsRule` <a name="ResetCorsRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCorsRule"></a>

```csharp
private void ResetCorsRule()
```

##### `ResetCreateMode` <a name="ResetCreateMode" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCreateMode"></a>

```csharp
private void ResetCreateMode()
```

##### `ResetDefaultIdentityType` <a name="ResetDefaultIdentityType" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetDefaultIdentityType"></a>

```csharp
private void ResetDefaultIdentityType()
```

##### `ResetFreeTierEnabled` <a name="ResetFreeTierEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetFreeTierEnabled"></a>

```csharp
private void ResetFreeTierEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetIpRangeFilter` <a name="ResetIpRangeFilter" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetIpRangeFilter"></a>

```csharp
private void ResetIpRangeFilter()
```

##### `ResetIsVirtualNetworkFilterEnabled` <a name="ResetIsVirtualNetworkFilterEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetIsVirtualNetworkFilterEnabled"></a>

```csharp
private void ResetIsVirtualNetworkFilterEnabled()
```

##### `ResetKeyVaultKeyId` <a name="ResetKeyVaultKeyId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetKeyVaultKeyId"></a>

```csharp
private void ResetKeyVaultKeyId()
```

##### `ResetKind` <a name="ResetKind" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetKind"></a>

```csharp
private void ResetKind()
```

##### `ResetLocalAuthenticationDisabled` <a name="ResetLocalAuthenticationDisabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetLocalAuthenticationDisabled"></a>

```csharp
private void ResetLocalAuthenticationDisabled()
```

##### `ResetManagedHsmKeyId` <a name="ResetManagedHsmKeyId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetManagedHsmKeyId"></a>

```csharp
private void ResetManagedHsmKeyId()
```

##### `ResetMinimalTlsVersion` <a name="ResetMinimalTlsVersion" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetMinimalTlsVersion"></a>

```csharp
private void ResetMinimalTlsVersion()
```

##### `ResetMongoServerVersion` <a name="ResetMongoServerVersion" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetMongoServerVersion"></a>

```csharp
private void ResetMongoServerVersion()
```

##### `ResetMultipleWriteLocationsEnabled` <a name="ResetMultipleWriteLocationsEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetMultipleWriteLocationsEnabled"></a>

```csharp
private void ResetMultipleWriteLocationsEnabled()
```

##### `ResetNetworkAclBypassForAzureServices` <a name="ResetNetworkAclBypassForAzureServices" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetNetworkAclBypassForAzureServices"></a>

```csharp
private void ResetNetworkAclBypassForAzureServices()
```

##### `ResetNetworkAclBypassIds` <a name="ResetNetworkAclBypassIds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetNetworkAclBypassIds"></a>

```csharp
private void ResetNetworkAclBypassIds()
```

##### `ResetPartitionMergeEnabled` <a name="ResetPartitionMergeEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetPartitionMergeEnabled"></a>

```csharp
private void ResetPartitionMergeEnabled()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetPublicNetworkAccessEnabled"></a>

```csharp
private void ResetPublicNetworkAccessEnabled()
```

##### `ResetRestore` <a name="ResetRestore" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetRestore"></a>

```csharp
private void ResetRestore()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVirtualNetworkRule` <a name="ResetVirtualNetworkRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetVirtualNetworkRule"></a>

```csharp
private void ResetVirtualNetworkRule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CosmosdbAccount resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CosmosdbAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CosmosdbAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CosmosdbAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CosmosdbAccount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CosmosdbAccount resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CosmosdbAccount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CosmosdbAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CosmosdbAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorage">AnalyticalStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference">CosmosdbAccountAnalyticalStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.backup">Backup</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference">CosmosdbAccountBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capabilities">Capabilities</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList">CosmosdbAccountCapabilitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capacity">Capacity</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference">CosmosdbAccountCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.consistencyPolicy">ConsistencyPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference">CosmosdbAccountConsistencyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.corsRule">CorsRule</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference">CosmosdbAccountCorsRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.geoLocation">GeoLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList">CosmosdbAccountGeoLocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference">CosmosdbAccountIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryMongodbConnectionString">PrimaryMongodbConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryReadonlyKey">PrimaryReadonlyKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryReadonlyMongodbConnectionString">PrimaryReadonlyMongodbConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryReadonlySqlConnectionString">PrimaryReadonlySqlConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primarySqlConnectionString">PrimarySqlConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.readEndpoints">ReadEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.restore">Restore</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference">CosmosdbAccountRestoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryKey">SecondaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryMongodbConnectionString">SecondaryMongodbConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryReadonlyKey">SecondaryReadonlyKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryReadonlyMongodbConnectionString">SecondaryReadonlyMongodbConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryReadonlySqlConnectionString">SecondaryReadonlySqlConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondarySqlConnectionString">SecondarySqlConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference">CosmosdbAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.virtualNetworkRule">VirtualNetworkRule</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList">CosmosdbAccountVirtualNetworkRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.writeEndpoints">WriteEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.accessKeyMetadataWritesEnabledInput">AccessKeyMetadataWritesEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorageEnabledInput">AnalyticalStorageEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorageInput">AnalyticalStorageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage">CosmosdbAccountAnalyticalStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.automaticFailoverEnabledInput">AutomaticFailoverEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.backupInput">BackupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup">CosmosdbAccountBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.burstCapacityEnabledInput">BurstCapacityEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capabilitiesInput">CapabilitiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capacityInput">CapacityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity">CosmosdbAccountCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.consistencyPolicyInput">ConsistencyPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy">CosmosdbAccountConsistencyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.corsRuleInput">CorsRuleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule">CosmosdbAccountCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.createModeInput">CreateModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.defaultIdentityTypeInput">DefaultIdentityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.freeTierEnabledInput">FreeTierEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.geoLocationInput">GeoLocationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity">CosmosdbAccountIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.ipRangeFilterInput">IpRangeFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.isVirtualNetworkFilterEnabledInput">IsVirtualNetworkFilterEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.localAuthenticationDisabledInput">LocalAuthenticationDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.managedHsmKeyIdInput">ManagedHsmKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.minimalTlsVersionInput">MinimalTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.mongoServerVersionInput">MongoServerVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.multipleWriteLocationsEnabledInput">MultipleWriteLocationsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassForAzureServicesInput">NetworkAclBypassForAzureServicesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassIdsInput">NetworkAclBypassIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.offerTypeInput">OfferTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.partitionMergeEnabledInput">PartitionMergeEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.restoreInput">RestoreInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore">CosmosdbAccountRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.virtualNetworkRuleInput">VirtualNetworkRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.accessKeyMetadataWritesEnabled">AccessKeyMetadataWritesEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorageEnabled">AnalyticalStorageEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.automaticFailoverEnabled">AutomaticFailoverEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.burstCapacityEnabled">BurstCapacityEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.createMode">CreateMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.defaultIdentityType">DefaultIdentityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.freeTierEnabled">FreeTierEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.ipRangeFilter">IpRangeFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.isVirtualNetworkFilterEnabled">IsVirtualNetworkFilterEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.localAuthenticationDisabled">LocalAuthenticationDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.managedHsmKeyId">ManagedHsmKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.minimalTlsVersion">MinimalTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.mongoServerVersion">MongoServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.multipleWriteLocationsEnabled">MultipleWriteLocationsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassForAzureServices">NetworkAclBypassForAzureServices</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassIds">NetworkAclBypassIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.offerType">OfferType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.partitionMergeEnabled">PartitionMergeEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AnalyticalStorage`<sup>Required</sup> <a name="AnalyticalStorage" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorage"></a>

```csharp
public CosmosdbAccountAnalyticalStorageOutputReference AnalyticalStorage { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference">CosmosdbAccountAnalyticalStorageOutputReference</a>

---

##### `Backup`<sup>Required</sup> <a name="Backup" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.backup"></a>

```csharp
public CosmosdbAccountBackupOutputReference Backup { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference">CosmosdbAccountBackupOutputReference</a>

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capabilities"></a>

```csharp
public CosmosdbAccountCapabilitiesList Capabilities { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList">CosmosdbAccountCapabilitiesList</a>

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capacity"></a>

```csharp
public CosmosdbAccountCapacityOutputReference Capacity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference">CosmosdbAccountCapacityOutputReference</a>

---

##### `ConsistencyPolicy`<sup>Required</sup> <a name="ConsistencyPolicy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.consistencyPolicy"></a>

```csharp
public CosmosdbAccountConsistencyPolicyOutputReference ConsistencyPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference">CosmosdbAccountConsistencyPolicyOutputReference</a>

---

##### `CorsRule`<sup>Required</sup> <a name="CorsRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.corsRule"></a>

```csharp
public CosmosdbAccountCorsRuleOutputReference CorsRule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference">CosmosdbAccountCorsRuleOutputReference</a>

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `GeoLocation`<sup>Required</sup> <a name="GeoLocation" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.geoLocation"></a>

```csharp
public CosmosdbAccountGeoLocationList GeoLocation { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList">CosmosdbAccountGeoLocationList</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.identity"></a>

```csharp
public CosmosdbAccountIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference">CosmosdbAccountIdentityOutputReference</a>

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; }
```

- *Type:* string

---

##### `PrimaryMongodbConnectionString`<sup>Required</sup> <a name="PrimaryMongodbConnectionString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryMongodbConnectionString"></a>

```csharp
public string PrimaryMongodbConnectionString { get; }
```

- *Type:* string

---

##### `PrimaryReadonlyKey`<sup>Required</sup> <a name="PrimaryReadonlyKey" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryReadonlyKey"></a>

```csharp
public string PrimaryReadonlyKey { get; }
```

- *Type:* string

---

##### `PrimaryReadonlyMongodbConnectionString`<sup>Required</sup> <a name="PrimaryReadonlyMongodbConnectionString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryReadonlyMongodbConnectionString"></a>

```csharp
public string PrimaryReadonlyMongodbConnectionString { get; }
```

- *Type:* string

---

##### `PrimaryReadonlySqlConnectionString`<sup>Required</sup> <a name="PrimaryReadonlySqlConnectionString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryReadonlySqlConnectionString"></a>

```csharp
public string PrimaryReadonlySqlConnectionString { get; }
```

- *Type:* string

---

##### `PrimarySqlConnectionString`<sup>Required</sup> <a name="PrimarySqlConnectionString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primarySqlConnectionString"></a>

```csharp
public string PrimarySqlConnectionString { get; }
```

- *Type:* string

---

##### `ReadEndpoints`<sup>Required</sup> <a name="ReadEndpoints" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.readEndpoints"></a>

```csharp
public string[] ReadEndpoints { get; }
```

- *Type:* string[]

---

##### `Restore`<sup>Required</sup> <a name="Restore" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.restore"></a>

```csharp
public CosmosdbAccountRestoreOutputReference Restore { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference">CosmosdbAccountRestoreOutputReference</a>

---

##### `SecondaryKey`<sup>Required</sup> <a name="SecondaryKey" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryKey"></a>

```csharp
public string SecondaryKey { get; }
```

- *Type:* string

---

##### `SecondaryMongodbConnectionString`<sup>Required</sup> <a name="SecondaryMongodbConnectionString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryMongodbConnectionString"></a>

```csharp
public string SecondaryMongodbConnectionString { get; }
```

- *Type:* string

---

##### `SecondaryReadonlyKey`<sup>Required</sup> <a name="SecondaryReadonlyKey" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryReadonlyKey"></a>

```csharp
public string SecondaryReadonlyKey { get; }
```

- *Type:* string

---

##### `SecondaryReadonlyMongodbConnectionString`<sup>Required</sup> <a name="SecondaryReadonlyMongodbConnectionString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryReadonlyMongodbConnectionString"></a>

```csharp
public string SecondaryReadonlyMongodbConnectionString { get; }
```

- *Type:* string

---

##### `SecondaryReadonlySqlConnectionString`<sup>Required</sup> <a name="SecondaryReadonlySqlConnectionString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryReadonlySqlConnectionString"></a>

```csharp
public string SecondaryReadonlySqlConnectionString { get; }
```

- *Type:* string

---

##### `SecondarySqlConnectionString`<sup>Required</sup> <a name="SecondarySqlConnectionString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondarySqlConnectionString"></a>

```csharp
public string SecondarySqlConnectionString { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.timeouts"></a>

```csharp
public CosmosdbAccountTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference">CosmosdbAccountTimeoutsOutputReference</a>

---

##### `VirtualNetworkRule`<sup>Required</sup> <a name="VirtualNetworkRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.virtualNetworkRule"></a>

```csharp
public CosmosdbAccountVirtualNetworkRuleList VirtualNetworkRule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList">CosmosdbAccountVirtualNetworkRuleList</a>

---

##### `WriteEndpoints`<sup>Required</sup> <a name="WriteEndpoints" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.writeEndpoints"></a>

```csharp
public string[] WriteEndpoints { get; }
```

- *Type:* string[]

---

##### `AccessKeyMetadataWritesEnabledInput`<sup>Optional</sup> <a name="AccessKeyMetadataWritesEnabledInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.accessKeyMetadataWritesEnabledInput"></a>

```csharp
public object AccessKeyMetadataWritesEnabledInput { get; }
```

- *Type:* object

---

##### `AnalyticalStorageEnabledInput`<sup>Optional</sup> <a name="AnalyticalStorageEnabledInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorageEnabledInput"></a>

```csharp
public object AnalyticalStorageEnabledInput { get; }
```

- *Type:* object

---

##### `AnalyticalStorageInput`<sup>Optional</sup> <a name="AnalyticalStorageInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorageInput"></a>

```csharp
public CosmosdbAccountAnalyticalStorage AnalyticalStorageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage">CosmosdbAccountAnalyticalStorage</a>

---

##### `AutomaticFailoverEnabledInput`<sup>Optional</sup> <a name="AutomaticFailoverEnabledInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.automaticFailoverEnabledInput"></a>

```csharp
public object AutomaticFailoverEnabledInput { get; }
```

- *Type:* object

---

##### `BackupInput`<sup>Optional</sup> <a name="BackupInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.backupInput"></a>

```csharp
public CosmosdbAccountBackup BackupInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup">CosmosdbAccountBackup</a>

---

##### `BurstCapacityEnabledInput`<sup>Optional</sup> <a name="BurstCapacityEnabledInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.burstCapacityEnabledInput"></a>

```csharp
public object BurstCapacityEnabledInput { get; }
```

- *Type:* object

---

##### `CapabilitiesInput`<sup>Optional</sup> <a name="CapabilitiesInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capabilitiesInput"></a>

```csharp
public object CapabilitiesInput { get; }
```

- *Type:* object

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capacityInput"></a>

```csharp
public CosmosdbAccountCapacity CapacityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity">CosmosdbAccountCapacity</a>

---

##### `ConsistencyPolicyInput`<sup>Optional</sup> <a name="ConsistencyPolicyInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.consistencyPolicyInput"></a>

```csharp
public CosmosdbAccountConsistencyPolicy ConsistencyPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy">CosmosdbAccountConsistencyPolicy</a>

---

##### `CorsRuleInput`<sup>Optional</sup> <a name="CorsRuleInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.corsRuleInput"></a>

```csharp
public CosmosdbAccountCorsRule CorsRuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule">CosmosdbAccountCorsRule</a>

---

##### `CreateModeInput`<sup>Optional</sup> <a name="CreateModeInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.createModeInput"></a>

```csharp
public string CreateModeInput { get; }
```

- *Type:* string

---

##### `DefaultIdentityTypeInput`<sup>Optional</sup> <a name="DefaultIdentityTypeInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.defaultIdentityTypeInput"></a>

```csharp
public string DefaultIdentityTypeInput { get; }
```

- *Type:* string

---

##### `FreeTierEnabledInput`<sup>Optional</sup> <a name="FreeTierEnabledInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.freeTierEnabledInput"></a>

```csharp
public object FreeTierEnabledInput { get; }
```

- *Type:* object

---

##### `GeoLocationInput`<sup>Optional</sup> <a name="GeoLocationInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.geoLocationInput"></a>

```csharp
public object GeoLocationInput { get; }
```

- *Type:* object

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.identityInput"></a>

```csharp
public CosmosdbAccountIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity">CosmosdbAccountIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpRangeFilterInput`<sup>Optional</sup> <a name="IpRangeFilterInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.ipRangeFilterInput"></a>

```csharp
public string[] IpRangeFilterInput { get; }
```

- *Type:* string[]

---

##### `IsVirtualNetworkFilterEnabledInput`<sup>Optional</sup> <a name="IsVirtualNetworkFilterEnabledInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.isVirtualNetworkFilterEnabledInput"></a>

```csharp
public object IsVirtualNetworkFilterEnabledInput { get; }
```

- *Type:* object

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.keyVaultKeyIdInput"></a>

```csharp
public string KeyVaultKeyIdInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `LocalAuthenticationDisabledInput`<sup>Optional</sup> <a name="LocalAuthenticationDisabledInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.localAuthenticationDisabledInput"></a>

```csharp
public object LocalAuthenticationDisabledInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ManagedHsmKeyIdInput`<sup>Optional</sup> <a name="ManagedHsmKeyIdInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.managedHsmKeyIdInput"></a>

```csharp
public string ManagedHsmKeyIdInput { get; }
```

- *Type:* string

---

##### `MinimalTlsVersionInput`<sup>Optional</sup> <a name="MinimalTlsVersionInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.minimalTlsVersionInput"></a>

```csharp
public string MinimalTlsVersionInput { get; }
```

- *Type:* string

---

##### `MongoServerVersionInput`<sup>Optional</sup> <a name="MongoServerVersionInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.mongoServerVersionInput"></a>

```csharp
public string MongoServerVersionInput { get; }
```

- *Type:* string

---

##### `MultipleWriteLocationsEnabledInput`<sup>Optional</sup> <a name="MultipleWriteLocationsEnabledInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.multipleWriteLocationsEnabledInput"></a>

```csharp
public object MultipleWriteLocationsEnabledInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkAclBypassForAzureServicesInput`<sup>Optional</sup> <a name="NetworkAclBypassForAzureServicesInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassForAzureServicesInput"></a>

```csharp
public object NetworkAclBypassForAzureServicesInput { get; }
```

- *Type:* object

---

##### `NetworkAclBypassIdsInput`<sup>Optional</sup> <a name="NetworkAclBypassIdsInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassIdsInput"></a>

```csharp
public string[] NetworkAclBypassIdsInput { get; }
```

- *Type:* string[]

---

##### `OfferTypeInput`<sup>Optional</sup> <a name="OfferTypeInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.offerTypeInput"></a>

```csharp
public string OfferTypeInput { get; }
```

- *Type:* string

---

##### `PartitionMergeEnabledInput`<sup>Optional</sup> <a name="PartitionMergeEnabledInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.partitionMergeEnabledInput"></a>

```csharp
public object PartitionMergeEnabledInput { get; }
```

- *Type:* object

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.publicNetworkAccessEnabledInput"></a>

```csharp
public object PublicNetworkAccessEnabledInput { get; }
```

- *Type:* object

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `RestoreInput`<sup>Optional</sup> <a name="RestoreInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.restoreInput"></a>

```csharp
public CosmosdbAccountRestore RestoreInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore">CosmosdbAccountRestore</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VirtualNetworkRuleInput`<sup>Optional</sup> <a name="VirtualNetworkRuleInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.virtualNetworkRuleInput"></a>

```csharp
public object VirtualNetworkRuleInput { get; }
```

- *Type:* object

---

##### `AccessKeyMetadataWritesEnabled`<sup>Required</sup> <a name="AccessKeyMetadataWritesEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.accessKeyMetadataWritesEnabled"></a>

```csharp
public object AccessKeyMetadataWritesEnabled { get; }
```

- *Type:* object

---

##### `AnalyticalStorageEnabled`<sup>Required</sup> <a name="AnalyticalStorageEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorageEnabled"></a>

```csharp
public object AnalyticalStorageEnabled { get; }
```

- *Type:* object

---

##### `AutomaticFailoverEnabled`<sup>Required</sup> <a name="AutomaticFailoverEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.automaticFailoverEnabled"></a>

```csharp
public object AutomaticFailoverEnabled { get; }
```

- *Type:* object

---

##### `BurstCapacityEnabled`<sup>Required</sup> <a name="BurstCapacityEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.burstCapacityEnabled"></a>

```csharp
public object BurstCapacityEnabled { get; }
```

- *Type:* object

---

##### `CreateMode`<sup>Required</sup> <a name="CreateMode" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.createMode"></a>

```csharp
public string CreateMode { get; }
```

- *Type:* string

---

##### `DefaultIdentityType`<sup>Required</sup> <a name="DefaultIdentityType" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.defaultIdentityType"></a>

```csharp
public string DefaultIdentityType { get; }
```

- *Type:* string

---

##### `FreeTierEnabled`<sup>Required</sup> <a name="FreeTierEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.freeTierEnabled"></a>

```csharp
public object FreeTierEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpRangeFilter`<sup>Required</sup> <a name="IpRangeFilter" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.ipRangeFilter"></a>

```csharp
public string[] IpRangeFilter { get; }
```

- *Type:* string[]

---

##### `IsVirtualNetworkFilterEnabled`<sup>Required</sup> <a name="IsVirtualNetworkFilterEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.isVirtualNetworkFilterEnabled"></a>

```csharp
public object IsVirtualNetworkFilterEnabled { get; }
```

- *Type:* object

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `LocalAuthenticationDisabled`<sup>Required</sup> <a name="LocalAuthenticationDisabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.localAuthenticationDisabled"></a>

```csharp
public object LocalAuthenticationDisabled { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ManagedHsmKeyId`<sup>Required</sup> <a name="ManagedHsmKeyId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.managedHsmKeyId"></a>

```csharp
public string ManagedHsmKeyId { get; }
```

- *Type:* string

---

##### `MinimalTlsVersion`<sup>Required</sup> <a name="MinimalTlsVersion" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.minimalTlsVersion"></a>

```csharp
public string MinimalTlsVersion { get; }
```

- *Type:* string

---

##### `MongoServerVersion`<sup>Required</sup> <a name="MongoServerVersion" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.mongoServerVersion"></a>

```csharp
public string MongoServerVersion { get; }
```

- *Type:* string

---

##### `MultipleWriteLocationsEnabled`<sup>Required</sup> <a name="MultipleWriteLocationsEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.multipleWriteLocationsEnabled"></a>

```csharp
public object MultipleWriteLocationsEnabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkAclBypassForAzureServices`<sup>Required</sup> <a name="NetworkAclBypassForAzureServices" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassForAzureServices"></a>

```csharp
public object NetworkAclBypassForAzureServices { get; }
```

- *Type:* object

---

##### `NetworkAclBypassIds`<sup>Required</sup> <a name="NetworkAclBypassIds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassIds"></a>

```csharp
public string[] NetworkAclBypassIds { get; }
```

- *Type:* string[]

---

##### `OfferType`<sup>Required</sup> <a name="OfferType" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.offerType"></a>

```csharp
public string OfferType { get; }
```

- *Type:* string

---

##### `PartitionMergeEnabled`<sup>Required</sup> <a name="PartitionMergeEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.partitionMergeEnabled"></a>

```csharp
public object PartitionMergeEnabled { get; }
```

- *Type:* object

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; }
```

- *Type:* object

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbAccountAnalyticalStorage <a name="CosmosdbAccountAnalyticalStorage" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountAnalyticalStorage {
    string SchemaType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage.property.schemaType">SchemaType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#schema_type CosmosdbAccount#schema_type}. |

---

##### `SchemaType`<sup>Required</sup> <a name="SchemaType" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage.property.schemaType"></a>

```csharp
public string SchemaType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#schema_type CosmosdbAccount#schema_type}.

---

### CosmosdbAccountBackup <a name="CosmosdbAccountBackup" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountBackup {
    string Type,
    double IntervalInMinutes = null,
    double RetentionInHours = null,
    string StorageRedundancy = null,
    string Tier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#type CosmosdbAccount#type}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.intervalInMinutes">IntervalInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#interval_in_minutes CosmosdbAccount#interval_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.retentionInHours">RetentionInHours</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#retention_in_hours CosmosdbAccount#retention_in_hours}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.storageRedundancy">StorageRedundancy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#storage_redundancy CosmosdbAccount#storage_redundancy}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.tier">Tier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#tier CosmosdbAccount#tier}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#type CosmosdbAccount#type}.

---

##### `IntervalInMinutes`<sup>Optional</sup> <a name="IntervalInMinutes" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.intervalInMinutes"></a>

```csharp
public double IntervalInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#interval_in_minutes CosmosdbAccount#interval_in_minutes}.

---

##### `RetentionInHours`<sup>Optional</sup> <a name="RetentionInHours" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.retentionInHours"></a>

```csharp
public double RetentionInHours { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#retention_in_hours CosmosdbAccount#retention_in_hours}.

---

##### `StorageRedundancy`<sup>Optional</sup> <a name="StorageRedundancy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.storageRedundancy"></a>

```csharp
public string StorageRedundancy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#storage_redundancy CosmosdbAccount#storage_redundancy}.

---

##### `Tier`<sup>Optional</sup> <a name="Tier" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.tier"></a>

```csharp
public string Tier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#tier CosmosdbAccount#tier}.

---

### CosmosdbAccountCapabilities <a name="CosmosdbAccountCapabilities" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountCapabilities {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}.

---

### CosmosdbAccountCapacity <a name="CosmosdbAccountCapacity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountCapacity {
    double TotalThroughputLimit
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity.property.totalThroughputLimit">TotalThroughputLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#total_throughput_limit CosmosdbAccount#total_throughput_limit}. |

---

##### `TotalThroughputLimit`<sup>Required</sup> <a name="TotalThroughputLimit" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity.property.totalThroughputLimit"></a>

```csharp
public double TotalThroughputLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#total_throughput_limit CosmosdbAccount#total_throughput_limit}.

---

### CosmosdbAccountConfig <a name="CosmosdbAccountConfig" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    CosmosdbAccountConsistencyPolicy ConsistencyPolicy,
    object GeoLocation,
    string Location,
    string Name,
    string OfferType,
    string ResourceGroupName,
    object AccessKeyMetadataWritesEnabled = null,
    CosmosdbAccountAnalyticalStorage AnalyticalStorage = null,
    object AnalyticalStorageEnabled = null,
    object AutomaticFailoverEnabled = null,
    CosmosdbAccountBackup Backup = null,
    object BurstCapacityEnabled = null,
    object Capabilities = null,
    CosmosdbAccountCapacity Capacity = null,
    CosmosdbAccountCorsRule CorsRule = null,
    string CreateMode = null,
    string DefaultIdentityType = null,
    object FreeTierEnabled = null,
    string Id = null,
    CosmosdbAccountIdentity Identity = null,
    string[] IpRangeFilter = null,
    object IsVirtualNetworkFilterEnabled = null,
    string KeyVaultKeyId = null,
    string Kind = null,
    object LocalAuthenticationDisabled = null,
    string ManagedHsmKeyId = null,
    string MinimalTlsVersion = null,
    string MongoServerVersion = null,
    object MultipleWriteLocationsEnabled = null,
    object NetworkAclBypassForAzureServices = null,
    string[] NetworkAclBypassIds = null,
    object PartitionMergeEnabled = null,
    object PublicNetworkAccessEnabled = null,
    CosmosdbAccountRestore Restore = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    CosmosdbAccountTimeouts Timeouts = null,
    object VirtualNetworkRule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.consistencyPolicy">ConsistencyPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy">CosmosdbAccountConsistencyPolicy</a></code> | consistency_policy block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.geoLocation">GeoLocation</a></code> | <code>object</code> | geo_location block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#location CosmosdbAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.offerType">OfferType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#offer_type CosmosdbAccount#offer_type}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#resource_group_name CosmosdbAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.accessKeyMetadataWritesEnabled">AccessKeyMetadataWritesEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#access_key_metadata_writes_enabled CosmosdbAccount#access_key_metadata_writes_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.analyticalStorage">AnalyticalStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage">CosmosdbAccountAnalyticalStorage</a></code> | analytical_storage block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.analyticalStorageEnabled">AnalyticalStorageEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#analytical_storage_enabled CosmosdbAccount#analytical_storage_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.automaticFailoverEnabled">AutomaticFailoverEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#automatic_failover_enabled CosmosdbAccount#automatic_failover_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.backup">Backup</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup">CosmosdbAccountBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.burstCapacityEnabled">BurstCapacityEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#burst_capacity_enabled CosmosdbAccount#burst_capacity_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.capabilities">Capabilities</a></code> | <code>object</code> | capabilities block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.capacity">Capacity</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity">CosmosdbAccountCapacity</a></code> | capacity block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.corsRule">CorsRule</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule">CosmosdbAccountCorsRule</a></code> | cors_rule block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.createMode">CreateMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#create_mode CosmosdbAccount#create_mode}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.defaultIdentityType">DefaultIdentityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#default_identity_type CosmosdbAccount#default_identity_type}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.freeTierEnabled">FreeTierEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#free_tier_enabled CosmosdbAccount#free_tier_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#id CosmosdbAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity">CosmosdbAccountIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.ipRangeFilter">IpRangeFilter</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#ip_range_filter CosmosdbAccount#ip_range_filter}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.isVirtualNetworkFilterEnabled">IsVirtualNetworkFilterEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#is_virtual_network_filter_enabled CosmosdbAccount#is_virtual_network_filter_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#key_vault_key_id CosmosdbAccount#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.kind">Kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#kind CosmosdbAccount#kind}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.localAuthenticationDisabled">LocalAuthenticationDisabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#local_authentication_disabled CosmosdbAccount#local_authentication_disabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.managedHsmKeyId">ManagedHsmKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#managed_hsm_key_id CosmosdbAccount#managed_hsm_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.minimalTlsVersion">MinimalTlsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#minimal_tls_version CosmosdbAccount#minimal_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.mongoServerVersion">MongoServerVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#mongo_server_version CosmosdbAccount#mongo_server_version}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.multipleWriteLocationsEnabled">MultipleWriteLocationsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#multiple_write_locations_enabled CosmosdbAccount#multiple_write_locations_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.networkAclBypassForAzureServices">NetworkAclBypassForAzureServices</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#network_acl_bypass_for_azure_services CosmosdbAccount#network_acl_bypass_for_azure_services}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.networkAclBypassIds">NetworkAclBypassIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#network_acl_bypass_ids CosmosdbAccount#network_acl_bypass_ids}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.partitionMergeEnabled">PartitionMergeEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#partition_merge_enabled CosmosdbAccount#partition_merge_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#public_network_access_enabled CosmosdbAccount#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.restore">Restore</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore">CosmosdbAccountRestore</a></code> | restore block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#tags CosmosdbAccount#tags}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts">CosmosdbAccountTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.virtualNetworkRule">VirtualNetworkRule</a></code> | <code>object</code> | virtual_network_rule block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConsistencyPolicy`<sup>Required</sup> <a name="ConsistencyPolicy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.consistencyPolicy"></a>

```csharp
public CosmosdbAccountConsistencyPolicy ConsistencyPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy">CosmosdbAccountConsistencyPolicy</a>

consistency_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#consistency_policy CosmosdbAccount#consistency_policy}

---

##### `GeoLocation`<sup>Required</sup> <a name="GeoLocation" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.geoLocation"></a>

```csharp
public object GeoLocation { get; set; }
```

- *Type:* object

geo_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#geo_location CosmosdbAccount#geo_location}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#location CosmosdbAccount#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}.

---

##### `OfferType`<sup>Required</sup> <a name="OfferType" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.offerType"></a>

```csharp
public string OfferType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#offer_type CosmosdbAccount#offer_type}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#resource_group_name CosmosdbAccount#resource_group_name}.

---

##### `AccessKeyMetadataWritesEnabled`<sup>Optional</sup> <a name="AccessKeyMetadataWritesEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.accessKeyMetadataWritesEnabled"></a>

```csharp
public object AccessKeyMetadataWritesEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#access_key_metadata_writes_enabled CosmosdbAccount#access_key_metadata_writes_enabled}.

---

##### `AnalyticalStorage`<sup>Optional</sup> <a name="AnalyticalStorage" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.analyticalStorage"></a>

```csharp
public CosmosdbAccountAnalyticalStorage AnalyticalStorage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage">CosmosdbAccountAnalyticalStorage</a>

analytical_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#analytical_storage CosmosdbAccount#analytical_storage}

---

##### `AnalyticalStorageEnabled`<sup>Optional</sup> <a name="AnalyticalStorageEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.analyticalStorageEnabled"></a>

```csharp
public object AnalyticalStorageEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#analytical_storage_enabled CosmosdbAccount#analytical_storage_enabled}.

---

##### `AutomaticFailoverEnabled`<sup>Optional</sup> <a name="AutomaticFailoverEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.automaticFailoverEnabled"></a>

```csharp
public object AutomaticFailoverEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#automatic_failover_enabled CosmosdbAccount#automatic_failover_enabled}.

---

##### `Backup`<sup>Optional</sup> <a name="Backup" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.backup"></a>

```csharp
public CosmosdbAccountBackup Backup { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup">CosmosdbAccountBackup</a>

backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#backup CosmosdbAccount#backup}

---

##### `BurstCapacityEnabled`<sup>Optional</sup> <a name="BurstCapacityEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.burstCapacityEnabled"></a>

```csharp
public object BurstCapacityEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#burst_capacity_enabled CosmosdbAccount#burst_capacity_enabled}.

---

##### `Capabilities`<sup>Optional</sup> <a name="Capabilities" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.capabilities"></a>

```csharp
public object Capabilities { get; set; }
```

- *Type:* object

capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#capabilities CosmosdbAccount#capabilities}

---

##### `Capacity`<sup>Optional</sup> <a name="Capacity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.capacity"></a>

```csharp
public CosmosdbAccountCapacity Capacity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity">CosmosdbAccountCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#capacity CosmosdbAccount#capacity}

---

##### `CorsRule`<sup>Optional</sup> <a name="CorsRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.corsRule"></a>

```csharp
public CosmosdbAccountCorsRule CorsRule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule">CosmosdbAccountCorsRule</a>

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#cors_rule CosmosdbAccount#cors_rule}

---

##### `CreateMode`<sup>Optional</sup> <a name="CreateMode" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.createMode"></a>

```csharp
public string CreateMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#create_mode CosmosdbAccount#create_mode}.

---

##### `DefaultIdentityType`<sup>Optional</sup> <a name="DefaultIdentityType" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.defaultIdentityType"></a>

```csharp
public string DefaultIdentityType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#default_identity_type CosmosdbAccount#default_identity_type}.

---

##### `FreeTierEnabled`<sup>Optional</sup> <a name="FreeTierEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.freeTierEnabled"></a>

```csharp
public object FreeTierEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#free_tier_enabled CosmosdbAccount#free_tier_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#id CosmosdbAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.identity"></a>

```csharp
public CosmosdbAccountIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity">CosmosdbAccountIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#identity CosmosdbAccount#identity}

---

##### `IpRangeFilter`<sup>Optional</sup> <a name="IpRangeFilter" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.ipRangeFilter"></a>

```csharp
public string[] IpRangeFilter { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#ip_range_filter CosmosdbAccount#ip_range_filter}.

---

##### `IsVirtualNetworkFilterEnabled`<sup>Optional</sup> <a name="IsVirtualNetworkFilterEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.isVirtualNetworkFilterEnabled"></a>

```csharp
public object IsVirtualNetworkFilterEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#is_virtual_network_filter_enabled CosmosdbAccount#is_virtual_network_filter_enabled}.

---

##### `KeyVaultKeyId`<sup>Optional</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#key_vault_key_id CosmosdbAccount#key_vault_key_id}.

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#kind CosmosdbAccount#kind}.

---

##### `LocalAuthenticationDisabled`<sup>Optional</sup> <a name="LocalAuthenticationDisabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.localAuthenticationDisabled"></a>

```csharp
public object LocalAuthenticationDisabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#local_authentication_disabled CosmosdbAccount#local_authentication_disabled}.

---

##### `ManagedHsmKeyId`<sup>Optional</sup> <a name="ManagedHsmKeyId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.managedHsmKeyId"></a>

```csharp
public string ManagedHsmKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#managed_hsm_key_id CosmosdbAccount#managed_hsm_key_id}.

---

##### `MinimalTlsVersion`<sup>Optional</sup> <a name="MinimalTlsVersion" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.minimalTlsVersion"></a>

```csharp
public string MinimalTlsVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#minimal_tls_version CosmosdbAccount#minimal_tls_version}.

---

##### `MongoServerVersion`<sup>Optional</sup> <a name="MongoServerVersion" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.mongoServerVersion"></a>

```csharp
public string MongoServerVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#mongo_server_version CosmosdbAccount#mongo_server_version}.

---

##### `MultipleWriteLocationsEnabled`<sup>Optional</sup> <a name="MultipleWriteLocationsEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.multipleWriteLocationsEnabled"></a>

```csharp
public object MultipleWriteLocationsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#multiple_write_locations_enabled CosmosdbAccount#multiple_write_locations_enabled}.

---

##### `NetworkAclBypassForAzureServices`<sup>Optional</sup> <a name="NetworkAclBypassForAzureServices" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.networkAclBypassForAzureServices"></a>

```csharp
public object NetworkAclBypassForAzureServices { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#network_acl_bypass_for_azure_services CosmosdbAccount#network_acl_bypass_for_azure_services}.

---

##### `NetworkAclBypassIds`<sup>Optional</sup> <a name="NetworkAclBypassIds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.networkAclBypassIds"></a>

```csharp
public string[] NetworkAclBypassIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#network_acl_bypass_ids CosmosdbAccount#network_acl_bypass_ids}.

---

##### `PartitionMergeEnabled`<sup>Optional</sup> <a name="PartitionMergeEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.partitionMergeEnabled"></a>

```csharp
public object PartitionMergeEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#partition_merge_enabled CosmosdbAccount#partition_merge_enabled}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#public_network_access_enabled CosmosdbAccount#public_network_access_enabled}.

---

##### `Restore`<sup>Optional</sup> <a name="Restore" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.restore"></a>

```csharp
public CosmosdbAccountRestore Restore { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore">CosmosdbAccountRestore</a>

restore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#restore CosmosdbAccount#restore}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#tags CosmosdbAccount#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.timeouts"></a>

```csharp
public CosmosdbAccountTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts">CosmosdbAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#timeouts CosmosdbAccount#timeouts}

---

##### `VirtualNetworkRule`<sup>Optional</sup> <a name="VirtualNetworkRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.virtualNetworkRule"></a>

```csharp
public object VirtualNetworkRule { get; set; }
```

- *Type:* object

virtual_network_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#virtual_network_rule CosmosdbAccount#virtual_network_rule}

---

### CosmosdbAccountConsistencyPolicy <a name="CosmosdbAccountConsistencyPolicy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountConsistencyPolicy {
    string ConsistencyLevel,
    double MaxIntervalInSeconds = null,
    double MaxStalenessPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy.property.consistencyLevel">ConsistencyLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#consistency_level CosmosdbAccount#consistency_level}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy.property.maxIntervalInSeconds">MaxIntervalInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#max_interval_in_seconds CosmosdbAccount#max_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy.property.maxStalenessPrefix">MaxStalenessPrefix</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#max_staleness_prefix CosmosdbAccount#max_staleness_prefix}. |

---

##### `ConsistencyLevel`<sup>Required</sup> <a name="ConsistencyLevel" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy.property.consistencyLevel"></a>

```csharp
public string ConsistencyLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#consistency_level CosmosdbAccount#consistency_level}.

---

##### `MaxIntervalInSeconds`<sup>Optional</sup> <a name="MaxIntervalInSeconds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy.property.maxIntervalInSeconds"></a>

```csharp
public double MaxIntervalInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#max_interval_in_seconds CosmosdbAccount#max_interval_in_seconds}.

---

##### `MaxStalenessPrefix`<sup>Optional</sup> <a name="MaxStalenessPrefix" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy.property.maxStalenessPrefix"></a>

```csharp
public double MaxStalenessPrefix { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#max_staleness_prefix CosmosdbAccount#max_staleness_prefix}.

---

### CosmosdbAccountCorsRule <a name="CosmosdbAccountCorsRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountCorsRule {
    string[] AllowedHeaders,
    string[] AllowedMethods,
    string[] AllowedOrigins,
    string[] ExposedHeaders,
    double MaxAgeInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.allowedHeaders">AllowedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#allowed_headers CosmosdbAccount#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#allowed_methods CosmosdbAccount#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#allowed_origins CosmosdbAccount#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.exposedHeaders">ExposedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#exposed_headers CosmosdbAccount#exposed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#max_age_in_seconds CosmosdbAccount#max_age_in_seconds}. |

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.allowedHeaders"></a>

```csharp
public string[] AllowedHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#allowed_headers CosmosdbAccount#allowed_headers}.

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#allowed_methods CosmosdbAccount#allowed_methods}.

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#allowed_origins CosmosdbAccount#allowed_origins}.

---

##### `ExposedHeaders`<sup>Required</sup> <a name="ExposedHeaders" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.exposedHeaders"></a>

```csharp
public string[] ExposedHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#exposed_headers CosmosdbAccount#exposed_headers}.

---

##### `MaxAgeInSeconds`<sup>Optional</sup> <a name="MaxAgeInSeconds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.maxAgeInSeconds"></a>

```csharp
public double MaxAgeInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#max_age_in_seconds CosmosdbAccount#max_age_in_seconds}.

---

### CosmosdbAccountGeoLocation <a name="CosmosdbAccountGeoLocation" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountGeoLocation {
    double FailoverPriority,
    string Location,
    object ZoneRedundant = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation.property.failoverPriority">FailoverPriority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#failover_priority CosmosdbAccount#failover_priority}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#location CosmosdbAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation.property.zoneRedundant">ZoneRedundant</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#zone_redundant CosmosdbAccount#zone_redundant}. |

---

##### `FailoverPriority`<sup>Required</sup> <a name="FailoverPriority" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation.property.failoverPriority"></a>

```csharp
public double FailoverPriority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#failover_priority CosmosdbAccount#failover_priority}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#location CosmosdbAccount#location}.

---

##### `ZoneRedundant`<sup>Optional</sup> <a name="ZoneRedundant" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation.property.zoneRedundant"></a>

```csharp
public object ZoneRedundant { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#zone_redundant CosmosdbAccount#zone_redundant}.

---

### CosmosdbAccountIdentity <a name="CosmosdbAccountIdentity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#type CosmosdbAccount#type}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#identity_ids CosmosdbAccount#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#type CosmosdbAccount#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#identity_ids CosmosdbAccount#identity_ids}.

---

### CosmosdbAccountRestore <a name="CosmosdbAccountRestore" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountRestore {
    string RestoreTimestampInUtc,
    string SourceCosmosdbAccountId,
    object Database = null,
    object GremlinDatabase = null,
    string[] TablesToRestore = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.restoreTimestampInUtc">RestoreTimestampInUtc</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#restore_timestamp_in_utc CosmosdbAccount#restore_timestamp_in_utc}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.sourceCosmosdbAccountId">SourceCosmosdbAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#source_cosmosdb_account_id CosmosdbAccount#source_cosmosdb_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.database">Database</a></code> | <code>object</code> | database block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.gremlinDatabase">GremlinDatabase</a></code> | <code>object</code> | gremlin_database block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.tablesToRestore">TablesToRestore</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#tables_to_restore CosmosdbAccount#tables_to_restore}. |

---

##### `RestoreTimestampInUtc`<sup>Required</sup> <a name="RestoreTimestampInUtc" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.restoreTimestampInUtc"></a>

```csharp
public string RestoreTimestampInUtc { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#restore_timestamp_in_utc CosmosdbAccount#restore_timestamp_in_utc}.

---

##### `SourceCosmosdbAccountId`<sup>Required</sup> <a name="SourceCosmosdbAccountId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.sourceCosmosdbAccountId"></a>

```csharp
public string SourceCosmosdbAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#source_cosmosdb_account_id CosmosdbAccount#source_cosmosdb_account_id}.

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.database"></a>

```csharp
public object Database { get; set; }
```

- *Type:* object

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#database CosmosdbAccount#database}

---

##### `GremlinDatabase`<sup>Optional</sup> <a name="GremlinDatabase" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.gremlinDatabase"></a>

```csharp
public object GremlinDatabase { get; set; }
```

- *Type:* object

gremlin_database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#gremlin_database CosmosdbAccount#gremlin_database}

---

##### `TablesToRestore`<sup>Optional</sup> <a name="TablesToRestore" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.tablesToRestore"></a>

```csharp
public string[] TablesToRestore { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#tables_to_restore CosmosdbAccount#tables_to_restore}.

---

### CosmosdbAccountRestoreDatabase <a name="CosmosdbAccountRestoreDatabase" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountRestoreDatabase {
    string Name,
    string[] CollectionNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase.property.collectionNames">CollectionNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#collection_names CosmosdbAccount#collection_names}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}.

---

##### `CollectionNames`<sup>Optional</sup> <a name="CollectionNames" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase.property.collectionNames"></a>

```csharp
public string[] CollectionNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#collection_names CosmosdbAccount#collection_names}.

---

### CosmosdbAccountRestoreGremlinDatabase <a name="CosmosdbAccountRestoreGremlinDatabase" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountRestoreGremlinDatabase {
    string Name,
    string[] GraphNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabase.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabase.property.graphNames">GraphNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#graph_names CosmosdbAccount#graph_names}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabase.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}.

---

##### `GraphNames`<sup>Optional</sup> <a name="GraphNames" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabase.property.graphNames"></a>

```csharp
public string[] GraphNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#graph_names CosmosdbAccount#graph_names}.

---

### CosmosdbAccountTimeouts <a name="CosmosdbAccountTimeouts" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#create CosmosdbAccount#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#delete CosmosdbAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#read CosmosdbAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#update CosmosdbAccount#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#create CosmosdbAccount#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#delete CosmosdbAccount#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#read CosmosdbAccount#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#update CosmosdbAccount#update}.

---

### CosmosdbAccountVirtualNetworkRule <a name="CosmosdbAccountVirtualNetworkRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountVirtualNetworkRule {
    string Id,
    object IgnoreMissingVnetServiceEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#id CosmosdbAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule.property.ignoreMissingVnetServiceEndpoint">IgnoreMissingVnetServiceEndpoint</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#ignore_missing_vnet_service_endpoint CosmosdbAccount#ignore_missing_vnet_service_endpoint}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#id CosmosdbAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreMissingVnetServiceEndpoint`<sup>Optional</sup> <a name="IgnoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule.property.ignoreMissingVnetServiceEndpoint"></a>

```csharp
public object IgnoreMissingVnetServiceEndpoint { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_account#ignore_missing_vnet_service_endpoint CosmosdbAccount#ignore_missing_vnet_service_endpoint}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbAccountAnalyticalStorageOutputReference <a name="CosmosdbAccountAnalyticalStorageOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountAnalyticalStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.schemaTypeInput">SchemaTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.schemaType">SchemaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage">CosmosdbAccountAnalyticalStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SchemaTypeInput`<sup>Optional</sup> <a name="SchemaTypeInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.schemaTypeInput"></a>

```csharp
public string SchemaTypeInput { get; }
```

- *Type:* string

---

##### `SchemaType`<sup>Required</sup> <a name="SchemaType" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.schemaType"></a>

```csharp
public string SchemaType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.internalValue"></a>

```csharp
public CosmosdbAccountAnalyticalStorage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage">CosmosdbAccountAnalyticalStorage</a>

---


### CosmosdbAccountBackupOutputReference <a name="CosmosdbAccountBackupOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountBackupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resetTier">ResetTier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIntervalInMinutes` <a name="ResetIntervalInMinutes" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resetIntervalInMinutes"></a>

```csharp
private void ResetIntervalInMinutes()
```

##### `ResetRetentionInHours` <a name="ResetRetentionInHours" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resetRetentionInHours"></a>

```csharp
private void ResetRetentionInHours()
```

##### `ResetStorageRedundancy` <a name="ResetStorageRedundancy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resetStorageRedundancy"></a>

```csharp
private void ResetStorageRedundancy()
```

##### `ResetTier` <a name="ResetTier" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resetTier"></a>

```csharp
private void ResetTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.intervalInMinutesInput">IntervalInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.retentionInHoursInput">RetentionInHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.storageRedundancyInput">StorageRedundancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.tierInput">TierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.intervalInMinutes">IntervalInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.retentionInHours">RetentionInHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.storageRedundancy">StorageRedundancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.tier">Tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup">CosmosdbAccountBackup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntervalInMinutesInput`<sup>Optional</sup> <a name="IntervalInMinutesInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.intervalInMinutesInput"></a>

```csharp
public double IntervalInMinutesInput { get; }
```

- *Type:* double

---

##### `RetentionInHoursInput`<sup>Optional</sup> <a name="RetentionInHoursInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.retentionInHoursInput"></a>

```csharp
public double RetentionInHoursInput { get; }
```

- *Type:* double

---

##### `StorageRedundancyInput`<sup>Optional</sup> <a name="StorageRedundancyInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.storageRedundancyInput"></a>

```csharp
public string StorageRedundancyInput { get; }
```

- *Type:* string

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.tierInput"></a>

```csharp
public string TierInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IntervalInMinutes`<sup>Required</sup> <a name="IntervalInMinutes" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.intervalInMinutes"></a>

```csharp
public double IntervalInMinutes { get; }
```

- *Type:* double

---

##### `RetentionInHours`<sup>Required</sup> <a name="RetentionInHours" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.retentionInHours"></a>

```csharp
public double RetentionInHours { get; }
```

- *Type:* double

---

##### `StorageRedundancy`<sup>Required</sup> <a name="StorageRedundancy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.storageRedundancy"></a>

```csharp
public string StorageRedundancy { get; }
```

- *Type:* string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.tier"></a>

```csharp
public string Tier { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.internalValue"></a>

```csharp
public CosmosdbAccountBackup InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup">CosmosdbAccountBackup</a>

---


### CosmosdbAccountCapabilitiesList <a name="CosmosdbAccountCapabilitiesList" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountCapabilitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.get"></a>

```csharp
private CosmosdbAccountCapabilitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CosmosdbAccountCapabilitiesOutputReference <a name="CosmosdbAccountCapabilitiesOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CosmosdbAccountCapacityOutputReference <a name="CosmosdbAccountCapacityOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountCapacityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.totalThroughputLimitInput">TotalThroughputLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.totalThroughputLimit">TotalThroughputLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity">CosmosdbAccountCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TotalThroughputLimitInput`<sup>Optional</sup> <a name="TotalThroughputLimitInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.totalThroughputLimitInput"></a>

```csharp
public double TotalThroughputLimitInput { get; }
```

- *Type:* double

---

##### `TotalThroughputLimit`<sup>Required</sup> <a name="TotalThroughputLimit" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.totalThroughputLimit"></a>

```csharp
public double TotalThroughputLimit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.internalValue"></a>

```csharp
public CosmosdbAccountCapacity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity">CosmosdbAccountCapacity</a>

---


### CosmosdbAccountConsistencyPolicyOutputReference <a name="CosmosdbAccountConsistencyPolicyOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountConsistencyPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxIntervalInSeconds` <a name="ResetMaxIntervalInSeconds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.resetMaxIntervalInSeconds"></a>

```csharp
private void ResetMaxIntervalInSeconds()
```

##### `ResetMaxStalenessPrefix` <a name="ResetMaxStalenessPrefix" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.resetMaxStalenessPrefix"></a>

```csharp
private void ResetMaxStalenessPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.consistencyLevelInput">ConsistencyLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxIntervalInSecondsInput">MaxIntervalInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxStalenessPrefixInput">MaxStalenessPrefixInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.consistencyLevel">ConsistencyLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxIntervalInSeconds">MaxIntervalInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxStalenessPrefix">MaxStalenessPrefix</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy">CosmosdbAccountConsistencyPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConsistencyLevelInput`<sup>Optional</sup> <a name="ConsistencyLevelInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.consistencyLevelInput"></a>

```csharp
public string ConsistencyLevelInput { get; }
```

- *Type:* string

---

##### `MaxIntervalInSecondsInput`<sup>Optional</sup> <a name="MaxIntervalInSecondsInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxIntervalInSecondsInput"></a>

```csharp
public double MaxIntervalInSecondsInput { get; }
```

- *Type:* double

---

##### `MaxStalenessPrefixInput`<sup>Optional</sup> <a name="MaxStalenessPrefixInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxStalenessPrefixInput"></a>

```csharp
public double MaxStalenessPrefixInput { get; }
```

- *Type:* double

---

##### `ConsistencyLevel`<sup>Required</sup> <a name="ConsistencyLevel" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.consistencyLevel"></a>

```csharp
public string ConsistencyLevel { get; }
```

- *Type:* string

---

##### `MaxIntervalInSeconds`<sup>Required</sup> <a name="MaxIntervalInSeconds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxIntervalInSeconds"></a>

```csharp
public double MaxIntervalInSeconds { get; }
```

- *Type:* double

---

##### `MaxStalenessPrefix`<sup>Required</sup> <a name="MaxStalenessPrefix" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxStalenessPrefix"></a>

```csharp
public double MaxStalenessPrefix { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.internalValue"></a>

```csharp
public CosmosdbAccountConsistencyPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy">CosmosdbAccountConsistencyPolicy</a>

---


### CosmosdbAccountCorsRuleOutputReference <a name="CosmosdbAccountCorsRuleOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountCorsRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.resetMaxAgeInSeconds">ResetMaxAgeInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxAgeInSeconds` <a name="ResetMaxAgeInSeconds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.resetMaxAgeInSeconds"></a>

```csharp
private void ResetMaxAgeInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedHeadersInput">AllowedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedMethodsInput">AllowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.exposedHeadersInput">ExposedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.maxAgeInSecondsInput">MaxAgeInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedHeaders">AllowedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.exposedHeaders">ExposedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule">CosmosdbAccountCorsRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedHeadersInput`<sup>Optional</sup> <a name="AllowedHeadersInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedHeadersInput"></a>

```csharp
public string[] AllowedHeadersInput { get; }
```

- *Type:* string[]

---

##### `AllowedMethodsInput`<sup>Optional</sup> <a name="AllowedMethodsInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedMethodsInput"></a>

```csharp
public string[] AllowedMethodsInput { get; }
```

- *Type:* string[]

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedOriginsInput"></a>

```csharp
public string[] AllowedOriginsInput { get; }
```

- *Type:* string[]

---

##### `ExposedHeadersInput`<sup>Optional</sup> <a name="ExposedHeadersInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.exposedHeadersInput"></a>

```csharp
public string[] ExposedHeadersInput { get; }
```

- *Type:* string[]

---

##### `MaxAgeInSecondsInput`<sup>Optional</sup> <a name="MaxAgeInSecondsInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.maxAgeInSecondsInput"></a>

```csharp
public double MaxAgeInSecondsInput { get; }
```

- *Type:* double

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedHeaders"></a>

```csharp
public string[] AllowedHeaders { get; }
```

- *Type:* string[]

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; }
```

- *Type:* string[]

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; }
```

- *Type:* string[]

---

##### `ExposedHeaders`<sup>Required</sup> <a name="ExposedHeaders" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.exposedHeaders"></a>

```csharp
public string[] ExposedHeaders { get; }
```

- *Type:* string[]

---

##### `MaxAgeInSeconds`<sup>Required</sup> <a name="MaxAgeInSeconds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.maxAgeInSeconds"></a>

```csharp
public double MaxAgeInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.internalValue"></a>

```csharp
public CosmosdbAccountCorsRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule">CosmosdbAccountCorsRule</a>

---


### CosmosdbAccountGeoLocationList <a name="CosmosdbAccountGeoLocationList" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountGeoLocationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.get"></a>

```csharp
private CosmosdbAccountGeoLocationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CosmosdbAccountGeoLocationOutputReference <a name="CosmosdbAccountGeoLocationOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountGeoLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetZoneRedundant` <a name="ResetZoneRedundant" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.resetZoneRedundant"></a>

```csharp
private void ResetZoneRedundant()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.failoverPriorityInput">FailoverPriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.zoneRedundantInput">ZoneRedundantInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.failoverPriority">FailoverPriority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.zoneRedundant">ZoneRedundant</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `FailoverPriorityInput`<sup>Optional</sup> <a name="FailoverPriorityInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.failoverPriorityInput"></a>

```csharp
public double FailoverPriorityInput { get; }
```

- *Type:* double

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ZoneRedundantInput`<sup>Optional</sup> <a name="ZoneRedundantInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.zoneRedundantInput"></a>

```csharp
public object ZoneRedundantInput { get; }
```

- *Type:* object

---

##### `FailoverPriority`<sup>Required</sup> <a name="FailoverPriority" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.failoverPriority"></a>

```csharp
public double FailoverPriority { get; }
```

- *Type:* double

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ZoneRedundant`<sup>Required</sup> <a name="ZoneRedundant" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.zoneRedundant"></a>

```csharp
public object ZoneRedundant { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CosmosdbAccountIdentityOutputReference <a name="CosmosdbAccountIdentityOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity">CosmosdbAccountIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.internalValue"></a>

```csharp
public CosmosdbAccountIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity">CosmosdbAccountIdentity</a>

---


### CosmosdbAccountRestoreDatabaseList <a name="CosmosdbAccountRestoreDatabaseList" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountRestoreDatabaseList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.get"></a>

```csharp
private CosmosdbAccountRestoreDatabaseOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CosmosdbAccountRestoreDatabaseOutputReference <a name="CosmosdbAccountRestoreDatabaseOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountRestoreDatabaseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCollectionNames` <a name="ResetCollectionNames" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.resetCollectionNames"></a>

```csharp
private void ResetCollectionNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.collectionNamesInput">CollectionNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.collectionNames">CollectionNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CollectionNamesInput`<sup>Optional</sup> <a name="CollectionNamesInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.collectionNamesInput"></a>

```csharp
public string[] CollectionNamesInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `CollectionNames`<sup>Required</sup> <a name="CollectionNames" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.collectionNames"></a>

```csharp
public string[] CollectionNames { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CosmosdbAccountRestoreGremlinDatabaseList <a name="CosmosdbAccountRestoreGremlinDatabaseList" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountRestoreGremlinDatabaseList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.get"></a>

```csharp
private CosmosdbAccountRestoreGremlinDatabaseOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CosmosdbAccountRestoreGremlinDatabaseOutputReference <a name="CosmosdbAccountRestoreGremlinDatabaseOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountRestoreGremlinDatabaseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.resetGraphNames">ResetGraphNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGraphNames` <a name="ResetGraphNames" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.resetGraphNames"></a>

```csharp
private void ResetGraphNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.property.graphNamesInput">GraphNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.property.graphNames">GraphNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GraphNamesInput`<sup>Optional</sup> <a name="GraphNamesInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.property.graphNamesInput"></a>

```csharp
public string[] GraphNamesInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `GraphNames`<sup>Required</sup> <a name="GraphNames" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.property.graphNames"></a>

```csharp
public string[] GraphNames { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CosmosdbAccountRestoreOutputReference <a name="CosmosdbAccountRestoreOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountRestoreOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.putGremlinDatabase">PutGremlinDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.resetGremlinDatabase">ResetGremlinDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.resetTablesToRestore">ResetTablesToRestore</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatabase` <a name="PutDatabase" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.putDatabase"></a>

```csharp
private void PutDatabase(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.putDatabase.parameter.value"></a>

- *Type:* object

---

##### `PutGremlinDatabase` <a name="PutGremlinDatabase" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.putGremlinDatabase"></a>

```csharp
private void PutGremlinDatabase(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.putGremlinDatabase.parameter.value"></a>

- *Type:* object

---

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetGremlinDatabase` <a name="ResetGremlinDatabase" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.resetGremlinDatabase"></a>

```csharp
private void ResetGremlinDatabase()
```

##### `ResetTablesToRestore` <a name="ResetTablesToRestore" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.resetTablesToRestore"></a>

```csharp
private void ResetTablesToRestore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.database">Database</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList">CosmosdbAccountRestoreDatabaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.gremlinDatabase">GremlinDatabase</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList">CosmosdbAccountRestoreGremlinDatabaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.gremlinDatabaseInput">GremlinDatabaseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.restoreTimestampInUtcInput">RestoreTimestampInUtcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.sourceCosmosdbAccountIdInput">SourceCosmosdbAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.tablesToRestoreInput">TablesToRestoreInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.restoreTimestampInUtc">RestoreTimestampInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.sourceCosmosdbAccountId">SourceCosmosdbAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.tablesToRestore">TablesToRestore</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore">CosmosdbAccountRestore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.database"></a>

```csharp
public CosmosdbAccountRestoreDatabaseList Database { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList">CosmosdbAccountRestoreDatabaseList</a>

---

##### `GremlinDatabase`<sup>Required</sup> <a name="GremlinDatabase" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.gremlinDatabase"></a>

```csharp
public CosmosdbAccountRestoreGremlinDatabaseList GremlinDatabase { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList">CosmosdbAccountRestoreGremlinDatabaseList</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.databaseInput"></a>

```csharp
public object DatabaseInput { get; }
```

- *Type:* object

---

##### `GremlinDatabaseInput`<sup>Optional</sup> <a name="GremlinDatabaseInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.gremlinDatabaseInput"></a>

```csharp
public object GremlinDatabaseInput { get; }
```

- *Type:* object

---

##### `RestoreTimestampInUtcInput`<sup>Optional</sup> <a name="RestoreTimestampInUtcInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.restoreTimestampInUtcInput"></a>

```csharp
public string RestoreTimestampInUtcInput { get; }
```

- *Type:* string

---

##### `SourceCosmosdbAccountIdInput`<sup>Optional</sup> <a name="SourceCosmosdbAccountIdInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.sourceCosmosdbAccountIdInput"></a>

```csharp
public string SourceCosmosdbAccountIdInput { get; }
```

- *Type:* string

---

##### `TablesToRestoreInput`<sup>Optional</sup> <a name="TablesToRestoreInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.tablesToRestoreInput"></a>

```csharp
public string[] TablesToRestoreInput { get; }
```

- *Type:* string[]

---

##### `RestoreTimestampInUtc`<sup>Required</sup> <a name="RestoreTimestampInUtc" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.restoreTimestampInUtc"></a>

```csharp
public string RestoreTimestampInUtc { get; }
```

- *Type:* string

---

##### `SourceCosmosdbAccountId`<sup>Required</sup> <a name="SourceCosmosdbAccountId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.sourceCosmosdbAccountId"></a>

```csharp
public string SourceCosmosdbAccountId { get; }
```

- *Type:* string

---

##### `TablesToRestore`<sup>Required</sup> <a name="TablesToRestore" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.tablesToRestore"></a>

```csharp
public string[] TablesToRestore { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.internalValue"></a>

```csharp
public CosmosdbAccountRestore InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore">CosmosdbAccountRestore</a>

---


### CosmosdbAccountTimeoutsOutputReference <a name="CosmosdbAccountTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CosmosdbAccountVirtualNetworkRuleList <a name="CosmosdbAccountVirtualNetworkRuleList" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountVirtualNetworkRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.get"></a>

```csharp
private CosmosdbAccountVirtualNetworkRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CosmosdbAccountVirtualNetworkRuleOutputReference <a name="CosmosdbAccountVirtualNetworkRuleOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbAccountVirtualNetworkRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIgnoreMissingVnetServiceEndpoint` <a name="ResetIgnoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.resetIgnoreMissingVnetServiceEndpoint"></a>

```csharp
private void ResetIgnoreMissingVnetServiceEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.ignoreMissingVnetServiceEndpointInput">IgnoreMissingVnetServiceEndpointInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.ignoreMissingVnetServiceEndpoint">IgnoreMissingVnetServiceEndpoint</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreMissingVnetServiceEndpointInput`<sup>Optional</sup> <a name="IgnoreMissingVnetServiceEndpointInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.ignoreMissingVnetServiceEndpointInput"></a>

```csharp
public object IgnoreMissingVnetServiceEndpointInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreMissingVnetServiceEndpoint`<sup>Required</sup> <a name="IgnoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.ignoreMissingVnetServiceEndpoint"></a>

```csharp
public object IgnoreMissingVnetServiceEndpoint { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



