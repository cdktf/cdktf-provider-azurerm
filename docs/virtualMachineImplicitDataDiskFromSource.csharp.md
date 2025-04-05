# `virtualMachineImplicitDataDiskFromSource` Submodule <a name="`virtualMachineImplicitDataDiskFromSource` Submodule" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineImplicitDataDiskFromSource <a name="VirtualMachineImplicitDataDiskFromSource" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_machine_implicit_data_disk_from_source azurerm_virtual_machine_implicit_data_disk_from_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineImplicitDataDiskFromSource(Construct Scope, string Id, VirtualMachineImplicitDataDiskFromSourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig">VirtualMachineImplicitDataDiskFromSourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig">VirtualMachineImplicitDataDiskFromSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetCaching">ResetCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetWriteAcceleratorEnabled">ResetWriteAcceleratorEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.putTimeouts"></a>

```csharp
private void PutTimeouts(VirtualMachineImplicitDataDiskFromSourceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts">VirtualMachineImplicitDataDiskFromSourceTimeouts</a>

---

##### `ResetCaching` <a name="ResetCaching" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetCaching"></a>

```csharp
private void ResetCaching()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWriteAcceleratorEnabled` <a name="ResetWriteAcceleratorEnabled" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetWriteAcceleratorEnabled"></a>

```csharp
private void ResetWriteAcceleratorEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualMachineImplicitDataDiskFromSource resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualMachineImplicitDataDiskFromSource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualMachineImplicitDataDiskFromSource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualMachineImplicitDataDiskFromSource.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualMachineImplicitDataDiskFromSource.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VirtualMachineImplicitDataDiskFromSource resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualMachineImplicitDataDiskFromSource to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualMachineImplicitDataDiskFromSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_machine_implicit_data_disk_from_source#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachineImplicitDataDiskFromSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference">VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.cachingInput">CachingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.createOptionInput">CreateOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.lunInput">LunInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.sourceResourceIdInput">SourceResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.virtualMachineIdInput">VirtualMachineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.writeAcceleratorEnabledInput">WriteAcceleratorEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.caching">Caching</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.createOption">CreateOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.lun">Lun</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.sourceResourceId">SourceResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.virtualMachineId">VirtualMachineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.writeAcceleratorEnabled">WriteAcceleratorEnabled</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.timeouts"></a>

```csharp
public VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference">VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference</a>

---

##### `CachingInput`<sup>Optional</sup> <a name="CachingInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.cachingInput"></a>

```csharp
public string CachingInput { get; }
```

- *Type:* string

---

##### `CreateOptionInput`<sup>Optional</sup> <a name="CreateOptionInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.createOptionInput"></a>

```csharp
public string CreateOptionInput { get; }
```

- *Type:* string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.diskSizeGbInput"></a>

```csharp
public double DiskSizeGbInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LunInput`<sup>Optional</sup> <a name="LunInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.lunInput"></a>

```csharp
public double LunInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SourceResourceIdInput`<sup>Optional</sup> <a name="SourceResourceIdInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.sourceResourceIdInput"></a>

```csharp
public string SourceResourceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VirtualMachineIdInput`<sup>Optional</sup> <a name="VirtualMachineIdInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.virtualMachineIdInput"></a>

```csharp
public string VirtualMachineIdInput { get; }
```

- *Type:* string

---

##### `WriteAcceleratorEnabledInput`<sup>Optional</sup> <a name="WriteAcceleratorEnabledInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.writeAcceleratorEnabledInput"></a>

```csharp
public object WriteAcceleratorEnabledInput { get; }
```

- *Type:* object

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.caching"></a>

```csharp
public string Caching { get; }
```

- *Type:* string

---

##### `CreateOption`<sup>Required</sup> <a name="CreateOption" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.createOption"></a>

```csharp
public string CreateOption { get; }
```

- *Type:* string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Lun`<sup>Required</sup> <a name="Lun" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.lun"></a>

```csharp
public double Lun { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SourceResourceId`<sup>Required</sup> <a name="SourceResourceId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.sourceResourceId"></a>

```csharp
public string SourceResourceId { get; }
```

- *Type:* string

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.virtualMachineId"></a>

```csharp
public string VirtualMachineId { get; }
```

- *Type:* string

---

##### `WriteAcceleratorEnabled`<sup>Required</sup> <a name="WriteAcceleratorEnabled" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.writeAcceleratorEnabled"></a>

```csharp
public object WriteAcceleratorEnabled { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineImplicitDataDiskFromSourceConfig <a name="VirtualMachineImplicitDataDiskFromSourceConfig" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineImplicitDataDiskFromSourceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CreateOption,
    double DiskSizeGb,
    double Lun,
    string Name,
    string SourceResourceId,
    string VirtualMachineId,
    string Caching = null,
    string Id = null,
    VirtualMachineImplicitDataDiskFromSourceTimeouts Timeouts = null,
    object WriteAcceleratorEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.createOption">CreateOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_machine_implicit_data_disk_from_source#create_option VirtualMachineImplicitDataDiskFromSource#create_option}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_machine_implicit_data_disk_from_source#disk_size_gb VirtualMachineImplicitDataDiskFromSource#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.lun">Lun</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_machine_implicit_data_disk_from_source#lun VirtualMachineImplicitDataDiskFromSource#lun}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_machine_implicit_data_disk_from_source#name VirtualMachineImplicitDataDiskFromSource#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.sourceResourceId">SourceResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_machine_implicit_data_disk_from_source#source_resource_id VirtualMachineImplicitDataDiskFromSource#source_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.virtualMachineId">VirtualMachineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_machine_implicit_data_disk_from_source#virtual_machine_id VirtualMachineImplicitDataDiskFromSource#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.caching">Caching</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_machine_implicit_data_disk_from_source#caching VirtualMachineImplicitDataDiskFromSource#caching}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_machine_implicit_data_disk_from_source#id VirtualMachineImplicitDataDiskFromSource#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts">VirtualMachineImplicitDataDiskFromSourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.writeAcceleratorEnabled">WriteAcceleratorEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_machine_implicit_data_disk_from_source#write_accelerator_enabled VirtualMachineImplicitDataDiskFromSource#write_accelerator_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CreateOption`<sup>Required</sup> <a name="CreateOption" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.createOption"></a>

```csharp
public string CreateOption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_machine_implicit_data_disk_from_source#create_option VirtualMachineImplicitDataDiskFromSource#create_option}.

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_machine_implicit_data_disk_from_source#disk_size_gb VirtualMachineImplicitDataDiskFromSource#disk_size_gb}.

---

##### `Lun`<sup>Required</sup> <a name="Lun" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.lun"></a>

```csharp
public double Lun { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_machine_implicit_data_disk_from_source#lun VirtualMachineImplicitDataDiskFromSource#lun}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_machine_implicit_data_disk_from_source#name VirtualMachineImplicitDataDiskFromSource#name}.

---

##### `SourceResourceId`<sup>Required</sup> <a name="SourceResourceId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.sourceResourceId"></a>

```csharp
public string SourceResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_machine_implicit_data_disk_from_source#source_resource_id VirtualMachineImplicitDataDiskFromSource#source_resource_id}.

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.virtualMachineId"></a>

```csharp
public string VirtualMachineId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_machine_implicit_data_disk_from_source#virtual_machine_id VirtualMachineImplicitDataDiskFromSource#virtual_machine_id}.

---

##### `Caching`<sup>Optional</sup> <a name="Caching" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.caching"></a>

```csharp
public string Caching { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_machine_implicit_data_disk_from_source#caching VirtualMachineImplicitDataDiskFromSource#caching}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_machine_implicit_data_disk_from_source#id VirtualMachineImplicitDataDiskFromSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.timeouts"></a>

```csharp
public VirtualMachineImplicitDataDiskFromSourceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts">VirtualMachineImplicitDataDiskFromSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_machine_implicit_data_disk_from_source#timeouts VirtualMachineImplicitDataDiskFromSource#timeouts}

---

##### `WriteAcceleratorEnabled`<sup>Optional</sup> <a name="WriteAcceleratorEnabled" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.writeAcceleratorEnabled"></a>

```csharp
public object WriteAcceleratorEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_machine_implicit_data_disk_from_source#write_accelerator_enabled VirtualMachineImplicitDataDiskFromSource#write_accelerator_enabled}.

---

### VirtualMachineImplicitDataDiskFromSourceTimeouts <a name="VirtualMachineImplicitDataDiskFromSourceTimeouts" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineImplicitDataDiskFromSourceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_machine_implicit_data_disk_from_source#create VirtualMachineImplicitDataDiskFromSource#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_machine_implicit_data_disk_from_source#delete VirtualMachineImplicitDataDiskFromSource#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_machine_implicit_data_disk_from_source#read VirtualMachineImplicitDataDiskFromSource#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_machine_implicit_data_disk_from_source#update VirtualMachineImplicitDataDiskFromSource#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_machine_implicit_data_disk_from_source#create VirtualMachineImplicitDataDiskFromSource#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_machine_implicit_data_disk_from_source#delete VirtualMachineImplicitDataDiskFromSource#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_machine_implicit_data_disk_from_source#read VirtualMachineImplicitDataDiskFromSource#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_machine_implicit_data_disk_from_source#update VirtualMachineImplicitDataDiskFromSource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference <a name="VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



