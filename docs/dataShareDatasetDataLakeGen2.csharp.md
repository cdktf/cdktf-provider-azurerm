# `azurerm_data_share_dataset_data_lake_gen2`

Refer to the Terraform Registory for docs: [`azurerm_data_share_dataset_data_lake_gen2`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_share_dataset_data_lake_gen2).

# `dataShareDatasetDataLakeGen2` Submodule <a name="`dataShareDatasetDataLakeGen2` Submodule" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataShareDatasetDataLakeGen2 <a name="DataShareDatasetDataLakeGen2" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_share_dataset_data_lake_gen2 azurerm_data_share_dataset_data_lake_gen2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataShareDatasetDataLakeGen2(Construct Scope, string Id, DataShareDatasetDataLakeGen2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config">DataShareDatasetDataLakeGen2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config">DataShareDatasetDataLakeGen2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetFilePath">ResetFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetFolderPath">ResetFolderPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.putTimeouts"></a>

```csharp
private void PutTimeouts(DataShareDatasetDataLakeGen2Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts">DataShareDatasetDataLakeGen2Timeouts</a>

---

##### `ResetFilePath` <a name="ResetFilePath" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetFilePath"></a>

```csharp
private void ResetFilePath()
```

##### `ResetFolderPath` <a name="ResetFolderPath" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetFolderPath"></a>

```csharp
private void ResetFolderPath()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataShareDatasetDataLakeGen2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataShareDatasetDataLakeGen2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataShareDatasetDataLakeGen2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataShareDatasetDataLakeGen2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataShareDatasetDataLakeGen2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataShareDatasetDataLakeGen2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataShareDatasetDataLakeGen2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataShareDatasetDataLakeGen2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_share_dataset_data_lake_gen2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataShareDatasetDataLakeGen2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference">DataShareDatasetDataLakeGen2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.filePathInput">FilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.fileSystemNameInput">FileSystemNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.folderPathInput">FolderPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.shareIdInput">ShareIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.filePath">FilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.fileSystemName">FileSystemName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.folderPath">FolderPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.shareId">ShareId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.timeouts"></a>

```csharp
public DataShareDatasetDataLakeGen2TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference">DataShareDatasetDataLakeGen2TimeoutsOutputReference</a>

---

##### `FilePathInput`<sup>Optional</sup> <a name="FilePathInput" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.filePathInput"></a>

```csharp
public string FilePathInput { get; }
```

- *Type:* string

---

##### `FileSystemNameInput`<sup>Optional</sup> <a name="FileSystemNameInput" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.fileSystemNameInput"></a>

```csharp
public string FileSystemNameInput { get; }
```

- *Type:* string

---

##### `FolderPathInput`<sup>Optional</sup> <a name="FolderPathInput" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.folderPathInput"></a>

```csharp
public string FolderPathInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ShareIdInput`<sup>Optional</sup> <a name="ShareIdInput" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.shareIdInput"></a>

```csharp
public string ShareIdInput { get; }
```

- *Type:* string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.storageAccountIdInput"></a>

```csharp
public string StorageAccountIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.filePath"></a>

```csharp
public string FilePath { get; }
```

- *Type:* string

---

##### `FileSystemName`<sup>Required</sup> <a name="FileSystemName" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.fileSystemName"></a>

```csharp
public string FileSystemName { get; }
```

- *Type:* string

---

##### `FolderPath`<sup>Required</sup> <a name="FolderPath" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.folderPath"></a>

```csharp
public string FolderPath { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ShareId`<sup>Required</sup> <a name="ShareId" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.shareId"></a>

```csharp
public string ShareId { get; }
```

- *Type:* string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataShareDatasetDataLakeGen2Config <a name="DataShareDatasetDataLakeGen2Config" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataShareDatasetDataLakeGen2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FileSystemName,
    string Name,
    string ShareId,
    string StorageAccountId,
    string FilePath = null,
    string FolderPath = null,
    string Id = null,
    DataShareDatasetDataLakeGen2Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.fileSystemName">FileSystemName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_share_dataset_data_lake_gen2#file_system_name DataShareDatasetDataLakeGen2#file_system_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_share_dataset_data_lake_gen2#name DataShareDatasetDataLakeGen2#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.shareId">ShareId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_share_dataset_data_lake_gen2#share_id DataShareDatasetDataLakeGen2#share_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_share_dataset_data_lake_gen2#storage_account_id DataShareDatasetDataLakeGen2#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.filePath">FilePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_share_dataset_data_lake_gen2#file_path DataShareDatasetDataLakeGen2#file_path}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.folderPath">FolderPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_share_dataset_data_lake_gen2#folder_path DataShareDatasetDataLakeGen2#folder_path}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_share_dataset_data_lake_gen2#id DataShareDatasetDataLakeGen2#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts">DataShareDatasetDataLakeGen2Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FileSystemName`<sup>Required</sup> <a name="FileSystemName" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.fileSystemName"></a>

```csharp
public string FileSystemName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_share_dataset_data_lake_gen2#file_system_name DataShareDatasetDataLakeGen2#file_system_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_share_dataset_data_lake_gen2#name DataShareDatasetDataLakeGen2#name}.

---

##### `ShareId`<sup>Required</sup> <a name="ShareId" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.shareId"></a>

```csharp
public string ShareId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_share_dataset_data_lake_gen2#share_id DataShareDatasetDataLakeGen2#share_id}.

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_share_dataset_data_lake_gen2#storage_account_id DataShareDatasetDataLakeGen2#storage_account_id}.

---

##### `FilePath`<sup>Optional</sup> <a name="FilePath" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.filePath"></a>

```csharp
public string FilePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_share_dataset_data_lake_gen2#file_path DataShareDatasetDataLakeGen2#file_path}.

---

##### `FolderPath`<sup>Optional</sup> <a name="FolderPath" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.folderPath"></a>

```csharp
public string FolderPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_share_dataset_data_lake_gen2#folder_path DataShareDatasetDataLakeGen2#folder_path}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_share_dataset_data_lake_gen2#id DataShareDatasetDataLakeGen2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.timeouts"></a>

```csharp
public DataShareDatasetDataLakeGen2Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts">DataShareDatasetDataLakeGen2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_share_dataset_data_lake_gen2#timeouts DataShareDatasetDataLakeGen2#timeouts}

---

### DataShareDatasetDataLakeGen2Timeouts <a name="DataShareDatasetDataLakeGen2Timeouts" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataShareDatasetDataLakeGen2Timeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_share_dataset_data_lake_gen2#create DataShareDatasetDataLakeGen2#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_share_dataset_data_lake_gen2#delete DataShareDatasetDataLakeGen2#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_share_dataset_data_lake_gen2#read DataShareDatasetDataLakeGen2#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_share_dataset_data_lake_gen2#create DataShareDatasetDataLakeGen2#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_share_dataset_data_lake_gen2#delete DataShareDatasetDataLakeGen2#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_share_dataset_data_lake_gen2#read DataShareDatasetDataLakeGen2#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataShareDatasetDataLakeGen2TimeoutsOutputReference <a name="DataShareDatasetDataLakeGen2TimeoutsOutputReference" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataShareDatasetDataLakeGen2TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



