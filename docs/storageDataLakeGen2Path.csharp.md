# `storageDataLakeGen2Path` Submodule <a name="`storageDataLakeGen2Path` Submodule" id="@cdktf/provider-azurerm.storageDataLakeGen2Path"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageDataLakeGen2Path <a name="StorageDataLakeGen2Path" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path azurerm_storage_data_lake_gen2_path}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageDataLakeGen2Path(Construct Scope, string Id, StorageDataLakeGen2PathConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig">StorageDataLakeGen2PathConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig">StorageDataLakeGen2PathConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.putAce">PutAce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetAce">ResetAce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAce` <a name="PutAce" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.putAce"></a>

```csharp
private void PutAce(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.putAce.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.putTimeouts"></a>

```csharp
private void PutTimeouts(StorageDataLakeGen2PathTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts">StorageDataLakeGen2PathTimeouts</a>

---

##### `ResetAce` <a name="ResetAce" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetAce"></a>

```csharp
private void ResetAce()
```

##### `ResetGroup` <a name="ResetGroup" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetGroup"></a>

```csharp
private void ResetGroup()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetOwner"></a>

```csharp
private void ResetOwner()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StorageDataLakeGen2Path resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StorageDataLakeGen2Path.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StorageDataLakeGen2Path.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StorageDataLakeGen2Path.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StorageDataLakeGen2Path.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StorageDataLakeGen2Path resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageDataLakeGen2Path to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageDataLakeGen2Path that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StorageDataLakeGen2Path to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.ace">Ace</a></code> | <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList">StorageDataLakeGen2PathAceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference">StorageDataLakeGen2PathTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.aceInput">AceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.filesystemNameInput">FilesystemNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.groupInput">GroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.filesystemName">FilesystemName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.group">Group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Ace`<sup>Required</sup> <a name="Ace" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.ace"></a>

```csharp
public StorageDataLakeGen2PathAceList Ace { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList">StorageDataLakeGen2PathAceList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.timeouts"></a>

```csharp
public StorageDataLakeGen2PathTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference">StorageDataLakeGen2PathTimeoutsOutputReference</a>

---

##### `AceInput`<sup>Optional</sup> <a name="AceInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.aceInput"></a>

```csharp
public object AceInput { get; }
```

- *Type:* object

---

##### `FilesystemNameInput`<sup>Optional</sup> <a name="FilesystemNameInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.filesystemNameInput"></a>

```csharp
public string FilesystemNameInput { get; }
```

- *Type:* string

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.groupInput"></a>

```csharp
public string GroupInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.storageAccountIdInput"></a>

```csharp
public string StorageAccountIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `FilesystemName`<sup>Required</sup> <a name="FilesystemName" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.filesystemName"></a>

```csharp
public string FilesystemName { get; }
```

- *Type:* string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.group"></a>

```csharp
public string Group { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageDataLakeGen2PathAce <a name="StorageDataLakeGen2PathAce" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageDataLakeGen2PathAce {
    string Permissions,
    string Type,
    string Id = null,
    string Scope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce.property.permissions">Permissions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#permissions StorageDataLakeGen2Path#permissions}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#type StorageDataLakeGen2Path#type}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#id StorageDataLakeGen2Path#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#scope StorageDataLakeGen2Path#scope}. |

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce.property.permissions"></a>

```csharp
public string Permissions { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#permissions StorageDataLakeGen2Path#permissions}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#type StorageDataLakeGen2Path#type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#id StorageDataLakeGen2Path#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#scope StorageDataLakeGen2Path#scope}.

---

### StorageDataLakeGen2PathConfig <a name="StorageDataLakeGen2PathConfig" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageDataLakeGen2PathConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FilesystemName,
    string Path,
    string Resource,
    string StorageAccountId,
    object Ace = null,
    string Group = null,
    string Id = null,
    string Owner = null,
    StorageDataLakeGen2PathTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.filesystemName">FilesystemName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#filesystem_name StorageDataLakeGen2Path#filesystem_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#path StorageDataLakeGen2Path#path}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.resource">Resource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#resource StorageDataLakeGen2Path#resource}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#storage_account_id StorageDataLakeGen2Path#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.ace">Ace</a></code> | <code>object</code> | ace block. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.group">Group</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#group StorageDataLakeGen2Path#group}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#id StorageDataLakeGen2Path#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.owner">Owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#owner StorageDataLakeGen2Path#owner}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts">StorageDataLakeGen2PathTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FilesystemName`<sup>Required</sup> <a name="FilesystemName" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.filesystemName"></a>

```csharp
public string FilesystemName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#filesystem_name StorageDataLakeGen2Path#filesystem_name}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#path StorageDataLakeGen2Path#path}.

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#resource StorageDataLakeGen2Path#resource}.

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#storage_account_id StorageDataLakeGen2Path#storage_account_id}.

---

##### `Ace`<sup>Optional</sup> <a name="Ace" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.ace"></a>

```csharp
public object Ace { get; set; }
```

- *Type:* object

ace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#ace StorageDataLakeGen2Path#ace}

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.group"></a>

```csharp
public string Group { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#group StorageDataLakeGen2Path#group}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#id StorageDataLakeGen2Path#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#owner StorageDataLakeGen2Path#owner}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.timeouts"></a>

```csharp
public StorageDataLakeGen2PathTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts">StorageDataLakeGen2PathTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#timeouts StorageDataLakeGen2Path#timeouts}

---

### StorageDataLakeGen2PathTimeouts <a name="StorageDataLakeGen2PathTimeouts" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageDataLakeGen2PathTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#create StorageDataLakeGen2Path#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#delete StorageDataLakeGen2Path#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#read StorageDataLakeGen2Path#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#update StorageDataLakeGen2Path#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#create StorageDataLakeGen2Path#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#delete StorageDataLakeGen2Path#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#read StorageDataLakeGen2Path#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/storage_data_lake_gen2_path#update StorageDataLakeGen2Path#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageDataLakeGen2PathAceList <a name="StorageDataLakeGen2PathAceList" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageDataLakeGen2PathAceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.get"></a>

```csharp
private StorageDataLakeGen2PathAceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StorageDataLakeGen2PathAceOutputReference <a name="StorageDataLakeGen2PathAceOutputReference" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageDataLakeGen2PathAceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.permissions">Permissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.permissionsInput"></a>

```csharp
public string PermissionsInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.permissions"></a>

```csharp
public string Permissions { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StorageDataLakeGen2PathTimeoutsOutputReference <a name="StorageDataLakeGen2PathTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageDataLakeGen2PathTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



