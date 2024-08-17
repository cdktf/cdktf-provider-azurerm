# `monitorActionRuleActionGroup` Submodule <a name="`monitorActionRuleActionGroup` Submodule" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorActionRuleActionGroup <a name="MonitorActionRuleActionGroup" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group azurerm_monitor_action_rule_action_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActionRuleActionGroup(Construct Scope, string Id, MonitorActionRuleActionGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig">MonitorActionRuleActionGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig">MonitorActionRuleActionGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putCondition"></a>

```csharp
private void PutCondition(MonitorActionRuleActionGroupCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a>

---

##### `PutScope` <a name="PutScope" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putScope"></a>

```csharp
private void PutScope(MonitorActionRuleActionGroupScope Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(MonitorActionRuleActionGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts">MonitorActionRuleActionGroupTimeouts</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorActionRuleActionGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorActionRuleActionGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorActionRuleActionGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorActionRuleActionGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorActionRuleActionGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MonitorActionRuleActionGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitorActionRuleActionGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitorActionRuleActionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MonitorActionRuleActionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference">MonitorActionRuleActionGroupConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.scope">Scope</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference">MonitorActionRuleActionGroupScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference">MonitorActionRuleActionGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.actionGroupIdInput">ActionGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.scopeInput">ScopeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.actionGroupId">ActionGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.condition"></a>

```csharp
public MonitorActionRuleActionGroupConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference">MonitorActionRuleActionGroupConditionOutputReference</a>

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.scope"></a>

```csharp
public MonitorActionRuleActionGroupScopeOutputReference Scope { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference">MonitorActionRuleActionGroupScopeOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.timeouts"></a>

```csharp
public MonitorActionRuleActionGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference">MonitorActionRuleActionGroupTimeoutsOutputReference</a>

---

##### `ActionGroupIdInput`<sup>Optional</sup> <a name="ActionGroupIdInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.actionGroupIdInput"></a>

```csharp
public string ActionGroupIdInput { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.conditionInput"></a>

```csharp
public MonitorActionRuleActionGroupCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.scopeInput"></a>

```csharp
public MonitorActionRuleActionGroupScope ScopeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ActionGroupId`<sup>Required</sup> <a name="ActionGroupId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.actionGroupId"></a>

```csharp
public string ActionGroupId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorActionRuleActionGroupCondition <a name="MonitorActionRuleActionGroupCondition" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActionRuleActionGroupCondition {
    MonitorActionRuleActionGroupConditionAlertContext AlertContext = null,
    MonitorActionRuleActionGroupConditionAlertRuleId AlertRuleId = null,
    MonitorActionRuleActionGroupConditionDescription Description = null,
    MonitorActionRuleActionGroupConditionMonitor Monitor = null,
    MonitorActionRuleActionGroupConditionMonitorService MonitorService = null,
    MonitorActionRuleActionGroupConditionSeverity Severity = null,
    MonitorActionRuleActionGroupConditionTargetResourceType TargetResourceType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.alertContext">AlertContext</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext">MonitorActionRuleActionGroupConditionAlertContext</a></code> | alert_context block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.alertRuleId">AlertRuleId</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId">MonitorActionRuleActionGroupConditionAlertRuleId</a></code> | alert_rule_id block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.description">Description</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription">MonitorActionRuleActionGroupConditionDescription</a></code> | description block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.monitor">Monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor">MonitorActionRuleActionGroupConditionMonitor</a></code> | monitor block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.monitorService">MonitorService</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService">MonitorActionRuleActionGroupConditionMonitorService</a></code> | monitor_service block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.severity">Severity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity">MonitorActionRuleActionGroupConditionSeverity</a></code> | severity block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.targetResourceType">TargetResourceType</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType">MonitorActionRuleActionGroupConditionTargetResourceType</a></code> | target_resource_type block. |

---

##### `AlertContext`<sup>Optional</sup> <a name="AlertContext" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.alertContext"></a>

```csharp
public MonitorActionRuleActionGroupConditionAlertContext AlertContext { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext">MonitorActionRuleActionGroupConditionAlertContext</a>

alert_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#alert_context MonitorActionRuleActionGroup#alert_context}

---

##### `AlertRuleId`<sup>Optional</sup> <a name="AlertRuleId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.alertRuleId"></a>

```csharp
public MonitorActionRuleActionGroupConditionAlertRuleId AlertRuleId { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId">MonitorActionRuleActionGroupConditionAlertRuleId</a>

alert_rule_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#alert_rule_id MonitorActionRuleActionGroup#alert_rule_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.description"></a>

```csharp
public MonitorActionRuleActionGroupConditionDescription Description { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription">MonitorActionRuleActionGroupConditionDescription</a>

description block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#description MonitorActionRuleActionGroup#description}

---

##### `Monitor`<sup>Optional</sup> <a name="Monitor" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.monitor"></a>

```csharp
public MonitorActionRuleActionGroupConditionMonitor Monitor { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor">MonitorActionRuleActionGroupConditionMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#monitor MonitorActionRuleActionGroup#monitor}

---

##### `MonitorService`<sup>Optional</sup> <a name="MonitorService" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.monitorService"></a>

```csharp
public MonitorActionRuleActionGroupConditionMonitorService MonitorService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService">MonitorActionRuleActionGroupConditionMonitorService</a>

monitor_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#monitor_service MonitorActionRuleActionGroup#monitor_service}

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.severity"></a>

```csharp
public MonitorActionRuleActionGroupConditionSeverity Severity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity">MonitorActionRuleActionGroupConditionSeverity</a>

severity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#severity MonitorActionRuleActionGroup#severity}

---

##### `TargetResourceType`<sup>Optional</sup> <a name="TargetResourceType" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.targetResourceType"></a>

```csharp
public MonitorActionRuleActionGroupConditionTargetResourceType TargetResourceType { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType">MonitorActionRuleActionGroupConditionTargetResourceType</a>

target_resource_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#target_resource_type MonitorActionRuleActionGroup#target_resource_type}

---

### MonitorActionRuleActionGroupConditionAlertContext <a name="MonitorActionRuleActionGroupConditionAlertContext" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActionRuleActionGroupConditionAlertContext {
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

### MonitorActionRuleActionGroupConditionAlertRuleId <a name="MonitorActionRuleActionGroupConditionAlertRuleId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActionRuleActionGroupConditionAlertRuleId {
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

### MonitorActionRuleActionGroupConditionDescription <a name="MonitorActionRuleActionGroupConditionDescription" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActionRuleActionGroupConditionDescription {
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

### MonitorActionRuleActionGroupConditionMonitor <a name="MonitorActionRuleActionGroupConditionMonitor" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActionRuleActionGroupConditionMonitor {
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

### MonitorActionRuleActionGroupConditionMonitorService <a name="MonitorActionRuleActionGroupConditionMonitorService" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActionRuleActionGroupConditionMonitorService {
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

### MonitorActionRuleActionGroupConditionSeverity <a name="MonitorActionRuleActionGroupConditionSeverity" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActionRuleActionGroupConditionSeverity {
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

### MonitorActionRuleActionGroupConditionTargetResourceType <a name="MonitorActionRuleActionGroupConditionTargetResourceType" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActionRuleActionGroupConditionTargetResourceType {
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

### MonitorActionRuleActionGroupConfig <a name="MonitorActionRuleActionGroupConfig" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActionRuleActionGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ActionGroupId,
    string Name,
    string ResourceGroupName,
    MonitorActionRuleActionGroupCondition Condition = null,
    string Description = null,
    object Enabled = null,
    string Id = null,
    MonitorActionRuleActionGroupScope Scope = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    MonitorActionRuleActionGroupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.actionGroupId">ActionGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#action_group_id MonitorActionRuleActionGroup#action_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#name MonitorActionRuleActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#resource_group_name MonitorActionRuleActionGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#description MonitorActionRuleActionGroup#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#enabled MonitorActionRuleActionGroup#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#id MonitorActionRuleActionGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.scope">Scope</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a></code> | scope block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#tags MonitorActionRuleActionGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts">MonitorActionRuleActionGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ActionGroupId`<sup>Required</sup> <a name="ActionGroupId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.actionGroupId"></a>

```csharp
public string ActionGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#action_group_id MonitorActionRuleActionGroup#action_group_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#name MonitorActionRuleActionGroup#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#resource_group_name MonitorActionRuleActionGroup#resource_group_name}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.condition"></a>

```csharp
public MonitorActionRuleActionGroupCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#condition MonitorActionRuleActionGroup#condition}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#description MonitorActionRuleActionGroup#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#enabled MonitorActionRuleActionGroup#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#id MonitorActionRuleActionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.scope"></a>

```csharp
public MonitorActionRuleActionGroupScope Scope { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#scope MonitorActionRuleActionGroup#scope}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#tags MonitorActionRuleActionGroup#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.timeouts"></a>

```csharp
public MonitorActionRuleActionGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts">MonitorActionRuleActionGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#timeouts MonitorActionRuleActionGroup#timeouts}

---

### MonitorActionRuleActionGroupScope <a name="MonitorActionRuleActionGroupScope" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActionRuleActionGroupScope {
    string[] ResourceIds,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope.property.resourceIds">ResourceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#resource_ids MonitorActionRuleActionGroup#resource_ids}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#type MonitorActionRuleActionGroup#type}. |

---

##### `ResourceIds`<sup>Required</sup> <a name="ResourceIds" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope.property.resourceIds"></a>

```csharp
public string[] ResourceIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#resource_ids MonitorActionRuleActionGroup#resource_ids}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#type MonitorActionRuleActionGroup#type}.

---

### MonitorActionRuleActionGroupTimeouts <a name="MonitorActionRuleActionGroupTimeouts" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActionRuleActionGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#create MonitorActionRuleActionGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#delete MonitorActionRuleActionGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#read MonitorActionRuleActionGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#update MonitorActionRuleActionGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#create MonitorActionRuleActionGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#delete MonitorActionRuleActionGroup#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#read MonitorActionRuleActionGroup#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/monitor_action_rule_action_group#update MonitorActionRuleActionGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorActionRuleActionGroupConditionAlertContextOutputReference <a name="MonitorActionRuleActionGroupConditionAlertContextOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActionRuleActionGroupConditionAlertContextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext">MonitorActionRuleActionGroupConditionAlertContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.internalValue"></a>

```csharp
public MonitorActionRuleActionGroupConditionAlertContext InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext">MonitorActionRuleActionGroupConditionAlertContext</a>

---


### MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference <a name="MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId">MonitorActionRuleActionGroupConditionAlertRuleId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.internalValue"></a>

```csharp
public MonitorActionRuleActionGroupConditionAlertRuleId InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId">MonitorActionRuleActionGroupConditionAlertRuleId</a>

---


### MonitorActionRuleActionGroupConditionDescriptionOutputReference <a name="MonitorActionRuleActionGroupConditionDescriptionOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActionRuleActionGroupConditionDescriptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription">MonitorActionRuleActionGroupConditionDescription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.internalValue"></a>

```csharp
public MonitorActionRuleActionGroupConditionDescription InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription">MonitorActionRuleActionGroupConditionDescription</a>

---


### MonitorActionRuleActionGroupConditionMonitorOutputReference <a name="MonitorActionRuleActionGroupConditionMonitorOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActionRuleActionGroupConditionMonitorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor">MonitorActionRuleActionGroupConditionMonitor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.internalValue"></a>

```csharp
public MonitorActionRuleActionGroupConditionMonitor InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor">MonitorActionRuleActionGroupConditionMonitor</a>

---


### MonitorActionRuleActionGroupConditionMonitorServiceOutputReference <a name="MonitorActionRuleActionGroupConditionMonitorServiceOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActionRuleActionGroupConditionMonitorServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService">MonitorActionRuleActionGroupConditionMonitorService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.internalValue"></a>

```csharp
public MonitorActionRuleActionGroupConditionMonitorService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService">MonitorActionRuleActionGroupConditionMonitorService</a>

---


### MonitorActionRuleActionGroupConditionOutputReference <a name="MonitorActionRuleActionGroupConditionOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActionRuleActionGroupConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putAlertContext">PutAlertContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putAlertRuleId">PutAlertRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putDescription">PutDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putMonitor">PutMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putMonitorService">PutMonitorService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putSeverity">PutSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putTargetResourceType">PutTargetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetAlertContext">ResetAlertContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetAlertRuleId">ResetAlertRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetMonitor">ResetMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetMonitorService">ResetMonitorService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetSeverity">ResetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetTargetResourceType">ResetTargetResourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlertContext` <a name="PutAlertContext" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putAlertContext"></a>

```csharp
private void PutAlertContext(MonitorActionRuleActionGroupConditionAlertContext Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putAlertContext.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext">MonitorActionRuleActionGroupConditionAlertContext</a>

---

##### `PutAlertRuleId` <a name="PutAlertRuleId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putAlertRuleId"></a>

```csharp
private void PutAlertRuleId(MonitorActionRuleActionGroupConditionAlertRuleId Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putAlertRuleId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId">MonitorActionRuleActionGroupConditionAlertRuleId</a>

---

##### `PutDescription` <a name="PutDescription" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putDescription"></a>

```csharp
private void PutDescription(MonitorActionRuleActionGroupConditionDescription Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putDescription.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription">MonitorActionRuleActionGroupConditionDescription</a>

---

##### `PutMonitor` <a name="PutMonitor" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putMonitor"></a>

```csharp
private void PutMonitor(MonitorActionRuleActionGroupConditionMonitor Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putMonitor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor">MonitorActionRuleActionGroupConditionMonitor</a>

---

##### `PutMonitorService` <a name="PutMonitorService" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putMonitorService"></a>

```csharp
private void PutMonitorService(MonitorActionRuleActionGroupConditionMonitorService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putMonitorService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService">MonitorActionRuleActionGroupConditionMonitorService</a>

---

##### `PutSeverity` <a name="PutSeverity" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putSeverity"></a>

```csharp
private void PutSeverity(MonitorActionRuleActionGroupConditionSeverity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putSeverity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity">MonitorActionRuleActionGroupConditionSeverity</a>

---

##### `PutTargetResourceType` <a name="PutTargetResourceType" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putTargetResourceType"></a>

```csharp
private void PutTargetResourceType(MonitorActionRuleActionGroupConditionTargetResourceType Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putTargetResourceType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType">MonitorActionRuleActionGroupConditionTargetResourceType</a>

---

##### `ResetAlertContext` <a name="ResetAlertContext" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetAlertContext"></a>

```csharp
private void ResetAlertContext()
```

##### `ResetAlertRuleId` <a name="ResetAlertRuleId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetAlertRuleId"></a>

```csharp
private void ResetAlertRuleId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetMonitor` <a name="ResetMonitor" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetMonitor"></a>

```csharp
private void ResetMonitor()
```

##### `ResetMonitorService` <a name="ResetMonitorService" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetMonitorService"></a>

```csharp
private void ResetMonitorService()
```

##### `ResetSeverity` <a name="ResetSeverity" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetSeverity"></a>

```csharp
private void ResetSeverity()
```

##### `ResetTargetResourceType` <a name="ResetTargetResourceType" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetTargetResourceType"></a>

```csharp
private void ResetTargetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertContext">AlertContext</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference">MonitorActionRuleActionGroupConditionAlertContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertRuleId">AlertRuleId</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference">MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.description">Description</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference">MonitorActionRuleActionGroupConditionDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitor">Monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference">MonitorActionRuleActionGroupConditionMonitorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitorService">MonitorService</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference">MonitorActionRuleActionGroupConditionMonitorServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.severity">Severity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference">MonitorActionRuleActionGroupConditionSeverityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.targetResourceType">TargetResourceType</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference">MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertContextInput">AlertContextInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext">MonitorActionRuleActionGroupConditionAlertContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertRuleIdInput">AlertRuleIdInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId">MonitorActionRuleActionGroupConditionAlertRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription">MonitorActionRuleActionGroupConditionDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitorInput">MonitorInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor">MonitorActionRuleActionGroupConditionMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitorServiceInput">MonitorServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService">MonitorActionRuleActionGroupConditionMonitorService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.severityInput">SeverityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity">MonitorActionRuleActionGroupConditionSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.targetResourceTypeInput">TargetResourceTypeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType">MonitorActionRuleActionGroupConditionTargetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlertContext`<sup>Required</sup> <a name="AlertContext" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertContext"></a>

```csharp
public MonitorActionRuleActionGroupConditionAlertContextOutputReference AlertContext { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference">MonitorActionRuleActionGroupConditionAlertContextOutputReference</a>

---

##### `AlertRuleId`<sup>Required</sup> <a name="AlertRuleId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertRuleId"></a>

```csharp
public MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference AlertRuleId { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference">MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.description"></a>

```csharp
public MonitorActionRuleActionGroupConditionDescriptionOutputReference Description { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference">MonitorActionRuleActionGroupConditionDescriptionOutputReference</a>

---

##### `Monitor`<sup>Required</sup> <a name="Monitor" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitor"></a>

```csharp
public MonitorActionRuleActionGroupConditionMonitorOutputReference Monitor { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference">MonitorActionRuleActionGroupConditionMonitorOutputReference</a>

---

##### `MonitorService`<sup>Required</sup> <a name="MonitorService" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitorService"></a>

```csharp
public MonitorActionRuleActionGroupConditionMonitorServiceOutputReference MonitorService { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference">MonitorActionRuleActionGroupConditionMonitorServiceOutputReference</a>

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.severity"></a>

```csharp
public MonitorActionRuleActionGroupConditionSeverityOutputReference Severity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference">MonitorActionRuleActionGroupConditionSeverityOutputReference</a>

---

##### `TargetResourceType`<sup>Required</sup> <a name="TargetResourceType" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.targetResourceType"></a>

```csharp
public MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference TargetResourceType { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference">MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference</a>

---

##### `AlertContextInput`<sup>Optional</sup> <a name="AlertContextInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertContextInput"></a>

```csharp
public MonitorActionRuleActionGroupConditionAlertContext AlertContextInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext">MonitorActionRuleActionGroupConditionAlertContext</a>

---

##### `AlertRuleIdInput`<sup>Optional</sup> <a name="AlertRuleIdInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertRuleIdInput"></a>

```csharp
public MonitorActionRuleActionGroupConditionAlertRuleId AlertRuleIdInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId">MonitorActionRuleActionGroupConditionAlertRuleId</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.descriptionInput"></a>

```csharp
public MonitorActionRuleActionGroupConditionDescription DescriptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription">MonitorActionRuleActionGroupConditionDescription</a>

---

##### `MonitorInput`<sup>Optional</sup> <a name="MonitorInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitorInput"></a>

```csharp
public MonitorActionRuleActionGroupConditionMonitor MonitorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor">MonitorActionRuleActionGroupConditionMonitor</a>

---

##### `MonitorServiceInput`<sup>Optional</sup> <a name="MonitorServiceInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitorServiceInput"></a>

```csharp
public MonitorActionRuleActionGroupConditionMonitorService MonitorServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService">MonitorActionRuleActionGroupConditionMonitorService</a>

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.severityInput"></a>

```csharp
public MonitorActionRuleActionGroupConditionSeverity SeverityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity">MonitorActionRuleActionGroupConditionSeverity</a>

---

##### `TargetResourceTypeInput`<sup>Optional</sup> <a name="TargetResourceTypeInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.targetResourceTypeInput"></a>

```csharp
public MonitorActionRuleActionGroupConditionTargetResourceType TargetResourceTypeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType">MonitorActionRuleActionGroupConditionTargetResourceType</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.internalValue"></a>

```csharp
public MonitorActionRuleActionGroupCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a>

---


### MonitorActionRuleActionGroupConditionSeverityOutputReference <a name="MonitorActionRuleActionGroupConditionSeverityOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActionRuleActionGroupConditionSeverityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity">MonitorActionRuleActionGroupConditionSeverity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.internalValue"></a>

```csharp
public MonitorActionRuleActionGroupConditionSeverity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity">MonitorActionRuleActionGroupConditionSeverity</a>

---


### MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference <a name="MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType">MonitorActionRuleActionGroupConditionTargetResourceType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.internalValue"></a>

```csharp
public MonitorActionRuleActionGroupConditionTargetResourceType InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType">MonitorActionRuleActionGroupConditionTargetResourceType</a>

---


### MonitorActionRuleActionGroupScopeOutputReference <a name="MonitorActionRuleActionGroupScopeOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActionRuleActionGroupScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.resourceIdsInput">ResourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.resourceIds">ResourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceIdsInput`<sup>Optional</sup> <a name="ResourceIdsInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.resourceIdsInput"></a>

```csharp
public string[] ResourceIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ResourceIds`<sup>Required</sup> <a name="ResourceIds" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.resourceIds"></a>

```csharp
public string[] ResourceIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.internalValue"></a>

```csharp
public MonitorActionRuleActionGroupScope InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a>

---


### MonitorActionRuleActionGroupTimeoutsOutputReference <a name="MonitorActionRuleActionGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActionRuleActionGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



