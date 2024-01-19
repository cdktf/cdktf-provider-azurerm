# `storageAccount` Submodule <a name="`storageAccount` Submodule" id="@cdktf/provider-azurerm.storageAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageAccount <a name="StorageAccount" id="@cdktf/provider-azurerm.storageAccount.StorageAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account azurerm_storage_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccount(Construct Scope, string Id, StorageAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig">StorageAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig">StorageAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAzureFilesAuthentication` <a name="PutAzureFilesAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putAzureFilesAuthentication"></a>

```csharp
private void PutAzureFilesAuthentication(StorageAccountAzureFilesAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putAzureFilesAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a>

---

##### `PutBlobProperties` <a name="PutBlobProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putBlobProperties"></a>

```csharp
private void PutBlobProperties(StorageAccountBlobProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putBlobProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a>

---

##### `PutCustomDomain` <a name="PutCustomDomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomDomain"></a>

```csharp
private void PutCustomDomain(StorageAccountCustomDomain Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomDomain.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a>

---

##### `PutCustomerManagedKey` <a name="PutCustomerManagedKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomerManagedKey"></a>

```csharp
private void PutCustomerManagedKey(StorageAccountCustomerManagedKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomerManagedKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putIdentity"></a>

```csharp
private void PutIdentity(StorageAccountIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a>

---

##### `PutImmutabilityPolicy` <a name="PutImmutabilityPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putImmutabilityPolicy"></a>

```csharp
private void PutImmutabilityPolicy(StorageAccountImmutabilityPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putImmutabilityPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a>

---

##### `PutNetworkRules` <a name="PutNetworkRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putNetworkRules"></a>

```csharp
private void PutNetworkRules(StorageAccountNetworkRules Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putNetworkRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a>

---

##### `PutQueueProperties` <a name="PutQueueProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putQueueProperties"></a>

```csharp
private void PutQueueProperties(StorageAccountQueueProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putQueueProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a>

---

##### `PutRouting` <a name="PutRouting" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putRouting"></a>

```csharp
private void PutRouting(StorageAccountRouting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a>

---

##### `PutSasPolicy` <a name="PutSasPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putSasPolicy"></a>

```csharp
private void PutSasPolicy(StorageAccountSasPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putSasPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a>

---

##### `PutShareProperties` <a name="PutShareProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putShareProperties"></a>

```csharp
private void PutShareProperties(StorageAccountShareProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putShareProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a>

---

##### `PutStaticWebsite` <a name="PutStaticWebsite" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putStaticWebsite"></a>

```csharp
private void PutStaticWebsite(StorageAccountStaticWebsite Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putStaticWebsite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putTimeouts"></a>

```csharp
private void PutTimeouts(StorageAccountTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a>

---

##### `ResetAccessTier` <a name="ResetAccessTier" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAccessTier"></a>

```csharp
private void ResetAccessTier()
```

##### `ResetAccountKind` <a name="ResetAccountKind" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAccountKind"></a>

```csharp
private void ResetAccountKind()
```

##### `ResetAllowedCopyScope` <a name="ResetAllowedCopyScope" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAllowedCopyScope"></a>

```csharp
private void ResetAllowedCopyScope()
```

##### `ResetAllowNestedItemsToBePublic` <a name="ResetAllowNestedItemsToBePublic" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAllowNestedItemsToBePublic"></a>

```csharp
private void ResetAllowNestedItemsToBePublic()
```

##### `ResetAzureFilesAuthentication` <a name="ResetAzureFilesAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAzureFilesAuthentication"></a>

```csharp
private void ResetAzureFilesAuthentication()
```

##### `ResetBlobProperties` <a name="ResetBlobProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetBlobProperties"></a>

```csharp
private void ResetBlobProperties()
```

##### `ResetCrossTenantReplicationEnabled` <a name="ResetCrossTenantReplicationEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetCrossTenantReplicationEnabled"></a>

```csharp
private void ResetCrossTenantReplicationEnabled()
```

##### `ResetCustomDomain` <a name="ResetCustomDomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetCustomDomain"></a>

```csharp
private void ResetCustomDomain()
```

##### `ResetCustomerManagedKey` <a name="ResetCustomerManagedKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetCustomerManagedKey"></a>

```csharp
private void ResetCustomerManagedKey()
```

##### `ResetDefaultToOauthAuthentication` <a name="ResetDefaultToOauthAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetDefaultToOauthAuthentication"></a>

```csharp
private void ResetDefaultToOauthAuthentication()
```

##### `ResetEdgeZone` <a name="ResetEdgeZone" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetEdgeZone"></a>

```csharp
private void ResetEdgeZone()
```

##### `ResetEnableHttpsTrafficOnly` <a name="ResetEnableHttpsTrafficOnly" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetEnableHttpsTrafficOnly"></a>

```csharp
private void ResetEnableHttpsTrafficOnly()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetImmutabilityPolicy` <a name="ResetImmutabilityPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetImmutabilityPolicy"></a>

```csharp
private void ResetImmutabilityPolicy()
```

##### `ResetInfrastructureEncryptionEnabled` <a name="ResetInfrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetInfrastructureEncryptionEnabled"></a>

```csharp
private void ResetInfrastructureEncryptionEnabled()
```

##### `ResetIsHnsEnabled` <a name="ResetIsHnsEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetIsHnsEnabled"></a>

```csharp
private void ResetIsHnsEnabled()
```

##### `ResetLargeFileShareEnabled` <a name="ResetLargeFileShareEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetLargeFileShareEnabled"></a>

```csharp
private void ResetLargeFileShareEnabled()
```

##### `ResetMinTlsVersion` <a name="ResetMinTlsVersion" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetMinTlsVersion"></a>

```csharp
private void ResetMinTlsVersion()
```

##### `ResetNetworkRules` <a name="ResetNetworkRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetNetworkRules"></a>

```csharp
private void ResetNetworkRules()
```

##### `ResetNfsv3Enabled` <a name="ResetNfsv3Enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetNfsv3Enabled"></a>

```csharp
private void ResetNfsv3Enabled()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetPublicNetworkAccessEnabled"></a>

```csharp
private void ResetPublicNetworkAccessEnabled()
```

##### `ResetQueueEncryptionKeyType` <a name="ResetQueueEncryptionKeyType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetQueueEncryptionKeyType"></a>

```csharp
private void ResetQueueEncryptionKeyType()
```

##### `ResetQueueProperties` <a name="ResetQueueProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetQueueProperties"></a>

```csharp
private void ResetQueueProperties()
```

##### `ResetRouting` <a name="ResetRouting" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetRouting"></a>

```csharp
private void ResetRouting()
```

##### `ResetSasPolicy` <a name="ResetSasPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetSasPolicy"></a>

```csharp
private void ResetSasPolicy()
```

##### `ResetSftpEnabled` <a name="ResetSftpEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetSftpEnabled"></a>

```csharp
private void ResetSftpEnabled()
```

##### `ResetSharedAccessKeyEnabled` <a name="ResetSharedAccessKeyEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetSharedAccessKeyEnabled"></a>

```csharp
private void ResetSharedAccessKeyEnabled()
```

##### `ResetShareProperties` <a name="ResetShareProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetShareProperties"></a>

```csharp
private void ResetShareProperties()
```

##### `ResetStaticWebsite` <a name="ResetStaticWebsite" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetStaticWebsite"></a>

```csharp
private void ResetStaticWebsite()
```

##### `ResetTableEncryptionKeyType` <a name="ResetTableEncryptionKeyType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetTableEncryptionKeyType"></a>

```csharp
private void ResetTableEncryptionKeyType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StorageAccount resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StorageAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StorageAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StorageAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StorageAccount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StorageAccount resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageAccount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StorageAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.azureFilesAuthentication">AzureFilesAuthentication</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference">StorageAccountAzureFilesAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.blobProperties">BlobProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference">StorageAccountBlobPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customDomain">CustomDomain</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference">StorageAccountCustomDomainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customerManagedKey">CustomerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference">StorageAccountCustomerManagedKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference">StorageAccountIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.immutabilityPolicy">ImmutabilityPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference">StorageAccountImmutabilityPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.networkRules">NetworkRules</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference">StorageAccountNetworkRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryAccessKey">PrimaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobConnectionString">PrimaryBlobConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobEndpoint">PrimaryBlobEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobHost">PrimaryBlobHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobInternetEndpoint">PrimaryBlobInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobInternetHost">PrimaryBlobInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobMicrosoftEndpoint">PrimaryBlobMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobMicrosoftHost">PrimaryBlobMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryConnectionString">PrimaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsEndpoint">PrimaryDfsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsHost">PrimaryDfsHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsInternetEndpoint">PrimaryDfsInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsInternetHost">PrimaryDfsInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsMicrosoftEndpoint">PrimaryDfsMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsMicrosoftHost">PrimaryDfsMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileEndpoint">PrimaryFileEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileHost">PrimaryFileHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileInternetEndpoint">PrimaryFileInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileInternetHost">PrimaryFileInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileMicrosoftEndpoint">PrimaryFileMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileMicrosoftHost">PrimaryFileMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryLocation">PrimaryLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueEndpoint">PrimaryQueueEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueHost">PrimaryQueueHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueMicrosoftEndpoint">PrimaryQueueMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueMicrosoftHost">PrimaryQueueMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableEndpoint">PrimaryTableEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableHost">PrimaryTableHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableMicrosoftEndpoint">PrimaryTableMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableMicrosoftHost">PrimaryTableMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebEndpoint">PrimaryWebEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebHost">PrimaryWebHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebInternetEndpoint">PrimaryWebInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebInternetHost">PrimaryWebInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebMicrosoftEndpoint">PrimaryWebMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebMicrosoftHost">PrimaryWebMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueProperties">QueueProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference">StorageAccountQueuePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.routing">Routing</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference">StorageAccountRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sasPolicy">SasPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference">StorageAccountSasPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryAccessKey">SecondaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobConnectionString">SecondaryBlobConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobEndpoint">SecondaryBlobEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobHost">SecondaryBlobHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobInternetEndpoint">SecondaryBlobInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobInternetHost">SecondaryBlobInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobMicrosoftEndpoint">SecondaryBlobMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobMicrosoftHost">SecondaryBlobMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryConnectionString">SecondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsEndpoint">SecondaryDfsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsHost">SecondaryDfsHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsInternetEndpoint">SecondaryDfsInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsInternetHost">SecondaryDfsInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsMicrosoftEndpoint">SecondaryDfsMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsMicrosoftHost">SecondaryDfsMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileEndpoint">SecondaryFileEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileHost">SecondaryFileHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileInternetEndpoint">SecondaryFileInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileInternetHost">SecondaryFileInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileMicrosoftEndpoint">SecondaryFileMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileMicrosoftHost">SecondaryFileMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryLocation">SecondaryLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueEndpoint">SecondaryQueueEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueHost">SecondaryQueueHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueMicrosoftEndpoint">SecondaryQueueMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueMicrosoftHost">SecondaryQueueMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableEndpoint">SecondaryTableEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableHost">SecondaryTableHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableMicrosoftEndpoint">SecondaryTableMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableMicrosoftHost">SecondaryTableMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebEndpoint">SecondaryWebEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebHost">SecondaryWebHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebInternetEndpoint">SecondaryWebInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebInternetHost">SecondaryWebInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebMicrosoftEndpoint">SecondaryWebMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebMicrosoftHost">SecondaryWebMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.shareProperties">ShareProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference">StorageAccountSharePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.staticWebsite">StaticWebsite</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference">StorageAccountStaticWebsiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference">StorageAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accessTierInput">AccessTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountKindInput">AccountKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountReplicationTypeInput">AccountReplicationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountTierInput">AccountTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowedCopyScopeInput">AllowedCopyScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowNestedItemsToBePublicInput">AllowNestedItemsToBePublicInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.azureFilesAuthenticationInput">AzureFilesAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.blobPropertiesInput">BlobPropertiesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.crossTenantReplicationEnabledInput">CrossTenantReplicationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customDomainInput">CustomDomainInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customerManagedKeyInput">CustomerManagedKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.defaultToOauthAuthenticationInput">DefaultToOauthAuthenticationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.edgeZoneInput">EdgeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.enableHttpsTrafficOnlyInput">EnableHttpsTrafficOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.immutabilityPolicyInput">ImmutabilityPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.infrastructureEncryptionEnabledInput">InfrastructureEncryptionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.isHnsEnabledInput">IsHnsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.largeFileShareEnabledInput">LargeFileShareEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.minTlsVersionInput">MinTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.networkRulesInput">NetworkRulesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nfsv3EnabledInput">Nfsv3EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueEncryptionKeyTypeInput">QueueEncryptionKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queuePropertiesInput">QueuePropertiesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.routingInput">RoutingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sasPolicyInput">SasPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sftpEnabledInput">SftpEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharedAccessKeyEnabledInput">SharedAccessKeyEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharePropertiesInput">SharePropertiesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.staticWebsiteInput">StaticWebsiteInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tableEncryptionKeyTypeInput">TableEncryptionKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accessTier">AccessTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountKind">AccountKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountReplicationType">AccountReplicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountTier">AccountTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowedCopyScope">AllowedCopyScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowNestedItemsToBePublic">AllowNestedItemsToBePublic</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.crossTenantReplicationEnabled">CrossTenantReplicationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.defaultToOauthAuthentication">DefaultToOauthAuthentication</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.edgeZone">EdgeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.enableHttpsTrafficOnly">EnableHttpsTrafficOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.infrastructureEncryptionEnabled">InfrastructureEncryptionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.isHnsEnabled">IsHnsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.largeFileShareEnabled">LargeFileShareEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.minTlsVersion">MinTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nfsv3Enabled">Nfsv3Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueEncryptionKeyType">QueueEncryptionKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sftpEnabled">SftpEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharedAccessKeyEnabled">SharedAccessKeyEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tableEncryptionKeyType">TableEncryptionKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AzureFilesAuthentication`<sup>Required</sup> <a name="AzureFilesAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.azureFilesAuthentication"></a>

```csharp
public StorageAccountAzureFilesAuthenticationOutputReference AzureFilesAuthentication { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference">StorageAccountAzureFilesAuthenticationOutputReference</a>

---

##### `BlobProperties`<sup>Required</sup> <a name="BlobProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.blobProperties"></a>

```csharp
public StorageAccountBlobPropertiesOutputReference BlobProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference">StorageAccountBlobPropertiesOutputReference</a>

---

##### `CustomDomain`<sup>Required</sup> <a name="CustomDomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customDomain"></a>

```csharp
public StorageAccountCustomDomainOutputReference CustomDomain { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference">StorageAccountCustomDomainOutputReference</a>

---

##### `CustomerManagedKey`<sup>Required</sup> <a name="CustomerManagedKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customerManagedKey"></a>

```csharp
public StorageAccountCustomerManagedKeyOutputReference CustomerManagedKey { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference">StorageAccountCustomerManagedKeyOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.identity"></a>

```csharp
public StorageAccountIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference">StorageAccountIdentityOutputReference</a>

---

##### `ImmutabilityPolicy`<sup>Required</sup> <a name="ImmutabilityPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.immutabilityPolicy"></a>

```csharp
public StorageAccountImmutabilityPolicyOutputReference ImmutabilityPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference">StorageAccountImmutabilityPolicyOutputReference</a>

---

##### `NetworkRules`<sup>Required</sup> <a name="NetworkRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.networkRules"></a>

```csharp
public StorageAccountNetworkRulesOutputReference NetworkRules { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference">StorageAccountNetworkRulesOutputReference</a>

---

##### `PrimaryAccessKey`<sup>Required</sup> <a name="PrimaryAccessKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryAccessKey"></a>

```csharp
public string PrimaryAccessKey { get; }
```

- *Type:* string

---

##### `PrimaryBlobConnectionString`<sup>Required</sup> <a name="PrimaryBlobConnectionString" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobConnectionString"></a>

```csharp
public string PrimaryBlobConnectionString { get; }
```

- *Type:* string

---

##### `PrimaryBlobEndpoint`<sup>Required</sup> <a name="PrimaryBlobEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobEndpoint"></a>

```csharp
public string PrimaryBlobEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryBlobHost`<sup>Required</sup> <a name="PrimaryBlobHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobHost"></a>

```csharp
public string PrimaryBlobHost { get; }
```

- *Type:* string

---

##### `PrimaryBlobInternetEndpoint`<sup>Required</sup> <a name="PrimaryBlobInternetEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobInternetEndpoint"></a>

```csharp
public string PrimaryBlobInternetEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryBlobInternetHost`<sup>Required</sup> <a name="PrimaryBlobInternetHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobInternetHost"></a>

```csharp
public string PrimaryBlobInternetHost { get; }
```

- *Type:* string

---

##### `PrimaryBlobMicrosoftEndpoint`<sup>Required</sup> <a name="PrimaryBlobMicrosoftEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobMicrosoftEndpoint"></a>

```csharp
public string PrimaryBlobMicrosoftEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryBlobMicrosoftHost`<sup>Required</sup> <a name="PrimaryBlobMicrosoftHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobMicrosoftHost"></a>

```csharp
public string PrimaryBlobMicrosoftHost { get; }
```

- *Type:* string

---

##### `PrimaryConnectionString`<sup>Required</sup> <a name="PrimaryConnectionString" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryConnectionString"></a>

```csharp
public string PrimaryConnectionString { get; }
```

- *Type:* string

---

##### `PrimaryDfsEndpoint`<sup>Required</sup> <a name="PrimaryDfsEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsEndpoint"></a>

```csharp
public string PrimaryDfsEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryDfsHost`<sup>Required</sup> <a name="PrimaryDfsHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsHost"></a>

```csharp
public string PrimaryDfsHost { get; }
```

- *Type:* string

---

##### `PrimaryDfsInternetEndpoint`<sup>Required</sup> <a name="PrimaryDfsInternetEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsInternetEndpoint"></a>

```csharp
public string PrimaryDfsInternetEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryDfsInternetHost`<sup>Required</sup> <a name="PrimaryDfsInternetHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsInternetHost"></a>

```csharp
public string PrimaryDfsInternetHost { get; }
```

- *Type:* string

---

##### `PrimaryDfsMicrosoftEndpoint`<sup>Required</sup> <a name="PrimaryDfsMicrosoftEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsMicrosoftEndpoint"></a>

```csharp
public string PrimaryDfsMicrosoftEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryDfsMicrosoftHost`<sup>Required</sup> <a name="PrimaryDfsMicrosoftHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsMicrosoftHost"></a>

```csharp
public string PrimaryDfsMicrosoftHost { get; }
```

- *Type:* string

---

##### `PrimaryFileEndpoint`<sup>Required</sup> <a name="PrimaryFileEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileEndpoint"></a>

```csharp
public string PrimaryFileEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryFileHost`<sup>Required</sup> <a name="PrimaryFileHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileHost"></a>

```csharp
public string PrimaryFileHost { get; }
```

- *Type:* string

---

##### `PrimaryFileInternetEndpoint`<sup>Required</sup> <a name="PrimaryFileInternetEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileInternetEndpoint"></a>

```csharp
public string PrimaryFileInternetEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryFileInternetHost`<sup>Required</sup> <a name="PrimaryFileInternetHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileInternetHost"></a>

```csharp
public string PrimaryFileInternetHost { get; }
```

- *Type:* string

---

##### `PrimaryFileMicrosoftEndpoint`<sup>Required</sup> <a name="PrimaryFileMicrosoftEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileMicrosoftEndpoint"></a>

```csharp
public string PrimaryFileMicrosoftEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryFileMicrosoftHost`<sup>Required</sup> <a name="PrimaryFileMicrosoftHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileMicrosoftHost"></a>

```csharp
public string PrimaryFileMicrosoftHost { get; }
```

- *Type:* string

---

##### `PrimaryLocation`<sup>Required</sup> <a name="PrimaryLocation" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryLocation"></a>

```csharp
public string PrimaryLocation { get; }
```

- *Type:* string

---

##### `PrimaryQueueEndpoint`<sup>Required</sup> <a name="PrimaryQueueEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueEndpoint"></a>

```csharp
public string PrimaryQueueEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryQueueHost`<sup>Required</sup> <a name="PrimaryQueueHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueHost"></a>

```csharp
public string PrimaryQueueHost { get; }
```

- *Type:* string

---

##### `PrimaryQueueMicrosoftEndpoint`<sup>Required</sup> <a name="PrimaryQueueMicrosoftEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueMicrosoftEndpoint"></a>

```csharp
public string PrimaryQueueMicrosoftEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryQueueMicrosoftHost`<sup>Required</sup> <a name="PrimaryQueueMicrosoftHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueMicrosoftHost"></a>

```csharp
public string PrimaryQueueMicrosoftHost { get; }
```

- *Type:* string

---

##### `PrimaryTableEndpoint`<sup>Required</sup> <a name="PrimaryTableEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableEndpoint"></a>

```csharp
public string PrimaryTableEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryTableHost`<sup>Required</sup> <a name="PrimaryTableHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableHost"></a>

```csharp
public string PrimaryTableHost { get; }
```

- *Type:* string

---

##### `PrimaryTableMicrosoftEndpoint`<sup>Required</sup> <a name="PrimaryTableMicrosoftEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableMicrosoftEndpoint"></a>

```csharp
public string PrimaryTableMicrosoftEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryTableMicrosoftHost`<sup>Required</sup> <a name="PrimaryTableMicrosoftHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableMicrosoftHost"></a>

```csharp
public string PrimaryTableMicrosoftHost { get; }
```

- *Type:* string

---

##### `PrimaryWebEndpoint`<sup>Required</sup> <a name="PrimaryWebEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebEndpoint"></a>

```csharp
public string PrimaryWebEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryWebHost`<sup>Required</sup> <a name="PrimaryWebHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebHost"></a>

```csharp
public string PrimaryWebHost { get; }
```

- *Type:* string

---

##### `PrimaryWebInternetEndpoint`<sup>Required</sup> <a name="PrimaryWebInternetEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebInternetEndpoint"></a>

```csharp
public string PrimaryWebInternetEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryWebInternetHost`<sup>Required</sup> <a name="PrimaryWebInternetHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebInternetHost"></a>

```csharp
public string PrimaryWebInternetHost { get; }
```

- *Type:* string

---

##### `PrimaryWebMicrosoftEndpoint`<sup>Required</sup> <a name="PrimaryWebMicrosoftEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebMicrosoftEndpoint"></a>

```csharp
public string PrimaryWebMicrosoftEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryWebMicrosoftHost`<sup>Required</sup> <a name="PrimaryWebMicrosoftHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebMicrosoftHost"></a>

```csharp
public string PrimaryWebMicrosoftHost { get; }
```

- *Type:* string

---

##### `QueueProperties`<sup>Required</sup> <a name="QueueProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueProperties"></a>

```csharp
public StorageAccountQueuePropertiesOutputReference QueueProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference">StorageAccountQueuePropertiesOutputReference</a>

---

##### `Routing`<sup>Required</sup> <a name="Routing" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.routing"></a>

```csharp
public StorageAccountRoutingOutputReference Routing { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference">StorageAccountRoutingOutputReference</a>

---

##### `SasPolicy`<sup>Required</sup> <a name="SasPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sasPolicy"></a>

```csharp
public StorageAccountSasPolicyOutputReference SasPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference">StorageAccountSasPolicyOutputReference</a>

---

##### `SecondaryAccessKey`<sup>Required</sup> <a name="SecondaryAccessKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryAccessKey"></a>

```csharp
public string SecondaryAccessKey { get; }
```

- *Type:* string

---

##### `SecondaryBlobConnectionString`<sup>Required</sup> <a name="SecondaryBlobConnectionString" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobConnectionString"></a>

```csharp
public string SecondaryBlobConnectionString { get; }
```

- *Type:* string

---

##### `SecondaryBlobEndpoint`<sup>Required</sup> <a name="SecondaryBlobEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobEndpoint"></a>

```csharp
public string SecondaryBlobEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryBlobHost`<sup>Required</sup> <a name="SecondaryBlobHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobHost"></a>

```csharp
public string SecondaryBlobHost { get; }
```

- *Type:* string

---

##### `SecondaryBlobInternetEndpoint`<sup>Required</sup> <a name="SecondaryBlobInternetEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobInternetEndpoint"></a>

```csharp
public string SecondaryBlobInternetEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryBlobInternetHost`<sup>Required</sup> <a name="SecondaryBlobInternetHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobInternetHost"></a>

```csharp
public string SecondaryBlobInternetHost { get; }
```

- *Type:* string

---

##### `SecondaryBlobMicrosoftEndpoint`<sup>Required</sup> <a name="SecondaryBlobMicrosoftEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobMicrosoftEndpoint"></a>

```csharp
public string SecondaryBlobMicrosoftEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryBlobMicrosoftHost`<sup>Required</sup> <a name="SecondaryBlobMicrosoftHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobMicrosoftHost"></a>

```csharp
public string SecondaryBlobMicrosoftHost { get; }
```

- *Type:* string

---

##### `SecondaryConnectionString`<sup>Required</sup> <a name="SecondaryConnectionString" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryConnectionString"></a>

```csharp
public string SecondaryConnectionString { get; }
```

- *Type:* string

---

##### `SecondaryDfsEndpoint`<sup>Required</sup> <a name="SecondaryDfsEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsEndpoint"></a>

```csharp
public string SecondaryDfsEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryDfsHost`<sup>Required</sup> <a name="SecondaryDfsHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsHost"></a>

```csharp
public string SecondaryDfsHost { get; }
```

- *Type:* string

---

##### `SecondaryDfsInternetEndpoint`<sup>Required</sup> <a name="SecondaryDfsInternetEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsInternetEndpoint"></a>

```csharp
public string SecondaryDfsInternetEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryDfsInternetHost`<sup>Required</sup> <a name="SecondaryDfsInternetHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsInternetHost"></a>

```csharp
public string SecondaryDfsInternetHost { get; }
```

- *Type:* string

---

##### `SecondaryDfsMicrosoftEndpoint`<sup>Required</sup> <a name="SecondaryDfsMicrosoftEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsMicrosoftEndpoint"></a>

```csharp
public string SecondaryDfsMicrosoftEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryDfsMicrosoftHost`<sup>Required</sup> <a name="SecondaryDfsMicrosoftHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsMicrosoftHost"></a>

```csharp
public string SecondaryDfsMicrosoftHost { get; }
```

- *Type:* string

---

##### `SecondaryFileEndpoint`<sup>Required</sup> <a name="SecondaryFileEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileEndpoint"></a>

```csharp
public string SecondaryFileEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryFileHost`<sup>Required</sup> <a name="SecondaryFileHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileHost"></a>

```csharp
public string SecondaryFileHost { get; }
```

- *Type:* string

---

##### `SecondaryFileInternetEndpoint`<sup>Required</sup> <a name="SecondaryFileInternetEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileInternetEndpoint"></a>

```csharp
public string SecondaryFileInternetEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryFileInternetHost`<sup>Required</sup> <a name="SecondaryFileInternetHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileInternetHost"></a>

```csharp
public string SecondaryFileInternetHost { get; }
```

- *Type:* string

---

##### `SecondaryFileMicrosoftEndpoint`<sup>Required</sup> <a name="SecondaryFileMicrosoftEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileMicrosoftEndpoint"></a>

```csharp
public string SecondaryFileMicrosoftEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryFileMicrosoftHost`<sup>Required</sup> <a name="SecondaryFileMicrosoftHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileMicrosoftHost"></a>

```csharp
public string SecondaryFileMicrosoftHost { get; }
```

- *Type:* string

---

##### `SecondaryLocation`<sup>Required</sup> <a name="SecondaryLocation" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryLocation"></a>

```csharp
public string SecondaryLocation { get; }
```

- *Type:* string

---

##### `SecondaryQueueEndpoint`<sup>Required</sup> <a name="SecondaryQueueEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueEndpoint"></a>

```csharp
public string SecondaryQueueEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryQueueHost`<sup>Required</sup> <a name="SecondaryQueueHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueHost"></a>

```csharp
public string SecondaryQueueHost { get; }
```

- *Type:* string

---

##### `SecondaryQueueMicrosoftEndpoint`<sup>Required</sup> <a name="SecondaryQueueMicrosoftEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueMicrosoftEndpoint"></a>

```csharp
public string SecondaryQueueMicrosoftEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryQueueMicrosoftHost`<sup>Required</sup> <a name="SecondaryQueueMicrosoftHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueMicrosoftHost"></a>

```csharp
public string SecondaryQueueMicrosoftHost { get; }
```

- *Type:* string

---

##### `SecondaryTableEndpoint`<sup>Required</sup> <a name="SecondaryTableEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableEndpoint"></a>

```csharp
public string SecondaryTableEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryTableHost`<sup>Required</sup> <a name="SecondaryTableHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableHost"></a>

```csharp
public string SecondaryTableHost { get; }
```

- *Type:* string

---

##### `SecondaryTableMicrosoftEndpoint`<sup>Required</sup> <a name="SecondaryTableMicrosoftEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableMicrosoftEndpoint"></a>

```csharp
public string SecondaryTableMicrosoftEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryTableMicrosoftHost`<sup>Required</sup> <a name="SecondaryTableMicrosoftHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableMicrosoftHost"></a>

```csharp
public string SecondaryTableMicrosoftHost { get; }
```

- *Type:* string

---

##### `SecondaryWebEndpoint`<sup>Required</sup> <a name="SecondaryWebEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebEndpoint"></a>

```csharp
public string SecondaryWebEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryWebHost`<sup>Required</sup> <a name="SecondaryWebHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebHost"></a>

```csharp
public string SecondaryWebHost { get; }
```

- *Type:* string

---

##### `SecondaryWebInternetEndpoint`<sup>Required</sup> <a name="SecondaryWebInternetEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebInternetEndpoint"></a>

```csharp
public string SecondaryWebInternetEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryWebInternetHost`<sup>Required</sup> <a name="SecondaryWebInternetHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebInternetHost"></a>

```csharp
public string SecondaryWebInternetHost { get; }
```

- *Type:* string

---

##### `SecondaryWebMicrosoftEndpoint`<sup>Required</sup> <a name="SecondaryWebMicrosoftEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebMicrosoftEndpoint"></a>

```csharp
public string SecondaryWebMicrosoftEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryWebMicrosoftHost`<sup>Required</sup> <a name="SecondaryWebMicrosoftHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebMicrosoftHost"></a>

```csharp
public string SecondaryWebMicrosoftHost { get; }
```

- *Type:* string

---

##### `ShareProperties`<sup>Required</sup> <a name="ShareProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.shareProperties"></a>

```csharp
public StorageAccountSharePropertiesOutputReference ShareProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference">StorageAccountSharePropertiesOutputReference</a>

---

##### `StaticWebsite`<sup>Required</sup> <a name="StaticWebsite" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.staticWebsite"></a>

```csharp
public StorageAccountStaticWebsiteOutputReference StaticWebsite { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference">StorageAccountStaticWebsiteOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.timeouts"></a>

```csharp
public StorageAccountTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference">StorageAccountTimeoutsOutputReference</a>

---

##### `AccessTierInput`<sup>Optional</sup> <a name="AccessTierInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accessTierInput"></a>

```csharp
public string AccessTierInput { get; }
```

- *Type:* string

---

##### `AccountKindInput`<sup>Optional</sup> <a name="AccountKindInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountKindInput"></a>

```csharp
public string AccountKindInput { get; }
```

- *Type:* string

---

##### `AccountReplicationTypeInput`<sup>Optional</sup> <a name="AccountReplicationTypeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountReplicationTypeInput"></a>

```csharp
public string AccountReplicationTypeInput { get; }
```

- *Type:* string

---

##### `AccountTierInput`<sup>Optional</sup> <a name="AccountTierInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountTierInput"></a>

```csharp
public string AccountTierInput { get; }
```

- *Type:* string

---

##### `AllowedCopyScopeInput`<sup>Optional</sup> <a name="AllowedCopyScopeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowedCopyScopeInput"></a>

```csharp
public string AllowedCopyScopeInput { get; }
```

- *Type:* string

---

##### `AllowNestedItemsToBePublicInput`<sup>Optional</sup> <a name="AllowNestedItemsToBePublicInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowNestedItemsToBePublicInput"></a>

```csharp
public object AllowNestedItemsToBePublicInput { get; }
```

- *Type:* object

---

##### `AzureFilesAuthenticationInput`<sup>Optional</sup> <a name="AzureFilesAuthenticationInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.azureFilesAuthenticationInput"></a>

```csharp
public StorageAccountAzureFilesAuthentication AzureFilesAuthenticationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a>

---

##### `BlobPropertiesInput`<sup>Optional</sup> <a name="BlobPropertiesInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.blobPropertiesInput"></a>

```csharp
public StorageAccountBlobProperties BlobPropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a>

---

##### `CrossTenantReplicationEnabledInput`<sup>Optional</sup> <a name="CrossTenantReplicationEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.crossTenantReplicationEnabledInput"></a>

```csharp
public object CrossTenantReplicationEnabledInput { get; }
```

- *Type:* object

---

##### `CustomDomainInput`<sup>Optional</sup> <a name="CustomDomainInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customDomainInput"></a>

```csharp
public StorageAccountCustomDomain CustomDomainInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a>

---

##### `CustomerManagedKeyInput`<sup>Optional</sup> <a name="CustomerManagedKeyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customerManagedKeyInput"></a>

```csharp
public StorageAccountCustomerManagedKey CustomerManagedKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a>

---

##### `DefaultToOauthAuthenticationInput`<sup>Optional</sup> <a name="DefaultToOauthAuthenticationInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.defaultToOauthAuthenticationInput"></a>

```csharp
public object DefaultToOauthAuthenticationInput { get; }
```

- *Type:* object

---

##### `EdgeZoneInput`<sup>Optional</sup> <a name="EdgeZoneInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.edgeZoneInput"></a>

```csharp
public string EdgeZoneInput { get; }
```

- *Type:* string

---

##### `EnableHttpsTrafficOnlyInput`<sup>Optional</sup> <a name="EnableHttpsTrafficOnlyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.enableHttpsTrafficOnlyInput"></a>

```csharp
public object EnableHttpsTrafficOnlyInput { get; }
```

- *Type:* object

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.identityInput"></a>

```csharp
public StorageAccountIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImmutabilityPolicyInput`<sup>Optional</sup> <a name="ImmutabilityPolicyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.immutabilityPolicyInput"></a>

```csharp
public StorageAccountImmutabilityPolicy ImmutabilityPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a>

---

##### `InfrastructureEncryptionEnabledInput`<sup>Optional</sup> <a name="InfrastructureEncryptionEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.infrastructureEncryptionEnabledInput"></a>

```csharp
public object InfrastructureEncryptionEnabledInput { get; }
```

- *Type:* object

---

##### `IsHnsEnabledInput`<sup>Optional</sup> <a name="IsHnsEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.isHnsEnabledInput"></a>

```csharp
public object IsHnsEnabledInput { get; }
```

- *Type:* object

---

##### `LargeFileShareEnabledInput`<sup>Optional</sup> <a name="LargeFileShareEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.largeFileShareEnabledInput"></a>

```csharp
public object LargeFileShareEnabledInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MinTlsVersionInput`<sup>Optional</sup> <a name="MinTlsVersionInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.minTlsVersionInput"></a>

```csharp
public string MinTlsVersionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkRulesInput`<sup>Optional</sup> <a name="NetworkRulesInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.networkRulesInput"></a>

```csharp
public StorageAccountNetworkRules NetworkRulesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a>

---

##### `Nfsv3EnabledInput`<sup>Optional</sup> <a name="Nfsv3EnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nfsv3EnabledInput"></a>

```csharp
public object Nfsv3EnabledInput { get; }
```

- *Type:* object

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.publicNetworkAccessEnabledInput"></a>

```csharp
public object PublicNetworkAccessEnabledInput { get; }
```

- *Type:* object

---

##### `QueueEncryptionKeyTypeInput`<sup>Optional</sup> <a name="QueueEncryptionKeyTypeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueEncryptionKeyTypeInput"></a>

```csharp
public string QueueEncryptionKeyTypeInput { get; }
```

- *Type:* string

---

##### `QueuePropertiesInput`<sup>Optional</sup> <a name="QueuePropertiesInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queuePropertiesInput"></a>

```csharp
public StorageAccountQueueProperties QueuePropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `RoutingInput`<sup>Optional</sup> <a name="RoutingInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.routingInput"></a>

```csharp
public StorageAccountRouting RoutingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a>

---

##### `SasPolicyInput`<sup>Optional</sup> <a name="SasPolicyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sasPolicyInput"></a>

```csharp
public StorageAccountSasPolicy SasPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a>

---

##### `SftpEnabledInput`<sup>Optional</sup> <a name="SftpEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sftpEnabledInput"></a>

```csharp
public object SftpEnabledInput { get; }
```

- *Type:* object

---

##### `SharedAccessKeyEnabledInput`<sup>Optional</sup> <a name="SharedAccessKeyEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharedAccessKeyEnabledInput"></a>

```csharp
public object SharedAccessKeyEnabledInput { get; }
```

- *Type:* object

---

##### `SharePropertiesInput`<sup>Optional</sup> <a name="SharePropertiesInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharePropertiesInput"></a>

```csharp
public StorageAccountShareProperties SharePropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a>

---

##### `StaticWebsiteInput`<sup>Optional</sup> <a name="StaticWebsiteInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.staticWebsiteInput"></a>

```csharp
public StorageAccountStaticWebsite StaticWebsiteInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a>

---

##### `TableEncryptionKeyTypeInput`<sup>Optional</sup> <a name="TableEncryptionKeyTypeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tableEncryptionKeyTypeInput"></a>

```csharp
public string TableEncryptionKeyTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AccessTier`<sup>Required</sup> <a name="AccessTier" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accessTier"></a>

```csharp
public string AccessTier { get; }
```

- *Type:* string

---

##### `AccountKind`<sup>Required</sup> <a name="AccountKind" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountKind"></a>

```csharp
public string AccountKind { get; }
```

- *Type:* string

---

##### `AccountReplicationType`<sup>Required</sup> <a name="AccountReplicationType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountReplicationType"></a>

```csharp
public string AccountReplicationType { get; }
```

- *Type:* string

---

##### `AccountTier`<sup>Required</sup> <a name="AccountTier" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountTier"></a>

```csharp
public string AccountTier { get; }
```

- *Type:* string

---

##### `AllowedCopyScope`<sup>Required</sup> <a name="AllowedCopyScope" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowedCopyScope"></a>

```csharp
public string AllowedCopyScope { get; }
```

- *Type:* string

---

##### `AllowNestedItemsToBePublic`<sup>Required</sup> <a name="AllowNestedItemsToBePublic" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowNestedItemsToBePublic"></a>

```csharp
public object AllowNestedItemsToBePublic { get; }
```

- *Type:* object

---

##### `CrossTenantReplicationEnabled`<sup>Required</sup> <a name="CrossTenantReplicationEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.crossTenantReplicationEnabled"></a>

```csharp
public object CrossTenantReplicationEnabled { get; }
```

- *Type:* object

---

##### `DefaultToOauthAuthentication`<sup>Required</sup> <a name="DefaultToOauthAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.defaultToOauthAuthentication"></a>

```csharp
public object DefaultToOauthAuthentication { get; }
```

- *Type:* object

---

##### `EdgeZone`<sup>Required</sup> <a name="EdgeZone" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.edgeZone"></a>

```csharp
public string EdgeZone { get; }
```

- *Type:* string

---

##### `EnableHttpsTrafficOnly`<sup>Required</sup> <a name="EnableHttpsTrafficOnly" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.enableHttpsTrafficOnly"></a>

```csharp
public object EnableHttpsTrafficOnly { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InfrastructureEncryptionEnabled`<sup>Required</sup> <a name="InfrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.infrastructureEncryptionEnabled"></a>

```csharp
public object InfrastructureEncryptionEnabled { get; }
```

- *Type:* object

---

##### `IsHnsEnabled`<sup>Required</sup> <a name="IsHnsEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.isHnsEnabled"></a>

```csharp
public object IsHnsEnabled { get; }
```

- *Type:* object

---

##### `LargeFileShareEnabled`<sup>Required</sup> <a name="LargeFileShareEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.largeFileShareEnabled"></a>

```csharp
public object LargeFileShareEnabled { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MinTlsVersion`<sup>Required</sup> <a name="MinTlsVersion" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.minTlsVersion"></a>

```csharp
public string MinTlsVersion { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Nfsv3Enabled`<sup>Required</sup> <a name="Nfsv3Enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nfsv3Enabled"></a>

```csharp
public object Nfsv3Enabled { get; }
```

- *Type:* object

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; }
```

- *Type:* object

---

##### `QueueEncryptionKeyType`<sup>Required</sup> <a name="QueueEncryptionKeyType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueEncryptionKeyType"></a>

```csharp
public string QueueEncryptionKeyType { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SftpEnabled`<sup>Required</sup> <a name="SftpEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sftpEnabled"></a>

```csharp
public object SftpEnabled { get; }
```

- *Type:* object

---

##### `SharedAccessKeyEnabled`<sup>Required</sup> <a name="SharedAccessKeyEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharedAccessKeyEnabled"></a>

```csharp
public object SharedAccessKeyEnabled { get; }
```

- *Type:* object

---

##### `TableEncryptionKeyType`<sup>Required</sup> <a name="TableEncryptionKeyType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tableEncryptionKeyType"></a>

```csharp
public string TableEncryptionKeyType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageAccountAzureFilesAuthentication <a name="StorageAccountAzureFilesAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountAzureFilesAuthentication {
    string DirectoryType,
    StorageAccountAzureFilesAuthenticationActiveDirectory ActiveDirectory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication.property.directoryType">DirectoryType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#directory_type StorageAccount#directory_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication.property.activeDirectory">ActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a></code> | active_directory block. |

---

##### `DirectoryType`<sup>Required</sup> <a name="DirectoryType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication.property.directoryType"></a>

```csharp
public string DirectoryType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#directory_type StorageAccount#directory_type}.

---

##### `ActiveDirectory`<sup>Optional</sup> <a name="ActiveDirectory" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication.property.activeDirectory"></a>

```csharp
public StorageAccountAzureFilesAuthenticationActiveDirectory ActiveDirectory { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#active_directory StorageAccount#active_directory}

---

### StorageAccountAzureFilesAuthenticationActiveDirectory <a name="StorageAccountAzureFilesAuthenticationActiveDirectory" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountAzureFilesAuthenticationActiveDirectory {
    string DomainGuid,
    string DomainName,
    string DomainSid = null,
    string ForestName = null,
    string NetbiosDomainName = null,
    string StorageSid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainGuid">DomainGuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#domain_guid StorageAccount#domain_guid}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#domain_name StorageAccount#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainSid">DomainSid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#domain_sid StorageAccount#domain_sid}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.forestName">ForestName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#forest_name StorageAccount#forest_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.netbiosDomainName">NetbiosDomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#netbios_domain_name StorageAccount#netbios_domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.storageSid">StorageSid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#storage_sid StorageAccount#storage_sid}. |

---

##### `DomainGuid`<sup>Required</sup> <a name="DomainGuid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainGuid"></a>

```csharp
public string DomainGuid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#domain_guid StorageAccount#domain_guid}.

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#domain_name StorageAccount#domain_name}.

---

##### `DomainSid`<sup>Optional</sup> <a name="DomainSid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainSid"></a>

```csharp
public string DomainSid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#domain_sid StorageAccount#domain_sid}.

---

##### `ForestName`<sup>Optional</sup> <a name="ForestName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.forestName"></a>

```csharp
public string ForestName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#forest_name StorageAccount#forest_name}.

---

##### `NetbiosDomainName`<sup>Optional</sup> <a name="NetbiosDomainName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.netbiosDomainName"></a>

```csharp
public string NetbiosDomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#netbios_domain_name StorageAccount#netbios_domain_name}.

---

##### `StorageSid`<sup>Optional</sup> <a name="StorageSid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.storageSid"></a>

```csharp
public string StorageSid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#storage_sid StorageAccount#storage_sid}.

---

### StorageAccountBlobProperties <a name="StorageAccountBlobProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountBlobProperties {
    object ChangeFeedEnabled = null,
    double ChangeFeedRetentionInDays = null,
    StorageAccountBlobPropertiesContainerDeleteRetentionPolicy ContainerDeleteRetentionPolicy = null,
    object CorsRule = null,
    string DefaultServiceVersion = null,
    StorageAccountBlobPropertiesDeleteRetentionPolicy DeleteRetentionPolicy = null,
    object LastAccessTimeEnabled = null,
    StorageAccountBlobPropertiesRestorePolicy RestorePolicy = null,
    object VersioningEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.changeFeedEnabled">ChangeFeedEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#change_feed_enabled StorageAccount#change_feed_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.changeFeedRetentionInDays">ChangeFeedRetentionInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#change_feed_retention_in_days StorageAccount#change_feed_retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.containerDeleteRetentionPolicy">ContainerDeleteRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a></code> | container_delete_retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.corsRule">CorsRule</a></code> | <code>object</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.defaultServiceVersion">DefaultServiceVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#default_service_version StorageAccount#default_service_version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.deleteRetentionPolicy">DeleteRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a></code> | delete_retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.lastAccessTimeEnabled">LastAccessTimeEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#last_access_time_enabled StorageAccount#last_access_time_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.restorePolicy">RestorePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.versioningEnabled">VersioningEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#versioning_enabled StorageAccount#versioning_enabled}. |

---

##### `ChangeFeedEnabled`<sup>Optional</sup> <a name="ChangeFeedEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.changeFeedEnabled"></a>

```csharp
public object ChangeFeedEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#change_feed_enabled StorageAccount#change_feed_enabled}.

---

##### `ChangeFeedRetentionInDays`<sup>Optional</sup> <a name="ChangeFeedRetentionInDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.changeFeedRetentionInDays"></a>

```csharp
public double ChangeFeedRetentionInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#change_feed_retention_in_days StorageAccount#change_feed_retention_in_days}.

---

##### `ContainerDeleteRetentionPolicy`<sup>Optional</sup> <a name="ContainerDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.containerDeleteRetentionPolicy"></a>

```csharp
public StorageAccountBlobPropertiesContainerDeleteRetentionPolicy ContainerDeleteRetentionPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a>

container_delete_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#container_delete_retention_policy StorageAccount#container_delete_retention_policy}

---

##### `CorsRule`<sup>Optional</sup> <a name="CorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.corsRule"></a>

```csharp
public object CorsRule { get; set; }
```

- *Type:* object

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#cors_rule StorageAccount#cors_rule}

---

##### `DefaultServiceVersion`<sup>Optional</sup> <a name="DefaultServiceVersion" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.defaultServiceVersion"></a>

```csharp
public string DefaultServiceVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#default_service_version StorageAccount#default_service_version}.

---

##### `DeleteRetentionPolicy`<sup>Optional</sup> <a name="DeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.deleteRetentionPolicy"></a>

```csharp
public StorageAccountBlobPropertiesDeleteRetentionPolicy DeleteRetentionPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a>

delete_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#delete_retention_policy StorageAccount#delete_retention_policy}

---

##### `LastAccessTimeEnabled`<sup>Optional</sup> <a name="LastAccessTimeEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.lastAccessTimeEnabled"></a>

```csharp
public object LastAccessTimeEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#last_access_time_enabled StorageAccount#last_access_time_enabled}.

---

##### `RestorePolicy`<sup>Optional</sup> <a name="RestorePolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.restorePolicy"></a>

```csharp
public StorageAccountBlobPropertiesRestorePolicy RestorePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#restore_policy StorageAccount#restore_policy}

---

##### `VersioningEnabled`<sup>Optional</sup> <a name="VersioningEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.versioningEnabled"></a>

```csharp
public object VersioningEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#versioning_enabled StorageAccount#versioning_enabled}.

---

### StorageAccountBlobPropertiesContainerDeleteRetentionPolicy <a name="StorageAccountBlobPropertiesContainerDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountBlobPropertiesContainerDeleteRetentionPolicy {
    double Days = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy.property.days">Days</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#days StorageAccount#days}. |

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy.property.days"></a>

```csharp
public double Days { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#days StorageAccount#days}.

---

### StorageAccountBlobPropertiesCorsRule <a name="StorageAccountBlobPropertiesCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountBlobPropertiesCorsRule {
    string[] AllowedHeaders,
    string[] AllowedMethods,
    string[] AllowedOrigins,
    string[] ExposedHeaders,
    double MaxAgeInSeconds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedHeaders">AllowedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.exposedHeaders">ExposedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}. |

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedHeaders"></a>

```csharp
public string[] AllowedHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}.

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}.

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}.

---

##### `ExposedHeaders`<sup>Required</sup> <a name="ExposedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.exposedHeaders"></a>

```csharp
public string[] ExposedHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}.

---

##### `MaxAgeInSeconds`<sup>Required</sup> <a name="MaxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.maxAgeInSeconds"></a>

```csharp
public double MaxAgeInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}.

---

### StorageAccountBlobPropertiesDeleteRetentionPolicy <a name="StorageAccountBlobPropertiesDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountBlobPropertiesDeleteRetentionPolicy {
    double Days = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy.property.days">Days</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#days StorageAccount#days}. |

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy.property.days"></a>

```csharp
public double Days { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#days StorageAccount#days}.

---

### StorageAccountBlobPropertiesRestorePolicy <a name="StorageAccountBlobPropertiesRestorePolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountBlobPropertiesRestorePolicy {
    double Days
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy.property.days">Days</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#days StorageAccount#days}. |

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy.property.days"></a>

```csharp
public double Days { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#days StorageAccount#days}.

---

### StorageAccountConfig <a name="StorageAccountConfig" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountReplicationType,
    string AccountTier,
    string Location,
    string Name,
    string ResourceGroupName,
    string AccessTier = null,
    string AccountKind = null,
    string AllowedCopyScope = null,
    object AllowNestedItemsToBePublic = null,
    StorageAccountAzureFilesAuthentication AzureFilesAuthentication = null,
    StorageAccountBlobProperties BlobProperties = null,
    object CrossTenantReplicationEnabled = null,
    StorageAccountCustomDomain CustomDomain = null,
    StorageAccountCustomerManagedKey CustomerManagedKey = null,
    object DefaultToOauthAuthentication = null,
    string EdgeZone = null,
    object EnableHttpsTrafficOnly = null,
    string Id = null,
    StorageAccountIdentity Identity = null,
    StorageAccountImmutabilityPolicy ImmutabilityPolicy = null,
    object InfrastructureEncryptionEnabled = null,
    object IsHnsEnabled = null,
    object LargeFileShareEnabled = null,
    string MinTlsVersion = null,
    StorageAccountNetworkRules NetworkRules = null,
    object Nfsv3Enabled = null,
    object PublicNetworkAccessEnabled = null,
    string QueueEncryptionKeyType = null,
    StorageAccountQueueProperties QueueProperties = null,
    StorageAccountRouting Routing = null,
    StorageAccountSasPolicy SasPolicy = null,
    object SftpEnabled = null,
    object SharedAccessKeyEnabled = null,
    StorageAccountShareProperties ShareProperties = null,
    StorageAccountStaticWebsite StaticWebsite = null,
    string TableEncryptionKeyType = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    StorageAccountTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountReplicationType">AccountReplicationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#account_replication_type StorageAccount#account_replication_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountTier">AccountTier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#account_tier StorageAccount#account_tier}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#location StorageAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#name StorageAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#resource_group_name StorageAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accessTier">AccessTier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#access_tier StorageAccount#access_tier}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountKind">AccountKind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#account_kind StorageAccount#account_kind}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.allowedCopyScope">AllowedCopyScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#allowed_copy_scope StorageAccount#allowed_copy_scope}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.allowNestedItemsToBePublic">AllowNestedItemsToBePublic</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#allow_nested_items_to_be_public StorageAccount#allow_nested_items_to_be_public}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.azureFilesAuthentication">AzureFilesAuthentication</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a></code> | azure_files_authentication block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.blobProperties">BlobProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a></code> | blob_properties block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.crossTenantReplicationEnabled">CrossTenantReplicationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#cross_tenant_replication_enabled StorageAccount#cross_tenant_replication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.customDomain">CustomDomain</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a></code> | custom_domain block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.customerManagedKey">CustomerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a></code> | customer_managed_key block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.defaultToOauthAuthentication">DefaultToOauthAuthentication</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#default_to_oauth_authentication StorageAccount#default_to_oauth_authentication}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.edgeZone">EdgeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#edge_zone StorageAccount#edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.enableHttpsTrafficOnly">EnableHttpsTrafficOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#enable_https_traffic_only StorageAccount#enable_https_traffic_only}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#id StorageAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.immutabilityPolicy">ImmutabilityPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a></code> | immutability_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.infrastructureEncryptionEnabled">InfrastructureEncryptionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#infrastructure_encryption_enabled StorageAccount#infrastructure_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.isHnsEnabled">IsHnsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#is_hns_enabled StorageAccount#is_hns_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.largeFileShareEnabled">LargeFileShareEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#large_file_share_enabled StorageAccount#large_file_share_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.minTlsVersion">MinTlsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#min_tls_version StorageAccount#min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.networkRules">NetworkRules</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a></code> | network_rules block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.nfsv3Enabled">Nfsv3Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#nfsv3_enabled StorageAccount#nfsv3_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#public_network_access_enabled StorageAccount#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.queueEncryptionKeyType">QueueEncryptionKeyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#queue_encryption_key_type StorageAccount#queue_encryption_key_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.queueProperties">QueueProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a></code> | queue_properties block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.routing">Routing</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a></code> | routing block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sasPolicy">SasPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a></code> | sas_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sftpEnabled">SftpEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#sftp_enabled StorageAccount#sftp_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sharedAccessKeyEnabled">SharedAccessKeyEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#shared_access_key_enabled StorageAccount#shared_access_key_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.shareProperties">ShareProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a></code> | share_properties block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.staticWebsite">StaticWebsite</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a></code> | static_website block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.tableEncryptionKeyType">TableEncryptionKeyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#table_encryption_key_type StorageAccount#table_encryption_key_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#tags StorageAccount#tags}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountReplicationType`<sup>Required</sup> <a name="AccountReplicationType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountReplicationType"></a>

```csharp
public string AccountReplicationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#account_replication_type StorageAccount#account_replication_type}.

---

##### `AccountTier`<sup>Required</sup> <a name="AccountTier" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountTier"></a>

```csharp
public string AccountTier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#account_tier StorageAccount#account_tier}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#location StorageAccount#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#name StorageAccount#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#resource_group_name StorageAccount#resource_group_name}.

---

##### `AccessTier`<sup>Optional</sup> <a name="AccessTier" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accessTier"></a>

```csharp
public string AccessTier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#access_tier StorageAccount#access_tier}.

---

##### `AccountKind`<sup>Optional</sup> <a name="AccountKind" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountKind"></a>

```csharp
public string AccountKind { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#account_kind StorageAccount#account_kind}.

---

##### `AllowedCopyScope`<sup>Optional</sup> <a name="AllowedCopyScope" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.allowedCopyScope"></a>

```csharp
public string AllowedCopyScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#allowed_copy_scope StorageAccount#allowed_copy_scope}.

---

##### `AllowNestedItemsToBePublic`<sup>Optional</sup> <a name="AllowNestedItemsToBePublic" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.allowNestedItemsToBePublic"></a>

```csharp
public object AllowNestedItemsToBePublic { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#allow_nested_items_to_be_public StorageAccount#allow_nested_items_to_be_public}.

---

##### `AzureFilesAuthentication`<sup>Optional</sup> <a name="AzureFilesAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.azureFilesAuthentication"></a>

```csharp
public StorageAccountAzureFilesAuthentication AzureFilesAuthentication { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a>

azure_files_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#azure_files_authentication StorageAccount#azure_files_authentication}

---

##### `BlobProperties`<sup>Optional</sup> <a name="BlobProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.blobProperties"></a>

```csharp
public StorageAccountBlobProperties BlobProperties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a>

blob_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#blob_properties StorageAccount#blob_properties}

---

##### `CrossTenantReplicationEnabled`<sup>Optional</sup> <a name="CrossTenantReplicationEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.crossTenantReplicationEnabled"></a>

```csharp
public object CrossTenantReplicationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#cross_tenant_replication_enabled StorageAccount#cross_tenant_replication_enabled}.

---

##### `CustomDomain`<sup>Optional</sup> <a name="CustomDomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.customDomain"></a>

```csharp
public StorageAccountCustomDomain CustomDomain { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a>

custom_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#custom_domain StorageAccount#custom_domain}

---

##### `CustomerManagedKey`<sup>Optional</sup> <a name="CustomerManagedKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.customerManagedKey"></a>

```csharp
public StorageAccountCustomerManagedKey CustomerManagedKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a>

customer_managed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#customer_managed_key StorageAccount#customer_managed_key}

---

##### `DefaultToOauthAuthentication`<sup>Optional</sup> <a name="DefaultToOauthAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.defaultToOauthAuthentication"></a>

```csharp
public object DefaultToOauthAuthentication { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#default_to_oauth_authentication StorageAccount#default_to_oauth_authentication}.

---

##### `EdgeZone`<sup>Optional</sup> <a name="EdgeZone" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.edgeZone"></a>

```csharp
public string EdgeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#edge_zone StorageAccount#edge_zone}.

---

##### `EnableHttpsTrafficOnly`<sup>Optional</sup> <a name="EnableHttpsTrafficOnly" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.enableHttpsTrafficOnly"></a>

```csharp
public object EnableHttpsTrafficOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#enable_https_traffic_only StorageAccount#enable_https_traffic_only}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#id StorageAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.identity"></a>

```csharp
public StorageAccountIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#identity StorageAccount#identity}

---

##### `ImmutabilityPolicy`<sup>Optional</sup> <a name="ImmutabilityPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.immutabilityPolicy"></a>

```csharp
public StorageAccountImmutabilityPolicy ImmutabilityPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a>

immutability_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#immutability_policy StorageAccount#immutability_policy}

---

##### `InfrastructureEncryptionEnabled`<sup>Optional</sup> <a name="InfrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.infrastructureEncryptionEnabled"></a>

```csharp
public object InfrastructureEncryptionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#infrastructure_encryption_enabled StorageAccount#infrastructure_encryption_enabled}.

---

##### `IsHnsEnabled`<sup>Optional</sup> <a name="IsHnsEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.isHnsEnabled"></a>

```csharp
public object IsHnsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#is_hns_enabled StorageAccount#is_hns_enabled}.

---

##### `LargeFileShareEnabled`<sup>Optional</sup> <a name="LargeFileShareEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.largeFileShareEnabled"></a>

```csharp
public object LargeFileShareEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#large_file_share_enabled StorageAccount#large_file_share_enabled}.

---

##### `MinTlsVersion`<sup>Optional</sup> <a name="MinTlsVersion" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.minTlsVersion"></a>

```csharp
public string MinTlsVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#min_tls_version StorageAccount#min_tls_version}.

---

##### `NetworkRules`<sup>Optional</sup> <a name="NetworkRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.networkRules"></a>

```csharp
public StorageAccountNetworkRules NetworkRules { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a>

network_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#network_rules StorageAccount#network_rules}

---

##### `Nfsv3Enabled`<sup>Optional</sup> <a name="Nfsv3Enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.nfsv3Enabled"></a>

```csharp
public object Nfsv3Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#nfsv3_enabled StorageAccount#nfsv3_enabled}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#public_network_access_enabled StorageAccount#public_network_access_enabled}.

---

##### `QueueEncryptionKeyType`<sup>Optional</sup> <a name="QueueEncryptionKeyType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.queueEncryptionKeyType"></a>

```csharp
public string QueueEncryptionKeyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#queue_encryption_key_type StorageAccount#queue_encryption_key_type}.

---

##### `QueueProperties`<sup>Optional</sup> <a name="QueueProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.queueProperties"></a>

```csharp
public StorageAccountQueueProperties QueueProperties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a>

queue_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#queue_properties StorageAccount#queue_properties}

---

##### `Routing`<sup>Optional</sup> <a name="Routing" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.routing"></a>

```csharp
public StorageAccountRouting Routing { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a>

routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#routing StorageAccount#routing}

---

##### `SasPolicy`<sup>Optional</sup> <a name="SasPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sasPolicy"></a>

```csharp
public StorageAccountSasPolicy SasPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a>

sas_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#sas_policy StorageAccount#sas_policy}

---

##### `SftpEnabled`<sup>Optional</sup> <a name="SftpEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sftpEnabled"></a>

```csharp
public object SftpEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#sftp_enabled StorageAccount#sftp_enabled}.

---

##### `SharedAccessKeyEnabled`<sup>Optional</sup> <a name="SharedAccessKeyEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sharedAccessKeyEnabled"></a>

```csharp
public object SharedAccessKeyEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#shared_access_key_enabled StorageAccount#shared_access_key_enabled}.

---

##### `ShareProperties`<sup>Optional</sup> <a name="ShareProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.shareProperties"></a>

```csharp
public StorageAccountShareProperties ShareProperties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a>

share_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#share_properties StorageAccount#share_properties}

---

##### `StaticWebsite`<sup>Optional</sup> <a name="StaticWebsite" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.staticWebsite"></a>

```csharp
public StorageAccountStaticWebsite StaticWebsite { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a>

static_website block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#static_website StorageAccount#static_website}

---

##### `TableEncryptionKeyType`<sup>Optional</sup> <a name="TableEncryptionKeyType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.tableEncryptionKeyType"></a>

```csharp
public string TableEncryptionKeyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#table_encryption_key_type StorageAccount#table_encryption_key_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#tags StorageAccount#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.timeouts"></a>

```csharp
public StorageAccountTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#timeouts StorageAccount#timeouts}

---

### StorageAccountCustomDomain <a name="StorageAccountCustomDomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountCustomDomain {
    string Name,
    object UseSubdomain = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#name StorageAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain.property.useSubdomain">UseSubdomain</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#use_subdomain StorageAccount#use_subdomain}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#name StorageAccount#name}.

---

##### `UseSubdomain`<sup>Optional</sup> <a name="UseSubdomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain.property.useSubdomain"></a>

```csharp
public object UseSubdomain { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#use_subdomain StorageAccount#use_subdomain}.

---

### StorageAccountCustomerManagedKey <a name="StorageAccountCustomerManagedKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountCustomerManagedKey {
    string KeyVaultKeyId,
    string UserAssignedIdentityId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#key_vault_key_id StorageAccount#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#user_assigned_identity_id StorageAccount#user_assigned_identity_id}. |

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#key_vault_key_id StorageAccount#key_vault_key_id}.

---

##### `UserAssignedIdentityId`<sup>Required</sup> <a name="UserAssignedIdentityId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey.property.userAssignedIdentityId"></a>

```csharp
public string UserAssignedIdentityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#user_assigned_identity_id StorageAccount#user_assigned_identity_id}.

---

### StorageAccountIdentity <a name="StorageAccountIdentity" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#type StorageAccount#type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#identity_ids StorageAccount#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#type StorageAccount#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#identity_ids StorageAccount#identity_ids}.

---

### StorageAccountImmutabilityPolicy <a name="StorageAccountImmutabilityPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountImmutabilityPolicy {
    object AllowProtectedAppendWrites,
    double PeriodSinceCreationInDays,
    string State
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.allowProtectedAppendWrites">AllowProtectedAppendWrites</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#allow_protected_append_writes StorageAccount#allow_protected_append_writes}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.periodSinceCreationInDays">PeriodSinceCreationInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#period_since_creation_in_days StorageAccount#period_since_creation_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#state StorageAccount#state}. |

---

##### `AllowProtectedAppendWrites`<sup>Required</sup> <a name="AllowProtectedAppendWrites" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.allowProtectedAppendWrites"></a>

```csharp
public object AllowProtectedAppendWrites { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#allow_protected_append_writes StorageAccount#allow_protected_append_writes}.

---

##### `PeriodSinceCreationInDays`<sup>Required</sup> <a name="PeriodSinceCreationInDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.periodSinceCreationInDays"></a>

```csharp
public double PeriodSinceCreationInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#period_since_creation_in_days StorageAccount#period_since_creation_in_days}.

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#state StorageAccount#state}.

---

### StorageAccountNetworkRules <a name="StorageAccountNetworkRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountNetworkRules {
    string DefaultAction,
    string[] Bypass = null,
    string[] IpRules = null,
    object PrivateLinkAccess = null,
    string[] VirtualNetworkSubnetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.defaultAction">DefaultAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#default_action StorageAccount#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.bypass">Bypass</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#bypass StorageAccount#bypass}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.ipRules">IpRules</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#ip_rules StorageAccount#ip_rules}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.privateLinkAccess">PrivateLinkAccess</a></code> | <code>object</code> | private_link_access block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.virtualNetworkSubnetIds">VirtualNetworkSubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#virtual_network_subnet_ids StorageAccount#virtual_network_subnet_ids}. |

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.defaultAction"></a>

```csharp
public string DefaultAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#default_action StorageAccount#default_action}.

---

##### `Bypass`<sup>Optional</sup> <a name="Bypass" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.bypass"></a>

```csharp
public string[] Bypass { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#bypass StorageAccount#bypass}.

---

##### `IpRules`<sup>Optional</sup> <a name="IpRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.ipRules"></a>

```csharp
public string[] IpRules { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#ip_rules StorageAccount#ip_rules}.

---

##### `PrivateLinkAccess`<sup>Optional</sup> <a name="PrivateLinkAccess" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.privateLinkAccess"></a>

```csharp
public object PrivateLinkAccess { get; set; }
```

- *Type:* object

private_link_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#private_link_access StorageAccount#private_link_access}

---

##### `VirtualNetworkSubnetIds`<sup>Optional</sup> <a name="VirtualNetworkSubnetIds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.virtualNetworkSubnetIds"></a>

```csharp
public string[] VirtualNetworkSubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#virtual_network_subnet_ids StorageAccount#virtual_network_subnet_ids}.

---

### StorageAccountNetworkRulesPrivateLinkAccess <a name="StorageAccountNetworkRulesPrivateLinkAccess" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountNetworkRulesPrivateLinkAccess {
    string EndpointResourceId,
    string EndpointTenantId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess.property.endpointResourceId">EndpointResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#endpoint_resource_id StorageAccount#endpoint_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess.property.endpointTenantId">EndpointTenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#endpoint_tenant_id StorageAccount#endpoint_tenant_id}. |

---

##### `EndpointResourceId`<sup>Required</sup> <a name="EndpointResourceId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess.property.endpointResourceId"></a>

```csharp
public string EndpointResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#endpoint_resource_id StorageAccount#endpoint_resource_id}.

---

##### `EndpointTenantId`<sup>Optional</sup> <a name="EndpointTenantId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess.property.endpointTenantId"></a>

```csharp
public string EndpointTenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#endpoint_tenant_id StorageAccount#endpoint_tenant_id}.

---

### StorageAccountQueueProperties <a name="StorageAccountQueueProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountQueueProperties {
    object CorsRule = null,
    StorageAccountQueuePropertiesHourMetrics HourMetrics = null,
    StorageAccountQueuePropertiesLogging Logging = null,
    StorageAccountQueuePropertiesMinuteMetrics MinuteMetrics = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.corsRule">CorsRule</a></code> | <code>object</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.hourMetrics">HourMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a></code> | hour_metrics block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.minuteMetrics">MinuteMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a></code> | minute_metrics block. |

---

##### `CorsRule`<sup>Optional</sup> <a name="CorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.corsRule"></a>

```csharp
public object CorsRule { get; set; }
```

- *Type:* object

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#cors_rule StorageAccount#cors_rule}

---

##### `HourMetrics`<sup>Optional</sup> <a name="HourMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.hourMetrics"></a>

```csharp
public StorageAccountQueuePropertiesHourMetrics HourMetrics { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a>

hour_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#hour_metrics StorageAccount#hour_metrics}

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.logging"></a>

```csharp
public StorageAccountQueuePropertiesLogging Logging { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#logging StorageAccount#logging}

---

##### `MinuteMetrics`<sup>Optional</sup> <a name="MinuteMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.minuteMetrics"></a>

```csharp
public StorageAccountQueuePropertiesMinuteMetrics MinuteMetrics { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a>

minute_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#minute_metrics StorageAccount#minute_metrics}

---

### StorageAccountQueuePropertiesCorsRule <a name="StorageAccountQueuePropertiesCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountQueuePropertiesCorsRule {
    string[] AllowedHeaders,
    string[] AllowedMethods,
    string[] AllowedOrigins,
    string[] ExposedHeaders,
    double MaxAgeInSeconds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedHeaders">AllowedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.exposedHeaders">ExposedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}. |

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedHeaders"></a>

```csharp
public string[] AllowedHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}.

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}.

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}.

---

##### `ExposedHeaders`<sup>Required</sup> <a name="ExposedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.exposedHeaders"></a>

```csharp
public string[] ExposedHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}.

---

##### `MaxAgeInSeconds`<sup>Required</sup> <a name="MaxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.maxAgeInSeconds"></a>

```csharp
public double MaxAgeInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}.

---

### StorageAccountQueuePropertiesHourMetrics <a name="StorageAccountQueuePropertiesHourMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountQueuePropertiesHourMetrics {
    object Enabled,
    string Version,
    object IncludeApis = null,
    double RetentionPolicyDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#enabled StorageAccount#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#version StorageAccount#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.includeApis">IncludeApis</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#include_apis StorageAccount#include_apis}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#enabled StorageAccount#enabled}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#version StorageAccount#version}.

---

##### `IncludeApis`<sup>Optional</sup> <a name="IncludeApis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.includeApis"></a>

```csharp
public object IncludeApis { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#include_apis StorageAccount#include_apis}.

---

##### `RetentionPolicyDays`<sup>Optional</sup> <a name="RetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.retentionPolicyDays"></a>

```csharp
public double RetentionPolicyDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}.

---

### StorageAccountQueuePropertiesLogging <a name="StorageAccountQueuePropertiesLogging" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountQueuePropertiesLogging {
    object Delete,
    object Read,
    string Version,
    object Write,
    double RetentionPolicyDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.delete">Delete</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#delete StorageAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.read">Read</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#read StorageAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#version StorageAccount#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.write">Write</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#write StorageAccount#write}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}. |

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.delete"></a>

```csharp
public object Delete { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#delete StorageAccount#delete}.

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.read"></a>

```csharp
public object Read { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#read StorageAccount#read}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#version StorageAccount#version}.

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.write"></a>

```csharp
public object Write { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#write StorageAccount#write}.

---

##### `RetentionPolicyDays`<sup>Optional</sup> <a name="RetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.retentionPolicyDays"></a>

```csharp
public double RetentionPolicyDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}.

---

### StorageAccountQueuePropertiesMinuteMetrics <a name="StorageAccountQueuePropertiesMinuteMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountQueuePropertiesMinuteMetrics {
    object Enabled,
    string Version,
    object IncludeApis = null,
    double RetentionPolicyDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#enabled StorageAccount#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#version StorageAccount#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.includeApis">IncludeApis</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#include_apis StorageAccount#include_apis}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#enabled StorageAccount#enabled}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#version StorageAccount#version}.

---

##### `IncludeApis`<sup>Optional</sup> <a name="IncludeApis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.includeApis"></a>

```csharp
public object IncludeApis { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#include_apis StorageAccount#include_apis}.

---

##### `RetentionPolicyDays`<sup>Optional</sup> <a name="RetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.retentionPolicyDays"></a>

```csharp
public double RetentionPolicyDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}.

---

### StorageAccountRouting <a name="StorageAccountRouting" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountRouting {
    string Choice = null,
    object PublishInternetEndpoints = null,
    object PublishMicrosoftEndpoints = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.choice">Choice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#choice StorageAccount#choice}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.publishInternetEndpoints">PublishInternetEndpoints</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#publish_internet_endpoints StorageAccount#publish_internet_endpoints}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.publishMicrosoftEndpoints">PublishMicrosoftEndpoints</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#publish_microsoft_endpoints StorageAccount#publish_microsoft_endpoints}. |

---

##### `Choice`<sup>Optional</sup> <a name="Choice" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.choice"></a>

```csharp
public string Choice { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#choice StorageAccount#choice}.

---

##### `PublishInternetEndpoints`<sup>Optional</sup> <a name="PublishInternetEndpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.publishInternetEndpoints"></a>

```csharp
public object PublishInternetEndpoints { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#publish_internet_endpoints StorageAccount#publish_internet_endpoints}.

---

##### `PublishMicrosoftEndpoints`<sup>Optional</sup> <a name="PublishMicrosoftEndpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.publishMicrosoftEndpoints"></a>

```csharp
public object PublishMicrosoftEndpoints { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#publish_microsoft_endpoints StorageAccount#publish_microsoft_endpoints}.

---

### StorageAccountSasPolicy <a name="StorageAccountSasPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountSasPolicy {
    string ExpirationPeriod,
    string ExpirationAction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy.property.expirationPeriod">ExpirationPeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#expiration_period StorageAccount#expiration_period}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy.property.expirationAction">ExpirationAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#expiration_action StorageAccount#expiration_action}. |

---

##### `ExpirationPeriod`<sup>Required</sup> <a name="ExpirationPeriod" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy.property.expirationPeriod"></a>

```csharp
public string ExpirationPeriod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#expiration_period StorageAccount#expiration_period}.

---

##### `ExpirationAction`<sup>Optional</sup> <a name="ExpirationAction" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy.property.expirationAction"></a>

```csharp
public string ExpirationAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#expiration_action StorageAccount#expiration_action}.

---

### StorageAccountShareProperties <a name="StorageAccountShareProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountShareProperties {
    object CorsRule = null,
    StorageAccountSharePropertiesRetentionPolicy RetentionPolicy = null,
    StorageAccountSharePropertiesSmb Smb = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.corsRule">CorsRule</a></code> | <code>object</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.smb">Smb</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a></code> | smb block. |

---

##### `CorsRule`<sup>Optional</sup> <a name="CorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.corsRule"></a>

```csharp
public object CorsRule { get; set; }
```

- *Type:* object

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#cors_rule StorageAccount#cors_rule}

---

##### `RetentionPolicy`<sup>Optional</sup> <a name="RetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.retentionPolicy"></a>

```csharp
public StorageAccountSharePropertiesRetentionPolicy RetentionPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#retention_policy StorageAccount#retention_policy}

---

##### `Smb`<sup>Optional</sup> <a name="Smb" id="@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.smb"></a>

```csharp
public StorageAccountSharePropertiesSmb Smb { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a>

smb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#smb StorageAccount#smb}

---

### StorageAccountSharePropertiesCorsRule <a name="StorageAccountSharePropertiesCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountSharePropertiesCorsRule {
    string[] AllowedHeaders,
    string[] AllowedMethods,
    string[] AllowedOrigins,
    string[] ExposedHeaders,
    double MaxAgeInSeconds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedHeaders">AllowedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.exposedHeaders">ExposedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}. |

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedHeaders"></a>

```csharp
public string[] AllowedHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}.

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}.

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}.

---

##### `ExposedHeaders`<sup>Required</sup> <a name="ExposedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.exposedHeaders"></a>

```csharp
public string[] ExposedHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}.

---

##### `MaxAgeInSeconds`<sup>Required</sup> <a name="MaxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.maxAgeInSeconds"></a>

```csharp
public double MaxAgeInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}.

---

### StorageAccountSharePropertiesRetentionPolicy <a name="StorageAccountSharePropertiesRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountSharePropertiesRetentionPolicy {
    double Days = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy.property.days">Days</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#days StorageAccount#days}. |

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy.property.days"></a>

```csharp
public double Days { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#days StorageAccount#days}.

---

### StorageAccountSharePropertiesSmb <a name="StorageAccountSharePropertiesSmb" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountSharePropertiesSmb {
    string[] AuthenticationTypes = null,
    string[] ChannelEncryptionType = null,
    string[] KerberosTicketEncryptionType = null,
    object MultichannelEnabled = null,
    string[] Versions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.authenticationTypes">AuthenticationTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#authentication_types StorageAccount#authentication_types}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.channelEncryptionType">ChannelEncryptionType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#channel_encryption_type StorageAccount#channel_encryption_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.kerberosTicketEncryptionType">KerberosTicketEncryptionType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#kerberos_ticket_encryption_type StorageAccount#kerberos_ticket_encryption_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.multichannelEnabled">MultichannelEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#multichannel_enabled StorageAccount#multichannel_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.versions">Versions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#versions StorageAccount#versions}. |

---

##### `AuthenticationTypes`<sup>Optional</sup> <a name="AuthenticationTypes" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.authenticationTypes"></a>

```csharp
public string[] AuthenticationTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#authentication_types StorageAccount#authentication_types}.

---

##### `ChannelEncryptionType`<sup>Optional</sup> <a name="ChannelEncryptionType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.channelEncryptionType"></a>

```csharp
public string[] ChannelEncryptionType { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#channel_encryption_type StorageAccount#channel_encryption_type}.

---

##### `KerberosTicketEncryptionType`<sup>Optional</sup> <a name="KerberosTicketEncryptionType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.kerberosTicketEncryptionType"></a>

```csharp
public string[] KerberosTicketEncryptionType { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#kerberos_ticket_encryption_type StorageAccount#kerberos_ticket_encryption_type}.

---

##### `MultichannelEnabled`<sup>Optional</sup> <a name="MultichannelEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.multichannelEnabled"></a>

```csharp
public object MultichannelEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#multichannel_enabled StorageAccount#multichannel_enabled}.

---

##### `Versions`<sup>Optional</sup> <a name="Versions" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.versions"></a>

```csharp
public string[] Versions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#versions StorageAccount#versions}.

---

### StorageAccountStaticWebsite <a name="StorageAccountStaticWebsite" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountStaticWebsite {
    string Error404Document = null,
    string IndexDocument = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite.property.error404Document">Error404Document</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#error_404_document StorageAccount#error_404_document}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite.property.indexDocument">IndexDocument</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#index_document StorageAccount#index_document}. |

---

##### `Error404Document`<sup>Optional</sup> <a name="Error404Document" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite.property.error404Document"></a>

```csharp
public string Error404Document { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#error_404_document StorageAccount#error_404_document}.

---

##### `IndexDocument`<sup>Optional</sup> <a name="IndexDocument" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite.property.indexDocument"></a>

```csharp
public string IndexDocument { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#index_document StorageAccount#index_document}.

---

### StorageAccountTimeouts <a name="StorageAccountTimeouts" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#create StorageAccount#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#delete StorageAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#read StorageAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#update StorageAccount#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#create StorageAccount#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#delete StorageAccount#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#read StorageAccount#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/storage_account#update StorageAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference <a name="StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomainSid` <a name="ResetDomainSid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resetDomainSid"></a>

```csharp
private void ResetDomainSid()
```

##### `ResetForestName` <a name="ResetForestName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resetForestName"></a>

```csharp
private void ResetForestName()
```

##### `ResetNetbiosDomainName` <a name="ResetNetbiosDomainName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resetNetbiosDomainName"></a>

```csharp
private void ResetNetbiosDomainName()
```

##### `ResetStorageSid` <a name="ResetStorageSid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resetStorageSid"></a>

```csharp
private void ResetStorageSid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainGuidInput">DomainGuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainSidInput">DomainSidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.forestNameInput">ForestNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.netbiosDomainNameInput">NetbiosDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.storageSidInput">StorageSidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainGuid">DomainGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainSid">DomainSid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.forestName">ForestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.netbiosDomainName">NetbiosDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.storageSid">StorageSid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainGuidInput`<sup>Optional</sup> <a name="DomainGuidInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainGuidInput"></a>

```csharp
public string DomainGuidInput { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `DomainSidInput`<sup>Optional</sup> <a name="DomainSidInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainSidInput"></a>

```csharp
public string DomainSidInput { get; }
```

- *Type:* string

---

##### `ForestNameInput`<sup>Optional</sup> <a name="ForestNameInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.forestNameInput"></a>

```csharp
public string ForestNameInput { get; }
```

- *Type:* string

---

##### `NetbiosDomainNameInput`<sup>Optional</sup> <a name="NetbiosDomainNameInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.netbiosDomainNameInput"></a>

```csharp
public string NetbiosDomainNameInput { get; }
```

- *Type:* string

---

##### `StorageSidInput`<sup>Optional</sup> <a name="StorageSidInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.storageSidInput"></a>

```csharp
public string StorageSidInput { get; }
```

- *Type:* string

---

##### `DomainGuid`<sup>Required</sup> <a name="DomainGuid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainGuid"></a>

```csharp
public string DomainGuid { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `DomainSid`<sup>Required</sup> <a name="DomainSid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainSid"></a>

```csharp
public string DomainSid { get; }
```

- *Type:* string

---

##### `ForestName`<sup>Required</sup> <a name="ForestName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.forestName"></a>

```csharp
public string ForestName { get; }
```

- *Type:* string

---

##### `NetbiosDomainName`<sup>Required</sup> <a name="NetbiosDomainName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.netbiosDomainName"></a>

```csharp
public string NetbiosDomainName { get; }
```

- *Type:* string

---

##### `StorageSid`<sup>Required</sup> <a name="StorageSid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.storageSid"></a>

```csharp
public string StorageSid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.internalValue"></a>

```csharp
public StorageAccountAzureFilesAuthenticationActiveDirectory InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a>

---


### StorageAccountAzureFilesAuthenticationOutputReference <a name="StorageAccountAzureFilesAuthenticationOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountAzureFilesAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActiveDirectory` <a name="PutActiveDirectory" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.putActiveDirectory"></a>

```csharp
private void PutActiveDirectory(StorageAccountAzureFilesAuthenticationActiveDirectory Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.putActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a>

---

##### `ResetActiveDirectory` <a name="ResetActiveDirectory" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.resetActiveDirectory"></a>

```csharp
private void ResetActiveDirectory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.activeDirectory">ActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference">StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.activeDirectoryInput">ActiveDirectoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.directoryTypeInput">DirectoryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.directoryType">DirectoryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveDirectory`<sup>Required</sup> <a name="ActiveDirectory" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.activeDirectory"></a>

```csharp
public StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference ActiveDirectory { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference">StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference</a>

---

##### `ActiveDirectoryInput`<sup>Optional</sup> <a name="ActiveDirectoryInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.activeDirectoryInput"></a>

```csharp
public StorageAccountAzureFilesAuthenticationActiveDirectory ActiveDirectoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a>

---

##### `DirectoryTypeInput`<sup>Optional</sup> <a name="DirectoryTypeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.directoryTypeInput"></a>

```csharp
public string DirectoryTypeInput { get; }
```

- *Type:* string

---

##### `DirectoryType`<sup>Required</sup> <a name="DirectoryType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.directoryType"></a>

```csharp
public string DirectoryType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.internalValue"></a>

```csharp
public StorageAccountAzureFilesAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a>

---


### StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference <a name="StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.resetDays"></a>

```csharp
private void ResetDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.daysInput">DaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.days">Days</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.daysInput"></a>

```csharp
public double DaysInput { get; }
```

- *Type:* double

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.days"></a>

```csharp
public double Days { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.internalValue"></a>

```csharp
public StorageAccountBlobPropertiesContainerDeleteRetentionPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a>

---


### StorageAccountBlobPropertiesCorsRuleList <a name="StorageAccountBlobPropertiesCorsRuleList" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountBlobPropertiesCorsRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.get"></a>

```csharp
private StorageAccountBlobPropertiesCorsRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StorageAccountBlobPropertiesCorsRuleOutputReference <a name="StorageAccountBlobPropertiesCorsRuleOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountBlobPropertiesCorsRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedHeadersInput">AllowedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedMethodsInput">AllowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.exposedHeadersInput">ExposedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput">MaxAgeInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedHeaders">AllowedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.exposedHeaders">ExposedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedHeadersInput`<sup>Optional</sup> <a name="AllowedHeadersInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedHeadersInput"></a>

```csharp
public string[] AllowedHeadersInput { get; }
```

- *Type:* string[]

---

##### `AllowedMethodsInput`<sup>Optional</sup> <a name="AllowedMethodsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedMethodsInput"></a>

```csharp
public string[] AllowedMethodsInput { get; }
```

- *Type:* string[]

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedOriginsInput"></a>

```csharp
public string[] AllowedOriginsInput { get; }
```

- *Type:* string[]

---

##### `ExposedHeadersInput`<sup>Optional</sup> <a name="ExposedHeadersInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.exposedHeadersInput"></a>

```csharp
public string[] ExposedHeadersInput { get; }
```

- *Type:* string[]

---

##### `MaxAgeInSecondsInput`<sup>Optional</sup> <a name="MaxAgeInSecondsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput"></a>

```csharp
public double MaxAgeInSecondsInput { get; }
```

- *Type:* double

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedHeaders"></a>

```csharp
public string[] AllowedHeaders { get; }
```

- *Type:* string[]

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; }
```

- *Type:* string[]

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; }
```

- *Type:* string[]

---

##### `ExposedHeaders`<sup>Required</sup> <a name="ExposedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.exposedHeaders"></a>

```csharp
public string[] ExposedHeaders { get; }
```

- *Type:* string[]

---

##### `MaxAgeInSeconds`<sup>Required</sup> <a name="MaxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.maxAgeInSeconds"></a>

```csharp
public double MaxAgeInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference <a name="StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.resetDays"></a>

```csharp
private void ResetDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.daysInput">DaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.days">Days</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.daysInput"></a>

```csharp
public double DaysInput { get; }
```

- *Type:* double

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.days"></a>

```csharp
public double Days { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.internalValue"></a>

```csharp
public StorageAccountBlobPropertiesDeleteRetentionPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a>

---


### StorageAccountBlobPropertiesOutputReference <a name="StorageAccountBlobPropertiesOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountBlobPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainerDeleteRetentionPolicy` <a name="PutContainerDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putContainerDeleteRetentionPolicy"></a>

```csharp
private void PutContainerDeleteRetentionPolicy(StorageAccountBlobPropertiesContainerDeleteRetentionPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putContainerDeleteRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a>

---

##### `PutCorsRule` <a name="PutCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putCorsRule"></a>

```csharp
private void PutCorsRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putCorsRule.parameter.value"></a>

- *Type:* object

---

##### `PutDeleteRetentionPolicy` <a name="PutDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putDeleteRetentionPolicy"></a>

```csharp
private void PutDeleteRetentionPolicy(StorageAccountBlobPropertiesDeleteRetentionPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putDeleteRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a>

---

##### `PutRestorePolicy` <a name="PutRestorePolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putRestorePolicy"></a>

```csharp
private void PutRestorePolicy(StorageAccountBlobPropertiesRestorePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putRestorePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a>

---

##### `ResetChangeFeedEnabled` <a name="ResetChangeFeedEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetChangeFeedEnabled"></a>

```csharp
private void ResetChangeFeedEnabled()
```

##### `ResetChangeFeedRetentionInDays` <a name="ResetChangeFeedRetentionInDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetChangeFeedRetentionInDays"></a>

```csharp
private void ResetChangeFeedRetentionInDays()
```

##### `ResetContainerDeleteRetentionPolicy` <a name="ResetContainerDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetContainerDeleteRetentionPolicy"></a>

```csharp
private void ResetContainerDeleteRetentionPolicy()
```

##### `ResetCorsRule` <a name="ResetCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetCorsRule"></a>

```csharp
private void ResetCorsRule()
```

##### `ResetDefaultServiceVersion` <a name="ResetDefaultServiceVersion" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetDefaultServiceVersion"></a>

```csharp
private void ResetDefaultServiceVersion()
```

##### `ResetDeleteRetentionPolicy` <a name="ResetDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetDeleteRetentionPolicy"></a>

```csharp
private void ResetDeleteRetentionPolicy()
```

##### `ResetLastAccessTimeEnabled` <a name="ResetLastAccessTimeEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetLastAccessTimeEnabled"></a>

```csharp
private void ResetLastAccessTimeEnabled()
```

##### `ResetRestorePolicy` <a name="ResetRestorePolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetRestorePolicy"></a>

```csharp
private void ResetRestorePolicy()
```

##### `ResetVersioningEnabled` <a name="ResetVersioningEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetVersioningEnabled"></a>

```csharp
private void ResetVersioningEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.containerDeleteRetentionPolicy">ContainerDeleteRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference">StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.corsRule">CorsRule</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList">StorageAccountBlobPropertiesCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.deleteRetentionPolicy">DeleteRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference">StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.restorePolicy">RestorePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference">StorageAccountBlobPropertiesRestorePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedEnabledInput">ChangeFeedEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedRetentionInDaysInput">ChangeFeedRetentionInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.containerDeleteRetentionPolicyInput">ContainerDeleteRetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.corsRuleInput">CorsRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.defaultServiceVersionInput">DefaultServiceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.deleteRetentionPolicyInput">DeleteRetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.lastAccessTimeEnabledInput">LastAccessTimeEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.restorePolicyInput">RestorePolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.versioningEnabledInput">VersioningEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedEnabled">ChangeFeedEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedRetentionInDays">ChangeFeedRetentionInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.defaultServiceVersion">DefaultServiceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.lastAccessTimeEnabled">LastAccessTimeEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.versioningEnabled">VersioningEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerDeleteRetentionPolicy`<sup>Required</sup> <a name="ContainerDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.containerDeleteRetentionPolicy"></a>

```csharp
public StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference ContainerDeleteRetentionPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference">StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference</a>

---

##### `CorsRule`<sup>Required</sup> <a name="CorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.corsRule"></a>

```csharp
public StorageAccountBlobPropertiesCorsRuleList CorsRule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList">StorageAccountBlobPropertiesCorsRuleList</a>

---

##### `DeleteRetentionPolicy`<sup>Required</sup> <a name="DeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.deleteRetentionPolicy"></a>

```csharp
public StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference DeleteRetentionPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference">StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference</a>

---

##### `RestorePolicy`<sup>Required</sup> <a name="RestorePolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.restorePolicy"></a>

```csharp
public StorageAccountBlobPropertiesRestorePolicyOutputReference RestorePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference">StorageAccountBlobPropertiesRestorePolicyOutputReference</a>

---

##### `ChangeFeedEnabledInput`<sup>Optional</sup> <a name="ChangeFeedEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedEnabledInput"></a>

```csharp
public object ChangeFeedEnabledInput { get; }
```

- *Type:* object

---

##### `ChangeFeedRetentionInDaysInput`<sup>Optional</sup> <a name="ChangeFeedRetentionInDaysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedRetentionInDaysInput"></a>

```csharp
public double ChangeFeedRetentionInDaysInput { get; }
```

- *Type:* double

---

##### `ContainerDeleteRetentionPolicyInput`<sup>Optional</sup> <a name="ContainerDeleteRetentionPolicyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.containerDeleteRetentionPolicyInput"></a>

```csharp
public StorageAccountBlobPropertiesContainerDeleteRetentionPolicy ContainerDeleteRetentionPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a>

---

##### `CorsRuleInput`<sup>Optional</sup> <a name="CorsRuleInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.corsRuleInput"></a>

```csharp
public object CorsRuleInput { get; }
```

- *Type:* object

---

##### `DefaultServiceVersionInput`<sup>Optional</sup> <a name="DefaultServiceVersionInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.defaultServiceVersionInput"></a>

```csharp
public string DefaultServiceVersionInput { get; }
```

- *Type:* string

---

##### `DeleteRetentionPolicyInput`<sup>Optional</sup> <a name="DeleteRetentionPolicyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.deleteRetentionPolicyInput"></a>

```csharp
public StorageAccountBlobPropertiesDeleteRetentionPolicy DeleteRetentionPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a>

---

##### `LastAccessTimeEnabledInput`<sup>Optional</sup> <a name="LastAccessTimeEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.lastAccessTimeEnabledInput"></a>

```csharp
public object LastAccessTimeEnabledInput { get; }
```

- *Type:* object

---

##### `RestorePolicyInput`<sup>Optional</sup> <a name="RestorePolicyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.restorePolicyInput"></a>

```csharp
public StorageAccountBlobPropertiesRestorePolicy RestorePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a>

---

##### `VersioningEnabledInput`<sup>Optional</sup> <a name="VersioningEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.versioningEnabledInput"></a>

```csharp
public object VersioningEnabledInput { get; }
```

- *Type:* object

---

##### `ChangeFeedEnabled`<sup>Required</sup> <a name="ChangeFeedEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedEnabled"></a>

```csharp
public object ChangeFeedEnabled { get; }
```

- *Type:* object

---

##### `ChangeFeedRetentionInDays`<sup>Required</sup> <a name="ChangeFeedRetentionInDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedRetentionInDays"></a>

```csharp
public double ChangeFeedRetentionInDays { get; }
```

- *Type:* double

---

##### `DefaultServiceVersion`<sup>Required</sup> <a name="DefaultServiceVersion" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.defaultServiceVersion"></a>

```csharp
public string DefaultServiceVersion { get; }
```

- *Type:* string

---

##### `LastAccessTimeEnabled`<sup>Required</sup> <a name="LastAccessTimeEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.lastAccessTimeEnabled"></a>

```csharp
public object LastAccessTimeEnabled { get; }
```

- *Type:* object

---

##### `VersioningEnabled`<sup>Required</sup> <a name="VersioningEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.versioningEnabled"></a>

```csharp
public object VersioningEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.internalValue"></a>

```csharp
public StorageAccountBlobProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a>

---


### StorageAccountBlobPropertiesRestorePolicyOutputReference <a name="StorageAccountBlobPropertiesRestorePolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountBlobPropertiesRestorePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.daysInput">DaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.days">Days</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.daysInput"></a>

```csharp
public double DaysInput { get; }
```

- *Type:* double

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.days"></a>

```csharp
public double Days { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.internalValue"></a>

```csharp
public StorageAccountBlobPropertiesRestorePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a>

---


### StorageAccountCustomDomainOutputReference <a name="StorageAccountCustomDomainOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountCustomDomainOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseSubdomain` <a name="ResetUseSubdomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.resetUseSubdomain"></a>

```csharp
private void ResetUseSubdomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.useSubdomainInput">UseSubdomainInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.useSubdomain">UseSubdomain</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `UseSubdomainInput`<sup>Optional</sup> <a name="UseSubdomainInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.useSubdomainInput"></a>

```csharp
public object UseSubdomainInput { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `UseSubdomain`<sup>Required</sup> <a name="UseSubdomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.useSubdomain"></a>

```csharp
public object UseSubdomain { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.internalValue"></a>

```csharp
public StorageAccountCustomDomain InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a>

---


### StorageAccountCustomerManagedKeyOutputReference <a name="StorageAccountCustomerManagedKeyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountCustomerManagedKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.userAssignedIdentityIdInput">UserAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput"></a>

```csharp
public string KeyVaultKeyIdInput { get; }
```

- *Type:* string

---

##### `UserAssignedIdentityIdInput`<sup>Optional</sup> <a name="UserAssignedIdentityIdInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.userAssignedIdentityIdInput"></a>

```csharp
public string UserAssignedIdentityIdInput { get; }
```

- *Type:* string

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; }
```

- *Type:* string

---

##### `UserAssignedIdentityId`<sup>Required</sup> <a name="UserAssignedIdentityId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.userAssignedIdentityId"></a>

```csharp
public string UserAssignedIdentityId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.internalValue"></a>

```csharp
public StorageAccountCustomerManagedKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a>

---


### StorageAccountIdentityOutputReference <a name="StorageAccountIdentityOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.internalValue"></a>

```csharp
public StorageAccountIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a>

---


### StorageAccountImmutabilityPolicyOutputReference <a name="StorageAccountImmutabilityPolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountImmutabilityPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.allowProtectedAppendWritesInput">AllowProtectedAppendWritesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.periodSinceCreationInDaysInput">PeriodSinceCreationInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.allowProtectedAppendWrites">AllowProtectedAppendWrites</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.periodSinceCreationInDays">PeriodSinceCreationInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowProtectedAppendWritesInput`<sup>Optional</sup> <a name="AllowProtectedAppendWritesInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.allowProtectedAppendWritesInput"></a>

```csharp
public object AllowProtectedAppendWritesInput { get; }
```

- *Type:* object

---

##### `PeriodSinceCreationInDaysInput`<sup>Optional</sup> <a name="PeriodSinceCreationInDaysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.periodSinceCreationInDaysInput"></a>

```csharp
public double PeriodSinceCreationInDaysInput { get; }
```

- *Type:* double

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `AllowProtectedAppendWrites`<sup>Required</sup> <a name="AllowProtectedAppendWrites" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.allowProtectedAppendWrites"></a>

```csharp
public object AllowProtectedAppendWrites { get; }
```

- *Type:* object

---

##### `PeriodSinceCreationInDays`<sup>Required</sup> <a name="PeriodSinceCreationInDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.periodSinceCreationInDays"></a>

```csharp
public double PeriodSinceCreationInDays { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.internalValue"></a>

```csharp
public StorageAccountImmutabilityPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a>

---


### StorageAccountNetworkRulesOutputReference <a name="StorageAccountNetworkRulesOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountNetworkRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrivateLinkAccess` <a name="PutPrivateLinkAccess" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.putPrivateLinkAccess"></a>

```csharp
private void PutPrivateLinkAccess(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.putPrivateLinkAccess.parameter.value"></a>

- *Type:* object

---

##### `ResetBypass` <a name="ResetBypass" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetBypass"></a>

```csharp
private void ResetBypass()
```

##### `ResetIpRules` <a name="ResetIpRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetIpRules"></a>

```csharp
private void ResetIpRules()
```

##### `ResetPrivateLinkAccess` <a name="ResetPrivateLinkAccess" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetPrivateLinkAccess"></a>

```csharp
private void ResetPrivateLinkAccess()
```

##### `ResetVirtualNetworkSubnetIds` <a name="ResetVirtualNetworkSubnetIds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetVirtualNetworkSubnetIds"></a>

```csharp
private void ResetVirtualNetworkSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.privateLinkAccess">PrivateLinkAccess</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList">StorageAccountNetworkRulesPrivateLinkAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.bypassInput">BypassInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.defaultActionInput">DefaultActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.ipRulesInput">IpRulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.privateLinkAccessInput">PrivateLinkAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.virtualNetworkSubnetIdsInput">VirtualNetworkSubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.bypass">Bypass</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.defaultAction">DefaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.ipRules">IpRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.virtualNetworkSubnetIds">VirtualNetworkSubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrivateLinkAccess`<sup>Required</sup> <a name="PrivateLinkAccess" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.privateLinkAccess"></a>

```csharp
public StorageAccountNetworkRulesPrivateLinkAccessList PrivateLinkAccess { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList">StorageAccountNetworkRulesPrivateLinkAccessList</a>

---

##### `BypassInput`<sup>Optional</sup> <a name="BypassInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.bypassInput"></a>

```csharp
public string[] BypassInput { get; }
```

- *Type:* string[]

---

##### `DefaultActionInput`<sup>Optional</sup> <a name="DefaultActionInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.defaultActionInput"></a>

```csharp
public string DefaultActionInput { get; }
```

- *Type:* string

---

##### `IpRulesInput`<sup>Optional</sup> <a name="IpRulesInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.ipRulesInput"></a>

```csharp
public string[] IpRulesInput { get; }
```

- *Type:* string[]

---

##### `PrivateLinkAccessInput`<sup>Optional</sup> <a name="PrivateLinkAccessInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.privateLinkAccessInput"></a>

```csharp
public object PrivateLinkAccessInput { get; }
```

- *Type:* object

---

##### `VirtualNetworkSubnetIdsInput`<sup>Optional</sup> <a name="VirtualNetworkSubnetIdsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.virtualNetworkSubnetIdsInput"></a>

```csharp
public string[] VirtualNetworkSubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `Bypass`<sup>Required</sup> <a name="Bypass" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.bypass"></a>

```csharp
public string[] Bypass { get; }
```

- *Type:* string[]

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.defaultAction"></a>

```csharp
public string DefaultAction { get; }
```

- *Type:* string

---

##### `IpRules`<sup>Required</sup> <a name="IpRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.ipRules"></a>

```csharp
public string[] IpRules { get; }
```

- *Type:* string[]

---

##### `VirtualNetworkSubnetIds`<sup>Required</sup> <a name="VirtualNetworkSubnetIds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.virtualNetworkSubnetIds"></a>

```csharp
public string[] VirtualNetworkSubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.internalValue"></a>

```csharp
public StorageAccountNetworkRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a>

---


### StorageAccountNetworkRulesPrivateLinkAccessList <a name="StorageAccountNetworkRulesPrivateLinkAccessList" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountNetworkRulesPrivateLinkAccessList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.get"></a>

```csharp
private StorageAccountNetworkRulesPrivateLinkAccessOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StorageAccountNetworkRulesPrivateLinkAccessOutputReference <a name="StorageAccountNetworkRulesPrivateLinkAccessOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountNetworkRulesPrivateLinkAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpointTenantId` <a name="ResetEndpointTenantId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.resetEndpointTenantId"></a>

```csharp
private void ResetEndpointTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointResourceIdInput">EndpointResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointTenantIdInput">EndpointTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointResourceId">EndpointResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointTenantId">EndpointTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointResourceIdInput`<sup>Optional</sup> <a name="EndpointResourceIdInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointResourceIdInput"></a>

```csharp
public string EndpointResourceIdInput { get; }
```

- *Type:* string

---

##### `EndpointTenantIdInput`<sup>Optional</sup> <a name="EndpointTenantIdInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointTenantIdInput"></a>

```csharp
public string EndpointTenantIdInput { get; }
```

- *Type:* string

---

##### `EndpointResourceId`<sup>Required</sup> <a name="EndpointResourceId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointResourceId"></a>

```csharp
public string EndpointResourceId { get; }
```

- *Type:* string

---

##### `EndpointTenantId`<sup>Required</sup> <a name="EndpointTenantId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointTenantId"></a>

```csharp
public string EndpointTenantId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StorageAccountQueuePropertiesCorsRuleList <a name="StorageAccountQueuePropertiesCorsRuleList" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountQueuePropertiesCorsRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.get"></a>

```csharp
private StorageAccountQueuePropertiesCorsRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StorageAccountQueuePropertiesCorsRuleOutputReference <a name="StorageAccountQueuePropertiesCorsRuleOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountQueuePropertiesCorsRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedHeadersInput">AllowedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedMethodsInput">AllowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.exposedHeadersInput">ExposedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput">MaxAgeInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedHeaders">AllowedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.exposedHeaders">ExposedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedHeadersInput`<sup>Optional</sup> <a name="AllowedHeadersInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedHeadersInput"></a>

```csharp
public string[] AllowedHeadersInput { get; }
```

- *Type:* string[]

---

##### `AllowedMethodsInput`<sup>Optional</sup> <a name="AllowedMethodsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedMethodsInput"></a>

```csharp
public string[] AllowedMethodsInput { get; }
```

- *Type:* string[]

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedOriginsInput"></a>

```csharp
public string[] AllowedOriginsInput { get; }
```

- *Type:* string[]

---

##### `ExposedHeadersInput`<sup>Optional</sup> <a name="ExposedHeadersInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.exposedHeadersInput"></a>

```csharp
public string[] ExposedHeadersInput { get; }
```

- *Type:* string[]

---

##### `MaxAgeInSecondsInput`<sup>Optional</sup> <a name="MaxAgeInSecondsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput"></a>

```csharp
public double MaxAgeInSecondsInput { get; }
```

- *Type:* double

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedHeaders"></a>

```csharp
public string[] AllowedHeaders { get; }
```

- *Type:* string[]

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; }
```

- *Type:* string[]

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; }
```

- *Type:* string[]

---

##### `ExposedHeaders`<sup>Required</sup> <a name="ExposedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.exposedHeaders"></a>

```csharp
public string[] ExposedHeaders { get; }
```

- *Type:* string[]

---

##### `MaxAgeInSeconds`<sup>Required</sup> <a name="MaxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.maxAgeInSeconds"></a>

```csharp
public double MaxAgeInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StorageAccountQueuePropertiesHourMetricsOutputReference <a name="StorageAccountQueuePropertiesHourMetricsOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountQueuePropertiesHourMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeApis` <a name="ResetIncludeApis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resetIncludeApis"></a>

```csharp
private void ResetIncludeApis()
```

##### `ResetRetentionPolicyDays` <a name="ResetRetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resetRetentionPolicyDays"></a>

```csharp
private void ResetRetentionPolicyDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.includeApisInput">IncludeApisInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.retentionPolicyDaysInput">RetentionPolicyDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.includeApis">IncludeApis</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IncludeApisInput`<sup>Optional</sup> <a name="IncludeApisInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.includeApisInput"></a>

```csharp
public object IncludeApisInput { get; }
```

- *Type:* object

---

##### `RetentionPolicyDaysInput`<sup>Optional</sup> <a name="RetentionPolicyDaysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.retentionPolicyDaysInput"></a>

```csharp
public double RetentionPolicyDaysInput { get; }
```

- *Type:* double

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `IncludeApis`<sup>Required</sup> <a name="IncludeApis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.includeApis"></a>

```csharp
public object IncludeApis { get; }
```

- *Type:* object

---

##### `RetentionPolicyDays`<sup>Required</sup> <a name="RetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.retentionPolicyDays"></a>

```csharp
public double RetentionPolicyDays { get; }
```

- *Type:* double

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.internalValue"></a>

```csharp
public StorageAccountQueuePropertiesHourMetrics InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a>

---


### StorageAccountQueuePropertiesLoggingOutputReference <a name="StorageAccountQueuePropertiesLoggingOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountQueuePropertiesLoggingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRetentionPolicyDays` <a name="ResetRetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.resetRetentionPolicyDays"></a>

```csharp
private void ResetRetentionPolicyDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.deleteInput">DeleteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.readInput">ReadInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.retentionPolicyDaysInput">RetentionPolicyDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.writeInput">WriteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.delete">Delete</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.read">Read</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.write">Write</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.deleteInput"></a>

```csharp
public object DeleteInput { get; }
```

- *Type:* object

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.readInput"></a>

```csharp
public object ReadInput { get; }
```

- *Type:* object

---

##### `RetentionPolicyDaysInput`<sup>Optional</sup> <a name="RetentionPolicyDaysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.retentionPolicyDaysInput"></a>

```csharp
public double RetentionPolicyDaysInput { get; }
```

- *Type:* double

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `WriteInput`<sup>Optional</sup> <a name="WriteInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.writeInput"></a>

```csharp
public object WriteInput { get; }
```

- *Type:* object

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.delete"></a>

```csharp
public object Delete { get; }
```

- *Type:* object

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.read"></a>

```csharp
public object Read { get; }
```

- *Type:* object

---

##### `RetentionPolicyDays`<sup>Required</sup> <a name="RetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.retentionPolicyDays"></a>

```csharp
public double RetentionPolicyDays { get; }
```

- *Type:* double

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.write"></a>

```csharp
public object Write { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.internalValue"></a>

```csharp
public StorageAccountQueuePropertiesLogging InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a>

---


### StorageAccountQueuePropertiesMinuteMetricsOutputReference <a name="StorageAccountQueuePropertiesMinuteMetricsOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountQueuePropertiesMinuteMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeApis` <a name="ResetIncludeApis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resetIncludeApis"></a>

```csharp
private void ResetIncludeApis()
```

##### `ResetRetentionPolicyDays` <a name="ResetRetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resetRetentionPolicyDays"></a>

```csharp
private void ResetRetentionPolicyDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.includeApisInput">IncludeApisInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.retentionPolicyDaysInput">RetentionPolicyDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.includeApis">IncludeApis</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IncludeApisInput`<sup>Optional</sup> <a name="IncludeApisInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.includeApisInput"></a>

```csharp
public object IncludeApisInput { get; }
```

- *Type:* object

---

##### `RetentionPolicyDaysInput`<sup>Optional</sup> <a name="RetentionPolicyDaysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.retentionPolicyDaysInput"></a>

```csharp
public double RetentionPolicyDaysInput { get; }
```

- *Type:* double

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `IncludeApis`<sup>Required</sup> <a name="IncludeApis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.includeApis"></a>

```csharp
public object IncludeApis { get; }
```

- *Type:* object

---

##### `RetentionPolicyDays`<sup>Required</sup> <a name="RetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.retentionPolicyDays"></a>

```csharp
public double RetentionPolicyDays { get; }
```

- *Type:* double

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.internalValue"></a>

```csharp
public StorageAccountQueuePropertiesMinuteMetrics InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a>

---


### StorageAccountQueuePropertiesOutputReference <a name="StorageAccountQueuePropertiesOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountQueuePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCorsRule` <a name="PutCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putCorsRule"></a>

```csharp
private void PutCorsRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putCorsRule.parameter.value"></a>

- *Type:* object

---

##### `PutHourMetrics` <a name="PutHourMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putHourMetrics"></a>

```csharp
private void PutHourMetrics(StorageAccountQueuePropertiesHourMetrics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putHourMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a>

---

##### `PutLogging` <a name="PutLogging" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putLogging"></a>

```csharp
private void PutLogging(StorageAccountQueuePropertiesLogging Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a>

---

##### `PutMinuteMetrics` <a name="PutMinuteMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putMinuteMetrics"></a>

```csharp
private void PutMinuteMetrics(StorageAccountQueuePropertiesMinuteMetrics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putMinuteMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a>

---

##### `ResetCorsRule` <a name="ResetCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetCorsRule"></a>

```csharp
private void ResetCorsRule()
```

##### `ResetHourMetrics` <a name="ResetHourMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetHourMetrics"></a>

```csharp
private void ResetHourMetrics()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetLogging"></a>

```csharp
private void ResetLogging()
```

##### `ResetMinuteMetrics` <a name="ResetMinuteMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetMinuteMetrics"></a>

```csharp
private void ResetMinuteMetrics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.corsRule">CorsRule</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList">StorageAccountQueuePropertiesCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.hourMetrics">HourMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference">StorageAccountQueuePropertiesHourMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference">StorageAccountQueuePropertiesLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.minuteMetrics">MinuteMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference">StorageAccountQueuePropertiesMinuteMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.corsRuleInput">CorsRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.hourMetricsInput">HourMetricsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.loggingInput">LoggingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.minuteMetricsInput">MinuteMetricsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CorsRule`<sup>Required</sup> <a name="CorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.corsRule"></a>

```csharp
public StorageAccountQueuePropertiesCorsRuleList CorsRule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList">StorageAccountQueuePropertiesCorsRuleList</a>

---

##### `HourMetrics`<sup>Required</sup> <a name="HourMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.hourMetrics"></a>

```csharp
public StorageAccountQueuePropertiesHourMetricsOutputReference HourMetrics { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference">StorageAccountQueuePropertiesHourMetricsOutputReference</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.logging"></a>

```csharp
public StorageAccountQueuePropertiesLoggingOutputReference Logging { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference">StorageAccountQueuePropertiesLoggingOutputReference</a>

---

##### `MinuteMetrics`<sup>Required</sup> <a name="MinuteMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.minuteMetrics"></a>

```csharp
public StorageAccountQueuePropertiesMinuteMetricsOutputReference MinuteMetrics { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference">StorageAccountQueuePropertiesMinuteMetricsOutputReference</a>

---

##### `CorsRuleInput`<sup>Optional</sup> <a name="CorsRuleInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.corsRuleInput"></a>

```csharp
public object CorsRuleInput { get; }
```

- *Type:* object

---

##### `HourMetricsInput`<sup>Optional</sup> <a name="HourMetricsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.hourMetricsInput"></a>

```csharp
public StorageAccountQueuePropertiesHourMetrics HourMetricsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a>

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.loggingInput"></a>

```csharp
public StorageAccountQueuePropertiesLogging LoggingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a>

---

##### `MinuteMetricsInput`<sup>Optional</sup> <a name="MinuteMetricsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.minuteMetricsInput"></a>

```csharp
public StorageAccountQueuePropertiesMinuteMetrics MinuteMetricsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.internalValue"></a>

```csharp
public StorageAccountQueueProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a>

---


### StorageAccountRoutingOutputReference <a name="StorageAccountRoutingOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountRoutingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChoice` <a name="ResetChoice" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resetChoice"></a>

```csharp
private void ResetChoice()
```

##### `ResetPublishInternetEndpoints` <a name="ResetPublishInternetEndpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resetPublishInternetEndpoints"></a>

```csharp
private void ResetPublishInternetEndpoints()
```

##### `ResetPublishMicrosoftEndpoints` <a name="ResetPublishMicrosoftEndpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resetPublishMicrosoftEndpoints"></a>

```csharp
private void ResetPublishMicrosoftEndpoints()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.choiceInput">ChoiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishInternetEndpointsInput">PublishInternetEndpointsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishMicrosoftEndpointsInput">PublishMicrosoftEndpointsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.choice">Choice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishInternetEndpoints">PublishInternetEndpoints</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishMicrosoftEndpoints">PublishMicrosoftEndpoints</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChoiceInput`<sup>Optional</sup> <a name="ChoiceInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.choiceInput"></a>

```csharp
public string ChoiceInput { get; }
```

- *Type:* string

---

##### `PublishInternetEndpointsInput`<sup>Optional</sup> <a name="PublishInternetEndpointsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishInternetEndpointsInput"></a>

```csharp
public object PublishInternetEndpointsInput { get; }
```

- *Type:* object

---

##### `PublishMicrosoftEndpointsInput`<sup>Optional</sup> <a name="PublishMicrosoftEndpointsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishMicrosoftEndpointsInput"></a>

```csharp
public object PublishMicrosoftEndpointsInput { get; }
```

- *Type:* object

---

##### `Choice`<sup>Required</sup> <a name="Choice" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.choice"></a>

```csharp
public string Choice { get; }
```

- *Type:* string

---

##### `PublishInternetEndpoints`<sup>Required</sup> <a name="PublishInternetEndpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishInternetEndpoints"></a>

```csharp
public object PublishInternetEndpoints { get; }
```

- *Type:* object

---

##### `PublishMicrosoftEndpoints`<sup>Required</sup> <a name="PublishMicrosoftEndpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishMicrosoftEndpoints"></a>

```csharp
public object PublishMicrosoftEndpoints { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.internalValue"></a>

```csharp
public StorageAccountRouting InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a>

---


### StorageAccountSasPolicyOutputReference <a name="StorageAccountSasPolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountSasPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpirationAction` <a name="ResetExpirationAction" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.resetExpirationAction"></a>

```csharp
private void ResetExpirationAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationActionInput">ExpirationActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationPeriodInput">ExpirationPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationAction">ExpirationAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationPeriod">ExpirationPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpirationActionInput`<sup>Optional</sup> <a name="ExpirationActionInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationActionInput"></a>

```csharp
public string ExpirationActionInput { get; }
```

- *Type:* string

---

##### `ExpirationPeriodInput`<sup>Optional</sup> <a name="ExpirationPeriodInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationPeriodInput"></a>

```csharp
public string ExpirationPeriodInput { get; }
```

- *Type:* string

---

##### `ExpirationAction`<sup>Required</sup> <a name="ExpirationAction" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationAction"></a>

```csharp
public string ExpirationAction { get; }
```

- *Type:* string

---

##### `ExpirationPeriod`<sup>Required</sup> <a name="ExpirationPeriod" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationPeriod"></a>

```csharp
public string ExpirationPeriod { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.internalValue"></a>

```csharp
public StorageAccountSasPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a>

---


### StorageAccountSharePropertiesCorsRuleList <a name="StorageAccountSharePropertiesCorsRuleList" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountSharePropertiesCorsRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.get"></a>

```csharp
private StorageAccountSharePropertiesCorsRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StorageAccountSharePropertiesCorsRuleOutputReference <a name="StorageAccountSharePropertiesCorsRuleOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountSharePropertiesCorsRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedHeadersInput">AllowedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedMethodsInput">AllowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.exposedHeadersInput">ExposedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput">MaxAgeInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedHeaders">AllowedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.exposedHeaders">ExposedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedHeadersInput`<sup>Optional</sup> <a name="AllowedHeadersInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedHeadersInput"></a>

```csharp
public string[] AllowedHeadersInput { get; }
```

- *Type:* string[]

---

##### `AllowedMethodsInput`<sup>Optional</sup> <a name="AllowedMethodsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedMethodsInput"></a>

```csharp
public string[] AllowedMethodsInput { get; }
```

- *Type:* string[]

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedOriginsInput"></a>

```csharp
public string[] AllowedOriginsInput { get; }
```

- *Type:* string[]

---

##### `ExposedHeadersInput`<sup>Optional</sup> <a name="ExposedHeadersInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.exposedHeadersInput"></a>

```csharp
public string[] ExposedHeadersInput { get; }
```

- *Type:* string[]

---

##### `MaxAgeInSecondsInput`<sup>Optional</sup> <a name="MaxAgeInSecondsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput"></a>

```csharp
public double MaxAgeInSecondsInput { get; }
```

- *Type:* double

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedHeaders"></a>

```csharp
public string[] AllowedHeaders { get; }
```

- *Type:* string[]

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; }
```

- *Type:* string[]

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; }
```

- *Type:* string[]

---

##### `ExposedHeaders`<sup>Required</sup> <a name="ExposedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.exposedHeaders"></a>

```csharp
public string[] ExposedHeaders { get; }
```

- *Type:* string[]

---

##### `MaxAgeInSeconds`<sup>Required</sup> <a name="MaxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.maxAgeInSeconds"></a>

```csharp
public double MaxAgeInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StorageAccountSharePropertiesOutputReference <a name="StorageAccountSharePropertiesOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountSharePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCorsRule` <a name="PutCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putCorsRule"></a>

```csharp
private void PutCorsRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putCorsRule.parameter.value"></a>

- *Type:* object

---

##### `PutRetentionPolicy` <a name="PutRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putRetentionPolicy"></a>

```csharp
private void PutRetentionPolicy(StorageAccountSharePropertiesRetentionPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a>

---

##### `PutSmb` <a name="PutSmb" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putSmb"></a>

```csharp
private void PutSmb(StorageAccountSharePropertiesSmb Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putSmb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a>

---

##### `ResetCorsRule` <a name="ResetCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resetCorsRule"></a>

```csharp
private void ResetCorsRule()
```

##### `ResetRetentionPolicy` <a name="ResetRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resetRetentionPolicy"></a>

```csharp
private void ResetRetentionPolicy()
```

##### `ResetSmb` <a name="ResetSmb" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resetSmb"></a>

```csharp
private void ResetSmb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.corsRule">CorsRule</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList">StorageAccountSharePropertiesCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference">StorageAccountSharePropertiesRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.smb">Smb</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference">StorageAccountSharePropertiesSmbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.corsRuleInput">CorsRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.retentionPolicyInput">RetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.smbInput">SmbInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CorsRule`<sup>Required</sup> <a name="CorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.corsRule"></a>

```csharp
public StorageAccountSharePropertiesCorsRuleList CorsRule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList">StorageAccountSharePropertiesCorsRuleList</a>

---

##### `RetentionPolicy`<sup>Required</sup> <a name="RetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.retentionPolicy"></a>

```csharp
public StorageAccountSharePropertiesRetentionPolicyOutputReference RetentionPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference">StorageAccountSharePropertiesRetentionPolicyOutputReference</a>

---

##### `Smb`<sup>Required</sup> <a name="Smb" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.smb"></a>

```csharp
public StorageAccountSharePropertiesSmbOutputReference Smb { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference">StorageAccountSharePropertiesSmbOutputReference</a>

---

##### `CorsRuleInput`<sup>Optional</sup> <a name="CorsRuleInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.corsRuleInput"></a>

```csharp
public object CorsRuleInput { get; }
```

- *Type:* object

---

##### `RetentionPolicyInput`<sup>Optional</sup> <a name="RetentionPolicyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.retentionPolicyInput"></a>

```csharp
public StorageAccountSharePropertiesRetentionPolicy RetentionPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a>

---

##### `SmbInput`<sup>Optional</sup> <a name="SmbInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.smbInput"></a>

```csharp
public StorageAccountSharePropertiesSmb SmbInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.internalValue"></a>

```csharp
public StorageAccountShareProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a>

---


### StorageAccountSharePropertiesRetentionPolicyOutputReference <a name="StorageAccountSharePropertiesRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountSharePropertiesRetentionPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.resetDays"></a>

```csharp
private void ResetDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.daysInput">DaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.days">Days</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.daysInput"></a>

```csharp
public double DaysInput { get; }
```

- *Type:* double

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.days"></a>

```csharp
public double Days { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.internalValue"></a>

```csharp
public StorageAccountSharePropertiesRetentionPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a>

---


### StorageAccountSharePropertiesSmbOutputReference <a name="StorageAccountSharePropertiesSmbOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountSharePropertiesSmbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationTypes` <a name="ResetAuthenticationTypes" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetAuthenticationTypes"></a>

```csharp
private void ResetAuthenticationTypes()
```

##### `ResetChannelEncryptionType` <a name="ResetChannelEncryptionType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetChannelEncryptionType"></a>

```csharp
private void ResetChannelEncryptionType()
```

##### `ResetKerberosTicketEncryptionType` <a name="ResetKerberosTicketEncryptionType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetKerberosTicketEncryptionType"></a>

```csharp
private void ResetKerberosTicketEncryptionType()
```

##### `ResetMultichannelEnabled` <a name="ResetMultichannelEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetMultichannelEnabled"></a>

```csharp
private void ResetMultichannelEnabled()
```

##### `ResetVersions` <a name="ResetVersions" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetVersions"></a>

```csharp
private void ResetVersions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.authenticationTypesInput">AuthenticationTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.channelEncryptionTypeInput">ChannelEncryptionTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.kerberosTicketEncryptionTypeInput">KerberosTicketEncryptionTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.multichannelEnabledInput">MultichannelEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.versionsInput">VersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.authenticationTypes">AuthenticationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.channelEncryptionType">ChannelEncryptionType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.kerberosTicketEncryptionType">KerberosTicketEncryptionType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.multichannelEnabled">MultichannelEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.versions">Versions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationTypesInput`<sup>Optional</sup> <a name="AuthenticationTypesInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.authenticationTypesInput"></a>

```csharp
public string[] AuthenticationTypesInput { get; }
```

- *Type:* string[]

---

##### `ChannelEncryptionTypeInput`<sup>Optional</sup> <a name="ChannelEncryptionTypeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.channelEncryptionTypeInput"></a>

```csharp
public string[] ChannelEncryptionTypeInput { get; }
```

- *Type:* string[]

---

##### `KerberosTicketEncryptionTypeInput`<sup>Optional</sup> <a name="KerberosTicketEncryptionTypeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.kerberosTicketEncryptionTypeInput"></a>

```csharp
public string[] KerberosTicketEncryptionTypeInput { get; }
```

- *Type:* string[]

---

##### `MultichannelEnabledInput`<sup>Optional</sup> <a name="MultichannelEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.multichannelEnabledInput"></a>

```csharp
public object MultichannelEnabledInput { get; }
```

- *Type:* object

---

##### `VersionsInput`<sup>Optional</sup> <a name="VersionsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.versionsInput"></a>

```csharp
public string[] VersionsInput { get; }
```

- *Type:* string[]

---

##### `AuthenticationTypes`<sup>Required</sup> <a name="AuthenticationTypes" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.authenticationTypes"></a>

```csharp
public string[] AuthenticationTypes { get; }
```

- *Type:* string[]

---

##### `ChannelEncryptionType`<sup>Required</sup> <a name="ChannelEncryptionType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.channelEncryptionType"></a>

```csharp
public string[] ChannelEncryptionType { get; }
```

- *Type:* string[]

---

##### `KerberosTicketEncryptionType`<sup>Required</sup> <a name="KerberosTicketEncryptionType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.kerberosTicketEncryptionType"></a>

```csharp
public string[] KerberosTicketEncryptionType { get; }
```

- *Type:* string[]

---

##### `MultichannelEnabled`<sup>Required</sup> <a name="MultichannelEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.multichannelEnabled"></a>

```csharp
public object MultichannelEnabled { get; }
```

- *Type:* object

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.versions"></a>

```csharp
public string[] Versions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.internalValue"></a>

```csharp
public StorageAccountSharePropertiesSmb InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a>

---


### StorageAccountStaticWebsiteOutputReference <a name="StorageAccountStaticWebsiteOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountStaticWebsiteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetError404Document` <a name="ResetError404Document" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resetError404Document"></a>

```csharp
private void ResetError404Document()
```

##### `ResetIndexDocument` <a name="ResetIndexDocument" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resetIndexDocument"></a>

```csharp
private void ResetIndexDocument()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.error404DocumentInput">Error404DocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.indexDocumentInput">IndexDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.error404Document">Error404Document</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.indexDocument">IndexDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Error404DocumentInput`<sup>Optional</sup> <a name="Error404DocumentInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.error404DocumentInput"></a>

```csharp
public string Error404DocumentInput { get; }
```

- *Type:* string

---

##### `IndexDocumentInput`<sup>Optional</sup> <a name="IndexDocumentInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.indexDocumentInput"></a>

```csharp
public string IndexDocumentInput { get; }
```

- *Type:* string

---

##### `Error404Document`<sup>Required</sup> <a name="Error404Document" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.error404Document"></a>

```csharp
public string Error404Document { get; }
```

- *Type:* string

---

##### `IndexDocument`<sup>Required</sup> <a name="IndexDocument" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.indexDocument"></a>

```csharp
public string IndexDocument { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.internalValue"></a>

```csharp
public StorageAccountStaticWebsite InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a>

---


### StorageAccountTimeoutsOutputReference <a name="StorageAccountTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



