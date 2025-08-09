# `systemCenterVirtualMachineManagerServer` Submodule <a name="`systemCenterVirtualMachineManagerServer` Submodule" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SystemCenterVirtualMachineManagerServer <a name="SystemCenterVirtualMachineManagerServer" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server azurerm_system_center_virtual_machine_manager_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SystemCenterVirtualMachineManagerServer(Construct Scope, string Id, SystemCenterVirtualMachineManagerServerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig">SystemCenterVirtualMachineManagerServerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig">SystemCenterVirtualMachineManagerServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.putTimeouts"></a>

```csharp
private void PutTimeouts(SystemCenterVirtualMachineManagerServerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts">SystemCenterVirtualMachineManagerServerTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SystemCenterVirtualMachineManagerServer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SystemCenterVirtualMachineManagerServer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SystemCenterVirtualMachineManagerServer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SystemCenterVirtualMachineManagerServer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SystemCenterVirtualMachineManagerServer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SystemCenterVirtualMachineManagerServer resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SystemCenterVirtualMachineManagerServer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SystemCenterVirtualMachineManagerServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SystemCenterVirtualMachineManagerServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference">SystemCenterVirtualMachineManagerServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.customLocationIdInput">CustomLocationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.fqdnInput">FqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.customLocationId">CustomLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.fqdn">Fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.timeouts"></a>

```csharp
public SystemCenterVirtualMachineManagerServerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference">SystemCenterVirtualMachineManagerServerTimeoutsOutputReference</a>

---

##### `CustomLocationIdInput`<sup>Optional</sup> <a name="CustomLocationIdInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.customLocationIdInput"></a>

```csharp
public string CustomLocationIdInput { get; }
```

- *Type:* string

---

##### `FqdnInput`<sup>Optional</sup> <a name="FqdnInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.fqdnInput"></a>

```csharp
public string FqdnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `CustomLocationId`<sup>Required</sup> <a name="CustomLocationId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.customLocationId"></a>

```csharp
public string CustomLocationId { get; }
```

- *Type:* string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.fqdn"></a>

```csharp
public string Fqdn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SystemCenterVirtualMachineManagerServerConfig <a name="SystemCenterVirtualMachineManagerServerConfig" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SystemCenterVirtualMachineManagerServerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CustomLocationId,
    string Fqdn,
    string Location,
    string Name,
    string Password,
    string ResourceGroupName,
    string Username,
    string Id = null,
    double Port = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    SystemCenterVirtualMachineManagerServerTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.customLocationId">CustomLocationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#custom_location_id SystemCenterVirtualMachineManagerServer#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.fqdn">Fqdn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#fqdn SystemCenterVirtualMachineManagerServer#fqdn}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#location SystemCenterVirtualMachineManagerServer#location}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#name SystemCenterVirtualMachineManagerServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#password SystemCenterVirtualMachineManagerServer#password}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#resource_group_name SystemCenterVirtualMachineManagerServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#username SystemCenterVirtualMachineManagerServer#username}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#id SystemCenterVirtualMachineManagerServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#port SystemCenterVirtualMachineManagerServer#port}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#tags SystemCenterVirtualMachineManagerServer#tags}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts">SystemCenterVirtualMachineManagerServerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CustomLocationId`<sup>Required</sup> <a name="CustomLocationId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.customLocationId"></a>

```csharp
public string CustomLocationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#custom_location_id SystemCenterVirtualMachineManagerServer#custom_location_id}.

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.fqdn"></a>

```csharp
public string Fqdn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#fqdn SystemCenterVirtualMachineManagerServer#fqdn}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#location SystemCenterVirtualMachineManagerServer#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#name SystemCenterVirtualMachineManagerServer#name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#password SystemCenterVirtualMachineManagerServer#password}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#resource_group_name SystemCenterVirtualMachineManagerServer#resource_group_name}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#username SystemCenterVirtualMachineManagerServer#username}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#id SystemCenterVirtualMachineManagerServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#port SystemCenterVirtualMachineManagerServer#port}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#tags SystemCenterVirtualMachineManagerServer#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.timeouts"></a>

```csharp
public SystemCenterVirtualMachineManagerServerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts">SystemCenterVirtualMachineManagerServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#timeouts SystemCenterVirtualMachineManagerServer#timeouts}

---

### SystemCenterVirtualMachineManagerServerTimeouts <a name="SystemCenterVirtualMachineManagerServerTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SystemCenterVirtualMachineManagerServerTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#create SystemCenterVirtualMachineManagerServer#create}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#delete SystemCenterVirtualMachineManagerServer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#read SystemCenterVirtualMachineManagerServer#read}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#update SystemCenterVirtualMachineManagerServer#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#create SystemCenterVirtualMachineManagerServer#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#delete SystemCenterVirtualMachineManagerServer#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#read SystemCenterVirtualMachineManagerServer#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/system_center_virtual_machine_manager_server#update SystemCenterVirtualMachineManagerServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SystemCenterVirtualMachineManagerServerTimeoutsOutputReference <a name="SystemCenterVirtualMachineManagerServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SystemCenterVirtualMachineManagerServerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



