# `diskPoolIscsiTargetLun` Submodule <a name="`diskPoolIscsiTargetLun` Submodule" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiskPoolIscsiTargetLun <a name="DiskPoolIscsiTargetLun" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/disk_pool_iscsi_target_lun azurerm_disk_pool_iscsi_target_lun}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DiskPoolIscsiTargetLun(Construct Scope, string Id, DiskPoolIscsiTargetLunConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig">DiskPoolIscsiTargetLunConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig">DiskPoolIscsiTargetLunConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.putTimeouts"></a>

```csharp
private void PutTimeouts(DiskPoolIscsiTargetLunTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts">DiskPoolIscsiTargetLunTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DiskPoolIscsiTargetLun resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DiskPoolIscsiTargetLun.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DiskPoolIscsiTargetLun.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DiskPoolIscsiTargetLun.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DiskPoolIscsiTargetLun.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DiskPoolIscsiTargetLun resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DiskPoolIscsiTargetLun to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DiskPoolIscsiTargetLun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/disk_pool_iscsi_target_lun#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DiskPoolIscsiTargetLun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.lun">Lun</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference">DiskPoolIscsiTargetLunTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.diskPoolManagedDiskAttachmentIdInput">DiskPoolManagedDiskAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.iscsiTargetIdInput">IscsiTargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.diskPoolManagedDiskAttachmentId">DiskPoolManagedDiskAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.iscsiTargetId">IscsiTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Lun`<sup>Required</sup> <a name="Lun" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.lun"></a>

```csharp
public double Lun { get; }
```

- *Type:* double

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.timeouts"></a>

```csharp
public DiskPoolIscsiTargetLunTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference">DiskPoolIscsiTargetLunTimeoutsOutputReference</a>

---

##### `DiskPoolManagedDiskAttachmentIdInput`<sup>Optional</sup> <a name="DiskPoolManagedDiskAttachmentIdInput" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.diskPoolManagedDiskAttachmentIdInput"></a>

```csharp
public string DiskPoolManagedDiskAttachmentIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IscsiTargetIdInput`<sup>Optional</sup> <a name="IscsiTargetIdInput" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.iscsiTargetIdInput"></a>

```csharp
public string IscsiTargetIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DiskPoolManagedDiskAttachmentId`<sup>Required</sup> <a name="DiskPoolManagedDiskAttachmentId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.diskPoolManagedDiskAttachmentId"></a>

```csharp
public string DiskPoolManagedDiskAttachmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IscsiTargetId`<sup>Required</sup> <a name="IscsiTargetId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.iscsiTargetId"></a>

```csharp
public string IscsiTargetId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DiskPoolIscsiTargetLunConfig <a name="DiskPoolIscsiTargetLunConfig" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DiskPoolIscsiTargetLunConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DiskPoolManagedDiskAttachmentId,
    string IscsiTargetId,
    string Name,
    string Id = null,
    DiskPoolIscsiTargetLunTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.diskPoolManagedDiskAttachmentId">DiskPoolManagedDiskAttachmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/disk_pool_iscsi_target_lun#disk_pool_managed_disk_attachment_id DiskPoolIscsiTargetLun#disk_pool_managed_disk_attachment_id}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.iscsiTargetId">IscsiTargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/disk_pool_iscsi_target_lun#iscsi_target_id DiskPoolIscsiTargetLun#iscsi_target_id}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/disk_pool_iscsi_target_lun#name DiskPoolIscsiTargetLun#name}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/disk_pool_iscsi_target_lun#id DiskPoolIscsiTargetLun#id}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts">DiskPoolIscsiTargetLunTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DiskPoolManagedDiskAttachmentId`<sup>Required</sup> <a name="DiskPoolManagedDiskAttachmentId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.diskPoolManagedDiskAttachmentId"></a>

```csharp
public string DiskPoolManagedDiskAttachmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/disk_pool_iscsi_target_lun#disk_pool_managed_disk_attachment_id DiskPoolIscsiTargetLun#disk_pool_managed_disk_attachment_id}.

---

##### `IscsiTargetId`<sup>Required</sup> <a name="IscsiTargetId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.iscsiTargetId"></a>

```csharp
public string IscsiTargetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/disk_pool_iscsi_target_lun#iscsi_target_id DiskPoolIscsiTargetLun#iscsi_target_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/disk_pool_iscsi_target_lun#name DiskPoolIscsiTargetLun#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/disk_pool_iscsi_target_lun#id DiskPoolIscsiTargetLun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.timeouts"></a>

```csharp
public DiskPoolIscsiTargetLunTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts">DiskPoolIscsiTargetLunTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/disk_pool_iscsi_target_lun#timeouts DiskPoolIscsiTargetLun#timeouts}

---

### DiskPoolIscsiTargetLunTimeouts <a name="DiskPoolIscsiTargetLunTimeouts" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DiskPoolIscsiTargetLunTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/disk_pool_iscsi_target_lun#create DiskPoolIscsiTargetLun#create}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/disk_pool_iscsi_target_lun#delete DiskPoolIscsiTargetLun#delete}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/disk_pool_iscsi_target_lun#read DiskPoolIscsiTargetLun#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/disk_pool_iscsi_target_lun#create DiskPoolIscsiTargetLun#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/disk_pool_iscsi_target_lun#delete DiskPoolIscsiTargetLun#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/disk_pool_iscsi_target_lun#read DiskPoolIscsiTargetLun#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiskPoolIscsiTargetLunTimeoutsOutputReference <a name="DiskPoolIscsiTargetLunTimeoutsOutputReference" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DiskPoolIscsiTargetLunTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



