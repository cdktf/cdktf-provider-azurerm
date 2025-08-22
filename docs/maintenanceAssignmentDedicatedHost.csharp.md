# `maintenanceAssignmentDedicatedHost` Submodule <a name="`maintenanceAssignmentDedicatedHost` Submodule" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MaintenanceAssignmentDedicatedHost <a name="MaintenanceAssignmentDedicatedHost" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/maintenance_assignment_dedicated_host azurerm_maintenance_assignment_dedicated_host}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MaintenanceAssignmentDedicatedHost(Construct Scope, string Id, MaintenanceAssignmentDedicatedHostConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig">MaintenanceAssignmentDedicatedHostConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig">MaintenanceAssignmentDedicatedHostConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.putTimeouts"></a>

```csharp
private void PutTimeouts(MaintenanceAssignmentDedicatedHostTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeouts">MaintenanceAssignmentDedicatedHostTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MaintenanceAssignmentDedicatedHost resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MaintenanceAssignmentDedicatedHost.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MaintenanceAssignmentDedicatedHost.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MaintenanceAssignmentDedicatedHost.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MaintenanceAssignmentDedicatedHost.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MaintenanceAssignmentDedicatedHost resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MaintenanceAssignmentDedicatedHost to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MaintenanceAssignmentDedicatedHost that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/maintenance_assignment_dedicated_host#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MaintenanceAssignmentDedicatedHost to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference">MaintenanceAssignmentDedicatedHostTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.dedicatedHostIdInput">DedicatedHostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.maintenanceConfigurationIdInput">MaintenanceConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.dedicatedHostId">DedicatedHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.maintenanceConfigurationId">MaintenanceConfigurationId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.timeouts"></a>

```csharp
public MaintenanceAssignmentDedicatedHostTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference">MaintenanceAssignmentDedicatedHostTimeoutsOutputReference</a>

---

##### `DedicatedHostIdInput`<sup>Optional</sup> <a name="DedicatedHostIdInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.dedicatedHostIdInput"></a>

```csharp
public string DedicatedHostIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MaintenanceConfigurationIdInput`<sup>Optional</sup> <a name="MaintenanceConfigurationIdInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.maintenanceConfigurationIdInput"></a>

```csharp
public string MaintenanceConfigurationIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DedicatedHostId`<sup>Required</sup> <a name="DedicatedHostId" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.dedicatedHostId"></a>

```csharp
public string DedicatedHostId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MaintenanceConfigurationId`<sup>Required</sup> <a name="MaintenanceConfigurationId" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.maintenanceConfigurationId"></a>

```csharp
public string MaintenanceConfigurationId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MaintenanceAssignmentDedicatedHostConfig <a name="MaintenanceAssignmentDedicatedHostConfig" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MaintenanceAssignmentDedicatedHostConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DedicatedHostId,
    string Location,
    string MaintenanceConfigurationId,
    string Id = null,
    MaintenanceAssignmentDedicatedHostTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.dedicatedHostId">DedicatedHostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/maintenance_assignment_dedicated_host#dedicated_host_id MaintenanceAssignmentDedicatedHost#dedicated_host_id}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/maintenance_assignment_dedicated_host#location MaintenanceAssignmentDedicatedHost#location}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.maintenanceConfigurationId">MaintenanceConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/maintenance_assignment_dedicated_host#maintenance_configuration_id MaintenanceAssignmentDedicatedHost#maintenance_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/maintenance_assignment_dedicated_host#id MaintenanceAssignmentDedicatedHost#id}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeouts">MaintenanceAssignmentDedicatedHostTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DedicatedHostId`<sup>Required</sup> <a name="DedicatedHostId" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.dedicatedHostId"></a>

```csharp
public string DedicatedHostId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/maintenance_assignment_dedicated_host#dedicated_host_id MaintenanceAssignmentDedicatedHost#dedicated_host_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/maintenance_assignment_dedicated_host#location MaintenanceAssignmentDedicatedHost#location}.

---

##### `MaintenanceConfigurationId`<sup>Required</sup> <a name="MaintenanceConfigurationId" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.maintenanceConfigurationId"></a>

```csharp
public string MaintenanceConfigurationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/maintenance_assignment_dedicated_host#maintenance_configuration_id MaintenanceAssignmentDedicatedHost#maintenance_configuration_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/maintenance_assignment_dedicated_host#id MaintenanceAssignmentDedicatedHost#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.timeouts"></a>

```csharp
public MaintenanceAssignmentDedicatedHostTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeouts">MaintenanceAssignmentDedicatedHostTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/maintenance_assignment_dedicated_host#timeouts MaintenanceAssignmentDedicatedHost#timeouts}

---

### MaintenanceAssignmentDedicatedHostTimeouts <a name="MaintenanceAssignmentDedicatedHostTimeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MaintenanceAssignmentDedicatedHostTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/maintenance_assignment_dedicated_host#create MaintenanceAssignmentDedicatedHost#create}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/maintenance_assignment_dedicated_host#delete MaintenanceAssignmentDedicatedHost#delete}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/maintenance_assignment_dedicated_host#read MaintenanceAssignmentDedicatedHost#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/maintenance_assignment_dedicated_host#create MaintenanceAssignmentDedicatedHost#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/maintenance_assignment_dedicated_host#delete MaintenanceAssignmentDedicatedHost#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/maintenance_assignment_dedicated_host#read MaintenanceAssignmentDedicatedHost#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### MaintenanceAssignmentDedicatedHostTimeoutsOutputReference <a name="MaintenanceAssignmentDedicatedHostTimeoutsOutputReference" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MaintenanceAssignmentDedicatedHostTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



