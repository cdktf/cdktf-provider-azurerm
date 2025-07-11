# `systemCenterVirtualMachineManagerVirtualNetwork` Submodule <a name="`systemCenterVirtualMachineManagerVirtualNetwork` Submodule" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SystemCenterVirtualMachineManagerVirtualNetwork <a name="SystemCenterVirtualMachineManagerVirtualNetwork" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_network azurerm_system_center_virtual_machine_manager_virtual_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SystemCenterVirtualMachineManagerVirtualNetwork(Construct Scope, string Id, SystemCenterVirtualMachineManagerVirtualNetworkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig">SystemCenterVirtualMachineManagerVirtualNetworkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig">SystemCenterVirtualMachineManagerVirtualNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.putTimeouts"></a>

```csharp
private void PutTimeouts(SystemCenterVirtualMachineManagerVirtualNetworkTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeouts">SystemCenterVirtualMachineManagerVirtualNetworkTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SystemCenterVirtualMachineManagerVirtualNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SystemCenterVirtualMachineManagerVirtualNetwork.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SystemCenterVirtualMachineManagerVirtualNetwork.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SystemCenterVirtualMachineManagerVirtualNetwork.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SystemCenterVirtualMachineManagerVirtualNetwork.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SystemCenterVirtualMachineManagerVirtualNetwork resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SystemCenterVirtualMachineManagerVirtualNetwork to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SystemCenterVirtualMachineManagerVirtualNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_network#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SystemCenterVirtualMachineManagerVirtualNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference">SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.customLocationIdInput">CustomLocationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.systemCenterVirtualMachineManagerServerInventoryItemIdInput">SystemCenterVirtualMachineManagerServerInventoryItemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.customLocationId">CustomLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.systemCenterVirtualMachineManagerServerInventoryItemId">SystemCenterVirtualMachineManagerServerInventoryItemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.timeouts"></a>

```csharp
public SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference">SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference</a>

---

##### `CustomLocationIdInput`<sup>Optional</sup> <a name="CustomLocationIdInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.customLocationIdInput"></a>

```csharp
public string CustomLocationIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SystemCenterVirtualMachineManagerServerInventoryItemIdInput`<sup>Optional</sup> <a name="SystemCenterVirtualMachineManagerServerInventoryItemIdInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.systemCenterVirtualMachineManagerServerInventoryItemIdInput"></a>

```csharp
public string SystemCenterVirtualMachineManagerServerInventoryItemIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CustomLocationId`<sup>Required</sup> <a name="CustomLocationId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.customLocationId"></a>

```csharp
public string CustomLocationId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SystemCenterVirtualMachineManagerServerInventoryItemId`<sup>Required</sup> <a name="SystemCenterVirtualMachineManagerServerInventoryItemId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.systemCenterVirtualMachineManagerServerInventoryItemId"></a>

```csharp
public string SystemCenterVirtualMachineManagerServerInventoryItemId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetwork.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SystemCenterVirtualMachineManagerVirtualNetworkConfig <a name="SystemCenterVirtualMachineManagerVirtualNetworkConfig" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SystemCenterVirtualMachineManagerVirtualNetworkConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CustomLocationId,
    string Location,
    string Name,
    string ResourceGroupName,
    string SystemCenterVirtualMachineManagerServerInventoryItemId,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    SystemCenterVirtualMachineManagerVirtualNetworkTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.customLocationId">CustomLocationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_network#custom_location_id SystemCenterVirtualMachineManagerVirtualNetwork#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_network#location SystemCenterVirtualMachineManagerVirtualNetwork#location}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_network#name SystemCenterVirtualMachineManagerVirtualNetwork#name}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_network#resource_group_name SystemCenterVirtualMachineManagerVirtualNetwork#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.systemCenterVirtualMachineManagerServerInventoryItemId">SystemCenterVirtualMachineManagerServerInventoryItemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_network#system_center_virtual_machine_manager_server_inventory_item_id SystemCenterVirtualMachineManagerVirtualNetwork#system_center_virtual_machine_manager_server_inventory_item_id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_network#id SystemCenterVirtualMachineManagerVirtualNetwork#id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_network#tags SystemCenterVirtualMachineManagerVirtualNetwork#tags}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeouts">SystemCenterVirtualMachineManagerVirtualNetworkTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CustomLocationId`<sup>Required</sup> <a name="CustomLocationId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.customLocationId"></a>

```csharp
public string CustomLocationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_network#custom_location_id SystemCenterVirtualMachineManagerVirtualNetwork#custom_location_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_network#location SystemCenterVirtualMachineManagerVirtualNetwork#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_network#name SystemCenterVirtualMachineManagerVirtualNetwork#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_network#resource_group_name SystemCenterVirtualMachineManagerVirtualNetwork#resource_group_name}.

---

##### `SystemCenterVirtualMachineManagerServerInventoryItemId`<sup>Required</sup> <a name="SystemCenterVirtualMachineManagerServerInventoryItemId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.systemCenterVirtualMachineManagerServerInventoryItemId"></a>

```csharp
public string SystemCenterVirtualMachineManagerServerInventoryItemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_network#system_center_virtual_machine_manager_server_inventory_item_id SystemCenterVirtualMachineManagerVirtualNetwork#system_center_virtual_machine_manager_server_inventory_item_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_network#id SystemCenterVirtualMachineManagerVirtualNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_network#tags SystemCenterVirtualMachineManagerVirtualNetwork#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkConfig.property.timeouts"></a>

```csharp
public SystemCenterVirtualMachineManagerVirtualNetworkTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeouts">SystemCenterVirtualMachineManagerVirtualNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_network#timeouts SystemCenterVirtualMachineManagerVirtualNetwork#timeouts}

---

### SystemCenterVirtualMachineManagerVirtualNetworkTimeouts <a name="SystemCenterVirtualMachineManagerVirtualNetworkTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SystemCenterVirtualMachineManagerVirtualNetworkTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_network#create SystemCenterVirtualMachineManagerVirtualNetwork#create}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_network#delete SystemCenterVirtualMachineManagerVirtualNetwork#delete}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_network#read SystemCenterVirtualMachineManagerVirtualNetwork#read}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_network#update SystemCenterVirtualMachineManagerVirtualNetwork#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_network#create SystemCenterVirtualMachineManagerVirtualNetwork#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_network#delete SystemCenterVirtualMachineManagerVirtualNetwork#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_network#read SystemCenterVirtualMachineManagerVirtualNetwork#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_network#update SystemCenterVirtualMachineManagerVirtualNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference <a name="SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualNetwork.SystemCenterVirtualMachineManagerVirtualNetworkTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



