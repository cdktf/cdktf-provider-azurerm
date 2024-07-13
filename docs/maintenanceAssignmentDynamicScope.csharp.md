# `maintenanceAssignmentDynamicScope` Submodule <a name="`maintenanceAssignmentDynamicScope` Submodule" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MaintenanceAssignmentDynamicScope <a name="MaintenanceAssignmentDynamicScope" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope azurerm_maintenance_assignment_dynamic_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MaintenanceAssignmentDynamicScope(Construct Scope, string Id, MaintenanceAssignmentDynamicScopeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig">MaintenanceAssignmentDynamicScopeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig">MaintenanceAssignmentDynamicScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.putFilter"></a>

```csharp
private void PutFilter(MaintenanceAssignmentDynamicScopeFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter">MaintenanceAssignmentDynamicScopeFilter</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.putTimeouts"></a>

```csharp
private void PutTimeouts(MaintenanceAssignmentDynamicScopeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts">MaintenanceAssignmentDynamicScopeTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MaintenanceAssignmentDynamicScope resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MaintenanceAssignmentDynamicScope.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MaintenanceAssignmentDynamicScope.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MaintenanceAssignmentDynamicScope.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MaintenanceAssignmentDynamicScope.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MaintenanceAssignmentDynamicScope resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MaintenanceAssignmentDynamicScope to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MaintenanceAssignmentDynamicScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MaintenanceAssignmentDynamicScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference">MaintenanceAssignmentDynamicScopeFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference">MaintenanceAssignmentDynamicScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter">MaintenanceAssignmentDynamicScopeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.maintenanceConfigurationIdInput">MaintenanceConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.maintenanceConfigurationId">MaintenanceConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.filter"></a>

```csharp
public MaintenanceAssignmentDynamicScopeFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference">MaintenanceAssignmentDynamicScopeFilterOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.timeouts"></a>

```csharp
public MaintenanceAssignmentDynamicScopeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference">MaintenanceAssignmentDynamicScopeTimeoutsOutputReference</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.filterInput"></a>

```csharp
public MaintenanceAssignmentDynamicScopeFilter FilterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter">MaintenanceAssignmentDynamicScopeFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaintenanceConfigurationIdInput`<sup>Optional</sup> <a name="MaintenanceConfigurationIdInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.maintenanceConfigurationIdInput"></a>

```csharp
public string MaintenanceConfigurationIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaintenanceConfigurationId`<sup>Required</sup> <a name="MaintenanceConfigurationId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.maintenanceConfigurationId"></a>

```csharp
public string MaintenanceConfigurationId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MaintenanceAssignmentDynamicScopeConfig <a name="MaintenanceAssignmentDynamicScopeConfig" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MaintenanceAssignmentDynamicScopeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    MaintenanceAssignmentDynamicScopeFilter Filter,
    string MaintenanceConfigurationId,
    string Name,
    string Id = null,
    MaintenanceAssignmentDynamicScopeTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter">MaintenanceAssignmentDynamicScopeFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.maintenanceConfigurationId">MaintenanceConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#maintenance_configuration_id MaintenanceAssignmentDynamicScope#maintenance_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#name MaintenanceAssignmentDynamicScope#name}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#id MaintenanceAssignmentDynamicScope#id}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts">MaintenanceAssignmentDynamicScopeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.filter"></a>

```csharp
public MaintenanceAssignmentDynamicScopeFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter">MaintenanceAssignmentDynamicScopeFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#filter MaintenanceAssignmentDynamicScope#filter}

---

##### `MaintenanceConfigurationId`<sup>Required</sup> <a name="MaintenanceConfigurationId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.maintenanceConfigurationId"></a>

```csharp
public string MaintenanceConfigurationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#maintenance_configuration_id MaintenanceAssignmentDynamicScope#maintenance_configuration_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#name MaintenanceAssignmentDynamicScope#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#id MaintenanceAssignmentDynamicScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.timeouts"></a>

```csharp
public MaintenanceAssignmentDynamicScopeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts">MaintenanceAssignmentDynamicScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#timeouts MaintenanceAssignmentDynamicScope#timeouts}

---

### MaintenanceAssignmentDynamicScopeFilter <a name="MaintenanceAssignmentDynamicScopeFilter" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MaintenanceAssignmentDynamicScopeFilter {
    string[] Locations = null,
    string[] OsTypes = null,
    string[] ResourceGroups = null,
    string[] ResourceTypes = null,
    string TagFilter = null,
    object Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.locations">Locations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#locations MaintenanceAssignmentDynamicScope#locations}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.osTypes">OsTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#os_types MaintenanceAssignmentDynamicScope#os_types}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#resource_groups MaintenanceAssignmentDynamicScope#resource_groups}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#resource_types MaintenanceAssignmentDynamicScope#resource_types}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.tagFilter">TagFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#tag_filter MaintenanceAssignmentDynamicScope#tag_filter}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.tags">Tags</a></code> | <code>object</code> | tags block. |

---

##### `Locations`<sup>Optional</sup> <a name="Locations" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.locations"></a>

```csharp
public string[] Locations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#locations MaintenanceAssignmentDynamicScope#locations}.

---

##### `OsTypes`<sup>Optional</sup> <a name="OsTypes" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.osTypes"></a>

```csharp
public string[] OsTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#os_types MaintenanceAssignmentDynamicScope#os_types}.

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#resource_groups MaintenanceAssignmentDynamicScope#resource_groups}.

---

##### `ResourceTypes`<sup>Optional</sup> <a name="ResourceTypes" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#resource_types MaintenanceAssignmentDynamicScope#resource_types}.

---

##### `TagFilter`<sup>Optional</sup> <a name="TagFilter" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.tagFilter"></a>

```csharp
public string TagFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#tag_filter MaintenanceAssignmentDynamicScope#tag_filter}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.tags"></a>

```csharp
public object Tags { get; set; }
```

- *Type:* object

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#tags MaintenanceAssignmentDynamicScope#tags}

---

### MaintenanceAssignmentDynamicScopeFilterTags <a name="MaintenanceAssignmentDynamicScopeFilterTags" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MaintenanceAssignmentDynamicScopeFilterTags {
    string Tag,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags.property.tag">Tag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#tag MaintenanceAssignmentDynamicScope#tag}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#values MaintenanceAssignmentDynamicScope#values}. |

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#tag MaintenanceAssignmentDynamicScope#tag}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#values MaintenanceAssignmentDynamicScope#values}.

---

### MaintenanceAssignmentDynamicScopeTimeouts <a name="MaintenanceAssignmentDynamicScopeTimeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MaintenanceAssignmentDynamicScopeTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#create MaintenanceAssignmentDynamicScope#create}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#delete MaintenanceAssignmentDynamicScope#delete}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#read MaintenanceAssignmentDynamicScope#read}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#update MaintenanceAssignmentDynamicScope#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#create MaintenanceAssignmentDynamicScope#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#delete MaintenanceAssignmentDynamicScope#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#read MaintenanceAssignmentDynamicScope#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/maintenance_assignment_dynamic_scope#update MaintenanceAssignmentDynamicScope#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MaintenanceAssignmentDynamicScopeFilterOutputReference <a name="MaintenanceAssignmentDynamicScopeFilterOutputReference" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MaintenanceAssignmentDynamicScopeFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetLocations">ResetLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetOsTypes">ResetOsTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetResourceTypes">ResetResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetTagFilter">ResetTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.putTags"></a>

```csharp
private void PutTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.putTags.parameter.value"></a>

- *Type:* object

---

##### `ResetLocations` <a name="ResetLocations" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetLocations"></a>

```csharp
private void ResetLocations()
```

##### `ResetOsTypes` <a name="ResetOsTypes" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetOsTypes"></a>

```csharp
private void ResetOsTypes()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```

##### `ResetResourceTypes` <a name="ResetResourceTypes" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetResourceTypes"></a>

```csharp
private void ResetResourceTypes()
```

##### `ResetTagFilter` <a name="ResetTagFilter" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetTagFilter"></a>

```csharp
private void ResetTagFilter()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList">MaintenanceAssignmentDynamicScopeFilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.locationsInput">LocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.osTypesInput">OsTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.tagFilterInput">TagFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.tagsInput">TagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.locations">Locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.osTypes">OsTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.tagFilter">TagFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter">MaintenanceAssignmentDynamicScopeFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.tags"></a>

```csharp
public MaintenanceAssignmentDynamicScopeFilterTagsList Tags { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList">MaintenanceAssignmentDynamicScopeFilterTagsList</a>

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.locationsInput"></a>

```csharp
public string[] LocationsInput { get; }
```

- *Type:* string[]

---

##### `OsTypesInput`<sup>Optional</sup> <a name="OsTypesInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.osTypesInput"></a>

```csharp
public string[] OsTypesInput { get; }
```

- *Type:* string[]

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.resourceTypesInput"></a>

```csharp
public string[] ResourceTypesInput { get; }
```

- *Type:* string[]

---

##### `TagFilterInput`<sup>Optional</sup> <a name="TagFilterInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.tagFilterInput"></a>

```csharp
public string TagFilterInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.tagsInput"></a>

```csharp
public object TagsInput { get; }
```

- *Type:* object

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.locations"></a>

```csharp
public string[] Locations { get; }
```

- *Type:* string[]

---

##### `OsTypes`<sup>Required</sup> <a name="OsTypes" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.osTypes"></a>

```csharp
public string[] OsTypes { get; }
```

- *Type:* string[]

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; }
```

- *Type:* string[]

---

##### `TagFilter`<sup>Required</sup> <a name="TagFilter" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.tagFilter"></a>

```csharp
public string TagFilter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.internalValue"></a>

```csharp
public MaintenanceAssignmentDynamicScopeFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter">MaintenanceAssignmentDynamicScopeFilter</a>

---


### MaintenanceAssignmentDynamicScopeFilterTagsList <a name="MaintenanceAssignmentDynamicScopeFilterTagsList" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MaintenanceAssignmentDynamicScopeFilterTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.get"></a>

```csharp
private MaintenanceAssignmentDynamicScopeFilterTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MaintenanceAssignmentDynamicScopeFilterTagsOutputReference <a name="MaintenanceAssignmentDynamicScopeFilterTagsOutputReference" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MaintenanceAssignmentDynamicScopeFilterTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MaintenanceAssignmentDynamicScopeTimeoutsOutputReference <a name="MaintenanceAssignmentDynamicScopeTimeoutsOutputReference" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MaintenanceAssignmentDynamicScopeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



