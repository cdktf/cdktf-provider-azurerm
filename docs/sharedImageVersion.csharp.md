# `sharedImageVersion` Submodule <a name="`sharedImageVersion` Submodule" id="@cdktf/provider-azurerm.sharedImageVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SharedImageVersion <a name="SharedImageVersion" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version azurerm_shared_image_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SharedImageVersion(Construct Scope, string Id, SharedImageVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig">SharedImageVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig">SharedImageVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.putTargetRegion">PutTargetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetBlobUri">ResetBlobUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetDeletionOfReplicatedLocationsEnabled">ResetDeletionOfReplicatedLocationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetEndOfLifeDate">ResetEndOfLifeDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetExcludeFromLatest">ResetExcludeFromLatest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetManagedImageId">ResetManagedImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetOsDiskSnapshotId">ResetOsDiskSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetReplicationMode">ResetReplicationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetStorageAccountId">ResetStorageAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTargetRegion` <a name="PutTargetRegion" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.putTargetRegion"></a>

```csharp
private void PutTargetRegion(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.putTargetRegion.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.putTimeouts"></a>

```csharp
private void PutTimeouts(SharedImageVersionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a>

---

##### `ResetBlobUri` <a name="ResetBlobUri" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetBlobUri"></a>

```csharp
private void ResetBlobUri()
```

##### `ResetDeletionOfReplicatedLocationsEnabled` <a name="ResetDeletionOfReplicatedLocationsEnabled" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetDeletionOfReplicatedLocationsEnabled"></a>

```csharp
private void ResetDeletionOfReplicatedLocationsEnabled()
```

##### `ResetEndOfLifeDate` <a name="ResetEndOfLifeDate" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetEndOfLifeDate"></a>

```csharp
private void ResetEndOfLifeDate()
```

##### `ResetExcludeFromLatest` <a name="ResetExcludeFromLatest" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetExcludeFromLatest"></a>

```csharp
private void ResetExcludeFromLatest()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetManagedImageId` <a name="ResetManagedImageId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetManagedImageId"></a>

```csharp
private void ResetManagedImageId()
```

##### `ResetOsDiskSnapshotId` <a name="ResetOsDiskSnapshotId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetOsDiskSnapshotId"></a>

```csharp
private void ResetOsDiskSnapshotId()
```

##### `ResetReplicationMode` <a name="ResetReplicationMode" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetReplicationMode"></a>

```csharp
private void ResetReplicationMode()
```

##### `ResetStorageAccountId` <a name="ResetStorageAccountId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetStorageAccountId"></a>

```csharp
private void ResetStorageAccountId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SharedImageVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SharedImageVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SharedImageVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SharedImageVersion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SharedImageVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SharedImageVersion resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SharedImageVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SharedImageVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SharedImageVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.targetRegion">TargetRegion</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList">SharedImageVersionTargetRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference">SharedImageVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.blobUriInput">BlobUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.deletionOfReplicatedLocationsEnabledInput">DeletionOfReplicatedLocationsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.endOfLifeDateInput">EndOfLifeDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.excludeFromLatestInput">ExcludeFromLatestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.galleryNameInput">GalleryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.imageNameInput">ImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.managedImageIdInput">ManagedImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.osDiskSnapshotIdInput">OsDiskSnapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.replicationModeInput">ReplicationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.targetRegionInput">TargetRegionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.blobUri">BlobUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.deletionOfReplicatedLocationsEnabled">DeletionOfReplicatedLocationsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.endOfLifeDate">EndOfLifeDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.excludeFromLatest">ExcludeFromLatest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.galleryName">GalleryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.managedImageId">ManagedImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.osDiskSnapshotId">OsDiskSnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.replicationMode">ReplicationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `TargetRegion`<sup>Required</sup> <a name="TargetRegion" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.targetRegion"></a>

```csharp
public SharedImageVersionTargetRegionList TargetRegion { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList">SharedImageVersionTargetRegionList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.timeouts"></a>

```csharp
public SharedImageVersionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference">SharedImageVersionTimeoutsOutputReference</a>

---

##### `BlobUriInput`<sup>Optional</sup> <a name="BlobUriInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.blobUriInput"></a>

```csharp
public string BlobUriInput { get; }
```

- *Type:* string

---

##### `DeletionOfReplicatedLocationsEnabledInput`<sup>Optional</sup> <a name="DeletionOfReplicatedLocationsEnabledInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.deletionOfReplicatedLocationsEnabledInput"></a>

```csharp
public object DeletionOfReplicatedLocationsEnabledInput { get; }
```

- *Type:* object

---

##### `EndOfLifeDateInput`<sup>Optional</sup> <a name="EndOfLifeDateInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.endOfLifeDateInput"></a>

```csharp
public string EndOfLifeDateInput { get; }
```

- *Type:* string

---

##### `ExcludeFromLatestInput`<sup>Optional</sup> <a name="ExcludeFromLatestInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.excludeFromLatestInput"></a>

```csharp
public object ExcludeFromLatestInput { get; }
```

- *Type:* object

---

##### `GalleryNameInput`<sup>Optional</sup> <a name="GalleryNameInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.galleryNameInput"></a>

```csharp
public string GalleryNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.imageNameInput"></a>

```csharp
public string ImageNameInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ManagedImageIdInput`<sup>Optional</sup> <a name="ManagedImageIdInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.managedImageIdInput"></a>

```csharp
public string ManagedImageIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OsDiskSnapshotIdInput`<sup>Optional</sup> <a name="OsDiskSnapshotIdInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.osDiskSnapshotIdInput"></a>

```csharp
public string OsDiskSnapshotIdInput { get; }
```

- *Type:* string

---

##### `ReplicationModeInput`<sup>Optional</sup> <a name="ReplicationModeInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.replicationModeInput"></a>

```csharp
public string ReplicationModeInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.storageAccountIdInput"></a>

```csharp
public string StorageAccountIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetRegionInput`<sup>Optional</sup> <a name="TargetRegionInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.targetRegionInput"></a>

```csharp
public object TargetRegionInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `BlobUri`<sup>Required</sup> <a name="BlobUri" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.blobUri"></a>

```csharp
public string BlobUri { get; }
```

- *Type:* string

---

##### `DeletionOfReplicatedLocationsEnabled`<sup>Required</sup> <a name="DeletionOfReplicatedLocationsEnabled" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.deletionOfReplicatedLocationsEnabled"></a>

```csharp
public object DeletionOfReplicatedLocationsEnabled { get; }
```

- *Type:* object

---

##### `EndOfLifeDate`<sup>Required</sup> <a name="EndOfLifeDate" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.endOfLifeDate"></a>

```csharp
public string EndOfLifeDate { get; }
```

- *Type:* string

---

##### `ExcludeFromLatest`<sup>Required</sup> <a name="ExcludeFromLatest" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.excludeFromLatest"></a>

```csharp
public object ExcludeFromLatest { get; }
```

- *Type:* object

---

##### `GalleryName`<sup>Required</sup> <a name="GalleryName" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.galleryName"></a>

```csharp
public string GalleryName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ManagedImageId`<sup>Required</sup> <a name="ManagedImageId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.managedImageId"></a>

```csharp
public string ManagedImageId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OsDiskSnapshotId`<sup>Required</sup> <a name="OsDiskSnapshotId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.osDiskSnapshotId"></a>

```csharp
public string OsDiskSnapshotId { get; }
```

- *Type:* string

---

##### `ReplicationMode`<sup>Required</sup> <a name="ReplicationMode" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.replicationMode"></a>

```csharp
public string ReplicationMode { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SharedImageVersionConfig <a name="SharedImageVersionConfig" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SharedImageVersionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string GalleryName,
    string ImageName,
    string Location,
    string Name,
    string ResourceGroupName,
    object TargetRegion,
    string BlobUri = null,
    object DeletionOfReplicatedLocationsEnabled = null,
    string EndOfLifeDate = null,
    object ExcludeFromLatest = null,
    string Id = null,
    string ManagedImageId = null,
    string OsDiskSnapshotId = null,
    string ReplicationMode = null,
    string StorageAccountId = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    SharedImageVersionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.galleryName">GalleryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#gallery_name SharedImageVersion#gallery_name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.imageName">ImageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#image_name SharedImageVersion#image_name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#location SharedImageVersion#location}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#name SharedImageVersion#name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#resource_group_name SharedImageVersion#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.targetRegion">TargetRegion</a></code> | <code>object</code> | target_region block. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.blobUri">BlobUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#blob_uri SharedImageVersion#blob_uri}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.deletionOfReplicatedLocationsEnabled">DeletionOfReplicatedLocationsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#deletion_of_replicated_locations_enabled SharedImageVersion#deletion_of_replicated_locations_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.endOfLifeDate">EndOfLifeDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#end_of_life_date SharedImageVersion#end_of_life_date}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.excludeFromLatest">ExcludeFromLatest</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#exclude_from_latest SharedImageVersion#exclude_from_latest}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#id SharedImageVersion#id}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.managedImageId">ManagedImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#managed_image_id SharedImageVersion#managed_image_id}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.osDiskSnapshotId">OsDiskSnapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#os_disk_snapshot_id SharedImageVersion#os_disk_snapshot_id}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.replicationMode">ReplicationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#replication_mode SharedImageVersion#replication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#storage_account_id SharedImageVersion#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#tags SharedImageVersion#tags}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GalleryName`<sup>Required</sup> <a name="GalleryName" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.galleryName"></a>

```csharp
public string GalleryName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#gallery_name SharedImageVersion#gallery_name}.

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.imageName"></a>

```csharp
public string ImageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#image_name SharedImageVersion#image_name}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#location SharedImageVersion#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#name SharedImageVersion#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#resource_group_name SharedImageVersion#resource_group_name}.

---

##### `TargetRegion`<sup>Required</sup> <a name="TargetRegion" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.targetRegion"></a>

```csharp
public object TargetRegion { get; set; }
```

- *Type:* object

target_region block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#target_region SharedImageVersion#target_region}

---

##### `BlobUri`<sup>Optional</sup> <a name="BlobUri" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.blobUri"></a>

```csharp
public string BlobUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#blob_uri SharedImageVersion#blob_uri}.

---

##### `DeletionOfReplicatedLocationsEnabled`<sup>Optional</sup> <a name="DeletionOfReplicatedLocationsEnabled" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.deletionOfReplicatedLocationsEnabled"></a>

```csharp
public object DeletionOfReplicatedLocationsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#deletion_of_replicated_locations_enabled SharedImageVersion#deletion_of_replicated_locations_enabled}.

---

##### `EndOfLifeDate`<sup>Optional</sup> <a name="EndOfLifeDate" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.endOfLifeDate"></a>

```csharp
public string EndOfLifeDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#end_of_life_date SharedImageVersion#end_of_life_date}.

---

##### `ExcludeFromLatest`<sup>Optional</sup> <a name="ExcludeFromLatest" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.excludeFromLatest"></a>

```csharp
public object ExcludeFromLatest { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#exclude_from_latest SharedImageVersion#exclude_from_latest}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#id SharedImageVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagedImageId`<sup>Optional</sup> <a name="ManagedImageId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.managedImageId"></a>

```csharp
public string ManagedImageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#managed_image_id SharedImageVersion#managed_image_id}.

---

##### `OsDiskSnapshotId`<sup>Optional</sup> <a name="OsDiskSnapshotId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.osDiskSnapshotId"></a>

```csharp
public string OsDiskSnapshotId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#os_disk_snapshot_id SharedImageVersion#os_disk_snapshot_id}.

---

##### `ReplicationMode`<sup>Optional</sup> <a name="ReplicationMode" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.replicationMode"></a>

```csharp
public string ReplicationMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#replication_mode SharedImageVersion#replication_mode}.

---

##### `StorageAccountId`<sup>Optional</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#storage_account_id SharedImageVersion#storage_account_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#tags SharedImageVersion#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.timeouts"></a>

```csharp
public SharedImageVersionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#timeouts SharedImageVersion#timeouts}

---

### SharedImageVersionTargetRegion <a name="SharedImageVersionTargetRegion" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SharedImageVersionTargetRegion {
    string Name,
    double RegionalReplicaCount,
    string DiskEncryptionSetId = null,
    object ExcludeFromLatestEnabled = null,
    string StorageAccountType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#name SharedImageVersion#name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.regionalReplicaCount">RegionalReplicaCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#regional_replica_count SharedImageVersion#regional_replica_count}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#disk_encryption_set_id SharedImageVersion#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.excludeFromLatestEnabled">ExcludeFromLatestEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#exclude_from_latest_enabled SharedImageVersion#exclude_from_latest_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.storageAccountType">StorageAccountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#storage_account_type SharedImageVersion#storage_account_type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#name SharedImageVersion#name}.

---

##### `RegionalReplicaCount`<sup>Required</sup> <a name="RegionalReplicaCount" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.regionalReplicaCount"></a>

```csharp
public double RegionalReplicaCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#regional_replica_count SharedImageVersion#regional_replica_count}.

---

##### `DiskEncryptionSetId`<sup>Optional</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.diskEncryptionSetId"></a>

```csharp
public string DiskEncryptionSetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#disk_encryption_set_id SharedImageVersion#disk_encryption_set_id}.

---

##### `ExcludeFromLatestEnabled`<sup>Optional</sup> <a name="ExcludeFromLatestEnabled" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.excludeFromLatestEnabled"></a>

```csharp
public object ExcludeFromLatestEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#exclude_from_latest_enabled SharedImageVersion#exclude_from_latest_enabled}.

---

##### `StorageAccountType`<sup>Optional</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.storageAccountType"></a>

```csharp
public string StorageAccountType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#storage_account_type SharedImageVersion#storage_account_type}.

---

### SharedImageVersionTimeouts <a name="SharedImageVersionTimeouts" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SharedImageVersionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#create SharedImageVersion#create}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#delete SharedImageVersion#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#read SharedImageVersion#read}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#update SharedImageVersion#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#create SharedImageVersion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#delete SharedImageVersion#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#read SharedImageVersion#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/shared_image_version#update SharedImageVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SharedImageVersionTargetRegionList <a name="SharedImageVersionTargetRegionList" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SharedImageVersionTargetRegionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.get"></a>

```csharp
private SharedImageVersionTargetRegionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SharedImageVersionTargetRegionOutputReference <a name="SharedImageVersionTargetRegionOutputReference" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SharedImageVersionTargetRegionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetDiskEncryptionSetId">ResetDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetExcludeFromLatestEnabled">ResetExcludeFromLatestEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetStorageAccountType">ResetStorageAccountType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiskEncryptionSetId` <a name="ResetDiskEncryptionSetId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetDiskEncryptionSetId"></a>

```csharp
private void ResetDiskEncryptionSetId()
```

##### `ResetExcludeFromLatestEnabled` <a name="ResetExcludeFromLatestEnabled" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetExcludeFromLatestEnabled"></a>

```csharp
private void ResetExcludeFromLatestEnabled()
```

##### `ResetStorageAccountType` <a name="ResetStorageAccountType" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetStorageAccountType"></a>

```csharp
private void ResetStorageAccountType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.diskEncryptionSetIdInput">DiskEncryptionSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.excludeFromLatestEnabledInput">ExcludeFromLatestEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.regionalReplicaCountInput">RegionalReplicaCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.storageAccountTypeInput">StorageAccountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.excludeFromLatestEnabled">ExcludeFromLatestEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.regionalReplicaCount">RegionalReplicaCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.storageAccountType">StorageAccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskEncryptionSetIdInput`<sup>Optional</sup> <a name="DiskEncryptionSetIdInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.diskEncryptionSetIdInput"></a>

```csharp
public string DiskEncryptionSetIdInput { get; }
```

- *Type:* string

---

##### `ExcludeFromLatestEnabledInput`<sup>Optional</sup> <a name="ExcludeFromLatestEnabledInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.excludeFromLatestEnabledInput"></a>

```csharp
public object ExcludeFromLatestEnabledInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionalReplicaCountInput`<sup>Optional</sup> <a name="RegionalReplicaCountInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.regionalReplicaCountInput"></a>

```csharp
public double RegionalReplicaCountInput { get; }
```

- *Type:* double

---

##### `StorageAccountTypeInput`<sup>Optional</sup> <a name="StorageAccountTypeInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.storageAccountTypeInput"></a>

```csharp
public string StorageAccountTypeInput { get; }
```

- *Type:* string

---

##### `DiskEncryptionSetId`<sup>Required</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.diskEncryptionSetId"></a>

```csharp
public string DiskEncryptionSetId { get; }
```

- *Type:* string

---

##### `ExcludeFromLatestEnabled`<sup>Required</sup> <a name="ExcludeFromLatestEnabled" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.excludeFromLatestEnabled"></a>

```csharp
public object ExcludeFromLatestEnabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RegionalReplicaCount`<sup>Required</sup> <a name="RegionalReplicaCount" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.regionalReplicaCount"></a>

```csharp
public double RegionalReplicaCount { get; }
```

- *Type:* double

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.storageAccountType"></a>

```csharp
public string StorageAccountType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SharedImageVersionTimeoutsOutputReference <a name="SharedImageVersionTimeoutsOutputReference" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SharedImageVersionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



