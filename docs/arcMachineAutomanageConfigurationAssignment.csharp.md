# `arcMachineAutomanageConfigurationAssignment` Submodule <a name="`arcMachineAutomanageConfigurationAssignment` Submodule" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArcMachineAutomanageConfigurationAssignment <a name="ArcMachineAutomanageConfigurationAssignment" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/arc_machine_automanage_configuration_assignment azurerm_arc_machine_automanage_configuration_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ArcMachineAutomanageConfigurationAssignment(Construct Scope, string Id, ArcMachineAutomanageConfigurationAssignmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig">ArcMachineAutomanageConfigurationAssignmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig">ArcMachineAutomanageConfigurationAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.putTimeouts"></a>

```csharp
private void PutTimeouts(ArcMachineAutomanageConfigurationAssignmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts">ArcMachineAutomanageConfigurationAssignmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ArcMachineAutomanageConfigurationAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ArcMachineAutomanageConfigurationAssignment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ArcMachineAutomanageConfigurationAssignment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ArcMachineAutomanageConfigurationAssignment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ArcMachineAutomanageConfigurationAssignment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ArcMachineAutomanageConfigurationAssignment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ArcMachineAutomanageConfigurationAssignment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ArcMachineAutomanageConfigurationAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/arc_machine_automanage_configuration_assignment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ArcMachineAutomanageConfigurationAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference">ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.arcMachineIdInput">ArcMachineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.configurationIdInput">ConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.arcMachineId">ArcMachineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.configurationId">ConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.timeouts"></a>

```csharp
public ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference">ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference</a>

---

##### `ArcMachineIdInput`<sup>Optional</sup> <a name="ArcMachineIdInput" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.arcMachineIdInput"></a>

```csharp
public string ArcMachineIdInput { get; }
```

- *Type:* string

---

##### `ConfigurationIdInput`<sup>Optional</sup> <a name="ConfigurationIdInput" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.configurationIdInput"></a>

```csharp
public string ConfigurationIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ArcMachineId`<sup>Required</sup> <a name="ArcMachineId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.arcMachineId"></a>

```csharp
public string ArcMachineId { get; }
```

- *Type:* string

---

##### `ConfigurationId`<sup>Required</sup> <a name="ConfigurationId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.configurationId"></a>

```csharp
public string ConfigurationId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ArcMachineAutomanageConfigurationAssignmentConfig <a name="ArcMachineAutomanageConfigurationAssignmentConfig" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ArcMachineAutomanageConfigurationAssignmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ArcMachineId,
    string ConfigurationId,
    string Id = null,
    ArcMachineAutomanageConfigurationAssignmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.arcMachineId">ArcMachineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/arc_machine_automanage_configuration_assignment#arc_machine_id ArcMachineAutomanageConfigurationAssignment#arc_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.configurationId">ConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/arc_machine_automanage_configuration_assignment#configuration_id ArcMachineAutomanageConfigurationAssignment#configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/arc_machine_automanage_configuration_assignment#id ArcMachineAutomanageConfigurationAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts">ArcMachineAutomanageConfigurationAssignmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ArcMachineId`<sup>Required</sup> <a name="ArcMachineId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.arcMachineId"></a>

```csharp
public string ArcMachineId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/arc_machine_automanage_configuration_assignment#arc_machine_id ArcMachineAutomanageConfigurationAssignment#arc_machine_id}.

---

##### `ConfigurationId`<sup>Required</sup> <a name="ConfigurationId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.configurationId"></a>

```csharp
public string ConfigurationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/arc_machine_automanage_configuration_assignment#configuration_id ArcMachineAutomanageConfigurationAssignment#configuration_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/arc_machine_automanage_configuration_assignment#id ArcMachineAutomanageConfigurationAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.timeouts"></a>

```csharp
public ArcMachineAutomanageConfigurationAssignmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts">ArcMachineAutomanageConfigurationAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/arc_machine_automanage_configuration_assignment#timeouts ArcMachineAutomanageConfigurationAssignment#timeouts}

---

### ArcMachineAutomanageConfigurationAssignmentTimeouts <a name="ArcMachineAutomanageConfigurationAssignmentTimeouts" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ArcMachineAutomanageConfigurationAssignmentTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/arc_machine_automanage_configuration_assignment#create ArcMachineAutomanageConfigurationAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/arc_machine_automanage_configuration_assignment#delete ArcMachineAutomanageConfigurationAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/arc_machine_automanage_configuration_assignment#read ArcMachineAutomanageConfigurationAssignment#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/arc_machine_automanage_configuration_assignment#create ArcMachineAutomanageConfigurationAssignment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/arc_machine_automanage_configuration_assignment#delete ArcMachineAutomanageConfigurationAssignment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/arc_machine_automanage_configuration_assignment#read ArcMachineAutomanageConfigurationAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference <a name="ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



