# `logAnalyticsWorkspaceTable` Submodule <a name="`logAnalyticsWorkspaceTable` Submodule" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsWorkspaceTable <a name="LogAnalyticsWorkspaceTable" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/log_analytics_workspace_table azurerm_log_analytics_workspace_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogAnalyticsWorkspaceTable(Construct Scope, string Id, LogAnalyticsWorkspaceTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig">LogAnalyticsWorkspaceTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig">LogAnalyticsWorkspaceTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.resetPlan">ResetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.resetRetentionInDays">ResetRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.resetTotalRetentionInDays">ResetTotalRetentionInDays</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.putTimeouts"></a>

```csharp
private void PutTimeouts(LogAnalyticsWorkspaceTableTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts">LogAnalyticsWorkspaceTableTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPlan` <a name="ResetPlan" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.resetPlan"></a>

```csharp
private void ResetPlan()
```

##### `ResetRetentionInDays` <a name="ResetRetentionInDays" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.resetRetentionInDays"></a>

```csharp
private void ResetRetentionInDays()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTotalRetentionInDays` <a name="ResetTotalRetentionInDays" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.resetTotalRetentionInDays"></a>

```csharp
private void ResetTotalRetentionInDays()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LogAnalyticsWorkspaceTable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogAnalyticsWorkspaceTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogAnalyticsWorkspaceTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogAnalyticsWorkspaceTable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogAnalyticsWorkspaceTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LogAnalyticsWorkspaceTable resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogAnalyticsWorkspaceTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogAnalyticsWorkspaceTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/log_analytics_workspace_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LogAnalyticsWorkspaceTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference">LogAnalyticsWorkspaceTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.planInput">PlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.retentionInDaysInput">RetentionInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.totalRetentionInDaysInput">TotalRetentionInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.plan">Plan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.retentionInDays">RetentionInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.totalRetentionInDays">TotalRetentionInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.timeouts"></a>

```csharp
public LogAnalyticsWorkspaceTableTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference">LogAnalyticsWorkspaceTableTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.planInput"></a>

```csharp
public string PlanInput { get; }
```

- *Type:* string

---

##### `RetentionInDaysInput`<sup>Optional</sup> <a name="RetentionInDaysInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.retentionInDaysInput"></a>

```csharp
public double RetentionInDaysInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TotalRetentionInDaysInput`<sup>Optional</sup> <a name="TotalRetentionInDaysInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.totalRetentionInDaysInput"></a>

```csharp
public double TotalRetentionInDaysInput { get; }
```

- *Type:* double

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.plan"></a>

```csharp
public string Plan { get; }
```

- *Type:* string

---

##### `RetentionInDays`<sup>Required</sup> <a name="RetentionInDays" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.retentionInDays"></a>

```csharp
public double RetentionInDays { get; }
```

- *Type:* double

---

##### `TotalRetentionInDays`<sup>Required</sup> <a name="TotalRetentionInDays" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.totalRetentionInDays"></a>

```csharp
public double TotalRetentionInDays { get; }
```

- *Type:* double

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsWorkspaceTableConfig <a name="LogAnalyticsWorkspaceTableConfig" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogAnalyticsWorkspaceTableConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string WorkspaceId,
    string Id = null,
    string Plan = null,
    double RetentionInDays = null,
    LogAnalyticsWorkspaceTableTimeouts Timeouts = null,
    double TotalRetentionInDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/log_analytics_workspace_table#name LogAnalyticsWorkspaceTable#name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/log_analytics_workspace_table#workspace_id LogAnalyticsWorkspaceTable#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/log_analytics_workspace_table#id LogAnalyticsWorkspaceTable#id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.plan">Plan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/log_analytics_workspace_table#plan LogAnalyticsWorkspaceTable#plan}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.retentionInDays">RetentionInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/log_analytics_workspace_table#retention_in_days LogAnalyticsWorkspaceTable#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts">LogAnalyticsWorkspaceTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.totalRetentionInDays">TotalRetentionInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/log_analytics_workspace_table#total_retention_in_days LogAnalyticsWorkspaceTable#total_retention_in_days}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/log_analytics_workspace_table#name LogAnalyticsWorkspaceTable#name}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/log_analytics_workspace_table#workspace_id LogAnalyticsWorkspaceTable#workspace_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/log_analytics_workspace_table#id LogAnalyticsWorkspaceTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Plan`<sup>Optional</sup> <a name="Plan" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.plan"></a>

```csharp
public string Plan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/log_analytics_workspace_table#plan LogAnalyticsWorkspaceTable#plan}.

---

##### `RetentionInDays`<sup>Optional</sup> <a name="RetentionInDays" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.retentionInDays"></a>

```csharp
public double RetentionInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/log_analytics_workspace_table#retention_in_days LogAnalyticsWorkspaceTable#retention_in_days}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.timeouts"></a>

```csharp
public LogAnalyticsWorkspaceTableTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts">LogAnalyticsWorkspaceTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/log_analytics_workspace_table#timeouts LogAnalyticsWorkspaceTable#timeouts}

---

##### `TotalRetentionInDays`<sup>Optional</sup> <a name="TotalRetentionInDays" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.totalRetentionInDays"></a>

```csharp
public double TotalRetentionInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/log_analytics_workspace_table#total_retention_in_days LogAnalyticsWorkspaceTable#total_retention_in_days}.

---

### LogAnalyticsWorkspaceTableTimeouts <a name="LogAnalyticsWorkspaceTableTimeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogAnalyticsWorkspaceTableTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/log_analytics_workspace_table#create LogAnalyticsWorkspaceTable#create}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/log_analytics_workspace_table#delete LogAnalyticsWorkspaceTable#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/log_analytics_workspace_table#read LogAnalyticsWorkspaceTable#read}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/log_analytics_workspace_table#update LogAnalyticsWorkspaceTable#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/log_analytics_workspace_table#create LogAnalyticsWorkspaceTable#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/log_analytics_workspace_table#delete LogAnalyticsWorkspaceTable#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/log_analytics_workspace_table#read LogAnalyticsWorkspaceTable#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/log_analytics_workspace_table#update LogAnalyticsWorkspaceTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsWorkspaceTableTimeoutsOutputReference <a name="LogAnalyticsWorkspaceTableTimeoutsOutputReference" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogAnalyticsWorkspaceTableTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



