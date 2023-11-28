# `monitorAutoscaleSetting` Submodule <a name="`monitorAutoscaleSetting` Submodule" id="@cdktf/provider-azurerm.monitorAutoscaleSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorAutoscaleSetting <a name="MonitorAutoscaleSetting" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting azurerm_monitor_autoscale_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSetting(Construct Scope, string Id, MonitorAutoscaleSettingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig">MonitorAutoscaleSettingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig">MonitorAutoscaleSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putNotification">PutNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putPredictive">PutPredictive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putProfile">PutProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetNotification">ResetNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetPredictive">ResetPredictive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutNotification` <a name="PutNotification" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putNotification"></a>

```csharp
private void PutNotification(MonitorAutoscaleSettingNotification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putNotification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification">MonitorAutoscaleSettingNotification</a>

---

##### `PutPredictive` <a name="PutPredictive" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putPredictive"></a>

```csharp
private void PutPredictive(MonitorAutoscaleSettingPredictive Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putPredictive.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive">MonitorAutoscaleSettingPredictive</a>

---

##### `PutProfile` <a name="PutProfile" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putProfile"></a>

```csharp
private void PutProfile(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putProfile.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putTimeouts"></a>

```csharp
private void PutTimeouts(MonitorAutoscaleSettingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts">MonitorAutoscaleSettingTimeouts</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNotification` <a name="ResetNotification" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetNotification"></a>

```csharp
private void ResetNotification()
```

##### `ResetPredictive` <a name="ResetPredictive" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetPredictive"></a>

```csharp
private void ResetPredictive()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorAutoscaleSetting resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorAutoscaleSetting.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorAutoscaleSetting.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorAutoscaleSetting.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorAutoscaleSetting.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MonitorAutoscaleSetting resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitorAutoscaleSetting to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitorAutoscaleSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MonitorAutoscaleSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.notification">Notification</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference">MonitorAutoscaleSettingNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.predictive">Predictive</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference">MonitorAutoscaleSettingPredictiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.profile">Profile</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList">MonitorAutoscaleSettingProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference">MonitorAutoscaleSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.notificationInput">NotificationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification">MonitorAutoscaleSettingNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.predictiveInput">PredictiveInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive">MonitorAutoscaleSettingPredictive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.profileInput">ProfileInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.targetResourceIdInput">TargetResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.targetResourceId">TargetResourceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Notification`<sup>Required</sup> <a name="Notification" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.notification"></a>

```csharp
public MonitorAutoscaleSettingNotificationOutputReference Notification { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference">MonitorAutoscaleSettingNotificationOutputReference</a>

---

##### `Predictive`<sup>Required</sup> <a name="Predictive" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.predictive"></a>

```csharp
public MonitorAutoscaleSettingPredictiveOutputReference Predictive { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference">MonitorAutoscaleSettingPredictiveOutputReference</a>

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.profile"></a>

```csharp
public MonitorAutoscaleSettingProfileList Profile { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList">MonitorAutoscaleSettingProfileList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.timeouts"></a>

```csharp
public MonitorAutoscaleSettingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference">MonitorAutoscaleSettingTimeoutsOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotificationInput`<sup>Optional</sup> <a name="NotificationInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.notificationInput"></a>

```csharp
public MonitorAutoscaleSettingNotification NotificationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification">MonitorAutoscaleSettingNotification</a>

---

##### `PredictiveInput`<sup>Optional</sup> <a name="PredictiveInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.predictiveInput"></a>

```csharp
public MonitorAutoscaleSettingPredictive PredictiveInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive">MonitorAutoscaleSettingPredictive</a>

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.profileInput"></a>

```csharp
public object ProfileInput { get; }
```

- *Type:* object

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetResourceIdInput`<sup>Optional</sup> <a name="TargetResourceIdInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.targetResourceIdInput"></a>

```csharp
public string TargetResourceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.targetResourceId"></a>

```csharp
public string TargetResourceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSetting.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorAutoscaleSettingConfig <a name="MonitorAutoscaleSettingConfig" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    object Profile,
    string ResourceGroupName,
    string TargetResourceId,
    object Enabled = null,
    string Id = null,
    MonitorAutoscaleSettingNotification Notification = null,
    MonitorAutoscaleSettingPredictive Predictive = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    MonitorAutoscaleSettingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#location MonitorAutoscaleSetting#location}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#name MonitorAutoscaleSetting#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.profile">Profile</a></code> | <code>object</code> | profile block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#resource_group_name MonitorAutoscaleSetting#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.targetResourceId">TargetResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#target_resource_id MonitorAutoscaleSetting#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#enabled MonitorAutoscaleSetting#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#id MonitorAutoscaleSetting#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.notification">Notification</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification">MonitorAutoscaleSettingNotification</a></code> | notification block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.predictive">Predictive</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive">MonitorAutoscaleSettingPredictive</a></code> | predictive block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#tags MonitorAutoscaleSetting#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts">MonitorAutoscaleSettingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#location MonitorAutoscaleSetting#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#name MonitorAutoscaleSetting#name}.

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.profile"></a>

```csharp
public object Profile { get; set; }
```

- *Type:* object

profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#profile MonitorAutoscaleSetting#profile}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#resource_group_name MonitorAutoscaleSetting#resource_group_name}.

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.targetResourceId"></a>

```csharp
public string TargetResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#target_resource_id MonitorAutoscaleSetting#target_resource_id}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#enabled MonitorAutoscaleSetting#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#id MonitorAutoscaleSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Notification`<sup>Optional</sup> <a name="Notification" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.notification"></a>

```csharp
public MonitorAutoscaleSettingNotification Notification { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification">MonitorAutoscaleSettingNotification</a>

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#notification MonitorAutoscaleSetting#notification}

---

##### `Predictive`<sup>Optional</sup> <a name="Predictive" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.predictive"></a>

```csharp
public MonitorAutoscaleSettingPredictive Predictive { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive">MonitorAutoscaleSettingPredictive</a>

predictive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#predictive MonitorAutoscaleSetting#predictive}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#tags MonitorAutoscaleSetting#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingConfig.property.timeouts"></a>

```csharp
public MonitorAutoscaleSettingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts">MonitorAutoscaleSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#timeouts MonitorAutoscaleSetting#timeouts}

---

### MonitorAutoscaleSettingNotification <a name="MonitorAutoscaleSettingNotification" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingNotification {
    MonitorAutoscaleSettingNotificationEmail Email = null,
    object Webhook = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification.property.email">Email</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail">MonitorAutoscaleSettingNotificationEmail</a></code> | email block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification.property.webhook">Webhook</a></code> | <code>object</code> | webhook block. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification.property.email"></a>

```csharp
public MonitorAutoscaleSettingNotificationEmail Email { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail">MonitorAutoscaleSettingNotificationEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#email MonitorAutoscaleSetting#email}

---

##### `Webhook`<sup>Optional</sup> <a name="Webhook" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification.property.webhook"></a>

```csharp
public object Webhook { get; set; }
```

- *Type:* object

webhook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#webhook MonitorAutoscaleSetting#webhook}

---

### MonitorAutoscaleSettingNotificationEmail <a name="MonitorAutoscaleSettingNotificationEmail" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingNotificationEmail {
    string[] CustomEmails = null,
    object SendToSubscriptionAdministrator = null,
    object SendToSubscriptionCoAdministrator = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail.property.customEmails">CustomEmails</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#custom_emails MonitorAutoscaleSetting#custom_emails}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail.property.sendToSubscriptionAdministrator">SendToSubscriptionAdministrator</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#send_to_subscription_administrator MonitorAutoscaleSetting#send_to_subscription_administrator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail.property.sendToSubscriptionCoAdministrator">SendToSubscriptionCoAdministrator</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#send_to_subscription_co_administrator MonitorAutoscaleSetting#send_to_subscription_co_administrator}. |

---

##### `CustomEmails`<sup>Optional</sup> <a name="CustomEmails" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail.property.customEmails"></a>

```csharp
public string[] CustomEmails { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#custom_emails MonitorAutoscaleSetting#custom_emails}.

---

##### `SendToSubscriptionAdministrator`<sup>Optional</sup> <a name="SendToSubscriptionAdministrator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail.property.sendToSubscriptionAdministrator"></a>

```csharp
public object SendToSubscriptionAdministrator { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#send_to_subscription_administrator MonitorAutoscaleSetting#send_to_subscription_administrator}.

---

##### `SendToSubscriptionCoAdministrator`<sup>Optional</sup> <a name="SendToSubscriptionCoAdministrator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail.property.sendToSubscriptionCoAdministrator"></a>

```csharp
public object SendToSubscriptionCoAdministrator { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#send_to_subscription_co_administrator MonitorAutoscaleSetting#send_to_subscription_co_administrator}.

---

### MonitorAutoscaleSettingNotificationWebhook <a name="MonitorAutoscaleSettingNotificationWebhook" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingNotificationWebhook {
    string ServiceUri,
    System.Collections.Generic.IDictionary<string, string> Properties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook.property.serviceUri">ServiceUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#service_uri MonitorAutoscaleSetting#service_uri}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#properties MonitorAutoscaleSetting#properties}. |

---

##### `ServiceUri`<sup>Required</sup> <a name="ServiceUri" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook.property.serviceUri"></a>

```csharp
public string ServiceUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#service_uri MonitorAutoscaleSetting#service_uri}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhook.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#properties MonitorAutoscaleSetting#properties}.

---

### MonitorAutoscaleSettingPredictive <a name="MonitorAutoscaleSettingPredictive" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingPredictive {
    string ScaleMode,
    string LookAheadTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive.property.scaleMode">ScaleMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#scale_mode MonitorAutoscaleSetting#scale_mode}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive.property.lookAheadTime">LookAheadTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#look_ahead_time MonitorAutoscaleSetting#look_ahead_time}. |

---

##### `ScaleMode`<sup>Required</sup> <a name="ScaleMode" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive.property.scaleMode"></a>

```csharp
public string ScaleMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#scale_mode MonitorAutoscaleSetting#scale_mode}.

---

##### `LookAheadTime`<sup>Optional</sup> <a name="LookAheadTime" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive.property.lookAheadTime"></a>

```csharp
public string LookAheadTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#look_ahead_time MonitorAutoscaleSetting#look_ahead_time}.

---

### MonitorAutoscaleSettingProfile <a name="MonitorAutoscaleSettingProfile" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingProfile {
    MonitorAutoscaleSettingProfileCapacity Capacity,
    string Name,
    MonitorAutoscaleSettingProfileFixedDate FixedDate = null,
    MonitorAutoscaleSettingProfileRecurrence Recurrence = null,
    object Rule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.capacity">Capacity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity">MonitorAutoscaleSettingProfileCapacity</a></code> | capacity block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#name MonitorAutoscaleSetting#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.fixedDate">FixedDate</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate">MonitorAutoscaleSettingProfileFixedDate</a></code> | fixed_date block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.recurrence">Recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence">MonitorAutoscaleSettingProfileRecurrence</a></code> | recurrence block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.rule">Rule</a></code> | <code>object</code> | rule block. |

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.capacity"></a>

```csharp
public MonitorAutoscaleSettingProfileCapacity Capacity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity">MonitorAutoscaleSettingProfileCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#capacity MonitorAutoscaleSetting#capacity}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#name MonitorAutoscaleSetting#name}.

---

##### `FixedDate`<sup>Optional</sup> <a name="FixedDate" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.fixedDate"></a>

```csharp
public MonitorAutoscaleSettingProfileFixedDate FixedDate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate">MonitorAutoscaleSettingProfileFixedDate</a>

fixed_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#fixed_date MonitorAutoscaleSetting#fixed_date}

---

##### `Recurrence`<sup>Optional</sup> <a name="Recurrence" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.recurrence"></a>

```csharp
public MonitorAutoscaleSettingProfileRecurrence Recurrence { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence">MonitorAutoscaleSettingProfileRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#recurrence MonitorAutoscaleSetting#recurrence}

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfile.property.rule"></a>

```csharp
public object Rule { get; set; }
```

- *Type:* object

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#rule MonitorAutoscaleSetting#rule}

---

### MonitorAutoscaleSettingProfileCapacity <a name="MonitorAutoscaleSettingProfileCapacity" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingProfileCapacity {
    double Default,
    double Maximum,
    double Minimum
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity.property.default">Default</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#default MonitorAutoscaleSetting#default}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity.property.maximum">Maximum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#maximum MonitorAutoscaleSetting#maximum}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity.property.minimum">Minimum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#minimum MonitorAutoscaleSetting#minimum}. |

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity.property.default"></a>

```csharp
public double Default { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#default MonitorAutoscaleSetting#default}.

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity.property.maximum"></a>

```csharp
public double Maximum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#maximum MonitorAutoscaleSetting#maximum}.

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity.property.minimum"></a>

```csharp
public double Minimum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#minimum MonitorAutoscaleSetting#minimum}.

---

### MonitorAutoscaleSettingProfileFixedDate <a name="MonitorAutoscaleSettingProfileFixedDate" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingProfileFixedDate {
    string End,
    string Start,
    string Timezone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate.property.end">End</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#end MonitorAutoscaleSetting#end}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate.property.start">Start</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#start MonitorAutoscaleSetting#start}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate.property.timezone">Timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#timezone MonitorAutoscaleSetting#timezone}. |

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate.property.end"></a>

```csharp
public string End { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#end MonitorAutoscaleSetting#end}.

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate.property.start"></a>

```csharp
public string Start { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#start MonitorAutoscaleSetting#start}.

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#timezone MonitorAutoscaleSetting#timezone}.

---

### MonitorAutoscaleSettingProfileRecurrence <a name="MonitorAutoscaleSettingProfileRecurrence" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingProfileRecurrence {
    string[] Days,
    double[] Hours,
    double[] Minutes,
    string Timezone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence.property.days">Days</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#days MonitorAutoscaleSetting#days}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence.property.hours">Hours</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#hours MonitorAutoscaleSetting#hours}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence.property.minutes">Minutes</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#minutes MonitorAutoscaleSetting#minutes}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence.property.timezone">Timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#timezone MonitorAutoscaleSetting#timezone}. |

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence.property.days"></a>

```csharp
public string[] Days { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#days MonitorAutoscaleSetting#days}.

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence.property.hours"></a>

```csharp
public double[] Hours { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#hours MonitorAutoscaleSetting#hours}.

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence.property.minutes"></a>

```csharp
public double[] Minutes { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#minutes MonitorAutoscaleSetting#minutes}.

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#timezone MonitorAutoscaleSetting#timezone}.

---

### MonitorAutoscaleSettingProfileRule <a name="MonitorAutoscaleSettingProfileRule" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingProfileRule {
    MonitorAutoscaleSettingProfileRuleMetricTrigger MetricTrigger,
    MonitorAutoscaleSettingProfileRuleScaleAction ScaleAction
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule.property.metricTrigger">MetricTrigger</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger">MonitorAutoscaleSettingProfileRuleMetricTrigger</a></code> | metric_trigger block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule.property.scaleAction">ScaleAction</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction">MonitorAutoscaleSettingProfileRuleScaleAction</a></code> | scale_action block. |

---

##### `MetricTrigger`<sup>Required</sup> <a name="MetricTrigger" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule.property.metricTrigger"></a>

```csharp
public MonitorAutoscaleSettingProfileRuleMetricTrigger MetricTrigger { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger">MonitorAutoscaleSettingProfileRuleMetricTrigger</a>

metric_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#metric_trigger MonitorAutoscaleSetting#metric_trigger}

---

##### `ScaleAction`<sup>Required</sup> <a name="ScaleAction" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRule.property.scaleAction"></a>

```csharp
public MonitorAutoscaleSettingProfileRuleScaleAction ScaleAction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction">MonitorAutoscaleSettingProfileRuleScaleAction</a>

scale_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#scale_action MonitorAutoscaleSetting#scale_action}

---

### MonitorAutoscaleSettingProfileRuleMetricTrigger <a name="MonitorAutoscaleSettingProfileRuleMetricTrigger" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingProfileRuleMetricTrigger {
    string MetricName,
    string MetricResourceId,
    string Operator,
    string Statistic,
    double Threshold,
    string TimeAggregation,
    string TimeGrain,
    string TimeWindow,
    object Dimensions = null,
    object DivideByInstanceCount = null,
    string MetricNamespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.metricName">MetricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#metric_name MonitorAutoscaleSetting#metric_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.metricResourceId">MetricResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#metric_resource_id MonitorAutoscaleSetting#metric_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#operator MonitorAutoscaleSetting#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.statistic">Statistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#statistic MonitorAutoscaleSetting#statistic}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.threshold">Threshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#threshold MonitorAutoscaleSetting#threshold}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.timeAggregation">TimeAggregation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#time_aggregation MonitorAutoscaleSetting#time_aggregation}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.timeGrain">TimeGrain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#time_grain MonitorAutoscaleSetting#time_grain}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.timeWindow">TimeWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#time_window MonitorAutoscaleSetting#time_window}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.dimensions">Dimensions</a></code> | <code>object</code> | dimensions block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.divideByInstanceCount">DivideByInstanceCount</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#divide_by_instance_count MonitorAutoscaleSetting#divide_by_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.metricNamespace">MetricNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#metric_namespace MonitorAutoscaleSetting#metric_namespace}. |

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.metricName"></a>

```csharp
public string MetricName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#metric_name MonitorAutoscaleSetting#metric_name}.

---

##### `MetricResourceId`<sup>Required</sup> <a name="MetricResourceId" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.metricResourceId"></a>

```csharp
public string MetricResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#metric_resource_id MonitorAutoscaleSetting#metric_resource_id}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#operator MonitorAutoscaleSetting#operator}.

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.statistic"></a>

```csharp
public string Statistic { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#statistic MonitorAutoscaleSetting#statistic}.

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#threshold MonitorAutoscaleSetting#threshold}.

---

##### `TimeAggregation`<sup>Required</sup> <a name="TimeAggregation" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.timeAggregation"></a>

```csharp
public string TimeAggregation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#time_aggregation MonitorAutoscaleSetting#time_aggregation}.

---

##### `TimeGrain`<sup>Required</sup> <a name="TimeGrain" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.timeGrain"></a>

```csharp
public string TimeGrain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#time_grain MonitorAutoscaleSetting#time_grain}.

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.timeWindow"></a>

```csharp
public string TimeWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#time_window MonitorAutoscaleSetting#time_window}.

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.dimensions"></a>

```csharp
public object Dimensions { get; set; }
```

- *Type:* object

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#dimensions MonitorAutoscaleSetting#dimensions}

---

##### `DivideByInstanceCount`<sup>Optional</sup> <a name="DivideByInstanceCount" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.divideByInstanceCount"></a>

```csharp
public object DivideByInstanceCount { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#divide_by_instance_count MonitorAutoscaleSetting#divide_by_instance_count}.

---

##### `MetricNamespace`<sup>Optional</sup> <a name="MetricNamespace" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger.property.metricNamespace"></a>

```csharp
public string MetricNamespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#metric_namespace MonitorAutoscaleSetting#metric_namespace}.

---

### MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions <a name="MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions {
    string Name,
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#name MonitorAutoscaleSetting#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#operator MonitorAutoscaleSetting#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#values MonitorAutoscaleSetting#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#name MonitorAutoscaleSetting#name}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#operator MonitorAutoscaleSetting#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#values MonitorAutoscaleSetting#values}.

---

### MonitorAutoscaleSettingProfileRuleScaleAction <a name="MonitorAutoscaleSettingProfileRuleScaleAction" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingProfileRuleScaleAction {
    string Cooldown,
    string Direction,
    string Type,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction.property.cooldown">Cooldown</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#cooldown MonitorAutoscaleSetting#cooldown}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction.property.direction">Direction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#direction MonitorAutoscaleSetting#direction}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#type MonitorAutoscaleSetting#type}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#value MonitorAutoscaleSetting#value}. |

---

##### `Cooldown`<sup>Required</sup> <a name="Cooldown" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction.property.cooldown"></a>

```csharp
public string Cooldown { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#cooldown MonitorAutoscaleSetting#cooldown}.

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#direction MonitorAutoscaleSetting#direction}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#type MonitorAutoscaleSetting#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#value MonitorAutoscaleSetting#value}.

---

### MonitorAutoscaleSettingTimeouts <a name="MonitorAutoscaleSettingTimeouts" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#create MonitorAutoscaleSetting#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#delete MonitorAutoscaleSetting#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#read MonitorAutoscaleSetting#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#update MonitorAutoscaleSetting#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#create MonitorAutoscaleSetting#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#delete MonitorAutoscaleSetting#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#read MonitorAutoscaleSetting#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_autoscale_setting#update MonitorAutoscaleSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorAutoscaleSettingNotificationEmailOutputReference <a name="MonitorAutoscaleSettingNotificationEmailOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingNotificationEmailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.resetCustomEmails">ResetCustomEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.resetSendToSubscriptionAdministrator">ResetSendToSubscriptionAdministrator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.resetSendToSubscriptionCoAdministrator">ResetSendToSubscriptionCoAdministrator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomEmails` <a name="ResetCustomEmails" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.resetCustomEmails"></a>

```csharp
private void ResetCustomEmails()
```

##### `ResetSendToSubscriptionAdministrator` <a name="ResetSendToSubscriptionAdministrator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.resetSendToSubscriptionAdministrator"></a>

```csharp
private void ResetSendToSubscriptionAdministrator()
```

##### `ResetSendToSubscriptionCoAdministrator` <a name="ResetSendToSubscriptionCoAdministrator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.resetSendToSubscriptionCoAdministrator"></a>

```csharp
private void ResetSendToSubscriptionCoAdministrator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.customEmailsInput">CustomEmailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.sendToSubscriptionAdministratorInput">SendToSubscriptionAdministratorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.sendToSubscriptionCoAdministratorInput">SendToSubscriptionCoAdministratorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.customEmails">CustomEmails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.sendToSubscriptionAdministrator">SendToSubscriptionAdministrator</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.sendToSubscriptionCoAdministrator">SendToSubscriptionCoAdministrator</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail">MonitorAutoscaleSettingNotificationEmail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomEmailsInput`<sup>Optional</sup> <a name="CustomEmailsInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.customEmailsInput"></a>

```csharp
public string[] CustomEmailsInput { get; }
```

- *Type:* string[]

---

##### `SendToSubscriptionAdministratorInput`<sup>Optional</sup> <a name="SendToSubscriptionAdministratorInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.sendToSubscriptionAdministratorInput"></a>

```csharp
public object SendToSubscriptionAdministratorInput { get; }
```

- *Type:* object

---

##### `SendToSubscriptionCoAdministratorInput`<sup>Optional</sup> <a name="SendToSubscriptionCoAdministratorInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.sendToSubscriptionCoAdministratorInput"></a>

```csharp
public object SendToSubscriptionCoAdministratorInput { get; }
```

- *Type:* object

---

##### `CustomEmails`<sup>Required</sup> <a name="CustomEmails" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.customEmails"></a>

```csharp
public string[] CustomEmails { get; }
```

- *Type:* string[]

---

##### `SendToSubscriptionAdministrator`<sup>Required</sup> <a name="SendToSubscriptionAdministrator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.sendToSubscriptionAdministrator"></a>

```csharp
public object SendToSubscriptionAdministrator { get; }
```

- *Type:* object

---

##### `SendToSubscriptionCoAdministrator`<sup>Required</sup> <a name="SendToSubscriptionCoAdministrator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.sendToSubscriptionCoAdministrator"></a>

```csharp
public object SendToSubscriptionCoAdministrator { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference.property.internalValue"></a>

```csharp
public MonitorAutoscaleSettingNotificationEmail InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail">MonitorAutoscaleSettingNotificationEmail</a>

---


### MonitorAutoscaleSettingNotificationOutputReference <a name="MonitorAutoscaleSettingNotificationOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingNotificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.putEmail">PutEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.putWebhook">PutWebhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.resetWebhook">ResetWebhook</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEmail` <a name="PutEmail" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.putEmail"></a>

```csharp
private void PutEmail(MonitorAutoscaleSettingNotificationEmail Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.putEmail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail">MonitorAutoscaleSettingNotificationEmail</a>

---

##### `PutWebhook` <a name="PutWebhook" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.putWebhook"></a>

```csharp
private void PutWebhook(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.putWebhook.parameter.value"></a>

- *Type:* object

---

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetWebhook` <a name="ResetWebhook" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.resetWebhook"></a>

```csharp
private void ResetWebhook()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.email">Email</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference">MonitorAutoscaleSettingNotificationEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.webhook">Webhook</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList">MonitorAutoscaleSettingNotificationWebhookList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.emailInput">EmailInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail">MonitorAutoscaleSettingNotificationEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.webhookInput">WebhookInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification">MonitorAutoscaleSettingNotification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.email"></a>

```csharp
public MonitorAutoscaleSettingNotificationEmailOutputReference Email { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmailOutputReference">MonitorAutoscaleSettingNotificationEmailOutputReference</a>

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.webhook"></a>

```csharp
public MonitorAutoscaleSettingNotificationWebhookList Webhook { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList">MonitorAutoscaleSettingNotificationWebhookList</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.emailInput"></a>

```csharp
public MonitorAutoscaleSettingNotificationEmail EmailInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationEmail">MonitorAutoscaleSettingNotificationEmail</a>

---

##### `WebhookInput`<sup>Optional</sup> <a name="WebhookInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.webhookInput"></a>

```csharp
public object WebhookInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationOutputReference.property.internalValue"></a>

```csharp
public MonitorAutoscaleSettingNotification InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotification">MonitorAutoscaleSettingNotification</a>

---


### MonitorAutoscaleSettingNotificationWebhookList <a name="MonitorAutoscaleSettingNotificationWebhookList" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingNotificationWebhookList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.get"></a>

```csharp
private MonitorAutoscaleSettingNotificationWebhookOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorAutoscaleSettingNotificationWebhookOutputReference <a name="MonitorAutoscaleSettingNotificationWebhookOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingNotificationWebhookOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.serviceUriInput">ServiceUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.serviceUri">ServiceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.propertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ServiceUriInput`<sup>Optional</sup> <a name="ServiceUriInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.serviceUriInput"></a>

```csharp
public string ServiceUriInput { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ServiceUri`<sup>Required</sup> <a name="ServiceUri" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.serviceUri"></a>

```csharp
public string ServiceUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingNotificationWebhookOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorAutoscaleSettingPredictiveOutputReference <a name="MonitorAutoscaleSettingPredictiveOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingPredictiveOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.resetLookAheadTime">ResetLookAheadTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLookAheadTime` <a name="ResetLookAheadTime" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.resetLookAheadTime"></a>

```csharp
private void ResetLookAheadTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.lookAheadTimeInput">LookAheadTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.scaleModeInput">ScaleModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.lookAheadTime">LookAheadTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.scaleMode">ScaleMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive">MonitorAutoscaleSettingPredictive</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LookAheadTimeInput`<sup>Optional</sup> <a name="LookAheadTimeInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.lookAheadTimeInput"></a>

```csharp
public string LookAheadTimeInput { get; }
```

- *Type:* string

---

##### `ScaleModeInput`<sup>Optional</sup> <a name="ScaleModeInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.scaleModeInput"></a>

```csharp
public string ScaleModeInput { get; }
```

- *Type:* string

---

##### `LookAheadTime`<sup>Required</sup> <a name="LookAheadTime" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.lookAheadTime"></a>

```csharp
public string LookAheadTime { get; }
```

- *Type:* string

---

##### `ScaleMode`<sup>Required</sup> <a name="ScaleMode" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.scaleMode"></a>

```csharp
public string ScaleMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictiveOutputReference.property.internalValue"></a>

```csharp
public MonitorAutoscaleSettingPredictive InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingPredictive">MonitorAutoscaleSettingPredictive</a>

---


### MonitorAutoscaleSettingProfileCapacityOutputReference <a name="MonitorAutoscaleSettingProfileCapacityOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingProfileCapacityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.defaultInput">DefaultInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.maximumInput">MaximumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.minimumInput">MinimumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.default">Default</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.maximum">Maximum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.minimum">Minimum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity">MonitorAutoscaleSettingProfileCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.defaultInput"></a>

```csharp
public double DefaultInput { get; }
```

- *Type:* double

---

##### `MaximumInput`<sup>Optional</sup> <a name="MaximumInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.maximumInput"></a>

```csharp
public double MaximumInput { get; }
```

- *Type:* double

---

##### `MinimumInput`<sup>Optional</sup> <a name="MinimumInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.minimumInput"></a>

```csharp
public double MinimumInput { get; }
```

- *Type:* double

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.default"></a>

```csharp
public double Default { get; }
```

- *Type:* double

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.maximum"></a>

```csharp
public double Maximum { get; }
```

- *Type:* double

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.minimum"></a>

```csharp
public double Minimum { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference.property.internalValue"></a>

```csharp
public MonitorAutoscaleSettingProfileCapacity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity">MonitorAutoscaleSettingProfileCapacity</a>

---


### MonitorAutoscaleSettingProfileFixedDateOutputReference <a name="MonitorAutoscaleSettingProfileFixedDateOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingProfileFixedDateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.resetTimezone"></a>

```csharp
private void ResetTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.endInput">EndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.startInput">StartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.end">End</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.start">Start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate">MonitorAutoscaleSettingProfileFixedDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.endInput"></a>

```csharp
public string EndInput { get; }
```

- *Type:* string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.startInput"></a>

```csharp
public string StartInput { get; }
```

- *Type:* string

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.end"></a>

```csharp
public string End { get; }
```

- *Type:* string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.start"></a>

```csharp
public string Start { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference.property.internalValue"></a>

```csharp
public MonitorAutoscaleSettingProfileFixedDate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate">MonitorAutoscaleSettingProfileFixedDate</a>

---


### MonitorAutoscaleSettingProfileList <a name="MonitorAutoscaleSettingProfileList" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingProfileList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.get"></a>

```csharp
private MonitorAutoscaleSettingProfileOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorAutoscaleSettingProfileOutputReference <a name="MonitorAutoscaleSettingProfileOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putCapacity">PutCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putFixedDate">PutFixedDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putRecurrence">PutRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.resetFixedDate">ResetFixedDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.resetRecurrence">ResetRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.resetRule">ResetRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCapacity` <a name="PutCapacity" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putCapacity"></a>

```csharp
private void PutCapacity(MonitorAutoscaleSettingProfileCapacity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity">MonitorAutoscaleSettingProfileCapacity</a>

---

##### `PutFixedDate` <a name="PutFixedDate" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putFixedDate"></a>

```csharp
private void PutFixedDate(MonitorAutoscaleSettingProfileFixedDate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putFixedDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate">MonitorAutoscaleSettingProfileFixedDate</a>

---

##### `PutRecurrence` <a name="PutRecurrence" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putRecurrence"></a>

```csharp
private void PutRecurrence(MonitorAutoscaleSettingProfileRecurrence Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence">MonitorAutoscaleSettingProfileRecurrence</a>

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putRule"></a>

```csharp
private void PutRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.putRule.parameter.value"></a>

- *Type:* object

---

##### `ResetFixedDate` <a name="ResetFixedDate" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.resetFixedDate"></a>

```csharp
private void ResetFixedDate()
```

##### `ResetRecurrence` <a name="ResetRecurrence" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.resetRecurrence"></a>

```csharp
private void ResetRecurrence()
```

##### `ResetRule` <a name="ResetRule" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.resetRule"></a>

```csharp
private void ResetRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.capacity">Capacity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference">MonitorAutoscaleSettingProfileCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.fixedDate">FixedDate</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference">MonitorAutoscaleSettingProfileFixedDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.recurrence">Recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference">MonitorAutoscaleSettingProfileRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList">MonitorAutoscaleSettingProfileRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.capacityInput">CapacityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity">MonitorAutoscaleSettingProfileCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.fixedDateInput">FixedDateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate">MonitorAutoscaleSettingProfileFixedDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.recurrenceInput">RecurrenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence">MonitorAutoscaleSettingProfileRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.ruleInput">RuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.capacity"></a>

```csharp
public MonitorAutoscaleSettingProfileCapacityOutputReference Capacity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacityOutputReference">MonitorAutoscaleSettingProfileCapacityOutputReference</a>

---

##### `FixedDate`<sup>Required</sup> <a name="FixedDate" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.fixedDate"></a>

```csharp
public MonitorAutoscaleSettingProfileFixedDateOutputReference FixedDate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDateOutputReference">MonitorAutoscaleSettingProfileFixedDateOutputReference</a>

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.recurrence"></a>

```csharp
public MonitorAutoscaleSettingProfileRecurrenceOutputReference Recurrence { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference">MonitorAutoscaleSettingProfileRecurrenceOutputReference</a>

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.rule"></a>

```csharp
public MonitorAutoscaleSettingProfileRuleList Rule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList">MonitorAutoscaleSettingProfileRuleList</a>

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.capacityInput"></a>

```csharp
public MonitorAutoscaleSettingProfileCapacity CapacityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileCapacity">MonitorAutoscaleSettingProfileCapacity</a>

---

##### `FixedDateInput`<sup>Optional</sup> <a name="FixedDateInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.fixedDateInput"></a>

```csharp
public MonitorAutoscaleSettingProfileFixedDate FixedDateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileFixedDate">MonitorAutoscaleSettingProfileFixedDate</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RecurrenceInput`<sup>Optional</sup> <a name="RecurrenceInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.recurrenceInput"></a>

```csharp
public MonitorAutoscaleSettingProfileRecurrence RecurrenceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence">MonitorAutoscaleSettingProfileRecurrence</a>

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.ruleInput"></a>

```csharp
public object RuleInput { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorAutoscaleSettingProfileRecurrenceOutputReference <a name="MonitorAutoscaleSettingProfileRecurrenceOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingProfileRecurrenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.resetTimezone"></a>

```csharp
private void ResetTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.daysInput">DaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.hoursInput">HoursInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.minutesInput">MinutesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.days">Days</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.hours">Hours</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.minutes">Minutes</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence">MonitorAutoscaleSettingProfileRecurrence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.daysInput"></a>

```csharp
public string[] DaysInput { get; }
```

- *Type:* string[]

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.hoursInput"></a>

```csharp
public double[] HoursInput { get; }
```

- *Type:* double[]

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.minutesInput"></a>

```csharp
public double[] MinutesInput { get; }
```

- *Type:* double[]

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.days"></a>

```csharp
public string[] Days { get; }
```

- *Type:* string[]

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.hours"></a>

```csharp
public double[] Hours { get; }
```

- *Type:* double[]

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.minutes"></a>

```csharp
public double[] Minutes { get; }
```

- *Type:* double[]

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrenceOutputReference.property.internalValue"></a>

```csharp
public MonitorAutoscaleSettingProfileRecurrence InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRecurrence">MonitorAutoscaleSettingProfileRecurrence</a>

---


### MonitorAutoscaleSettingProfileRuleList <a name="MonitorAutoscaleSettingProfileRuleList" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingProfileRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.get"></a>

```csharp
private MonitorAutoscaleSettingProfileRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList <a name="MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.get"></a>

```csharp
private MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference <a name="MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference <a name="MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.putDimensions">PutDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.resetDivideByInstanceCount">ResetDivideByInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.resetMetricNamespace">ResetMetricNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDimensions` <a name="PutDimensions" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.putDimensions"></a>

```csharp
private void PutDimensions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.putDimensions.parameter.value"></a>

- *Type:* object

---

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.resetDimensions"></a>

```csharp
private void ResetDimensions()
```

##### `ResetDivideByInstanceCount` <a name="ResetDivideByInstanceCount" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.resetDivideByInstanceCount"></a>

```csharp
private void ResetDivideByInstanceCount()
```

##### `ResetMetricNamespace` <a name="ResetMetricNamespace" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.resetMetricNamespace"></a>

```csharp
private void ResetMetricNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList">MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.divideByInstanceCountInput">DivideByInstanceCountInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricNamespaceInput">MetricNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricResourceIdInput">MetricResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.statisticInput">StatisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeAggregationInput">TimeAggregationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeGrainInput">TimeGrainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeWindowInput">TimeWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.divideByInstanceCount">DivideByInstanceCount</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricNamespace">MetricNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricResourceId">MetricResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.statistic">Statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeAggregation">TimeAggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeGrain">TimeGrain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeWindow">TimeWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger">MonitorAutoscaleSettingProfileRuleMetricTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.dimensions"></a>

```csharp
public MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList Dimensions { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList">MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList</a>

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.dimensionsInput"></a>

```csharp
public object DimensionsInput { get; }
```

- *Type:* object

---

##### `DivideByInstanceCountInput`<sup>Optional</sup> <a name="DivideByInstanceCountInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.divideByInstanceCountInput"></a>

```csharp
public object DivideByInstanceCountInput { get; }
```

- *Type:* object

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricNameInput"></a>

```csharp
public string MetricNameInput { get; }
```

- *Type:* string

---

##### `MetricNamespaceInput`<sup>Optional</sup> <a name="MetricNamespaceInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricNamespaceInput"></a>

```csharp
public string MetricNamespaceInput { get; }
```

- *Type:* string

---

##### `MetricResourceIdInput`<sup>Optional</sup> <a name="MetricResourceIdInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricResourceIdInput"></a>

```csharp
public string MetricResourceIdInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `StatisticInput`<sup>Optional</sup> <a name="StatisticInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.statisticInput"></a>

```csharp
public string StatisticInput { get; }
```

- *Type:* string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `TimeAggregationInput`<sup>Optional</sup> <a name="TimeAggregationInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeAggregationInput"></a>

```csharp
public string TimeAggregationInput { get; }
```

- *Type:* string

---

##### `TimeGrainInput`<sup>Optional</sup> <a name="TimeGrainInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeGrainInput"></a>

```csharp
public string TimeGrainInput { get; }
```

- *Type:* string

---

##### `TimeWindowInput`<sup>Optional</sup> <a name="TimeWindowInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeWindowInput"></a>

```csharp
public string TimeWindowInput { get; }
```

- *Type:* string

---

##### `DivideByInstanceCount`<sup>Required</sup> <a name="DivideByInstanceCount" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.divideByInstanceCount"></a>

```csharp
public object DivideByInstanceCount { get; }
```

- *Type:* object

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `MetricNamespace`<sup>Required</sup> <a name="MetricNamespace" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricNamespace"></a>

```csharp
public string MetricNamespace { get; }
```

- *Type:* string

---

##### `MetricResourceId`<sup>Required</sup> <a name="MetricResourceId" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.metricResourceId"></a>

```csharp
public string MetricResourceId { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.statistic"></a>

```csharp
public string Statistic { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `TimeAggregation`<sup>Required</sup> <a name="TimeAggregation" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeAggregation"></a>

```csharp
public string TimeAggregation { get; }
```

- *Type:* string

---

##### `TimeGrain`<sup>Required</sup> <a name="TimeGrain" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeGrain"></a>

```csharp
public string TimeGrain { get; }
```

- *Type:* string

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.timeWindow"></a>

```csharp
public string TimeWindow { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference.property.internalValue"></a>

```csharp
public MonitorAutoscaleSettingProfileRuleMetricTrigger InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger">MonitorAutoscaleSettingProfileRuleMetricTrigger</a>

---


### MonitorAutoscaleSettingProfileRuleOutputReference <a name="MonitorAutoscaleSettingProfileRuleOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingProfileRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putMetricTrigger">PutMetricTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putScaleAction">PutScaleAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetricTrigger` <a name="PutMetricTrigger" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putMetricTrigger"></a>

```csharp
private void PutMetricTrigger(MonitorAutoscaleSettingProfileRuleMetricTrigger Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putMetricTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger">MonitorAutoscaleSettingProfileRuleMetricTrigger</a>

---

##### `PutScaleAction` <a name="PutScaleAction" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putScaleAction"></a>

```csharp
private void PutScaleAction(MonitorAutoscaleSettingProfileRuleScaleAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.putScaleAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction">MonitorAutoscaleSettingProfileRuleScaleAction</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.metricTrigger">MetricTrigger</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference">MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.scaleAction">ScaleAction</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference">MonitorAutoscaleSettingProfileRuleScaleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.metricTriggerInput">MetricTriggerInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger">MonitorAutoscaleSettingProfileRuleMetricTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.scaleActionInput">ScaleActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction">MonitorAutoscaleSettingProfileRuleScaleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricTrigger`<sup>Required</sup> <a name="MetricTrigger" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.metricTrigger"></a>

```csharp
public MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference MetricTrigger { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference">MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference</a>

---

##### `ScaleAction`<sup>Required</sup> <a name="ScaleAction" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.scaleAction"></a>

```csharp
public MonitorAutoscaleSettingProfileRuleScaleActionOutputReference ScaleAction { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference">MonitorAutoscaleSettingProfileRuleScaleActionOutputReference</a>

---

##### `MetricTriggerInput`<sup>Optional</sup> <a name="MetricTriggerInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.metricTriggerInput"></a>

```csharp
public MonitorAutoscaleSettingProfileRuleMetricTrigger MetricTriggerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleMetricTrigger">MonitorAutoscaleSettingProfileRuleMetricTrigger</a>

---

##### `ScaleActionInput`<sup>Optional</sup> <a name="ScaleActionInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.scaleActionInput"></a>

```csharp
public MonitorAutoscaleSettingProfileRuleScaleAction ScaleActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction">MonitorAutoscaleSettingProfileRuleScaleAction</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorAutoscaleSettingProfileRuleScaleActionOutputReference <a name="MonitorAutoscaleSettingProfileRuleScaleActionOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingProfileRuleScaleActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.cooldownInput">CooldownInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.cooldown">Cooldown</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction">MonitorAutoscaleSettingProfileRuleScaleAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CooldownInput`<sup>Optional</sup> <a name="CooldownInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.cooldownInput"></a>

```csharp
public string CooldownInput { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Cooldown`<sup>Required</sup> <a name="Cooldown" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.cooldown"></a>

```csharp
public string Cooldown { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleActionOutputReference.property.internalValue"></a>

```csharp
public MonitorAutoscaleSettingProfileRuleScaleAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingProfileRuleScaleAction">MonitorAutoscaleSettingProfileRuleScaleAction</a>

---


### MonitorAutoscaleSettingTimeoutsOutputReference <a name="MonitorAutoscaleSettingTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAutoscaleSettingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAutoscaleSetting.MonitorAutoscaleSettingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



