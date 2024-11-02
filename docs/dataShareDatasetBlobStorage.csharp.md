# `dataShareDatasetBlobStorage` Submodule <a name="`dataShareDatasetBlobStorage` Submodule" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataShareDatasetBlobStorage <a name="DataShareDatasetBlobStorage" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_share_dataset_blob_storage azurerm_data_share_dataset_blob_storage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataShareDatasetBlobStorage(Construct Scope, string Id, DataShareDatasetBlobStorageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig">DataShareDatasetBlobStorageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig">DataShareDatasetBlobStorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.putStorageAccount">PutStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetFilePath">ResetFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetFolderPath">ResetFolderPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStorageAccount` <a name="PutStorageAccount" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.putStorageAccount"></a>

```csharp
private void PutStorageAccount(DataShareDatasetBlobStorageStorageAccount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.putStorageAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount">DataShareDatasetBlobStorageStorageAccount</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.putTimeouts"></a>

```csharp
private void PutTimeouts(DataShareDatasetBlobStorageTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts">DataShareDatasetBlobStorageTimeouts</a>

---

##### `ResetFilePath` <a name="ResetFilePath" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetFilePath"></a>

```csharp
private void ResetFilePath()
```

##### `ResetFolderPath` <a name="ResetFolderPath" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetFolderPath"></a>

```csharp
private void ResetFolderPath()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataShareDatasetBlobStorage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataShareDatasetBlobStorage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataShareDatasetBlobStorage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataShareDatasetBlobStorage.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataShareDatasetBlobStorage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataShareDatasetBlobStorage resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataShareDatasetBlobStorage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataShareDatasetBlobStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_share_dataset_blob_storage#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataShareDatasetBlobStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.storageAccount">StorageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference">DataShareDatasetBlobStorageStorageAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference">DataShareDatasetBlobStorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.containerNameInput">ContainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.dataShareIdInput">DataShareIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.filePathInput">FilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.folderPathInput">FolderPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.storageAccountInput">StorageAccountInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount">DataShareDatasetBlobStorageStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.containerName">ContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.dataShareId">DataShareId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.filePath">FilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.folderPath">FolderPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.storageAccount"></a>

```csharp
public DataShareDatasetBlobStorageStorageAccountOutputReference StorageAccount { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference">DataShareDatasetBlobStorageStorageAccountOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.timeouts"></a>

```csharp
public DataShareDatasetBlobStorageTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference">DataShareDatasetBlobStorageTimeoutsOutputReference</a>

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.containerNameInput"></a>

```csharp
public string ContainerNameInput { get; }
```

- *Type:* string

---

##### `DataShareIdInput`<sup>Optional</sup> <a name="DataShareIdInput" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.dataShareIdInput"></a>

```csharp
public string DataShareIdInput { get; }
```

- *Type:* string

---

##### `FilePathInput`<sup>Optional</sup> <a name="FilePathInput" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.filePathInput"></a>

```csharp
public string FilePathInput { get; }
```

- *Type:* string

---

##### `FolderPathInput`<sup>Optional</sup> <a name="FolderPathInput" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.folderPathInput"></a>

```csharp
public string FolderPathInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StorageAccountInput`<sup>Optional</sup> <a name="StorageAccountInput" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.storageAccountInput"></a>

```csharp
public DataShareDatasetBlobStorageStorageAccount StorageAccountInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount">DataShareDatasetBlobStorageStorageAccount</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.containerName"></a>

```csharp
public string ContainerName { get; }
```

- *Type:* string

---

##### `DataShareId`<sup>Required</sup> <a name="DataShareId" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.dataShareId"></a>

```csharp
public string DataShareId { get; }
```

- *Type:* string

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.filePath"></a>

```csharp
public string FilePath { get; }
```

- *Type:* string

---

##### `FolderPath`<sup>Required</sup> <a name="FolderPath" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.folderPath"></a>

```csharp
public string FolderPath { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataShareDatasetBlobStorageConfig <a name="DataShareDatasetBlobStorageConfig" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataShareDatasetBlobStorageConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ContainerName,
    string DataShareId,
    string Name,
    DataShareDatasetBlobStorageStorageAccount StorageAccount,
    string FilePath = null,
    string FolderPath = null,
    string Id = null,
    DataShareDatasetBlobStorageTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.containerName">ContainerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_share_dataset_blob_storage#container_name DataShareDatasetBlobStorage#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.dataShareId">DataShareId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_share_dataset_blob_storage#data_share_id DataShareDatasetBlobStorage#data_share_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_share_dataset_blob_storage#name DataShareDatasetBlobStorage#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.storageAccount">StorageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount">DataShareDatasetBlobStorageStorageAccount</a></code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.filePath">FilePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_share_dataset_blob_storage#file_path DataShareDatasetBlobStorage#file_path}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.folderPath">FolderPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_share_dataset_blob_storage#folder_path DataShareDatasetBlobStorage#folder_path}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_share_dataset_blob_storage#id DataShareDatasetBlobStorage#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts">DataShareDatasetBlobStorageTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.containerName"></a>

```csharp
public string ContainerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_share_dataset_blob_storage#container_name DataShareDatasetBlobStorage#container_name}.

---

##### `DataShareId`<sup>Required</sup> <a name="DataShareId" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.dataShareId"></a>

```csharp
public string DataShareId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_share_dataset_blob_storage#data_share_id DataShareDatasetBlobStorage#data_share_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_share_dataset_blob_storage#name DataShareDatasetBlobStorage#name}.

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.storageAccount"></a>

```csharp
public DataShareDatasetBlobStorageStorageAccount StorageAccount { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount">DataShareDatasetBlobStorageStorageAccount</a>

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_share_dataset_blob_storage#storage_account DataShareDatasetBlobStorage#storage_account}

---

##### `FilePath`<sup>Optional</sup> <a name="FilePath" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.filePath"></a>

```csharp
public string FilePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_share_dataset_blob_storage#file_path DataShareDatasetBlobStorage#file_path}.

---

##### `FolderPath`<sup>Optional</sup> <a name="FolderPath" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.folderPath"></a>

```csharp
public string FolderPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_share_dataset_blob_storage#folder_path DataShareDatasetBlobStorage#folder_path}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_share_dataset_blob_storage#id DataShareDatasetBlobStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.timeouts"></a>

```csharp
public DataShareDatasetBlobStorageTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts">DataShareDatasetBlobStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_share_dataset_blob_storage#timeouts DataShareDatasetBlobStorage#timeouts}

---

### DataShareDatasetBlobStorageStorageAccount <a name="DataShareDatasetBlobStorageStorageAccount" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataShareDatasetBlobStorageStorageAccount {
    string Name,
    string ResourceGroupName,
    string SubscriptionId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_share_dataset_blob_storage#name DataShareDatasetBlobStorage#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_share_dataset_blob_storage#resource_group_name DataShareDatasetBlobStorage#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_share_dataset_blob_storage#subscription_id DataShareDatasetBlobStorage#subscription_id}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_share_dataset_blob_storage#name DataShareDatasetBlobStorage#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_share_dataset_blob_storage#resource_group_name DataShareDatasetBlobStorage#resource_group_name}.

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_share_dataset_blob_storage#subscription_id DataShareDatasetBlobStorage#subscription_id}.

---

### DataShareDatasetBlobStorageTimeouts <a name="DataShareDatasetBlobStorageTimeouts" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataShareDatasetBlobStorageTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_share_dataset_blob_storage#create DataShareDatasetBlobStorage#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_share_dataset_blob_storage#delete DataShareDatasetBlobStorage#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_share_dataset_blob_storage#read DataShareDatasetBlobStorage#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_share_dataset_blob_storage#create DataShareDatasetBlobStorage#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_share_dataset_blob_storage#delete DataShareDatasetBlobStorage#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_share_dataset_blob_storage#read DataShareDatasetBlobStorage#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataShareDatasetBlobStorageStorageAccountOutputReference <a name="DataShareDatasetBlobStorageStorageAccountOutputReference" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataShareDatasetBlobStorageStorageAccountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount">DataShareDatasetBlobStorageStorageAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.subscriptionIdInput"></a>

```csharp
public string SubscriptionIdInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.internalValue"></a>

```csharp
public DataShareDatasetBlobStorageStorageAccount InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount">DataShareDatasetBlobStorageStorageAccount</a>

---


### DataShareDatasetBlobStorageTimeoutsOutputReference <a name="DataShareDatasetBlobStorageTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataShareDatasetBlobStorageTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



