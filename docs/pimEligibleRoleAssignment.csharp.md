# `pimEligibleRoleAssignment` Submodule <a name="`pimEligibleRoleAssignment` Submodule" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PimEligibleRoleAssignment <a name="PimEligibleRoleAssignment" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/pim_eligible_role_assignment azurerm_pim_eligible_role_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PimEligibleRoleAssignment(Construct Scope, string Id, PimEligibleRoleAssignmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig">PimEligibleRoleAssignmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig">PimEligibleRoleAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.putTicket">PutTicket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetJustification">ResetJustification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetTicket">ResetTicket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.putSchedule"></a>

```csharp
private void PutSchedule(PimEligibleRoleAssignmentSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule">PimEligibleRoleAssignmentSchedule</a>

---

##### `PutTicket` <a name="PutTicket" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.putTicket"></a>

```csharp
private void PutTicket(PimEligibleRoleAssignmentTicket Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.putTicket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket">PimEligibleRoleAssignmentTicket</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.putTimeouts"></a>

```csharp
private void PutTimeouts(PimEligibleRoleAssignmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts">PimEligibleRoleAssignmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetJustification` <a name="ResetJustification" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetJustification"></a>

```csharp
private void ResetJustification()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetTicket` <a name="ResetTicket" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetTicket"></a>

```csharp
private void ResetTicket()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PimEligibleRoleAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PimEligibleRoleAssignment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PimEligibleRoleAssignment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PimEligibleRoleAssignment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PimEligibleRoleAssignment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PimEligibleRoleAssignment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PimEligibleRoleAssignment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PimEligibleRoleAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/pim_eligible_role_assignment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PimEligibleRoleAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.principalType">PrincipalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference">PimEligibleRoleAssignmentScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.ticket">Ticket</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference">PimEligibleRoleAssignmentTicketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference">PimEligibleRoleAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.justificationInput">JustificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.principalIdInput">PrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.roleDefinitionIdInput">RoleDefinitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule">PimEligibleRoleAssignmentSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.ticketInput">TicketInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket">PimEligibleRoleAssignmentTicket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.justification">Justification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.roleDefinitionId">RoleDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.scope">Scope</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.principalType"></a>

```csharp
public string PrincipalType { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.schedule"></a>

```csharp
public PimEligibleRoleAssignmentScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference">PimEligibleRoleAssignmentScheduleOutputReference</a>

---

##### `Ticket`<sup>Required</sup> <a name="Ticket" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.ticket"></a>

```csharp
public PimEligibleRoleAssignmentTicketOutputReference Ticket { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference">PimEligibleRoleAssignmentTicketOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.timeouts"></a>

```csharp
public PimEligibleRoleAssignmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference">PimEligibleRoleAssignmentTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `JustificationInput`<sup>Optional</sup> <a name="JustificationInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.justificationInput"></a>

```csharp
public string JustificationInput { get; }
```

- *Type:* string

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.principalIdInput"></a>

```csharp
public string PrincipalIdInput { get; }
```

- *Type:* string

---

##### `RoleDefinitionIdInput`<sup>Optional</sup> <a name="RoleDefinitionIdInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.roleDefinitionIdInput"></a>

```csharp
public string RoleDefinitionIdInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.scheduleInput"></a>

```csharp
public PimEligibleRoleAssignmentSchedule ScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule">PimEligibleRoleAssignmentSchedule</a>

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `TicketInput`<sup>Optional</sup> <a name="TicketInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.ticketInput"></a>

```csharp
public PimEligibleRoleAssignmentTicket TicketInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket">PimEligibleRoleAssignmentTicket</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Justification`<sup>Required</sup> <a name="Justification" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.justification"></a>

```csharp
public string Justification { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `RoleDefinitionId`<sup>Required</sup> <a name="RoleDefinitionId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.roleDefinitionId"></a>

```csharp
public string RoleDefinitionId { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PimEligibleRoleAssignmentConfig <a name="PimEligibleRoleAssignmentConfig" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PimEligibleRoleAssignmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PrincipalId,
    string RoleDefinitionId,
    string Scope,
    string Id = null,
    string Justification = null,
    PimEligibleRoleAssignmentSchedule Schedule = null,
    PimEligibleRoleAssignmentTicket Ticket = null,
    PimEligibleRoleAssignmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.principalId">PrincipalId</a></code> | <code>string</code> | The principal id. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.roleDefinitionId">RoleDefinitionId</a></code> | <code>string</code> | The role definition id. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.scope">Scope</a></code> | <code>string</code> | The scope. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/pim_eligible_role_assignment#id PimEligibleRoleAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.justification">Justification</a></code> | <code>string</code> | The justification of the eligible role assignment. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule">PimEligibleRoleAssignmentSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.ticket">Ticket</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket">PimEligibleRoleAssignmentTicket</a></code> | ticket block. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts">PimEligibleRoleAssignmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.principalId"></a>

```csharp
public string PrincipalId { get; set; }
```

- *Type:* string

The principal id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/pim_eligible_role_assignment#principal_id PimEligibleRoleAssignment#principal_id}

---

##### `RoleDefinitionId`<sup>Required</sup> <a name="RoleDefinitionId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.roleDefinitionId"></a>

```csharp
public string RoleDefinitionId { get; set; }
```

- *Type:* string

The role definition id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/pim_eligible_role_assignment#role_definition_id PimEligibleRoleAssignment#role_definition_id}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

The scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/pim_eligible_role_assignment#scope PimEligibleRoleAssignment#scope}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/pim_eligible_role_assignment#id PimEligibleRoleAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Justification`<sup>Optional</sup> <a name="Justification" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.justification"></a>

```csharp
public string Justification { get; set; }
```

- *Type:* string

The justification of the eligible role assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/pim_eligible_role_assignment#justification PimEligibleRoleAssignment#justification}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.schedule"></a>

```csharp
public PimEligibleRoleAssignmentSchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule">PimEligibleRoleAssignmentSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/pim_eligible_role_assignment#schedule PimEligibleRoleAssignment#schedule}

---

##### `Ticket`<sup>Optional</sup> <a name="Ticket" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.ticket"></a>

```csharp
public PimEligibleRoleAssignmentTicket Ticket { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket">PimEligibleRoleAssignmentTicket</a>

ticket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/pim_eligible_role_assignment#ticket PimEligibleRoleAssignment#ticket}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.timeouts"></a>

```csharp
public PimEligibleRoleAssignmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts">PimEligibleRoleAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/pim_eligible_role_assignment#timeouts PimEligibleRoleAssignment#timeouts}

---

### PimEligibleRoleAssignmentSchedule <a name="PimEligibleRoleAssignmentSchedule" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PimEligibleRoleAssignmentSchedule {
    PimEligibleRoleAssignmentScheduleExpiration Expiration = null,
    string StartDateTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule.property.expiration">Expiration</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration">PimEligibleRoleAssignmentScheduleExpiration</a></code> | expiration block. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule.property.startDateTime">StartDateTime</a></code> | <code>string</code> | The start date time. |

---

##### `Expiration`<sup>Optional</sup> <a name="Expiration" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule.property.expiration"></a>

```csharp
public PimEligibleRoleAssignmentScheduleExpiration Expiration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration">PimEligibleRoleAssignmentScheduleExpiration</a>

expiration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/pim_eligible_role_assignment#expiration PimEligibleRoleAssignment#expiration}

---

##### `StartDateTime`<sup>Optional</sup> <a name="StartDateTime" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule.property.startDateTime"></a>

```csharp
public string StartDateTime { get; set; }
```

- *Type:* string

The start date time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/pim_eligible_role_assignment#start_date_time PimEligibleRoleAssignment#start_date_time}

---

### PimEligibleRoleAssignmentScheduleExpiration <a name="PimEligibleRoleAssignmentScheduleExpiration" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PimEligibleRoleAssignmentScheduleExpiration {
    double DurationDays = null,
    double DurationHours = null,
    string EndDateTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration.property.durationDays">DurationDays</a></code> | <code>double</code> | The duration of the assignment in days. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration.property.durationHours">DurationHours</a></code> | <code>double</code> | The duration of the assignment in hours. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration.property.endDateTime">EndDateTime</a></code> | <code>string</code> | The end date time of the assignment. |

---

##### `DurationDays`<sup>Optional</sup> <a name="DurationDays" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration.property.durationDays"></a>

```csharp
public double DurationDays { get; set; }
```

- *Type:* double

The duration of the assignment in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/pim_eligible_role_assignment#duration_days PimEligibleRoleAssignment#duration_days}

---

##### `DurationHours`<sup>Optional</sup> <a name="DurationHours" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration.property.durationHours"></a>

```csharp
public double DurationHours { get; set; }
```

- *Type:* double

The duration of the assignment in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/pim_eligible_role_assignment#duration_hours PimEligibleRoleAssignment#duration_hours}

---

##### `EndDateTime`<sup>Optional</sup> <a name="EndDateTime" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration.property.endDateTime"></a>

```csharp
public string EndDateTime { get; set; }
```

- *Type:* string

The end date time of the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/pim_eligible_role_assignment#end_date_time PimEligibleRoleAssignment#end_date_time}

---

### PimEligibleRoleAssignmentTicket <a name="PimEligibleRoleAssignmentTicket" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PimEligibleRoleAssignmentTicket {
    string Number = null,
    string SystemAttribute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket.property.number">Number</a></code> | <code>string</code> | The ticket number. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket.property.systemAttribute">SystemAttribute</a></code> | <code>string</code> | The ticket system. |

---

##### `Number`<sup>Optional</sup> <a name="Number" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket.property.number"></a>

```csharp
public string Number { get; set; }
```

- *Type:* string

The ticket number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/pim_eligible_role_assignment#number PimEligibleRoleAssignment#number}

---

##### `SystemAttribute`<sup>Optional</sup> <a name="SystemAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket.property.systemAttribute"></a>

```csharp
public string SystemAttribute { get; set; }
```

- *Type:* string

The ticket system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/pim_eligible_role_assignment#system PimEligibleRoleAssignment#system}

---

### PimEligibleRoleAssignmentTimeouts <a name="PimEligibleRoleAssignmentTimeouts" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PimEligibleRoleAssignmentTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/pim_eligible_role_assignment#create PimEligibleRoleAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/pim_eligible_role_assignment#delete PimEligibleRoleAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/pim_eligible_role_assignment#read PimEligibleRoleAssignment#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/pim_eligible_role_assignment#create PimEligibleRoleAssignment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/pim_eligible_role_assignment#delete PimEligibleRoleAssignment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/pim_eligible_role_assignment#read PimEligibleRoleAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### PimEligibleRoleAssignmentScheduleExpirationOutputReference <a name="PimEligibleRoleAssignmentScheduleExpirationOutputReference" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PimEligibleRoleAssignmentScheduleExpirationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.resetDurationDays">ResetDurationDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.resetDurationHours">ResetDurationHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.resetEndDateTime">ResetEndDateTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDurationDays` <a name="ResetDurationDays" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.resetDurationDays"></a>

```csharp
private void ResetDurationDays()
```

##### `ResetDurationHours` <a name="ResetDurationHours" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.resetDurationHours"></a>

```csharp
private void ResetDurationHours()
```

##### `ResetEndDateTime` <a name="ResetEndDateTime" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.resetEndDateTime"></a>

```csharp
private void ResetEndDateTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.durationDaysInput">DurationDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.durationHoursInput">DurationHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.endDateTimeInput">EndDateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.durationDays">DurationDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.durationHours">DurationHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.endDateTime">EndDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration">PimEligibleRoleAssignmentScheduleExpiration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DurationDaysInput`<sup>Optional</sup> <a name="DurationDaysInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.durationDaysInput"></a>

```csharp
public double DurationDaysInput { get; }
```

- *Type:* double

---

##### `DurationHoursInput`<sup>Optional</sup> <a name="DurationHoursInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.durationHoursInput"></a>

```csharp
public double DurationHoursInput { get; }
```

- *Type:* double

---

##### `EndDateTimeInput`<sup>Optional</sup> <a name="EndDateTimeInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.endDateTimeInput"></a>

```csharp
public string EndDateTimeInput { get; }
```

- *Type:* string

---

##### `DurationDays`<sup>Required</sup> <a name="DurationDays" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.durationDays"></a>

```csharp
public double DurationDays { get; }
```

- *Type:* double

---

##### `DurationHours`<sup>Required</sup> <a name="DurationHours" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.durationHours"></a>

```csharp
public double DurationHours { get; }
```

- *Type:* double

---

##### `EndDateTime`<sup>Required</sup> <a name="EndDateTime" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.endDateTime"></a>

```csharp
public string EndDateTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.internalValue"></a>

```csharp
public PimEligibleRoleAssignmentScheduleExpiration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration">PimEligibleRoleAssignmentScheduleExpiration</a>

---


### PimEligibleRoleAssignmentScheduleOutputReference <a name="PimEligibleRoleAssignmentScheduleOutputReference" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PimEligibleRoleAssignmentScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.putExpiration">PutExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.resetExpiration">ResetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.resetStartDateTime">ResetStartDateTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpiration` <a name="PutExpiration" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.putExpiration"></a>

```csharp
private void PutExpiration(PimEligibleRoleAssignmentScheduleExpiration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.putExpiration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration">PimEligibleRoleAssignmentScheduleExpiration</a>

---

##### `ResetExpiration` <a name="ResetExpiration" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.resetExpiration"></a>

```csharp
private void ResetExpiration()
```

##### `ResetStartDateTime` <a name="ResetStartDateTime" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.resetStartDateTime"></a>

```csharp
private void ResetStartDateTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.expiration">Expiration</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference">PimEligibleRoleAssignmentScheduleExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.expirationInput">ExpirationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration">PimEligibleRoleAssignmentScheduleExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.startDateTimeInput">StartDateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.startDateTime">StartDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule">PimEligibleRoleAssignmentSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.expiration"></a>

```csharp
public PimEligibleRoleAssignmentScheduleExpirationOutputReference Expiration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference">PimEligibleRoleAssignmentScheduleExpirationOutputReference</a>

---

##### `ExpirationInput`<sup>Optional</sup> <a name="ExpirationInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.expirationInput"></a>

```csharp
public PimEligibleRoleAssignmentScheduleExpiration ExpirationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration">PimEligibleRoleAssignmentScheduleExpiration</a>

---

##### `StartDateTimeInput`<sup>Optional</sup> <a name="StartDateTimeInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.startDateTimeInput"></a>

```csharp
public string StartDateTimeInput { get; }
```

- *Type:* string

---

##### `StartDateTime`<sup>Required</sup> <a name="StartDateTime" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.startDateTime"></a>

```csharp
public string StartDateTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.internalValue"></a>

```csharp
public PimEligibleRoleAssignmentSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule">PimEligibleRoleAssignmentSchedule</a>

---


### PimEligibleRoleAssignmentTicketOutputReference <a name="PimEligibleRoleAssignmentTicketOutputReference" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PimEligibleRoleAssignmentTicketOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.resetNumber">ResetNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.resetSystemAttribute">ResetSystemAttribute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNumber` <a name="ResetNumber" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.resetNumber"></a>

```csharp
private void ResetNumber()
```

##### `ResetSystemAttribute` <a name="ResetSystemAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.resetSystemAttribute"></a>

```csharp
private void ResetSystemAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.numberInput">NumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.systemAttributeInput">SystemAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.number">Number</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.systemAttribute">SystemAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket">PimEligibleRoleAssignmentTicket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NumberInput`<sup>Optional</sup> <a name="NumberInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.numberInput"></a>

```csharp
public string NumberInput { get; }
```

- *Type:* string

---

##### `SystemAttributeInput`<sup>Optional</sup> <a name="SystemAttributeInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.systemAttributeInput"></a>

```csharp
public string SystemAttributeInput { get; }
```

- *Type:* string

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.number"></a>

```csharp
public string Number { get; }
```

- *Type:* string

---

##### `SystemAttribute`<sup>Required</sup> <a name="SystemAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.systemAttribute"></a>

```csharp
public string SystemAttribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.internalValue"></a>

```csharp
public PimEligibleRoleAssignmentTicket InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket">PimEligibleRoleAssignmentTicket</a>

---


### PimEligibleRoleAssignmentTimeoutsOutputReference <a name="PimEligibleRoleAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PimEligibleRoleAssignmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



