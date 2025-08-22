# `roleManagementPolicy` Submodule <a name="`roleManagementPolicy` Submodule" id="@cdktf/provider-azurerm.roleManagementPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RoleManagementPolicy <a name="RoleManagementPolicy" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy azurerm_role_management_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicy(Construct Scope, string Id, RoleManagementPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig">RoleManagementPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig">RoleManagementPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putActivationRules">PutActivationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putActiveAssignmentRules">PutActiveAssignmentRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putEligibleAssignmentRules">PutEligibleAssignmentRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putNotificationRules">PutNotificationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.resetActivationRules">ResetActivationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.resetActiveAssignmentRules">ResetActiveAssignmentRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.resetEligibleAssignmentRules">ResetEligibleAssignmentRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.resetNotificationRules">ResetNotificationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActivationRules` <a name="PutActivationRules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putActivationRules"></a>

```csharp
private void PutActivationRules(RoleManagementPolicyActivationRules Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putActivationRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules">RoleManagementPolicyActivationRules</a>

---

##### `PutActiveAssignmentRules` <a name="PutActiveAssignmentRules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putActiveAssignmentRules"></a>

```csharp
private void PutActiveAssignmentRules(RoleManagementPolicyActiveAssignmentRules Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putActiveAssignmentRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules">RoleManagementPolicyActiveAssignmentRules</a>

---

##### `PutEligibleAssignmentRules` <a name="PutEligibleAssignmentRules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putEligibleAssignmentRules"></a>

```csharp
private void PutEligibleAssignmentRules(RoleManagementPolicyEligibleAssignmentRules Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putEligibleAssignmentRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRules">RoleManagementPolicyEligibleAssignmentRules</a>

---

##### `PutNotificationRules` <a name="PutNotificationRules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putNotificationRules"></a>

```csharp
private void PutNotificationRules(RoleManagementPolicyNotificationRules Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putNotificationRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules">RoleManagementPolicyNotificationRules</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(RoleManagementPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts">RoleManagementPolicyTimeouts</a>

---

##### `ResetActivationRules` <a name="ResetActivationRules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.resetActivationRules"></a>

```csharp
private void ResetActivationRules()
```

##### `ResetActiveAssignmentRules` <a name="ResetActiveAssignmentRules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.resetActiveAssignmentRules"></a>

```csharp
private void ResetActiveAssignmentRules()
```

##### `ResetEligibleAssignmentRules` <a name="ResetEligibleAssignmentRules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.resetEligibleAssignmentRules"></a>

```csharp
private void ResetEligibleAssignmentRules()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNotificationRules` <a name="ResetNotificationRules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.resetNotificationRules"></a>

```csharp
private void ResetNotificationRules()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RoleManagementPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

RoleManagementPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

RoleManagementPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

RoleManagementPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

RoleManagementPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a RoleManagementPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RoleManagementPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RoleManagementPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the RoleManagementPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.activationRules">ActivationRules</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference">RoleManagementPolicyActivationRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.activeAssignmentRules">ActiveAssignmentRules</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference">RoleManagementPolicyActiveAssignmentRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.eligibleAssignmentRules">EligibleAssignmentRules</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference">RoleManagementPolicyEligibleAssignmentRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.notificationRules">NotificationRules</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference">RoleManagementPolicyNotificationRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference">RoleManagementPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.activationRulesInput">ActivationRulesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules">RoleManagementPolicyActivationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.activeAssignmentRulesInput">ActiveAssignmentRulesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules">RoleManagementPolicyActiveAssignmentRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.eligibleAssignmentRulesInput">EligibleAssignmentRulesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRules">RoleManagementPolicyEligibleAssignmentRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.notificationRulesInput">NotificationRulesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules">RoleManagementPolicyNotificationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.roleDefinitionIdInput">RoleDefinitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.roleDefinitionId">RoleDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.scope">Scope</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ActivationRules`<sup>Required</sup> <a name="ActivationRules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.activationRules"></a>

```csharp
public RoleManagementPolicyActivationRulesOutputReference ActivationRules { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference">RoleManagementPolicyActivationRulesOutputReference</a>

---

##### `ActiveAssignmentRules`<sup>Required</sup> <a name="ActiveAssignmentRules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.activeAssignmentRules"></a>

```csharp
public RoleManagementPolicyActiveAssignmentRulesOutputReference ActiveAssignmentRules { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference">RoleManagementPolicyActiveAssignmentRulesOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EligibleAssignmentRules`<sup>Required</sup> <a name="EligibleAssignmentRules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.eligibleAssignmentRules"></a>

```csharp
public RoleManagementPolicyEligibleAssignmentRulesOutputReference EligibleAssignmentRules { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference">RoleManagementPolicyEligibleAssignmentRulesOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NotificationRules`<sup>Required</sup> <a name="NotificationRules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.notificationRules"></a>

```csharp
public RoleManagementPolicyNotificationRulesOutputReference NotificationRules { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference">RoleManagementPolicyNotificationRulesOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.timeouts"></a>

```csharp
public RoleManagementPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference">RoleManagementPolicyTimeoutsOutputReference</a>

---

##### `ActivationRulesInput`<sup>Optional</sup> <a name="ActivationRulesInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.activationRulesInput"></a>

```csharp
public RoleManagementPolicyActivationRules ActivationRulesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules">RoleManagementPolicyActivationRules</a>

---

##### `ActiveAssignmentRulesInput`<sup>Optional</sup> <a name="ActiveAssignmentRulesInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.activeAssignmentRulesInput"></a>

```csharp
public RoleManagementPolicyActiveAssignmentRules ActiveAssignmentRulesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules">RoleManagementPolicyActiveAssignmentRules</a>

---

##### `EligibleAssignmentRulesInput`<sup>Optional</sup> <a name="EligibleAssignmentRulesInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.eligibleAssignmentRulesInput"></a>

```csharp
public RoleManagementPolicyEligibleAssignmentRules EligibleAssignmentRulesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRules">RoleManagementPolicyEligibleAssignmentRules</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NotificationRulesInput`<sup>Optional</sup> <a name="NotificationRulesInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.notificationRulesInput"></a>

```csharp
public RoleManagementPolicyNotificationRules NotificationRulesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules">RoleManagementPolicyNotificationRules</a>

---

##### `RoleDefinitionIdInput`<sup>Optional</sup> <a name="RoleDefinitionIdInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.roleDefinitionIdInput"></a>

```csharp
public string RoleDefinitionIdInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RoleDefinitionId`<sup>Required</sup> <a name="RoleDefinitionId" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.roleDefinitionId"></a>

```csharp
public string RoleDefinitionId { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RoleManagementPolicyActivationRules <a name="RoleManagementPolicyActivationRules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyActivationRules {
    RoleManagementPolicyActivationRulesApprovalStage ApprovalStage = null,
    string MaximumDuration = null,
    object RequireApproval = null,
    string RequiredConditionalAccessAuthenticationContext = null,
    object RequireJustification = null,
    object RequireMultifactorAuthentication = null,
    object RequireTicketInfo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.property.approvalStage">ApprovalStage</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStage">RoleManagementPolicyActivationRulesApprovalStage</a></code> | approval_stage block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.property.maximumDuration">MaximumDuration</a></code> | <code>string</code> | The time after which the an activation can be valid for. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.property.requireApproval">RequireApproval</a></code> | <code>object</code> | Whether an approval is required for activation. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.property.requiredConditionalAccessAuthenticationContext">RequiredConditionalAccessAuthenticationContext</a></code> | <code>string</code> | Whether a conditional access context is required during activation. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.property.requireJustification">RequireJustification</a></code> | <code>object</code> | Whether a justification is required during activation. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.property.requireMultifactorAuthentication">RequireMultifactorAuthentication</a></code> | <code>object</code> | Whether multi-factor authentication is required during activation. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.property.requireTicketInfo">RequireTicketInfo</a></code> | <code>object</code> | Whether ticket information is required during activation. |

---

##### `ApprovalStage`<sup>Optional</sup> <a name="ApprovalStage" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.property.approvalStage"></a>

```csharp
public RoleManagementPolicyActivationRulesApprovalStage ApprovalStage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStage">RoleManagementPolicyActivationRulesApprovalStage</a>

approval_stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#approval_stage RoleManagementPolicy#approval_stage}

---

##### `MaximumDuration`<sup>Optional</sup> <a name="MaximumDuration" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.property.maximumDuration"></a>

```csharp
public string MaximumDuration { get; set; }
```

- *Type:* string

The time after which the an activation can be valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#maximum_duration RoleManagementPolicy#maximum_duration}

---

##### `RequireApproval`<sup>Optional</sup> <a name="RequireApproval" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.property.requireApproval"></a>

```csharp
public object RequireApproval { get; set; }
```

- *Type:* object

Whether an approval is required for activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#require_approval RoleManagementPolicy#require_approval}

---

##### `RequiredConditionalAccessAuthenticationContext`<sup>Optional</sup> <a name="RequiredConditionalAccessAuthenticationContext" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.property.requiredConditionalAccessAuthenticationContext"></a>

```csharp
public string RequiredConditionalAccessAuthenticationContext { get; set; }
```

- *Type:* string

Whether a conditional access context is required during activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#required_conditional_access_authentication_context RoleManagementPolicy#required_conditional_access_authentication_context}

---

##### `RequireJustification`<sup>Optional</sup> <a name="RequireJustification" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.property.requireJustification"></a>

```csharp
public object RequireJustification { get; set; }
```

- *Type:* object

Whether a justification is required during activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#require_justification RoleManagementPolicy#require_justification}

---

##### `RequireMultifactorAuthentication`<sup>Optional</sup> <a name="RequireMultifactorAuthentication" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.property.requireMultifactorAuthentication"></a>

```csharp
public object RequireMultifactorAuthentication { get; set; }
```

- *Type:* object

Whether multi-factor authentication is required during activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#require_multifactor_authentication RoleManagementPolicy#require_multifactor_authentication}

---

##### `RequireTicketInfo`<sup>Optional</sup> <a name="RequireTicketInfo" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.property.requireTicketInfo"></a>

```csharp
public object RequireTicketInfo { get; set; }
```

- *Type:* object

Whether ticket information is required during activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#require_ticket_info RoleManagementPolicy#require_ticket_info}

---

### RoleManagementPolicyActivationRulesApprovalStage <a name="RoleManagementPolicyActivationRulesApprovalStage" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyActivationRulesApprovalStage {
    object PrimaryApprover
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStage.property.primaryApprover">PrimaryApprover</a></code> | <code>object</code> | primary_approver block. |

---

##### `PrimaryApprover`<sup>Required</sup> <a name="PrimaryApprover" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStage.property.primaryApprover"></a>

```csharp
public object PrimaryApprover { get; set; }
```

- *Type:* object

primary_approver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#primary_approver RoleManagementPolicy#primary_approver}

---

### RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover <a name="RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover {
    string ObjectId,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover.property.objectId">ObjectId</a></code> | <code>string</code> | The ID of the object to act as an approver. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover.property.type">Type</a></code> | <code>string</code> | The type of object acting as an approver. |

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover.property.objectId"></a>

```csharp
public string ObjectId { get; set; }
```

- *Type:* string

The ID of the object to act as an approver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#object_id RoleManagementPolicy#object_id}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of object acting as an approver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#type RoleManagementPolicy#type}

---

### RoleManagementPolicyActiveAssignmentRules <a name="RoleManagementPolicyActiveAssignmentRules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyActiveAssignmentRules {
    object ExpirationRequired = null,
    string ExpireAfter = null,
    object RequireJustification = null,
    object RequireMultifactorAuthentication = null,
    object RequireTicketInfo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules.property.expirationRequired">ExpirationRequired</a></code> | <code>object</code> | Must the assignment have an expiry date. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules.property.expireAfter">ExpireAfter</a></code> | <code>string</code> | The duration after which assignments expire. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules.property.requireJustification">RequireJustification</a></code> | <code>object</code> | Whether a justification is required to make an assignment. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules.property.requireMultifactorAuthentication">RequireMultifactorAuthentication</a></code> | <code>object</code> | Whether multi-factor authentication is required to make an assignment. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules.property.requireTicketInfo">RequireTicketInfo</a></code> | <code>object</code> | Whether ticket information is required to make an assignment. |

---

##### `ExpirationRequired`<sup>Optional</sup> <a name="ExpirationRequired" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules.property.expirationRequired"></a>

```csharp
public object ExpirationRequired { get; set; }
```

- *Type:* object

Must the assignment have an expiry date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#expiration_required RoleManagementPolicy#expiration_required}

---

##### `ExpireAfter`<sup>Optional</sup> <a name="ExpireAfter" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules.property.expireAfter"></a>

```csharp
public string ExpireAfter { get; set; }
```

- *Type:* string

The duration after which assignments expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#expire_after RoleManagementPolicy#expire_after}

---

##### `RequireJustification`<sup>Optional</sup> <a name="RequireJustification" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules.property.requireJustification"></a>

```csharp
public object RequireJustification { get; set; }
```

- *Type:* object

Whether a justification is required to make an assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#require_justification RoleManagementPolicy#require_justification}

---

##### `RequireMultifactorAuthentication`<sup>Optional</sup> <a name="RequireMultifactorAuthentication" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules.property.requireMultifactorAuthentication"></a>

```csharp
public object RequireMultifactorAuthentication { get; set; }
```

- *Type:* object

Whether multi-factor authentication is required to make an assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#require_multifactor_authentication RoleManagementPolicy#require_multifactor_authentication}

---

##### `RequireTicketInfo`<sup>Optional</sup> <a name="RequireTicketInfo" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules.property.requireTicketInfo"></a>

```csharp
public object RequireTicketInfo { get; set; }
```

- *Type:* object

Whether ticket information is required to make an assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#require_ticket_info RoleManagementPolicy#require_ticket_info}

---

### RoleManagementPolicyConfig <a name="RoleManagementPolicyConfig" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string RoleDefinitionId,
    string Scope,
    RoleManagementPolicyActivationRules ActivationRules = null,
    RoleManagementPolicyActiveAssignmentRules ActiveAssignmentRules = null,
    RoleManagementPolicyEligibleAssignmentRules EligibleAssignmentRules = null,
    string Id = null,
    RoleManagementPolicyNotificationRules NotificationRules = null,
    RoleManagementPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.roleDefinitionId">RoleDefinitionId</a></code> | <code>string</code> | ID of the Azure Role to which this policy is assigned. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.scope">Scope</a></code> | <code>string</code> | The scope of the role to which this policy will apply. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.activationRules">ActivationRules</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules">RoleManagementPolicyActivationRules</a></code> | activation_rules block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.activeAssignmentRules">ActiveAssignmentRules</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules">RoleManagementPolicyActiveAssignmentRules</a></code> | active_assignment_rules block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.eligibleAssignmentRules">EligibleAssignmentRules</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRules">RoleManagementPolicyEligibleAssignmentRules</a></code> | eligible_assignment_rules block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#id RoleManagementPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.notificationRules">NotificationRules</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules">RoleManagementPolicyNotificationRules</a></code> | notification_rules block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts">RoleManagementPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `RoleDefinitionId`<sup>Required</sup> <a name="RoleDefinitionId" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.roleDefinitionId"></a>

```csharp
public string RoleDefinitionId { get; set; }
```

- *Type:* string

ID of the Azure Role to which this policy is assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#role_definition_id RoleManagementPolicy#role_definition_id}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

The scope of the role to which this policy will apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#scope RoleManagementPolicy#scope}

---

##### `ActivationRules`<sup>Optional</sup> <a name="ActivationRules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.activationRules"></a>

```csharp
public RoleManagementPolicyActivationRules ActivationRules { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules">RoleManagementPolicyActivationRules</a>

activation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#activation_rules RoleManagementPolicy#activation_rules}

---

##### `ActiveAssignmentRules`<sup>Optional</sup> <a name="ActiveAssignmentRules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.activeAssignmentRules"></a>

```csharp
public RoleManagementPolicyActiveAssignmentRules ActiveAssignmentRules { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules">RoleManagementPolicyActiveAssignmentRules</a>

active_assignment_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#active_assignment_rules RoleManagementPolicy#active_assignment_rules}

---

##### `EligibleAssignmentRules`<sup>Optional</sup> <a name="EligibleAssignmentRules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.eligibleAssignmentRules"></a>

```csharp
public RoleManagementPolicyEligibleAssignmentRules EligibleAssignmentRules { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRules">RoleManagementPolicyEligibleAssignmentRules</a>

eligible_assignment_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#eligible_assignment_rules RoleManagementPolicy#eligible_assignment_rules}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#id RoleManagementPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotificationRules`<sup>Optional</sup> <a name="NotificationRules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.notificationRules"></a>

```csharp
public RoleManagementPolicyNotificationRules NotificationRules { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules">RoleManagementPolicyNotificationRules</a>

notification_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#notification_rules RoleManagementPolicy#notification_rules}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.timeouts"></a>

```csharp
public RoleManagementPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts">RoleManagementPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#timeouts RoleManagementPolicy#timeouts}

---

### RoleManagementPolicyEligibleAssignmentRules <a name="RoleManagementPolicyEligibleAssignmentRules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyEligibleAssignmentRules {
    object ExpirationRequired = null,
    string ExpireAfter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRules.property.expirationRequired">ExpirationRequired</a></code> | <code>object</code> | Must the assignment have an expiry date. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRules.property.expireAfter">ExpireAfter</a></code> | <code>string</code> | The duration after which assignments expire. |

---

##### `ExpirationRequired`<sup>Optional</sup> <a name="ExpirationRequired" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRules.property.expirationRequired"></a>

```csharp
public object ExpirationRequired { get; set; }
```

- *Type:* object

Must the assignment have an expiry date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#expiration_required RoleManagementPolicy#expiration_required}

---

##### `ExpireAfter`<sup>Optional</sup> <a name="ExpireAfter" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRules.property.expireAfter"></a>

```csharp
public string ExpireAfter { get; set; }
```

- *Type:* string

The duration after which assignments expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#expire_after RoleManagementPolicy#expire_after}

---

### RoleManagementPolicyNotificationRules <a name="RoleManagementPolicyNotificationRules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyNotificationRules {
    RoleManagementPolicyNotificationRulesActiveAssignments ActiveAssignments = null,
    RoleManagementPolicyNotificationRulesEligibleActivations EligibleActivations = null,
    RoleManagementPolicyNotificationRulesEligibleAssignments EligibleAssignments = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules.property.activeAssignments">ActiveAssignments</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments">RoleManagementPolicyNotificationRulesActiveAssignments</a></code> | active_assignments block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules.property.eligibleActivations">EligibleActivations</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations">RoleManagementPolicyNotificationRulesEligibleActivations</a></code> | eligible_activations block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules.property.eligibleAssignments">EligibleAssignments</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments">RoleManagementPolicyNotificationRulesEligibleAssignments</a></code> | eligible_assignments block. |

---

##### `ActiveAssignments`<sup>Optional</sup> <a name="ActiveAssignments" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules.property.activeAssignments"></a>

```csharp
public RoleManagementPolicyNotificationRulesActiveAssignments ActiveAssignments { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments">RoleManagementPolicyNotificationRulesActiveAssignments</a>

active_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#active_assignments RoleManagementPolicy#active_assignments}

---

##### `EligibleActivations`<sup>Optional</sup> <a name="EligibleActivations" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules.property.eligibleActivations"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleActivations EligibleActivations { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations">RoleManagementPolicyNotificationRulesEligibleActivations</a>

eligible_activations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#eligible_activations RoleManagementPolicy#eligible_activations}

---

##### `EligibleAssignments`<sup>Optional</sup> <a name="EligibleAssignments" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules.property.eligibleAssignments"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleAssignments EligibleAssignments { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments">RoleManagementPolicyNotificationRulesEligibleAssignments</a>

eligible_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#eligible_assignments RoleManagementPolicy#eligible_assignments}

---

### RoleManagementPolicyNotificationRulesActiveAssignments <a name="RoleManagementPolicyNotificationRulesActiveAssignments" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyNotificationRulesActiveAssignments {
    RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications AdminNotifications = null,
    RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications ApproverNotifications = null,
    RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications AssigneeNotifications = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments.property.adminNotifications">AdminNotifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a></code> | admin_notifications block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments.property.approverNotifications">ApproverNotifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a></code> | approver_notifications block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments.property.assigneeNotifications">AssigneeNotifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a></code> | assignee_notifications block. |

---

##### `AdminNotifications`<sup>Optional</sup> <a name="AdminNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments.property.adminNotifications"></a>

```csharp
public RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications AdminNotifications { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a>

admin_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#admin_notifications RoleManagementPolicy#admin_notifications}

---

##### `ApproverNotifications`<sup>Optional</sup> <a name="ApproverNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments.property.approverNotifications"></a>

```csharp
public RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications ApproverNotifications { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a>

approver_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#approver_notifications RoleManagementPolicy#approver_notifications}

---

##### `AssigneeNotifications`<sup>Optional</sup> <a name="AssigneeNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments.property.assigneeNotifications"></a>

```csharp
public RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications AssigneeNotifications { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a>

assignee_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#assignee_notifications RoleManagementPolicy#assignee_notifications}

---

### RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications <a name="RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications {
    object DefaultRecipients,
    string NotificationLevel,
    string[] AdditionalRecipients = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.defaultRecipients">DefaultRecipients</a></code> | <code>object</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.notificationLevel">NotificationLevel</a></code> | <code>string</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.additionalRecipients">AdditionalRecipients</a></code> | <code>string[]</code> | The additional recipients to notify. |

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.defaultRecipients"></a>

```csharp
public object DefaultRecipients { get; set; }
```

- *Type:* object

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.notificationLevel"></a>

```csharp
public string NotificationLevel { get; set; }
```

- *Type:* string

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}

---

##### `AdditionalRecipients`<sup>Optional</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.additionalRecipients"></a>

```csharp
public string[] AdditionalRecipients { get; set; }
```

- *Type:* string[]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}

---

### RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications <a name="RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications {
    object DefaultRecipients,
    string NotificationLevel,
    string[] AdditionalRecipients = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.defaultRecipients">DefaultRecipients</a></code> | <code>object</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.notificationLevel">NotificationLevel</a></code> | <code>string</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.additionalRecipients">AdditionalRecipients</a></code> | <code>string[]</code> | The additional recipients to notify. |

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.defaultRecipients"></a>

```csharp
public object DefaultRecipients { get; set; }
```

- *Type:* object

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.notificationLevel"></a>

```csharp
public string NotificationLevel { get; set; }
```

- *Type:* string

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}

---

##### `AdditionalRecipients`<sup>Optional</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.additionalRecipients"></a>

```csharp
public string[] AdditionalRecipients { get; set; }
```

- *Type:* string[]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}

---

### RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications <a name="RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications {
    object DefaultRecipients,
    string NotificationLevel,
    string[] AdditionalRecipients = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.defaultRecipients">DefaultRecipients</a></code> | <code>object</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.notificationLevel">NotificationLevel</a></code> | <code>string</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.additionalRecipients">AdditionalRecipients</a></code> | <code>string[]</code> | The additional recipients to notify. |

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.defaultRecipients"></a>

```csharp
public object DefaultRecipients { get; set; }
```

- *Type:* object

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.notificationLevel"></a>

```csharp
public string NotificationLevel { get; set; }
```

- *Type:* string

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}

---

##### `AdditionalRecipients`<sup>Optional</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.additionalRecipients"></a>

```csharp
public string[] AdditionalRecipients { get; set; }
```

- *Type:* string[]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}

---

### RoleManagementPolicyNotificationRulesEligibleActivations <a name="RoleManagementPolicyNotificationRulesEligibleActivations" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyNotificationRulesEligibleActivations {
    RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications AdminNotifications = null,
    RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications ApproverNotifications = null,
    RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications AssigneeNotifications = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations.property.adminNotifications">AdminNotifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a></code> | admin_notifications block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations.property.approverNotifications">ApproverNotifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a></code> | approver_notifications block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations.property.assigneeNotifications">AssigneeNotifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a></code> | assignee_notifications block. |

---

##### `AdminNotifications`<sup>Optional</sup> <a name="AdminNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations.property.adminNotifications"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications AdminNotifications { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a>

admin_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#admin_notifications RoleManagementPolicy#admin_notifications}

---

##### `ApproverNotifications`<sup>Optional</sup> <a name="ApproverNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations.property.approverNotifications"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications ApproverNotifications { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a>

approver_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#approver_notifications RoleManagementPolicy#approver_notifications}

---

##### `AssigneeNotifications`<sup>Optional</sup> <a name="AssigneeNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations.property.assigneeNotifications"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications AssigneeNotifications { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a>

assignee_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#assignee_notifications RoleManagementPolicy#assignee_notifications}

---

### RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications <a name="RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications {
    object DefaultRecipients,
    string NotificationLevel,
    string[] AdditionalRecipients = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.defaultRecipients">DefaultRecipients</a></code> | <code>object</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.notificationLevel">NotificationLevel</a></code> | <code>string</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.additionalRecipients">AdditionalRecipients</a></code> | <code>string[]</code> | The additional recipients to notify. |

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.defaultRecipients"></a>

```csharp
public object DefaultRecipients { get; set; }
```

- *Type:* object

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.notificationLevel"></a>

```csharp
public string NotificationLevel { get; set; }
```

- *Type:* string

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}

---

##### `AdditionalRecipients`<sup>Optional</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.additionalRecipients"></a>

```csharp
public string[] AdditionalRecipients { get; set; }
```

- *Type:* string[]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}

---

### RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications <a name="RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications {
    object DefaultRecipients,
    string NotificationLevel,
    string[] AdditionalRecipients = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.defaultRecipients">DefaultRecipients</a></code> | <code>object</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.notificationLevel">NotificationLevel</a></code> | <code>string</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.additionalRecipients">AdditionalRecipients</a></code> | <code>string[]</code> | The additional recipients to notify. |

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.defaultRecipients"></a>

```csharp
public object DefaultRecipients { get; set; }
```

- *Type:* object

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.notificationLevel"></a>

```csharp
public string NotificationLevel { get; set; }
```

- *Type:* string

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}

---

##### `AdditionalRecipients`<sup>Optional</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.additionalRecipients"></a>

```csharp
public string[] AdditionalRecipients { get; set; }
```

- *Type:* string[]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}

---

### RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications <a name="RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications {
    object DefaultRecipients,
    string NotificationLevel,
    string[] AdditionalRecipients = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.defaultRecipients">DefaultRecipients</a></code> | <code>object</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.notificationLevel">NotificationLevel</a></code> | <code>string</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.additionalRecipients">AdditionalRecipients</a></code> | <code>string[]</code> | The additional recipients to notify. |

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.defaultRecipients"></a>

```csharp
public object DefaultRecipients { get; set; }
```

- *Type:* object

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.notificationLevel"></a>

```csharp
public string NotificationLevel { get; set; }
```

- *Type:* string

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}

---

##### `AdditionalRecipients`<sup>Optional</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.additionalRecipients"></a>

```csharp
public string[] AdditionalRecipients { get; set; }
```

- *Type:* string[]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}

---

### RoleManagementPolicyNotificationRulesEligibleAssignments <a name="RoleManagementPolicyNotificationRulesEligibleAssignments" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyNotificationRulesEligibleAssignments {
    RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications AdminNotifications = null,
    RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications ApproverNotifications = null,
    RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications AssigneeNotifications = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments.property.adminNotifications">AdminNotifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a></code> | admin_notifications block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments.property.approverNotifications">ApproverNotifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a></code> | approver_notifications block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments.property.assigneeNotifications">AssigneeNotifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a></code> | assignee_notifications block. |

---

##### `AdminNotifications`<sup>Optional</sup> <a name="AdminNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments.property.adminNotifications"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications AdminNotifications { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a>

admin_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#admin_notifications RoleManagementPolicy#admin_notifications}

---

##### `ApproverNotifications`<sup>Optional</sup> <a name="ApproverNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments.property.approverNotifications"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications ApproverNotifications { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a>

approver_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#approver_notifications RoleManagementPolicy#approver_notifications}

---

##### `AssigneeNotifications`<sup>Optional</sup> <a name="AssigneeNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments.property.assigneeNotifications"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications AssigneeNotifications { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a>

assignee_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#assignee_notifications RoleManagementPolicy#assignee_notifications}

---

### RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications <a name="RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications {
    object DefaultRecipients,
    string NotificationLevel,
    string[] AdditionalRecipients = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.defaultRecipients">DefaultRecipients</a></code> | <code>object</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.notificationLevel">NotificationLevel</a></code> | <code>string</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.additionalRecipients">AdditionalRecipients</a></code> | <code>string[]</code> | The additional recipients to notify. |

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.defaultRecipients"></a>

```csharp
public object DefaultRecipients { get; set; }
```

- *Type:* object

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.notificationLevel"></a>

```csharp
public string NotificationLevel { get; set; }
```

- *Type:* string

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}

---

##### `AdditionalRecipients`<sup>Optional</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.additionalRecipients"></a>

```csharp
public string[] AdditionalRecipients { get; set; }
```

- *Type:* string[]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}

---

### RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications <a name="RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications {
    object DefaultRecipients,
    string NotificationLevel,
    string[] AdditionalRecipients = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.defaultRecipients">DefaultRecipients</a></code> | <code>object</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.notificationLevel">NotificationLevel</a></code> | <code>string</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.additionalRecipients">AdditionalRecipients</a></code> | <code>string[]</code> | The additional recipients to notify. |

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.defaultRecipients"></a>

```csharp
public object DefaultRecipients { get; set; }
```

- *Type:* object

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.notificationLevel"></a>

```csharp
public string NotificationLevel { get; set; }
```

- *Type:* string

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}

---

##### `AdditionalRecipients`<sup>Optional</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.additionalRecipients"></a>

```csharp
public string[] AdditionalRecipients { get; set; }
```

- *Type:* string[]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}

---

### RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications <a name="RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications {
    object DefaultRecipients,
    string NotificationLevel,
    string[] AdditionalRecipients = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.defaultRecipients">DefaultRecipients</a></code> | <code>object</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.notificationLevel">NotificationLevel</a></code> | <code>string</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.additionalRecipients">AdditionalRecipients</a></code> | <code>string[]</code> | The additional recipients to notify. |

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.defaultRecipients"></a>

```csharp
public object DefaultRecipients { get; set; }
```

- *Type:* object

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.notificationLevel"></a>

```csharp
public string NotificationLevel { get; set; }
```

- *Type:* string

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}

---

##### `AdditionalRecipients`<sup>Optional</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.additionalRecipients"></a>

```csharp
public string[] AdditionalRecipients { get; set; }
```

- *Type:* string[]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}

---

### RoleManagementPolicyTimeouts <a name="RoleManagementPolicyTimeouts" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#create RoleManagementPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#delete RoleManagementPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#read RoleManagementPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#update RoleManagementPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#create RoleManagementPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#delete RoleManagementPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#read RoleManagementPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/role_management_policy#update RoleManagementPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RoleManagementPolicyActivationRulesApprovalStageOutputReference <a name="RoleManagementPolicyActivationRulesApprovalStageOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyActivationRulesApprovalStageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.putPrimaryApprover">PutPrimaryApprover</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrimaryApprover` <a name="PutPrimaryApprover" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.putPrimaryApprover"></a>

```csharp
private void PutPrimaryApprover(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.putPrimaryApprover.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.property.primaryApprover">PrimaryApprover</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList">RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.property.primaryApproverInput">PrimaryApproverInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStage">RoleManagementPolicyActivationRulesApprovalStage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrimaryApprover`<sup>Required</sup> <a name="PrimaryApprover" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.property.primaryApprover"></a>

```csharp
public RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList PrimaryApprover { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList">RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList</a>

---

##### `PrimaryApproverInput`<sup>Optional</sup> <a name="PrimaryApproverInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.property.primaryApproverInput"></a>

```csharp
public object PrimaryApproverInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.property.internalValue"></a>

```csharp
public RoleManagementPolicyActivationRulesApprovalStage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStage">RoleManagementPolicyActivationRulesApprovalStage</a>

---


### RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList <a name="RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.get"></a>

```csharp
private RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference <a name="RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.objectIdInput">ObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.objectIdInput"></a>

```csharp
public string ObjectIdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RoleManagementPolicyActivationRulesOutputReference <a name="RoleManagementPolicyActivationRulesOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyActivationRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.putApprovalStage">PutApprovalStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resetApprovalStage">ResetApprovalStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resetMaximumDuration">ResetMaximumDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resetRequireApproval">ResetRequireApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resetRequiredConditionalAccessAuthenticationContext">ResetRequiredConditionalAccessAuthenticationContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resetRequireJustification">ResetRequireJustification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resetRequireMultifactorAuthentication">ResetRequireMultifactorAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resetRequireTicketInfo">ResetRequireTicketInfo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApprovalStage` <a name="PutApprovalStage" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.putApprovalStage"></a>

```csharp
private void PutApprovalStage(RoleManagementPolicyActivationRulesApprovalStage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.putApprovalStage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStage">RoleManagementPolicyActivationRulesApprovalStage</a>

---

##### `ResetApprovalStage` <a name="ResetApprovalStage" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resetApprovalStage"></a>

```csharp
private void ResetApprovalStage()
```

##### `ResetMaximumDuration` <a name="ResetMaximumDuration" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resetMaximumDuration"></a>

```csharp
private void ResetMaximumDuration()
```

##### `ResetRequireApproval` <a name="ResetRequireApproval" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resetRequireApproval"></a>

```csharp
private void ResetRequireApproval()
```

##### `ResetRequiredConditionalAccessAuthenticationContext` <a name="ResetRequiredConditionalAccessAuthenticationContext" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resetRequiredConditionalAccessAuthenticationContext"></a>

```csharp
private void ResetRequiredConditionalAccessAuthenticationContext()
```

##### `ResetRequireJustification` <a name="ResetRequireJustification" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resetRequireJustification"></a>

```csharp
private void ResetRequireJustification()
```

##### `ResetRequireMultifactorAuthentication` <a name="ResetRequireMultifactorAuthentication" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resetRequireMultifactorAuthentication"></a>

```csharp
private void ResetRequireMultifactorAuthentication()
```

##### `ResetRequireTicketInfo` <a name="ResetRequireTicketInfo" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resetRequireTicketInfo"></a>

```csharp
private void ResetRequireTicketInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.approvalStage">ApprovalStage</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference">RoleManagementPolicyActivationRulesApprovalStageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.approvalStageInput">ApprovalStageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStage">RoleManagementPolicyActivationRulesApprovalStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.maximumDurationInput">MaximumDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireApprovalInput">RequireApprovalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requiredConditionalAccessAuthenticationContextInput">RequiredConditionalAccessAuthenticationContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireJustificationInput">RequireJustificationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireMultifactorAuthenticationInput">RequireMultifactorAuthenticationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireTicketInfoInput">RequireTicketInfoInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.maximumDuration">MaximumDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireApproval">RequireApproval</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requiredConditionalAccessAuthenticationContext">RequiredConditionalAccessAuthenticationContext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireJustification">RequireJustification</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireMultifactorAuthentication">RequireMultifactorAuthentication</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireTicketInfo">RequireTicketInfo</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules">RoleManagementPolicyActivationRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApprovalStage`<sup>Required</sup> <a name="ApprovalStage" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.approvalStage"></a>

```csharp
public RoleManagementPolicyActivationRulesApprovalStageOutputReference ApprovalStage { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference">RoleManagementPolicyActivationRulesApprovalStageOutputReference</a>

---

##### `ApprovalStageInput`<sup>Optional</sup> <a name="ApprovalStageInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.approvalStageInput"></a>

```csharp
public RoleManagementPolicyActivationRulesApprovalStage ApprovalStageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStage">RoleManagementPolicyActivationRulesApprovalStage</a>

---

##### `MaximumDurationInput`<sup>Optional</sup> <a name="MaximumDurationInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.maximumDurationInput"></a>

```csharp
public string MaximumDurationInput { get; }
```

- *Type:* string

---

##### `RequireApprovalInput`<sup>Optional</sup> <a name="RequireApprovalInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireApprovalInput"></a>

```csharp
public object RequireApprovalInput { get; }
```

- *Type:* object

---

##### `RequiredConditionalAccessAuthenticationContextInput`<sup>Optional</sup> <a name="RequiredConditionalAccessAuthenticationContextInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requiredConditionalAccessAuthenticationContextInput"></a>

```csharp
public string RequiredConditionalAccessAuthenticationContextInput { get; }
```

- *Type:* string

---

##### `RequireJustificationInput`<sup>Optional</sup> <a name="RequireJustificationInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireJustificationInput"></a>

```csharp
public object RequireJustificationInput { get; }
```

- *Type:* object

---

##### `RequireMultifactorAuthenticationInput`<sup>Optional</sup> <a name="RequireMultifactorAuthenticationInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireMultifactorAuthenticationInput"></a>

```csharp
public object RequireMultifactorAuthenticationInput { get; }
```

- *Type:* object

---

##### `RequireTicketInfoInput`<sup>Optional</sup> <a name="RequireTicketInfoInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireTicketInfoInput"></a>

```csharp
public object RequireTicketInfoInput { get; }
```

- *Type:* object

---

##### `MaximumDuration`<sup>Required</sup> <a name="MaximumDuration" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.maximumDuration"></a>

```csharp
public string MaximumDuration { get; }
```

- *Type:* string

---

##### `RequireApproval`<sup>Required</sup> <a name="RequireApproval" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireApproval"></a>

```csharp
public object RequireApproval { get; }
```

- *Type:* object

---

##### `RequiredConditionalAccessAuthenticationContext`<sup>Required</sup> <a name="RequiredConditionalAccessAuthenticationContext" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requiredConditionalAccessAuthenticationContext"></a>

```csharp
public string RequiredConditionalAccessAuthenticationContext { get; }
```

- *Type:* string

---

##### `RequireJustification`<sup>Required</sup> <a name="RequireJustification" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireJustification"></a>

```csharp
public object RequireJustification { get; }
```

- *Type:* object

---

##### `RequireMultifactorAuthentication`<sup>Required</sup> <a name="RequireMultifactorAuthentication" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireMultifactorAuthentication"></a>

```csharp
public object RequireMultifactorAuthentication { get; }
```

- *Type:* object

---

##### `RequireTicketInfo`<sup>Required</sup> <a name="RequireTicketInfo" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireTicketInfo"></a>

```csharp
public object RequireTicketInfo { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.internalValue"></a>

```csharp
public RoleManagementPolicyActivationRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules">RoleManagementPolicyActivationRules</a>

---


### RoleManagementPolicyActiveAssignmentRulesOutputReference <a name="RoleManagementPolicyActiveAssignmentRulesOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyActiveAssignmentRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.resetExpirationRequired">ResetExpirationRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.resetExpireAfter">ResetExpireAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireJustification">ResetRequireJustification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireMultifactorAuthentication">ResetRequireMultifactorAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireTicketInfo">ResetRequireTicketInfo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpirationRequired` <a name="ResetExpirationRequired" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.resetExpirationRequired"></a>

```csharp
private void ResetExpirationRequired()
```

##### `ResetExpireAfter` <a name="ResetExpireAfter" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.resetExpireAfter"></a>

```csharp
private void ResetExpireAfter()
```

##### `ResetRequireJustification` <a name="ResetRequireJustification" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireJustification"></a>

```csharp
private void ResetRequireJustification()
```

##### `ResetRequireMultifactorAuthentication` <a name="ResetRequireMultifactorAuthentication" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireMultifactorAuthentication"></a>

```csharp
private void ResetRequireMultifactorAuthentication()
```

##### `ResetRequireTicketInfo` <a name="ResetRequireTicketInfo" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireTicketInfo"></a>

```csharp
private void ResetRequireTicketInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.expirationRequiredInput">ExpirationRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.expireAfterInput">ExpireAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireJustificationInput">RequireJustificationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireMultifactorAuthenticationInput">RequireMultifactorAuthenticationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireTicketInfoInput">RequireTicketInfoInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.expirationRequired">ExpirationRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.expireAfter">ExpireAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireJustification">RequireJustification</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireMultifactorAuthentication">RequireMultifactorAuthentication</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireTicketInfo">RequireTicketInfo</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules">RoleManagementPolicyActiveAssignmentRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpirationRequiredInput`<sup>Optional</sup> <a name="ExpirationRequiredInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.expirationRequiredInput"></a>

```csharp
public object ExpirationRequiredInput { get; }
```

- *Type:* object

---

##### `ExpireAfterInput`<sup>Optional</sup> <a name="ExpireAfterInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.expireAfterInput"></a>

```csharp
public string ExpireAfterInput { get; }
```

- *Type:* string

---

##### `RequireJustificationInput`<sup>Optional</sup> <a name="RequireJustificationInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireJustificationInput"></a>

```csharp
public object RequireJustificationInput { get; }
```

- *Type:* object

---

##### `RequireMultifactorAuthenticationInput`<sup>Optional</sup> <a name="RequireMultifactorAuthenticationInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireMultifactorAuthenticationInput"></a>

```csharp
public object RequireMultifactorAuthenticationInput { get; }
```

- *Type:* object

---

##### `RequireTicketInfoInput`<sup>Optional</sup> <a name="RequireTicketInfoInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireTicketInfoInput"></a>

```csharp
public object RequireTicketInfoInput { get; }
```

- *Type:* object

---

##### `ExpirationRequired`<sup>Required</sup> <a name="ExpirationRequired" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.expirationRequired"></a>

```csharp
public object ExpirationRequired { get; }
```

- *Type:* object

---

##### `ExpireAfter`<sup>Required</sup> <a name="ExpireAfter" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.expireAfter"></a>

```csharp
public string ExpireAfter { get; }
```

- *Type:* string

---

##### `RequireJustification`<sup>Required</sup> <a name="RequireJustification" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireJustification"></a>

```csharp
public object RequireJustification { get; }
```

- *Type:* object

---

##### `RequireMultifactorAuthentication`<sup>Required</sup> <a name="RequireMultifactorAuthentication" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireMultifactorAuthentication"></a>

```csharp
public object RequireMultifactorAuthentication { get; }
```

- *Type:* object

---

##### `RequireTicketInfo`<sup>Required</sup> <a name="RequireTicketInfo" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireTicketInfo"></a>

```csharp
public object RequireTicketInfo { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.internalValue"></a>

```csharp
public RoleManagementPolicyActiveAssignmentRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules">RoleManagementPolicyActiveAssignmentRules</a>

---


### RoleManagementPolicyEligibleAssignmentRulesOutputReference <a name="RoleManagementPolicyEligibleAssignmentRulesOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyEligibleAssignmentRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.resetExpirationRequired">ResetExpirationRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.resetExpireAfter">ResetExpireAfter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpirationRequired` <a name="ResetExpirationRequired" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.resetExpirationRequired"></a>

```csharp
private void ResetExpirationRequired()
```

##### `ResetExpireAfter` <a name="ResetExpireAfter" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.resetExpireAfter"></a>

```csharp
private void ResetExpireAfter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expirationRequiredInput">ExpirationRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expireAfterInput">ExpireAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expirationRequired">ExpirationRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expireAfter">ExpireAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRules">RoleManagementPolicyEligibleAssignmentRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpirationRequiredInput`<sup>Optional</sup> <a name="ExpirationRequiredInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expirationRequiredInput"></a>

```csharp
public object ExpirationRequiredInput { get; }
```

- *Type:* object

---

##### `ExpireAfterInput`<sup>Optional</sup> <a name="ExpireAfterInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expireAfterInput"></a>

```csharp
public string ExpireAfterInput { get; }
```

- *Type:* string

---

##### `ExpirationRequired`<sup>Required</sup> <a name="ExpirationRequired" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expirationRequired"></a>

```csharp
public object ExpirationRequired { get; }
```

- *Type:* object

---

##### `ExpireAfter`<sup>Required</sup> <a name="ExpireAfter" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expireAfter"></a>

```csharp
public string ExpireAfter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.property.internalValue"></a>

```csharp
public RoleManagementPolicyEligibleAssignmentRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRules">RoleManagementPolicyEligibleAssignmentRules</a>

---


### RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference <a name="RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.resetAdditionalRecipients">ResetAdditionalRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalRecipients` <a name="ResetAdditionalRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.resetAdditionalRecipients"></a>

```csharp
private void ResetAdditionalRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.additionalRecipientsInput">AdditionalRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.defaultRecipientsInput">DefaultRecipientsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.notificationLevelInput">NotificationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.additionalRecipients">AdditionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.defaultRecipients">DefaultRecipients</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.notificationLevel">NotificationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalRecipientsInput`<sup>Optional</sup> <a name="AdditionalRecipientsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.additionalRecipientsInput"></a>

```csharp
public string[] AdditionalRecipientsInput { get; }
```

- *Type:* string[]

---

##### `DefaultRecipientsInput`<sup>Optional</sup> <a name="DefaultRecipientsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.defaultRecipientsInput"></a>

```csharp
public object DefaultRecipientsInput { get; }
```

- *Type:* object

---

##### `NotificationLevelInput`<sup>Optional</sup> <a name="NotificationLevelInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.notificationLevelInput"></a>

```csharp
public string NotificationLevelInput { get; }
```

- *Type:* string

---

##### `AdditionalRecipients`<sup>Required</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.additionalRecipients"></a>

```csharp
public string[] AdditionalRecipients { get; }
```

- *Type:* string[]

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.defaultRecipients"></a>

```csharp
public object DefaultRecipients { get; }
```

- *Type:* object

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.notificationLevel"></a>

```csharp
public string NotificationLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.internalValue"></a>

```csharp
public RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a>

---


### RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference <a name="RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.resetAdditionalRecipients">ResetAdditionalRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalRecipients` <a name="ResetAdditionalRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.resetAdditionalRecipients"></a>

```csharp
private void ResetAdditionalRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.additionalRecipientsInput">AdditionalRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.defaultRecipientsInput">DefaultRecipientsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.notificationLevelInput">NotificationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.additionalRecipients">AdditionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.defaultRecipients">DefaultRecipients</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.notificationLevel">NotificationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalRecipientsInput`<sup>Optional</sup> <a name="AdditionalRecipientsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.additionalRecipientsInput"></a>

```csharp
public string[] AdditionalRecipientsInput { get; }
```

- *Type:* string[]

---

##### `DefaultRecipientsInput`<sup>Optional</sup> <a name="DefaultRecipientsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.defaultRecipientsInput"></a>

```csharp
public object DefaultRecipientsInput { get; }
```

- *Type:* object

---

##### `NotificationLevelInput`<sup>Optional</sup> <a name="NotificationLevelInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.notificationLevelInput"></a>

```csharp
public string NotificationLevelInput { get; }
```

- *Type:* string

---

##### `AdditionalRecipients`<sup>Required</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.additionalRecipients"></a>

```csharp
public string[] AdditionalRecipients { get; }
```

- *Type:* string[]

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.defaultRecipients"></a>

```csharp
public object DefaultRecipients { get; }
```

- *Type:* object

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.notificationLevel"></a>

```csharp
public string NotificationLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.internalValue"></a>

```csharp
public RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a>

---


### RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference <a name="RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.resetAdditionalRecipients">ResetAdditionalRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalRecipients` <a name="ResetAdditionalRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.resetAdditionalRecipients"></a>

```csharp
private void ResetAdditionalRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipientsInput">AdditionalRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipientsInput">DefaultRecipientsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.notificationLevelInput">NotificationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipients">AdditionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipients">DefaultRecipients</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.notificationLevel">NotificationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalRecipientsInput`<sup>Optional</sup> <a name="AdditionalRecipientsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipientsInput"></a>

```csharp
public string[] AdditionalRecipientsInput { get; }
```

- *Type:* string[]

---

##### `DefaultRecipientsInput`<sup>Optional</sup> <a name="DefaultRecipientsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipientsInput"></a>

```csharp
public object DefaultRecipientsInput { get; }
```

- *Type:* object

---

##### `NotificationLevelInput`<sup>Optional</sup> <a name="NotificationLevelInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.notificationLevelInput"></a>

```csharp
public string NotificationLevelInput { get; }
```

- *Type:* string

---

##### `AdditionalRecipients`<sup>Required</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipients"></a>

```csharp
public string[] AdditionalRecipients { get; }
```

- *Type:* string[]

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipients"></a>

```csharp
public object DefaultRecipients { get; }
```

- *Type:* object

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.notificationLevel"></a>

```csharp
public string NotificationLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.internalValue"></a>

```csharp
public RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a>

---


### RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference <a name="RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAdminNotifications">PutAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putApproverNotifications">PutApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAssigneeNotifications">PutAssigneeNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetAdminNotifications">ResetAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetApproverNotifications">ResetApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetAssigneeNotifications">ResetAssigneeNotifications</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdminNotifications` <a name="PutAdminNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAdminNotifications"></a>

```csharp
private void PutAdminNotifications(RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAdminNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a>

---

##### `PutApproverNotifications` <a name="PutApproverNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putApproverNotifications"></a>

```csharp
private void PutApproverNotifications(RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putApproverNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a>

---

##### `PutAssigneeNotifications` <a name="PutAssigneeNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAssigneeNotifications"></a>

```csharp
private void PutAssigneeNotifications(RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAssigneeNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a>

---

##### `ResetAdminNotifications` <a name="ResetAdminNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetAdminNotifications"></a>

```csharp
private void ResetAdminNotifications()
```

##### `ResetApproverNotifications` <a name="ResetApproverNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetApproverNotifications"></a>

```csharp
private void ResetApproverNotifications()
```

##### `ResetAssigneeNotifications` <a name="ResetAssigneeNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetAssigneeNotifications"></a>

```csharp
private void ResetAssigneeNotifications()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.adminNotifications">AdminNotifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference">RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.approverNotifications">ApproverNotifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference">RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.assigneeNotifications">AssigneeNotifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference">RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.adminNotificationsInput">AdminNotificationsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.approverNotificationsInput">ApproverNotificationsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.assigneeNotificationsInput">AssigneeNotificationsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments">RoleManagementPolicyNotificationRulesActiveAssignments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminNotifications`<sup>Required</sup> <a name="AdminNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.adminNotifications"></a>

```csharp
public RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference AdminNotifications { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference">RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference</a>

---

##### `ApproverNotifications`<sup>Required</sup> <a name="ApproverNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.approverNotifications"></a>

```csharp
public RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference ApproverNotifications { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference">RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference</a>

---

##### `AssigneeNotifications`<sup>Required</sup> <a name="AssigneeNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.assigneeNotifications"></a>

```csharp
public RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference AssigneeNotifications { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference">RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference</a>

---

##### `AdminNotificationsInput`<sup>Optional</sup> <a name="AdminNotificationsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.adminNotificationsInput"></a>

```csharp
public RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications AdminNotificationsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a>

---

##### `ApproverNotificationsInput`<sup>Optional</sup> <a name="ApproverNotificationsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.approverNotificationsInput"></a>

```csharp
public RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications ApproverNotificationsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a>

---

##### `AssigneeNotificationsInput`<sup>Optional</sup> <a name="AssigneeNotificationsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.assigneeNotificationsInput"></a>

```csharp
public RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications AssigneeNotificationsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.internalValue"></a>

```csharp
public RoleManagementPolicyNotificationRulesActiveAssignments InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments">RoleManagementPolicyNotificationRulesActiveAssignments</a>

---


### RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference <a name="RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.resetAdditionalRecipients">ResetAdditionalRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalRecipients` <a name="ResetAdditionalRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.resetAdditionalRecipients"></a>

```csharp
private void ResetAdditionalRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.additionalRecipientsInput">AdditionalRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.defaultRecipientsInput">DefaultRecipientsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.notificationLevelInput">NotificationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.additionalRecipients">AdditionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.defaultRecipients">DefaultRecipients</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.notificationLevel">NotificationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalRecipientsInput`<sup>Optional</sup> <a name="AdditionalRecipientsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.additionalRecipientsInput"></a>

```csharp
public string[] AdditionalRecipientsInput { get; }
```

- *Type:* string[]

---

##### `DefaultRecipientsInput`<sup>Optional</sup> <a name="DefaultRecipientsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.defaultRecipientsInput"></a>

```csharp
public object DefaultRecipientsInput { get; }
```

- *Type:* object

---

##### `NotificationLevelInput`<sup>Optional</sup> <a name="NotificationLevelInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.notificationLevelInput"></a>

```csharp
public string NotificationLevelInput { get; }
```

- *Type:* string

---

##### `AdditionalRecipients`<sup>Required</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.additionalRecipients"></a>

```csharp
public string[] AdditionalRecipients { get; }
```

- *Type:* string[]

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.defaultRecipients"></a>

```csharp
public object DefaultRecipients { get; }
```

- *Type:* object

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.notificationLevel"></a>

```csharp
public string NotificationLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.internalValue"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a>

---


### RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference <a name="RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.resetAdditionalRecipients">ResetAdditionalRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalRecipients` <a name="ResetAdditionalRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.resetAdditionalRecipients"></a>

```csharp
private void ResetAdditionalRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.additionalRecipientsInput">AdditionalRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.defaultRecipientsInput">DefaultRecipientsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.notificationLevelInput">NotificationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.additionalRecipients">AdditionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.defaultRecipients">DefaultRecipients</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.notificationLevel">NotificationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalRecipientsInput`<sup>Optional</sup> <a name="AdditionalRecipientsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.additionalRecipientsInput"></a>

```csharp
public string[] AdditionalRecipientsInput { get; }
```

- *Type:* string[]

---

##### `DefaultRecipientsInput`<sup>Optional</sup> <a name="DefaultRecipientsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.defaultRecipientsInput"></a>

```csharp
public object DefaultRecipientsInput { get; }
```

- *Type:* object

---

##### `NotificationLevelInput`<sup>Optional</sup> <a name="NotificationLevelInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.notificationLevelInput"></a>

```csharp
public string NotificationLevelInput { get; }
```

- *Type:* string

---

##### `AdditionalRecipients`<sup>Required</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.additionalRecipients"></a>

```csharp
public string[] AdditionalRecipients { get; }
```

- *Type:* string[]

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.defaultRecipients"></a>

```csharp
public object DefaultRecipients { get; }
```

- *Type:* object

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.notificationLevel"></a>

```csharp
public string NotificationLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.internalValue"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a>

---


### RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference <a name="RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.resetAdditionalRecipients">ResetAdditionalRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalRecipients` <a name="ResetAdditionalRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.resetAdditionalRecipients"></a>

```csharp
private void ResetAdditionalRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.additionalRecipientsInput">AdditionalRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.defaultRecipientsInput">DefaultRecipientsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.notificationLevelInput">NotificationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.additionalRecipients">AdditionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.defaultRecipients">DefaultRecipients</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.notificationLevel">NotificationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalRecipientsInput`<sup>Optional</sup> <a name="AdditionalRecipientsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.additionalRecipientsInput"></a>

```csharp
public string[] AdditionalRecipientsInput { get; }
```

- *Type:* string[]

---

##### `DefaultRecipientsInput`<sup>Optional</sup> <a name="DefaultRecipientsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.defaultRecipientsInput"></a>

```csharp
public object DefaultRecipientsInput { get; }
```

- *Type:* object

---

##### `NotificationLevelInput`<sup>Optional</sup> <a name="NotificationLevelInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.notificationLevelInput"></a>

```csharp
public string NotificationLevelInput { get; }
```

- *Type:* string

---

##### `AdditionalRecipients`<sup>Required</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.additionalRecipients"></a>

```csharp
public string[] AdditionalRecipients { get; }
```

- *Type:* string[]

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.defaultRecipients"></a>

```csharp
public object DefaultRecipients { get; }
```

- *Type:* object

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.notificationLevel"></a>

```csharp
public string NotificationLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.internalValue"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a>

---


### RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference <a name="RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAdminNotifications">PutAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putApproverNotifications">PutApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAssigneeNotifications">PutAssigneeNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetAdminNotifications">ResetAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetApproverNotifications">ResetApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetAssigneeNotifications">ResetAssigneeNotifications</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdminNotifications` <a name="PutAdminNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAdminNotifications"></a>

```csharp
private void PutAdminNotifications(RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAdminNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a>

---

##### `PutApproverNotifications` <a name="PutApproverNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putApproverNotifications"></a>

```csharp
private void PutApproverNotifications(RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putApproverNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a>

---

##### `PutAssigneeNotifications` <a name="PutAssigneeNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAssigneeNotifications"></a>

```csharp
private void PutAssigneeNotifications(RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAssigneeNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a>

---

##### `ResetAdminNotifications` <a name="ResetAdminNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetAdminNotifications"></a>

```csharp
private void ResetAdminNotifications()
```

##### `ResetApproverNotifications` <a name="ResetApproverNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetApproverNotifications"></a>

```csharp
private void ResetApproverNotifications()
```

##### `ResetAssigneeNotifications` <a name="ResetAssigneeNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetAssigneeNotifications"></a>

```csharp
private void ResetAssigneeNotifications()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.adminNotifications">AdminNotifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference">RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.approverNotifications">ApproverNotifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference">RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.assigneeNotifications">AssigneeNotifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference">RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.adminNotificationsInput">AdminNotificationsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.approverNotificationsInput">ApproverNotificationsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.assigneeNotificationsInput">AssigneeNotificationsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations">RoleManagementPolicyNotificationRulesEligibleActivations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminNotifications`<sup>Required</sup> <a name="AdminNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.adminNotifications"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference AdminNotifications { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference">RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference</a>

---

##### `ApproverNotifications`<sup>Required</sup> <a name="ApproverNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.approverNotifications"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference ApproverNotifications { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference">RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference</a>

---

##### `AssigneeNotifications`<sup>Required</sup> <a name="AssigneeNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.assigneeNotifications"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference AssigneeNotifications { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference">RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference</a>

---

##### `AdminNotificationsInput`<sup>Optional</sup> <a name="AdminNotificationsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.adminNotificationsInput"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications AdminNotificationsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a>

---

##### `ApproverNotificationsInput`<sup>Optional</sup> <a name="ApproverNotificationsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.approverNotificationsInput"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications ApproverNotificationsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a>

---

##### `AssigneeNotificationsInput`<sup>Optional</sup> <a name="AssigneeNotificationsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.assigneeNotificationsInput"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications AssigneeNotificationsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.internalValue"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleActivations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations">RoleManagementPolicyNotificationRulesEligibleActivations</a>

---


### RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference <a name="RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.resetAdditionalRecipients">ResetAdditionalRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalRecipients` <a name="ResetAdditionalRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.resetAdditionalRecipients"></a>

```csharp
private void ResetAdditionalRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.additionalRecipientsInput">AdditionalRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.defaultRecipientsInput">DefaultRecipientsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.notificationLevelInput">NotificationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.additionalRecipients">AdditionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.defaultRecipients">DefaultRecipients</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.notificationLevel">NotificationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalRecipientsInput`<sup>Optional</sup> <a name="AdditionalRecipientsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.additionalRecipientsInput"></a>

```csharp
public string[] AdditionalRecipientsInput { get; }
```

- *Type:* string[]

---

##### `DefaultRecipientsInput`<sup>Optional</sup> <a name="DefaultRecipientsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.defaultRecipientsInput"></a>

```csharp
public object DefaultRecipientsInput { get; }
```

- *Type:* object

---

##### `NotificationLevelInput`<sup>Optional</sup> <a name="NotificationLevelInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.notificationLevelInput"></a>

```csharp
public string NotificationLevelInput { get; }
```

- *Type:* string

---

##### `AdditionalRecipients`<sup>Required</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.additionalRecipients"></a>

```csharp
public string[] AdditionalRecipients { get; }
```

- *Type:* string[]

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.defaultRecipients"></a>

```csharp
public object DefaultRecipients { get; }
```

- *Type:* object

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.notificationLevel"></a>

```csharp
public string NotificationLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.internalValue"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a>

---


### RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference <a name="RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.resetAdditionalRecipients">ResetAdditionalRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalRecipients` <a name="ResetAdditionalRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.resetAdditionalRecipients"></a>

```csharp
private void ResetAdditionalRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.additionalRecipientsInput">AdditionalRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.defaultRecipientsInput">DefaultRecipientsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.notificationLevelInput">NotificationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.additionalRecipients">AdditionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.defaultRecipients">DefaultRecipients</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.notificationLevel">NotificationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalRecipientsInput`<sup>Optional</sup> <a name="AdditionalRecipientsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.additionalRecipientsInput"></a>

```csharp
public string[] AdditionalRecipientsInput { get; }
```

- *Type:* string[]

---

##### `DefaultRecipientsInput`<sup>Optional</sup> <a name="DefaultRecipientsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.defaultRecipientsInput"></a>

```csharp
public object DefaultRecipientsInput { get; }
```

- *Type:* object

---

##### `NotificationLevelInput`<sup>Optional</sup> <a name="NotificationLevelInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.notificationLevelInput"></a>

```csharp
public string NotificationLevelInput { get; }
```

- *Type:* string

---

##### `AdditionalRecipients`<sup>Required</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.additionalRecipients"></a>

```csharp
public string[] AdditionalRecipients { get; }
```

- *Type:* string[]

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.defaultRecipients"></a>

```csharp
public object DefaultRecipients { get; }
```

- *Type:* object

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.notificationLevel"></a>

```csharp
public string NotificationLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.internalValue"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a>

---


### RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference <a name="RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.resetAdditionalRecipients">ResetAdditionalRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalRecipients` <a name="ResetAdditionalRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.resetAdditionalRecipients"></a>

```csharp
private void ResetAdditionalRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipientsInput">AdditionalRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipientsInput">DefaultRecipientsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.notificationLevelInput">NotificationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipients">AdditionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipients">DefaultRecipients</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.notificationLevel">NotificationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalRecipientsInput`<sup>Optional</sup> <a name="AdditionalRecipientsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipientsInput"></a>

```csharp
public string[] AdditionalRecipientsInput { get; }
```

- *Type:* string[]

---

##### `DefaultRecipientsInput`<sup>Optional</sup> <a name="DefaultRecipientsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipientsInput"></a>

```csharp
public object DefaultRecipientsInput { get; }
```

- *Type:* object

---

##### `NotificationLevelInput`<sup>Optional</sup> <a name="NotificationLevelInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.notificationLevelInput"></a>

```csharp
public string NotificationLevelInput { get; }
```

- *Type:* string

---

##### `AdditionalRecipients`<sup>Required</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipients"></a>

```csharp
public string[] AdditionalRecipients { get; }
```

- *Type:* string[]

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipients"></a>

```csharp
public object DefaultRecipients { get; }
```

- *Type:* object

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.notificationLevel"></a>

```csharp
public string NotificationLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.internalValue"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a>

---


### RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference <a name="RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAdminNotifications">PutAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putApproverNotifications">PutApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAssigneeNotifications">PutAssigneeNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetAdminNotifications">ResetAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetApproverNotifications">ResetApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetAssigneeNotifications">ResetAssigneeNotifications</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdminNotifications` <a name="PutAdminNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAdminNotifications"></a>

```csharp
private void PutAdminNotifications(RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAdminNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a>

---

##### `PutApproverNotifications` <a name="PutApproverNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putApproverNotifications"></a>

```csharp
private void PutApproverNotifications(RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putApproverNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a>

---

##### `PutAssigneeNotifications` <a name="PutAssigneeNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAssigneeNotifications"></a>

```csharp
private void PutAssigneeNotifications(RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAssigneeNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a>

---

##### `ResetAdminNotifications` <a name="ResetAdminNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetAdminNotifications"></a>

```csharp
private void ResetAdminNotifications()
```

##### `ResetApproverNotifications` <a name="ResetApproverNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetApproverNotifications"></a>

```csharp
private void ResetApproverNotifications()
```

##### `ResetAssigneeNotifications` <a name="ResetAssigneeNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetAssigneeNotifications"></a>

```csharp
private void ResetAssigneeNotifications()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.adminNotifications">AdminNotifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference">RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.approverNotifications">ApproverNotifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference">RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.assigneeNotifications">AssigneeNotifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference">RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.adminNotificationsInput">AdminNotificationsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.approverNotificationsInput">ApproverNotificationsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.assigneeNotificationsInput">AssigneeNotificationsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments">RoleManagementPolicyNotificationRulesEligibleAssignments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminNotifications`<sup>Required</sup> <a name="AdminNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.adminNotifications"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference AdminNotifications { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference">RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference</a>

---

##### `ApproverNotifications`<sup>Required</sup> <a name="ApproverNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.approverNotifications"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference ApproverNotifications { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference">RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference</a>

---

##### `AssigneeNotifications`<sup>Required</sup> <a name="AssigneeNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.assigneeNotifications"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference AssigneeNotifications { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference">RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference</a>

---

##### `AdminNotificationsInput`<sup>Optional</sup> <a name="AdminNotificationsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.adminNotificationsInput"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications AdminNotificationsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a>

---

##### `ApproverNotificationsInput`<sup>Optional</sup> <a name="ApproverNotificationsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.approverNotificationsInput"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications ApproverNotificationsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a>

---

##### `AssigneeNotificationsInput`<sup>Optional</sup> <a name="AssigneeNotificationsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.assigneeNotificationsInput"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications AssigneeNotificationsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.internalValue"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleAssignments InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments">RoleManagementPolicyNotificationRulesEligibleAssignments</a>

---


### RoleManagementPolicyNotificationRulesOutputReference <a name="RoleManagementPolicyNotificationRulesOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyNotificationRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.putActiveAssignments">PutActiveAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.putEligibleActivations">PutEligibleActivations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.putEligibleAssignments">PutEligibleAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.resetActiveAssignments">ResetActiveAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.resetEligibleActivations">ResetEligibleActivations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.resetEligibleAssignments">ResetEligibleAssignments</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActiveAssignments` <a name="PutActiveAssignments" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.putActiveAssignments"></a>

```csharp
private void PutActiveAssignments(RoleManagementPolicyNotificationRulesActiveAssignments Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.putActiveAssignments.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments">RoleManagementPolicyNotificationRulesActiveAssignments</a>

---

##### `PutEligibleActivations` <a name="PutEligibleActivations" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.putEligibleActivations"></a>

```csharp
private void PutEligibleActivations(RoleManagementPolicyNotificationRulesEligibleActivations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.putEligibleActivations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations">RoleManagementPolicyNotificationRulesEligibleActivations</a>

---

##### `PutEligibleAssignments` <a name="PutEligibleAssignments" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.putEligibleAssignments"></a>

```csharp
private void PutEligibleAssignments(RoleManagementPolicyNotificationRulesEligibleAssignments Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.putEligibleAssignments.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments">RoleManagementPolicyNotificationRulesEligibleAssignments</a>

---

##### `ResetActiveAssignments` <a name="ResetActiveAssignments" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.resetActiveAssignments"></a>

```csharp
private void ResetActiveAssignments()
```

##### `ResetEligibleActivations` <a name="ResetEligibleActivations" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.resetEligibleActivations"></a>

```csharp
private void ResetEligibleActivations()
```

##### `ResetEligibleAssignments` <a name="ResetEligibleAssignments" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.resetEligibleAssignments"></a>

```csharp
private void ResetEligibleAssignments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.activeAssignments">ActiveAssignments</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference">RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.eligibleActivations">EligibleActivations</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference">RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.eligibleAssignments">EligibleAssignments</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference">RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.activeAssignmentsInput">ActiveAssignmentsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments">RoleManagementPolicyNotificationRulesActiveAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.eligibleActivationsInput">EligibleActivationsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations">RoleManagementPolicyNotificationRulesEligibleActivations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.eligibleAssignmentsInput">EligibleAssignmentsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments">RoleManagementPolicyNotificationRulesEligibleAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules">RoleManagementPolicyNotificationRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveAssignments`<sup>Required</sup> <a name="ActiveAssignments" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.activeAssignments"></a>

```csharp
public RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference ActiveAssignments { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference">RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference</a>

---

##### `EligibleActivations`<sup>Required</sup> <a name="EligibleActivations" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.eligibleActivations"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference EligibleActivations { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference">RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference</a>

---

##### `EligibleAssignments`<sup>Required</sup> <a name="EligibleAssignments" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.eligibleAssignments"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference EligibleAssignments { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference">RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference</a>

---

##### `ActiveAssignmentsInput`<sup>Optional</sup> <a name="ActiveAssignmentsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.activeAssignmentsInput"></a>

```csharp
public RoleManagementPolicyNotificationRulesActiveAssignments ActiveAssignmentsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments">RoleManagementPolicyNotificationRulesActiveAssignments</a>

---

##### `EligibleActivationsInput`<sup>Optional</sup> <a name="EligibleActivationsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.eligibleActivationsInput"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleActivations EligibleActivationsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations">RoleManagementPolicyNotificationRulesEligibleActivations</a>

---

##### `EligibleAssignmentsInput`<sup>Optional</sup> <a name="EligibleAssignmentsInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.eligibleAssignmentsInput"></a>

```csharp
public RoleManagementPolicyNotificationRulesEligibleAssignments EligibleAssignmentsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments">RoleManagementPolicyNotificationRulesEligibleAssignments</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.internalValue"></a>

```csharp
public RoleManagementPolicyNotificationRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules">RoleManagementPolicyNotificationRules</a>

---


### RoleManagementPolicyTimeoutsOutputReference <a name="RoleManagementPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RoleManagementPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



