# `systemCenterVirtualMachineManagerCloud` Submodule <a name="`systemCenterVirtualMachineManagerCloud` Submodule" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SystemCenterVirtualMachineManagerCloud <a name="SystemCenterVirtualMachineManagerCloud" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/system_center_virtual_machine_manager_cloud azurerm_system_center_virtual_machine_manager_cloud}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SystemCenterVirtualMachineManagerCloud(Construct Scope, string Id, SystemCenterVirtualMachineManagerCloudConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig">SystemCenterVirtualMachineManagerCloudConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig">SystemCenterVirtualMachineManagerCloudConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.putTimeouts"></a>

```csharp
private void PutTimeouts(SystemCenterVirtualMachineManagerCloudTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeouts">SystemCenterVirtualMachineManagerCloudTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SystemCenterVirtualMachineManagerCloud resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SystemCenterVirtualMachineManagerCloud.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SystemCenterVirtualMachineManagerCloud.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SystemCenterVirtualMachineManagerCloud.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SystemCenterVirtualMachineManagerCloud.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SystemCenterVirtualMachineManagerCloud resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SystemCenterVirtualMachineManagerCloud to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SystemCenterVirtualMachineManagerCloud that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/system_center_virtual_machine_manager_cloud#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SystemCenterVirtualMachineManagerCloud to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference">SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.customLocationIdInput">CustomLocationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.systemCenterVirtualMachineManagerServerInventoryItemIdInput">SystemCenterVirtualMachineManagerServerInventoryItemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.customLocationId">CustomLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.systemCenterVirtualMachineManagerServerInventoryItemId">SystemCenterVirtualMachineManagerServerInventoryItemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.timeouts"></a>

```csharp
public SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference">SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference</a>

---

##### `CustomLocationIdInput`<sup>Optional</sup> <a name="CustomLocationIdInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.customLocationIdInput"></a>

```csharp
public string CustomLocationIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SystemCenterVirtualMachineManagerServerInventoryItemIdInput`<sup>Optional</sup> <a name="SystemCenterVirtualMachineManagerServerInventoryItemIdInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.systemCenterVirtualMachineManagerServerInventoryItemIdInput"></a>

```csharp
public string SystemCenterVirtualMachineManagerServerInventoryItemIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CustomLocationId`<sup>Required</sup> <a name="CustomLocationId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.customLocationId"></a>

```csharp
public string CustomLocationId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SystemCenterVirtualMachineManagerServerInventoryItemId`<sup>Required</sup> <a name="SystemCenterVirtualMachineManagerServerInventoryItemId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.systemCenterVirtualMachineManagerServerInventoryItemId"></a>

```csharp
public string SystemCenterVirtualMachineManagerServerInventoryItemId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloud.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SystemCenterVirtualMachineManagerCloudConfig <a name="SystemCenterVirtualMachineManagerCloudConfig" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SystemCenterVirtualMachineManagerCloudConfig {
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
    SystemCenterVirtualMachineManagerCloudTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.customLocationId">CustomLocationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/system_center_virtual_machine_manager_cloud#custom_location_id SystemCenterVirtualMachineManagerCloud#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/system_center_virtual_machine_manager_cloud#location SystemCenterVirtualMachineManagerCloud#location}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/system_center_virtual_machine_manager_cloud#name SystemCenterVirtualMachineManagerCloud#name}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/system_center_virtual_machine_manager_cloud#resource_group_name SystemCenterVirtualMachineManagerCloud#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.systemCenterVirtualMachineManagerServerInventoryItemId">SystemCenterVirtualMachineManagerServerInventoryItemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/system_center_virtual_machine_manager_cloud#system_center_virtual_machine_manager_server_inventory_item_id SystemCenterVirtualMachineManagerCloud#system_center_virtual_machine_manager_server_inventory_item_id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/system_center_virtual_machine_manager_cloud#id SystemCenterVirtualMachineManagerCloud#id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/system_center_virtual_machine_manager_cloud#tags SystemCenterVirtualMachineManagerCloud#tags}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeouts">SystemCenterVirtualMachineManagerCloudTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CustomLocationId`<sup>Required</sup> <a name="CustomLocationId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.customLocationId"></a>

```csharp
public string CustomLocationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/system_center_virtual_machine_manager_cloud#custom_location_id SystemCenterVirtualMachineManagerCloud#custom_location_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/system_center_virtual_machine_manager_cloud#location SystemCenterVirtualMachineManagerCloud#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/system_center_virtual_machine_manager_cloud#name SystemCenterVirtualMachineManagerCloud#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/system_center_virtual_machine_manager_cloud#resource_group_name SystemCenterVirtualMachineManagerCloud#resource_group_name}.

---

##### `SystemCenterVirtualMachineManagerServerInventoryItemId`<sup>Required</sup> <a name="SystemCenterVirtualMachineManagerServerInventoryItemId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.systemCenterVirtualMachineManagerServerInventoryItemId"></a>

```csharp
public string SystemCenterVirtualMachineManagerServerInventoryItemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/system_center_virtual_machine_manager_cloud#system_center_virtual_machine_manager_server_inventory_item_id SystemCenterVirtualMachineManagerCloud#system_center_virtual_machine_manager_server_inventory_item_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/system_center_virtual_machine_manager_cloud#id SystemCenterVirtualMachineManagerCloud#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/system_center_virtual_machine_manager_cloud#tags SystemCenterVirtualMachineManagerCloud#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudConfig.property.timeouts"></a>

```csharp
public SystemCenterVirtualMachineManagerCloudTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeouts">SystemCenterVirtualMachineManagerCloudTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/system_center_virtual_machine_manager_cloud#timeouts SystemCenterVirtualMachineManagerCloud#timeouts}

---

### SystemCenterVirtualMachineManagerCloudTimeouts <a name="SystemCenterVirtualMachineManagerCloudTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SystemCenterVirtualMachineManagerCloudTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/system_center_virtual_machine_manager_cloud#create SystemCenterVirtualMachineManagerCloud#create}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/system_center_virtual_machine_manager_cloud#delete SystemCenterVirtualMachineManagerCloud#delete}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/system_center_virtual_machine_manager_cloud#read SystemCenterVirtualMachineManagerCloud#read}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/system_center_virtual_machine_manager_cloud#update SystemCenterVirtualMachineManagerCloud#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/system_center_virtual_machine_manager_cloud#create SystemCenterVirtualMachineManagerCloud#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/system_center_virtual_machine_manager_cloud#delete SystemCenterVirtualMachineManagerCloud#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/system_center_virtual_machine_manager_cloud#read SystemCenterVirtualMachineManagerCloud#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/system_center_virtual_machine_manager_cloud#update SystemCenterVirtualMachineManagerCloud#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference <a name="SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerCloud.SystemCenterVirtualMachineManagerCloudTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



