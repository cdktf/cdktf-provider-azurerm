# `virtualMachineDataDiskAttachment` Submodule <a name="`virtualMachineDataDiskAttachment` Submodule" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineDataDiskAttachment <a name="VirtualMachineDataDiskAttachment" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_machine_data_disk_attachment azurerm_virtual_machine_data_disk_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineDataDiskAttachment(Construct Scope, string Id, VirtualMachineDataDiskAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig">VirtualMachineDataDiskAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig">VirtualMachineDataDiskAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetCreateOption">ResetCreateOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetWriteAcceleratorEnabled">ResetWriteAcceleratorEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.putTimeouts"></a>

```csharp
private void PutTimeouts(VirtualMachineDataDiskAttachmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts">VirtualMachineDataDiskAttachmentTimeouts</a>

---

##### `ResetCreateOption` <a name="ResetCreateOption" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetCreateOption"></a>

```csharp
private void ResetCreateOption()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWriteAcceleratorEnabled` <a name="ResetWriteAcceleratorEnabled" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetWriteAcceleratorEnabled"></a>

```csharp
private void ResetWriteAcceleratorEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualMachineDataDiskAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualMachineDataDiskAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualMachineDataDiskAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualMachineDataDiskAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualMachineDataDiskAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VirtualMachineDataDiskAttachment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualMachineDataDiskAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualMachineDataDiskAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_machine_data_disk_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachineDataDiskAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference">VirtualMachineDataDiskAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.cachingInput">CachingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.createOptionInput">CreateOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.lunInput">LunInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.managedDiskIdInput">ManagedDiskIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.virtualMachineIdInput">VirtualMachineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.writeAcceleratorEnabledInput">WriteAcceleratorEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.caching">Caching</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.createOption">CreateOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.lun">Lun</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.managedDiskId">ManagedDiskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.virtualMachineId">VirtualMachineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.writeAcceleratorEnabled">WriteAcceleratorEnabled</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.timeouts"></a>

```csharp
public VirtualMachineDataDiskAttachmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference">VirtualMachineDataDiskAttachmentTimeoutsOutputReference</a>

---

##### `CachingInput`<sup>Optional</sup> <a name="CachingInput" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.cachingInput"></a>

```csharp
public string CachingInput { get; }
```

- *Type:* string

---

##### `CreateOptionInput`<sup>Optional</sup> <a name="CreateOptionInput" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.createOptionInput"></a>

```csharp
public string CreateOptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LunInput`<sup>Optional</sup> <a name="LunInput" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.lunInput"></a>

```csharp
public double LunInput { get; }
```

- *Type:* double

---

##### `ManagedDiskIdInput`<sup>Optional</sup> <a name="ManagedDiskIdInput" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.managedDiskIdInput"></a>

```csharp
public string ManagedDiskIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VirtualMachineIdInput`<sup>Optional</sup> <a name="VirtualMachineIdInput" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.virtualMachineIdInput"></a>

```csharp
public string VirtualMachineIdInput { get; }
```

- *Type:* string

---

##### `WriteAcceleratorEnabledInput`<sup>Optional</sup> <a name="WriteAcceleratorEnabledInput" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.writeAcceleratorEnabledInput"></a>

```csharp
public object WriteAcceleratorEnabledInput { get; }
```

- *Type:* object

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.caching"></a>

```csharp
public string Caching { get; }
```

- *Type:* string

---

##### `CreateOption`<sup>Required</sup> <a name="CreateOption" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.createOption"></a>

```csharp
public string CreateOption { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Lun`<sup>Required</sup> <a name="Lun" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.lun"></a>

```csharp
public double Lun { get; }
```

- *Type:* double

---

##### `ManagedDiskId`<sup>Required</sup> <a name="ManagedDiskId" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.managedDiskId"></a>

```csharp
public string ManagedDiskId { get; }
```

- *Type:* string

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.virtualMachineId"></a>

```csharp
public string VirtualMachineId { get; }
```

- *Type:* string

---

##### `WriteAcceleratorEnabled`<sup>Required</sup> <a name="WriteAcceleratorEnabled" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.writeAcceleratorEnabled"></a>

```csharp
public object WriteAcceleratorEnabled { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineDataDiskAttachmentConfig <a name="VirtualMachineDataDiskAttachmentConfig" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineDataDiskAttachmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Caching,
    double Lun,
    string ManagedDiskId,
    string VirtualMachineId,
    string CreateOption = null,
    string Id = null,
    VirtualMachineDataDiskAttachmentTimeouts Timeouts = null,
    object WriteAcceleratorEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.caching">Caching</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_machine_data_disk_attachment#caching VirtualMachineDataDiskAttachment#caching}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.lun">Lun</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_machine_data_disk_attachment#lun VirtualMachineDataDiskAttachment#lun}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.managedDiskId">ManagedDiskId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_machine_data_disk_attachment#managed_disk_id VirtualMachineDataDiskAttachment#managed_disk_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.virtualMachineId">VirtualMachineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_machine_data_disk_attachment#virtual_machine_id VirtualMachineDataDiskAttachment#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.createOption">CreateOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_machine_data_disk_attachment#create_option VirtualMachineDataDiskAttachment#create_option}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_machine_data_disk_attachment#id VirtualMachineDataDiskAttachment#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts">VirtualMachineDataDiskAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.writeAcceleratorEnabled">WriteAcceleratorEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_machine_data_disk_attachment#write_accelerator_enabled VirtualMachineDataDiskAttachment#write_accelerator_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.caching"></a>

```csharp
public string Caching { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_machine_data_disk_attachment#caching VirtualMachineDataDiskAttachment#caching}.

---

##### `Lun`<sup>Required</sup> <a name="Lun" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.lun"></a>

```csharp
public double Lun { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_machine_data_disk_attachment#lun VirtualMachineDataDiskAttachment#lun}.

---

##### `ManagedDiskId`<sup>Required</sup> <a name="ManagedDiskId" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.managedDiskId"></a>

```csharp
public string ManagedDiskId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_machine_data_disk_attachment#managed_disk_id VirtualMachineDataDiskAttachment#managed_disk_id}.

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.virtualMachineId"></a>

```csharp
public string VirtualMachineId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_machine_data_disk_attachment#virtual_machine_id VirtualMachineDataDiskAttachment#virtual_machine_id}.

---

##### `CreateOption`<sup>Optional</sup> <a name="CreateOption" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.createOption"></a>

```csharp
public string CreateOption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_machine_data_disk_attachment#create_option VirtualMachineDataDiskAttachment#create_option}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_machine_data_disk_attachment#id VirtualMachineDataDiskAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.timeouts"></a>

```csharp
public VirtualMachineDataDiskAttachmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts">VirtualMachineDataDiskAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_machine_data_disk_attachment#timeouts VirtualMachineDataDiskAttachment#timeouts}

---

##### `WriteAcceleratorEnabled`<sup>Optional</sup> <a name="WriteAcceleratorEnabled" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.writeAcceleratorEnabled"></a>

```csharp
public object WriteAcceleratorEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_machine_data_disk_attachment#write_accelerator_enabled VirtualMachineDataDiskAttachment#write_accelerator_enabled}.

---

### VirtualMachineDataDiskAttachmentTimeouts <a name="VirtualMachineDataDiskAttachmentTimeouts" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineDataDiskAttachmentTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_machine_data_disk_attachment#create VirtualMachineDataDiskAttachment#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_machine_data_disk_attachment#delete VirtualMachineDataDiskAttachment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_machine_data_disk_attachment#read VirtualMachineDataDiskAttachment#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_machine_data_disk_attachment#update VirtualMachineDataDiskAttachment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_machine_data_disk_attachment#create VirtualMachineDataDiskAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_machine_data_disk_attachment#delete VirtualMachineDataDiskAttachment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_machine_data_disk_attachment#read VirtualMachineDataDiskAttachment#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_machine_data_disk_attachment#update VirtualMachineDataDiskAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineDataDiskAttachmentTimeoutsOutputReference <a name="VirtualMachineDataDiskAttachmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineDataDiskAttachmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



