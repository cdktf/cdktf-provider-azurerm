# `automationHybridRunbookWorker` Submodule <a name="`automationHybridRunbookWorker` Submodule" id="@cdktf/provider-azurerm.automationHybridRunbookWorker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationHybridRunbookWorker <a name="AutomationHybridRunbookWorker" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_hybrid_runbook_worker azurerm_automation_hybrid_runbook_worker}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationHybridRunbookWorker(Construct Scope, string Id, AutomationHybridRunbookWorkerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig">AutomationHybridRunbookWorkerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig">AutomationHybridRunbookWorkerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.putTimeouts"></a>

```csharp
private void PutTimeouts(AutomationHybridRunbookWorkerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts">AutomationHybridRunbookWorkerTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AutomationHybridRunbookWorker resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AutomationHybridRunbookWorker.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AutomationHybridRunbookWorker.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AutomationHybridRunbookWorker.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AutomationHybridRunbookWorker.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AutomationHybridRunbookWorker resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AutomationHybridRunbookWorker to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AutomationHybridRunbookWorker that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_hybrid_runbook_worker#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AutomationHybridRunbookWorker to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.lastSeenDateTime">LastSeenDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.registrationDateTime">RegistrationDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference">AutomationHybridRunbookWorkerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerName">WorkerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerType">WorkerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.automationAccountNameInput">AutomationAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.vmResourceIdInput">VmResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerGroupNameInput">WorkerGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerIdInput">WorkerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.automationAccountName">AutomationAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.vmResourceId">VmResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerGroupName">WorkerGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerId">WorkerId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `LastSeenDateTime`<sup>Required</sup> <a name="LastSeenDateTime" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.lastSeenDateTime"></a>

```csharp
public string LastSeenDateTime { get; }
```

- *Type:* string

---

##### `RegistrationDateTime`<sup>Required</sup> <a name="RegistrationDateTime" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.registrationDateTime"></a>

```csharp
public string RegistrationDateTime { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.timeouts"></a>

```csharp
public AutomationHybridRunbookWorkerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference">AutomationHybridRunbookWorkerTimeoutsOutputReference</a>

---

##### `WorkerName`<sup>Required</sup> <a name="WorkerName" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerName"></a>

```csharp
public string WorkerName { get; }
```

- *Type:* string

---

##### `WorkerType`<sup>Required</sup> <a name="WorkerType" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerType"></a>

```csharp
public string WorkerType { get; }
```

- *Type:* string

---

##### `AutomationAccountNameInput`<sup>Optional</sup> <a name="AutomationAccountNameInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.automationAccountNameInput"></a>

```csharp
public string AutomationAccountNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VmResourceIdInput`<sup>Optional</sup> <a name="VmResourceIdInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.vmResourceIdInput"></a>

```csharp
public string VmResourceIdInput { get; }
```

- *Type:* string

---

##### `WorkerGroupNameInput`<sup>Optional</sup> <a name="WorkerGroupNameInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerGroupNameInput"></a>

```csharp
public string WorkerGroupNameInput { get; }
```

- *Type:* string

---

##### `WorkerIdInput`<sup>Optional</sup> <a name="WorkerIdInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerIdInput"></a>

```csharp
public string WorkerIdInput { get; }
```

- *Type:* string

---

##### `AutomationAccountName`<sup>Required</sup> <a name="AutomationAccountName" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.automationAccountName"></a>

```csharp
public string AutomationAccountName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `VmResourceId`<sup>Required</sup> <a name="VmResourceId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.vmResourceId"></a>

```csharp
public string VmResourceId { get; }
```

- *Type:* string

---

##### `WorkerGroupName`<sup>Required</sup> <a name="WorkerGroupName" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerGroupName"></a>

```csharp
public string WorkerGroupName { get; }
```

- *Type:* string

---

##### `WorkerId`<sup>Required</sup> <a name="WorkerId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerId"></a>

```csharp
public string WorkerId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationHybridRunbookWorkerConfig <a name="AutomationHybridRunbookWorkerConfig" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationHybridRunbookWorkerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AutomationAccountName,
    string ResourceGroupName,
    string VmResourceId,
    string WorkerGroupName,
    string WorkerId,
    string Id = null,
    AutomationHybridRunbookWorkerTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.automationAccountName">AutomationAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_hybrid_runbook_worker#automation_account_name AutomationHybridRunbookWorker#automation_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_hybrid_runbook_worker#resource_group_name AutomationHybridRunbookWorker#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.vmResourceId">VmResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_hybrid_runbook_worker#vm_resource_id AutomationHybridRunbookWorker#vm_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.workerGroupName">WorkerGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_hybrid_runbook_worker#worker_group_name AutomationHybridRunbookWorker#worker_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.workerId">WorkerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_hybrid_runbook_worker#worker_id AutomationHybridRunbookWorker#worker_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_hybrid_runbook_worker#id AutomationHybridRunbookWorker#id}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts">AutomationHybridRunbookWorkerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AutomationAccountName`<sup>Required</sup> <a name="AutomationAccountName" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.automationAccountName"></a>

```csharp
public string AutomationAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_hybrid_runbook_worker#automation_account_name AutomationHybridRunbookWorker#automation_account_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_hybrid_runbook_worker#resource_group_name AutomationHybridRunbookWorker#resource_group_name}.

---

##### `VmResourceId`<sup>Required</sup> <a name="VmResourceId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.vmResourceId"></a>

```csharp
public string VmResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_hybrid_runbook_worker#vm_resource_id AutomationHybridRunbookWorker#vm_resource_id}.

---

##### `WorkerGroupName`<sup>Required</sup> <a name="WorkerGroupName" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.workerGroupName"></a>

```csharp
public string WorkerGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_hybrid_runbook_worker#worker_group_name AutomationHybridRunbookWorker#worker_group_name}.

---

##### `WorkerId`<sup>Required</sup> <a name="WorkerId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.workerId"></a>

```csharp
public string WorkerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_hybrid_runbook_worker#worker_id AutomationHybridRunbookWorker#worker_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_hybrid_runbook_worker#id AutomationHybridRunbookWorker#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.timeouts"></a>

```csharp
public AutomationHybridRunbookWorkerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts">AutomationHybridRunbookWorkerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_hybrid_runbook_worker#timeouts AutomationHybridRunbookWorker#timeouts}

---

### AutomationHybridRunbookWorkerTimeouts <a name="AutomationHybridRunbookWorkerTimeouts" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationHybridRunbookWorkerTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_hybrid_runbook_worker#create AutomationHybridRunbookWorker#create}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_hybrid_runbook_worker#delete AutomationHybridRunbookWorker#delete}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_hybrid_runbook_worker#read AutomationHybridRunbookWorker#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_hybrid_runbook_worker#create AutomationHybridRunbookWorker#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_hybrid_runbook_worker#delete AutomationHybridRunbookWorker#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/automation_hybrid_runbook_worker#read AutomationHybridRunbookWorker#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationHybridRunbookWorkerTimeoutsOutputReference <a name="AutomationHybridRunbookWorkerTimeoutsOutputReference" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationHybridRunbookWorkerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



