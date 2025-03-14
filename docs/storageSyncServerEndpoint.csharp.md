# `storageSyncServerEndpoint` Submodule <a name="`storageSyncServerEndpoint` Submodule" id="@cdktf/provider-azurerm.storageSyncServerEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageSyncServerEndpoint <a name="StorageSyncServerEndpoint" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint azurerm_storage_sync_server_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageSyncServerEndpoint(Construct Scope, string Id, StorageSyncServerEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig">StorageSyncServerEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig">StorageSyncServerEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetCloudTieringEnabled">ResetCloudTieringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetInitialDownloadPolicy">ResetInitialDownloadPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetLocalCacheMode">ResetLocalCacheMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetTierFilesOlderThanDays">ResetTierFilesOlderThanDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetVolumeFreeSpacePercent">ResetVolumeFreeSpacePercent</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(StorageSyncServerEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts">StorageSyncServerEndpointTimeouts</a>

---

##### `ResetCloudTieringEnabled` <a name="ResetCloudTieringEnabled" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetCloudTieringEnabled"></a>

```csharp
private void ResetCloudTieringEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInitialDownloadPolicy` <a name="ResetInitialDownloadPolicy" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetInitialDownloadPolicy"></a>

```csharp
private void ResetInitialDownloadPolicy()
```

##### `ResetLocalCacheMode` <a name="ResetLocalCacheMode" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetLocalCacheMode"></a>

```csharp
private void ResetLocalCacheMode()
```

##### `ResetTierFilesOlderThanDays` <a name="ResetTierFilesOlderThanDays" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetTierFilesOlderThanDays"></a>

```csharp
private void ResetTierFilesOlderThanDays()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVolumeFreeSpacePercent` <a name="ResetVolumeFreeSpacePercent" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetVolumeFreeSpacePercent"></a>

```csharp
private void ResetVolumeFreeSpacePercent()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StorageSyncServerEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StorageSyncServerEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StorageSyncServerEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StorageSyncServerEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StorageSyncServerEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StorageSyncServerEndpoint resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageSyncServerEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageSyncServerEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StorageSyncServerEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference">StorageSyncServerEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.cloudTieringEnabledInput">CloudTieringEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.initialDownloadPolicyInput">InitialDownloadPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.localCacheModeInput">LocalCacheModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.registeredServerIdInput">RegisteredServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.serverLocalPathInput">ServerLocalPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.storageSyncGroupIdInput">StorageSyncGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.tierFilesOlderThanDaysInput">TierFilesOlderThanDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.volumeFreeSpacePercentInput">VolumeFreeSpacePercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.cloudTieringEnabled">CloudTieringEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.initialDownloadPolicy">InitialDownloadPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.localCacheMode">LocalCacheMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.registeredServerId">RegisteredServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.serverLocalPath">ServerLocalPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.storageSyncGroupId">StorageSyncGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.tierFilesOlderThanDays">TierFilesOlderThanDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.volumeFreeSpacePercent">VolumeFreeSpacePercent</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.timeouts"></a>

```csharp
public StorageSyncServerEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference">StorageSyncServerEndpointTimeoutsOutputReference</a>

---

##### `CloudTieringEnabledInput`<sup>Optional</sup> <a name="CloudTieringEnabledInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.cloudTieringEnabledInput"></a>

```csharp
public object CloudTieringEnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InitialDownloadPolicyInput`<sup>Optional</sup> <a name="InitialDownloadPolicyInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.initialDownloadPolicyInput"></a>

```csharp
public string InitialDownloadPolicyInput { get; }
```

- *Type:* string

---

##### `LocalCacheModeInput`<sup>Optional</sup> <a name="LocalCacheModeInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.localCacheModeInput"></a>

```csharp
public string LocalCacheModeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegisteredServerIdInput`<sup>Optional</sup> <a name="RegisteredServerIdInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.registeredServerIdInput"></a>

```csharp
public string RegisteredServerIdInput { get; }
```

- *Type:* string

---

##### `ServerLocalPathInput`<sup>Optional</sup> <a name="ServerLocalPathInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.serverLocalPathInput"></a>

```csharp
public string ServerLocalPathInput { get; }
```

- *Type:* string

---

##### `StorageSyncGroupIdInput`<sup>Optional</sup> <a name="StorageSyncGroupIdInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.storageSyncGroupIdInput"></a>

```csharp
public string StorageSyncGroupIdInput { get; }
```

- *Type:* string

---

##### `TierFilesOlderThanDaysInput`<sup>Optional</sup> <a name="TierFilesOlderThanDaysInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.tierFilesOlderThanDaysInput"></a>

```csharp
public double TierFilesOlderThanDaysInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VolumeFreeSpacePercentInput`<sup>Optional</sup> <a name="VolumeFreeSpacePercentInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.volumeFreeSpacePercentInput"></a>

```csharp
public double VolumeFreeSpacePercentInput { get; }
```

- *Type:* double

---

##### `CloudTieringEnabled`<sup>Required</sup> <a name="CloudTieringEnabled" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.cloudTieringEnabled"></a>

```csharp
public object CloudTieringEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InitialDownloadPolicy`<sup>Required</sup> <a name="InitialDownloadPolicy" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.initialDownloadPolicy"></a>

```csharp
public string InitialDownloadPolicy { get; }
```

- *Type:* string

---

##### `LocalCacheMode`<sup>Required</sup> <a name="LocalCacheMode" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.localCacheMode"></a>

```csharp
public string LocalCacheMode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RegisteredServerId`<sup>Required</sup> <a name="RegisteredServerId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.registeredServerId"></a>

```csharp
public string RegisteredServerId { get; }
```

- *Type:* string

---

##### `ServerLocalPath`<sup>Required</sup> <a name="ServerLocalPath" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.serverLocalPath"></a>

```csharp
public string ServerLocalPath { get; }
```

- *Type:* string

---

##### `StorageSyncGroupId`<sup>Required</sup> <a name="StorageSyncGroupId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.storageSyncGroupId"></a>

```csharp
public string StorageSyncGroupId { get; }
```

- *Type:* string

---

##### `TierFilesOlderThanDays`<sup>Required</sup> <a name="TierFilesOlderThanDays" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.tierFilesOlderThanDays"></a>

```csharp
public double TierFilesOlderThanDays { get; }
```

- *Type:* double

---

##### `VolumeFreeSpacePercent`<sup>Required</sup> <a name="VolumeFreeSpacePercent" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.volumeFreeSpacePercent"></a>

```csharp
public double VolumeFreeSpacePercent { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageSyncServerEndpointConfig <a name="StorageSyncServerEndpointConfig" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageSyncServerEndpointConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string RegisteredServerId,
    string ServerLocalPath,
    string StorageSyncGroupId,
    object CloudTieringEnabled = null,
    string Id = null,
    string InitialDownloadPolicy = null,
    string LocalCacheMode = null,
    double TierFilesOlderThanDays = null,
    StorageSyncServerEndpointTimeouts Timeouts = null,
    double VolumeFreeSpacePercent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#name StorageSyncServerEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.registeredServerId">RegisteredServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#registered_server_id StorageSyncServerEndpoint#registered_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.serverLocalPath">ServerLocalPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#server_local_path StorageSyncServerEndpoint#server_local_path}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.storageSyncGroupId">StorageSyncGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#storage_sync_group_id StorageSyncServerEndpoint#storage_sync_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.cloudTieringEnabled">CloudTieringEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#cloud_tiering_enabled StorageSyncServerEndpoint#cloud_tiering_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#id StorageSyncServerEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.initialDownloadPolicy">InitialDownloadPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#initial_download_policy StorageSyncServerEndpoint#initial_download_policy}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.localCacheMode">LocalCacheMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#local_cache_mode StorageSyncServerEndpoint#local_cache_mode}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.tierFilesOlderThanDays">TierFilesOlderThanDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#tier_files_older_than_days StorageSyncServerEndpoint#tier_files_older_than_days}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts">StorageSyncServerEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.volumeFreeSpacePercent">VolumeFreeSpacePercent</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#volume_free_space_percent StorageSyncServerEndpoint#volume_free_space_percent}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#name StorageSyncServerEndpoint#name}.

---

##### `RegisteredServerId`<sup>Required</sup> <a name="RegisteredServerId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.registeredServerId"></a>

```csharp
public string RegisteredServerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#registered_server_id StorageSyncServerEndpoint#registered_server_id}.

---

##### `ServerLocalPath`<sup>Required</sup> <a name="ServerLocalPath" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.serverLocalPath"></a>

```csharp
public string ServerLocalPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#server_local_path StorageSyncServerEndpoint#server_local_path}.

---

##### `StorageSyncGroupId`<sup>Required</sup> <a name="StorageSyncGroupId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.storageSyncGroupId"></a>

```csharp
public string StorageSyncGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#storage_sync_group_id StorageSyncServerEndpoint#storage_sync_group_id}.

---

##### `CloudTieringEnabled`<sup>Optional</sup> <a name="CloudTieringEnabled" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.cloudTieringEnabled"></a>

```csharp
public object CloudTieringEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#cloud_tiering_enabled StorageSyncServerEndpoint#cloud_tiering_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#id StorageSyncServerEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitialDownloadPolicy`<sup>Optional</sup> <a name="InitialDownloadPolicy" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.initialDownloadPolicy"></a>

```csharp
public string InitialDownloadPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#initial_download_policy StorageSyncServerEndpoint#initial_download_policy}.

---

##### `LocalCacheMode`<sup>Optional</sup> <a name="LocalCacheMode" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.localCacheMode"></a>

```csharp
public string LocalCacheMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#local_cache_mode StorageSyncServerEndpoint#local_cache_mode}.

---

##### `TierFilesOlderThanDays`<sup>Optional</sup> <a name="TierFilesOlderThanDays" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.tierFilesOlderThanDays"></a>

```csharp
public double TierFilesOlderThanDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#tier_files_older_than_days StorageSyncServerEndpoint#tier_files_older_than_days}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.timeouts"></a>

```csharp
public StorageSyncServerEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts">StorageSyncServerEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#timeouts StorageSyncServerEndpoint#timeouts}

---

##### `VolumeFreeSpacePercent`<sup>Optional</sup> <a name="VolumeFreeSpacePercent" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.volumeFreeSpacePercent"></a>

```csharp
public double VolumeFreeSpacePercent { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#volume_free_space_percent StorageSyncServerEndpoint#volume_free_space_percent}.

---

### StorageSyncServerEndpointTimeouts <a name="StorageSyncServerEndpointTimeouts" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageSyncServerEndpointTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#create StorageSyncServerEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#delete StorageSyncServerEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#read StorageSyncServerEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#update StorageSyncServerEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#create StorageSyncServerEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#delete StorageSyncServerEndpoint#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#read StorageSyncServerEndpoint#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/storage_sync_server_endpoint#update StorageSyncServerEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageSyncServerEndpointTimeoutsOutputReference <a name="StorageSyncServerEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageSyncServerEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



