# `virtualMachineAutomanageConfigurationAssignment` Submodule <a name="`virtualMachineAutomanageConfigurationAssignment` Submodule" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineAutomanageConfigurationAssignment <a name="VirtualMachineAutomanageConfigurationAssignment" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_automanage_configuration_assignment azurerm_virtual_machine_automanage_configuration_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineAutomanageConfigurationAssignment(Construct Scope, string Id, VirtualMachineAutomanageConfigurationAssignmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig">VirtualMachineAutomanageConfigurationAssignmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig">VirtualMachineAutomanageConfigurationAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.putTimeouts"></a>

```csharp
private void PutTimeouts(VirtualMachineAutomanageConfigurationAssignmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeouts">VirtualMachineAutomanageConfigurationAssignmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualMachineAutomanageConfigurationAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualMachineAutomanageConfigurationAssignment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualMachineAutomanageConfigurationAssignment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualMachineAutomanageConfigurationAssignment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualMachineAutomanageConfigurationAssignment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VirtualMachineAutomanageConfigurationAssignment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualMachineAutomanageConfigurationAssignment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualMachineAutomanageConfigurationAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_automanage_configuration_assignment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachineAutomanageConfigurationAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference">VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.configurationIdInput">ConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.virtualMachineIdInput">VirtualMachineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.configurationId">ConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.virtualMachineId">VirtualMachineId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.timeouts"></a>

```csharp
public VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference">VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference</a>

---

##### `ConfigurationIdInput`<sup>Optional</sup> <a name="ConfigurationIdInput" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.configurationIdInput"></a>

```csharp
public string ConfigurationIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VirtualMachineIdInput`<sup>Optional</sup> <a name="VirtualMachineIdInput" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.virtualMachineIdInput"></a>

```csharp
public string VirtualMachineIdInput { get; }
```

- *Type:* string

---

##### `ConfigurationId`<sup>Required</sup> <a name="ConfigurationId" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.configurationId"></a>

```csharp
public string ConfigurationId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.virtualMachineId"></a>

```csharp
public string VirtualMachineId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineAutomanageConfigurationAssignmentConfig <a name="VirtualMachineAutomanageConfigurationAssignmentConfig" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineAutomanageConfigurationAssignmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ConfigurationId,
    string VirtualMachineId,
    string Id = null,
    VirtualMachineAutomanageConfigurationAssignmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.configurationId">ConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_automanage_configuration_assignment#configuration_id VirtualMachineAutomanageConfigurationAssignment#configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.virtualMachineId">VirtualMachineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_automanage_configuration_assignment#virtual_machine_id VirtualMachineAutomanageConfigurationAssignment#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_automanage_configuration_assignment#id VirtualMachineAutomanageConfigurationAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeouts">VirtualMachineAutomanageConfigurationAssignmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConfigurationId`<sup>Required</sup> <a name="ConfigurationId" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.configurationId"></a>

```csharp
public string ConfigurationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_automanage_configuration_assignment#configuration_id VirtualMachineAutomanageConfigurationAssignment#configuration_id}.

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.virtualMachineId"></a>

```csharp
public string VirtualMachineId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_automanage_configuration_assignment#virtual_machine_id VirtualMachineAutomanageConfigurationAssignment#virtual_machine_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_automanage_configuration_assignment#id VirtualMachineAutomanageConfigurationAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.timeouts"></a>

```csharp
public VirtualMachineAutomanageConfigurationAssignmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeouts">VirtualMachineAutomanageConfigurationAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_automanage_configuration_assignment#timeouts VirtualMachineAutomanageConfigurationAssignment#timeouts}

---

### VirtualMachineAutomanageConfigurationAssignmentTimeouts <a name="VirtualMachineAutomanageConfigurationAssignmentTimeouts" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineAutomanageConfigurationAssignmentTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_automanage_configuration_assignment#create VirtualMachineAutomanageConfigurationAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_automanage_configuration_assignment#delete VirtualMachineAutomanageConfigurationAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_automanage_configuration_assignment#read VirtualMachineAutomanageConfigurationAssignment#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_automanage_configuration_assignment#create VirtualMachineAutomanageConfigurationAssignment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_automanage_configuration_assignment#delete VirtualMachineAutomanageConfigurationAssignment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_automanage_configuration_assignment#read VirtualMachineAutomanageConfigurationAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference <a name="VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



