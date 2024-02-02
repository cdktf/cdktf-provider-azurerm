# `datadogMonitorTagRule` Submodule <a name="`datadogMonitorTagRule` Submodule" id="@cdktf/provider-azurerm.datadogMonitorTagRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatadogMonitorTagRule <a name="DatadogMonitorTagRule" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule azurerm_datadog_monitor_tag_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatadogMonitorTagRule(Construct Scope, string Id, DatadogMonitorTagRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig">DatadogMonitorTagRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig">DatadogMonitorTagRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putLog">PutLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetLog">ResetLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLog` <a name="PutLog" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putLog"></a>

```csharp
private void PutLog(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putLog.parameter.value"></a>

- *Type:* object

---

##### `PutMetric` <a name="PutMetric" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putMetric"></a>

```csharp
private void PutMetric(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putMetric.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putTimeouts"></a>

```csharp
private void PutTimeouts(DatadogMonitorTagRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts">DatadogMonitorTagRuleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLog` <a name="ResetLog" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetLog"></a>

```csharp
private void ResetLog()
```

##### `ResetMetric` <a name="ResetMetric" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetMetric"></a>

```csharp
private void ResetMetric()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatadogMonitorTagRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DatadogMonitorTagRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DatadogMonitorTagRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DatadogMonitorTagRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DatadogMonitorTagRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatadogMonitorTagRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatadogMonitorTagRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatadogMonitorTagRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatadogMonitorTagRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.log">Log</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList">DatadogMonitorTagRuleLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList">DatadogMonitorTagRuleMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference">DatadogMonitorTagRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.datadogMonitorIdInput">DatadogMonitorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.logInput">LogInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.metricInput">MetricInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.datadogMonitorId">DatadogMonitorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Log`<sup>Required</sup> <a name="Log" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.log"></a>

```csharp
public DatadogMonitorTagRuleLogList Log { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList">DatadogMonitorTagRuleLogList</a>

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.metric"></a>

```csharp
public DatadogMonitorTagRuleMetricList Metric { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList">DatadogMonitorTagRuleMetricList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.timeouts"></a>

```csharp
public DatadogMonitorTagRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference">DatadogMonitorTagRuleTimeoutsOutputReference</a>

---

##### `DatadogMonitorIdInput`<sup>Optional</sup> <a name="DatadogMonitorIdInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.datadogMonitorIdInput"></a>

```csharp
public string DatadogMonitorIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogInput`<sup>Optional</sup> <a name="LogInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.logInput"></a>

```csharp
public object LogInput { get; }
```

- *Type:* object

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.metricInput"></a>

```csharp
public object MetricInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DatadogMonitorId`<sup>Required</sup> <a name="DatadogMonitorId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.datadogMonitorId"></a>

```csharp
public string DatadogMonitorId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatadogMonitorTagRuleConfig <a name="DatadogMonitorTagRuleConfig" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatadogMonitorTagRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatadogMonitorId,
    string Id = null,
    object Log = null,
    object Metric = null,
    string Name = null,
    DatadogMonitorTagRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.datadogMonitorId">DatadogMonitorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#datadog_monitor_id DatadogMonitorTagRule#datadog_monitor_id}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#id DatadogMonitorTagRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.log">Log</a></code> | <code>object</code> | log block. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.metric">Metric</a></code> | <code>object</code> | metric block. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#name DatadogMonitorTagRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts">DatadogMonitorTagRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatadogMonitorId`<sup>Required</sup> <a name="DatadogMonitorId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.datadogMonitorId"></a>

```csharp
public string DatadogMonitorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#datadog_monitor_id DatadogMonitorTagRule#datadog_monitor_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#id DatadogMonitorTagRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Log`<sup>Optional</sup> <a name="Log" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.log"></a>

```csharp
public object Log { get; set; }
```

- *Type:* object

log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#log DatadogMonitorTagRule#log}

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.metric"></a>

```csharp
public object Metric { get; set; }
```

- *Type:* object

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#metric DatadogMonitorTagRule#metric}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#name DatadogMonitorTagRule#name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.timeouts"></a>

```csharp
public DatadogMonitorTagRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts">DatadogMonitorTagRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#timeouts DatadogMonitorTagRule#timeouts}

---

### DatadogMonitorTagRuleLog <a name="DatadogMonitorTagRuleLog" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatadogMonitorTagRuleLog {
    object AadLogEnabled = null,
    object Filter = null,
    object ResourceLogEnabled = null,
    object SubscriptionLogEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.aadLogEnabled">AadLogEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#aad_log_enabled DatadogMonitorTagRule#aad_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.resourceLogEnabled">ResourceLogEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#resource_log_enabled DatadogMonitorTagRule#resource_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.subscriptionLogEnabled">SubscriptionLogEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#subscription_log_enabled DatadogMonitorTagRule#subscription_log_enabled}. |

---

##### `AadLogEnabled`<sup>Optional</sup> <a name="AadLogEnabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.aadLogEnabled"></a>

```csharp
public object AadLogEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#aad_log_enabled DatadogMonitorTagRule#aad_log_enabled}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#filter DatadogMonitorTagRule#filter}

---

##### `ResourceLogEnabled`<sup>Optional</sup> <a name="ResourceLogEnabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.resourceLogEnabled"></a>

```csharp
public object ResourceLogEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#resource_log_enabled DatadogMonitorTagRule#resource_log_enabled}.

---

##### `SubscriptionLogEnabled`<sup>Optional</sup> <a name="SubscriptionLogEnabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.subscriptionLogEnabled"></a>

```csharp
public object SubscriptionLogEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#subscription_log_enabled DatadogMonitorTagRule#subscription_log_enabled}.

---

### DatadogMonitorTagRuleLogFilter <a name="DatadogMonitorTagRuleLogFilter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatadogMonitorTagRuleLogFilter {
    string Action,
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#action DatadogMonitorTagRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#name DatadogMonitorTagRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#value DatadogMonitorTagRule#value}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#action DatadogMonitorTagRule#action}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#name DatadogMonitorTagRule#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#value DatadogMonitorTagRule#value}.

---

### DatadogMonitorTagRuleMetric <a name="DatadogMonitorTagRuleMetric" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatadogMonitorTagRuleMetric {
    object Filter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric.property.filter">Filter</a></code> | <code>object</code> | filter block. |

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#filter DatadogMonitorTagRule#filter}

---

### DatadogMonitorTagRuleMetricFilter <a name="DatadogMonitorTagRuleMetricFilter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatadogMonitorTagRuleMetricFilter {
    string Action,
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#action DatadogMonitorTagRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#name DatadogMonitorTagRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#value DatadogMonitorTagRule#value}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#action DatadogMonitorTagRule#action}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#name DatadogMonitorTagRule#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#value DatadogMonitorTagRule#value}.

---

### DatadogMonitorTagRuleTimeouts <a name="DatadogMonitorTagRuleTimeouts" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatadogMonitorTagRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#create DatadogMonitorTagRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#delete DatadogMonitorTagRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#read DatadogMonitorTagRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#update DatadogMonitorTagRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#create DatadogMonitorTagRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#delete DatadogMonitorTagRule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#read DatadogMonitorTagRule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/datadog_monitor_tag_rule#update DatadogMonitorTagRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatadogMonitorTagRuleLogFilterList <a name="DatadogMonitorTagRuleLogFilterList" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatadogMonitorTagRuleLogFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.get"></a>

```csharp
private DatadogMonitorTagRuleLogFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatadogMonitorTagRuleLogFilterOutputReference <a name="DatadogMonitorTagRuleLogFilterOutputReference" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatadogMonitorTagRuleLogFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatadogMonitorTagRuleLogList <a name="DatadogMonitorTagRuleLogList" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatadogMonitorTagRuleLogList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.get"></a>

```csharp
private DatadogMonitorTagRuleLogOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatadogMonitorTagRuleLogOutputReference <a name="DatadogMonitorTagRuleLogOutputReference" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatadogMonitorTagRuleLogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetAadLogEnabled">ResetAadLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetResourceLogEnabled">ResetResourceLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetSubscriptionLogEnabled">ResetSubscriptionLogEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAadLogEnabled` <a name="ResetAadLogEnabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetAadLogEnabled"></a>

```csharp
private void ResetAadLogEnabled()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetResourceLogEnabled` <a name="ResetResourceLogEnabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetResourceLogEnabled"></a>

```csharp
private void ResetResourceLogEnabled()
```

##### `ResetSubscriptionLogEnabled` <a name="ResetSubscriptionLogEnabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetSubscriptionLogEnabled"></a>

```csharp
private void ResetSubscriptionLogEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList">DatadogMonitorTagRuleLogFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.aadLogEnabledInput">AadLogEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.resourceLogEnabledInput">ResourceLogEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.subscriptionLogEnabledInput">SubscriptionLogEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.aadLogEnabled">AadLogEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.resourceLogEnabled">ResourceLogEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.subscriptionLogEnabled">SubscriptionLogEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.filter"></a>

```csharp
public DatadogMonitorTagRuleLogFilterList Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList">DatadogMonitorTagRuleLogFilterList</a>

---

##### `AadLogEnabledInput`<sup>Optional</sup> <a name="AadLogEnabledInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.aadLogEnabledInput"></a>

```csharp
public object AadLogEnabledInput { get; }
```

- *Type:* object

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `ResourceLogEnabledInput`<sup>Optional</sup> <a name="ResourceLogEnabledInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.resourceLogEnabledInput"></a>

```csharp
public object ResourceLogEnabledInput { get; }
```

- *Type:* object

---

##### `SubscriptionLogEnabledInput`<sup>Optional</sup> <a name="SubscriptionLogEnabledInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.subscriptionLogEnabledInput"></a>

```csharp
public object SubscriptionLogEnabledInput { get; }
```

- *Type:* object

---

##### `AadLogEnabled`<sup>Required</sup> <a name="AadLogEnabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.aadLogEnabled"></a>

```csharp
public object AadLogEnabled { get; }
```

- *Type:* object

---

##### `ResourceLogEnabled`<sup>Required</sup> <a name="ResourceLogEnabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.resourceLogEnabled"></a>

```csharp
public object ResourceLogEnabled { get; }
```

- *Type:* object

---

##### `SubscriptionLogEnabled`<sup>Required</sup> <a name="SubscriptionLogEnabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.subscriptionLogEnabled"></a>

```csharp
public object SubscriptionLogEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatadogMonitorTagRuleMetricFilterList <a name="DatadogMonitorTagRuleMetricFilterList" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatadogMonitorTagRuleMetricFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.get"></a>

```csharp
private DatadogMonitorTagRuleMetricFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatadogMonitorTagRuleMetricFilterOutputReference <a name="DatadogMonitorTagRuleMetricFilterOutputReference" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatadogMonitorTagRuleMetricFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatadogMonitorTagRuleMetricList <a name="DatadogMonitorTagRuleMetricList" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatadogMonitorTagRuleMetricList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.get"></a>

```csharp
private DatadogMonitorTagRuleMetricOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatadogMonitorTagRuleMetricOutputReference <a name="DatadogMonitorTagRuleMetricOutputReference" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatadogMonitorTagRuleMetricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList">DatadogMonitorTagRuleMetricFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.filter"></a>

```csharp
public DatadogMonitorTagRuleMetricFilterList Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList">DatadogMonitorTagRuleMetricFilterList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatadogMonitorTagRuleTimeoutsOutputReference <a name="DatadogMonitorTagRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatadogMonitorTagRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



