# `azurerm_logic_app_trigger_recurrence`

Refer to the Terraform Registory for docs: [`azurerm_logic_app_trigger_recurrence`](https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence).

# `logicAppTriggerRecurrence` Submodule <a name="`logicAppTriggerRecurrence` Submodule" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogicAppTriggerRecurrence <a name="LogicAppTriggerRecurrence" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence azurerm_logic_app_trigger_recurrence}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppTriggerRecurrence(Construct Scope, string Id, LogicAppTriggerRecurrenceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig">LogicAppTriggerRecurrenceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig">LogicAppTriggerRecurrenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.putSchedule"></a>

```csharp
private void PutSchedule(LogicAppTriggerRecurrenceSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule">LogicAppTriggerRecurrenceSchedule</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.putTimeouts"></a>

```csharp
private void PutTimeouts(LogicAppTriggerRecurrenceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts">LogicAppTriggerRecurrenceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.resetStartTime"></a>

```csharp
private void ResetStartTime()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LogicAppTriggerRecurrence resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogicAppTriggerRecurrence.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogicAppTriggerRecurrence.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogicAppTriggerRecurrence.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogicAppTriggerRecurrence.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LogicAppTriggerRecurrence resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogicAppTriggerRecurrence to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogicAppTriggerRecurrence that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LogicAppTriggerRecurrence to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference">LogicAppTriggerRecurrenceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference">LogicAppTriggerRecurrenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.logicAppIdInput">LogicAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule">LogicAppTriggerRecurrenceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.logicAppId">LogicAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.schedule"></a>

```csharp
public LogicAppTriggerRecurrenceScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference">LogicAppTriggerRecurrenceScheduleOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.timeouts"></a>

```csharp
public LogicAppTriggerRecurrenceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference">LogicAppTriggerRecurrenceTimeoutsOutputReference</a>

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.frequencyInput"></a>

```csharp
public string FrequencyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `LogicAppIdInput`<sup>Optional</sup> <a name="LogicAppIdInput" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.logicAppIdInput"></a>

```csharp
public string LogicAppIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.scheduleInput"></a>

```csharp
public LogicAppTriggerRecurrenceSchedule ScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule">LogicAppTriggerRecurrenceSchedule</a>

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `LogicAppId`<sup>Required</sup> <a name="LogicAppId" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.logicAppId"></a>

```csharp
public string LogicAppId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogicAppTriggerRecurrenceConfig <a name="LogicAppTriggerRecurrenceConfig" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppTriggerRecurrenceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Frequency,
    double Interval,
    string LogicAppId,
    string Name,
    string Id = null,
    LogicAppTriggerRecurrenceSchedule Schedule = null,
    string StartTime = null,
    LogicAppTriggerRecurrenceTimeouts Timeouts = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.frequency">Frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#frequency LogicAppTriggerRecurrence#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.interval">Interval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#interval LogicAppTriggerRecurrence#interval}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.logicAppId">LogicAppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#logic_app_id LogicAppTriggerRecurrence#logic_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#name LogicAppTriggerRecurrence#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#id LogicAppTriggerRecurrence#id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule">LogicAppTriggerRecurrenceSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#start_time LogicAppTriggerRecurrence#start_time}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts">LogicAppTriggerRecurrenceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#time_zone LogicAppTriggerRecurrence#time_zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#frequency LogicAppTriggerRecurrence#frequency}.

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#interval LogicAppTriggerRecurrence#interval}.

---

##### `LogicAppId`<sup>Required</sup> <a name="LogicAppId" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.logicAppId"></a>

```csharp
public string LogicAppId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#logic_app_id LogicAppTriggerRecurrence#logic_app_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#name LogicAppTriggerRecurrence#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#id LogicAppTriggerRecurrence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.schedule"></a>

```csharp
public LogicAppTriggerRecurrenceSchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule">LogicAppTriggerRecurrenceSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#schedule LogicAppTriggerRecurrence#schedule}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#start_time LogicAppTriggerRecurrence#start_time}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.timeouts"></a>

```csharp
public LogicAppTriggerRecurrenceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts">LogicAppTriggerRecurrenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#timeouts LogicAppTriggerRecurrence#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#time_zone LogicAppTriggerRecurrence#time_zone}.

---

### LogicAppTriggerRecurrenceSchedule <a name="LogicAppTriggerRecurrenceSchedule" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppTriggerRecurrenceSchedule {
    double[] AtTheseHours = null,
    double[] AtTheseMinutes = null,
    string[] OnTheseDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule.property.atTheseHours">AtTheseHours</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#at_these_hours LogicAppTriggerRecurrence#at_these_hours}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule.property.atTheseMinutes">AtTheseMinutes</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#at_these_minutes LogicAppTriggerRecurrence#at_these_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule.property.onTheseDays">OnTheseDays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#on_these_days LogicAppTriggerRecurrence#on_these_days}. |

---

##### `AtTheseHours`<sup>Optional</sup> <a name="AtTheseHours" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule.property.atTheseHours"></a>

```csharp
public double[] AtTheseHours { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#at_these_hours LogicAppTriggerRecurrence#at_these_hours}.

---

##### `AtTheseMinutes`<sup>Optional</sup> <a name="AtTheseMinutes" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule.property.atTheseMinutes"></a>

```csharp
public double[] AtTheseMinutes { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#at_these_minutes LogicAppTriggerRecurrence#at_these_minutes}.

---

##### `OnTheseDays`<sup>Optional</sup> <a name="OnTheseDays" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule.property.onTheseDays"></a>

```csharp
public string[] OnTheseDays { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#on_these_days LogicAppTriggerRecurrence#on_these_days}.

---

### LogicAppTriggerRecurrenceTimeouts <a name="LogicAppTriggerRecurrenceTimeouts" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppTriggerRecurrenceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#create LogicAppTriggerRecurrence#create}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#delete LogicAppTriggerRecurrence#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#read LogicAppTriggerRecurrence#read}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#update LogicAppTriggerRecurrence#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#create LogicAppTriggerRecurrence#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#delete LogicAppTriggerRecurrence#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#read LogicAppTriggerRecurrence#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/logic_app_trigger_recurrence#update LogicAppTriggerRecurrence#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogicAppTriggerRecurrenceScheduleOutputReference <a name="LogicAppTriggerRecurrenceScheduleOutputReference" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppTriggerRecurrenceScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.resetAtTheseHours">ResetAtTheseHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.resetAtTheseMinutes">ResetAtTheseMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.resetOnTheseDays">ResetOnTheseDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAtTheseHours` <a name="ResetAtTheseHours" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.resetAtTheseHours"></a>

```csharp
private void ResetAtTheseHours()
```

##### `ResetAtTheseMinutes` <a name="ResetAtTheseMinutes" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.resetAtTheseMinutes"></a>

```csharp
private void ResetAtTheseMinutes()
```

##### `ResetOnTheseDays` <a name="ResetOnTheseDays" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.resetOnTheseDays"></a>

```csharp
private void ResetOnTheseDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.atTheseHoursInput">AtTheseHoursInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.atTheseMinutesInput">AtTheseMinutesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.onTheseDaysInput">OnTheseDaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.atTheseHours">AtTheseHours</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.atTheseMinutes">AtTheseMinutes</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.onTheseDays">OnTheseDays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule">LogicAppTriggerRecurrenceSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AtTheseHoursInput`<sup>Optional</sup> <a name="AtTheseHoursInput" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.atTheseHoursInput"></a>

```csharp
public double[] AtTheseHoursInput { get; }
```

- *Type:* double[]

---

##### `AtTheseMinutesInput`<sup>Optional</sup> <a name="AtTheseMinutesInput" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.atTheseMinutesInput"></a>

```csharp
public double[] AtTheseMinutesInput { get; }
```

- *Type:* double[]

---

##### `OnTheseDaysInput`<sup>Optional</sup> <a name="OnTheseDaysInput" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.onTheseDaysInput"></a>

```csharp
public string[] OnTheseDaysInput { get; }
```

- *Type:* string[]

---

##### `AtTheseHours`<sup>Required</sup> <a name="AtTheseHours" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.atTheseHours"></a>

```csharp
public double[] AtTheseHours { get; }
```

- *Type:* double[]

---

##### `AtTheseMinutes`<sup>Required</sup> <a name="AtTheseMinutes" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.atTheseMinutes"></a>

```csharp
public double[] AtTheseMinutes { get; }
```

- *Type:* double[]

---

##### `OnTheseDays`<sup>Required</sup> <a name="OnTheseDays" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.onTheseDays"></a>

```csharp
public string[] OnTheseDays { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.internalValue"></a>

```csharp
public LogicAppTriggerRecurrenceSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule">LogicAppTriggerRecurrenceSchedule</a>

---


### LogicAppTriggerRecurrenceTimeoutsOutputReference <a name="LogicAppTriggerRecurrenceTimeoutsOutputReference" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppTriggerRecurrenceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



