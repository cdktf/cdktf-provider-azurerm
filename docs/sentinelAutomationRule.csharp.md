# `sentinelAutomationRule` Submodule <a name="`sentinelAutomationRule` Submodule" id="@cdktf/provider-azurerm.sentinelAutomationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelAutomationRule <a name="SentinelAutomationRule" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule azurerm_sentinel_automation_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelAutomationRule(Construct Scope, string Id, SentinelAutomationRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig">SentinelAutomationRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig">SentinelAutomationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putActionIncident">PutActionIncident</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putActionPlaybook">PutActionPlaybook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetActionIncident">ResetActionIncident</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetActionPlaybook">ResetActionPlaybook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetConditionJson">ResetConditionJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetExpiration">ResetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetTriggersOn">ResetTriggersOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetTriggersWhen">ResetTriggersWhen</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActionIncident` <a name="PutActionIncident" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putActionIncident"></a>

```csharp
private void PutActionIncident(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putActionIncident.parameter.value"></a>

- *Type:* object

---

##### `PutActionPlaybook` <a name="PutActionPlaybook" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putActionPlaybook"></a>

```csharp
private void PutActionPlaybook(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putActionPlaybook.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putTimeouts"></a>

```csharp
private void PutTimeouts(SentinelAutomationRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts">SentinelAutomationRuleTimeouts</a>

---

##### `ResetActionIncident` <a name="ResetActionIncident" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetActionIncident"></a>

```csharp
private void ResetActionIncident()
```

##### `ResetActionPlaybook` <a name="ResetActionPlaybook" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetActionPlaybook"></a>

```csharp
private void ResetActionPlaybook()
```

##### `ResetConditionJson` <a name="ResetConditionJson" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetConditionJson"></a>

```csharp
private void ResetConditionJson()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetExpiration` <a name="ResetExpiration" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetExpiration"></a>

```csharp
private void ResetExpiration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTriggersOn` <a name="ResetTriggersOn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetTriggersOn"></a>

```csharp
private void ResetTriggersOn()
```

##### `ResetTriggersWhen` <a name="ResetTriggersWhen" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetTriggersWhen"></a>

```csharp
private void ResetTriggersWhen()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SentinelAutomationRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelAutomationRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelAutomationRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelAutomationRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelAutomationRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SentinelAutomationRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SentinelAutomationRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SentinelAutomationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SentinelAutomationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.actionIncident">ActionIncident</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList">SentinelAutomationRuleActionIncidentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.actionPlaybook">ActionPlaybook</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList">SentinelAutomationRuleActionPlaybookList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference">SentinelAutomationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.actionIncidentInput">ActionIncidentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.actionPlaybookInput">ActionPlaybookInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.conditionJsonInput">ConditionJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.expirationInput">ExpirationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.orderInput">OrderInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.triggersOnInput">TriggersOnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.triggersWhenInput">TriggersWhenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.conditionJson">ConditionJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.expiration">Expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.order">Order</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.triggersOn">TriggersOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.triggersWhen">TriggersWhen</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ActionIncident`<sup>Required</sup> <a name="ActionIncident" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.actionIncident"></a>

```csharp
public SentinelAutomationRuleActionIncidentList ActionIncident { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList">SentinelAutomationRuleActionIncidentList</a>

---

##### `ActionPlaybook`<sup>Required</sup> <a name="ActionPlaybook" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.actionPlaybook"></a>

```csharp
public SentinelAutomationRuleActionPlaybookList ActionPlaybook { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList">SentinelAutomationRuleActionPlaybookList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.timeouts"></a>

```csharp
public SentinelAutomationRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference">SentinelAutomationRuleTimeoutsOutputReference</a>

---

##### `ActionIncidentInput`<sup>Optional</sup> <a name="ActionIncidentInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.actionIncidentInput"></a>

```csharp
public object ActionIncidentInput { get; }
```

- *Type:* object

---

##### `ActionPlaybookInput`<sup>Optional</sup> <a name="ActionPlaybookInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.actionPlaybookInput"></a>

```csharp
public object ActionPlaybookInput { get; }
```

- *Type:* object

---

##### `ConditionJsonInput`<sup>Optional</sup> <a name="ConditionJsonInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.conditionJsonInput"></a>

```csharp
public string ConditionJsonInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `ExpirationInput`<sup>Optional</sup> <a name="ExpirationInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.expirationInput"></a>

```csharp
public string ExpirationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.logAnalyticsWorkspaceIdInput"></a>

```csharp
public string LogAnalyticsWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.orderInput"></a>

```csharp
public double OrderInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TriggersOnInput`<sup>Optional</sup> <a name="TriggersOnInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.triggersOnInput"></a>

```csharp
public string TriggersOnInput { get; }
```

- *Type:* string

---

##### `TriggersWhenInput`<sup>Optional</sup> <a name="TriggersWhenInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.triggersWhenInput"></a>

```csharp
public string TriggersWhenInput { get; }
```

- *Type:* string

---

##### `ConditionJson`<sup>Required</sup> <a name="ConditionJson" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.conditionJson"></a>

```csharp
public string ConditionJson { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.expiration"></a>

```csharp
public string Expiration { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.order"></a>

```csharp
public double Order { get; }
```

- *Type:* double

---

##### `TriggersOn`<sup>Required</sup> <a name="TriggersOn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.triggersOn"></a>

```csharp
public string TriggersOn { get; }
```

- *Type:* string

---

##### `TriggersWhen`<sup>Required</sup> <a name="TriggersWhen" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.triggersWhen"></a>

```csharp
public string TriggersWhen { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelAutomationRuleActionIncident <a name="SentinelAutomationRuleActionIncident" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelAutomationRuleActionIncident {
    double Order,
    string Classification = null,
    string ClassificationComment = null,
    string[] Labels = null,
    string OwnerId = null,
    string Severity = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.order">Order</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#order SentinelAutomationRule#order}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.classification">Classification</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#classification SentinelAutomationRule#classification}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.classificationComment">ClassificationComment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#classification_comment SentinelAutomationRule#classification_comment}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.labels">Labels</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#labels SentinelAutomationRule#labels}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.ownerId">OwnerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#owner_id SentinelAutomationRule#owner_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.severity">Severity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#severity SentinelAutomationRule#severity}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#status SentinelAutomationRule#status}. |

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.order"></a>

```csharp
public double Order { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#order SentinelAutomationRule#order}.

---

##### `Classification`<sup>Optional</sup> <a name="Classification" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.classification"></a>

```csharp
public string Classification { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#classification SentinelAutomationRule#classification}.

---

##### `ClassificationComment`<sup>Optional</sup> <a name="ClassificationComment" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.classificationComment"></a>

```csharp
public string ClassificationComment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#classification_comment SentinelAutomationRule#classification_comment}.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.labels"></a>

```csharp
public string[] Labels { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#labels SentinelAutomationRule#labels}.

---

##### `OwnerId`<sup>Optional</sup> <a name="OwnerId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.ownerId"></a>

```csharp
public string OwnerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#owner_id SentinelAutomationRule#owner_id}.

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.severity"></a>

```csharp
public string Severity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#severity SentinelAutomationRule#severity}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#status SentinelAutomationRule#status}.

---

### SentinelAutomationRuleActionPlaybook <a name="SentinelAutomationRuleActionPlaybook" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelAutomationRuleActionPlaybook {
    string LogicAppId,
    double Order,
    string TenantId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook.property.logicAppId">LogicAppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#logic_app_id SentinelAutomationRule#logic_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook.property.order">Order</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#order SentinelAutomationRule#order}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#tenant_id SentinelAutomationRule#tenant_id}. |

---

##### `LogicAppId`<sup>Required</sup> <a name="LogicAppId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook.property.logicAppId"></a>

```csharp
public string LogicAppId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#logic_app_id SentinelAutomationRule#logic_app_id}.

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook.property.order"></a>

```csharp
public double Order { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#order SentinelAutomationRule#order}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#tenant_id SentinelAutomationRule#tenant_id}.

---

### SentinelAutomationRuleConfig <a name="SentinelAutomationRuleConfig" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelAutomationRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string LogAnalyticsWorkspaceId,
    string Name,
    double Order,
    object ActionIncident = null,
    object ActionPlaybook = null,
    string ConditionJson = null,
    object Enabled = null,
    string Expiration = null,
    string Id = null,
    SentinelAutomationRuleTimeouts Timeouts = null,
    string TriggersOn = null,
    string TriggersWhen = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#display_name SentinelAutomationRule#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#log_analytics_workspace_id SentinelAutomationRule#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#name SentinelAutomationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.order">Order</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#order SentinelAutomationRule#order}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.actionIncident">ActionIncident</a></code> | <code>object</code> | action_incident block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.actionPlaybook">ActionPlaybook</a></code> | <code>object</code> | action_playbook block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.conditionJson">ConditionJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#condition_json SentinelAutomationRule#condition_json}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#enabled SentinelAutomationRule#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.expiration">Expiration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#expiration SentinelAutomationRule#expiration}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#id SentinelAutomationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts">SentinelAutomationRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.triggersOn">TriggersOn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#triggers_on SentinelAutomationRule#triggers_on}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.triggersWhen">TriggersWhen</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#triggers_when SentinelAutomationRule#triggers_when}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#display_name SentinelAutomationRule#display_name}.

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#log_analytics_workspace_id SentinelAutomationRule#log_analytics_workspace_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#name SentinelAutomationRule#name}.

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.order"></a>

```csharp
public double Order { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#order SentinelAutomationRule#order}.

---

##### `ActionIncident`<sup>Optional</sup> <a name="ActionIncident" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.actionIncident"></a>

```csharp
public object ActionIncident { get; set; }
```

- *Type:* object

action_incident block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#action_incident SentinelAutomationRule#action_incident}

---

##### `ActionPlaybook`<sup>Optional</sup> <a name="ActionPlaybook" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.actionPlaybook"></a>

```csharp
public object ActionPlaybook { get; set; }
```

- *Type:* object

action_playbook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#action_playbook SentinelAutomationRule#action_playbook}

---

##### `ConditionJson`<sup>Optional</sup> <a name="ConditionJson" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.conditionJson"></a>

```csharp
public string ConditionJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#condition_json SentinelAutomationRule#condition_json}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#enabled SentinelAutomationRule#enabled}.

---

##### `Expiration`<sup>Optional</sup> <a name="Expiration" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.expiration"></a>

```csharp
public string Expiration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#expiration SentinelAutomationRule#expiration}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#id SentinelAutomationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.timeouts"></a>

```csharp
public SentinelAutomationRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts">SentinelAutomationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#timeouts SentinelAutomationRule#timeouts}

---

##### `TriggersOn`<sup>Optional</sup> <a name="TriggersOn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.triggersOn"></a>

```csharp
public string TriggersOn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#triggers_on SentinelAutomationRule#triggers_on}.

---

##### `TriggersWhen`<sup>Optional</sup> <a name="TriggersWhen" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.triggersWhen"></a>

```csharp
public string TriggersWhen { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#triggers_when SentinelAutomationRule#triggers_when}.

---

### SentinelAutomationRuleTimeouts <a name="SentinelAutomationRuleTimeouts" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelAutomationRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#create SentinelAutomationRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#delete SentinelAutomationRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#read SentinelAutomationRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#update SentinelAutomationRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#create SentinelAutomationRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#delete SentinelAutomationRule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#read SentinelAutomationRule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/sentinel_automation_rule#update SentinelAutomationRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelAutomationRuleActionIncidentList <a name="SentinelAutomationRuleActionIncidentList" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelAutomationRuleActionIncidentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.get"></a>

```csharp
private SentinelAutomationRuleActionIncidentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SentinelAutomationRuleActionIncidentOutputReference <a name="SentinelAutomationRuleActionIncidentOutputReference" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelAutomationRuleActionIncidentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetClassification">ResetClassification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetClassificationComment">ResetClassificationComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetOwnerId">ResetOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetSeverity">ResetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClassification` <a name="ResetClassification" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetClassification"></a>

```csharp
private void ResetClassification()
```

##### `ResetClassificationComment` <a name="ResetClassificationComment" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetClassificationComment"></a>

```csharp
private void ResetClassificationComment()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetOwnerId` <a name="ResetOwnerId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetOwnerId"></a>

```csharp
private void ResetOwnerId()
```

##### `ResetSeverity` <a name="ResetSeverity" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetSeverity"></a>

```csharp
private void ResetSeverity()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.classificationCommentInput">ClassificationCommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.classificationInput">ClassificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.labelsInput">LabelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.orderInput">OrderInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.ownerIdInput">OwnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.severityInput">SeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.classification">Classification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.classificationComment">ClassificationComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.order">Order</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClassificationCommentInput`<sup>Optional</sup> <a name="ClassificationCommentInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.classificationCommentInput"></a>

```csharp
public string ClassificationCommentInput { get; }
```

- *Type:* string

---

##### `ClassificationInput`<sup>Optional</sup> <a name="ClassificationInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.classificationInput"></a>

```csharp
public string ClassificationInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.labelsInput"></a>

```csharp
public string[] LabelsInput { get; }
```

- *Type:* string[]

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.orderInput"></a>

```csharp
public double OrderInput { get; }
```

- *Type:* double

---

##### `OwnerIdInput`<sup>Optional</sup> <a name="OwnerIdInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.ownerIdInput"></a>

```csharp
public string OwnerIdInput { get; }
```

- *Type:* string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.severityInput"></a>

```csharp
public string SeverityInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Classification`<sup>Required</sup> <a name="Classification" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.classification"></a>

```csharp
public string Classification { get; }
```

- *Type:* string

---

##### `ClassificationComment`<sup>Required</sup> <a name="ClassificationComment" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.classificationComment"></a>

```csharp
public string ClassificationComment { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.order"></a>

```csharp
public double Order { get; }
```

- *Type:* double

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SentinelAutomationRuleActionPlaybookList <a name="SentinelAutomationRuleActionPlaybookList" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelAutomationRuleActionPlaybookList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.get"></a>

```csharp
private SentinelAutomationRuleActionPlaybookOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SentinelAutomationRuleActionPlaybookOutputReference <a name="SentinelAutomationRuleActionPlaybookOutputReference" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelAutomationRuleActionPlaybookOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.resetTenantId"></a>

```csharp
private void ResetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.logicAppIdInput">LogicAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.orderInput">OrderInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.logicAppId">LogicAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.order">Order</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogicAppIdInput`<sup>Optional</sup> <a name="LogicAppIdInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.logicAppIdInput"></a>

```csharp
public string LogicAppIdInput { get; }
```

- *Type:* string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.orderInput"></a>

```csharp
public double OrderInput { get; }
```

- *Type:* double

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `LogicAppId`<sup>Required</sup> <a name="LogicAppId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.logicAppId"></a>

```csharp
public string LogicAppId { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.order"></a>

```csharp
public double Order { get; }
```

- *Type:* double

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SentinelAutomationRuleTimeoutsOutputReference <a name="SentinelAutomationRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelAutomationRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



