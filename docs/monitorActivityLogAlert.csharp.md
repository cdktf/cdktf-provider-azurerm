# `monitorActivityLogAlert` Submodule <a name="`monitorActivityLogAlert` Submodule" id="@cdktf/provider-azurerm.monitorActivityLogAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorActivityLogAlert <a name="MonitorActivityLogAlert" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert azurerm_monitor_activity_log_alert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActivityLogAlert(Construct Scope, string Id, MonitorActivityLogAlertConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig">MonitorActivityLogAlertConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig">MonitorActivityLogAlertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.putCriteria">PutCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.putAction"></a>

```csharp
private void PutAction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.putAction.parameter.value"></a>

- *Type:* object

---

##### `PutCriteria` <a name="PutCriteria" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.putCriteria"></a>

```csharp
private void PutCriteria(MonitorActivityLogAlertCriteria Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria">MonitorActivityLogAlertCriteria</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.putTimeouts"></a>

```csharp
private void PutTimeouts(MonitorActivityLogAlertTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts">MonitorActivityLogAlertTimeouts</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorActivityLogAlert resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorActivityLogAlert.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorActivityLogAlert.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorActivityLogAlert.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorActivityLogAlert.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MonitorActivityLogAlert resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitorActivityLogAlert to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitorActivityLogAlert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MonitorActivityLogAlert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.action">Action</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList">MonitorActivityLogAlertActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.criteria">Criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference">MonitorActivityLogAlertCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference">MonitorActivityLogAlertTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.actionInput">ActionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.criteriaInput">CriteriaInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria">MonitorActivityLogAlertCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.action"></a>

```csharp
public MonitorActivityLogAlertActionList Action { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList">MonitorActivityLogAlertActionList</a>

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.criteria"></a>

```csharp
public MonitorActivityLogAlertCriteriaOutputReference Criteria { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference">MonitorActivityLogAlertCriteriaOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.timeouts"></a>

```csharp
public MonitorActivityLogAlertTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference">MonitorActivityLogAlertTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.actionInput"></a>

```csharp
public object ActionInput { get; }
```

- *Type:* object

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.criteriaInput"></a>

```csharp
public MonitorActivityLogAlertCriteria CriteriaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria">MonitorActivityLogAlertCriteria</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorActivityLogAlertAction <a name="MonitorActivityLogAlertAction" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActivityLogAlertAction {
    string ActionGroupId,
    System.Collections.Generic.IDictionary<string, string> WebhookProperties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertAction.property.actionGroupId">ActionGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#action_group_id MonitorActivityLogAlert#action_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertAction.property.webhookProperties">WebhookProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#webhook_properties MonitorActivityLogAlert#webhook_properties}. |

---

##### `ActionGroupId`<sup>Required</sup> <a name="ActionGroupId" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertAction.property.actionGroupId"></a>

```csharp
public string ActionGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#action_group_id MonitorActivityLogAlert#action_group_id}.

---

##### `WebhookProperties`<sup>Optional</sup> <a name="WebhookProperties" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertAction.property.webhookProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> WebhookProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#webhook_properties MonitorActivityLogAlert#webhook_properties}.

---

### MonitorActivityLogAlertConfig <a name="MonitorActivityLogAlertConfig" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActivityLogAlertConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    MonitorActivityLogAlertCriteria Criteria,
    string Location,
    string Name,
    string ResourceGroupName,
    string[] Scopes,
    object Action = null,
    string Description = null,
    object Enabled = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    MonitorActivityLogAlertTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.criteria">Criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria">MonitorActivityLogAlertCriteria</a></code> | criteria block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#location MonitorActivityLogAlert#location}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#name MonitorActivityLogAlert#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#resource_group_name MonitorActivityLogAlert#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#scopes MonitorActivityLogAlert#scopes}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.action">Action</a></code> | <code>object</code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#description MonitorActivityLogAlert#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#enabled MonitorActivityLogAlert#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#id MonitorActivityLogAlert#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#tags MonitorActivityLogAlert#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts">MonitorActivityLogAlertTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.criteria"></a>

```csharp
public MonitorActivityLogAlertCriteria Criteria { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria">MonitorActivityLogAlertCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#criteria MonitorActivityLogAlert#criteria}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#location MonitorActivityLogAlert#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#name MonitorActivityLogAlert#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#resource_group_name MonitorActivityLogAlert#resource_group_name}.

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#scopes MonitorActivityLogAlert#scopes}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.action"></a>

```csharp
public object Action { get; set; }
```

- *Type:* object

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#action MonitorActivityLogAlert#action}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#description MonitorActivityLogAlert#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#enabled MonitorActivityLogAlert#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#id MonitorActivityLogAlert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#tags MonitorActivityLogAlert#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.timeouts"></a>

```csharp
public MonitorActivityLogAlertTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts">MonitorActivityLogAlertTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#timeouts MonitorActivityLogAlert#timeouts}

---

### MonitorActivityLogAlertCriteria <a name="MonitorActivityLogAlertCriteria" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActivityLogAlertCriteria {
    string Category,
    string Caller = null,
    string Level = null,
    string[] Levels = null,
    string OperationName = null,
    string RecommendationCategory = null,
    string RecommendationImpact = null,
    string RecommendationType = null,
    string ResourceGroup = null,
    string[] ResourceGroups = null,
    MonitorActivityLogAlertCriteriaResourceHealth ResourceHealth = null,
    string ResourceId = null,
    string[] ResourceIds = null,
    string ResourceProvider = null,
    string[] ResourceProviders = null,
    string ResourceType = null,
    string[] ResourceTypes = null,
    MonitorActivityLogAlertCriteriaServiceHealth ServiceHealth = null,
    string Status = null,
    string[] Statuses = null,
    string SubStatus = null,
    string[] SubStatuses = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.category">Category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#category MonitorActivityLogAlert#category}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.caller">Caller</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#caller MonitorActivityLogAlert#caller}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.level">Level</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#level MonitorActivityLogAlert#level}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.levels">Levels</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#levels MonitorActivityLogAlert#levels}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.operationName">OperationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#operation_name MonitorActivityLogAlert#operation_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.recommendationCategory">RecommendationCategory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#recommendation_category MonitorActivityLogAlert#recommendation_category}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.recommendationImpact">RecommendationImpact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#recommendation_impact MonitorActivityLogAlert#recommendation_impact}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.recommendationType">RecommendationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#recommendation_type MonitorActivityLogAlert#recommendation_type}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceGroup">ResourceGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#resource_group MonitorActivityLogAlert#resource_group}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#resource_groups MonitorActivityLogAlert#resource_groups}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceHealth">ResourceHealth</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth">MonitorActivityLogAlertCriteriaResourceHealth</a></code> | resource_health block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceId">ResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#resource_id MonitorActivityLogAlert#resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceIds">ResourceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#resource_ids MonitorActivityLogAlert#resource_ids}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceProvider">ResourceProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#resource_provider MonitorActivityLogAlert#resource_provider}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceProviders">ResourceProviders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#resource_providers MonitorActivityLogAlert#resource_providers}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#resource_type MonitorActivityLogAlert#resource_type}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#resource_types MonitorActivityLogAlert#resource_types}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.serviceHealth">ServiceHealth</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth">MonitorActivityLogAlertCriteriaServiceHealth</a></code> | service_health block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#status MonitorActivityLogAlert#status}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.statuses">Statuses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#statuses MonitorActivityLogAlert#statuses}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.subStatus">SubStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#sub_status MonitorActivityLogAlert#sub_status}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.subStatuses">SubStatuses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#sub_statuses MonitorActivityLogAlert#sub_statuses}. |

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#category MonitorActivityLogAlert#category}.

---

##### `Caller`<sup>Optional</sup> <a name="Caller" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.caller"></a>

```csharp
public string Caller { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#caller MonitorActivityLogAlert#caller}.

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.level"></a>

```csharp
public string Level { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#level MonitorActivityLogAlert#level}.

---

##### `Levels`<sup>Optional</sup> <a name="Levels" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.levels"></a>

```csharp
public string[] Levels { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#levels MonitorActivityLogAlert#levels}.

---

##### `OperationName`<sup>Optional</sup> <a name="OperationName" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.operationName"></a>

```csharp
public string OperationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#operation_name MonitorActivityLogAlert#operation_name}.

---

##### `RecommendationCategory`<sup>Optional</sup> <a name="RecommendationCategory" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.recommendationCategory"></a>

```csharp
public string RecommendationCategory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#recommendation_category MonitorActivityLogAlert#recommendation_category}.

---

##### `RecommendationImpact`<sup>Optional</sup> <a name="RecommendationImpact" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.recommendationImpact"></a>

```csharp
public string RecommendationImpact { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#recommendation_impact MonitorActivityLogAlert#recommendation_impact}.

---

##### `RecommendationType`<sup>Optional</sup> <a name="RecommendationType" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.recommendationType"></a>

```csharp
public string RecommendationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#recommendation_type MonitorActivityLogAlert#recommendation_type}.

---

##### `ResourceGroup`<sup>Optional</sup> <a name="ResourceGroup" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceGroup"></a>

```csharp
public string ResourceGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#resource_group MonitorActivityLogAlert#resource_group}.

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#resource_groups MonitorActivityLogAlert#resource_groups}.

---

##### `ResourceHealth`<sup>Optional</sup> <a name="ResourceHealth" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceHealth"></a>

```csharp
public MonitorActivityLogAlertCriteriaResourceHealth ResourceHealth { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth">MonitorActivityLogAlertCriteriaResourceHealth</a>

resource_health block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#resource_health MonitorActivityLogAlert#resource_health}

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#resource_id MonitorActivityLogAlert#resource_id}.

---

##### `ResourceIds`<sup>Optional</sup> <a name="ResourceIds" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceIds"></a>

```csharp
public string[] ResourceIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#resource_ids MonitorActivityLogAlert#resource_ids}.

---

##### `ResourceProvider`<sup>Optional</sup> <a name="ResourceProvider" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceProvider"></a>

```csharp
public string ResourceProvider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#resource_provider MonitorActivityLogAlert#resource_provider}.

---

##### `ResourceProviders`<sup>Optional</sup> <a name="ResourceProviders" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceProviders"></a>

```csharp
public string[] ResourceProviders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#resource_providers MonitorActivityLogAlert#resource_providers}.

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#resource_type MonitorActivityLogAlert#resource_type}.

---

##### `ResourceTypes`<sup>Optional</sup> <a name="ResourceTypes" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#resource_types MonitorActivityLogAlert#resource_types}.

---

##### `ServiceHealth`<sup>Optional</sup> <a name="ServiceHealth" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.serviceHealth"></a>

```csharp
public MonitorActivityLogAlertCriteriaServiceHealth ServiceHealth { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth">MonitorActivityLogAlertCriteriaServiceHealth</a>

service_health block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#service_health MonitorActivityLogAlert#service_health}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#status MonitorActivityLogAlert#status}.

---

##### `Statuses`<sup>Optional</sup> <a name="Statuses" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.statuses"></a>

```csharp
public string[] Statuses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#statuses MonitorActivityLogAlert#statuses}.

---

##### `SubStatus`<sup>Optional</sup> <a name="SubStatus" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.subStatus"></a>

```csharp
public string SubStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#sub_status MonitorActivityLogAlert#sub_status}.

---

##### `SubStatuses`<sup>Optional</sup> <a name="SubStatuses" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.subStatuses"></a>

```csharp
public string[] SubStatuses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#sub_statuses MonitorActivityLogAlert#sub_statuses}.

---

### MonitorActivityLogAlertCriteriaResourceHealth <a name="MonitorActivityLogAlertCriteriaResourceHealth" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActivityLogAlertCriteriaResourceHealth {
    string[] Current = null,
    string[] Previous = null,
    string[] Reason = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth.property.current">Current</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#current MonitorActivityLogAlert#current}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth.property.previous">Previous</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#previous MonitorActivityLogAlert#previous}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth.property.reason">Reason</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#reason MonitorActivityLogAlert#reason}. |

---

##### `Current`<sup>Optional</sup> <a name="Current" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth.property.current"></a>

```csharp
public string[] Current { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#current MonitorActivityLogAlert#current}.

---

##### `Previous`<sup>Optional</sup> <a name="Previous" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth.property.previous"></a>

```csharp
public string[] Previous { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#previous MonitorActivityLogAlert#previous}.

---

##### `Reason`<sup>Optional</sup> <a name="Reason" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth.property.reason"></a>

```csharp
public string[] Reason { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#reason MonitorActivityLogAlert#reason}.

---

### MonitorActivityLogAlertCriteriaServiceHealth <a name="MonitorActivityLogAlertCriteriaServiceHealth" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActivityLogAlertCriteriaServiceHealth {
    string[] Events = null,
    string[] Locations = null,
    string[] Services = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth.property.events">Events</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#events MonitorActivityLogAlert#events}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth.property.locations">Locations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#locations MonitorActivityLogAlert#locations}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth.property.services">Services</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#services MonitorActivityLogAlert#services}. |

---

##### `Events`<sup>Optional</sup> <a name="Events" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth.property.events"></a>

```csharp
public string[] Events { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#events MonitorActivityLogAlert#events}.

---

##### `Locations`<sup>Optional</sup> <a name="Locations" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth.property.locations"></a>

```csharp
public string[] Locations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#locations MonitorActivityLogAlert#locations}.

---

##### `Services`<sup>Optional</sup> <a name="Services" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth.property.services"></a>

```csharp
public string[] Services { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#services MonitorActivityLogAlert#services}.

---

### MonitorActivityLogAlertTimeouts <a name="MonitorActivityLogAlertTimeouts" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActivityLogAlertTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#create MonitorActivityLogAlert#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#delete MonitorActivityLogAlert#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#read MonitorActivityLogAlert#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#update MonitorActivityLogAlert#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#create MonitorActivityLogAlert#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#delete MonitorActivityLogAlert#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#read MonitorActivityLogAlert#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_activity_log_alert#update MonitorActivityLogAlert#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorActivityLogAlertActionList <a name="MonitorActivityLogAlertActionList" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActivityLogAlertActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.get"></a>

```csharp
private MonitorActivityLogAlertActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorActivityLogAlertActionOutputReference <a name="MonitorActivityLogAlertActionOutputReference" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActivityLogAlertActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.resetWebhookProperties">ResetWebhookProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWebhookProperties` <a name="ResetWebhookProperties" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.resetWebhookProperties"></a>

```csharp
private void ResetWebhookProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.property.actionGroupIdInput">ActionGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.property.webhookPropertiesInput">WebhookPropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.property.actionGroupId">ActionGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.property.webhookProperties">WebhookProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionGroupIdInput`<sup>Optional</sup> <a name="ActionGroupIdInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.property.actionGroupIdInput"></a>

```csharp
public string ActionGroupIdInput { get; }
```

- *Type:* string

---

##### `WebhookPropertiesInput`<sup>Optional</sup> <a name="WebhookPropertiesInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.property.webhookPropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> WebhookPropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ActionGroupId`<sup>Required</sup> <a name="ActionGroupId" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.property.actionGroupId"></a>

```csharp
public string ActionGroupId { get; }
```

- *Type:* string

---

##### `WebhookProperties`<sup>Required</sup> <a name="WebhookProperties" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.property.webhookProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> WebhookProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorActivityLogAlertCriteriaOutputReference <a name="MonitorActivityLogAlertCriteriaOutputReference" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActivityLogAlertCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.putResourceHealth">PutResourceHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.putServiceHealth">PutServiceHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetCaller">ResetCaller</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetLevel">ResetLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetLevels">ResetLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetOperationName">ResetOperationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetRecommendationCategory">ResetRecommendationCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetRecommendationImpact">ResetRecommendationImpact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetRecommendationType">ResetRecommendationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceGroup">ResetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceHealth">ResetResourceHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceIds">ResetResourceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceProvider">ResetResourceProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceProviders">ResetResourceProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceTypes">ResetResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetServiceHealth">ResetServiceHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetStatuses">ResetStatuses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetSubStatus">ResetSubStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetSubStatuses">ResetSubStatuses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResourceHealth` <a name="PutResourceHealth" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.putResourceHealth"></a>

```csharp
private void PutResourceHealth(MonitorActivityLogAlertCriteriaResourceHealth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.putResourceHealth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth">MonitorActivityLogAlertCriteriaResourceHealth</a>

---

##### `PutServiceHealth` <a name="PutServiceHealth" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.putServiceHealth"></a>

```csharp
private void PutServiceHealth(MonitorActivityLogAlertCriteriaServiceHealth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.putServiceHealth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth">MonitorActivityLogAlertCriteriaServiceHealth</a>

---

##### `ResetCaller` <a name="ResetCaller" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetCaller"></a>

```csharp
private void ResetCaller()
```

##### `ResetLevel` <a name="ResetLevel" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetLevel"></a>

```csharp
private void ResetLevel()
```

##### `ResetLevels` <a name="ResetLevels" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetLevels"></a>

```csharp
private void ResetLevels()
```

##### `ResetOperationName` <a name="ResetOperationName" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetOperationName"></a>

```csharp
private void ResetOperationName()
```

##### `ResetRecommendationCategory` <a name="ResetRecommendationCategory" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetRecommendationCategory"></a>

```csharp
private void ResetRecommendationCategory()
```

##### `ResetRecommendationImpact` <a name="ResetRecommendationImpact" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetRecommendationImpact"></a>

```csharp
private void ResetRecommendationImpact()
```

##### `ResetRecommendationType` <a name="ResetRecommendationType" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetRecommendationType"></a>

```csharp
private void ResetRecommendationType()
```

##### `ResetResourceGroup` <a name="ResetResourceGroup" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceGroup"></a>

```csharp
private void ResetResourceGroup()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```

##### `ResetResourceHealth` <a name="ResetResourceHealth" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceHealth"></a>

```csharp
private void ResetResourceHealth()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceId"></a>

```csharp
private void ResetResourceId()
```

##### `ResetResourceIds` <a name="ResetResourceIds" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceIds"></a>

```csharp
private void ResetResourceIds()
```

##### `ResetResourceProvider` <a name="ResetResourceProvider" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceProvider"></a>

```csharp
private void ResetResourceProvider()
```

##### `ResetResourceProviders` <a name="ResetResourceProviders" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceProviders"></a>

```csharp
private void ResetResourceProviders()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceType"></a>

```csharp
private void ResetResourceType()
```

##### `ResetResourceTypes` <a name="ResetResourceTypes" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceTypes"></a>

```csharp
private void ResetResourceTypes()
```

##### `ResetServiceHealth` <a name="ResetServiceHealth" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetServiceHealth"></a>

```csharp
private void ResetServiceHealth()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetStatuses` <a name="ResetStatuses" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetStatuses"></a>

```csharp
private void ResetStatuses()
```

##### `ResetSubStatus` <a name="ResetSubStatus" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetSubStatus"></a>

```csharp
private void ResetSubStatus()
```

##### `ResetSubStatuses` <a name="ResetSubStatuses" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetSubStatuses"></a>

```csharp
private void ResetSubStatuses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceHealth">ResourceHealth</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference">MonitorActivityLogAlertCriteriaResourceHealthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.serviceHealth">ServiceHealth</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference">MonitorActivityLogAlertCriteriaServiceHealthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.callerInput">CallerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.levelInput">LevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.levelsInput">LevelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.operationNameInput">OperationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.recommendationCategoryInput">RecommendationCategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.recommendationImpactInput">RecommendationImpactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.recommendationTypeInput">RecommendationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceGroupInput">ResourceGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceHealthInput">ResourceHealthInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth">MonitorActivityLogAlertCriteriaResourceHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceIdsInput">ResourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceProviderInput">ResourceProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceProvidersInput">ResourceProvidersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.serviceHealthInput">ServiceHealthInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth">MonitorActivityLogAlertCriteriaServiceHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.statusesInput">StatusesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.subStatusesInput">SubStatusesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.subStatusInput">SubStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.caller">Caller</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.levels">Levels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.operationName">OperationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.recommendationCategory">RecommendationCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.recommendationImpact">RecommendationImpact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.recommendationType">RecommendationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceGroup">ResourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceIds">ResourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceProvider">ResourceProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceProviders">ResourceProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.statuses">Statuses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.subStatus">SubStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.subStatuses">SubStatuses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria">MonitorActivityLogAlertCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceHealth`<sup>Required</sup> <a name="ResourceHealth" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceHealth"></a>

```csharp
public MonitorActivityLogAlertCriteriaResourceHealthOutputReference ResourceHealth { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference">MonitorActivityLogAlertCriteriaResourceHealthOutputReference</a>

---

##### `ServiceHealth`<sup>Required</sup> <a name="ServiceHealth" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.serviceHealth"></a>

```csharp
public MonitorActivityLogAlertCriteriaServiceHealthOutputReference ServiceHealth { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference">MonitorActivityLogAlertCriteriaServiceHealthOutputReference</a>

---

##### `CallerInput`<sup>Optional</sup> <a name="CallerInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.callerInput"></a>

```csharp
public string CallerInput { get; }
```

- *Type:* string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.levelInput"></a>

```csharp
public string LevelInput { get; }
```

- *Type:* string

---

##### `LevelsInput`<sup>Optional</sup> <a name="LevelsInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.levelsInput"></a>

```csharp
public string[] LevelsInput { get; }
```

- *Type:* string[]

---

##### `OperationNameInput`<sup>Optional</sup> <a name="OperationNameInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.operationNameInput"></a>

```csharp
public string OperationNameInput { get; }
```

- *Type:* string

---

##### `RecommendationCategoryInput`<sup>Optional</sup> <a name="RecommendationCategoryInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.recommendationCategoryInput"></a>

```csharp
public string RecommendationCategoryInput { get; }
```

- *Type:* string

---

##### `RecommendationImpactInput`<sup>Optional</sup> <a name="RecommendationImpactInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.recommendationImpactInput"></a>

```csharp
public string RecommendationImpactInput { get; }
```

- *Type:* string

---

##### `RecommendationTypeInput`<sup>Optional</sup> <a name="RecommendationTypeInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.recommendationTypeInput"></a>

```csharp
public string RecommendationTypeInput { get; }
```

- *Type:* string

---

##### `ResourceGroupInput`<sup>Optional</sup> <a name="ResourceGroupInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceGroupInput"></a>

```csharp
public string ResourceGroupInput { get; }
```

- *Type:* string

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `ResourceHealthInput`<sup>Optional</sup> <a name="ResourceHealthInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceHealthInput"></a>

```csharp
public MonitorActivityLogAlertCriteriaResourceHealth ResourceHealthInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth">MonitorActivityLogAlertCriteriaResourceHealth</a>

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `ResourceIdsInput`<sup>Optional</sup> <a name="ResourceIdsInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceIdsInput"></a>

```csharp
public string[] ResourceIdsInput { get; }
```

- *Type:* string[]

---

##### `ResourceProviderInput`<sup>Optional</sup> <a name="ResourceProviderInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceProviderInput"></a>

```csharp
public string ResourceProviderInput { get; }
```

- *Type:* string

---

##### `ResourceProvidersInput`<sup>Optional</sup> <a name="ResourceProvidersInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceProvidersInput"></a>

```csharp
public string[] ResourceProvidersInput { get; }
```

- *Type:* string[]

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceTypesInput"></a>

```csharp
public string[] ResourceTypesInput { get; }
```

- *Type:* string[]

---

##### `ServiceHealthInput`<sup>Optional</sup> <a name="ServiceHealthInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.serviceHealthInput"></a>

```csharp
public MonitorActivityLogAlertCriteriaServiceHealth ServiceHealthInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth">MonitorActivityLogAlertCriteriaServiceHealth</a>

---

##### `StatusesInput`<sup>Optional</sup> <a name="StatusesInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.statusesInput"></a>

```csharp
public string[] StatusesInput { get; }
```

- *Type:* string[]

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `SubStatusesInput`<sup>Optional</sup> <a name="SubStatusesInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.subStatusesInput"></a>

```csharp
public string[] SubStatusesInput { get; }
```

- *Type:* string[]

---

##### `SubStatusInput`<sup>Optional</sup> <a name="SubStatusInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.subStatusInput"></a>

```csharp
public string SubStatusInput { get; }
```

- *Type:* string

---

##### `Caller`<sup>Required</sup> <a name="Caller" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.caller"></a>

```csharp
public string Caller { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Levels`<sup>Required</sup> <a name="Levels" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.levels"></a>

```csharp
public string[] Levels { get; }
```

- *Type:* string[]

---

##### `OperationName`<sup>Required</sup> <a name="OperationName" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.operationName"></a>

```csharp
public string OperationName { get; }
```

- *Type:* string

---

##### `RecommendationCategory`<sup>Required</sup> <a name="RecommendationCategory" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.recommendationCategory"></a>

```csharp
public string RecommendationCategory { get; }
```

- *Type:* string

---

##### `RecommendationImpact`<sup>Required</sup> <a name="RecommendationImpact" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.recommendationImpact"></a>

```csharp
public string RecommendationImpact { get; }
```

- *Type:* string

---

##### `RecommendationType`<sup>Required</sup> <a name="RecommendationType" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.recommendationType"></a>

```csharp
public string RecommendationType { get; }
```

- *Type:* string

---

##### `ResourceGroup`<sup>Required</sup> <a name="ResourceGroup" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceGroup"></a>

```csharp
public string ResourceGroup { get; }
```

- *Type:* string

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceIds`<sup>Required</sup> <a name="ResourceIds" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceIds"></a>

```csharp
public string[] ResourceIds { get; }
```

- *Type:* string[]

---

##### `ResourceProvider`<sup>Required</sup> <a name="ResourceProvider" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceProvider"></a>

```csharp
public string ResourceProvider { get; }
```

- *Type:* string

---

##### `ResourceProviders`<sup>Required</sup> <a name="ResourceProviders" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceProviders"></a>

```csharp
public string[] ResourceProviders { get; }
```

- *Type:* string[]

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Statuses`<sup>Required</sup> <a name="Statuses" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.statuses"></a>

```csharp
public string[] Statuses { get; }
```

- *Type:* string[]

---

##### `SubStatus`<sup>Required</sup> <a name="SubStatus" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.subStatus"></a>

```csharp
public string SubStatus { get; }
```

- *Type:* string

---

##### `SubStatuses`<sup>Required</sup> <a name="SubStatuses" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.subStatuses"></a>

```csharp
public string[] SubStatuses { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.internalValue"></a>

```csharp
public MonitorActivityLogAlertCriteria InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria">MonitorActivityLogAlertCriteria</a>

---


### MonitorActivityLogAlertCriteriaResourceHealthOutputReference <a name="MonitorActivityLogAlertCriteriaResourceHealthOutputReference" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActivityLogAlertCriteriaResourceHealthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.resetCurrent">ResetCurrent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.resetPrevious">ResetPrevious</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.resetReason">ResetReason</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCurrent` <a name="ResetCurrent" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.resetCurrent"></a>

```csharp
private void ResetCurrent()
```

##### `ResetPrevious` <a name="ResetPrevious" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.resetPrevious"></a>

```csharp
private void ResetPrevious()
```

##### `ResetReason` <a name="ResetReason" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.resetReason"></a>

```csharp
private void ResetReason()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.currentInput">CurrentInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.previousInput">PreviousInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.reasonInput">ReasonInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.current">Current</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.previous">Previous</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.reason">Reason</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth">MonitorActivityLogAlertCriteriaResourceHealth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrentInput`<sup>Optional</sup> <a name="CurrentInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.currentInput"></a>

```csharp
public string[] CurrentInput { get; }
```

- *Type:* string[]

---

##### `PreviousInput`<sup>Optional</sup> <a name="PreviousInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.previousInput"></a>

```csharp
public string[] PreviousInput { get; }
```

- *Type:* string[]

---

##### `ReasonInput`<sup>Optional</sup> <a name="ReasonInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.reasonInput"></a>

```csharp
public string[] ReasonInput { get; }
```

- *Type:* string[]

---

##### `Current`<sup>Required</sup> <a name="Current" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.current"></a>

```csharp
public string[] Current { get; }
```

- *Type:* string[]

---

##### `Previous`<sup>Required</sup> <a name="Previous" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.previous"></a>

```csharp
public string[] Previous { get; }
```

- *Type:* string[]

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.reason"></a>

```csharp
public string[] Reason { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.internalValue"></a>

```csharp
public MonitorActivityLogAlertCriteriaResourceHealth InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth">MonitorActivityLogAlertCriteriaResourceHealth</a>

---


### MonitorActivityLogAlertCriteriaServiceHealthOutputReference <a name="MonitorActivityLogAlertCriteriaServiceHealthOutputReference" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActivityLogAlertCriteriaServiceHealthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.resetEvents">ResetEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.resetLocations">ResetLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.resetServices">ResetServices</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvents` <a name="ResetEvents" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.resetEvents"></a>

```csharp
private void ResetEvents()
```

##### `ResetLocations` <a name="ResetLocations" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.resetLocations"></a>

```csharp
private void ResetLocations()
```

##### `ResetServices` <a name="ResetServices" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.resetServices"></a>

```csharp
private void ResetServices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.eventsInput">EventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.locationsInput">LocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.servicesInput">ServicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.events">Events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.locations">Locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.services">Services</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth">MonitorActivityLogAlertCriteriaServiceHealth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventsInput`<sup>Optional</sup> <a name="EventsInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.eventsInput"></a>

```csharp
public string[] EventsInput { get; }
```

- *Type:* string[]

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.locationsInput"></a>

```csharp
public string[] LocationsInput { get; }
```

- *Type:* string[]

---

##### `ServicesInput`<sup>Optional</sup> <a name="ServicesInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.servicesInput"></a>

```csharp
public string[] ServicesInput { get; }
```

- *Type:* string[]

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.events"></a>

```csharp
public string[] Events { get; }
```

- *Type:* string[]

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.locations"></a>

```csharp
public string[] Locations { get; }
```

- *Type:* string[]

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.services"></a>

```csharp
public string[] Services { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.internalValue"></a>

```csharp
public MonitorActivityLogAlertCriteriaServiceHealth InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth">MonitorActivityLogAlertCriteriaServiceHealth</a>

---


### MonitorActivityLogAlertTimeoutsOutputReference <a name="MonitorActivityLogAlertTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorActivityLogAlertTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



